import { GraphQLList, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { Assembly } from '../type/Assembly.ts';
import type { Context } from '../index.d.ts';

interface Args {
    assembly: number
}

const AssembliesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Assembly),
    resolve: () => ([{
        id: 1,
        from: '2001-01-01',
        to: '2001-01-01',
    },{
        id: 2,
        from: '2001-01-01',
        to: '2001-01-01',
    }, {
        id: 3,
        from: '2001-01-01',
        to: '2001-01-01',
    }]),
};

export default AssembliesConfig;
