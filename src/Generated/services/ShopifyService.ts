/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { shopifyInventoryItemCollection } from '../models/shopifyInventoryItemCollection';
import type { shopifyProductVariantCollection } from '../models/shopifyProductVariantCollection';
import { request as __request } from '../core/request';

export class ShopifyService {

    /**
     * Get a list of Inventory Items.
     * Get a list of Inventory Items..
     * @param shopifyShopDomain shopifyShopDomain
     * @param filterProductNumbers Filter for productNumber/productNumbers.
     * The maximum number of productNumbers allowed is 100.
     * The values must be separated by a comma.
     * @returns shopifyInventoryItemCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getShopifyInventoryItemCollection(
        shopifyShopDomain: string,
        filterProductNumbers: string,
    ): Promise<shopifyInventoryItemCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/shopify/inventory_items`,
            query: {
                'shopifyShopDomain': shopifyShopDomain,
                'filter[productNumbers]': filterProductNumbers,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a list of Product Variants.
     * Get a list of Product Variants.
     * @param shopifyShopDomain shopifyShopDomain
     * @param filterProductNumbers Filter for productNumber/productNumbers.
     * The maximum number of productNumbers allowed is 100.
     * The values must be separated by a comma.
     * @returns shopifyProductVariantCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getShopifyProductVariantCollection(
        shopifyShopDomain: string,
        filterProductNumbers: string,
    ): Promise<shopifyProductVariantCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/shopify/products/variants`,
            query: {
                'shopifyShopDomain': shopifyShopDomain,
                'filter[productNumbers]': filterProductNumbers,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}