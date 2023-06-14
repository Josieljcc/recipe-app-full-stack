package main

import (
	"backend/src/controllers"
	"backend/src/database"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	// connect to database
	database.ConnectToDB()
}

func main() {
	app := gin.Default()
	app.Use(cors.Default())
	app.StaticFS("/images", http.Dir("src/images"))
	app.GET("/recipes/", controllers.GetRecipeByTitle)
	app.PATCH("/favorite/")
	app.GET("/recipes/:page", controllers.GetAllRecipes)
	app.GET("/recipe/:id", controllers.GetRecipeById)
	app.POST("/register", controllers.UserCreate)
	app.POST("/login", controllers.LoginController)
	app.GET("/video/:id", controllers.GetVideoUrl)
	app.Run() // listen and serve on db:3001
}
