import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { PartySessions } from '../type/PartySessions.ts';
import { CongressmanType } from '../type/CongressmanType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    type: string
}

const AssemblyPartiesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(PartySessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        type: {
            type: new GraphQLNonNull(CongressmanType),
        },
    },
    resolve: (_, { assembly, type }, { get }) => (
        get('assembly.parties.sessions', { assembly, type })
    ),
};

export default AssemblyPartiesConfig;
