package main

import (
	"backend/src/database"
	"backend/src/models"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/go-gota/gota/dataframe"
)

func init() {
	// connect to database
	database.ConnectToDB()
}

func main() {
	database.DB.AutoMigrate(&models.User{}, &models.Recipe{}, &models.Ingredient{})
	//open csv file
	csvfile, err := os.Open("../data/recipes.csv")
	if err != nil {
		panic(err)
	}
	//using gota to read csv file
	df := dataframe.ReadCSV(csvfile)
	// Extract the required columns from the dataframe
	titleCol := df.Col("Title")
	ingredientsCol := df.Col("Ingredients")
	instructionsCol := df.Col("Instructions")
	imageNameCol := df.Col("Image_Name")

	// Iterate over the rows and insert data into models
	for i := 0; i < df.Nrow(); i++ {
		// Create a new Recipe object
		recipe := models.Recipe{
			Title:        titleCol.Elem(i).String(),
			Instructions: instructionsCol.Elem(i).String(),
			ImageName:    imageNameCol.Elem(i).String(),
		}

		// Split the ingredients string and create Ingredient objects
		ingredientsStr := ingredientsCol.Elem(i).String()
		ingredientsArr := strings.Split(ingredientsStr, ",")
		var ingredients []*models.Ingredient
		for _, ingredientName := range ingredientsArr {
			ingredient := &models.Ingredient{
				Name: ingredientName,
			}
			ingredients = append(ingredients, ingredient)
		}

		// Associate ingredients with the recipe
		recipe.Ingredients = ingredients

		// Save the recipe to the database
		err := database.DB.Create(&recipe).Error
		if err != nil {
			log.Fatal(err)
		}
	}

	fmt.Println("Data insertion completed!")
}
