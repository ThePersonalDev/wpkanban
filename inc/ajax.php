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