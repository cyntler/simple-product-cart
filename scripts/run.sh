#!/bin/sh
docker build -t simple-product-cart .
docker run -p 3333:3333 simple-product-cart
