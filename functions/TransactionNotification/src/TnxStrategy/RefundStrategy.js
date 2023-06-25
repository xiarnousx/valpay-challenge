import { ConnectionError } from "../Errors/ConnectionError.js";
export class RefundStrategy 
{
    process(notification) {
        // @TODO implement refund processing logic
        console.log('refund', notification);
    }
}