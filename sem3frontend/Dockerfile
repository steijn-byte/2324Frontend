# Stage 1: Build the Angular application
FROM node:latest as build

#set working directory
WORKDIR /app

COPY ./sem3frontend/package*.json ./

RUN npm ci

COPY ./sem3frontend .

RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/sem3frontend /usr/share/nginx/html

# Expose port 80 and 443
EXPOSE 80

# Default command to start NGINX and serve the application
CMD ["nginx", "-g", "daemon off;"]