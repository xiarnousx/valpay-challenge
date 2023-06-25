import { ConnectionError } from '../Errors/ConnectionError.js'
export class ValpayStrategy 
{
    pay(notification) {
        // @TODO implement valpay payout logic
        console.log('valpay', notification);
        // in case of error it would throu
        // throw new ConnectionError('Failed to connect to service');
    }
}
