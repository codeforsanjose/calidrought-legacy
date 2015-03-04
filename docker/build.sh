#!/bin/bash

# @author Tyler Hampton
#
# Since Docker isn't really flexible about how it reads Dockerfiles this build script attempts
# to address that shortcoming by moving around build files.
#
# NOTE: The top level Dockerfile should always be what is used to deploy the application.
# Right now there is only a devenv container. The deploy container is linked to this ticket:
#
# https://github.com/codeforsanjose/calidrought/issues/13
#
# TODO: Finish ISSUE-#13
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
echo "\nSelect container tag to indicate what the build should be:\n"
echo "\t[1] devenv\n\t[2] deploy\n"

read containerTag

case $containerTag in
  1)
    cp -f $DIR/devenv.Dockerfile $DIR/../Dockerfile
    cd $DIR/../ && docker build -t calidrought-devenv .
    cd docker && cp -f $DIR/deploy.Dockerfile $DIR/../Dockerfile
    exit 0
    ;;
  2)
    cp -f $DIR/deploy.Dockerfile $DIR/../Dockerfile
    cd $DIR/../ && docker build -t calidrought-deploy .
    exit 0
  ;;
esac
