# CRM Click-to-Call

A simple CRM application built with **React, Express.js, MongoDB, and Mongoose**.
The application displays leads stored in MongoDB and provides a **Call** button next to each lead's phone number. Clicking the button uses the browser's `tel:` link to open the device's default calling application.

## Features

* Display CRM leads
* Store leads in MongoDB
* MVC backend structure
* React frontend
* Click-to-call functionality
* Mobile-friendly
* No paid calling API required
* Simple and minimal implementation

## Tech Stack

### Frontend
* React.js
* Vite
* JavaScript
* CSS
### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* MVC Architecture

## Project Structure
```text
crm-call-mvc/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── LeadTable.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── leadController.js
│   ├── models/
│   │   └── Lead.js
│   ├── routes/
│   │   └── leadRoutes.js
│   ├── .env
│   ├── package.json
│   ├── seed.js
│   └── server.js
│
├── package.json
└── README.md
```

## MVC Flow

```text
React Frontend
      ↓
API Route
      ↓
Controller
      ↓
Model
      ↓
MongoDB
```

For example:

```text
GET /api/leads
      ↓
leadRoutes.js
      ↓
leadController.js
      ↓
Lead.js
      ↓
MongoDB
```

## Requirements

Make sure you have installed:

* Node.js
* MongoDB

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

## Installation

### 1. Clone or extract the project

Open the project folder in VS Code.

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Install frontend dependencies

Open another terminal or go back to the root:

```bash
cd ../client
npm install
```

## Environment Variables

Inside the `server` folder, create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/crm_call_demo
```

If you are using MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

## Seed Demo Leads

From the `server` folder:

```bash
npm run seed
```

This will insert sample CRM leads into MongoDB.

Example:

```text
John Doe
+919876543210

Rahul Kumar
+919876543211

Priya Sharma
+919876543212
```

## Start the Backend

From the `server` folder:

```bash
npm start
```

Backend will run on:

```text
http://localhost:5000
```

You can test:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{
  "message": "CRM API is running"
}
```

## Start the Frontend

Open another terminal.

From the `client` folder:

```bash
npm run dev
```

Vite will provide a URL similar to:

```text
http://localhost:5173
```

Open that URL in your browser.

## Click-to-Call

The Call button uses:

```jsx
<a href={`tel:${lead.phone}`}>
  📞 Call
</a>
```

When the user clicks the button:

```text
Click Call
     ↓
tel:+919876543210
     ↓
Browser / Operating System
     ↓
Default calling application
```

### On Mobile

On most smartphones, the phone dialer opens with the lead's number.

The application itself does **not directly make the phone call**.

The device handles the call.

### On Desktop

The behavior depends on the operating system, browser, and installed calling/VoIP applications.

For example, if a calling application is configured to handle `tel:` links, it may open that application.

## Why No Backend Call API?

For basic click-to-call functionality, we don't need a telephony API.

The backend only provides the lead information:

```text
MongoDB
   ↓
Express API
   ↓
React
   ↓
Phone number
   ↓
tel: link
```

This keeps the project:

* Free
* Simple
* Easy to maintain
* Easy to understand

## Database Model

Each lead contains:

```js
{
  name: String,
  phone: String,
  email: String,
  company: String
}
```
Example:

```json
{
  "name": "John Doe",
  "phone": "+919876543210",
  "email": "john@example.com",
  "company": "ABC Technologies"
}
```

## API

### Get All Leads

```http
GET /api/leads
```
Example response:

```json
[
  {
    "_id": "123",
    "name": "John Doe",
    "phone": "+919876543210",
    "email": "john@example.com",
    "company": "ABC Technologies"
  }
]
```
## Future Improvements

The current version only opens the phone dialer.

A complete CRM calling system could later support:

* Call history
* Call duration
* Call status
* Missed calls
* Call notes
* Follow-up reminders
* Recording
* Incoming call tracking
* Call analytics

For these features, a telephony service/API would generally be required.

## Important Note

This project does **not** make calls directly through Node.js or React.

React only creates the `tel:` link:

```jsx
href={`tel:${lead.phone}`}
```

The actual calling is handled by the user's device or configured calling application.
## License
This project is for learning and demonstration purposes.
