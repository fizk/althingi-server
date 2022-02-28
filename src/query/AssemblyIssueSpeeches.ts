import { GraphQLNonNull, GraphQLFieldConfig, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Speech } from '../type/Speech.ts';
import { IssueCategory } from '../type/IssueCategory.ts';
import type { Context } from '../index.d.ts';

import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

interface Args {
    assembly: number
    issue: number
    category: string
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
        category: {
            type: new GraphQLNonNull(IssueCategory),
        },
    },
    resolve: (_, { assembly, issue, category }) => Array.from({length: Math.random() * 30}).map((_, i) => ({
        id: Number(i + 1),
        // plenary,
        assembly: {
            id: Number(assembly),
            from: new Date(faker.date.past()).toISOString(),
            to: new Date(faker.date.past()).toISOString(),
        },
        issue: {
            id: issue,
            name: faker.lorem.sentence(),
            category: category,
            assembly: {
                id: Number(assembly),
                from: new Date(faker.date.past()).toISOString(),
                to: new Date(faker.date.past()).toISOString(),
            },
            congressman: {
                id: Number(faker.random.number()),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                birth: new Date(faker.date.past()).toISOString(),
                death: null,
                abbreviation: faker.hacker.abbreviation()
            },
            subName: faker.lorem.word(),
            type: faker.lorem.word(),
            typeName: faker.lorem.word(),
            typeSubName: faker.lorem.word(),
            status: faker.lorem.word(),
        },
        category: faker.lorem.word(),
        congressman: {
            id: faker.random.number(),
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            birth: new Date(faker.date.past()).toISOString(),
            death: null,
            abbreviation: faker.hacker.abbreviation()
        },
        congressman_type: faker.lorem.word(),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
        text: faker.lorem.paragraphs(),
        type: faker.lorem.word(),
        iteration: '*',
        word_count: faker.random.number(),
        validated: Math.round(Math.random() * 2) ? true : false,
    })),
};

export default AssemblyIssueSpeechesConfig;