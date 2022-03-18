import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Party: GraphQLObjectType = new GraphQLObjectType({
    name: 'Party',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ party_id }) => party_id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ name }) => name,
        },
        abbrShort: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ abbr_short }) => abbr_short,
        },
        abbrLong: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ abbr_long }) => abbr_long,
        },
        color: {
            type: GraphQLString,
            resolve: ({ color }) => color,
        },

    }),
});