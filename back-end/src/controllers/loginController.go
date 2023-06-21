package controllers

import (
	"backend/src/auth"
	"backend/src/configuration/rest_err"
	"backend/src/interfaces"
	"backend/src/models"
	"backend/src/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func LoginController(c *gin.Context) {
	//get data from request body
	var login interfaces.ILogin
	if err := c.ShouldBindJSON(&login); err != nil {
		customError := rest_err.NewBadRequestError("invalid json body")
		c.JSON(customError.Code, customError)
		return
	}
	//create user
	result := services.Login(&login)
	//return user
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error":   result.Error,
			"message": result.Message,
		})
		return
	}
	tokenData := interfaces.IDataToken{
		Name:  result.Data.(models.User).Name,
		Id:    result.Data.(models.User).ID,
		Email: result.Data.(models.User).Email,
	}
	// create token
	token := auth.GenerateToken(&tokenData)
	c.JSON(http.StatusOK, gin.H{
		"token": token,
		"id":    result.Data.(models.User).ID,
		"name":  result.Data.(models.User).Name,
		"email": result.Data.(models.User).Email,
	})
}
