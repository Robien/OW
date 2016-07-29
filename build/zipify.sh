#!/bin/bash

mkdir -p $(git describe --tags | cut -d"." -f1)
zip -r build-$(git describe --tags).zip build
mv build-$(git describe --tags).zip $(git describe --tags | cut -d"." -f1)/
