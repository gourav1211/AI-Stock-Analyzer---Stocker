# Use a lightweight official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Node.js application listens on
EXPOSE 3000

# Command to run the application when the container starts
CMD ["node", "index.js"]