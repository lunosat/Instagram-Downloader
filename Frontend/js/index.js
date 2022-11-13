const get = async (url) => {
    if(!url) {
        alert('Insert URL')
    }
    const divResult = document.getElementById('result')
    divResult.innerHTML = `<p class="loading">Loading...</p>`
    const info = await fetch(`http://localhost:3000/dl?url=${url}`)
    const res = await info.json()
    if(res.status = 'sucess'){
        res.response.url_list.forEach(link => {
            divResult.innerHTML = `<div class="buttonBox"><input type="button" value="Download" onclick="download('${link}')"></div>`
        })
        return
    } else {
        divResult.innerHTML = `<h1>Error</h1>`
    }
}
const download = async (midiaUrl) => {
    window.open(midiaUrl, '_blank').focus()
}