import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, } from '../../lib/graphql/type/scalars.ts';

export const Person: GraphQLObjectType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ congressman_id }) => congressman_id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({name}) => name,
        },
        birth: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ birth }) => birth,
        },
        death: {
            type: GraphQLString,
            resolve: ({ death }) => death,
        },
        abbreviation: {
            type: GraphQLString,
            resolve: ({ abbreviation }) => abbreviation,
        },
    }),
});