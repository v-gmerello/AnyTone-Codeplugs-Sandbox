# API

## Conventions

- Local backend URL: `http://localhost:8080`
- Application base path: `/api`
- Future converter API base path: `/api/v1`
- Request and response media type: `application/json` unless a documented
  multipart or download endpoint requires another type.
- JSON property names use lower camel case.
- HTTP status codes express transport outcomes; response codes express stable
  application failure categories.

The API is local and currently unauthenticated. Do not expose it to untrusted
networks as a production service.

## Error Behavior

Validation and server failures use this shape:

```json
{
  "timestamp": "2026-08-20T12:00:00Z",
  "code": "VALIDATION_FAILED",
  "message": "The request contains invalid data.",
  "path": "/api/example"
}
```

Stack traces and exception class names are not returned. Future endpoint docs
must list their validation codes and status conditions.

## GET /api/health

Returns application-level availability for the frontend.

### Request

```http
GET /api/health HTTP/1.1
Accept: application/json
```

### Successful Response

Status: `200 OK`

```json
{
  "status": "UP"
}
```

### Example

```bash
curl --request GET http://localhost:8080/api/health \
  --header "Accept: application/json"
```

## Operational Endpoint

Spring Boot Actuator also exposes `GET /actuator/health`. It is intended for
process monitoring. The frontend uses `/api/health` as its stable application
contract.

## Future Endpoints

Planned native conversion endpoints will use `/api/v1/conversions`. Analysis
and conversion will be separate requests so the user can review compatibility
and explicitly resolve non-blocking decisions. These endpoints do not exist yet.