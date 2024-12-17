# Use Node.js 14 as the base image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code into JavaScript
RUN npm run build

# Start a new stage for the production image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built JavaScript files and package.json from the previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port on which the app runs
EXPOSE 8080

# Command to run the app
CMD ["node", "dist/index.js"]
