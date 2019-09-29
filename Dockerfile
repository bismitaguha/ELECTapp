FROM golang:alpine
ADD ./gin /go/src/app
RUN apk update && apk upgrade && \
    apk add --no-cache git
WORKDIR /go/src/app
ENV PORT=3001
CMD ["go", "run", "main.go"]