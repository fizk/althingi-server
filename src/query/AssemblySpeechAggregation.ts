import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLInt } from '../../lib/graphql/type/scalars.ts';
import { AssemblySpeechAggregation } from '../type/AssemblySpeechAggregation.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
    limit: number
}

const AssemblySpeechAggregationConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(AssemblySpeechAggregation),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        limit: {
            type: GraphQLInt,
        },
    },
    resolve: (_, { assembly, limit }, { get }) => (
        get('assembly.speech.aggregation', { assembly, limit })
    ),
};

export default AssemblySpeechAggregationConfig;
