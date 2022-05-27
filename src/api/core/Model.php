<?php

namespace SimpleProductCart\Api\Core;

class Model
{
    private $entries = [];

    public function __construct(DataAdapterInterface $adapter)
    {
        $adapterData = $adapter->getData();

        if (is_array($adapterData)) {
            $this->entries = $adapterData;
        } else {
            $this->entries = [$adapterData];
        }
    }

    public function getEntries()
    {
        return $this->entries;
    }
}
