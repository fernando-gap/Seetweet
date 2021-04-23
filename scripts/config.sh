#! /usr/bin/env bash

# This file is able to configure the whole project
# and be able to work fine!

# install dependencies
npm install;

# install icons properly
mv './node_modules/@fortawesome/fontawesome-free/' './frontend/dependencies';

# rename folder to icons
mv './frontend/dependencies/fontawesome-free/' './frontend/dependencies/icons';

# install jquery
mv './node_modules/jquery' './frontend/dependencies';

echo "Start project by running \`npm start\`";
