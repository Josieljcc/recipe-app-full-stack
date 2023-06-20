package services

import (
	"backend/src/configuration/rest_err"
	"backend/src/database"
	"backend/src/interfaces"
	"backend/src/models"
)

func CreateUser(user *interfaces.IUser) *rest_err.RestErr {
	if err := database.DB.Create(&user).Error; err != nil {
		customError := rest_err.NewInternalServerError("error to create user", err)
		return customError
	}
	return nil
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
