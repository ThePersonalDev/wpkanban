<?php

/**
 * Updates column order
 */
add_action('wp_ajax_wpkanban_persist_list_order', function () {
  check_ajax_referer('wpkanban');

  $lists = json_decode($_POST['order']);
  foreach ($lists as $order => $listId) {
    update_term_meta($listId, 'order', $order);
  }
  
  wp_die();
});

/**
 * Persist card order
 */
add_action('wp_ajax_wpkanban_persist_card_order', function () {
  check_ajax_referer('wpkanban');

  $cards = json_decode($_POST['order']);

  foreach ($cards as $order => $cardId) {
    wp_delete_object_term_relationships($cardId, 'wpkanban_board');
    
    wp_update_post([
      'ID' => $cardId,
      'menu_order' => $order,
      'tax_input' => ['wpkanban_board' => $_POST['listId']]
    ]);
  }
  
  wp_die();
});

/**
 * Updates list title
 */
add_action('wp_ajax_wpkanban_update_list_title', function () {
  check_ajax_referer('wpkanban');

  wp_update_term($_POST['listId'], 'wpkanban_board', [
    'name' => $_POST['title'],
    'slug' => sanitize_title($_POST['title'])
  ]);

  wp_die();
});

/**
 * Updates a card title
 */
add_action('wp_ajax_wpkanban_update_card_title', function () {
  check_ajax_referer('wpkanban');

  wp_update_post([
    'ID' => $_POST['cardId'],
    'post_title' => $_POST['title'],
    'post_name' => sanitize_title($_POST['title'])
  ]);

  wp_die();
});

/**
 * Creates a new card in WordPress and returns its ID to the frontend
 */
add_action('wp_ajax_wpkanban_persist_new_card', function () {
  check_ajax_referer('wpkanban');
  
  $id = wpkanban_create_card($_POST['listId'], [
    'title' => '',
    'menu_order' => $_POST['order']
  ]);
  
  wp_send_json([
    'id' => $id,
    'editURL' => get_edit_post_link($id, '')
  ]);
});

/**
 * Deletes the psot
 */
add_action('wp_ajax_wpkanban_persist_card_delete', function () {
  check_ajax_referer('wpkanban');

  wp_delete_post($_POST['id'], true);
  
  wp_die();
});

/**
 * Persist metabox open state
 */
add_action('wp_ajax_wpkanban_persist_dashboard_metabox_open_state', function () {
  check_ajax_referer('wpkanban');

  update_option('wpkanban_is_dashboard_metabox_closed', $_POST['isClosed']);
  
  wp_send_json([
    'isClosed' => $_POST['isClosed']
  ]);
  wp_die();
});

/**
 * Change the board
 */
add_action('wp_ajax_wpkanban_change_dashboard_board', function () {
  check_ajax_referer('wpkanban');

  $board = wpkanban_generate_board_json($_POST['board']);
  update_option('wpkanban_selected_dashboard_board', $_POST['board']);
  
  wp_send_json($board);
});

/**
 * Create a board and change to it
 */
add_action('wp_ajax_wpkanban_create_board', function () {
  check_ajax_referer('wpkanban');

  $boardId = wpkanban_create_board($_POST['title'], [
    'createDefaultColumns' => $_POST['shouldCreateDefaultColumns']
  ]);

  wp_send_json(wpkanban_generate_board_json($boardId));
});