<?php
/**
 * Clear cache and setup transient notice
 */
register_activation_hook(WPKANBAN_PLUGIN_FILE, function () {
  wpkanban_register_cpt();
  flush_rewrite_rules();
  set_transient('wpkanban_activation', true, 60);
});

/**
 * Create default board, lists, and cards
 */
add_action('admin_notices', function () {
  if (get_transient('wpkanban_activation')) {
    echo '<div class="updated notice is-dismissible"><p>WP Kanban Initialized!</p></div>';
    delete_transient('wpkanban_activation');

    wpkanban_maybe_create_default_board();
  }
});

/**
 * Create default kanban board if one doesn't exist
 */
function wpkanban_maybe_create_default_board () {
  $boards = get_terms([
    'taxonomy' => 'wpkanban_board',
    'hide_empty' => false
  ]);

  if (!count($boards)) {
    // Default board
    $board = wp_insert_term('Default', 'wpkanban_board', [
      'slug' => 'default',
      'description' => 'Your default WP Kanban board'
    ]);
    update_option('wpkanban_selected_dashboard_board', $board->term_id);

    // Backlog list
    $backlog = wp_insert_term('Backlog', 'wpkanban_board', [
      'slug' => 'default-backlog',
      'description' => 'For cards that are still being considered',
      'parent' => $board['term_id']
    ]);
    update_term_meta($backlog['term_id'], 'order', 0);

    // Create default posts
    wpkanban_create_card($backlog['term_id'], ['title' => 'Card A', 'menu_order' => 0]);
    wpkanban_create_card($backlog['term_id'], ['title' => 'Card B', 'menu_order' => 1]);
    wpkanban_create_card($backlog['term_id'], ['title' => 'Card C', 'menu_order' => 2]);
    
    // Todo list
    $todo = wp_insert_term('Todo', 'wpkanban_board', [
      'slug' => 'default-todo',
      'description' => 'For cards that haven\'t been started yet',
      'parent' => $board['term_id']
    ]);
    update_term_meta($todo['term_id'], 'order', 1);

    // Doing list
    $doing = wp_insert_term('Doing', 'wpkanban_board', [
      'slug' => 'default-doing',
      'description' => 'For cards that are actively being worked on',
      'parent' => $board['term_id']
    ]);
    update_term_meta($doing['term_id'], 'order', 2);

    // Done list
    $done = wp_insert_term('Done', 'wpkanban_board', [
      'slug' => 'default-done',
      'description' => 'For completed cards',
      'parent' => $board['term_id']
    ]);
    update_term_meta($done['term_id'], 'order', 3);

    echo '<div class="updated notice is-dismissible"><p>WP Kanban: Created default board</p></div>';
  }
}

/**
 * Add cards to a term
 */
function wpkanban_create_card ($term_id, $args) {
  $term = get_term($term_id);

  $postId = wp_insert_post([
    'post_title' => $args['title'],
    'post_type' => 'wpkanban',
    'post_status' => 'publish',
    'menu_order' => $args['menu_order'],
    'tax_input' => ['wpkanban_board' => [$term->parent, $term_id]]
  ]);


  return $postId;
}