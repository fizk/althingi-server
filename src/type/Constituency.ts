import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';

export const Constituency: GraphQLObjectType = new GraphQLObjectType({
    name: 'Constituency',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        name: {
            type: GraphQLString,
            resolve: ({ name }) => name,
        },
        abbrShort: {
            type: GraphQLString,
            resolve: ({ abbr_short }) => abbr_short,
        },
        abbrLong: {
            type: GraphQLString,
            resolve: ({ abbr_long }) => abbr_long,
        },
        description: {
            type: GraphQLString,
            resolve: ({ description }) => description,
        },
    }),
});


// 'constituency_id' => $this -> constituency_id,
// 'name' => $this -> name,
// 'abbr_short' => $this -> abbr_short,
// 'abbr_long' => $this -> abbr_long,
// 'description' => $this -> description,