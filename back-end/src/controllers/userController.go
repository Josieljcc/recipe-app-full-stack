package controllers

import (
	"backend/src/models"
	"backend/src/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UserCreate(c *gin.Context) {
	var body struct {
		Name     string `json:"name"`
		Password string `json:"password"`
		Email    string `json:"email"`
	}

	c.Bind(&body)
	user := models.User{Name: body.Name, Password: body.Password, Email: body.Email}

	result := services.CreateUser(&user)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": result.Error,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}

func GetFavorites(c *gin.Context) {
	id := c.MustGet("id").(float64)
	favorites := services.GetFavorites(id)
	c.JSON(http.StatusOK, gin.H{
		"favorites": favorites,
	})
}
