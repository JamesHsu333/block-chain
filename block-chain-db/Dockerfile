FROM scratch
WORKDIR $GOPATH/block-chain-db
COPY . $GOPATH/block-chain-db
ENV GIN_MODE=release
EXPOSE 8000
CMD ["./block-chain-db"]
