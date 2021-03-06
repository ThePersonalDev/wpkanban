<?php
/**
 * Setup CPT
 */
add_action('init', 'wpkanban_register_cpt');
function wpkanban_register_cpt () {
  register_taxonomy('wpkanban_board', 'wpkanban', [
    'labels' => [
      'name' => 'Boards',
      'singular_name' => 'Board'
    ],
    'public' => true,
    'hierarchical' => true,
    'show_in_rest' => true,
    'rewrite' => ['slug' => 'wpkanban-board']
  ]);

  register_post_type('wpkanban', [
    'labels' => [
      'name' => 'WP Kanban'
    ],
    'description' => 'Cards belonging to your Kanban project management boards',
    'public' => true,
    'menu_icon' => 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJsYXllci1ncm91cCIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWxheWVyLWdyb3VwIGZhLXctMTYgZmEtN3giIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImJvcmRlci1ib3R0b20tY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO2JvcmRlci1sZWZ0LWNvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTtib3JkZXItcmlnaHQtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO2JvcmRlci10b3AtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO2NvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MTEycHg7aGVpZ2h0OjExMnB4O2xpbmUtaGVpZ2h0OjEyOC44cHg7b3V0bGluZS1jb2xvcjpyZ2IoMTczLCAxODEsIDE4OSk7b3ZlcmZsb3cteDp2aXNpYmxlO292ZXJmbG93LXk6dmlzaWJsZTt0ZXh0LWRlY29yYXRpb246bm9uZSBzb2xpZCByZ2IoMTczLCAxODEsIDE4OSk7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTt2ZXJ0aWNhbC1hbGlnbjotMTRweDt3aWR0aDoxMTJweDtjb2x1bW4tcnVsZS1jb2xvcjpyZ2IoMTczLCAxODEsIDE4OSk7cGVyc3BlY3RpdmUtb3JpZ2luOjU2cHggNTZweDstd2Via2l0LXRleHQtZW1waGFzaXMtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpOy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTstd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTt0cmFuc2Zvcm0tb3JpZ2luOjU2cHggNTZweDtjYXJldC1jb2xvcjpyZ2IoMTczLCAxODEsIDE4OSk7Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMi40MSAxNDguMDJsMjMyLjk0IDEwNS42N2M2LjggMy4wOSAxNC40OSAzLjA5IDIxLjI5IDBsMjMyLjk0LTEwNS42N2MxNi41NS03LjUxIDE2LjU1LTMyLjUyIDAtNDAuMDNMMjY2LjY1IDIuMzFhMjUuNjA3IDI1LjYwNyAwIDAgMC0yMS4yOSAwTDEyLjQxIDEwNy45OGMtMTYuNTUgNy41MS0xNi41NSAzMi41MyAwIDQwLjA0em00ODcuMTggODguMjhsLTU4LjA5LTI2LjMzLTE2MS42NCA3My4yN2MtNy41NiAzLjQzLTE1LjU5IDUuMTctMjMuODYgNS4xN3MtMTYuMjktMS43NC0yMy44Ni01LjE3TDcwLjUxIDIwOS45N2wtNTguMSAyNi4zM2MtMTYuNTUgNy41LTE2LjU1IDMyLjUgMCA0MGwyMzIuOTQgMTA1LjU5YzYuOCAzLjA4IDE0LjQ5IDMuMDggMjEuMjkgMEw0OTkuNTkgMjc2LjNjMTYuNTUtNy41IDE2LjU1LTMyLjUgMC00MHptMCAxMjcuOGwtNTcuODctMjYuMjMtMTYxLjg2IDczLjM3Yy03LjU2IDMuNDMtMTUuNTkgNS4xNy0yMy44NiA1LjE3cy0xNi4yOS0xLjc0LTIzLjg2LTUuMTdMNzAuMjkgMzM3Ljg3IDEyLjQxIDM2NC4xYy0xNi41NSA3LjUtMTYuNTUgMzIuNSAwIDQwbDIzMi45NCAxMDUuNTljNi44IDMuMDggMTQuNDkgMy4wOCAyMS4yOSAwTDQ5OS41OSA0MDQuMWMxNi41NS03LjUgMTYuNTUtMzIuNSAwLTQweiIgY2xhc3M9IiIgc3R5bGU9ImJvcmRlci1ib3R0b20tY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO2JvcmRlci1sZWZ0LWNvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTtib3JkZXItcmlnaHQtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO2JvcmRlci10b3AtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO2NvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTEycHg7aGVpZ2h0OmF1dG87bGluZS1oZWlnaHQ6MTI4LjhweDtvdXRsaW5lLWNvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTtvdmVyZmxvdy14OnZpc2libGU7b3ZlcmZsb3cteTp2aXNpYmxlO3RleHQtZGVjb3JhdGlvbjpub25lIHNvbGlkIHJnYigxNzMsIDE4MSwgMTg5KTt0ZXh0LWRlY29yYXRpb24tY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO3dpZHRoOmF1dG87Y29sdW1uLXJ1bGUtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO3BlcnNwZWN0aXZlLW9yaWdpbjowcHggMHB4Oy13ZWJraXQtdGV4dC1lbXBoYXNpcy1jb2xvcjpyZ2IoMTczLCAxODEsIDE4OSk7LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpOy13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6cmdiKDE3MywgMTgxLCAxODkpO3RyYW5zZm9ybS1vcmlnaW46MHB4IDBweDtmaWxsOnJnYigxNzMsIDE4MSwgMTg5KTtkOnBhdGgoJnF1b3Q7TSAxMi40MSAxNDguMDIgTCAyNDUuMzUgMjUzLjY5IEMgMjUyLjE1IDI1Ni43OCAyNTkuODQgMjU2Ljc4IDI2Ni42NCAyNTMuNjkgTCA0OTkuNTggMTQ4LjAyIEMgNTE2LjEzIDE0MC41MSA1MTYuMTMgMTE1LjUgNDk5LjU4IDEwNy45OSBMIDI2Ni42NSAyLjMxIEEgMjUuNjA3IDI1LjYwNyAwIDAgMCAyNDUuMzYgMi4zMSBMIDEyLjQxIDEwNy45OCBDIC00LjE0IDExNS40OSAtNC4xNCAxNDAuNTEgMTIuNDEgMTQ4LjAyIFogTSA0OTkuNTkgMjM2LjMgTCA0NDEuNSAyMDkuOTcgTCAyNzkuODYgMjgzLjI0IEMgMjcyLjMgMjg2LjY3IDI2NC4yNyAyODguNDEgMjU2IDI4OC40MSBTIDIzOS43MSAyODYuNjcgMjMyLjE0IDI4My4yNCBMIDcwLjUxIDIwOS45NyBMIDEyLjQxIDIzNi4zIEMgLTQuMTQgMjQzLjggLTQuMTQgMjY4LjggMTIuNDEgMjc2LjMgTCAyNDUuMzUgMzgxLjg5IEMgMjUyLjE1IDM4NC45NyAyNTkuODQgMzg0Ljk3IDI2Ni42NCAzODEuODkgTCA0OTkuNTkgMjc2LjMgQyA1MTYuMTQgMjY4LjggNTE2LjE0IDI0My44IDQ5OS41OSAyMzYuMyBaIE0gNDk5LjU5IDM2NC4xIEwgNDQxLjcyIDMzNy44NyBMIDI3OS44NiA0MTEuMjQgQyAyNzIuMyA0MTQuNjcgMjY0LjI3IDQxNi40MSAyNTYgNDE2LjQxIFMgMjM5LjcxIDQxNC42NyAyMzIuMTQgNDExLjI0IEwgNzAuMjkgMzM3Ljg3IEwgMTIuNDEgMzY0LjEgQyAtNC4xNCAzNzEuNiAtNC4xNCAzOTYuNiAxMi40MSA0MDQuMSBMIDI0NS4zNSA1MDkuNjkgQyAyNTIuMTUgNTEyLjc3IDI1OS44NCA1MTIuNzcgMjY2LjY0IDUwOS42OSBMIDQ5OS41OSA0MDQuMSBDIDUxNi4xNCAzOTYuNiA1MTYuMTQgMzcxLjYgNDk5LjU5IDM2NC4xIFomcXVvdDspO2NhcmV0LWNvbG9yOnJnYigxNzMsIDE4MSwgMTg5KTsiLz48L3N2Zz4=',
    'supports' => ['title', 'editor', 'page-attributes'],
    'show_in_rest' => true,
    'rewrite' => ['slug' => 'kanban'],
    'taxonomies' => ['wpkanban_board', 'wpkanban_list']
  ]);
}

