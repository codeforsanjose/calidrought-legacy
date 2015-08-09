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
            "station_url": "/stations"
        }

## Group Station

Resources related to stations in the API.

## Station [/stations/{station_id}]

A Station object has the following attributes:

+ id
+ url
+ stationID
+ elevation
+ riverBasin
+ county
+ hydrologicArea
+ nearbyCity
+ point - the longitude:langitude marking for where the station exists
+ operator - which government entity owns the operation of the station

+ Parameters
    + station_id: 1 (required, number) - ID of the Station in form of an integer

### View a Station Detail [GET]

+ Response 200 (application/json)

        {
            "id": 1,
            "url": "/stations/1",
            "stationID": "MEA",
            "elevation": 3700,
            "riverBasin": "SACRAMENTO",
            "county": "SACRAMENTO",
            "hydrologicArea": "",
            "nearbyCity": "SACRAMENTO",
            "point": "37.0",
            "operator": "US Bureau of Reclamation"
        }

### Create a new Station [POST]

This action allows you to create a new station entity.

+ Response 201

    + Headers

            Location: /stations/1

## Stations Collection [/stations{?page}]

+ Parameters
    + page: 1 (optional, number) - The page of stations to return

### List All Stations [GET]

+ Response 200 (application/json)

    + Headers

            Link: </stations?page=2>; rel="next"

    + Body

        [
            {
                "id": 1,
                "url": "/stations/1",
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

### Create a New Station [POST]

You may create your own question using this action. It takes a JSON
object containing a station and attributes for that station.

+ stationID
+ elevation
+ riverBasin
+ county
+ hydrologicArea
+ nearbyCity
+ point - the longitude:langitude marking for where the station exists
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

            Location: /stations/1

    + Body

            [
                {
                    "id": 1,
                    "url": "/stations/1",
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
