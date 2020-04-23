<?php
/**
 * Plugin name: WP Kanban
 * Plugin URI: https://github.com/ThePersonalDev/wpkanban
 * Description: A kanban dashboard widget to help you project manage your WordPress site!
 * Author: Oz Ramos
 * Author URI: https://thepersonaldev.com
 * License: Apache 2.0
 * License URI: http://www.apache.org/licenses/LICENSE-2.0
 */
define('WPKANBAN_PLUGIN_FILE', __FILE__);
require plugin_dir_path(__FILE__) . '/inc/cpt/kanban.php'; 
require plugin_dir_path(__FILE__) . '/inc/activation.php';
require plugin_dir_path(__FILE__) . '/inc/json.php';
require plugin_dir_path(__FILE__) . '/inc/ajax.php';

/**
 * Inject Vue Kanban app
 */
add_action('load-index.php', function () {
  add_action('admin_enqueue_scripts', function () {
    $plugin_data = get_plugin_data(__FILE__);

    wp_enqueue_style('wpkanban', plugin_dir_url(__FILE__) . '/dist/css/app.css', [], $plugin_data['Version']);

    wp_enqueue_script('wpkanban-vue-vendor', plugin_dir_url(__FILE__) . '/dist/js/chunk-vendors.js', [], $plugin_data['Version'], true);
    wp_enqueue_script('wpkanban-vue', plugin_dir_url(__FILE__) . '/dist/js/app.js', [], $plugin_data['Version'], true);

    wpkanban_generate_board_json();
  });

  add_action('admin_notices', function () { ?>
    <div id="wpkanban" class="notice"></div>
  <?php });
});