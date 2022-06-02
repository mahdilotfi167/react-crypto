import {get} from "axios"

export async function fetchAll(ids, per_page, page) {
    const {data} = await get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page,
            page,
            ids,
            sparkline: false
        }
    })
    return data;
}

export async function fetchOne(id) {
    const {data} = await get(`https://api.coingecko.com/api/v3/coins/${id}`, {
        params: {
            localization: false
        }
    })
    return data;
}

export async function fetchSuggestions(query) {
    const {data} = await get("https://api.coingecko.com/api/v3/search", {
        params: {
            query,
        }
    })
    return data.coins.slice(0, 10);
}