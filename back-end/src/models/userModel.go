package models

import "gorm.io/gorm"

// User is a struct that represents a user in the database
type User struct {
	gorm.Model
	Name     string `json:"name"`
	Password string `json:"password"`
	Email    string `json:"email"`
}
