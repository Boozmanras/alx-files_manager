# Project Documentation

## Overview
This project implements a file management API using Express.js. The API includes robust controllers to handle file operations such as retrieving specific files and listing all files. It incorporates a service-based architecture for better modularity and maintainability.

## Features
- Retrieve the status of the application.
- User authentication and session management.
- File management with endpoints to:
  - Fetch details of a specific file.
  - List all files.

## Project Structure
The project is organized as follows:

```
.
├── controllers/
│   ├── AppController.js
│   ├── AuthController.js
│   ├── FilesController.js
│   └── UsersController.js
├── routes/
│   ├── index.js
├── services/
│   ├── FileService.js
├── app.js
├── README.md
└── package.json
```

### Key Components
- **Controllers**: Handle HTTP requests and responses.
- **Routes**: Define the API endpoints.
- **Services**: Contain business logic and interface with the data layer.

## Endpoints

### Status
- **GET /status**: Returns the status of the application.

### Authentication
- **GET /connect**: Initiates user connection.
- **GET /disconnect**: Ends the user session.
- **GET /users/me**: Fetches the details of the authenticated user.

### Users
- **POST /users**: Creates a new user.

### Files
- **GET /files/:id**: Fetches details of a specific file.
- **GET /files**: Retrieves a list of all files.

## How to Run

### Prerequisites
- Node.js (v14 or higher)
- npm (v7 or higher)

### Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
Start the development server:
```bash
npm start
```

The application will run on `http://localhost:3000` by default.

### Testing the Endpoints
Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the API endpoints.

## Example Request and Response

### Fetch a File by ID
#### Request:
```bash
GET /files/123
```

#### Response:
```json
{
  "fileId": "123",
  "fileName": "example.txt",
  "fileSize": "2MB",
  "fileType": "text/plain",
  "message": "File retrieved successfully."
}
```

### List All Files
#### Request:
```bash
GET /files
```

#### Response:
```json
{
  "files": [
    {
      "fileId": "123",
      "fileName": "example.txt",
      "fileSize": "2MB",
      "fileType": "text/plain"
    },
    {
      "fileId": "124",
      "fileName": "image.png",
      "fileSize": "3MB",
      "fileType": "image/png"
    }
  ],
  "message": "Files retrieved successfully."
}
```

## Error Handling
- **404 Not Found**: Returned when a requested file or resource does not exist.
- **500 Internal Server Error**: Returned when an unexpected error occurs.

## Contributing
Feel free to open issues or submit pull requests for improvements and bug fixes.

## Author

Victor paul
