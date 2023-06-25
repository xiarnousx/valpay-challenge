import { ConnectionError } from '../Errors/ConnectionError.js'
export class MerchantStrategy 
{
    pay(notification) {
        // @TODO implement merchant payout logic
        console.log('merchant', notification);
         // in case of error it would throu
        // throw new ConnectionError('Failed to connect to service');
    }
}
