# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies for the project
RUN npm install

# Copy the rest of the application code
COPY . .


# Copy the .env file to the container
COPY .env .env

# Expose the port the app will run on (adjust this according to your app's configuration)
EXPOSE 3000

# Command to run the Node.js server
CMD ["npm", "run","dev"]
