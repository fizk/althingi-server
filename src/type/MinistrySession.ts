import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Party } from './Party.ts'
import { Constituency } from './Constituency.ts'
import { Person } from './Person.ts'
import { Assembly } from './Assembly.ts'
import { Ministry } from './Ministry.ts'

export const MinistrySession: GraphQLObjectType = new GraphQLObjectType({
    name: 'MinistrySession',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ minister_sitting_id }) => minister_sitting_id,
        },
        assembly: {
            type: Assembly,
            resolve: ({ assembly }) => assembly,
        },
        person: {
            type: Person,
            resolve: ({ congressman }) => congressman,
        },
        party: {
            type: Party,
            resolve: ({ congressman_party }) => congressman_party,
        },
        constituency: {
            type: Constituency,
            resolve: ({ congressman_constituency }) => congressman_constituency,
        },
        ministry: {
            type: Ministry,
            resolve: ({ ministry }) => ministry,
        },
        from: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ from }) => from,
        },
        to: {
            type: GraphQLString,
            resolve: ({ to }) => to,
        },
    }),
});
