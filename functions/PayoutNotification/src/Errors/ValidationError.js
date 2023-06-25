export class ValidationError extends Error
{
   
    constructor(errorMessage) {
        super(errorMessage);
        this.statusCode = 422;
        this.statusText ='Unprocessable Content';
    }
}