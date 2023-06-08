package main

import (
	"backend/src/database"
	"backend/src/models"
)

func init() {
	database.ConnectToDB()
}

func main() {
	database.DB.AutoMigrate(&models.User{})
	database.DB.AutoMigrate(&models.Recipe{})
	database.DB.AutoMigrate(&models.Ingredient{})
}
