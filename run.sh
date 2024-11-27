#!/bin/bash
#
echo $PWD
IMAGE=node:21
docker run -it -v $PWD:/app -p 15173:5173 $IMAGE /bin/bash /app/launch.sh 
