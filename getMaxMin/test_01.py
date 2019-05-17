#!/usr/bin/env python

import os
from flask import Flask, request, send_from_directory
import json
import getMaxMin



def main():
    print("Test Case 1")
    out=getMaxMin.getMaxMin()

    print("Test Case 2")
    out=getMaxMin.getMaxMin(probe="ESP807D3AF077C8.A9",hours=24,param="batt")
    print(out)


if __name__ == "__main__":
    main()