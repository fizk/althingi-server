import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { CongressmanSessions } from '../type/CongressmanSessions.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyPresidentsConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(CongressmanSessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: (_, { assembly}, {get}) => (
        get('assembly.presidents.sessions', { assembly })
    ),
};

export default AssemblyPresidentsConfig;
