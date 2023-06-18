FROM golang:latest

WORKDIR /back-end
RUN mkdir "/build"
COPY ./src ./src
COPY ./go.mod ./
COPY ./go.sum ./
COPY ./main.go ./
RUN go get github.com/githubnemo/CompileDaemon
RUN go install github.com/githubnemo/CompileDaemon
ENTRYPOINT CompileDaemon -build="go build -o /build/back-end" -command="/build/back-end"