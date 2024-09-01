# Stage 1: Build the Next.js app
FROM node:22.7.0-alpine3.20 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the Next.js app, which now automatically exports static files
RUN npm run build

# Stage 2: Serve static files using Nginx
FROM nginx:alpine

# Copy the exported static files from the builder stage to the Nginx web directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
