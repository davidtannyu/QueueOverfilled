export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DEFAULT_ERRORS = {
  signUp: {errors: []},
  logIn: {errors: []},
  logOut: {errors: []},
  question: {errors: []},
  answer: {errors: []}
};

export const receiveErrors = (errors, formType) => ({
  type: RECEIVE_ERRORS,
  errors,
  formType
});

export const resetErrors = () => ({
  type: RECEIVE_ERRORS,
  errors: DEFAULT_ERRORS
})
