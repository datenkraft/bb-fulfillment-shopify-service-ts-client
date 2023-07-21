/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class ActionService {

    /**
     * Toggle sandbox mode for a shop.
     * Toggle sandbox mode for a shop.
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns any Created
     * @throws ApiError
     */
    public static async shopToggleSandboxMode(
        requestBody: {
            /**
             * shopifyShopDomain
             */
            shopifyShopDomain?: string,
        },
    ): Promise<errorResponse | {
        /**
         * ShopCode
         */
        shopCode?: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/action/shop-toggle-sandbox-mode`,
            body: requestBody,
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

    /**
     * Try to register shopify as a test shop.
     * Try to register shopify as a test shop.
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns any Created
     * @throws ApiError
     */
    public static async testShopRegister(
        requestBody: {
            /**
             * shopifyShopDomain
             */
            shopifyShopDomain?: string,
        },
    ): Promise<errorResponse | {
        /**
         * ShopCode
         */
        shopCode?: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/action/test-shop-register`,
            body: requestBody,
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