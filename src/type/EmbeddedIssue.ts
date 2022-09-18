import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Assembly } from './Assembly.ts';
import { Congressman } from './Congressman.ts';
import { IssueCategoryType } from './IssueCategoryType.ts';
import { ContentCategory } from './ContentCategory.ts';
import { ContentSuperCategory } from './ContentSuperCategory.ts';
import { Proponent } from './Proponent.ts';
import turndown from '../turndown.ts';

export const EmbeddedIssue: GraphQLObjectType = new GraphQLObjectType({
    name: 'EmbeddedIssue',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ issue_id }) => issue_id,
        },
        key: {
            type: GraphQLString,
            resolve: ({ _id }) => `${_id.assembly_id}-${_id.issue_id}-${_id.category}`,
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: ({ assembly }) => assembly,
        },
        category: {
            type: new GraphQLNonNull(IssueCategoryType),
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
            resolve: ({ type_name }) => type_name,
        },
        typeSubName: {
            type: GraphQLString,
            resolve: ({ type_sub_name }) => type_sub_name,
        },
        status: {
            type: GraphQLString,
            resolve: ({ status }) => status,
        },
        contentCategories: {
            type: new GraphQLList(ContentCategory),
            resolve: ({ content_categories }) => content_categories,
        },
        contentSuperCategories: {
            type: new GraphQLList(ContentSuperCategory),
            resolve: ({ content_super_categories }) => content_super_categories,
        },
        proponents: {
            type: new GraphQLList(Proponent),
            resolve: ({ proponents }) => proponents || [],
        },
        question: {
            type: GraphQLString,
            resolve: ({ question }) => question,
        },
        goal: {
            type: GraphQLString,
            resolve: ({ goal }) => goal ? turndown(goal) : null
        },
        majorChanges: {
            type: GraphQLString,
            resolve: ({ major_changes }) => major_changes ? turndown(major_changes) : null
        },
        changesInLaw: {
            type: GraphQLString,
            resolve: ({ changes_in_law }) => changes_in_law ? turndown(changes_in_law) : null
        },
        costsAndRevenues: {
            type: GraphQLString,
            resolve: ({ costs_and_revenues }) => costs_and_revenues ? turndown(costs_and_revenues) : null
        },
        deliveries: {
            type: GraphQLString,
            resolve: ({ deliveries }) => deliveries ? turndown(deliveries) : null
        },
        additionalInformation: {
            type: GraphQLString,
            resolve: ({ additional_information }) => additional_information ? turndown(additional_information) : null
        },
    }),
});
