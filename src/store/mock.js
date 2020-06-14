export default {
  "boards": {
    "test": {
      "title": "Test",
      "id": 282
    }
  },
  "currentBoard": {
    "id": "282",
    "title": "Test"
  },
  "isDashboardMetaboxClosed": "",
  "lists": [
    {
      "term_id": 283,
      "name": "Backlog",
      "slug": "test-backlog",
      "term_group": 0,
      "term_taxonomy_id": 283,
      "taxonomy": "wpkanban_board",
      "description": "For cards that are still being considered",
      "parent": 282,
      "count": 1,
      "filter": "raw",
      "cards": [
        {
          "title": "Should have content icon",
          "id": 401,
          "hasContent": "1",
          "editURL": "http://thepersonaldev.local/wp-admin/post.php?post=401&action=edit"
        }
      ]
    },
    {
      "term_id": 284,
      "name": "Todo",
      "slug": "test-todo",
      "term_group": 0,
      "term_taxonomy_id": 284,
      "taxonomy": "wpkanban_board",
      "description": "For cards that haven't been started yet",
      "parent": 282,
      "count": 1,
      "filter": "raw",
      "cards": [
        {
          "title": "Should NOT have content icon",
          "id": 402,
          "hasContent": "",
          "editURL": "http://thepersonaldev.local/wp-admin/post.php?post=402&action=edit"
        }
      ]
    },
    {
      "term_id": 285,
      "name": "Doing",
      "slug": "test-doing",
      "term_group": 0,
      "term_taxonomy_id": 285,
      "taxonomy": "wpkanban_board",
      "description": "For cards that are actively being worked on",
      "parent": 282,
      "count": 0,
      "filter": "raw",
      "cards": []
    },
    {
      "term_id": 286,
      "name": "Done",
      "slug": "test-done",
      "term_group": 0,
      "term_taxonomy_id": 286,
      "taxonomy": "wpkanban_board",
      "description": "For completed cards",
      "parent": 282,
      "count": 0,
      "filter": "raw",
      "cards": []
    }
  ]
}