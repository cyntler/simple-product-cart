#!/bin/sh
$(dirname $0)/composer.sh install
npm install
docker-compose up & npm start
