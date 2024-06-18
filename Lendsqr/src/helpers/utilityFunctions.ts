/**
 * Converts a number into a string representation with thousand separators (e.g., 1000 to "1,000").
 * @param {number} number - The number to convert.
 * @returns {string} The formatted string representation of the number with thousand separators, or an empty string if input is not a valid number.
 */
export const formatNumberWithThousandSeparators = (number?: number): string => {
  if (typeof number !== "number" || isNaN(number)) return "";

  return number.toLocaleString("en-US");
};
