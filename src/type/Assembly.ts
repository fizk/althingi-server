import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Party } from './Party.ts'

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
        parties: {
            type: new GraphQLList(Party),
            resolve: ({ assembly_id}, _, { get }) => {
                return get('assembly.parties', { assembly: assembly_id })
            },
        }
    }),
});
