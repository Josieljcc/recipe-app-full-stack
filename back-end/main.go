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
	app.Use(cors.New(
		cors.Config{
			AllowOrigins:     []string{"http://localhost:3000", "http://localhost:3001"},
			AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
			AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
			ExposeHeaders:    []string{"Content-Length"},
			AllowCredentials: true,
		},
	))
	app.StaticFS("/images", http.Dir("src/images"))
	app.GET("/recipes/search/", controllers.GetRecipeByTitle)
	app.GET("/favorite", middlewares.ValidateToken(), controllers.GetFavorites)
	app.GET("/recipes/:page", controllers.GetAllRecipes)
	app.GET("/recipe/:id", controllers.GetRecipeById)
	app.POST("/favorite/:recipeId", middlewares.ValidateToken(), controllers.InsertFavoriteRecipe)
	app.DELETE("/favorite/:recipeId", middlewares.ValidateToken(), controllers.RemoveFavoriteRecipe)
	app.POST("/register", controllers.UserCreate)
	app.POST("/login", controllers.LoginController)
	app.GET("/video/:id", controllers.GetVideoUrl)
	app.Run() // listen and serve on db:3001
}
