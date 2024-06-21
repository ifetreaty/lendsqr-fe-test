/**
 * Converts a number into a string representation with thousand separators (e.g., 1000 to "1,000").
 * @param {number} number - The number to convert.
 * @returns {string} The formatted string representation of the number with thousand separators, or an empty string if input is not a valid number.
 */
export const formatNumberWithThousandSeparators = (number?: number): string => {
  if (typeof number !== "number" || isNaN(number)) return "";

  return number.toLocaleString("en-US");
};

/**
 * Formats a date into the "MMM DD, YYYY" format.
 * @param {Date | string | number} date - The date to format.
 * @returns {string} The formatted date string in "MMM DD, YYYY" format, or an empty string if the input is not a valid date.
 */
export const formatDate = (date?: Date | string | number): string => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) {
    return ""; // Return empty string for invalid or empty input
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  // Format the date using toLocaleDateString
  return parsedDate.toLocaleDateString("en-US", options);
};

/**
 * Converts a social media URL to a handle (e.g., "https://twitter.com/DanielsReilly" to "@DanielsReilly").
 * @param {string} url - The URL to convert.
 * @returns {string} The social media handle, or an empty string if the URL is invalid or cannot be parsed.
 */
export const urlToSocialMediaHandle = (url?: string): string => {
  if (typeof url !== "string" || !url) return "";

  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    const handle = pathname.split("/").filter(Boolean).pop();

    if (handle) {
      return `@${handle}`;
    } else {
      return "";
    }
  } catch (error) {
    return "";
  }
};

/**
 * Formats a string by replacing underscores with spaces and converting to title case.
 * @param {string} key - The key to format.
 * @returns {string} The formatted string.
 */
export const formatKeyAsTitleCase = (key: string): string => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

/**
 * Renders a value based on the provided key. If the key matches "twitter", "facebook", or "instagram",
 * it converts the value to a social media handle using the urlToSocialMediaHandle function.
 * @param {string} key - The key associated with the value.
 * @param {string} value - The value to render.
 * @returns {React.ReactNode | string} The rendered React node or string value.
 */
export const renderValue = (
  key: string,
  value: string
): React.ReactNode | string => {
  if (key === "twitter" || key === "facebook" || key === "instagram") {
    return urlToSocialMediaHandle(value);
  }
  return value;
};

/**
 * Extracts the first name from a given full name.
 * Assumes the first word in the name is the first name.
 * @param fullName - The full name from which to extract the first name.
 * @returns The extracted first name. Returns an empty string if no valid name is found or if fullName is undefined.
 */
export const extractFirstName = (fullName: string | undefined): string => {
  if (!fullName || typeof fullName !== "string" || !fullName.trim()) return "";

  const words: string[] = fullName.trim().split(/\s+/);
  if (words.length > 0) {
    return words[0];
  } else {
    return "";
  }
};

/**
 * Filters user data based on provided filters.
 * @param {Array} userData - The user data to filter.
 * @param {Object} filters - The filters to apply.
 * @returns {Array} The filtered user data.
 */
export const filterUserData = (
  userData: Array<any>,
  filters: Record<string, string>
): Array<any> => {
  return userData.filter((user) => {
    return Object.keys(filters).every((key) => {
      const filterValue = filters[key as keyof typeof filters];
      const userValue = user[key as keyof typeof user];

      if (!filterValue) return true;

      if (typeof userValue === "string") {
        return userValue.toLowerCase().includes(filterValue.toLowerCase());
      } else if (typeof userValue === "number") {
        return userValue.toString().includes(filterValue);
      } else if (userValue instanceof Date) {
        return userValue.toISOString().includes(filterValue);
      }

      return true;
    });
  });
};
