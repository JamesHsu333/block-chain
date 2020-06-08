package records

import (
	"github.com/gin-gonic/gin"
	"github.com/jameshsu333/block-chain-db/common"
)

type RecordModelValidator struct {
	Record struct {
		Name       string
		Hospital   string
		Doctor     string
		DoctorID   string
		Problem    string
		Medication string
	}
	recordModel RecordModel
}

func (self *RecordModelValidator) Bind(c *gin.Context) error {
	err := common.Bind(c, self)
	if err != nil {
		return err
	}
	self.recordModel.Name = self.Record.Name
	self.recordModel.Hospital = self.Record.Hospital
	self.recordModel.Doctor = self.Record.Doctor
	self.recordModel.Problem = self.Record.Problem
	self.recordModel.Medication = self.Record.Medication

	return nil
}

func NewRecordModelValidator() RecordModelValidator {
	recordModelValidator := RecordModelValidator{}
	//userModelValidator.User.Email ="w@g.cn"
	return recordModelValidator
}

func NewRecordModelValidatorFillWith(recordModel RecordModel) RecordModelValidator {
	recordModelValidator := NewRecordModelValidator()
	recordModelValidator.Record.Name = recordModel.Name
	recordModelValidator.Record.Hospital = recordModel.Hospital
	recordModelValidator.Record.Doctor = recordModel.Doctor
	recordModelValidator.Record.Problem = recordModel.Problem
	recordModelValidator.Record.Medication = recordModel.Medication

	return recordModelValidator
}
