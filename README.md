# CampusEats – Menu Catalogue REST API

## Team Details

- Team Member 1: [Aman] – [20252651005]
- Team Member 2: [Neetu] – [20252651037]
- Team Member 3: [Sanjog] – [20252651047]

## Project Description

This project implements the Menu/Catalogue service of CampusEats as a REST API using Node.js and Express.

It allows users to:
- View all food items.
- Fetch a particular food item using its ID.
- Add a new food item.

The frontend is built using HTML, CSS and JavaScript. The backend stores records in an in-memory JavaScript array.

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- REST API
- JSON

## Routes

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/items` | Retrieve all food items |
| GET | `/items/:id` | Retrieve one food item by ID |
| POST | `/items` | Create a new food item |

## HTTP Status Codes

- **200 OK:** Returned when food items are successfully retrieved.
- **201 Created:** Returned when a new food item is successfully created.
- **404 Not Found:** Returned when the requested item ID does not exist.
- **422 Unprocessable Content:** Returned when required fields are missing from the POST request.

## Answers to Assignment Questions

### 1. Which CampusEats service did you pick, and what are its routes?

We selected the Menu/Catalogue service.

Its routes are:
- GET `/items` – Lists all food items.
- GET `/items/:id` – Fetches one food item using its ID.
- POST `/items` – Creates a new food item.

### 2. Which status codes did you return, and for which outcomes?

- 200 – Successful retrieval of all items or one item.
- 201 – Successful creation of a new item.
- 404 – Requested item does not exist.
- 422 – Required fields are missing in the POST request.

### 3. Where did you use req.params and req.body? Why does POST need express.json()?

- `req.params.id` is used in GET `/items/:id` to retrieve the ID from the URL.
- `req.body` is used in POST `/items` to access the JSON data submitted by the frontend.
- `express.json()` is middleware that parses incoming JSON request bodies and makes the parsed data available through `req.body`.

## How to Run the Project

1. Clone the repository.
2. Open the project folder in the terminal.
3. Install dependencies:

   `npm install`

4. Start the server:

   `node server.js`

5. Open the following URL in your browser:

   `http://localhost:3000`

## Project Structure

```text
campus-eats-api/
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
│
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## Demonstration

- Before screenshot: Catalogue showing initial food items.
- After screenshot: Catalogue showing the newly added food item.
- Demonstration video: [Google Drive Link]
