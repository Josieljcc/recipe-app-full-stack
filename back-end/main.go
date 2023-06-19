package main

import (
	"backend/src/controllers"
	"backend/src/database"
	"backend/src/middlewares"
	"backend/src/models"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	// connect to database
	database.ConnectToDB()
	// migrate models
	database.DB.AutoMigrate(&models.User{}, &models.Recipe{}, &models.Ingredient{})
}

func main() {
	app := gin.Default()
	app.Use(setupCORS())
	recipes := app.Group("/recipes")
	{
		recipes.GET("/page/:page", controllers.GetAllRecipes)
		recipes.GET("/search", controllers.GetRecipeByTitle)
		recipes.GET("/:id", controllers.GetRecipeById)
	}

	favorites := app.Group("/favorites")
	favorites.Use(middlewares.ValidateToken())
	{
		favorites.GET("", controllers.GetFavorites)
		favorites.POST("/:recipeId", controllers.InsertFavoriteRecipe)
		favorites.DELETE("/:recipeId", controllers.RemoveFavoriteRecipe)
	}

	app.StaticFS("/images", http.Dir("src/images"))
	app.POST("/register", controllers.UserCreate)
	app.POST("/login", controllers.LoginController)

	app.Run() // listen and serve on db:3001
}

func setupCORS() gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "http://localhost:3001"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	})
}
