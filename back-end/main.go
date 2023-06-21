package main

import (
	"backend/src/database"
	"backend/src/models"
	"backend/src/routes"
	"log"
)

func init() {
	// connect to database
	if err := database.ConnectToDB(); err != nil {
		log.Fatal(err)
	}
	// migrate models
	database.DB.AutoMigrate(&models.User{}, &models.Recipe{}, &models.Ingredient{})
}

func main() {
	routes.Run()
}
