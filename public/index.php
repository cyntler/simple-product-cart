<?php

use SimpleProductCart\Core\Application;

require_once '../vendor/autoload.php';

define('ROOT_PATH', realpath(__DIR__ . '/../'));

$uri = trim(parse_url($_SERVER['REQUEST_URI'])['path'], '/');
$uriRootPath = ROOT_PATH . '/public/' . $uri;

if (file_exists($uriRootPath) && is_file($uriRootPath)) {
    exit();
    return false;
}

$indexHtmlFilePath = ROOT_PATH . '/public/webapp/index.html';
Application::run($uri, $indexHtmlFilePath);
