FROM node:alpine as frontend
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM composer:2.2 as composer

FROM php:5.6-alpine
COPY --from=composer /usr/bin/composer /usr/bin/composer
WORKDIR /app
COPY composer.* .
RUN composer install --no-autoloader
COPY --from=frontend /app/public/webapp /app/public/webapp
COPY . .
RUN composer dump-autoload

EXPOSE 3333
CMD php -S 0.0.0.0:3333  -t public/
