FROM denoland/deno:1.19.1

ARG ENV

# The port that your application listens to.
EXPOSE 8181

# The directory that your application running in.
WORKDIR /app

# Install Denon in non-prod environment.
RUN if [ "$ENV" = "development" ] ; then \
    deno install -qAf --unstable https://deno.land/x/denon@2.5.0/denon.ts; \
fi;

# Set user `deno` owner of cache directory.
RUN chown -R deno:deno /deno-dir/

# Prefer not to run as root.
USER deno

# Copy application into container.
COPY lib/ lib/
COPY src/ src/

# Cache the dependencies as a layer.
RUN deno cache src/index.ts

# Run the application with the following flags:
#   --allow-net
#   --allow-env
#   --unstable
CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "--unstable", "./src/index.ts"]