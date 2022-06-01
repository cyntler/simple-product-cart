<?php

namespace SimpleProductCart\Core\Adapter;

use Exception;
use SimpleProductCart\Core\DataAdapterInterface;
use SimpleProductCart\Core\Utils;

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
