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
+ point - the longitude:langitude marking for where the reservoir exists
+ operator - which government entity owns the operation of the station

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
            "operator": "US Bureau of Reclamation"
        }

## Reservoir [/reservoirs/{reservoir_id}]

+ Parameters
    + reservoir_id: 1 (required, number) - ID of the Reservoir in form of an integer

### Create a new Reservoir [POST]

This action allows you to create a new reservoir entity.

+ Response 201

    + Headers

            Location: /reservoirs/1

## Questions Collection [/reservoirs{?page}]

+ Parameters
    + page: 1 (optional, number) - The page of reservoirs to return

### List All Questions [GET]

+ Response 200 (application/json)

    + Headers

            Link: </reservoirs?page=2>; rel="next"

    + Body

        [
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
                "operator": "US Bureau of Reclamation"
            }
        ]

### Create a New Reservoir [POST]

You may create your own question using this action. It takes a JSON
object containing a reservoir and attributes for that reservoir.

+ stationID
+ elevation
+ riverBasin
+ county
+ hydrologicArea
+ nearbyCity
+ point - the longitude:langitude marking for where the reservoir exists
+ operator - which government entity owns the operation of the station

+ Request (application/json)

        {
            "stationID": "MEA",
            "elevation": 3700,
            "riverBasin": "SACRAMENTO",
            "county": "SACRAMENTO",
            "hydrologicArea": "",
            "nearbyCity": "SACRAMENTO",
            "point": "37.0",
            "operator": "US Bureau of Reclamation"
        }

+ Response 201 (application/json)

    + Headers

            Location: /reservoir/1

    + Body

        [
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
                "operator": "US Bureau of Reclamation"
            }
        ]
