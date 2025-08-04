import { VALIDATION_MESSAGES } from '../constants/config';

export const validateRequired = (value: string): string | null => {
  if (!value || value.trim() === '') {
    return VALIDATION_MESSAGES.required;
  }
  return null;
};

export const validateLoginCredentials = (username: string, password: string): string | null => {
  const usernameError = validateRequired(username);
  if (usernameError) return usernameError;
  
  const passwordError = validateRequired(password);
  if (passwordError) return passwordError;
  
  return null;
};

export const validateNoteData = (title: string, description: string): string | null => {
  const titleError = validateRequired(title);
  if (titleError) return VALIDATION_MESSAGES.titleRequired;
  
  const descriptionError = validateRequired(description);
  if (descriptionError) return VALIDATION_MESSAGES.descriptionRequired;
  
  return null;
}; 