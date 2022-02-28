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
    resolve: () => ([{
        id: 1,
        name: 'Issue title 1',
        type: 'a',
    }, {
        id: 2,
        name: 'Issue title 2',
        type: 'a',
    }, {
        id: 3,
        name: 'Issue title 3',
        type: 'b',
    },]),
};

export default AssemblyIssuesConfig;
