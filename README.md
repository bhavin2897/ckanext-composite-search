[![Tests](https://github.com/DataShades/ckanext-composite-search/workflows/Tests/badge.svg?branch=main)](https://github.com/DataShades/ckanext-composite-search/actions)

# ckanext-composite-search

Complex search form for the dataset search page.

Filter by field, search by multiple criteria, combine filter with the AND/OR operators and
forget about Lucene queries

## Requirements

Compatibility with core CKAN versions:

| CKAN version    | Compatible? |
|-----------------|-------------|
| 2.9             | yes         |
| 2.10            | yes         |
|                 |             |


## Installation

To install ckanext-composite-search:

1. Install the extension
     ```sh
	pip install ckanext-composite-search
     ```

1. Add `composite_search default_composite_search` to the `ckan.plugins`
   setting in your CKAN config file.


## Config settings


```ini
# The minimum number of hours to wait before re-checking a resource
# (optional, default: 24).
ckanext.composite_search.some_setting = some_default_value
```

## License

[AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html)
