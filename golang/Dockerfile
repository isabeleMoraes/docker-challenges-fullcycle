FROM golang:1.22 as builder

WORKDIR /usr/src/app

RUN 

COPY ./hello.go /usr/src/app

RUN go mod init exemplo/hello && \
    go build -o hellofullcycle


FROM scratch
COPY --from=builder /usr/src/app/hellofullcycle .
ENTRYPOINT ["./hellofullcycle"]