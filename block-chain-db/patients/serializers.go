package patients

import (
	"github.com/gin-gonic/gin"
)

type PatientSerializer struct {
	C *gin.Context
	PatientModel
}

type PatientResponse struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func (self *PatientSerializer) Response() PatientResponse {
	patient := PatientResponse{
		ID:   self.ID,
		Name: self.Name,
	}
	return patient
}
