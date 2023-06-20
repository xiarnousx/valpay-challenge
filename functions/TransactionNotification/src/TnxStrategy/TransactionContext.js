
export class TransactionContext 
{
    constructor(strategy) {
        this.strategy = strategy;
    }

    execute(notification) {
        this.strategy.process(notification)
    }   
}
