import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, GraphQLInt } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { PlenaryItem } from './PlenaryItem.ts';

export const Plenary: GraphQLObjectType = new GraphQLObjectType({
    name: 'Plenary',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ plenary_id }) => plenary_id,
        },
        key: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ _id }) => `${_id.assembly_id}-${_id.plenary_id}`,
        },
        name: {
            type: GraphQLString,
            resolve: ({ name }) => name,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        from: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ from }) => from,
        },
        to: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ to }) => to,
        },
        duration: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({ duration }) => duration || 0,
        },
        agenda: {
            type: new GraphQLNonNull(new GraphQLList(PlenaryItem)),
            resolve: ({ assembly, plenary_id }, _, { get }) => (
                get('assembly.plenary-agenda', {
                    assembly: assembly.assembly_id,
                    plenary: plenary_id
                })
            )
        }
    }),
});