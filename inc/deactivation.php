<?php
register_deactivation_hook(WPKANBAN_PLUGIN_FILE, function () {
  unregister_post_type('wpkanban');
  flush_rewrite_rules();
});