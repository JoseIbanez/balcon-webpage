#!/bin/bash

cd ..

aws s3 sync ./sb s3://mybalcon/sb/
aws s3 sync ./js s3://mybalcon/js/
aws s3 sync ./vendor s3://mybalcon/vendor
aws s3 sync --no-follow-symlinks ./html s3://mybalcon/html

aws s3 cp  html/index.html s3://mybalcon/
