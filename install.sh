#!/bin/bash

echo "Loading..."

BACK_EXIST=0

echo "Checking..."
[ ! -d "/Backend" ] && BACK_EXIST=1

if [ $BACK_EXIST]
then 
    echo "Repository exits, processing install"
    cd ./Backend
    npm i 
    node index.js
else
    echo "Repository dont exit, downloading..."
    git clone https://github.com/lunosat/Instagram-downloader
    cd ./Instagram-downloader/Backend
    npm i
    node index.js
fi

echo "Finish"
