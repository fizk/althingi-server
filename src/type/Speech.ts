import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Speech: GraphQLObjectType = new GraphQLObjectType({
    name: 'Speech',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        text: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ text }) => text,
        },
    }),
});
