calidrought
===========

An API platform for aggregating data on the California drought.

## Foreward: Goal of the Project
Calidrought is an ambitious project being undertaken by the [Code for San Jose civic hacking group](http://codeforsanjose.com/). The aim of the project is to provide easier access to data on the California drought. There are multiple data sources that provide information on the status of the drought but said data is hard to collect, parse, and utilize in a meaningful way.

There are some open source projects that do take advantage of what is openly published by government agencies and this project is inspired by them. The most impressive project I have seen so far is [a drought visualization application](https://github.com/USGS-CIDA/CIDA-Viz) coming out of the Center for Integrated Data Analytics.

While data visualization and analytics could potentially be a goal for this project, the primary priority is making applications like the aforementioned project easier to build.

## Technology stack (rough draft)
* Node
* R
* Kue
* LoopBack
* MongoDB
* Redis

## Overall idea

LoopBack is an API framework that has a bunch of features and stuff. There are a lot of Node frameworks that can be used to create an API. Express, Sails, Hapi, etc. I settled on LoopBack after reading several positive reviews. 

Kue will execute the preprocessors on a timer - pulling data into mongo.

Redis is ancillary and just plain awesome.

## How to contribute

There are a few ways to contribute:

* Data preprocessors / web scrapers / data storage
* API development
* Operations
* Teaching
* Organization
* Documentation
* Donations

### Preprocessors and web scrapers
There are going to be two languages used for this project: Node and R. The API platform is going to be written in Node and data processing is handled by either R or Node depending on contributor preference.

Data will need to be fetched from various sources, processed into JSON, and stored in a database. Each individual processor will be executed by [kue](https://github.com/learnboost/kue). Abstractions for handling data can be moved to a library.

### API development
API development and preprocessors will be linked when new models are created for the storage layer so there will be some overlap. However, there will be API specific tasks like implementing OAuth and key management.

### Operations
Developing an application is one thing, getting it to work well when deployed is another. Docker container support, HAProxy implementation, Chef cookbook, Boxen recipe for a dev environment, continuous integration and deployment, external services, etc.

### Teaching
This project is generating a lot of interest and, because of that interest, beginner developers want to contribute. If you're in the bay area and wish to help out with teaching developers how to do X, Y, and Z then you're more than welcome to do so. I don't mind coordinating efforts.

### Organization
Carve out responsibility for an area of the application, get people together for hacking sessions, etc. Overlaps with teaching.

### Documentation
For the most part, documentation should be written alongside the code that a  contributor is working on. However, the world isn't perfect. If documentation is needed then tickets will be created to address the neglect.
