<?php

namespace SimpleProductCart\Api\Route\V1;

use SimpleProductCart\Api\Core\Adapter\JsonDataAdapter;
use SimpleProductCart\Api\Core\Response;
use SimpleProductCart\Api\Core\RouteInterface;
use SimpleProductCart\Api\Model\Product;

class Products implements RouteInterface
{
    public static function handle(Response $response)
    {
        $jsonDataAdapter = new JsonDataAdapter(
            ROOT_PATH . '/src/assets/products.json'
        );
        $product = new Product($jsonDataAdapter);

        return $response->json($product->getEntries());
    }
}
