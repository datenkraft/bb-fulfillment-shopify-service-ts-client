/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class ShopInfoService {

    /**
     * Get parameters for the shopify shop frontend (is Sandbox enabled etc.)
     * Get parameters for the shopify shop frontend (is Sandbox enabled etc.)
     * @param shopifyShopDomain shopifyShopDomain
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async shopInfo(
        shopifyShopDomain: string,
    ): Promise<{
        /**
         * ShopCode
         */
        shopCode?: string,
        /**
         * ExternalHmac
         */
        externalHmac?: string,
        /**
         * IsLinkedToStagingTestShop
         */
        isLinkedToStagingTestShop?: boolean,
        /**
         * IsShopInSandboxMode
         */
        isShopInSandboxMode?: boolean,
        /**
         * IsCreateTestProductsInitialized
         */
        isCreateTestProductsInitialized?: boolean,
        /**
         * IsSessionInvalid
         */
        isSessionInvalid?: boolean,
    } | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/shop-info`,
            query: {
                'shopifyShopDomain': shopifyShopDomain,
            },
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.
                 * - SHOP_INVALID: The given Shopify shop domain is invalid.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

}