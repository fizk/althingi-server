import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, GraphQLInt } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { EmbeddedIssue } from './EmbeddedIssue.ts';
import { Committee } from './Committee.ts';

/**
 * @todo
 */
export const Vote: GraphQLObjectType = new GraphQLObjectType({
    name: 'Vote',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ vote_id }) => vote_id,
        },
        key: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ _id }) => `${_id.assembly_id}-${_id.issue_id}-${_id.category}-${_id.document_id}-${_id.vote_id}-`,
        },
        date: {
            type: GraphQLString,
            resolve: ({ date }) => date,
        },
        type: {
            type: GraphQLString,
            resolve: ({ type }) => type,
        },
        outcome: {
            type: GraphQLString,
            resolve: ({ outcome }) => outcome,
        },
        method: {
            type: GraphQLString,
            resolve: ({ method }) => method,
        },
        yes: {
            type: GraphQLInt,
            resolve: ({ yes }) => yes,
        },
        no: {
            type: GraphQLInt,
            resolve: ({ no }) => no,
        },
        inaction: {
            type: GraphQLInt,
            resolve: ({ inaction }) => inaction,
        },
        // @todo
        items: {
            type: new GraphQLList(GraphQLInt),
            resolve: ({ items }) => items,
        },
        assembly: {
            type: Assembly,
            resolve: ({ assembly }) => assembly,
        },
        issue: {
            type: EmbeddedIssue,
            resolve: ({ issue }) => issue,
        },
        committee: {
            type: Committee,
            resolve: ({ committee, committee_first_assembly, committee_last_assembly, assembly }) => {
                return committee
                    ? {
                        ...committee,
                        assembly,
                        firstAssembly: committee_first_assembly,
                        lastAssembly: committee_last_assembly
                    }
                    : null
            },
        },
    }),
});