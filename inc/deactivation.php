<?php
register_deactivation_hook(WPKANBAN_PLUGIN_FILE, function () {
  delete_option('wpkanban_is_dashboard_metabox_closed');
  delete_option('wpkanban_is_dashboard_board');
  unregister_post_type('wpkanban');
  flush_rewrite_rules();
});