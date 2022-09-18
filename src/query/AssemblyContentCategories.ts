import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLString } from '../../lib/graphql/type/scalars.ts';
import { ContentCategoryAggregation } from '../type/ContentCategoryAggregation.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    types: string[]
}

const AssemblyContentCategoriesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(ContentCategoryAggregation),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        types: {
            type: new GraphQLList(GraphQLString)
        },
    },
    resolve: (_, { assembly, types }, { get }) => (
        get('assembly.content-categories', { assembly, types })
    ),
};

export default AssemblyContentCategoriesConfig;
