export class ConnectionError extends Error
{
    
    
    constructor(errorMessage) {
        super(errorMessage);
        this.statusCode = 503;
        this.statusText ='Service Unavailable';
    }
}