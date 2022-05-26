<?php

namespace SimpleProductCart\Api\Core;

interface RouteInterface
{
    public $method;
    public $path;

    public function handle();
}
