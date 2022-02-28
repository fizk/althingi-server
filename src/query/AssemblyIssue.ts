import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Issue } from '../type/Issue.ts';
import { IssueType } from '../type/IssueType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    issue: number
    type: number
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
        type: {
            type: new GraphQLNonNull(IssueType),
        },
    },
    resolve: (_, { issue, type }) => ({
        id: issue,
        name: `Issue title ${issue}`,
        type: type,
    }),
};

export default AssemblyIssueConfig;
