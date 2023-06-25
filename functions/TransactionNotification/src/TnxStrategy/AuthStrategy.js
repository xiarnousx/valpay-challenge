import { ConnectionError } from "../Errors/ConnectionError.js";
export class AuthStrategy 
{
    process(notification) {
        // @TODO implement auth processing logic
        console.log('auth', notification);
        // in case of error it would throu
        // throw new ConnectionError('Failed to connect to service');
    }
}