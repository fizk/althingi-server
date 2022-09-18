import { GraphQLObjectType, GraphQLNonNull} from '../../lib/graphql/type/definition.ts';
import { GraphQLID, GraphQLBoolean } from '../../lib/graphql/type/scalars.ts';

export const Cursor: GraphQLObjectType = new GraphQLObjectType({
    name: 'Cursor',
    fields: () => ({
        next: {
            type: GraphQLID,
            resolve: ({ next }) => next,
        },
        terminal: {
            type: new GraphQLNonNull(GraphQLBoolean),
            resolve: ({ terminal }) => terminal,
        },

    }),
});
