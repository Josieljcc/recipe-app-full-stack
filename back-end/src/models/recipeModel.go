package models

import "gorm.io/gorm"

type Ingredient struct {
	gorm.Model
	Name    string    `json:"name"`
	Recipes []*Recipe `gorm:"many2many:recipe_ingredients;" json:"recipes"`
}

type Recipe struct {
	gorm.Model
	Title        string        `json:"title"`
	Instructions string        `json:"instructions"`
	ImageName    string        `json:"image"`
	Ingredients  []*Ingredient `gorm:"many2many:recipe_ingredients;" json:"ingredients"`
	Users        []*User       `gorm:"many2many:user_favorites;" json:"users"`
}
