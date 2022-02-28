import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Congressman: GraphQLObjectType = new GraphQLObjectType({
    name: 'Congressman',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({name}) => name,
        },
        birth: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ birth }) => birth,
        },
        abbreviation: {
            type: GraphQLString,
            resolve: ({ abbreviation }) => abbreviation,
        },
    }),
});