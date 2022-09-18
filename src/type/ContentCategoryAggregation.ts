import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLInt, GraphQLString } from '../../lib/graphql/type/scalars.ts';
import { ContentSuperCategory } from './ContentSuperCategory.ts';

export const ContentCategoryAggregation: GraphQLObjectType = new GraphQLObjectType({
    name: 'ContentCategoryAggregation',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({_id}) => _id,
        },
        total: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({ total }) => total,
        },
        aggregation: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ aggregation }) => aggregation,
        },
        content: {
            type: new GraphQLList(ContentSuperCategory),
            resolve: ({ content }) => content,
        }
    }),
});
