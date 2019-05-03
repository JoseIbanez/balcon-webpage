#!/bin/bash

sudo apt-get update
sudo apt-get install -y python-pip zip

pip install flask boto3 awscli

mkdir -p ~/.aws
cp ./aws/config ~/.aws/config



mkdir -p ./sb/css/
mkdir -p ./sb/js/
mkdir -p ./vendor/bootstrap/js/
mkdir -p ./vendor/jquery-easing/

cp startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.min.css ./sb/css/sb-admin-2.min.css 
cp startbootstrap-sb-admin-2-gh-pages/js/sb-admin-2.min.js ./sb/js/sb-admin-2.min.js 
cp startbootstrap-sb-admin-2-gh-pages/vendor/bootstrap/js/bootstrap.bundle.min.js ./vendor/bootstrap/js/bootstrap.bundle.min.js
cp startbootstrap-sb-admin-2-gh-pages/vendor/jquery-easing/jquery.easing.min.js ./vendor/jquery-easing/jquery.easing.min.js
cp startbootstrap-sb-admin-2-gh-pages/vendor/bootstrap/js/bootstrap.bundle.min.js.map ./vendor/bootstrap/js/bootstrap.bundle.min.js.map

