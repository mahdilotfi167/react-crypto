/**
 * Pushes a new entry to the coin history.
 * @param coin The coin to push
 */
export function pushHistory(coin) {
    const history = JSON.parse(localStorage.getItem("history") || "[]");
    const filtered = history.filter(item => item.id !== coin.id);
    filtered.unshift({
        id: coin.id,
        current_price: coin.market_data.current_price.usd,
        name: coin.name,
        image: coin.image.small
    });
    localStorage.setItem("history", JSON.stringify(filtered.slice(0, 3)));
}

/**
 * Returns the coin history.
 * @returns {any} The coin history
 */
export function getHistory() {
    return JSON.parse(localStorage.getItem("history") || "[]");
}