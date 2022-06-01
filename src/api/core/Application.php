<?php

namespace SimpleProductCart\Core;

use Exception;

class Application
{
    public static function run($urlPath, $indexHtmlFilePath)
    {
        $response = new Response();

        $routeClass = Utils::getApiRouteNameByUrlPath($urlPath);
        if (!empty($routeClass)) {
            try {
                return $routeClass::handle($response);
            } catch (Exception $e) {
                return $response->error($e->getMessage());
            }
        }

        if (Utils::fileExists($indexHtmlFilePath)) {
            return $response->htmlFile($indexHtmlFilePath);
        }

        $response->notFound();
    }
}
