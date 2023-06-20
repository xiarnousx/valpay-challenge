import { AuthStrategy } from "../TnxStrategy/AuthStrategy.js";
import { DisputeStrategy } from "../TnxStrategy/DisputeStrategy.js";
import { RefundStrategy } from "../TnxStrategy/RefundStrategy.js";
import { TransactionContext } from "../TnxStrategy/TransactionContext.js";

const Types = Object.freeze({
    AUTH: 'auth',
    REFUND: 'refund',
    DISPUTE: 'dispute'
});

export const createTransactionProcessor = (type) => {
    switch(`${type}`.toLowerCase()) {
        case Types.AUTH:
            return new TransactionContext(new AuthStrategy());
        case Types.REFUND:
            return new TransactionContext(new RefundStrategy());
        case Types.DISPUTE:
            return new TransactionContext(new DisputeStrategy());
        default:
            throw Error(`No Implemented Type: ${type}`);
            break;
    }
}