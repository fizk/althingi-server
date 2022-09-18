import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLString } from '../../lib/graphql/type/scalars.ts';
import { IssueStatusAggregation } from '../type/IssueStatusAggregation.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    types: string[]
}

const AssemblyIssueStatusesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(IssueStatusAggregation),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        types: {
            type: new GraphQLList(GraphQLString)
        },
    },
    resolve: (_, { assembly, types }, { get }) => (
        get('assembly.issue-statuses', { assembly, types })
    ),
};

export default AssemblyIssueStatusesConfig;
