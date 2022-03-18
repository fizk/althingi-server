import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Constituency: GraphQLObjectType = new GraphQLObjectType({
    name: 'Constituency',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ constituency_id }) => constituency_id,
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
            type: GraphQLString,
            resolve: ({ abbr_long }) => abbr_long,
        },
        description: {
            type: GraphQLString,
            resolve: ({ description }) => description,
        },
    }),
});