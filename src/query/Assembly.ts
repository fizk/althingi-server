import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from '../type/Assembly.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Assembly,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }, { get }) => (
        get('assembly', { assembly })
    ),
};

export default AssemblyConfig;
