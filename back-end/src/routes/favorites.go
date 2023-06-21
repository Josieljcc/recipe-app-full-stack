package routes

import (
	"backend/src/controllers"
	"backend/src/middlewares"

	"github.com/gin-gonic/gin"
)

func addFavoritesRoutes(rg *gin.RouterGroup) {
	favorites := rg.Group("/favorites")
	favorites.Use(middlewares.ValidateToken())
	{
		favorites.GET("", controllers.GetFavorites)
		favorites.POST("/:recipeId", controllers.InsertFavoriteRecipe)
		favorites.DELETE("/:recipeId", controllers.RemoveFavoriteRecipe)
	}

}
