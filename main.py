#!/usr/bin/env python

import os

from flask import Flask, request, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/index.html')
@app.route('/')
def send_index():
    return send_from_directory('html', "index.html")

@app.route('/sb/<path:path>')
def send_sb(path):
    return send_from_directory('sb', path)

@app.route('/vendor/<path:path>')
def send_vendor(path):
    return send_from_directory('sb/vendor', path)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/<path:path>')
def send_root(path):
    return send_from_directory('html', path)





if __name__ == "__main__":
    #app.run()
    app.run(host='0.0.0.0')
