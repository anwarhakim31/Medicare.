# Medicare. MongoDB Express React Node project

Medicare is a medical booking, patients can book a doctor if the doctor is part of this website. this website can access 2 roles, namely patients and doctors.

# The dependencies that this project uses:

*Frontend*

-vite For building and bundling the application

-react-router-dom: For routing

-tailwind for stayling

-fetch: For making HTTP requests

-context API: For state management

-react-toastify: For toast notifications

-Strapi for payment getway


*Backend*

-express: For creating the server

-mongoose: For interacting with MongoDB

-cors: For handling Cross-Origin Resource Sharing

-dotenv: For managing environment variables

-joi: For validation

-bcryptjs: For hashing passwords

-jsonwebtoken: For authentication

-nodemon: For automatic server restarts during development


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm: Node.js package manager (comes with Node.js installation)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/anwarhakim31/Medicare..git Medicare
   ```

2. Navigate to  front project directory:

     ```bash
     cd Medicare
     ```

3.  Navigate to backend directory and install depedencies

     ```bash
     cd backend
     npm install
     ```

4.  Navigate to frontend directory and install depedencies
   
     ```bash
     cd ..
     cd frontend
     npm install 
     ```

## Setup Environment

1. Create a .env file in the root backend of your project.


    PORT = 5000
  
    MONGO_URL = 
    
    JWT_SECRET_KEY = 
    
    STRIPE_SECRET_KEY=
    
    CLIENT_SITE_URL=http://localhost:5173
    
    EMAIL_USER= 
    
    EMAIL_PASS = 

2. Create a .env file in the root frontend of your project.
 
    VITE_CLOUDE_NAME =
    
    VITE_UPLOAD_PRESET =

## Development

1. To start the  server, run:
  
     ```bash
     npm run dev
     ```
   
 2. To start the frontend, run :

    ```bash
    npm run dev
    ```

## Deployment

Deploy the `dist` directory to your hosting platform of choice.
