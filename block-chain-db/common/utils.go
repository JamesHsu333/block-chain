package common

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/base64"
	"encoding/pem"
	"errors"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

func EncryptData(data string, publicKey string) (string, error) {
	Data := []byte(data)
	PublicKey := []byte(publicKey)

	block, _ := pem.Decode(PublicKey)
	if block == nil {
		return "", errors.New("Public Key Error")
	}

	pubInterface, err := x509.ParsePKIXPublicKey(block.Bytes)
	if err != nil {
		return "", err
	}

	pub := pubInterface.(*rsa.PublicKey)
	encryptData, err := rsa.EncryptPKCS1v15(rand.Reader, pub, Data)
	res := base64.StdEncoding.EncodeToString(encryptData)
	return res, err
}

func Bind(c *gin.Context, obj interface{}) error {
	b := binding.Default(c.Request.Method, c.ContentType())
	return c.ShouldBindWith(obj, b)
}

type CommonError struct {
	Errors map[string]interface{} `json:"errors"`
}

func NewError(key string, err error) CommonError {
	res := CommonError{}
	res.Errors = make(map[string]interface{})
	res.Errors[key] = err.Error()
	return res
}
