import { validate } from "./Validators/Validate.js";
import { get as getTransactionItem} from "./Store/Get.js";
import { insert as insertTransactionItem } from "./Store/Insert.js";
import { update as updateTransactionItem } from "./Store/Update.js";
import { createPayout } from "./PayoutFactory/PayoutFactory.js";
import { getErrorHandler } from "./Errors/ErrorFactory.js";

export const handler = async function(event, context) {
    const payload = event.body;

    try {
        const validPayload = validate(payload);
        
        const payoutProcessor = createPayout(validPayload.paymentTarget);
        payoutProcessor.execute(validPayload);
        
        const item = await getTransactionItem(validPayload);
        if (item === null) {
            // Insert new record of transaction type `auth` default
            const enrichedPayload = {...validPayload, type: 'auth'};
            await insertTransactionItem(enrichedPayload);

        } else {
            // update payment splits
            await updateTransactionItem(validPayload);
        }

        return {
            statusCode: 200,
            body: "[accepted]"
         }

    } catch (err) {
       const errorHandler = getErrorHandler(err);
       errorHandler.handle(payload);
    }
}
