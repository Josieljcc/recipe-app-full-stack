package main

import (
	"backend/src/controllers"
	"backend/src/database"
	"net/http"

	"github.com/gin-gonic/gin"
)

func init() {
	// connect to database
	database.ConnectToDB()
}

func main() {
	app := gin.Default()
	// app.Use(cors.Default())
	app.StaticFS("/images", http.Dir("src/images"))
	app.GET("/recipes", controllers.GetAllRecipes)
	app.GET("/recipes/:id", controllers.GetRecipeById)
	app.POST("/register", controllers.UserCreate)
	app.POST("/login", controllers.LoginController)
	app.GET("/login", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "login",
		})
	})
	app.Run() // listen and serve on db:3001
}
