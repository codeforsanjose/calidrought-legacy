[![Build Status](https://travis-ci.org/codeforsanjose/calidrought.svg?branch=production)](https://travis-ci.org/codeforsanjose/calidrought)
[![Code Climate](https://codeclimate.com/github/codeforsanjose/calidrought/badges/gpa.svg)](https://codeclimate.com/github/codeforsanjose/calidrought)
[![Test Coverage](https://codeclimate.com/github/codeforsanjose/calidrought/badges/coverage.svg)](https://codeclimate.com/github/codeforsanjose/calidrought/coverage)
[![Dependency Status](https://gemnasium.com/codeforsanjose/calidrought.svg)](https://gemnasium.com/codeforsanjose/calidrought)
[![Slack Status](https://slackin-c4sj.herokuapp.com/badge.svg)](https://slackin-c4sj.herokuapp.com/)

calidrought
===========

An API platform for aggregating data on the California drought.

## Foreward: Goal of the Project
Calidrought is an ambitious project being undertaken by Code for San Jose. The aim of the project is to provide easier access to data on the California drought. There are multiple data sources that provide information on the status of the drought but said data is hard to collect, parse, and utilize in a meaningful way.

There are some open source projects that do take advantage of what is openly published by government agencies and this project is inspired by them. The most impressive project I have seen so far is [a drought visualization application](https://github.com/USGS-CIDA/CIDA-Viz) coming out of the Center for Integrated Data Analytics.

While data visualization and analytics could potentially be a goal for this project, the primary priority is making applications like the aforementioned project easier to build.

## Technology stack
* Node
* Kue
* Express
* RethinkDB
* Redis

### Why
I chose nodejs for multiple reasons; the popularity of the language makes developers easier to find, the language's emphasis on web technologies should make API development easier, and it's webscale - which is the most important aspect.

Kue is used to handle jobs related to data collection and processing.

For now, Redis is an ancillary component required by Kue. However, it could be later used for caching.

## Milestones

1. Reservoir capacity data.
2. Presentation page for the platform.
3. Get it hosted somewhere.

## Requirements
Until a Docker container is released, a developer needs to have the following pre-requisites installed:

* Node v4.X
* NPM

## Getting Started
* There is a dev env Docker container that I've tested on OS X and Linux hosts. The init scripts for building and entering the container are written in bash so Windows portability is questionable. However, there is a boot2docker release for Windows but it looks like there is work needed for volume mounting.
* Starting and running the app is within the conventions of a standard Express app. I.e, ```npm start``` will launch the application.

=======
See the [contributing](https://github.com/howdoicomputer/calidrought/wiki/Contributing) wiki article.

Be sure to check the wiki since I will put most project information there.
