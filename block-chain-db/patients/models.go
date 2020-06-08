package patients

import (
	"github.com/jameshsu333/block-chain-db/common"
)

type PatientModel struct {
	ID        string
	Name      string
	PublicKey string
}

func AutoMigrate() {
	db := common.GetDB()

	db.AutoMigrate(&PatientModel{})
}

func FindOnePatient(condition interface{}) (PatientModel, error) {
	db := common.GetDB()
	var model PatientModel
	err := db.Where(condition).Find(&model).Error
	return model, err
}

func FindOnePatientPb(ID string) (string, error) {
	db := common.GetDB()
	var model PatientModel
	err := db.Where("id = ?", ID).Find(&model).Error
	return model.PublicKey, err
}
