async function loadData() {
    const baseURL = "https://catfact.ninja/breeds";
    let results = [];
    let page = baseURL;
    let count = 0;

    while (page) {
        const response = await fetch(page);

        if(!response.ok) throw new Error(`Error! Status: ${response.status}`);
        const json = await response.json(); 
        results.push(...json.results);
        count += json.data.length;
        page = json.next_page_url;
    //     const data = await response.json();

        
    //     if (data && data.data && data.data.length > 0) {
    //         results = results.concat(data.data);
    //         page++;
    //     } else {
    //         moreData = false;
    //     }
    // }
    // return results;
    }
    return results;
}

module.exports.loadData = loadData;