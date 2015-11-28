[![Build Status](https://travis-ci.org/codeforsanjose/calidrought.svg?branch=production)](https://travis-ci.org/codeforsanjose/calidrought)
[![Code Climate](https://codeclimate.com/github/codeforsanjose/calidrought/badges/gpa.svg)](https://codeclimate.com/github/codeforsanjose/calidrought)
[![Test Coverage](https://codeclimate.com/github/codeforsanjose/calidrought/badges/coverage.svg)](https://codeclimate.com/github/codeforsanjose/calidrought/coverage)
[![Dependency Status](https://gemnasium.com/codeforsanjose/calidrought.svg)](https://gemnasium.com/codeforsanjose/calidrought)
[![Slack Status](https://slackin-c4sj.herokuapp.com/badge.svg)](https://slackin-c4sj.herokuapp.com/)
[![Stories in Ready](https://badge.waffle.io/codeforsanjose/calidrought.svg?label=ready&title=Ready)](http://waffle.io/codeforsanjose/calidrought)

calidrought
===========

An API platform for aggregating data on the California drought.

## Foreward: Goal of the Project
Calidrought is an ambitious project being undertaken by Code for San Jose. The aim of the project is to provide easier access to data on the California drought. There are multiple data sources that provide information on the status of the drought but said data is hard to collect, parse, and utilize in a meaningful way.

There are some open source projects that do take advantage of what is openly published by government agencies and this project is inspired by them. The most impressive project I have seen so far is [a drought visualization application](https://github.com/USGS-CIDA/CIDA-Viz) coming out of the Center for Integrated Data Analytics.

While data visualization and analytics could potentially be a goal for this project, the primary priority is making applications like the aforementioned project easier to build.

## Demo
There is currently a demo server [running in AWS](http://ec2-54-167-131-100.compute-1.amazonaws.com/) and there is a guide on how to consume from this server [in the wiki](https://github.com/codeforsanjose/calidrought/wiki/Getting-Started-with-the-API)

## API Documentation

The documentation for the API is [hosted by apiary](http://docs.calidrought.apiary.io/#) and is stored in the repository [here](https://github.com/codeforsanjose/calidrought/blob/production/doc/apiary.md).

## Technology stack

* Node
* Kue
* Express
* RethinkDB
* Redis

## More Information

See the wiki for more information on implementation details and how the project is ran.

=======
See the [contribution guide](https://github.com/codeforsanjose/calidrought/wiki/Contribution-Guide) for contribution information.
