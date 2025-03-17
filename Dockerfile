# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js project
RUN npm run build

# Run the Next.js project
# RUN npm run start

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Command to start the Next.js server
CMD ["npm", "run", "start"]