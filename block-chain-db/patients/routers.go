package patients

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jameshsu333/block-chain-db/common"
)

func PatientRegister(router *gin.RouterGroup) {
	router.GET("/:ID", PatientRetrieve)
}

func PatientRetrieve(c *gin.Context) {
	ID := c.Param("ID")
	patientModel, err := FindOnePatient(&PatientModel{ID: ID})

	if err != nil {
		c.JSON(http.StatusNotFound, common.NewError("message", errors.New("Invalid patient ID")))
		return
	}

	patientSerializer := PatientSerializer{c, patientModel}
	c.JSON(http.StatusOK, patientSerializer.Response())
}
