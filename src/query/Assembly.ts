import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from '../type/Assembly.ts';
import type { Context } from '../index.d.ts';

import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

interface Args {
    assembly: number
}

const AssemblyConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Assembly,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: (_, { assembly }) => ({
        id: Number(assembly),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
    }),
};

export default AssemblyConfig;
