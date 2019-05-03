#!/bin/bash

sudo apt-get update
sudo apt-get install -y python-pip zip

pip install flask boto3 awscli

mkdir -p ~/.aws
cp ./aws/config ~/.aws/config