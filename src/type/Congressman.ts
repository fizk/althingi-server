import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, } from '../../lib/graphql/type/scalars.ts';
import { Party } from './Party.ts';
import { Constituency } from './Constituency.ts';

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
            type: new GraphQLNonNull(new GraphQLList(Party)),
            resolve: ({ parties }) => parties || [],
        },
        constituencies: {
            type: new GraphQLNonNull(new GraphQLList(Constituency)),
            resolve: ({ constituencies }) => constituencies || [],
        }
    }),
});