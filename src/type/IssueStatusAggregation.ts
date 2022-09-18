import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLInt, GraphQLString } from '../../lib/graphql/type/scalars.ts';
import { Issue } from './Issue.ts';

export const IssueStatusAggregation: GraphQLObjectType = new GraphQLObjectType({
    name: 'AssemblyIssueStatus',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({_id}) => _id,
        },
        aggregation: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ aggregation }) => aggregation,
        },
        total: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({ total }) => total,
        },
        content: {
            type: new GraphQLList(Issue),
            resolve: ({ content }) => content,
        }

    }),
});
