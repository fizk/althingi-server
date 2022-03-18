import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, } from '../../lib/graphql/type/scalars.ts';
// import { Party } from './Party.ts';
// import { Constituency } from './Constituency.ts';
import { Person } from './Person.ts';
import { Session } from './Session.ts';
import { Assembly } from './Assembly.ts';

export const CongressmanSessions: GraphQLObjectType = new GraphQLObjectType({
    name: 'CongressmanSessions',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({_id}) => _id,
        },
        person: {
            type: new GraphQLNonNull(Person),
            resolve: ({ congressman }) => congressman,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        sessions: {
            type: new GraphQLList(Session),
            resolve: ({ sessions }) => sessions,
        },
    }),
});