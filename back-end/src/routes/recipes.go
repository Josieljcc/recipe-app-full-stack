package routes

import (
	"backend/src/controllers"

	"github.com/gin-gonic/gin"
)

func addUserRoutes(rg *gin.RouterGroup) {
	recipes := rg.Group("/recipes")
	{
		recipes.GET("/page/:page", controllers.GetAllRecipes)
		recipes.GET("/search", controllers.GetRecipeByTitle)
		recipes.GET("/:id", controllers.GetRecipeById)
	}
}
