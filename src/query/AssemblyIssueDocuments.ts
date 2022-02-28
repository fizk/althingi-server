import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Documents } from '../type/Documents.ts';
import { IssueType } from '../type/IssueType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    issue: number
    type: number
}

const AssemblyIssueDocumentsConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Documents),
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
    resolve: () => ([{
        id: 1,
        date: `200-01-01`,
    }, {
        id: 2,
        date: `200-01-02`,
    }]),
};

export default AssemblyIssueDocumentsConfig;
