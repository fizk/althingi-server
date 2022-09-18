import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const ContentCategory: GraphQLObjectType = new GraphQLObjectType({
    name: 'ContentCategory',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ _id }) => _id,
        },
        superId: {
            type: GraphQLID,
            resolve: ({ super_category_id }) => super_category_id,
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ title }) => title,
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ description }) => description,
        },
    }),
});
