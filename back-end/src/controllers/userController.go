package controllers

import (
	"backend/src/database"
	"backend/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UserCreate(c *gin.Context) {
	//get data from request body

	//create user
	user := models.User{Name: "Josiel", Password: "password", Email: "teste@teste.com"}
	result := database.DB.Create(&user)
	//return user
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": result.Error,
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}
