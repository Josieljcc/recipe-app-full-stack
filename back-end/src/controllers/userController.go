package controllers

import (
	"backend/src/configuration/rest_err"
	"backend/src/interfaces"
	"backend/src/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UserCreate(c *gin.Context) {
	var user interfaces.User
	if err := c.ShouldBindJSON(&user); err != nil {
		customError := rest_err.NewBadRequestError("invalid user data")
		c.JSON(customError.Code, customError)
		return
	}

	if err := services.CreateUser(user); err != nil {
		c.JSON(err.Code, err)
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "user created",
	})
}
