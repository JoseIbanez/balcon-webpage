#!/bin/bash

sudo apt-get update
sudo apt-get install -y python-pip

pip install flask boto3

mkdir -p ~/.aws
cp ./aws/config ~/.aws/config