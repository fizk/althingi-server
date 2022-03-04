import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Congressman } from './Congressman.ts';
import { Assembly } from './Assembly.ts';
import { Issue } from './Issue.ts';
import { Plenary } from './Plenary.ts';

export const PlenaryItem: GraphQLObjectType = new GraphQLObjectType({
    name: 'PlenaryItem',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ id }) => id,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        issue: {
            type: new GraphQLNonNull(Issue),
            resolve: ({ issue }) => issue,
        },
        // plenary: {
        //     type: new GraphQLNonNull(Plenary),
        //     resolve: ({ plenary }) => plenary,
        // },
        iterationType: {
            type: GraphQLString,
            resolve: ({ iteration_type }) => iteration_type,
        },
        iterationContinue: {
            type: GraphQLString,
            resolve: ({ iteration_continue }) => iteration_continue,
        },
        iterationComment: {
            type: GraphQLString,
            resolve: ({ iteration_comment }) => iteration_comment,
        },
        comment: {
            type: GraphQLString,
            resolve: ({ comment }) => comment,
        },
        commentType: {
            type: GraphQLString,
            resolve: ({ comment_type }) => comment_type,
        },
        posed: {
            type: Congressman,
            resolve: ({ posed }) => posed,
        },
        answerer: {
            type: Congressman,
            resolve: ({ answerer }) => answerer,
        },
        counterAnswerer: {
            type: Congressman,
            resolve: ({ counter_answerer }) => counter_answerer,
        },
        instigator: {
            type: Congressman,
            resolve: ({ instigator }) => instigator,
        },
    }),
});