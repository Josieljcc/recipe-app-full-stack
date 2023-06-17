package services

import (
	"backend/src/database"
	"backend/src/models"

	"gorm.io/gorm"
)

func CreateUser(user *models.User) *gorm.DB {
	var result = database.DB.Create(&user)
	return result
}

func GetUserByID(id string) models.User {
	var user models.User
	database.DB.First(&user, id)
	return user
}

func GetFavorites(id float64) []*models.Recipe {
	var user models.User
	database.DB.Preload("Favorites").Find(&user, id)
	return user.Favorites
}
