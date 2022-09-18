import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { Issue } from '../type/Issue.ts';
import { Cursor } from '../type/Cursor.ts';

export const IssuesList: GraphQLObjectType = new GraphQLObjectType({
    name: 'IssuesList',
    fields: () => ({
        list: {
            type: new GraphQLList(Issue),
            resolve: ({ list }) => list,
        },
        cursor: {
            type: new GraphQLNonNull(Cursor),
            resolve: ({ next, terminal }) => ({
                next,
                terminal
            }),
        },
    }),
});