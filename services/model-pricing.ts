// Example for PremiseOps (https://github.com/e-skora/premise-ops).
// We self-host the model only while the API is expensive. The probe reads the
// real Claude Sonnet 5.5 input price from OpenRouter on every CI run.
// @premise title: Self-host the model only while the API costs more than $3 per 1M input tokens
// @premise metric: sonnet_input_price_per_token_usd > 0.000003 USD (margin: 0.1)
// @premise probe: HTTP_JSON_PATH | https://openrouter.ai/api/v1/models
// @premise jsonPath: $.data[?(@.id=="anthropic/claude-sonnet-5.5")].pricing.prompt
// @premise blastRadius: Retire the self-hosted inference cluster and route calls to the API

export const selfHostedInference = true;