/**
 * Adds "contains comment" icon to card title by checking for content onSave
 */
add_action('save_post_wpkanban', function ($postID, $post) {
  update_post_meta($postID, 'hasContent', !empty(trim($post->post_content)));
}, 10, 2);

/**
 * Creates a board
 * @param title The title to use
 * @param description The description to display
 * @param shouldCreateDefaults Whether to create default columns and cards
 * 
 * @return board->term_id
 */
function wpkanban_create_board ($title, $description = '', $args = []) {
  // Default board
  $board = wp_insert_term($title, 'wpkanban_board', [
    'slug' => sanitize_title($title),
    'description' => $description
  ]);
  update_option('wpkanban_selected_dashboard_board', $board['term_id']);

  if (array_key_exists('createDefaultColumns', $args) && $args['createDefaultColumns']) {
    // Default lists
    $backlog = wpkanban_create_list($board['term_id'], $title, 'Backlog', 0, 'For cards that are still being considered');
    wpkanban_create_list($board['term_id'], $title, 'Todo', 1, 'For cards that haven\'t been started yet');
    wpkanban_create_list($board['term_id'], $title, 'Doing', 2, 'For cards that are actively being worked on');
    wpkanban_create_list($board['term_id'], $title, 'Done', 3, 'For completed cards');
  
    // Create default posts
    if (array_key_exists('createDefaultCards', $args) && $args['createDefaultCards']) {
      wpkanban_create_card($backlog['term_id'], ['title' => 'Card A', 'menu_order' => 0]);
      wpkanban_create_card($backlog['term_id'], ['title' => 'Card B', 'menu_order' => 1]);
      wpkanban_create_card($backlog['term_id'], ['title' => 'Card C', 'menu_order' => 2]);
    }
  }

  return $board['term_id'];
}

/**
 * Add cards to a term
 * 
 * @return $postId
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

/**
 * Adds a list to a board
 */
function wpkanban_create_list ($board_id, $boardTitle, $title, $order, $description = '') {
  $term = wp_insert_term($title, 'wpkanban_board', [
    'slug' => sanitize_title($boardTitle . '-' . $title),
    'description' => $description,
    'parent' => intval($board_id)
  ]);
  update_term_meta($term['term_id'], 'order', intval($order));

  return $termId;
}