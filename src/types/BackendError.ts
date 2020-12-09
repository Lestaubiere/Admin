export type BackendError = {
  errors: {
    message: string;
    field: string;
  }[];
};
