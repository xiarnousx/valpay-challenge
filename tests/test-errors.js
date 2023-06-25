import { ConnectionError } from "./Errors/ConnectionError.js";
import { getErrorHandler } from "./Errors/ErrorFactory.js";
import { ValidationError } from "./Errors/ValidationError.js";

function throwValidationError() {
    throw new ValidationError('Invalid fields');
}

function throwConnectionError() {
    throw new ConnectionError('Not able to connect');
}

try {
    //throwValidationError();
    //throwConnectionError();
    throw new Error('hello world!')
} catch(error) {

    const errorHandler = getErrorHandler(error);
    errorHandler.handleError(error.message, {});
}
