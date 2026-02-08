let animaisData = [];

async function carregarDados() {
    try {
        const resposta = await fetch('dados.json');
        const lista = await resposta.json();
        animaisData = lista;

        const conteudo = document.getElementById('conteudo');
        conteudo.innerHTML = '';

        lista.forEach((l) => {
            const section = document.createElement('section');
            section.classList.add('animal', l.especie);
            section.innerHTML = `
                <h3>Nome: ${l.nome}</h3>
                <p>Espécie: ${l.especie}</p>
                <p>Idade: ${l.idade} anos</p>
                <p>Peso: ${l.peso} kg</p>
                <p>Energia: ${l.energia}%</p>
            `;
            conteudo.appendChild(section);
        });

    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

function petsPorIdade() {
    if (animaisData.length === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => x.idade - y.idade);
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Ranking por Idade (Crescente)</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome} - ${a.idade} anos Especie: ${a.especie}
                </p>
            `).join('')}
        </div>
    `;
}

function petsPorPeso() {
    if (animaisData.length === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => x.peso - y.peso);
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Ordenar por peso (crescente)</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome} - ${a.peso}Kg Especie: ${a.especie})
                </p>
            `).join('')}
        </div>
    `;

}

function petsPorPesomenos() {
    if (animaisData.length === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => y.peso - x.peso);
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Ordenar por peso (decrescente)</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome} - ${a.peso}Kg Especie: ${a.especie})
                </p>
            `).join('')}
        </div>
    `;

}

function ordenarPorNome() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => x.nome.localeCompare(y.nome));
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Ordenar por nome (ordem alfabética)</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome}
                </p>
            `).join('')}
        </div>
    `;
}

function cachorrosEEnergia() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = animaisData.filter(cao => cao.especie === "cachorro").sort((x, y) => y.energia - x.energia);
    const container = document.getElementById('conteudo2')

    container.innerHTML = `
        <h2>Filtrar apenas cachorros e ordenar por energia (decrescente)</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome} - Especie: ${a.especie} - Energia: ${a.energia}
                </p>
            `).join('')}
        </div>
    `;
}

function totalDeEnergia() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = animaisData.reduce((total, a) => total + a.energia, 0);
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Filtrar apenas cachorros e ordenar por energia (decrescente)</h2>
        <div class="destaque">
            
                <p class="super-animal">
                   Total: ${ranking}
                </p>
        </div>
    `;
}

