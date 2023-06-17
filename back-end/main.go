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
	app.Use(cors.Default())
	app.StaticFS("/images", http.Dir("src/images"))
	app.GET("/recipes/", controllers.GetRecipeByTitle)
	app.PATCH("/favorite/")
	app.GET("/favorite", middlewares.ValidateToken(), controllers.GetFavorites)
	app.GET("/recipes/:page", controllers.GetAllRecipes)
	app.GET("/recipe/:id", controllers.GetRecipeById)
	app.POST("/favorite", middlewares.ValidateToken(), controllers.InsertFavoriteRecipe)
	app.POST("/register", controllers.UserCreate)
	app.POST("/login", controllers.LoginController)
	app.GET("/video/:id", controllers.GetVideoUrl)
	app.Run() // listen and serve on db:3001
}
