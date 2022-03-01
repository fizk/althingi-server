import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Congressman } from '../type/Congressman.ts';
import { CongressmanType } from '../type/CongressmanType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    type: string
}

const AssemblyCongressmenConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Congressman),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        type: {
            type: new GraphQLNonNull(CongressmanType),
        }
    },
    resolve: (_, { assembly, type}, {get}) => (
        get('assembly.congressmen', { assembly, type })
    ),
};

export default AssemblyCongressmenConfig;
