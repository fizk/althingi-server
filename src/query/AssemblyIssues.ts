import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Issue } from '../type/Issue.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssemblyIssuesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Issue),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }, {get}) => (
        get('assembly.issues', { assembly })
    ),
};

export default AssemblyIssuesConfig;
