import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { FulfillmentShopifyServiceClient } from '../dist';

describe('Client Test (staging)', () => {
  test('Initialize and use the generated Client', (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID_STAGING ?? '',
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
      oAuthTokenHost:
          'https://authentication-api.staging.backbone.datenkraft.info',
    };

    FulfillmentShopifyServiceClient.init(
        configOptions,
        'https://fulfillment-service-sy.staging.backbone.datenkraft.info/v1'
    )
    .then(() => {
      FulfillmentShopifyServiceClient.Generated.DocsService.getOpenApiInFormat('json')
      .then((openApi) => {
        expect(openApi).toBeDefined()
        done();
      })
      .catch((error) => {
        done(error);
      });
    })
    .catch((error) => {
      done(error);
    });
  });
});