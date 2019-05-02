#!/usr/bin/env python

import os
from flask import Flask, request, send_from_directory
import json
import lambda1



def main():
    return json.dumps(lambda1.getHistogram())



if __name__ == "__main__":
    main()