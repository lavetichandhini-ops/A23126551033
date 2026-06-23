# Stage 1

## Notification System Design

The notification platform should support the following actions:

1. Get all notifications for a student
2. Get unread notifications
3. Mark a notification as read
4. Mark all notifications as read
5. Create a notification
6. Delete a notification

---

## Common Headers

```http
Content-Type: application/json
Authorization: Bearer <token>
```

---

## 1. Get All Notifications

Endpoint:

```http
GET /api/notifications
```

Response:

```json
{
  "notifications": [
    {
      "id": "1",
      "type": "Placement",
      "message": "TCS is hiring",
      "isRead": false,
      "createdAt": "2026-04-22T10:00:00Z"
    }
  ]
}
```

---

## 2. Get Unread Notifications

Endpoint:

```http
GET /api/notifications/unread
```

Response:

```json
{
  "count": 5,
  "notifications": []
}
```

---

## 3. Mark Notification as Read

Endpoint:

```http
PUT /api/notifications/{id}/read
```

Response:

```json
{
  "message": "Notification marked as read"
}
```

---

## 4. Mark All Notifications as Read

Endpoint:

```http
PUT /api/notifications/read-all
```

Response:

```json
{
  "message": "All notifications marked as read"
}
```

---

## 5. Create Notification

Endpoint:

```http
POST /api/notifications
```

Request:

```json
{
  "type": "Placement",
  "message": "Infosys recruitment drive"
}
```

Response:

```json
{
  "message": "Notification created successfully"
}
```

---

## 6. Delete Notification

Endpoint:

```http
DELETE /api/notifications/{id}
```

Response:

```json
{
  "message": "Notification deleted successfully"
}
```

---

## Real-Time Notification Mechanism

For real-time updates, WebSockets can be used.

Workflow:

1. User logs in.
2. Frontend establishes a WebSocket connection.
3. Whenever a new notification is created, the server pushes it through the WebSocket connection.
4. The notification appears instantly without refreshing the page.

Benefits:

- Instant notification delivery
- Reduced polling requests
- Better user experience
