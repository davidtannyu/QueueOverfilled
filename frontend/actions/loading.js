export const LOADING_CONTENT = "LOADING_CONTENT";
export const RESET_DEFAULT = "RESET_DEFAULT";


export const loading = () => ({
  type: LOADING_CONTENT
});

export const resetDefault = () => ({
  type: RESET_DEFAULT
});
