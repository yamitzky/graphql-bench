import responder
import graphene

api = responder.API()


class Book(graphene.ObjectType):
    id = graphene.ID(required=True)
    author = graphene.String(required=True)


class Query(graphene.ObjectType):
    books = graphene.NonNull(graphene.List(graphene.NonNull(Book)), id=graphene.NonNull(graphene.ID))

    def resolve_books(self, info, id):
        return [Book(id=id, author='yamitzky')]


schema = graphene.Schema(query=Query)
view = responder.ext.GraphQLView(api=api, schema=schema)

api.add_route("/graphql", view)

if __name__ == '__main__':
    api.run()
