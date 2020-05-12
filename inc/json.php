<?php

/**
 * Generates Board data
 * - List of cards
 * - Board meta data
 */
function wpkanban_generate_board_json () {
  $board = get_terms([
    'taxonomy' => 'wpkanban_board',
    'parent' => 0,
    'hide_empty' => false
  ]);

  if (count($board)) {
    $board = $board[0];
    $lists = get_terms([
      'taxonomy' => 'wpkanban_board',
      'parent' => $board->term_id,
      'hide_empty' => false,
      'orderby' => 'meta_value_num',
      'order' => 'ASC',
      'meta_key' => 'order',
      'meta_compare' => 'NUMERIC'
    ]);

    // Get card data
    foreach ($lists as $key => $list) {
      $lists[$key]->cards = [];

      $cards = get_posts([
        'post_type' => 'wpkanban',
        'numberposts' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
        'tax_query' => [
          [
            'taxonomy' => 'wpkanban_board',
            'field' => 'term_id',
            'terms' => $list->term_id
          ]
        ]
      ]);

      if (count($cards)) {
        foreach($cards as $card) {
          array_push($lists[$key]->cards, [
            'title' => $card->post_title,
            'id' => $card->ID,
            'editURL' => get_edit_post_link($card->ID, '')
          ]);
        }
      }
    }
  }

  // Board metadata
  $isDashboardMetaboxClosed = get_option('wpkanban_is_dashboard_metabox_closed', false);
 
  // Include script
  wp_localize_script('wpkanban-vue', 'WPKanban', [
    'isDashboardMetaboxClosed' => $isDashboardMetaboxClosed == 'true' ? true : false,
    'lists' => $lists,
    'ajaxurl' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('wpkanban')
  ]);
}