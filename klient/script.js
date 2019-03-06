async function pratiGlas(brPoliticar) {
    await axios.post("/vote", {
        politicarId: brPoliticar,
        dodaj: true
    })
    zemiGlasovi()
}

async function zemiGlasovi() {
    let response = await axios.get("/vote")
    let glasovi = response.data
    document.getElementById("k1").innerHTML = glasovi[0]
    document.getElementById("k2").innerHTML = glasovi[1]
    document.getElementById("k3").innerHTML = glasovi[2]
    document.getElementById("k4").innerHTML = glasovi[3]

}

setInterval(zemiGlasovi, 1000)