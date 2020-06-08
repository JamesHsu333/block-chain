package main

import (
	"github.com/gin-gonic/gin"
	"github.com/jameshsu333/block-chain-db/common"
	"github.com/jameshsu333/block-chain-db/patients"
	"github.com/jameshsu333/block-chain-db/records"
	"github.com/jinzhu/gorm"
)

func Migrate(db *gorm.DB) {
	records.AutoMigrate()
	patients.AutoMigrate()
	db.AutoMigrate(&records.RecordModel{})
	db.AutoMigrate(&patients.PatientModel{})
}

func main() {
	db := common.Init()
	Migrate(db)
	defer db.Close()

	r := gin.Default()

	v1 := r.Group("/api")
	records.RecordRegister(v1.Group("/records"))
	patients.PatientRegister(v1.Group("/patients"))

	r.Run(":8000")
}
