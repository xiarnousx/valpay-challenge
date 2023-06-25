export class ErrorHandleContext
{
    constructor(strategy){
        this.strategy = strategy;
    }

    handle(notification){
        return this.strategy.handle(notification);
    }
}