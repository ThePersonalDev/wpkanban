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
    wpkanban_create_board('Default', 'Your default WP Kanban board');

    echo '<div class="updated notice is-dismissible"><p>WP Kanban: Created default board</p></div>';
  }
}