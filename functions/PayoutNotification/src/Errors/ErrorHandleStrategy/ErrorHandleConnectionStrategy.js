export class ErrorHandleConnectionStrategy
{
    constructor (error) {
        this.error = error;
    }
    
    handle(notification) {
        //1) base64 encode notificat message
        //2) publish to sns topic notification message
        return {
            statusCode: this.error.statusCode,
            statusText: this.error.statusText,
            error: this.error.message,
        }
    }
}