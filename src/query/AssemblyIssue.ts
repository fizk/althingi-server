import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Issue } from '../type/Issue.ts';
import { IssueCategory } from '../type/IssueCategory.ts';
import type { Context } from '../index.d.ts';

import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

interface Args {
    assembly: number
    issue: number
    category: number
}

const AssemblyIssueConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Issue,
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
    resolve: (_, { assembly, issue, category }) => ({
        id: issue,
        name: faker.lorem.sentence(),
        category: category,
        assembly : {
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
        question: faker.lorem.paragraphs(),
        goal: faker.lorem.paragraphs(),
        major_changes: faker.lorem.paragraphs(),
        changes_in_law: faker.lorem.paragraphs(),
        costs_and_revenues: faker.lorem.paragraphs(),
        deliveries: faker.lorem.paragraphs(),
        additional_information: faker.lorem.paragraphs(),
    }),
};

export default AssemblyIssueConfig;
