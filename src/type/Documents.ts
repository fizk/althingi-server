import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Documents: GraphQLObjectType = new GraphQLObjectType({
    name: 'Documents',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        date: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ date }) => date,
        },
    }),
});
