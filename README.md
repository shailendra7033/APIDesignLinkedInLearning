# API Design – Node.js + TypeScript

This project demonstrates **basic REST API design** using **Node.js, Express, and TypeScript**, with **functional API testing** using **Jest, Supertest, and MongoDB Memory Server**.

The focus is on clean structure, predictable API contracts, and reliable tests.

---

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB (Mongoose)
- Jest + Supertest
- mongodb-memory-server (for tests)

---

## API Endpoints

### POST /api/v1/users
Create a new user.

```json
{
  "name": "Shailendra",
  "interestedLanguage": "TypeScript"
}
````

---

### GET /api/v1/users

Fetch all users.

```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "Shailendra",
      "interestedLanguage": "TypeScript"
    }
  ]
}
```

---

## Running the Project

```bash
npm install
npm run dev
```

---

## Running Tests

Tests run against an **in-memory MongoDB**, ensuring isolation and consistency.

```bash
npm test
```

### Test Output

```text
PASS  src/test/user.api.test.ts
  User APIs - Functional Testing
    ✓ should create a new user successfully
    ✓ should fetch all users
```

---

## Notes

* `app.ts` contains only Express setup
* `server.ts` handles DB connection and server startup
* Tests do not start a real HTTP server
* Database is reset between tests

---
