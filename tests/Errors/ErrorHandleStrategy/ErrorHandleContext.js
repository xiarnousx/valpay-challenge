export class ErrorHandleContext
{
    constructor(strategy){
        this.strategy = strategy;
    }

    handleError(error, notification){
        this.strategy.handle(error, notification);
    }
}