<?php

namespace SimpleProductCart\Api\Core;

class Application
{
    public static function run($urlPath, $indexHtmlFilePath)
    {
        if (in_array($urlPath, ['', '/']) && file_exists($indexHtmlFilePath)) {
            require_once $indexHtmlFilePath;
        }
    }
}
