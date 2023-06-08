package controllers

import (
	"backend/src/services"

	"github.com/gin-gonic/gin"
)

// get all recipes from database

func GetAllRecipes(c *gin.Context) {
	recipes := services.GetAllRecipes()
	c.JSON(200, gin.H{
		"recipes": recipes,
	})
}
