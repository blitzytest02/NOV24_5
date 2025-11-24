# Node.js Express.js Tutorial Server

A simple Node.js tutorial server demonstrating the Express.js web framework with basic routing and multiple endpoints.

## Description

This project is a beginner-friendly tutorial that shows how to create a Node.js HTTP server using the Express.js framework. The server implements two GET endpoints that return simple text responses, demonstrating the fundamentals of web server development with Express.js.

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- **Node.js** (v14.x or higher, v20.x recommended)
- **npm** (Node Package Manager, comes with Node.js)

To verify your installations, run:
```bash
node --version
npm --version
```

## Installation

1. Navigate to the project directory:
```bash
cd NOV24_5
```

2. Install the project dependencies:
```bash
npm install
```

This will install Express.js and all required dependencies listed in `package.json`.

## Running the Server

Start the server using the npm start script:
```bash
npm start
```

Alternatively, you can run the server directly with Node.js:
```bash
node server.js
```

You should see output similar to:
```
Server running on port 3000
Access the server at http://localhost:3000
Available endpoints:
  - GET / -> "Hello world"
  - GET /evening -> "Good evening"
```

## Available Endpoints

### GET /
Returns a "Hello world" greeting message.

**Example using curl:**
```bash
curl http://localhost:3000/
```

**Response:**
```
Hello world
```

**Browser:** Navigate to [http://localhost:3000/](http://localhost:3000/)

---

### GET /evening
Returns a "Good evening" greeting message.

**Example using curl:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

**Browser:** Navigate to [http://localhost:3000/evening](http://localhost:3000/evening)

## Testing the Endpoints

You can test the endpoints using any of these methods:

1. **Web Browser:** Open your browser and navigate to the URLs listed above
2. **curl:** Use the curl commands shown in the endpoint documentation
3. **Postman:** Import the URLs as GET requests
4. **HTTPie:** Use `http localhost:3000/` or `http localhost:3000/evening`

## Project Structure

```
NOV24_5/
├── node_modules/       # Installed dependencies (auto-generated)
├── .gitignore         # Git ignore patterns
├── package.json       # Project manifest and dependencies
├── package-lock.json  # Locked dependency versions (auto-generated)
├── server.js          # Main Express.js application
└── README.md          # This file
```

## Technologies Used

- **Node.js** v20.x - JavaScript runtime environment
- **Express.js** v4.21.x - Fast, unopinionated web framework for Node.js
- **npm** - Package manager for JavaScript

## Configuration

The server port can be configured using the `PORT` environment variable:

```bash
PORT=8080 npm start
```

If no PORT is specified, the server defaults to port 3000.

## License

MIT

## Learn More

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [npm Documentation](https://docs.npmjs.com/)
