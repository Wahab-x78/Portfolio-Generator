# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy env file first (so it’s available at build time)
COPY .env.production .env.local

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
