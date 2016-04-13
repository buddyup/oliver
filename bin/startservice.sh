#!/bin/bash

if [ -n "$1" ]; then
    mkdir src/services/$1
    touch src/services/$1/$1.service.js
    touch src/services/$1/$1.service.spec.js

    echo "service $1 created"
else
    echo "missing service name, usage: $ npm run startservice <service name>"
fi
