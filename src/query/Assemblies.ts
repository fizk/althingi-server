import { GraphQLList, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { Assembly } from '../type/Assembly.ts';
import type { Context } from '../index.d.ts';

const AssembliesConfig: GraphQLFieldConfig<null, Context, null> = {
    type: new GraphQLList(Assembly),
    resolve: (_, _a, { get }) => (
        get('assemblies', {})
    ),
};

export default AssembliesConfig;
