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
         listaTarefasID();
        console.log("Buscar por id a tarefa");
        break;
      default:
        console.log("Sair");
    }
  } while (opcaoTarefa !== "6");
}

function adicionarTarefa() {
  const descricaoTarefa = prompt("Por favor, digite uma descrição para a sua tarefa");

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
  try {
    let idTarefa = parseInt(
      prompt.question("Digite o ID da tarefa que deseja remover:")
    );

    // Caso não seja digitado um número de ID
    if (isNaN(idTarefa)) {
      throw new Error("ID inválido. Por favor, insira um número válido.");
    }

    // Localiza o índice da tarefa com o ID fornecido
    let index = tarefas.findIndex((tarefa) => tarefa.id === idTarefa);

    // Caso a tarefa não seja encontrada
    if (index === -1) {
      throw new Error("Tarefa não encontrada. Verifique o ID digitado.");
    }

    // Pergunta de confirmação e remoção da tarefa
    let confirmacao = prompt
      .question(
        `Você tem certeza que deseja remover a tarefa com ID ${idTarefa}? (sim/não): `
      )
      .toLowerCase();

    // Caso o usuário confirme a remoção
    if (confirmacao === "sim" || confirmacao === "s") {
      tarefas.splice(index, 1); // Remove a tarefa
      console.log(`Tarefa com ID ${idTarefa} removida com sucesso!`);
    } else {
      console.log("Ação de remoção cancelada."); // Cancela a remoção
    }

  } catch (erro) {
    // Captura e exibe a mensagem de erro
    console.log(`Erro: ${erro.message}`);
  } finally {
    console.log("Operação de remoção finalizada.");
  }
}

function listaTarefasID() {
    const idTarefas = Number(prompt('Por favor digite o ID da tarefa que deseja listar.'));
    const tarefa = tarefas.find(tarefas => tarefas.id === idTarefas);

    if (!tarefa) {
        console.log("Tarefa não encontrada");
        return
    }

    console.log(`ID-Tarefa: ${tarefa.id} - Descrição-Tarefa: ${tarefa.descricaoTarefa}`);
}

