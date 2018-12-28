package go_gqlgen

import (
	"context"
)

type Resolver struct{}

func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Books(ctx context.Context, id string) ([]Book, error) {
	return []Book{Book{ID: id, Author: "yamitzky"}}, nil
}
