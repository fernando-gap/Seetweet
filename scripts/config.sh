#! /usr/bin/env bash

# This file is able to configure the whole project
# and be able to work fine!

# install dependencies
npm install;

# install icons properly
mv './node_modules/@fortawesome/fontawesome-free/' './frontend/';

# rename folder to icons
mv './frontend/fontawesome-free/' './frontend/icons/';

echo "Start project by running \`npm start\`";
