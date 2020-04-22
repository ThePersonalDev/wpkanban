export default {lists: [
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
    cards: [{title: 'Card A'}, {title: 'Card B'}, {title: 'Card C'}]
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
    cards: [{title: 'Card D'}, {title: 'Card E'}, {title: 'Card F'}]
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
    cards: [{title: 'Card G'}, {title: 'Card H'}, {title: 'Card I'}]
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
]}