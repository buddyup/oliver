#!/bin/bash

if [ -n "$1" ]; then
    mkdir src/routes/$1
    touch src/routes/$1/$1.controller.js
    touch src/routes/$1/$1.e2e.js
    touch src/routes/$1/$1.route.js
    touch src/routes/$1/$1.template.html

    echo "route $1 created"
else
    echo "missing route name, usage: $ npm run startroute <route name>"
fi
