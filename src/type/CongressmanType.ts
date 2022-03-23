import { GraphQLEnumType } from '../../lib/graphql/type/definition.ts';

const CongressmanType: GraphQLEnumType = new GraphQLEnumType({
    name: 'CongressmanType',
    values:  {
        PRIMARY: { value: 'PRIMARY' },
        SUBSTITUTE: { value: 'SUBSTITUTE' },
    }
})

export { CongressmanType };