import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Party } from './Party.ts'
import { Constituency } from './Constituency.ts'


export const Session: GraphQLObjectType = new GraphQLObjectType({
    name: 'Session',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({_id}) => _id,
        },
        party: {
            type: Party,
            resolve: ({ congressman_party }) => congressman_party,
        },
        constituency: {
            type: Constituency,
            resolve: ({ congressman_constituency }) => congressman_constituency,
        },
        from: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ from }) => from,
        },
        to: {
            type: GraphQLString,
            resolve: ({ to }) => to,
        },
        abbr: {
            type: GraphQLString,
            resolve: ({ abbr }) => abbr,
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ type }) => type,
        },
    }),
});
