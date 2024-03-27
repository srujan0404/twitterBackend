# Twitter Clone

This project is a simple Twitter clone built using Node.js and Express. It utilizes MongoDB for data storage and includes various features such as user authentication, JWT, and more.

## Features

- User authentication with JWT
- MongoDB for data storage
- RESTful API
- Middleware for handling cookies and CORS
- Environment variable management with dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/twitter-clone.git
   cd twitter-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Dependencies

This project uses the following npm packages:

- `bcryptjs`: For hashing passwords
- `cookie-parser`: For parsing cookies
- `cors`: For enabling CORS
- `dotenv`: For environment variable management
- `express`: Web framework for Node.js
- `jsonwebtoken`: For creating and verifying JWTs
- `mongoose`: MongoDB object modeling tool
- `nodemon`: For automatically restarting the server during development

## Usage

You can use the API endpoints to interact with the application. Refer to the API documentation for details on available endpoints and their usage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the ISC License.
