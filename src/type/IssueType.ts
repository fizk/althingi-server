import { GraphQLEnumType } from '../../lib/graphql/type/definition.ts';

const IssueType: GraphQLEnumType = new GraphQLEnumType({
    name: 'IssueType',
    values:  {
        A: { value: 'A' },
        B: { value: 'B' },
    }
})

export { IssueType };