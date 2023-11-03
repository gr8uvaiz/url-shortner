# URL Shortener

[Live Demo](https://shorturl-c6iy.onrender.com/)

A basic URL shortener service built with **Node.js**, **Express.js**, **MongoDB**, **EJS**, and **Bootstrap**. This project allows you to shorten long URLs, create custom short URLs, and provides user authentication using JWT tokens along with authorization for secure URL management.

## Features

- Shorten long URLs and generate custom short URLs with a unique identifier.
- User authentication with JWT tokens to securely manage your URLs.
- Authorization for users to edit, delete, and view their own shortened URLs.
- View detailed statistics for each shortened URL, including click counts.
- URL redirection to the original long URL when accessing a shortened link.
- Stylish and user-friendly web interface powered by Bootstrap.
- Lightweight, minimalistic, and customizable design.

## Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/gr8uvaiz/url-shortner.git
   ```

2. Change directory to the project folder:

   ```shell
   cd url-shortener
   ```

3. Install the required packages:

   ```shell
   npm install
   ```

4. Configure the application by creating a `.env` file in the project's root directory with the following content:

   ```
   MONGODB_URI=mongodb://localhost/url-shortener
   SECRET_KEY=your-secret-key
   ```

5. Start the application:

   ```shell
   npm start
   ```

6. Access the URL shortener web interface in your web browser at `http://localhost:3000`.

## Configuration

You can customize the URL shortener by modifying the configuration in the `.env` file:

- `MONGODB_URI`: The MongoDB connection URI.
- `SECRET_KEY`: A secret key for JWT token generation.

## Usage

1. Access the web interface at `http://localhost:3000` (or your hosted domain).

2. Register or log in to create and manage your shortened URLs.

3. Paste a long URL into the input field and create a custom short URL or let the system generate a unique one.

4. To view detailed statistics for a shortened URL, click on the link in your URL list.

5. You can edit or delete your own shortened URLs from your user dashboard.

## Acknowledgments

- This project was created using Node.js, Express.js, MongoDB, EJS, Bootstrap, and JWT for authentication and authorization.
