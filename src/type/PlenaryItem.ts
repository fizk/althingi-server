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
            resolve: ({ item_id }) => item_id,
        },
        key: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ _id }) => `${_id.assembly_id}-${_id.plenary_id}-${_id.item_id}`,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        issue: {
            type: new GraphQLNonNull(Issue),
            resolve: ({ issue }) => issue,
        },
        plenary: {
            type: new GraphQLNonNull(Plenary),
            resolve: ({ plenary }) => plenary,
        },
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
            resolve: ({ posed, posed_party, posed_constituency }) => (
                posed
                    ? {
                        ...posed,
                        parties: [posed_party],
                        constituencies: [posed_constituency]
                    } : null
            ),
        },
        posedTitle: {
            type: GraphQLString,
            resolve: ({ posed_title }) => posed_title
        },
        answerer: {
            type: Congressman,
            resolve: ({ answerer, answerer_party, answerer_constituency }) => (
                answerer
                    ? {
                        ...answerer,
                        parties: [answerer_party],
                        constituencies: [answerer_constituency]
                    } : null
            ),
        },
        answererTitle: {
            type: GraphQLString,
            resolve: ({ answerer_title }) => answerer_title
        },
        counterAnswerer: {
            type: Congressman,
            resolve: ({ counter_answerer, counter_answerer_party, counter_answerer_constituency }) => (
                counter_answerer
                    ? {
                        ...counter_answerer,
                        parties: [counter_answerer_party],
                        constituencies: [counter_answerer_constituency]
                    } : null
            ),
        },
        counterAnswererTitle: {
            type: GraphQLString,
            resolve: ({ counter_answerer_title }) => counter_answerer_title
        },
        instigator: {
            type: Congressman,
            resolve: ({ instigator, instigator_party, instigator_constituency }) => (
                instigator
                    ? {
                        ...instigator,
                        parties: [instigator_party],
                        constituencies: [instigator_constituency]
                    } : null
            ),
        },
        instigatorTitle: {
            type: GraphQLString,
            resolve: ({ instigator_title }) => instigator_title
        },
    }),
});