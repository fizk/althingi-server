import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { CongressmanSessions } from '../type/CongressmanSessions.ts';
import { CongressmanType } from '../type/CongressmanType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    type: string
}

const AssemblyCongressmenConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(CongressmanSessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        type: {
            type: new GraphQLNonNull(CongressmanType),
        }
    },
    resolve: (_, { assembly, type}, {get}) => (
        get('assembly.congressmen.sessions', { assembly, type })
    ),
};

export default AssemblyCongressmenConfig;
