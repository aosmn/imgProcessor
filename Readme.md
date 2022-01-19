# Image Processing App

This app is used to resize images using Sharp api

## Build & Test

To build and test app run `npm run test`

## Run Server

To run the app server run `npm run serve`

## Test Server

To test the api, send a `get` request to the server at `/api/images` with the following query parameters:
filename, width, height

### Example

`localhost:3000/api/images?filename=palmtunnel.jpg&width=600&height=300`
