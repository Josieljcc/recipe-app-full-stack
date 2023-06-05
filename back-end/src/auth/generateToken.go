package auth

import (
	"backend/src/interfaces"
	"os"

	"github.com/golang-jwt/jwt/v5"
)

func GenerateToken(data *interfaces.IDataToken) string {
	clains := jwt.MapClaims{
		"email": data.Email,
		"exp":   0,
		"name":  data.Name,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, clains)
	secret := []byte(os.Getenv("JWT_SECRET"))
	tokenString, err := token.SignedString(secret)
	if err != nil {
		panic(err)
	}
	return tokenString
}
