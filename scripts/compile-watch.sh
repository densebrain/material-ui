#!/bin/bash

#MUIOUT=${MUIOUT:?./build}
if [ "${MUIOUT}" == "" ];then
  MUIOUT=./build
fi
echo "Output Directory: ${MUIOUT}"

babel ./src --ignore *.spec.js --watch --out-dir ${MUIOUT}
