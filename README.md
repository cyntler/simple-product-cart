# simple-product-cart

A simple product cart application based on Vue.js and PHP.

## UI Design / Figma

I designed this project in Figma.

<a href="https://www.figma.com/file/OHBATl796CzHP4Aki4uwdD/Simple-Product-Cart?node-id=0%3A1" target="_blank">Take a look!</a>

## Requirements

If you want to run this project locally, you need **Docker** installed on your system.

## How to run?

Following command should build web app by Webpack and start PHP built-in server.<br>
The application should be available at: http://localhost:3333.

```sh
./scripts/run.sh
```

## How to develop?

Following command should run both PHP built-in server and Webpack in the watching mode.<br>The application should be served at: http://localhost:3000.

```sh
./scripts/develop.sh
```

## Run Composer command without locally Composer installing

If you don't have Composer installed locally, you can use the following command to run any Composer command.

```sh
./scripts/composer.sh command
```

For example:

```sh
./scripts/composer.sh dump-autoload
```
