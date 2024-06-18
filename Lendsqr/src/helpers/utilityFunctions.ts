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
