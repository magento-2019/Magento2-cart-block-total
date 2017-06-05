define(
    [
        'Magento_Checkout/js/view/summary/abstract-total',
        'mage/translate',
    ],
    function (Component) {
        "use strict";
        return Component.extend({
            defaults: {
                template: 'Ethangrant_CartTotalsItems/checkout/cart/totals/extra'
            },

            message: 'Some error message'
        });
    }
);
