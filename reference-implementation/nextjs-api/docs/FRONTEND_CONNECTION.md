# Frontend Connection

Replace the demo submit handler in `public-site/assets/js/site.js` with a production API call once the backend is live.

## Demo Behavior

The current static handoff stores booking requests in browser storage.

## Production Behavior

Use:

```js
const response = await fetch("/api/bookings", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});
```

Expected success:

```json
{
  "success": true,
  "bookingId": "TSC-48392",
  "message": "Ride request received. Dispatch will confirm availability."
}
```

Expected failure:

```json
{
  "success": false,
  "errors": {
    "phone": "Phone is required"
  }
}
```

## Production Redirect

After a successful API response, redirect to:

```txt
/thank-you.html?bookingId=TSC-48392
```

