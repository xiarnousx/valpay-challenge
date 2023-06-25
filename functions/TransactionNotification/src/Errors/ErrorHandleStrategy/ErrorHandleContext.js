export class ErrorHandleContext
{
    constructor(strategy){
        this.strategy = strategy;
    }

    handle(notification){
        this.strategy.handle(notification);
    }
}