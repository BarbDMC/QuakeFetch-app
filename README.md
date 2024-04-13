# Quake Fetch app

## Overview
This project is a web application developed using Ruby on Rails for the backend and React for the frontend. It is designed to fetch, persist, and expose seismic data from the USGS (United States Geological Survey) site via a RESTful API. The front-end application built with React demonstrates how to interact with these APIs, providing a user-friendly interface for viewing and commenting on seismic events.


## Features
1. **Automatic Data Fetching**: A scheduled task fetches and updates the database with the latest seismic data.
2. **RESTful API**: Two main API endpoints:
   - **GET** `/api/features`: Retrieves a list of seismic events with pagination and filtering options.
   - **POST** `/api/features/:feature_id/comments`: Allows users to post comments on specific seismic events.

## Setup
### Prerequisites
- Ruby 2.7 or higher
- Rails 6.0 or higher
- PostgreSQL 12.0 or higher

### Installation
Clone the repository and install the dependencies:
```bash
git clone git@github.com:BarbDMC/QuakeFetch-app.git

cd backend
bundle install
