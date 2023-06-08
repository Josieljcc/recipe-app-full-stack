package services

import (
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

func Login(c *interfaces.ILogin) *Response {
	var user models.User
	resultEmail := database.DB.Where("email = ?", c.Email).First(&user)
	if resultEmail.Error == gorm.ErrRecordNotFound {
		return &Response{Error: resultEmail.Error, Message: "User not found"}
	}
	result := database.DB.Where("email = ? AND password = ?", c.Email, c.Password).First(&user)
	if result.Error != nil {
		return &Response{Error: result.Error, Message: "wrong password"}
	}
	return &Response{Data: user, Message: "User logged in"}
}
