package interfaces

type IDataToken struct {
	Id    uint
	Name  string `json:"password"`
	Email string `json:"email"`
}
