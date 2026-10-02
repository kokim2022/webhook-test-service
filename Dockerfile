FROM node:24-alpine
# Set the working directory inside the container
WORKDIR /usr/src/app

# Install pnpm (same version as the lockfile was created with)
RUN npm install -g pnpm@10.13.1

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install the application dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN pnpm run build

# Expose the application port
EXPOSE 3999

# Command to run the application
CMD ["node", "dist/main"]
