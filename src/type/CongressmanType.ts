import { GraphQLEnumType } from '../../lib/graphql/type/definition.ts';

const CongressmanType: GraphQLEnumType = new GraphQLEnumType({
    name: 'GraphQLEnumType',
    values:  {
        PRIMARY: { value: 'PRIMARY' },
        SUBSTITUTE: { value: 'SUBSTITUTE' },
        PRESIDENT: { value: 'PRESIDENT' },
    }
})

export { CongressmanType };