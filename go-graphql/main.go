package main

import (
	"log"
	"net/http"

	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
)

func main() {
	bookType := graphql.ObjectConfig{
		Name: "Book",
		Fields: graphql.Fields{
			"id": &graphql.Field{
				Type: graphql.NewNonNull(graphql.ID),
			},
			"author": &graphql.Field{
				Type: graphql.NewNonNull(graphql.String),
			},
		},
	}
	fields := graphql.Fields{
		"books": &graphql.Field{
			Type: graphql.NewNonNull(graphql.NewList(graphql.NewNonNull(graphql.NewObject(bookType)))),
			Args: graphql.FieldConfigArgument{
				"id": &graphql.ArgumentConfig{
					Type: graphql.NewNonNull(graphql.ID),
				},
			},
			Resolve: func(p graphql.ResolveParams) (interface{}, error) {
				return []map[string]interface{}{{"author": "yamitzky", "id": p.Args["id"]}}, nil
			},
		},
	}
	rootQuery := graphql.ObjectConfig{Name: "RootQuery", Fields: fields}
	schemaConfig := graphql.SchemaConfig{Query: graphql.NewObject(rootQuery)}
	schema, err := graphql.NewSchema(schemaConfig)
	if err != nil {
		log.Fatalf("failed to create new schema, error: %v", err)
	}

	h := handler.New(&handler.Config{
		Schema:   &schema,
		Pretty:   false,
		GraphiQL: true,
	})

	http.Handle("/graphql", h)
	http.ListenAndServe(":8081", nil)
}
