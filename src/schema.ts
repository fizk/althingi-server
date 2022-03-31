import { GraphQLSchema } from '../lib/graphql/type/schema.ts';
import { GraphQLObjectType } from '../lib/graphql/type/definition.ts';
import Person from './query/Person.ts';
import Assembly from './query/Assembly.ts';
import Assemblies from './query/Assemblies.ts';
import AssemblyCongressman from './query/AssemblyCongressman.ts';
import AssemblyCongressmen from './query/AssemblyCongressmen.ts';
import AssemblyConstituencies from './query/AssemblyConstituencies.ts';
import AssemblyPresidents from './query/AssemblyPresidents.ts';
import AssemblyGovernment from './query/AssemblyGovernment.ts';
import AssemblyInflation from './query/AssemblyInflation.ts';
import AssemblyParties from './query/AssemblyParties.ts';
import AssemblyIssue from './query/AssemblyIssue.ts';
import AssemblyIssues from './query/AssemblyIssues.ts';
import AssemblyIssueDocuments from './query/AssemblyIssueDocuments.ts';
import AssemblyIssueSpeeches from './query/AssemblyIssueSpeeches.ts';
import AssemblyPlenary from './query/AssemblyPlenary.ts';
import AssemblyPlenaries from './query/AssemblyPlenaries.ts';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            Person,
            Assemblies,
            Assembly,
            AssemblyCongressman,
            AssemblyCongressmen,
            AssemblyConstituencies,
            AssemblyPresidents,
            AssemblyGovernment,
            AssemblyInflation,
            AssemblyParties,
            AssemblyPlenary,
            AssemblyPlenaries,
            AssemblyIssues,
            AssemblyIssue,
            AssemblyIssueDocuments,
            AssemblyIssueSpeeches,
        }
    })
});