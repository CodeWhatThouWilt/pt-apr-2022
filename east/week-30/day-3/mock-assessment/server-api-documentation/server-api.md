# Server API Documentation

(The V1 Server and the V2 Server have the same API.)

## Get all reports

Request:

- Method: `GET`
- URL pattern: `/api/reports`

Successful Response:

- Status Code: `200`
- Headers: [`'Content-Type': 'application/json'`]
- Example Body:

```json
[
   { "1": { "id": 1 } },
   { "2": { "id": 2 } },
   { "5": { "id": 5 } }
]
```

## Get a single report

Request:

- Method: `GET`
- URL pattern: `/api/reports/:reportId`

Successful Response:

- Status Code: `200`
- Headers: [`'Content-Type': 'application/json'`]
- Example Body:

```json
{
   "id": 1,
   "improvement": "Example improvement details",
   "understanding": "Example understanding details"
}
```

## Create a report

Request:

- Method: `POST`
- URL pattern: `/api/reports`
- Headers: [`'Content-Type': 'application/json'`]
- Expected Body Format:

```json
{
   "understanding": "...",
   "improvement": "..."
}
```

Successful Response:

- Status Code: `201`
- Headers: [`'Content-Type': 'application/json'`]
- Example Body:

```json
{
   "id": 6,
   "improvement": "Example improvement details",
   "understanding": "Example understanding details"
}
```

Error Response:

- Status Code: `400`
- Headers: [`'Content-Type': 'application/json'`]
- Example Body:

```json
{
   "errors": {
      "improvement": "Improvement is required",
      "understanding": "Understanding needs to be more than 40 characters long"
   }
}
```

## Update a report

Request:

- Method: `PUT` or `PATCH`
- URL pattern: `/api/reports/:reportId`
- Headers: [`'Content-Type': 'application/json'`]
- Expected Body Format:

```json
{
   "understanding": "...",
   "improvement": "..."
}
```

Successful Response:

- Status Code: `200`
- Headers: [`'Content-Type': 'application/json'`]
- Example Body:

```json
{
   "id": 6,
   "improvement": "Example improvement details",
   "understanding": "Example understanding details"
}
```

Error Response:

- Status Code: `400`
- Headers: [`'Content-Type': 'application/json'`]
- Example Body:

```json
{
   "errors": {
      "improvement": "Improvement is required",
      "understanding": "Understanding needs to be more than 40 characters long"
   }
}
```

## Delete a report

Request:

- Method: `DELETE`
- URL pattern: `/api/reports/:reportId`

Successful Response:

- Status Code: `200`
- Headers: [`'Content-Type': 'application/json'`]
- Body:

```json
{
   "message": "Successfully deleted"
}
```

Example Error Response:

- Status Code of `400` or above
- Headers: [`'Content-Type': 'application/json'`]
- Example Body:

```json
{
   "errors": {
      "message": "Unauthorized"
   }
}
```
