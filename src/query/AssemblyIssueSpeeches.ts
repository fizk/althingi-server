import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Speech } from '../type/Speech.ts';
import { IssueType } from '../type/IssueType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    issue: number
    type: number
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
        type: {
            type: new GraphQLNonNull(IssueType),
        },
    },
    resolve: () => ([{
        id: 1,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    }, {
        id: 2,
        text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    }]),
};

export default AssemblyIssueSpeechesConfig;
