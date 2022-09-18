import { GraphQLEnumType } from '../../lib/graphql/type/definition.ts';

const IssueCategoryType: GraphQLEnumType = new GraphQLEnumType({
    name: 'IssueCategoryType',
    values:  {
        a: { value: 'a' },
        b: { value: 'b' },
    }
})

export { IssueCategoryType };