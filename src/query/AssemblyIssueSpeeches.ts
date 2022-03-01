import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Speech } from '../type/Speech.ts';
import { IssueCategory } from '../type/IssueCategory.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    issue: number
    category: string
}

const AssemblyIssueSpeechesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Speech),
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
    resolve: (_, { assembly, issue, category }, { get }) => (
        get('assembly.issue.speeches', { assembly, issue, category })
    )
};

export default AssemblyIssueSpeechesConfig;