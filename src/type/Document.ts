import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts'
import { Issue } from './Issue.ts'

export const Document: GraphQLObjectType = new GraphQLObjectType({
    name: 'Document',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ document_id }) => document_id,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        issue: {
            type: new GraphQLNonNull(Issue),
            resolve: ({ issue }) => issue,
        },
        date: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ date }) => date,
        },
        url: {
            type: GraphQLString,
            resolve: ({ url }) => url,
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ type }) => type,
        },
    }),
});
