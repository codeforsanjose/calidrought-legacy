calidrought
===========

An API platform for aggregating data on the California drought.

## Foreward: Goal of the Project
Calidrought is an ambitious project being undertaken by the [Code for San Jose civic hacking group](http://codeforsanjose.com/). The aim of the project is to provide easier access to data on the California drought. There are multiple data sources that provide information on the status of the drought but said data is hard to collect, parse, and utilize in a meaningful way.

There are some open source projects that do take advantage of what is openly published by government agencies and this project is inspired by them. The most impressive project I have seen so far is [a drought visualization application](https://github.com/USGS-CIDA/CIDA-Viz) coming out of the Center for Integrated Data Analytics.

While data visualization and analytics could potentially be a goal for this project, the primary priority is making applications like the aforementioned project easier to build.

## Technology stack
* Node
* R
* Kue
* LoopBack
* MongoDB
* Redis

### Why
I chose nodejs for multiple reasons; the popularity of the language makes developers easier to find, the language's emphasis on web technologies should make API development easier, and it's webscale - which is the most important aspect.

The R language is excellent for handling raw data and doing any sort of statistical computing. My aim is for each module of code that collects and processing data to be segregated from the main platform and to be executed off a queue and within a child process. R could make that process easier.

If a front-end application is developed as part of the platform then R could make the generation of pretty graphs easier using something like [rio](https://github.com/albertosantini/node-rio).

Kue is used to handle jobs related to data collection and processing.

LoopBack is an API framework. It's based off of Express and comes with a lot of tools for code generation and API visualization. The StrongLoop project also gives an avenue for pulling in some utilities that monitor application performance and providing other goodies.

I'm not too big of a fan of MongoDB due to db locking and how clustering works, but it just has so much support and guides within the nodejs community that it's hard to ignore.

For now, Redis is an ancillary component required by Kue. However, it could be later used for caching.

## Milestones

1. Reservoir capacity data.
2. Presentation page for the platform.
3. Get it hosted somewhere.

## Requirements
Until a Docker container is released, a developer needs to have the following pre-requisites installed:

* Node
* NPM

**Future requirements**

* Redis
* MongoDB

Note, I might use a mongo as a service instead of requiring a local install.

## Usage
Install node packages:
```
npm install
```
Start the application:
```
slc run
```

Navigate to http://localhost/explorer to view API routes.