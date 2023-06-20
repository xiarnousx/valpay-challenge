import { PayoutContext } from "../PayoutStrategy/PayoutContext.js";
import { ValpayStrategy } from "../PayoutStrategy/ValpayStrategy.js";
import { MerchantStrategy } from "../PayoutStrategy/MerchantStrategy.js";

const PaymentTypes = Object.freeze({
    VALPAY: 'valpay',
    MERCHANT: 'merchant'
});

export const createPayout = (paymentType) => {
    switch(`${paymentType}`.toLowerCase()) {
        case PaymentTypes.VALPAY:
            return new PayoutContext(new ValpayStrategy());
        case PaymentTypes.MERCHANT:
            return new PayoutContext(new MerchantStrategy());
        default:
            throw Error(`No Implemented Type: ${paymentType}`);
            break;
    }
}