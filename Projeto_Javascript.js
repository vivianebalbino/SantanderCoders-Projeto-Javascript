let tarefas = [];
let proximoId = 1;

//const prompt = require('readline-sync');

function menuEscolhaTarefa() {
  let opcaoTarefa;

  do {
    opcaoTarefa = prompt.question(
      "Escolha uma tarefa a ser realizada: \n" +
      "1. Adicionar uma tarefa\n" +
      "2. Remover a tarefa\n" +
      "3. Editar a tarefa\n" +
      "4. Listar as tarefas\n" +
      "5. Buscar as tarefas por ID específico\n" +
      "6. Sair \n"
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
        editarTarefa();
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
  const descricaoTarefa = prompt.question("Por favor, digite uma descrição para a sua tarefa\n");

  //Consiste se a descrição da tarefa está vazia
  try {
    if (descricaoTarefa === "") {
      throw new Error("Descrição da tarefa não pode ser vazia. Por favor digite uma descrição para a tarefa");
    }
    const implementaTarefa = {
      id: proximoId++,
      descricaoTarefa: descricaoTarefa,
      concluida: false,
    };
    // Insere a tarefa no array.
    tarefas.push(implementaTarefa);
    console.log("Tarefa inserida com sucesso")

  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
}


//Remover tarefa
function removerTarefa() {
  try {
    let idTarefa = parseInt(
      prompt.question("Digite o ID da tarefa que deseja remover:")
    );

    if (isNaN(idTarefa)) {
      throw new Error("ID inválido. Por favor, insira um número válido.");
    }

    let index = tarefas.findIndex((tarefa) => tarefa.id === idTarefa);

    if (index === -1) {
      throw new Error("Tarefa não encontrada. Verifique o ID digitado.");
    }

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

  } catch (erro) {
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

function editarTarefa() {
  let idTarefa = prompt.questionInt("Digite o ID da tarefa que deseja editar:");

  if (isNaN(idTarefa)) {
    console.log("ID inválido. Por favor, insira um número.");
    return;
  }

  let index = tarefas.findIndex((tarefa) => tarefa.id === idTarefa);

  if (index === -1) {
    console.log("Tarefa não encontrada.");
    return;
  }

  let opcaoEdicao = "";

  opcaoEdicao = prompt.question(
    "Escolha o campo que deseja editar: \n" +
    "1. Descricao\n" +
    "2. Status\n"
  );

  if (opcaoEdicao === "1") {
    let novaDescricao = prompt.question("Digite a nova descricao: \n");

    if (novaDescricao == "") {
      console.log("Digite uma descrição válida!");
      return;
    }

    tarefas[index].descricaoTarefa = novaDescricao;
    console.log("Descrição alterada com sucesso!")
  } else {
    let novoStatus = prompt.questionInt("A tarefa foi concluída: \n" +
      "1. Sim\n" +
      "2. Nao\n"
    );

    if (novoStatus === 1) {
      tarefas[index].concluida = true;
      console.log("Tarefa concluída!")
    } else {
      tarefas[index].concluida = false;
      console.log("Status alterado com sucesso!")
    }
  }
}

menuEscolhaTarefa();