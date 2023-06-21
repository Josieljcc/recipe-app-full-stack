package services

import (
	"backend/src/configuration/rest_err"
	"backend/src/database"
	"backend/src/interfaces"
	"backend/src/models"

	"gorm.io/gorm"
)

type Response struct {
	Error   error
	Data    interface{}
	Message string
}

func Login(c *interfaces.ILogin) (*models.User, *rest_err.RestErr) {
	var user models.User
	resultEmail := database.DB.Where("email = ?", c.Email).First(&user)
	if resultEmail.Error == gorm.ErrRecordNotFound {
		customError := rest_err.NewBadRequestError("user not found")
		return nil, customError
	}

	if !interfaces.CheckPasswordHash(c.Password, user.Password) {
		customError := rest_err.NewBadRequestError("invalid password")
		return nil, customError
	}

	return &user, nil
}
