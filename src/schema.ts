import { GraphQLSchema } from '../lib/graphql/type/schema.ts';
import { GraphQLObjectType } from '../lib/graphql/type/definition.ts';
import Assembly from './query/Assembly.ts';
import Assemblies from './query/Assemblies.ts';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            Assemblies,
            Assembly,
        }
    })
});