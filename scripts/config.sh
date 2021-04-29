#! /usr/bin/env bash

# This file is able to configure the whole project
# and be able to work fine!

# install dependencies
npm install &> /dev/null;

# create icons folders
mkdir -p './frontend/dependencies/icons';

# install icons properly
cp -r './node_modules/@fortawesome/fontawesome-free/'* './frontend/dependencies/icons/';

# install jquery
cp -r './node_modules/jquery' './frontend/dependencies';
printf "\nStart project by running \`npm start\` ";
