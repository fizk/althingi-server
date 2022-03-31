import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Inflation } from '../type/Inflation.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyInflationConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Inflation),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }, { get }) => (
        get('assembly.inflation', { assembly })
    ),
};

export default AssemblyInflationConfig;
