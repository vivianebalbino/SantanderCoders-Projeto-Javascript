let tarefas = [];
let proximoId = 1;

//const prompt = require('readline-sync');

function menuEscolhaTarefa() {
  let opcaoTarefa;

  try {
    console.log("\n=====================================");
    console.log("        MENU DE TAREFAS              ");
    console.log("=====================================");
    console.log("1. Adicionar uma tarefa");
    console.log("2. Remover a tarefa");
    console.log("3. Editar a tarefa");
    console.log("4. Listar as tarefas");
    console.log("5. Buscar tarefas por ID");
    console.log("6. Voltar ao Menu Inicial");
    console.log("=====================================");

    opcaoTarefa = prompt.question("Escolha uma das opções acima: ");

    if (isNaN(opcaoTarefa)) {
      throw new Error("Entrada inválida! Insira um número válido.");
    }

    switch (opcaoTarefa) {
      case "1":
        adicionarTarefa();
        break;
      case "2":
        removerTarefa();
        break;
      case "3":
        editarTarefa();
        break;
      case "4":
        listarTarefas();
        break;
      case "5":
        listaTarefasID();
        break;
      case "6":
        menuInicial();
        return;
      default:
        throw new Error("Opção inválida. Tente novamente.");
    }
  } catch (erro) {
    console.log(`Erro: ${erro.message}`);
  } finally {
    console.log("Operação concluída.\n");
  }
  while (opcaoTarefa !== "6");
}

//Adicionar tarefa
function adicionarTarefa() {
  const descricaoTarefa = prompt.question(
    "Por favor, digite uma descrição para a sua tarefa\n"
  );

  //Consiste se a descrição da tarefa está vazia

  if (descricaoTarefa === "") {
    console.log(
      "Descrição da tarefa não pode ser vazia. Por favor digite uma descrição para a tarefa\n."
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
    if (tarefas.length === 0) {
      console.log("Não há tarefas para remover.");
      return;
    }

    console.log("\nTarefas disponíveis para remover:");
    tarefas.forEach((tarefa) => {
      console.log(`ID: ${tarefa.id} - Descrição: ${tarefa.descricaoTarefa}`);
    });

    let idTarefa = prompt.question(
      "Digite o ID da tarefa que deseja remover: "
    );

    if (isNaN(idTarefa) || idTarefa.trim() === "") {
      throw new Error("ID inválido. Por favor, insira um número válido.");
    }

    idTarefa = Number(idTarefa);
    const index = tarefas.findIndex((tarefa) => tarefa.id === idTarefa);

    if (index === -1) {
      console.log("Tarefa não encontrada.");
      return;
    }

    tarefas.splice(index, 1);
    console.log(`Tarefa com ID: ${idTarefa} foi removida com sucesso.`);
  } catch (erro) {
    console.log(`Erro: ${erro.message}`);
  } finally {
    console.log("Operação de remoção de tarefa finalizada.\n");
  }
}

//Editar tarefa
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
    "Escolha o campo que deseja editar: \n" + "1. Descricao\n" + "2. Status\n"
  );

  if (opcaoEdicao === "1") {
    let novaDescricao = prompt.question("Digite a nova descricao: \n");

    if (novaDescricao == "") {
      console.log("Digite uma descrição válida!");
      return;
    }

    tarefas[index].descricaoTarefa = novaDescricao;
    console.log("Descrição alterada com sucesso!");
  } else {
    let novoStatus = prompt.questionInt(
      "A tarefa foi concluída: \n" + "1. Sim\n" + "2. Nao\n"
    );

    if (novoStatus === 1) {
      tarefas[index].concluida = true;
      console.log("Tarefa concluída!");
    } else {
      tarefas[index].concluida = false;
      console.log("Status alterado com sucesso!");
    }
  }
}

//Listar tarefas
function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada.");
    return;
  }

  console.log("Lista de Tarefas:");
  tarefas.forEach((tarefa) => {
    console.log(
      `ID: ${tarefa.id} - Descrição: ${tarefa.descricaoTarefa} - Concluída: ${
        tarefa.concluida ? "Sim" : "Não"
      }`
    );
  });
}

//Listar tarefa pelo ID
function listaTarefasID() {
  const idTarefas = Number(
    prompt("Por favor digite o ID da tarefa que deseja listar.")
  );
  const tarefa = tarefas.find((tarefas) => tarefas.id === idTarefas);

  if (!tarefa) {
    console.log("Tarefa não encontrada");
    return;
  }

  console.log(
    `ID-Tarefa: ${tarefa.id} - Descrição-Tarefa: ${tarefa.descricaoTarefa}`
  );
}

menuEscolhaTarefa();
