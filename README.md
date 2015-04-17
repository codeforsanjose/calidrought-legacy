calidrought
===========

An API platform for aggregating data on the California drought.

## Foreward: Goal of the Project
Calidrought is an ambitious project being undertaken by the [Code for San Jose civic hacking group](http://codeforsanjose.com/). The aim of the project is to provide easier access to data on the California drought. There are multiple data sources that provide information on the status of the drought but said data is hard to collect, parse, and utilize in a meaningful way.

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

* Node v0.12.0
* NPM

## Getting Started
See the [contributing](https://github.com/howdoicomputer/calidrought/wiki/Contributing) wiki article.

**Future requirements**

* Redis
* RethinkDB

Be sure to check the wiki since I will put most project information there.
