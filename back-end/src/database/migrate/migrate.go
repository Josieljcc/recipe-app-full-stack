package main

import (
	"backend/src/database"
	"backend/src/models"
)

func init() {
	database.ConnectToDB()
}

func main() {
	database.DB.AutoMigrate(&models.User{}, &models.Recipe{}, &models.Ingredient{})
}
