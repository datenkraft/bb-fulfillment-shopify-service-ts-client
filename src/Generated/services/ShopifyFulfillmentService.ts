/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { shopifyFulfillment } from '../models/shopifyFulfillment';
import { request as __request } from '../core/request';

export class ShopifyFulfillmentService {

    /**
     * Get a shopify fulfillment for a shop by the fulfillment order id and fulfillment id.
     * Get a shopify fulfillment for a shop by the fulfillment order id and fulfillment id.
     * @param shop shop
     * @param fulfillmentOrderId fulfillment order Id
     * @param fulfillmentId fulfillment Id
     * @returns shopifyFulfillment OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getShopifyFulfillment(
        shop: string,
        fulfillmentOrderId: number,
        fulfillmentId: number,
    ): Promise<shopifyFulfillment | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/shopify/fulfillment-order/${fulfillmentOrderId}/fulfillment/${fulfillmentId}`,
            query: {
                'shop': shop,
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