import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { CongressmanSessions } from './CongressmanSessions.ts';

export const PartySessions: GraphQLObjectType = new GraphQLObjectType({
    name: 'PartySessions',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ party_id }) => party_id,
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
        color: {
            type: GraphQLString,
            resolve: ({ color }) => color,
        },
        assembly: {
            type: Assembly,
            resolve: ({ assembly }) => assembly,
        },
        sessions: {
            type: new GraphQLList(CongressmanSessions),
            resolve: ({ congressmen }) => congressmen,
        }
    }),
});