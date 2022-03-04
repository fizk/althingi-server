import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Plenary } from '../type/Plenary.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    plenary: number
}

const AssemblyPlenaryConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Plenary,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        plenary: {
            type: GraphQLID,
        },
    },
    resolve: (_, { assembly, plenary }, {get}) => (
        get('assembly.plenary', { assembly, plenary })
    ),
};

export default AssemblyPlenaryConfig;
