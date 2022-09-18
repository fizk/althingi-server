import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts'
import { EmbeddedIssue } from './EmbeddedIssue.ts';
import { Vote } from './Vote.ts';

export const Document: GraphQLObjectType = new GraphQLObjectType({
    name: 'Document',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ document_id }) => document_id,
        },
        key: {
            type: GraphQLString,
            resolve: ({ _id }) => `${_id.assembly_id}-${_id.issue_id}-${_id.category}-${_id.document_id}`,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        issue: {
            type: new GraphQLNonNull(EmbeddedIssue),
            resolve: ({ issue }) => issue,
        },
        date: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ date }) => date,
        },
        url: {
            type: GraphQLString,
            resolve: ({ url }) => url,
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ type }) => type,
        },
        // @todo
        proponents: {
            type: new GraphQLList(GraphQLString),
            resolve: ({ proponents }) => []// proponents,
        },
        votes: {
            type: new GraphQLList(Vote),
            resolve: ({ votes }) => votes,
        }
    }),
});
