import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { Speech } from '../type/Speech.ts';
import { Cursor } from '../type/Cursor.ts';

export const SpeechList: GraphQLObjectType = new GraphQLObjectType({
    name: 'SpeechList',
    fields: () => ({
        list: {
            type: new GraphQLList(Speech),
            resolve: ({ list }) => list,
        },
        cursor: {
            type: new GraphQLNonNull(Cursor),
            resolve: ({ next, terminal }) => ({
                next,
                terminal
            }),
        },
    }),
});