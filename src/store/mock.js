export default {
  "boards": {
    "default": {
      "title": "Default",
      "id": 30
    },
    "ideas": {
      "title": "Ideas",
      "id": 42
    }
  },
  "currentBoard": "30",
  "isDashboardMetaboxClosed": "",
  "lists": [
    {
      "term_id": 31,
      "name": "Backlog",
      "slug": "backlog",
      "term_group": 0,
      "term_taxonomy_id": 31,
      "taxonomy": "wpkanban_board",
      "description": "For cards that are still being considered",
      "parent": 30,
      "count": 0,
      "filter": "raw",
      "cards": []
    },
    {
      "term_id": 32,
      "name": "Todo",
      "slug": "todo",
      "term_group": 0,
      "term_taxonomy_id": 32,
      "taxonomy": "wpkanban_board",
      "description": "For cards that haven't been started yet",
      "parent": 30,
      "count": 2,
      "filter": "raw",
      "cards": [
        {
          "title": "🎨 WP Kanbanner Theme",
          "id": 318,
          "editURL": "http://thepersonaldev.local/wp-admin/post.php?post=318&action=edit"
        },
        {
          "title": "🔌 Link card blocks",
          "id": 328,
          "editURL": "http://thepersonaldev.local/wp-admin/post.php?post=328&action=edit"
        }
      ]
    },
    {
      "term_id": 33,
      "name": "Doing",
      "slug": "default-doing",
      "term_group": 0,
      "term_taxonomy_id": 33,
      "taxonomy": "wpkanban_board",
      "description": "For cards that are actively being worked on",
      "parent": 30,
      "count": 2,
      "filter": "raw",
      "cards": [
        {
          "title": "🔌 Device mockup block",
          "id": 322,
          "editURL": "http://thepersonaldev.local/wp-admin/post.php?post=322&action=edit"
        },
        {
          "title": "🔌 WP Kanbanner",
          "id": 317,
          "editURL": "http://thepersonaldev.local/wp-admin/post.php?post=317&action=edit"
        }
      ]
    },
    {
      "term_id": 34,
      "name": "Done",
      "slug": "done",
      "term_group": 0,
      "term_taxonomy_id": 34,
      "taxonomy": "wpkanban_board",
      "description": "For completed cards",
      "parent": 30,
      "count": 1,
      "filter": "raw",
      "cards": [
        {
          "title": "🎨 Personal Theme",
          "id": 316,
          "editURL": "http://thepersonaldev.local/wp-admin/post.php?post=316&action=edit"
        }
      ]
    }
  ],
  "ajaxurl": "http://thepersonaldev.local/wp-admin/admin-ajax.php",
  "nonce": "7a06dc390b"
}