export class ErrorHandleValidationStrategy
{
    constructor(error) {
        this.error = error;
    }

    handle(notification) {
        return {
            statusCode: this.error.statusCode,
            statusText: this.error.statusText,
            error: this.error.message,
        }
    }
}