package controllers

import (
	"backend/src/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

// get all recipes from database

func GetAllRecipes(c *gin.Context) {
	page := c.Param("page")
	pageint, err := strconv.Atoi(page)
	if err != nil {
		c.JSON(400, gin.H{
			"error":   err,
			"message": "page must be a number",
		})
		return
	}
	recipes := services.GetAllRecipes(pageint)
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
