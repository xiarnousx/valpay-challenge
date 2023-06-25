import { ConnectionError } from "./ConnectionError.js";
import { ValidationError } from "./ValidationError.js";
import { ErrorHandleContext } from "./ErrorHandleStrategy/ErrorHandleContext.js";
import { ErrorHandleConnectionStrategy } from "./ErrorHandleStrategy/ErrorHandleConnectionStrategy.js";
import { ErrorHandleValidationStrategy } from "./ErrorHandleStrategy/ErrorHandleValidationStrategy.js";
import { ErrorHandleGenericStrategy } from "./ErrorHandleStrategy/ErrorHandleGenericStrategy.js";

export function getErrorHandler(error) {
    if (error instanceof ConnectionError) {
        return new ErrorHandleContext(new ErrorHandleConnectionStrategy())
    } else if (error instanceof ValidationError) {
        return new ErrorHandleContext(new ErrorHandleValidationStrategy())
    } else {
        return new ErrorHandleContext(new ErrorHandleGenericStrategy())
    }
}