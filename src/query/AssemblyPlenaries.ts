import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Plenary } from '../type/Plenary.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyPlenariesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Plenary),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }, {get}) => (
        get('assembly.plenaries', { assembly })
    ),
};

export default AssemblyPlenariesConfig;
