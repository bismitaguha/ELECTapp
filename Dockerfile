FROM golang:alpine
ADD ./gin /go/src/app
WORKDIR /go/src/app
ENV PORT=3001
CMD ["go", "run", "main.go"]