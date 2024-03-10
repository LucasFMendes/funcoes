const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    const totalQuestoes = prova.questoes.length;
    let acertos = 0;

    for (let i = 0; i < totalQuestoes; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            acertos++;
        }
    }

    const nota = (acertos / totalQuestoes) * 10; 
    console.log(prova.aluno + " acertou " + acertos + " questões e obteve nota " + nota.toFixed(2));
}

corrigirProva(prova);



