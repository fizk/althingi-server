import { GraphQLError } from '../../error/GraphQLError.ts';

import type { ASTVisitor } from '../../language/visitor.ts';

import type { ValidationContext } from '../ValidationContext.ts';

/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-spread-target-defined
 */
export function KnownFragmentNamesRule(context: ValidationContext): ASTVisitor {
  return {
    FragmentSpread(node) {
      const fragmentName = node.name.value;
      const fragment = context.getFragment(fragmentName);
      if (!fragment) {
        context.reportError(
          new GraphQLError(`Unknown fragment "${fragmentName}".`, node.name),
        );
      }
    },
  };
}
