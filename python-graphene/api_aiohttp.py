from aiohttp import web
from aiohttp_graphql import GraphQLView
from schema import schema


app = web.Application()
GraphQLView.attach(app, schema=schema, graphiql=True)
web.run_app(app, port=5045)
