package controllers

import (
	"backend/src/auth"
	"backend/src/interfaces"
	"backend/src/models"
	"backend/src/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func LoginController(c *gin.Context) {
	//get data from request body
	var body struct {
		Password string `json:"password"`
		Email    string `json:"email"`
	}
	c.Bind(&body)
	//create user
	login := interfaces.ILogin{Password: body.Password, Email: body.Email}
	result := services.Login(&login)
	//return user
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error":   result.Error,
			"message": result.Message,
		})
		return
	}
	// create token
	tokenData := interfaces.IDataToken{
		Name:  result.Data.(models.User).Name,
		Id:    result.Data.(models.User).ID,
		Email: result.Data.(models.User).Email,
	}
	token := auth.GenerateToken(&tokenData)
	c.JSON(http.StatusOK, gin.H{
		"token": token,
		"id":    result.Data.(models.User).ID,
		"name":  result.Data.(models.User).Name,
		"email": result.Data.(models.User).Email,
	})
}
