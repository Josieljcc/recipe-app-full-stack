package middlewares

import (
	"backend/src/auth"
	"fmt"

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
		fmt.Println(claim)
		if err != nil {
			c.JSON(401, gin.H{
				"error":   "unauthorized",
				"message": err.Error(),
			})
			return
		}
		c.Set("user", claim)
		c.Next()
	}
}
