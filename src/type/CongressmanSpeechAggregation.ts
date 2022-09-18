import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, GraphQLInt, } from '../../lib/graphql/type/scalars.ts';
import { Congressman } from './Congressman.ts';

export const CongressmanSpeechAggregation: GraphQLObjectType = new GraphQLObjectType({
    name: 'CongressmanSpeechAggregation',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ _id }) => _id,
        },
        total: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({ total }) => total,
        },
        time: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({ time }) => time,
        },
        type: {
            type: new GraphQLList(GraphQLString),
            resolve: ({ type }) => type,
        },
        congressman: {
            type: Congressman,
            resolve: ({ congressman, parties, constituencies }) => ({
                ...congressman,
                parties,
                constituencies
            }),
        },
    }),
});