import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts'
import { MinistrySession } from './MinistrySession.ts'

export const MinistrySessions: GraphQLObjectType = new GraphQLObjectType({
    name: 'MinistrySessions',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ ministry_id }) => ministry_id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({name}) => name,
        },
        abbrShort: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ abbr_short }) => abbr_short,
        },
        abbrLong: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ abbr_long }) => abbr_long,
        },
        first: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ first_ministry_assembly }) => first_ministry_assembly,
        },
        last: {
            type: Assembly,
            resolve: ({ last_ministry_assembly }) => last_ministry_assembly,
        },
        congressmen: {
            type: new GraphQLList(MinistrySession),
            resolve: ({ congressmen }) => congressmen,
        },
    }),
});
