import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString } from '../../lib/graphql/type/scalars.ts';
import { Congressman } from './Congressman.ts'

/**
 * @todo
 */
export const Proponent: GraphQLObjectType = new GraphQLObjectType({
    name: 'Proponent',
    fields: () => ({
        congressman: {
            type: new GraphQLNonNull(Congressman),
            resolve: ({assembly_id}) => assembly_id,
        },
        title: {
            type: GraphQLString,
            resolve: ({from}) => from,
        },
    }),
});
