package records

import (
	"github.com/jameshsu333/block-chain-db/common"
)

type RecordModel struct {
	ID         string
	Name       string
	Hospital   string
	Doctor     string
	DoctorID   string
	Problem    string
	Medication string
}

func AutoMigrate() {
	db := common.GetDB()

	db.AutoMigrate(&RecordModel{})
}

func FindOneRecord(condition interface{}) (RecordModel, error) {
	db := common.GetDB()
	var model RecordModel
	err := db.Where(condition).Find(&model).Error
	return model, err
}
