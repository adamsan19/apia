const cache = new Map();

async function fetchData(url) {
    if (cache.has(url)) {
        return cache.get(url);
    }

    const response = await fetch(url);
    const data = await response.json();
    cache.set(url, data);
    return data;
}

export default fetchData;
