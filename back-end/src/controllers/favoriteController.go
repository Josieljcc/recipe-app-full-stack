package controllers

import (
	"backend/src/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetFavorites(c *gin.Context) {
	id := c.MustGet("id").(float64)
	favorites := services.GetFavorites(id)
	c.JSON(http.StatusOK, gin.H{
		"favorites": favorites,
	})
}

func InsertFavoriteRecipe(c *gin.Context) {
	recipeId := c.Param("recipeId")
	id := c.MustGet("id").(float64)
	err := services.InsertFavoriteRecipe(id, recipeId)
	if err != nil {
		c.JSON(err.Code, err)
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "favorite inserted",
	})
}

func RemoveFavoriteRecipe(c *gin.Context) {
	recipeId := c.Param("recipeId")
	id := c.MustGet("id").(float64)
	err := services.RemoveFavoriteRecipe(id, recipeId)
	if err != nil {
		c.JSON(err.Code, err)
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "favorite removed",
	})
}
