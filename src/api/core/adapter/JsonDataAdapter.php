<?php

namespace SimpleProductCart\Api\Core\Adapter;

use Exception;
use SimpleProductCart\Api\Core\DataAdapterInterface;
use SimpleProductCart\Api\Core\Utils;

class JsonDataAdapter implements DataAdapterInterface
{
    private $jsonData;

    public function __construct($filepath)
    {
        if (!Utils::fileExists($filepath)) {
            throw new Exception('JSON file does not exists: ' . $filepath);
        }

        $this->jsonData = json_decode(file_get_contents($filepath, true));
    }

    public function getData()
    {
        return $this->jsonData;
    }
}
