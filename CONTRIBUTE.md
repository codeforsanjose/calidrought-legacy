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

## LoopBack Guides
In order to contribute on the API side you'll need to familiarize yourself with how LoopBack works.

LoopBack has a command line tool called slc (LoopBack Controller) that wraps Yeoman generators and you can use it to generate models and routes and so forth.

[Take a look at their examples.](http://loopback.io/examples/) 

There is also a suite of fancy modules as part of the StrongLoop offering that may be included if needed.
