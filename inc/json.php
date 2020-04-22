<?php

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
  }
  
  echo '<script>window.WPKanban = {lists: ' . json_encode($lists) . '}</script>';
}