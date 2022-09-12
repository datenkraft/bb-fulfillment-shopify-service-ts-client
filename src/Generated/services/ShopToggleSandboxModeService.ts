/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class ShopToggleSandboxModeService {

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

}