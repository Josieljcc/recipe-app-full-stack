package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDB() {
	var err error
	// refer https://github.com/go-sql-driver/mysql#dsn-data-source-name for details
	dsn := "root:senhaDoDB@tcp(db:3306)/app-recipes-db?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
}

// import (
// 	"log"

// 	"gorm.io/driver/mysql"
// 	"gorm.io/gorm"
// )

// var DB *gorm.DB

// func ConnectToDB() {
// 	var err error
// 	// connect to database using gorm
// 	// dbpass := os.Getenv("MYSQL_PASSWORD")
// 	// dbuser := os.Getenv("MYSQL_USER")
// 	// dbname := os.Getenv("MYSQL_DB_NAME")
// 	dsn := "root" + ":" + "senhaDoDB" + "@tcp(127.0.0.1:3306)/" + "app-recipes-db"
// 	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// }
