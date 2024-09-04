let tarefas = [];
let proximoId = 1;

function menuEscolhaTarefa() {
  let opcaoTarefa;

  do {
    opcaoTarefa = prompt(
      "Escolha uma tarefa a ser realizada: \n" +
        "1. Adicionar uma tarefa\n" +
        "2. Remover a tarefa\n" +
        "3. Editar a tarefa\n" +
        "4. Listar as tarefas\n" +
        "5. Buscar as tarefas por ID específico\n" +
        "6. Sair"
    );

    switch (opcaoTarefa) {
      case "1":
        adicionarTarefa();
        console.log("adicionar tarefa");
        break;
      case "2":
        removerTarefa();
        console.log("Remover tarefa");
        break;
      case "3":
        //Colocar a função de editar Tarefa
        console.log("Editar tarefa");
        break;
      case "4":
        //Colocar a função de listar Tarefa
        console.log("Listar tarefa");
        break;
      case "5":
        //Colocar a função de buscar por id Tarefa
        console.log("Buscar por id a tarefa");
        break;
      default:
        console.log("Sair");
    }
  } while (opcaoTarefa !== "6");
}

function adicionarTarefa() {
  const descricaoTarefa = prompt(
    "Por favor, digite uma descrição para a sua tarefa"
  );

  //Consiste se a descrição da tarefa está vazia

  if (descricaoTarefa === "") {
    console.log(
      "Descrição da tarefa não pode ser vazia. Por favor digite uma descrição para a tarefa."
    );
    return;
  }

  const implementaTarefa = {
    id: proximoId++,
    descricaoTarefa: descricaoTarefa,
    concluida: false,
  };

  // Insere a tarefa no array.
  tarefas.push(implementaTarefa);
}

//Remover tarefa
function removerTarefa() {
  let idTarefa = parseInt(
    prompt.question("Digite o ID da tarefa que deseja remover:")
  );

  //Caso não seja digitado um número de ID
  if (isNaN(idTarefa)) {
    console.log("ID inválido. Por favor, insira um número.");
    return;
  }

  // Localiza o índice da tarefa com o ID fornecido
  let index = tarefas.findIndex((tarefa) => tarefa.id === idTarefa);

  if (index === -1) {
    console.log("Tarefa não encontrada.");
    return;
  }

  // Pergunta de confirmação e remoção da tarefa:
  let confirmacao = prompt
    .question(
      `Você tem certeza que deseja remover a tarefa com ID ${idTarefa}? (sim/não): `
    )
    .toLowerCase();
  if (confirmacao === "sim" || confirmacao === "s") {
    tarefas.splice(index, 1);
    console.log(`Tarefa com ID ${idTarefa} removida com sucesso!`);
  } else {
    console.log("Ação de remoção cancelada.");
  }
}
