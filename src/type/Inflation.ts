import { GraphQLObjectType, GraphQLNonNull, } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLFloat, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Inflation: GraphQLObjectType = new GraphQLObjectType({
    name: 'Inflation',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ id }) => id,
        },
        date: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ date }) => date,
        },
        value: {
            type: new GraphQLNonNull(GraphQLFloat),
            resolve: ({value}) => value,
        },
    }),
});
