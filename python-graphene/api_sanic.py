from sanic import Sanic
from sanic_graphql import GraphQLView
from schema import schema


app = Sanic()
app.add_route(GraphQLView.as_view(schema=schema, graphiql=True), '/graphql')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5044, access_log=False)
