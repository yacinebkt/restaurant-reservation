import i18next from "i18next";

export const formatError = (error: any): string => {
  if (!error) {
    return "Unknown error";
  }

  if (typeof error === "string") {
    return i18next.t(error);
  }

  if (error.response?.data?.message) {
    return error.response?.data?.message;
  }

  if (error.message) {
    return i18next.t(error.message);
  }

  if (error.graphQLErrors && error.graphQLErrors.length > 0) {
    // If there are GraphQL errors, display the first one
    return error.graphQLErrors[0].message || "Unknown GraphQL error";
  }

  if (error.networkError) {
    // If there is a network error, display it
    return `Network error: ${
      error.networkError.message || "Unknown network error"
    }`;
  }

  // If it's some other type of error, display its message
  return error.message || "Unknown error";
};