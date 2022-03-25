import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { MinistrySessions } from '../type/MinistrySessions.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyGovernmentConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(MinistrySessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }, { get }) => (
        get('assembly.government.sessions', { assembly })
    ),
};

export default AssemblyGovernmentConfig;
