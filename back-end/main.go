package main

import (
	"backend/src/controllers"
	"backend/src/database"

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
	app.POST("/register", controllers.UserCreate)
	app.POST("/login", controllers.LoginController)
	app.Run() // listen and serve on db:3001
}
