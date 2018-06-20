#!/usr/bin/env bash

set -e

ng build ng-canvas-painter --prod
cd dist/ng-canvas-painter
# npm publish
