#!/bin/sh
docker run --rm --interactive --tty \
  --volume $PWD:/app \
  composer:2.2 $*
