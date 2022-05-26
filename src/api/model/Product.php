<?php

namespace SimpleProductCart\Api\Model;

class Product
{
    private $name = '';
    private $image;
    private $price;
    private $quantity;

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
    }
}
