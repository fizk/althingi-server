import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { CommitteeSessions } from '../type/CommitteeSessions.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    type: number
}

const AssemblyCommitteesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(CommitteeSessions),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: (_, { assembly }, { get }) => (
        get('assembly.committees.sessions', { assembly })
    ),
};

export default AssemblyCommitteesConfig;
