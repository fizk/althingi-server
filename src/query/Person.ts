import { GraphQLNonNull, GraphQLFieldConfig } from '../../lib/graphql/type/definition.ts';
import { GraphQLID } from '../../lib/graphql/type/scalars.ts';
import { Person } from '../type/Person.ts';
import type { Context } from '../index.d.ts';

interface Args {
    person: number
}

const PersonConfig: GraphQLFieldConfig<null, Context, Args> = {
    type: Person,
    args: {
        person: {
            type: new GraphQLNonNull(GraphQLID),
        },

    },
    resolve: (_, { person }, { get }) => (
        get('person', { person })
    ),
};

export default PersonConfig;
