# Booking API Contract

## Create Booking

`POST /api/bookings`

### Request Body

```json
{
  "name": "Jane Passenger",
  "phone": "(844) 884-7286",
  "email": "passenger@example.com",
  "mobility": "Wheelchair",
  "pickup": "4071 LB McLeod Rd, Orlando, FL",
  "destination": "Medical Center",
  "date": "2026-06-01",
  "time": "09:30",
  "tripType": "Recurring",
  "insurance": "Medicaid",
  "notes": "Please call on arrival.",
  "smsConsent": true
}
```

### Success Response

```json
{
  "success": true,
  "bookingId": "TSC-48392",
  "message": "Ride request received. Dispatch will confirm availability."
}
```

### Validation Errors

```json
{
  "success": false,
  "errors": {
    "phone": "Phone is required",
    "date": "Ride date is required"
  }
}
```

## List Bookings

`GET /api/admin/bookings`

Requires admin session.

### Response

```json
{
  "bookings": [
    {
      "id": "TSC-48392",
      "status": "pending",
      "passenger": {
        "name": "Jane Passenger",
        "phone": "(844) 884-7286",
        "email": "passenger@example.com",
        "mobility": "Wheelchair"
      },
      "trip": {
        "pickup": "4071 LB McLeod Rd, Orlando, FL",
        "destination": "Medical Center",
        "date": "2026-06-01",
        "time": "09:30",
        "type": "Recurring"
      },
      "createdAt": "2026-05-14T21:00:00.000Z"
    }
  ]
}
```

## Update Booking Status

`PATCH /api/admin/bookings/:id`

Requires admin session.

```json
{
  "status": "confirmed",
  "internalNote": "Confirmed by dispatch."
}
```

