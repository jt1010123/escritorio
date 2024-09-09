function buscar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "Busca vazia. Você precisa digitar o nome de alguma área do direito"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se no titulo includes campoPesquisa
        // então, faça....
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}.</p>
                <a href=${dado.link} target="_blank">Link</a>
            </div>
        `;
        }
        console.log(dado.titulo.includes(campoPesquisa))
        // Cria uma nova div para cada resultado
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. A sua busca não foi localizada no banco de dados.</p)"

    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}