docker run \
  --volume=$HOME/.ssh:/home/dev/.ssh \
  --volume=`pwd`:/home/dev/calidrought \
  -i -t --rm calidrought
