import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { ConstituencySessions } from '../type/ConstituencySessions.ts';
import { CongressmanType } from '../type/CongressmanType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    type: number
}

const AssemblyConstituenciesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(ConstituencySessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        type: {
            type: new GraphQLNonNull(CongressmanType),
        }
    },
    resolve: (_, { assembly, type }, { get }) => (
        get('assembly.constituencies.sessions', { assembly, type })
    ),
};

export default AssemblyConstituenciesConfig;