function mediaDeEnergia() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = animaisData.reduce((total, a) => total + a.energia, 0);
    const soma = ranking / animaisData.length;
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Filtrar apenas cachorros e ordenar por energia (decrescente)</h2>
        <div class="destaque">
            
                <p class="super-animal">
                   Media: ${soma.toFixed(2)}
                </p>
        </div>
    `;
}

function nomePeso() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = animaisData.reduce((total, a) => {
        total[a.nome] = a.peso;
        return total;
    }, {});

    const resultadoFormatado = Object.entries(ranking).map(([nome, peso]) => `{${nome}: ${peso}}, `).join('<br>');

    const container = document.getElementById('conteudo2')

    container.innerHTML = `
        <h2>Filtrar apenas cachorros e ordenar por energia (decrescente)</h2>
        <div class="destaque">
            
                <p class="super-animal">
                   ${resultadoFormatado}
                </p>
        </div>
    `;
}

function listaNomeComLetraO() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = animaisData.filter(a => a?.nome?.toUpperCase().includes('O')).sort((x, y) => x.nome.localeCompare(y.nome));
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Listar os nomes que contêm a letra "o"</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome}
                </p>
            `).join('')}
        </div>
    `;
}

function removerEspacoEstras() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => x.nome - y.nome);
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Remover espaços extras de um nome usando trim</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome} - Especie: ${a.especie} - Energia: ${a.energia}
                </p>
            `).join('').trim()}
        </div>
    `;
}

function mostrarOsTresPrimeirosCaractes() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => x.nome - y.nome);
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Mostrar os três primeiros caracteres de cada nome</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome.slice(0, 3)}
                </p>
            `).join('').trim()}
        </div>
    `;
}

function nomesDosUsando() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => x.nome.localeCompare(y.nome));
    const container = document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>Comparar nomes usando localeCompare</h2>
        <div class="destaque">
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome}
                </p>
            `).join('').trim()}
        </div>
    `;
}

function popEPush() {
    if (animaisData === 0) {
        console.error("Dados não carregados ainda!");
        return;
    }

    const ranking = [...animaisData].sort((x, y) => x.nome.localeCompare(y.nome));
    const container = document.getElementById('conteudo2');

    let usandopop = ranking.pop();
    const resultadoFormatado = Object.entries(usandopop).map(([nome, peso]) => `{${nome}: ${peso}}, `).join('<br>');

    let usandoPush = ranking.push({
        "nome": "Zeus",
        "especie": "cachorro",
        "idade": 4,
        "peso": 32,
        "energia": 92
    },
        {
            "nome": "Lili",
            "especie": "gato",
            "idade": 5,
            "peso": 4.5,
            "energia": 70
        },
        {
            "nome": "Cotton",
            "especie": "coelho",
            "idade": 1,
            "peso": 1.8,
            "energia": 65
        },
        {
            "nome": "Charlie",
            "especie": "cachorro",
            "idade": 3,
            "peso": 15,
            "energia": 88
        },
        {
            "nome": "Bella",
            "especie": "gato",
            "idade": 7,
            "peso": 5.2,
            "energia": 55
        },
        {
            "nome": "Buddy",
            "especie": "cachorro",
            "idade": 9,
            "peso": 24,
            "energia": 75
        },
        {
            "nome": "Simba",
            "especie": "gato",
            "idade": 2,
            "peso": 4.8,
            "energia": 85
        },
        {
            "nome": "Nala",
            "especie": "gato",
            "idade": 2,
            "peso": 4.3,
            "energia": 80
        },
        {
            "nome": "Rocky",
            "especie": "cachorro",
            "idade": 5,
            "peso": 26,
            "energia": 90
        },
        {
            "nome": "Molly",
            "especie": "cachorro",
            "idade": 6,
            "peso": 18,
            "energia": 78
        },
        {
            "nome": "Coco",
            "especie": "papagaio",
            "idade": 8,
            "peso": 0.9,
            "energia": 65
        },
        {
            "nome": "Daisy",
            "especie": "hamster",
            "idade": 2,
            "peso": 0.25,
            "energia": 50
        },
        {
            "nome": "Jack",
            "especie": "cachorro",
            "idade": 11,
            "peso": 34,
            "energia": 68
        },
        {
            "nome": "Lucy",
            "especie": "gato",
            "idade": 4,
            "peso": 5.1,
            "energia": 72
        },
        {
            "nome": "Bailey",
            "especie": "coelho",
            "idade": 4,
            "peso": 2.8,
            "energia": 60
        })
    container.innerHTML = `
        <h2>Adicionar e remover pets da lista (pop e push)</h2>
        <div class="destaque">
        <p>POP(): </p>
            ${resultadoFormatado}
            <br><br>
            <p>Push(): </p>
            ${ranking.map((a, i) => `
                <p class="super-animal">
                    ${i + 1}. Nome: ${a.nome} - Especie: ${a.especie} - ${a.peso}Kg)
                </p>
            `).join('')}
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    carregarDados();
});

window.carregarDados = carregarDados;
window.petsPorIdade = petsPorIdade;
window.petsPorPeso = petsPorPeso;
window.petsPorPesomenos = petsPorPesomenos;
window.ordenarPorNome = ordenarPorNome;
window.cachorrosEEnergia = cachorrosEEnergia;
window.totalDeEnergia = totalDeEnergia;
window.nomePeso = nomePeso;
window.listaNomeComLetraO = listaNomeComLetraO;
window.removerEspacoEstras = removerEspacoEstras;
window.mostrarOsTresPrimeirosCaractes = mostrarOsTresPrimeirosCaractes;
window.nomesDosUsando = nomesDosUsando;
window.popEPush = popEPush = popEPush;