/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newTestShopLink } from '../models/newTestShopLink';
import { request as __request } from '../core/request';

export class TestShopRegisterService {

    /**
     * Try to register shopify as a test shop.
     * Try to register shopify as a test shop.
     * @param shopifyDomain Shopify domain
     * @returns errorResponse Unexpected error
     * @returns newTestShopLink Created
     * @throws ApiError
     */
    public static async testShopRegister(
        shopifyDomain: string,
    ): Promise<errorResponse | newTestShopLink> {
        const result = await __request({
            method: 'POST',
            path: `/action/test-shop-register`,
            query: {
                'shopifyDomain': shopifyDomain,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}