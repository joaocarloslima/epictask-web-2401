console.log("carregar dados")

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach( (tarefa) => {
    const card = document.createElement("div")
    card.id = tarefa.titulo
    card.classList.add("nes-container", "with-title", "is-centered")

    card.innerHTML = `
            <p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>
            <a href="#" class="nes-badge is-icon">
                <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
                <span class="is-primary">${tarefa.pontos}</span>
            </a>
            <progress class="nes-progress is-success" value="${tarefa.status}" max="100"></progress>
           
            <button onClick="apagar('${tarefa.titulo}')" type="button" class="nes-btn is-error">apagar</button>
            <button onClick="dec('${tarefa.titulo}')" type="button" class="nes-btn is-primary">-</button>
            <button onClick="inc('${tarefa.titulo}')" type="button" class="nes-btn is-primary">+</button>
    `


    document.querySelector("#lista-de-tarefas").appendChild(card)
})

atualizar()