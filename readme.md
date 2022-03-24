# althingi-server


### GraphQL
I couldn't find a GraphQL library in TypeScript that worked for Deno. There is a Deno branch in [graphql-js](https://github.com/graphql/graphql-js) but that one didn't work, so I cloned the main branch, ran a search/replace on it to add `.ts` extension to all imports. Then, there is one mention of `process.env.NODE_ENV === 'production'` in `jsutils/instanceOf.ts` which has to be changed to `Deno.env.get("NODE_ENV") === 'production'`. Then I copy/paste the content of `source` into my `lib/graphql` folder.

This repo currently has v16.3.0 of [graphql-js](https://github.com/graphql/graphql-js).


```sh
# Go into your project's working directory
git clone https://github.com/oakserver/oak && cd oak

# Collect your coverage profile with deno test --coverage=<output_directory>
deno test --coverage=cov_profile

# From this you can get a pretty printed diff of uncovered lines
deno coverage cov_profile

# Or generate an lcov report
deno coverage cov_profile --lcov > cov_profile.lcov

# Which can then be further processed by tools like genhtml
genhtml -o cov_profile/html cov_profile.lcov
```