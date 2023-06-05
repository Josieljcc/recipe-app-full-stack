package interfaces

type ILogin struct {
	Password string `json:"password"`
	Email    string `json:"email"`
}
