import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { Issue } from './Issue.ts';
import { Congressman } from './Congressman.ts';

export const Speech: GraphQLObjectType = new GraphQLObjectType({
    name: 'Speech',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        // plenary: {
        //     type: new GraphQLNonNull(GraphQLString),
        //     resolve: ({ plenary }) => plenary,
        // },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        issue: {
            type: new GraphQLNonNull(Issue),
            resolve: ({ issue }) => issue,
        },
        category: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ category }) => category,
        },
        congressman: {
            type: new GraphQLNonNull(Congressman),
            resolve: ({ congressman }) => congressman,
        },
        congressmanType: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ congressman_type }) => congressman_type,
        },
        from: {
            type: GraphQLString,
            resolve: ({ from }) => from,
        },
        to: {
            type: GraphQLString,
            resolve: ({ to }) => to,
        },
        text: {
            type: GraphQLString,
            resolve: ({ text }) => text,
        },
        type: {
            type: GraphQLString,
            resolve: ({ type }) => type,
        },
        iteration: {
            type: GraphQLString,
            resolve: ({ iteration }) => iteration,
        },
        wordCount: {
            type: GraphQLInt,
            resolve: ({ word_count }) => word_count,
        },
        validated: {
            type: GraphQLBoolean,
            resolve: ({ validated }) => validated,
        },
    }),
});