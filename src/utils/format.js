const {format} = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

/**
 * Formats a number to a currency string
 * @param labelValue {number} The number to format
 * @returns {string} - Formatted currency string
 */
function convertToInternationalCurrencySystem(labelValue) {

    // Nine Zeroes for Billions
    return '$'+(Math.abs(Number(labelValue)) >= 1.0e+9

        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

                : Math.abs(Number(labelValue)));

}

export const currencyFormat = format;
export const unitFormat = convertToInternationalCurrencySystem;