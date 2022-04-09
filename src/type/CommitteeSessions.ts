import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { CongressmanSessions } from './CongressmanSessions.ts';

export const CommitteeSessions: GraphQLObjectType = new GraphQLObjectType({
    name: 'CommitteeSessions',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ committee_id }) => committee_id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ name }) => name,
        },
        abbrShort: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ abbr_short }) => abbr_short,
        },
        abbrLong: {
            type: GraphQLString,
            resolve: ({ abbr_long }) => abbr_long,
        },
        assembly: {
            type: Assembly,
            resolve: ({ assembly }) => assembly,
        },
        firstAssembly: {
            type: Assembly,
            resolve: ({ first_assembly }) => first_assembly,
        },
        lastAssembly: {
            type: Assembly,
            resolve: ({ last_assembly }) => last_assembly,
        },
        sessions: {
            type: new GraphQLList(CongressmanSessions),
            resolve: ({ sessions }) => sessions,
        }
    }),
});