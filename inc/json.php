<?php

/**
 * Generates Board data
 * - List of cards
 * - Board meta data
 * 
 * @param $boardIdToSelect The board ID to select
 */
function wpkanban_generate_board_json ($boardIdToSelect = false) {
  $boardList = get_terms([
    'taxonomy' => 'wpkanban_board',
    'parent' => 0,
    'hide_empty' => false
  ]);

  if (count($boardList)) {
    // Get selected board
    if ($boardIdToSelect) {
      $selectedBoardId = $boardIdToSelect;
    } else {
      $selectedBoardId = get_option('wpkanban_selected_dashboard_board', $boardList[0]->term_id);
    }
    $selectedBoard = get_terms([
      'taxonomy' => 'wpkanban_board',
      'parent' => 0,
      'hide_empty' => false,
      'include' => [$selectedBoardId]
    ]);

    // No boards found
    if (!$selectedBoard) {
      return wpkanban_generate_empty_board_json();
    }
    
    $selectedBoard = $selectedBoard[0];
    
    // Get lists for selected board
    $lists = get_terms([
      'taxonomy' => 'wpkanban_board',
      'parent' => $selectedBoardId,
      'hide_empty' => false,
      'orderby' => 'meta_value_num',
      'order' => 'ASC',
      'meta_key' => 'order',
      'meta_compare' => 'NUMERIC'
    ]);

    // If the list is empty, try again in case user manually created
    // the lists (ie, "order" is null)
    if (!count($lists)) {
      $lists = get_terms([
        'taxonomy' => 'wpkanban_board',
        'parent' => $selectedBoardId,
        'hide_empty' => false
      ]);  
    }

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

    // Generate list of boards
    $boards = [];
    foreach ($boardList as $board) {
      $boards[$board->slug] = [
        'title' => $board->name,
        'id' => $board->term_id
      ];
    }

    // Board metadata
    $isDashboardMetaboxClosed = get_option('wpkanban_is_dashboard_metabox_closed', false);
    return [
      'boards' => $boards,
      'currentBoard' => [
        'id' => $selectedBoardId,
        'title' => $selectedBoard->name
      ],
      'isDashboardMetaboxClosed' => $isDashboardMetaboxClosed == 'true' ? true : false,
      'lists' => $lists,
      'ajaxurl' => admin_url('admin-ajax.php'),
      'nonce' => wp_create_nonce('wpkanban')
    ];
  }
  
  return wpkanban_generate_empty_board_json();
}

/**
 * Genertes empty board data
 */
function wpkanban_generate_empty_board_json () {
  $isDashboardMetaboxClosed = get_option('wpkanban_is_dashboard_metabox_closed', false);

  return [
    'boards' => null,
    'currentBoard' => [
      'id' => 0,
      'title' => 'No boards available'
    ],
    'isDashboardMetaboxClosed' => $isDashboardMetaboxClosed == 'true' ? true : false,
    'lists' => [],
    'ajaxurl' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('wpkanban')
  ];
}