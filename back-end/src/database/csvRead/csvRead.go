package main

import (
	"fmt"
	"os"

	"github.com/go-gota/gota/dataframe"
)

func main() {
	csvfile, err := os.Open("../data/recipes.csv")
	if err != nil {
		panic(err)
	}
	//using gota to read csv file
	df := dataframe.ReadCSV(csvfile)
	row := df.Subset([]int{0})
	for i, col := range df.Names() {
		fmt.Println(col)
		fmt.Println(row.Records()[1][i])
	}
}
