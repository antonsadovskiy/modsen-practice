export const isCorrectLoginData = (
  login: string,
  password: string,
): boolean => {
  if (!login) {
    console.error("Email is required");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(login)) {
    console.error("Invalid email format");
    return false;
  }

  if (!password) {
    console.error("Password is required");
    return false;
  }

  if (password.length < 3) {
    console.error("Password must be at least 3 characters long");
    return false;
  }

  return true;
};
