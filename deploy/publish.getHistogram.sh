#!/bin/bash

cd ../getHistogram
rm *.pyc 
rm ../index.zip 
zip  -X -r ../index.zip .
cd ..
aws lambda update-function-code --function-name getHistogram --zip-file fileb://index.zip

