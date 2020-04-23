export default {
  lists: [
    {
      "term_id": 21,
      "name": "Backlog",
      "slug": "default-backlog",
      "term_group": 0,
      "term_taxonomy_id": 21,
      "taxonomy": "wpkanban_board",
      "description": "For cards that are still being considered",
      "parent": 20,
      "count": 0,
      "filter": "raw",
      cards: [{title: 'Card A', id: 0}, {title: 'Card B', id: 1}, {title: 'Card C', id: 2}]
    },
    {
      "term_id": 22,
      "name": "Todo",
      "slug": "default-todo",
      "term_group": 0,
      "term_taxonomy_id": 22,
      "taxonomy": "wpkanban_board",
      "description": "For cards that haven't been started yet",
      "parent": 20,
      "count": 0,
      "filter": "raw",
      cards: [{title: 'Card D', id: 3}, {title: 'Card E', id: 4}, {title: 'Card F', id: 5}]
    },
    {
      "term_id": 23,
      "name": "Doing",
      "slug": "default-doing",
      "term_group": 0,
      "term_taxonomy_id": 23,
      "taxonomy": "wpkanban_board",
      "description": "For cards that are actively being worked on",
      "parent": 20,
      "count": 0,
      "filter": "raw",
      cards: [{title: 'Card G', id: 6}, {title: 'Card H', id: 7}, {title: 'Card I', id: 8}]
    },
    {
      "term_id": 24,
      "name": "Done",
      "slug": "default-done",
      "term_group": 0,
      "term_taxonomy_id": 24,
      "taxonomy": "wpkanban_board",
      "description": "For completed cards",
      "parent": 20,
      "count": 0,
      "filter": "raw",
      cards: []
    }
  ]
}