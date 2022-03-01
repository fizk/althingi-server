import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Congressman } from '../type/Congressman.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    congressman: number
}

const AssemblyCongressmanConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Congressman,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        congressman: {
            type: new GraphQLNonNull(GraphQLID),
        },

    },
    resolve: (_, { assembly, congressman }, { get }) => (
        get('assembly.congressman', { assembly, congressman })
    ),
};

export default AssemblyCongressmanConfig;
