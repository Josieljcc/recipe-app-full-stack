package controllers

import (
	"backend/src/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func InsertFavoriteRecipe(c *gin.Context) {
	var body struct {
		RecipeId uint `json:"recipeId"`
	}
	c.Bind(&body)

	id := c.MustGet("id").(float64)

	result := services.InsertFavoriteRecipe(id, body.RecipeId)
	if result != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error":   result,
			"message": "error to insert favorite",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": body,
	})
}
