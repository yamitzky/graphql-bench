import graphene


class Book(graphene.ObjectType):
    id = graphene.ID(required=True)
    author = graphene.String(required=True)


class Query(graphene.ObjectType):
    books = graphene.NonNull(graphene.List(graphene.NonNull(Book)),
                             id=graphene.NonNull(graphene.ID))

    def resolve_books(self, info, id):
        return [Book(id=id, author='yamitzky')]


schema = graphene.Schema(query=Query)
