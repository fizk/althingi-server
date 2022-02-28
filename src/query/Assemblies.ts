import { GraphQLList, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { Assembly } from '../type/Assembly.ts';
import type { Context } from '../index.d.ts';

import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

interface Args {
    assembly: number
}

// const AssembliesConfig: GraphQLFieldConfig<null, Context, Args> = {
//     type: new GraphQLList(Assembly),
//     resolve: () => ([{
//         id: 1,
//         from: '2001-01-01',
//         to: '2001-01-01',
//     },{
//         id: 2,
//         from: '2001-01-01',
//         to: '2001-01-01',
//     }, {
//         id: 3,
//         from: '2001-01-01',
//         to: '2001-01-01',
//     }]),
// };
const AssembliesConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: new GraphQLList(Assembly),
    resolve: () => Array.from({length: Math.random() * 100}).map((_, i) => ({
        id: Number(i + 1),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
    }))
};

export default AssembliesConfig;
