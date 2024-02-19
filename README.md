**This package version branch is abandoned and does not receive any updates!**
---

# Backbone - Fulfillment Shopify Service TS Client

## Introduction

The Fulfillment Shopify Service TS Client enables you to work with the Fulfillment Shopify Service.

## Prerequisites

- npm

## Installation

You can use [npm](https://www.npmjs.com/) to install the package.

~~~~ bash
npm install @datenkraft/bb-fulfillment-shopify-service-ts-client
~~~~

## Using the package

The package can be used to communicate with the Fulfillment Shopify Service.
The Client includes functionalities for every endpoint defined in the openapi.json.
The Client is auto-generated with [ferdikoomen/openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) using an openapi.json file.

### Initializing the Client

~~~~ typescript
import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { FulfillmentShopifyServiceClient } from '@datenkraft/bb-fulfillment-shopify-service-ts-client';

const configOptions: ConfigOptions = {
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  oAuthTokenHost: 'oAuthTokenHost',
  tokenTradeInPath: 'tokenTradeInPath',
  externalIdToken: 'externalIdToken',
  useExternalIdToken: true,
};

FulfillmentShopifyServiceClient.init(configOptions).then(() => {
  // Client is initialized
});
~~~~

## License
This repository is available under the [MIT license](https://opensource.org/licenses/MIT).
