# Upper Tribunal Web Scraper

[![License](https://img.shields.io/badge/license-Other-lightgrey.svg)](LICENSE)
[![Repo size](https://img.shields.io/github/repo-size/Joshua-Hetherton/Upper-Tribunal_Web_Scraper)](https://github.com/Joshua-Hetherton/Upper-Tribunal_Web_Scraper)

A small project that collects UK Upper Tribunal case law from the UK National Archives and packages it into easy-to-use data files so you can search and analyse decisions without re-scraping the original site.

Table of contents
- [What this project does](#what-this-project-does)
- [Why this is useful](#why-this-is-useful)
- [Repo overview](#repo-overview)
- [Included data snapshots](#included-data-snapshots)
- [Backend & frontend at a glance](#backend--frontend-at-a-glance)
- [Where to get help](#where-to-get-help)
- [Contributing & maintainers](#contributing--maintainers)
- [Data responsibility](#data-responsibility)
- [License](#license)

What this project does
----------------------
- Scrapes publicly available Upper Tribunal case decisions and saves them in developer-friendly formats.
- Provides a data snapshot so students, researchers and developers can analyse case law without querying the live site.

Why this is useful
------------------
- Saves time: reuse a ready dataset instead of scraping yourself.
- Flexible formats: both JSON and a small SQLite database are included so you can pick the approach you prefer.
- Good for coursework and prototypes: quick access to legal decisions for search, text analysis, and experiments.
- The new site removed key searching parameters, which have been reimplemented in this project

Repo overview
-------------
- backend/ — server code and scraper scripts (see the folder for details).
- frontend/ — UI files for browsing/searching the dataset (see the folder for details).
- cases.db — SQLite snapshot with the scraped records.
- uk_caselaw_ukut_lc.json — exported JSON of the collected cases.
- LICENSE — license file (see LICENSE).

Included data snapshots
-----------------------
- uk_caselaw_ukut_lc.json — JSON array of case records for quick parsing.
- cases.db — SQLite snapshot for SQL queries and exports.

Backend & frontend at a glance
-----------------------------
- The project separates data ingestion (backend) from presentation (frontend) so you can use only the parts you need.
- Check the `backend/` and `frontend/` folders to see how they are organised and what scripts are available.

Where to get help
-----------------
- Open an issue: https://github.com/Joshua-Hetherton/Upper-Tribunal_Web_Scraper/issues
- When you open an issue, include what you were trying to do and any small error messages or screenshots.

Contributing & maintainers
--------------------------
- Maintainer: Joshua-Hetherton (GitHub: @Joshua-Hetherton)
- Short contribution steps:
  1. Fork the repo and make a branch for your change.
  2. Make focused commits and open a pull request explaining the change.
- For detailed rules, check CONTRIBUTING.md if present: CONTRIBUTING.md

Data responsibility
-------------------
- The dataset comes from public records. Respect the UK National Archives terms of service and robots.txt.
- Case documents can contain personal information. Handle the data responsibly and in line with laws and privacy guidance.

License
-------
See the LICENSE file in this repo for license details: `LICENSE`

Acknowledgements
----------------
- UK National Archives — source of the public case law used here.