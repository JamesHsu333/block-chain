package records

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jameshsu333/block-chain-db/common"
)

func RecordRegister(router *gin.RouterGroup) {
	router.GET("/:ID", RecordRetrieve)
}

func RecordRetrieve(c *gin.Context) {
	ID := c.Param("ID")
	recordModel, err := FindOneRecord(&RecordModel{ID: ID})

	if err != nil {
		c.JSON(http.StatusNotFound, common.NewError("message", errors.New("Invalid patient ID")))
		return
	}

	recordSerializer := RecordSerializer{c, recordModel}
	c.JSON(http.StatusOK, recordSerializer.Response())
}
