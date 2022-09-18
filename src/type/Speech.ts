import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { Plenary } from './Plenary.ts';
import { Issue } from './Issue.ts';
import { Congressman } from './Congressman.ts';
import speechTransform from '../speechTransform.ts';
import turndown from '../turndown.ts';

export const Speech: GraphQLObjectType = new GraphQLObjectType({
    name: 'Speech',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ speech_id }) => speech_id,
        },
        plenary: {
            type: new GraphQLNonNull(Plenary),
            resolve: ({ plenary }) => plenary,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        issue: {
            type: new GraphQLNonNull(Issue),
            resolve: ({ issue }) => issue,
        },
        congressman: {
            type: new GraphQLNonNull(Congressman),
            resolve: ({ congressman, congressman_constituency, congressman_party }) => ({
                ...congressman,
                parties: [congressman_party],
                constituencies: [congressman_constituency],
            }),
        },
        congressmanType: {
            type: GraphQLString,
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
        duration: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({ duration }) => duration || 0,
        },
        text: {
            type: GraphQLString,
            resolve: ({ text }) => text ? turndown(speechTransform(text)) : null,
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