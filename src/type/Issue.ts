import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Issue: GraphQLObjectType = new GraphQLObjectType({
    name: 'Issue',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ name }) => name,
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ type }) => type,
        },
    }),
});
