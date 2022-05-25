FROM php:5.6-alpine

WORKDIR /app
COPY . /app

EXPOSE 3333
CMD cd /app/public && php -S localhost:3333
