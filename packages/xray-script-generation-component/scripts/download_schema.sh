#!/bin/bash

set -ex

curl -o ./src/schema.json "https://raw.githubusercontent.com/chaitin/gamma/master/static/schema/schema-$1.json"
