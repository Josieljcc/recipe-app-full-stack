package services

import (
	"backend/src/database"
	"backend/src/models"
)

// add favorite to user
func InsertFavoriteRecipe(userID uint, recipeID uint) error {
	var user models.User
	if err := database.DB.First(&user, userID).Error; err != nil {
		return err
	}

	var recipe models.Recipe
	if err := database.DB.First(&recipe, recipeID).Error; err != nil {
		return err
	}

	user.Favorites = append(user.Favorites, &recipe)

	if err := database.DB.Save(&user).Error; err != nil {
		return err
	}

	return nil
}
