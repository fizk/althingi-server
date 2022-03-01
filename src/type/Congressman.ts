import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, } from '../../lib/graphql/type/scalars.ts';
import { Party } from './Party.ts';

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
        parties: {
            type: new GraphQLList(Party),
            resolve: ({ parties }) => parties || [],
        },
    }),
});