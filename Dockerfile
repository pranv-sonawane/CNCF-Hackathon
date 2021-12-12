# We don't want to start from scratch.
# That is why we tell node here to use the current node image as base.
FROM node:alpine3.11

# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY index*.html ./

# Install node packages
RUN index.html

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY css/ .
COPY images/ .
COPY javascript/ .

# Build the app
RUN index.html

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE $PORT

# Set host to localhost / the docker image
ENV NUXT_HOST=0.0.0.0

# Set app port
ENV NUXT_PORT=$PORT

# Set the base url
ENV PROXY_API=$PROXY_API

# Set the browser base url
ENV PROXY_LOGIN=$PROXY_LOGIN

# Start the app
CMD [ "index.html" ]