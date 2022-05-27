<?php

use SimpleProductCart\Api\Core\Application;

require_once '../vendor/autoload.php';

$rootPath = __DIR__;

$uri = trim(parse_url($_SERVER['REQUEST_URI'])['path'], '/');
$uriRootPath = $rootPath . '/' . $uri;

if (file_exists($uriRootPath) && is_file($uriRootPath)) {
    exit();
    return false;
}

$indexHtmlFilePath = $rootPath . '/webapp/index.html';
Application::run($uri, $indexHtmlFilePath);
