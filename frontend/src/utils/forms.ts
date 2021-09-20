export const getFieldErrors = (errors) => {
  const fieldErrors = {};

  errors.forEach(({ field, message }) => {
    if (!field) return;

    fieldErrors[field] = message;
  });

  return fieldErrors;
};
