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

// get a recipe by id from database
func GetRecipeById(c *gin.Context) {
	id := c.Param("id")
	recipe := services.GetRecipeById(id)
	c.JSON(200, gin.H{
		"recipe": recipe,
	})
}
