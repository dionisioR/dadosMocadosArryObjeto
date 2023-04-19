let containerVideos = document.getElementById('containerVideos')


function carregarContainer() {

    containerVideos.innerHTML = ''

    for (let i = 0; i < dados.length; i++) {

        containerVideos.innerHTML += `
    <div class="col-lg-3 col-md-4 col-6 mb-5 pb-5">
        <img class="img-fluid" src="${dados[i].url}" title="${dados[i].titulo}"></img>
        <h5 class="py-3">${dados[i].titulo}</h5>
        <hr>
        <p>${dados[i].descricao}</p>
    </div>
    `
    }


}

carregarContainer()
