package main

import (
	"backend/src/controllers"
	"backend/src/database"

	"github.com/gin-gonic/gin"
)

func init() {
	// connect to database
	database.ConnectToDB()
}

func main() {
	app := gin.Default()
	app.POST("/user", controllers.UserCreate)
	app.Run() // listen and serve on 0.0.0.0:3001
}
