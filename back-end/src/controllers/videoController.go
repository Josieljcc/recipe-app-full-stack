package controllers

import (
	"backend/src/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetVideoUrl(c *gin.Context) {
	id := c.Param("id")
	recipe := services.GetRecipeById(id)
	videoUrl := services.GetVideoUrl(recipe.Title)
	c.JSON(http.StatusOK, gin.H{
		"videoUrl": videoUrl,
	})
}
