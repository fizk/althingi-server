import { GraphQLObjectType, GraphQLNonNull } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts'
import { Congressman } from './Congressman.ts'

export const Issue: GraphQLObjectType = new GraphQLObjectType({
    name: 'Issue',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({id}) => id,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        category: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ category }) => category,
        },
        congressman: {
            type: Congressman,
            resolve: ({ congressman }) => congressman,
        },
        name: {
            type: GraphQLString,
            resolve: ({ name }) => name,
        },
        subName: {
            type: GraphQLString,
            resolve: ({ subName }) => subName,
        },
        type: {
            type: GraphQLString,
            resolve: ({ type }) => type,
        },
        typeName: {
            type: GraphQLString,
            resolve: ({ typeName }) => typeName,
        },
        typeSubName: {
            type: GraphQLString,
            resolve: ({ typeSubName }) => typeSubName,
        },
        status: {
            type: GraphQLString,
            resolve: ({ status }) => status,
        },
        question: {
            type: GraphQLString,
            resolve: ({ question }) => question,
        },
        goal: {
            type: GraphQLString,
            resolve: ({ goal }) => goal,
        },
        majorChanges: {
            type: GraphQLString,
            resolve: ({ major_changes }) => major_changes,
        },
        changesInLaw: {
            type: GraphQLString,
            resolve: ({ changes_in_law }) => changes_in_law,
        },
        costsAndRevenues: {
            type: GraphQLString,
            resolve: ({ costs_and_revenues }) => costs_and_revenues,
        },
        deliveries: {
            type: GraphQLString,
            resolve: ({ deliveries }) => deliveries,
        },
        additionalInformation: {
            type: GraphQLString,
            resolve: ({ additional_information }) => additional_information,
        },
    }),
});
