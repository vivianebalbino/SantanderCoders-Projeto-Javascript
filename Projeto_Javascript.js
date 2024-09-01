let tarefas = [];
let proximoId = 1;

function menuEscolhaTarefa() {
    let opcaoTarefa;

    do {
        opcaoTarefa = prompt(
            'Escolha uma tarefa a ser realizada: \n' +
            '1. Adicionar uma tarefa\n' +
            '2. Remover a tarefa\n' +
            '3. Editar a tarefa\n' +
            '4. Listar as tarefas\n' +
            '5. Buscar as tarefas por ID específico\n' +
            '6. Sair'
        )

        switch (opcaoTarefa) {
            case '1':
                adicionarTarefa();
                console.log("adicionar tarefa");
                break;
            case '2':
                //Colocar a função de remover Tarefa
                console.log("Remover tarefa");
                break;
            case '3':
                //Colocar a função de editar Tarefa
                console.log("Editar tarefa");
                break;
            case '4':
                //Colocar a função de listar Tarefa
                console.log("Listar tarefa");
                break;
            case '5':
                //Colocar a função de buscar por id Tarefa
                console.log("Buscar por id a tarefa");
                break;
            default:
                console.log("Sair");
        }

    } while (opcaoTarefa !== '6');
}

function adicionarTarefa (){
    const descricaoTarefa = prompt('Por favor, digite uma descrição para a sua tarefa');

    //Consiste se a descrição da tarefa está vazia

    if(descricaoTarefa === ''){
        console.log("Descrição da tarefa não pode ser vazia. Por favor digite uma descrição para a tarefa.");
        return;
    }

    const implementaTarefa = {
        id: proximoId++,
        descricaoTarefa: descricaoTarefa,
        concluida: false
    }

    // Insere a tarefa no array.
    tarefas.push(implementaTarefa);
}