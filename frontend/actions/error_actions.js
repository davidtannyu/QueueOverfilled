export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (errors, formType) => ({
  type: RECEIVE_ERRORS,
  errors,
  formType
});
