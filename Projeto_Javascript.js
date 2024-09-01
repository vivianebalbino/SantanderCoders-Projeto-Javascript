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
                //Colocar a função de adicionar Tarefa
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