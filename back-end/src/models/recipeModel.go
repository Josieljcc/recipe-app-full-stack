package models

import "gorm.io/gorm"

type Ingredient struct {
	gorm.Model
	Name string `json:"name"`
}

type Recipe struct {
	gorm.Model
	Title        string       `json:"title"`
	Ingredients  []Ingredient `gorm:"foreignKey:id" json:"ingredients"`
	Instructions string       `json:"instructions"`
	ImageName    string       `json:"image"`
}
