# premise-ops-example

A small repo that uses the [PremiseOps](https://github.com/e-skora/premise-ops) CI check.

`services/model-pricing.ts` has one `@premise` comment: we self-host a model only while the API price is above a line. On every push, and every hour, the workflow in `.github/workflows/premise.yml` (copied exactly from the PremiseOps README) reads the real Claude Sonnet 5.5 input price from OpenRouter and fails the build if the premise breaks.

The history shows both outcomes:

- The first commit sets the line at $3 per 1M input tokens. The real price is $2, so the premise breaks and CI is red.
- The next commit moves the line to $1 per 1M input tokens. The premise holds and CI is green.
