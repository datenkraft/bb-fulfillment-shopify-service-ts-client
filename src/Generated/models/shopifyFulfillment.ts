/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A shopify fulfillment
 */
export type shopifyFulfillment = {
    /**
     * id
     */
    id?: number;
    /**
     * order id
     */
    order_id?: number;
    /**
     * status
     */
    status?: shopifyFulfillment.status;
    /**
     * created at
     */
    created_at?: string;
    /**
     * service
     */
    service?: string;
    /**
     * updated at
     */
    updated_at?: string;
    /**
     * tracking company
     */
    tracking_company?: string;
    /**
     * tracking numbers
     */
    tracking_numbers?: Array<string>;
    /**
     * shipment status
     */
    shipment_status?: shopifyFulfillment.shipment_status | null;
    /**
     * location id
     */
    location_id?: number;
    /**
     * name
     */
    name?: string;
    /**
     * notify customer
     */
    notify_customer?: boolean;
    /**
     * tracking urls
     */
    tracking_urls?: Array<string>;
    /**
     * variant inventory management
     */
    variant_inventory_management?: string;
}

export namespace shopifyFulfillment {

    /**
     * status
     */
    export enum status {
        PENDING = 'pending',
        OPEN = 'open',
        SUCCESS = 'success',
        CANCELLED = 'cancelled',
        ERROR = 'error',
        FAILURE = 'failure',
    }

    /**
     * shipment status
     */
    export enum shipment_status {
        LABEL_PRINTED = 'label_printed',
        LABEL_PURCHASED = 'label_purchased',
        ATTEMPTED_DELIVERY = 'attempted_delivery',
        READY_FOR_PICKUP = 'ready_for_pickup',
        CONFIRMED = 'confirmed',
        IN_TRANSIT = 'in_transit',
        OUT_FOR_DELIVERY = 'out_for_delivery',
        DELIVERED = 'delivered',
        FAILURE = 'failure',
    }


}
