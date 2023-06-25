import { ValidationError } from "../Errors/ValidationError.js";
export const validate = (payload) => {

    if (payload['merchantId'] === undefined) {
        throw new ValidationError('Merchant ID is required');
    }

    if (payload['transactionId'] === undefined) {
        throw new ValidationError('Transaction ID is required');
    }

    if (
        payload['type'] === undefined 
        || ['auth','refund', 'dispute'].indexOf(payload['type']) === -1
    ) {
        throw new ValidationError('Type is required and it must be one of auth, refund or dispute');
    }
    
    return payload;
}