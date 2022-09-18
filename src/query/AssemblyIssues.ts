import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLString } from '../../lib/graphql/type/scalars.ts';
import { IssuesList } from '../type/IssuesList.ts';
import { IssueCategoryType } from '../type/IssueCategoryType.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    category?: 'a' | 'b'
    types?: string[]
    pointer?: string
}

const AssemblyIssuesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: IssuesList,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        category: {
            type: IssueCategoryType,
        },
        types: {
            type: new GraphQLList(GraphQLString)
        },
        pointer: {
            type: GraphQLID,
        },
    },
    resolve: (_, { assembly, category, types, pointer }, {get}) => (
        get('assembly.issues', { assembly, category, types, pointer })
    ),
};

export default AssemblyIssuesConfig;
