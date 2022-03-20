import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { ConstituencySessions } from '../type/ConstituencySessions.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyConstituenciesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(ConstituencySessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }, { get }) => (
        get('assembly.constituencies', { assembly })
    ),
};

export default AssemblyConstituenciesConfig;
