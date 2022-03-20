import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { PartySessions } from '../type/PartySessions.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyPartiesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(PartySessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }, { get }) => (
        get('assembly.parties.sessions', { assembly })
    ),
};

export default AssemblyPartiesConfig;
