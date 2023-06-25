export class ErrorHandleGenericStrategy
{
    constructor(error) {
        this.error = error;
    }

    handle(notification) {
        return {
            statusCode: 500,
            statusText: 'server side error',
            error: this.error.message,
        }
    }
}