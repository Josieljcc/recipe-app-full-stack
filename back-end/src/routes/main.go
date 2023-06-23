package routes

import (
	"backend/src/controllers"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var router = gin.Default()

func Run() {
	router.Use(setupCORS())
	getRoutes()
	if err := router.Run(":3001"); err != nil {
		log.Fatal(err)
	}
}

func getRoutes() {
	v1 := router.Group("/")
	addUserRoutes(v1)
	addFavoritesRoutes(v1)
	v1.StaticFS("/images", http.Dir("src/images"))
	v1.POST("/register", controllers.UserCreate)
	v1.POST("/login", controllers.LoginController)
}

func setupCORS() gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"*"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
	})
}
