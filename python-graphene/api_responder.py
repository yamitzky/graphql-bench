import responder
from schema import schema

api = responder.API()
view = responder.ext.GraphQLView(api=api, schema=schema)
api.add_route("/graphql", view)

if __name__ == '__main__':
    api.run()
