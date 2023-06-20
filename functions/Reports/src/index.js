import csvjson from 'csvjson';
import { validate } from './Validators/Validate.js';
import { all as getMerchantTransactions } from './Store/All.js';

export const handler = async(event, context, cb) => {
    const params = event.queryStringParameters;
    try {
        const validParams = validate(params);
        console.log(validParams);

        const results = await getMerchantTransactions(validParams);

        return cb(null, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-disposition': 'attachement; filename=reports.csv'
            },
            body: csvjson.toCSV(results),
            statusCode: 200
        });

    } catch(err) {
        //@TODO err handling
        console.log(err);
    }
}
