<?php

namespace SimpleProductCart\Route\V1;

use SimpleProductCart\Core\Adapter\JsonDataAdapter;
use SimpleProductCart\Core\Response;
use SimpleProductCart\Core\RouteInterface;
use SimpleProductCart\Model\Product;

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
