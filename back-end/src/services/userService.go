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
