import { ConnectionError } from "../Errors/ConnectionError.js";
export class AuthStrategy 
{
    process(notification) {
        // @TODO implement auth processing logic
        console.log('auth', notification);
    }
}