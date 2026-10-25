# Houses demo

A clickable demo of a supervisor area for a group of care houses: an overview of the houses and their
patients, a page for each house (beds, staff, location and document folders), a supervisor calendar and a
small statistics assistant.

**Everything shown is sample data.** Names, addresses, phone numbers, license numbers, attendance figures
and events are made up. Sign in accepts any values, nothing is saved, and the demo is not connected to any
real system.

It is plain HTML, CSS and JavaScript: no server, no database, no build step, and no requests to other
sites. English and Spanish are built in (Settings, at the bottom left of the menu).

## Run it

```
python3 -m http.server 8766 --bind 127.0.0.1
```

Open `http://127.0.0.1:8766/`. Opening the files with a double click does not work: the pages need a web
server.

## Pages

| Page | What it shows |
| --- | --- |
| `index.html` | Simulated sign in with a second step |
| `home.html` | Key figures, the four houses, latest news, statistics assistant |
| `house.html?id=house-1` | One house: beds, patients, address and map, staff, visual folders |
| `calendar.html` | Supervisor calendar: month grid, agenda and the next 30 days |
| `dashboard.html`, `day.html`, `files.html` | Attendance by day and a simple file browser |

## Change the sample data

The houses, patients, staff and texts are in `app.js` (`HOUSES`, `DETAILS`, `STR`). The news items are built
in `home.html` and the calendar events in `calendar.html`.
