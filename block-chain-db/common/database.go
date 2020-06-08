package common

import (
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

type Database struct {
	*gorm.DB
}

var DB *gorm.DB

func Init() *gorm.DB {
	db, err := gorm.Open("mysql", "user:blockchain@(block-chain-mariadb:3306)/BlockChain?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		fmt.Println("DB err: ", err)
	}
	db.DB().SetMaxIdleConns(10)
	DB = db
	return DB
}

func GetDB() *gorm.DB {
	return DB
}
