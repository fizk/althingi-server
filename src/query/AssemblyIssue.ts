import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Issue } from '../type/Issue.ts';
import { IssueCategory } from '../type/IssueCategory.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    issue: number
    category: number
}

const AssemblyIssueConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Issue,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        issue: {
            type: new GraphQLNonNull(GraphQLID),
        },
        category: {
            type: new GraphQLNonNull(IssueCategory),
        },
    },
    resolve: (_, { assembly, issue, category }, {get}) => (
        get('assembly.issue', { assembly, issue, category })
    ),
};

export default AssemblyIssueConfig;
