<?php
/**
 * Clear cache and setup transient notice
 */
register_activation_hook(WPKANBAN_PLUGIN_FILE, function () {
  wpkanban_register_cpt();
  flush_rewrite_rules();
  set_transient('wpkanban_activation', true, 60);
});

add_action('admin_notices', function () {
  if (get_transient('wpkanban_activation')) {
    echo '<div class="updated notice is-dismissible"><p>WP Kanban Initialized!</p></div>';
    delete_transient('wpkanban_activation');
  }
});