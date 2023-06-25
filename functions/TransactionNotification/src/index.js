import { createTransactionProcessor } from "./TnxFactory/TransactionFactory.js";
import { validate } from "./Validators/Validate.js";
import { get as getTransactionItem} from "./Store/Get.js";
import { insert as insertTransactionItem } from "./Store/Insert.js";
import { getErrorHandler } from "./Errors/ErrorFactory.js";

export const handler = async function(event, context) {
     const payload = event.body;

     try {
      
      // Do validation on payload
       const validPayload = validate(payload);

      // check if item already exists, which mean Item already processed
      // This ensure that the api endpoint is idempotent
      const item = await getTransactionItem(validPayload);

      if (item === null) {
         const processor = createTransactionProcessor(validPayload['type']);
         processor.execute(validPayload);
         await insertTransactionItem(validPayload);
      }

      return {
         statusCode: 200,
         body: "[accepted]"
      }
      
   } catch(err) {
      const errorHandler = getErrorHandler(err);
      errorHandler.handle(payload);
   }
}
