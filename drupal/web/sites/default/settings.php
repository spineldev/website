<?php

// phpcs:ignoreFile

/**
 * Load default configuration.
 */
include $app_root . '/' . $site_path . '/default.settings.php';

/**
 * Get database settings from env variables.
 */
$databases['default']['default'] = [
  'database' => $_ENV['DB_NAME'],
  'username' => $_ENV['DB_USER'],
  'password' => $_ENV['DB_PASS'],
  'host' => $_ENV['DB_HOST'],
  'port' => $_ENV['DB_PORT'],
  'driver' => 'mysql',
  'collation' => 'utf8mb4_general_ci',
];

/**
 * Location of the site configuration files.
 */
$settings['config_sync_directory'] = '../config/sync';

/**
 * Salt for one-time login links, cancel links, form tokens, etc.
 */
$settings['hash_salt'] = 'oC8cFeG_GhtNcO3Bca7eRNiZdbTCqr8f_XzLLrQeoap6gJMXjFsufyi6hmWQhpgBfGX23HXYeg';


/**
 * Private file path.
 */
$settings['file_private_path'] = '../private_files';

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/default.services.yml';
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';

/**
 * Automatically generated include for settings managed by ddev.
 */
if (file_exists(__DIR__ . '/settings.ddev.php') && getenv('IS_DDEV_PROJECT') == 'true') {
  include __DIR__ . '/settings.ddev.php';
}

/**
 * Load local development override configuration, if available.
 */
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
