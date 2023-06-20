
export class PayoutContext 
{
    constructor(strategy) {
        this.strategy = strategy;
    }

    execute(notification) {
        this.strategy.pay(notification)
    }   
}
