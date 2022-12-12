/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { shopifyInventoryItem } from '../models/shopifyInventoryItem';
import type { shopifyInventoryItemCollection } from '../models/shopifyInventoryItemCollection';
import { request as __request } from '../core/request';

export class ShopifyService {

    /**
     * Get a Inventory Item by its productNumber.
     * Get a Inventory Item by its productNumber.
     * @param shopifyShopDomain shopifyShopDomain
     * @param productNumber productNumber
     * @returns shopifyInventoryItem OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getShopifyInventoryItem(
        shopifyShopDomain: string,
        productNumber: string,
    ): Promise<shopifyInventoryItem | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/shopify/inventory_items/${productNumber}`,
            query: {
                'shopifyShopDomain': shopifyShopDomain,
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
     * Get a list of Inventory Items.
     * Get a list of Inventory Items.
     * @param shopifyShopDomain shopifyShopDomain
     * @param filterProductNumbers Filter for productNumber/productNumbers.\nThe maximum number of productNumbers allowed is 100.\nThe values are separated by a comma.
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

}