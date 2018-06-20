#!/usr/bin/env bash

set -e

read -p "What kind of update is it? (patch/minor/major) " updatekind

cd projects/ng-canvas-painter
npm version "$updatekind"
cd ../..

./build.sh

cd dist/ng-canvas-painter
npm publish
cd ../..
