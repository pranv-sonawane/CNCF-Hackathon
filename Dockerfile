# getting base image

FROM ubuntu

COPY . /

CMD ["curl", "localhost:80"]