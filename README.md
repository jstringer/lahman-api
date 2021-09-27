# Lahman API
An open source REST API, written in Node/Express, serving historical baseball statistics, game logs, and more. The data is sourced from the 
[Lahman Baseball Database](http://www.seanlahman.com/baseball-archive/statistics/) and [Retrosheet](https://www.retrosheet.org/).

## About
The goal of this project is to create an accessible, easy to use API for sabermetricians, data scientists, baseball fans, and anyone else who wishes to interact
with the vast amount of [Open Data](https://opendatahandbook.org/guide/en/what-is-open-data/) made available by the [Chadwick Baseball Bureau](http://chadwick-bureau.com/open-data/)
and [Sean Lahman](http://www.seanlahman.com/). It also serves as a portfolio project for me to display my skills as an API developer, and to learn more about Node.

### Stack / Libraries Used
- Server application runs on [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/) and written in [Typescript](https://www.typescriptlang.org/).
- [TypeORM](https://typeorm.io/#/) for the database access layer.
- [Postgres](https://www.postgresql.org/) the data as sourced from the Lahman Baseball Database, hosted in a AWS RDS instance.
- [routing-controllers](https://github.com/typestack/routing-controllers) for class-based controllers.
- [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/) for type-validated unit tests.

## Documentation
The API provides an HTTP-based interface to the most up-to-date version of the Lahman Baseball Database. As such, the database design is identical to that of the actual
Lahman database. The API interacts with a Postgres version of the Lahman database seeded using the CSV versions of the Lahman database. 

### Working with the data
Detailed documentation on the data itself is given at the [Lahman Database Readme](http://www.seanlahman.com/files/database/readme2017.txt). The main entities in the database are:
- **People**
  - Referenced by a PlayerID code. Contains basic biographical information about players, as well as their Retrosheet and Baseball Reference IDs.
- **Batting**
  - Batting statistics, per year, for a single player.
- **Pitching**
  - Pitching statistics, per year, for a single player.
- **Fielding**
  - Fielding statistics, per year, for a single player.
- **Teams**
  - Team statistics, per year, for a given team. 

Player info, stats, and team info can be retrieved using a variety of different options, provided in the HTTP request body, to narrow down results. All routes that accept an
options object in the request body can accept the same types of options. This provides control over how much data and what type is returned from the API.

There are also a small number of routes that take a `playerID` as a URL parameter that can be used to retrieve all player info and/or statistics for a given player.

#### Options Examples
To retrieve all batting statistics for Mookie Betts during his 2017 regular season, use the following options object:

```json
{
  "nameFirst": "Mookie",
  "nameLast": "Betts",
  "years": [2017]
}
```

To retrieve pitching statistics for all pitchers on the 1988 Los Angeles Dodgers, use the following options object:

```json
{
  "teamID": "LAN",
  "years": [1988],
  "stats": {
    "type" : "Pitching"
  }
}
```

### API routes
| Route                  | Method | Example Request Body                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
|------------------------|--------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `api/player/:playerID` | `GET`  | N/A                                                      | Returns the biographical information for the player referenced by `playerID`                                                                                                                                                                                                                                                                                                                                       |
| `api/player/`          | `GET`  | `{nameFirst: "Mookie", nameLast: "Betts"}`               | Returns the biographical information for any/all players who match the options specified in the request body.  The request body can specify as many or as few options as desired. For a full list of options,  see the People table documentation at the [Lahman documentation](http://www.seanlahman.com/files/database/readme2017.txt)                                                                           |
| `api/stats/:playerID`  | `GET`  | N/A                                                      | Returns all batting, pitching, and fielding stats from all years for the player referenced by the `playerID` parameter.                                                                                                                                                                                                                                                                                            |
| `api/stats/`           | `GET`  | `{playerID: "bettsmo01", years: [2018], type "Batting"}` | Returns stats by player/team and by year as specified in the options in the request body. If no year is specified, it will return stats from all years. If no type is specified, it will return all types of stats. If no playerID is specified, it will return all stats from all players given the other options criteria. The provided example will return Mookie Betts' batting stats from the 2018 regular season. |
| `api/teams/`           | `GET`  | `{teamID: "LAN", years: [2017, 2016]}`                   | Returns all matching team data as specified in the options. The provided example will return all Los Angeles Dodgers team data from the 2017 and 2016 seasons.                                                                                                                                                                                                                                                     |

## License
The API project is licensed under an **ISC License**
Copyright 2021 Jack Stringer

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

The Lahman Database is copyright 1996-2021 by Sean Lahman
This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License. For details see: http://creativecommons.org/licenses/by-sa/3.0/

For licensing information or further information, contact Sean Lahman
at: seanlahman@gmail.com