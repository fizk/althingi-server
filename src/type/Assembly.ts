import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Assembly: GraphQLObjectType = new GraphQLObjectType({
    name: 'Assembly',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({assembly_id}) => assembly_id,
        },
        from: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({from}) => from,
        },
        to: {
            type: GraphQLString,
            resolve: ({to}) => to,
        },
    }),
});
