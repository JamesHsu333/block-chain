package records

import (
	"github.com/gin-gonic/gin"
	"github.com/jameshsu333/block-chain-db/common"
	"github.com/jameshsu333/block-chain-db/patients"
)

type RecordSerializer struct {
	C *gin.Context
	RecordModel
}

type RecordResponse struct {
	ID         string `json:"id"`
	Name       string `json:"name"`
	Hospital   string `json:"hospital"`
	Doctor     string `json:"doctor"`
	DoctorID   string `json:"doctor_id"`
	Problem    string `json:"problem"`
	Medication string `json:"medication"`
}

func (self *RecordSerializer) Response() RecordResponse {
	publicKey, err := patients.FindOnePatientPb(self.ID)

	if err != nil {
		panic(err)
	}

	record := RecordResponse{
		ID:         Must(common.EncryptData(self.ID, publicKey)),
		Name:       Must(common.EncryptData(self.Name, publicKey)),
		Hospital:   Must(common.EncryptData(self.Hospital, publicKey)),
		Doctor:     Must(common.EncryptData(self.Doctor, publicKey)),
		DoctorID:   Must(common.EncryptData(self.DoctorID, publicKey)),
		Problem:    Must(common.EncryptData(self.Problem, publicKey)),
		Medication: Must(common.EncryptData(self.Medication, publicKey)),
	}
	return record
}

func Must(data string, err error) string {
	if err != nil {
		panic(err)
	}
	return data
}
