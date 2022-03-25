import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Ministry: GraphQLObjectType = new GraphQLObjectType({
    name: 'Ministry',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ ministry_id }) => ministry_id,
        },
        from: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({from}) => from,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ name }) => name,
        },
        abbrLong: {
            type: GraphQLString,
            resolve: ({ abbr_long }) => abbr_long,
        },
        abbrShort: {
            type: GraphQLString,
            resolve: ({ abbr_short }) => abbr_short,
        },
    }),
});
