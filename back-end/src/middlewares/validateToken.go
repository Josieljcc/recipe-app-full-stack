package middlewares

import (
	"backend/src/auth"

	"github.com/gin-gonic/gin"
)

type Token struct {
	Token string `json:"token"`
}

func ValidateToken() gin.HandlerFunc {
	return func(c *gin.Context) {
		token := c.GetHeader("Authorization")
		if token == "" {
			c.JSON(401, gin.H{
				"error":   "unauthorized",
				"message": "token not found",
			})
			return
		}
		claim, err := auth.ValidateToken(token)
		id := claim["id"].(float64)
		if err != nil {
			c.JSON(401, gin.H{
				"error":   "unauthorized",
				"message": err.Error(),
			})
			return
		}
		c.Set("id", id)
		c.Next()
	}
}
