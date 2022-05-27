<?php

namespace SimpleProductCart\Api\Core;

class Utils
{
    public static function getApiRouteNameByUrlPath($urlPath)
    {
        if (substr($urlPath, 0, 3) === 'api') {
            $urlParts = explode('/', $urlPath);
            array_shift($urlParts);

            for ($i = 0; $i < count($urlParts); $i += 1) {
                $urlParts[$i] = str_replace(
                    ' ',
                    '',
                    ucwords(str_replace('-', ' ', $urlParts[$i]))
                );
            }

            $apiRouteClassName =
                '\\SimpleProductCart\\Api\\Route\\' . implode('\\', $urlParts);

            if (
                class_exists($apiRouteClassName) &&
                class_implements($apiRouteClassName, RouteInterface::class)
            ) {
                return $apiRouteClassName;
            }
        }

        return false;
    }

    public static function fileExists($path)
    {
        return file_exists($path);
    }
}
