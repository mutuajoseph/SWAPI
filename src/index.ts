import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import {buildSchema } from 'type-graphql'

// import the resolver
import { PeopleResolver } from './resolvers/peopleResolver' 

async function main() {
    const schema = await buildSchema({
        resolvers: [PeopleResolver],
        emitSchemaFile: true
    })

    const app = Express()

    const server = new ApolloServer({
        schema
    })

    await server.start()

    server.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('Server is running on http://localhost:4000/graphql')
    })
}


main()