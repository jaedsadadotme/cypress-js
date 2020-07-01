#!/bin/bash

docker run -it -v $PWD:/e2e -w /e2e \
--entrypoint=cypress \
cypress/included:3.2.0 run --spec cypress/integration/$1