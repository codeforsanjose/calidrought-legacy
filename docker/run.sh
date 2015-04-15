#!/bin/bash

# @author Tyler Hampton
#
# A simple script to help run either a 'devenv' or a 'deploy' Docker container. I don't particularly like this solution but it's the quickest towards progress.
#
# TODO: Ditch this script in favor of Fig or Docker Compose

$(boot2docker start)
$(boot2docker shellinit)

if [ $# -eq 0 ]; then
  echo "There are two options for this script: 'devenv' or 'deploy'\n"
  echo "Example: \n"
  echo "\tsh run.sh devenv\n"
  exit 1
fi

case $1 in
  "devenv")
    docker run \
      --volume=$HOME/.ssh:/home/dev/.ssh \
      --volume=`pwd`:/home/dev/calidrought \
      -i -t --rm calidrought-devenv
    ;;
  "deploy")
    docker run \
      - -t --rm calidrought-deploy
    ;;
esac
