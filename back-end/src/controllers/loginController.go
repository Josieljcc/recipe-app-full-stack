package controllers

import (
	"backend/src/auth"
	"backend/src/configuration/rest_err"
	"backend/src/interfaces"
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
	result, err := services.Login(&login)
	if err != nil {
		c.JSON(err.Code, err)
		return
	}

	//return user
	tokenData := interfaces.IDataToken{
		Name:  result.Name,
		Id:    result.ID,
		Email: result.Email,
	}
	// create token
	token := auth.GenerateToken(&tokenData)
	c.JSON(http.StatusOK, gin.H{
		"token": token,
		"id":    result.ID,
		"name":  result.Name,
		"email": result.Email,
	})
}
