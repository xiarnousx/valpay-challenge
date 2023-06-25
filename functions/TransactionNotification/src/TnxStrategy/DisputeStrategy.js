import { ConnectionError } from "../Errors/ConnectionError.js";

export class DisputeStrategy 
{
    process(notification) {
        // @TODO implement dispute processing logic
        console.log('dispute', notification);
        // in case of error it would throu
        // throw new ConnectionError('Failed to connect to service');
    }
}