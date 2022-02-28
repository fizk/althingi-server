import { GraphQLEnumType } from '../../lib/graphql/type/definition.ts';

const IssueCategory: GraphQLEnumType = new GraphQLEnumType({
    name: 'IssueCategory',
    values:  {
        A: { value: 'A' },
        B: { value: 'B' },
    }
})

export { IssueCategory };