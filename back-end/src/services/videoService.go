package services

import (
	"fmt"

	"github.com/gocolly/colly"
)

func GetVideoUrl(search string) string {
	// formatSearch := strings.Replace(search, " ", "+", -1)
	// scrapeUrl := "https://www.youtube.com/results?search_query=" + formatSearch
	colly.IgnoreRobotsTxt()
	colly.MaxDepth(30)
	c := colly.NewCollector(colly.AllowedDomains("www.youtube.com", "youtube.com"))
	videoUrl := ""
	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL)
	})
	c.OnHTML("div", func(e *colly.HTMLElement) {
		fmt.Println(e.Attr("class"))
	})
	c.Visit("https://www.youtube.com/results?search_query=teste")
	return videoUrl
}
