<?php

/**
 * Updates column order
 */
add_action('wp_ajax_persist_list_order', function () {
  check_ajax_referer('wpkanban');

  $lists = json_decode($_POST['order']);

  $data = [];
  foreach ($lists as $key=>$listId) {
    array_push($data, $list);
    update_term_meta($listId, 'order', $key);
  }
  
  wp_die();
});

/**
 * Persist card order
 */
add_action('wp_ajax_persist_card_order', function () {
  check_ajax_referer('wpkanban');
  wp_die();
});