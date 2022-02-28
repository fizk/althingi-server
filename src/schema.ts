import { GraphQLSchema } from '../lib/graphql/type/schema.ts';
import { GraphQLObjectType } from '../lib/graphql/type/definition.ts';
import Assembly from './query/Assembly.ts';
import Assemblies from './query/Assemblies.ts';
import AssemblyCongressman from './query/AssemblyCongressman.ts';
import AssemblyCongressmen from './query/AssemblyCongressmen.ts';
import AssemblyIssue from './query/AssemblyIssue.ts';
import AssemblyIssues from './query/AssemblyIssues.ts';
import AssemblyIssueDocuments from './query/AssemblyIssueDocuments.ts';
import AssemblyIssueSpeeches from './query/AssemblyIssueSpeeches.ts';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            Assemblies,
            Assembly,
            AssemblyCongressman,
            AssemblyCongressmen,
            AssemblyIssues,
            AssemblyIssue,
            AssemblyIssueDocuments,
            AssemblyIssueSpeeches,
        }
    })
});