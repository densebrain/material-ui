#!/bin/bash

MUIOUT=${MUIOUT:?./build}
echo "Output Directory: ${MUIOUT}"

babel ./src --ignore *.spec.js --watch --out-dir ${MUIOUT}
