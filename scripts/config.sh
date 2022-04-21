#! /usr/bin/env bash

# This file is able to configure the whole project
# and be able to work fine! 
# The script should be executed in the root folder

# install dependencies
npm install &> /dev/null;

# create icons folders
mkdir -p './public/dependencies/icons';
mkdir -p './public/dependencies/jquery';

# install icons properly
cp -r './node_modules/@fortawesome/fontawesome-free/'* './public/dependencies/icons/';

# install jquery
cp -r './node_modules/jquery' './public/dependencies/jquery';
printf "\nStart project by running \`npm start\` ";
