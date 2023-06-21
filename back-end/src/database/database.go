package database

import (
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDB() error {
	dsn := os.Getenv("DB_CONNECTION_STRING")
	var err error
	// dsn := "root:senhaDoDB@tcp(db:3306)/app-recipes-db?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	return nil
}
