import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Congressman } from '../type/Congressman.ts';
import type { Context } from '../index.d.ts';

import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

interface Args {
    assembly: number
    congressman: number
}

const AssemblyCongressmanConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Congressman,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLID),
        },
        congressman: {
            type: new GraphQLNonNull(GraphQLID),
        },

    },
    // resolve: (_, { congressman }) => ({
    //     id: congressman,
    //     name: `Name #${congressman}`,
    // }),

    resolve: (_, { congressman }) => ({
        id: Number(congressman),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        birth: new Date(faker.date.past()).toISOString(),
        death: null,
        abbreviation: faker.hacker.abbreviation()
    }),
};

export default AssemblyCongressmanConfig;
