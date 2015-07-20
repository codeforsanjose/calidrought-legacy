FORMAT: 1A
HOST: http://polls.apiblueprint.org/

# calidrought

Calidrought is an API platform for allowing developers an easy access to data related to the California drought.

# Calidrought API Root [/]

This resource does not have any attributes. Instead it offers the initial
API affordances in the form of the links in the JSON body.

It is recommend to follow the “url” link values,
[Link](https://tools.ietf.org/html/rfc5988) or Location headers where
applicable to retrieve resources. Instead of constructing your own URLs,
to keep your client decoupled from implementation details.

## Retrieve the Entry Point [GET]

+ Response 200 (application/json)

        {
            "reservoir_url": "/reservoirs"
        }

## Group Reservoir

Resources related to reservoirs in the API.

## Reservoir [/reservoirs/{reservoir_id}]

A Reservoir object has the following attributes:

+ id
+ url
+ stationID
+ elevation
+ riverBasin
+ county
+ hydrologicArea
+ nearbyCity
+ point - 
+ operator - 

+ Parameters
    + reservoir_id: 1 (required, number) - ID of the Reservoir in form of an integer

### View a Reservoir Detail [GET]

+ Response 200 (application/json)

        {
            "id": 1,
            "url": "/reservoirs/1",
            "stationID": "MEA",
            "elevation": 3700,
            "riverBasin": "SACRAMENTO",
            "county": "SACRAMENTO",
            "hydrologicArea": "",
            "nearbyCity": "SACRAMENTO",
            "point": "37.0",
            "operator": ""
        }

## Choice [/reservoirs/{reservoir_id}/choices/{choice_id}]

+ Parameters
    + reservoir_id: 1 (required, number) - ID of the Reservoir in form of an integer

### Vote on a Choice [POST]

This action allows you to vote on a question's choice.

+ Response 201

    + Headers

            Location: /questions/1

## Questions Collection [/reservoirs{?page}]

+ Parameters
    + page: 1 (optional, number) - The page of questions to return

### List All Questions [GET]

+ Response 200 (application/json)

    + Headers

            Link: </questions?page=2>; rel="next"

    + Body

            [
                {
                    "question": "Favourite programming language?",
                    "published_at": "2014-11-11T08:40:51.620Z",
                    "url": "/questions/1",
                    "choices": [
                        {
                            "choice": "Swift",
                            "url": "/questions/1/choices/1",
                            "votes": 2048
                        }, {
                            "choice": "Python",
                            "url": "/questions/1/choices/2",
                            "votes": 1024
                        }, {
                            "choice": "Objective-C",
                            "url": "/questions/1/choices/3",
                            "votes": 512
                        }, {
                            "choice": "Ruby",
                            "url": "/questions/1/choices/4",
                            "votes": 256
                        }
                    ]
                }
            ]

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ question (string) - The question
+ choices (array[string]) - A collection of choices.

+ Request (application/json)

        {
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby"
            ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

            {
                "question": "Favourite programming language?",
                "published_at": "2014-11-11T08:40:51.620Z",
                "url": "/questions/2",
                "choices": [
                    {
                        "choice": "Swift",
                        "url": "/questions/2/choices/1",
                        "votes": 0
                    }, {
                        "choice": "Python",
                        "url": "/questions/2/choices/2",
                        "votes": 0
                    }, {
                        "choice": "Objective-C",
                        "url": "/questions/2/choices/3",
                        "votes": 0
                    }, {
                        "choice": "Ruby",
                        "url": "/questions/2/choices/4",
                        "votes": 0
                    }
                ]
            }
