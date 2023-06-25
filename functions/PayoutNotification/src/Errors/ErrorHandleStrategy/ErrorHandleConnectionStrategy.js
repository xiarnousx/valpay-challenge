export class ErrorHandleConnectionStrategy
{
    constructor (error) {
        this.error = error;
    }
    
    handle(notification) {
        console.log(this.error);
    }
}