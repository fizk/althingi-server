import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Document } from '../type/Document.ts';
import { IssueCategoryType } from '../type/IssueCategoryType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    issue: number
    category: number
}

const AssemblyIssueDocumentsConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Document),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        issue: {
            type: new GraphQLNonNull(GraphQLID),
        },
        category: {
            type: new GraphQLNonNull(IssueCategoryType),
        },
    },
    resolve: (_, { assembly, issue, category }, { get }) => (
        get('assembly.issue.documents', { assembly, issue, category })
    ),
};

export default AssemblyIssueDocumentsConfig;
