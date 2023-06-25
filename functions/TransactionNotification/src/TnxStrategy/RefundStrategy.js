import { ConnectionError } from "../Errors/ConnectionError.js";
export class RefundStrategy 
{
    process(notification) {
        // @TODO implement refund processing logic
        console.log('refund', notification);
        // in case of error it would throu
        // throw new ConnectionError('Failed to connect to service');
    }
}