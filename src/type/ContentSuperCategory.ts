import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const ContentSuperCategory: GraphQLObjectType = new GraphQLObjectType({
    name: 'ContentSuperCategory',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ _id }) => _id,
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ title }) => title,
        },
    }),
});
