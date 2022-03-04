import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, GraphQLBoolean } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { PlenaryItem } from './PlenaryItem.ts';

export const Plenary: GraphQLObjectType = new GraphQLObjectType({
    name: 'Plenary',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        name: {
            type: GraphQLString,
            resolve: ({ name }) => name,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        from: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ from }) => from,
        },
        to: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ to }) => to,
        },
        agenda: {
            type: new GraphQLNonNull(new GraphQLList(PlenaryItem)),
            resolve: ({ agenda }) => agenda
        }

    }),
});