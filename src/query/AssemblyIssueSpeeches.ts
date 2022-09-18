import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLString } from '../../lib/graphql/type/scalars.ts';
import { SpeechList } from '../type/SpeechList.ts';
import { IssueCategoryType } from '../type/IssueCategoryType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    issue: number
    category: string
    speech: string | null
}

const AssemblyIssueSpeechesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: SpeechList,
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
        speech: {
            type: GraphQLID,
        },
    },
    resolve: (_, { assembly, issue, category, speech }, { get }) => (
        get('assembly.issue.speeches', { assembly, issue, category, speech })
    )
};

export default AssemblyIssueSpeechesConfig;