package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name      string    `json:"name"`
	Password  string    `json:"password"`
	Email     string    `gorm:"unique;not null" json:"email"`
	Favorites []*Recipe `gorm:"many2many:user_favorites;" json:"favorites"`
}
