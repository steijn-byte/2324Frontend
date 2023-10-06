# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular application
RUN npm run build

# Expose the port the app runs on
EXPOSE 4200

# Command to run the Angular application
CMD ["npm", "start"]
