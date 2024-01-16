/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class ActionService {

    /**
     * Create test products for a shop
     * Create test products for a shop
     * @param requestBody
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async postActionShopCreateTestProducts(
        requestBody: {
            /**
             * Domain of the shop the test products should be created for
             */
            shopifyShopDomain?: string,
        },
    ): Promise<{
        /**
         * The productNumbers of the created products
         */
        productNumbers?: Array<string>,
    } | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/action/shop-create-test-products`,
            body: requestBody,
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - DATA_NOT_PROCESSABLE: The given data is not processable.
                 * - DATA_NOT_FOUND: The requested data could not be found.
                 * - CREATE_TEST_PRODUCTS_INVALID_SHOP: Creation of test products is not available for the given shop .
                 * - CREATE_TEST_PRODUCTS_NOT_INITIALIZED: Action is not initialized for the given shop.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Execute the cleanup after the creation test products for a shop
     * Execute the cleanup after the creation test products for a shop
     * @param requestBody
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async postActionShopCreateTestProductsCleanup(
        requestBody: {
            /**
             * Domain of the shop the test products should be created for
             */
            shopifyShopDomain?: string,
        },
    ): Promise<{
        /**
         * The OAuth login URL that must be called to complete the cleanup
         */
        oAuthLoginUrl?: string | null,
    } | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/action/shop-create-test-products/cleanup`,
            body: requestBody,
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - DATA_NOT_PROCESSABLE: The given data is not processable.
                 * - DATA_NOT_FOUND: The requested data could not be found.
                 * - CREATE_TEST_PRODUCTS_ALREADY_CLEANED_UP: Test products are already cleaned up.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Execute the initialization for before creation test products for a shop
     * Execute the initialization before the creation test products for a shop
     * @param requestBody
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async postActionShopCreateTestProductsInitialize(
        requestBody: {
            /**
             * Domain of the shop the test products should be created for
             */
            shopifyShopDomain?: string,
        },
    ): Promise<{
        /**
         * The OAuth login URL that must be called to complete the initialization
         */
        oAuthLoginUrl?: string | null,
    } | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/action/shop-create-test-products/initialize`,
            body: requestBody,
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - DATA_NOT_PROCESSABLE: The given data is not processable.
                 * - DATA_NOT_FOUND: The requested data could not be found.
                 * - CREATE_TEST_PRODUCTS_ALREADY_INITIALIZED: Test products are already initialized.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Toggle sandbox mode for a shop.
     * Toggle sandbox mode for a shop.
     * @param requestBody
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async shopToggleSandboxMode(
        requestBody: {
            /**
             * shopifyShopDomain
             */
            shopifyShopDomain?: string,
        },
    ): Promise<{
        /**
         * shopCode
         */
        shopCode?: string,
    } | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/action/shop-toggle-sandbox-mode`,
            body: requestBody,
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - DATA_NOT_PROCESSABLE: The given data is not processable.
                 * - DATA_NOT_FOUND: The requested data could not be found.
                 * - SANDBOX_MODE_TOGGLE_FAILED: Toggle Sandbox mode failed.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Try to register shopify as a test shop.
     * Try to register shopify as a test shop.
     * @param requestBody
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async testShopRegister(
        requestBody: {
            /**
             * shopifyShopDomain
             */
            shopifyShopDomain?: string,
        },
    ): Promise<{
        /**
         * ShopCode
         */
        shopCode?: string,
    } | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/action/test-shop-register`,
            body: requestBody,
            errors: {
                400: `Bad Request
                 *
                 * Error codes:
                 * - DATA_INVALID: Invalid data was given.`,
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - DATA_NOT_PROCESSABLE: The given data is not processable.
                 * - DATA_NOT_FOUND: The requested data could not be found.
                 * - TEST_SHOP_REGISTRATION_FAILED: Registration of the test shop failed.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

    /**
     * Reset all test shops.
     * Reset all test shops.
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async testShopReset(): Promise<{
        /**
         * Date. Format in ISO 8601.
         */
        date?: string,
    } | errorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/action/test-shop-reset`,
            errors: {
                401: `Unauthorized
                 *
                 * Error codes:
                 * - AUTHORIZATION_MISSING: No valid authentication information was given.`,
                403: `Forbidden
                 *
                 * Error codes:
                 * - PERMISSIONS_MISSING: No authorization for the called action was found.`,
                422: `Unprocessable Entity
                 *
                 * Error codes:
                 * - DATA_NOT_PROCESSABLE: The given data is not processable.
                 * - DATA_NOT_FOUND: The requested data could not be found.
                 * - TEST_SHOP_RESET_FAILED: Reset of the test shop failed.`,
                500: `Server error
                 *
                 * Error codes:
                 * - SERVER_ERROR_OCCURRED: An internal server error occurred. Please try again later.`,
            },
        });
        return result.body;
    }

}