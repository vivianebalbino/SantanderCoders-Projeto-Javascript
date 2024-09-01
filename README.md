# SantanderCoders-Projeto-Javascript
Desenvolver o projeto, utilizando os conceitos abordados ao longo do módulo de Lógica de Programação, uma aplicação de lista de tarefas (ToDo List).

# 📋 To-Do List com JavaScript

### **Participantes**
- **Mendelson Aleixo**
- **Viviane Balbino**
- **Leticia Ribeiro**
- **Maiane Dhienis**

## 📚 Descrição do Projeto
Este projeto consiste no desenvolvimento de uma aplicação de lista de tarefas (**To-Do List**) utilizando apenas **JavaScript**. Toda a interação com o usuário é feita através de prompts, alerts e confirmações exibidas pelo navegador, sem a necessidade de uma interface gráfica tradicional.

## 🛠️ Funcionalidades
A aplicação To-Do List possui as seguintes funcionalidades:

1. **Adicionar uma tarefa**: Permite ao usuário adicionar uma nova tarefa à lista através de um `prompt`.
2. **Editar uma tarefa salva**: Permite ao usuário modificar a descrição de uma tarefa existente através do ID.
3. **Remover uma tarefa salva**: Permite ao usuário excluir uma tarefa da lista com base no ID.
4. **Listar todas as tarefas salvas**: Exibe todas as tarefas cadastradas em um `alert`.
5. **Obter uma tarefa pelo ID**: Permite ao usuário buscar uma tarefa específica pelo seu identificador único (ID).

## 🧰 Tecnologias Utilizadas
- **JavaScript**: Toda a lógica do projeto é implementada utilizando apenas JavaScript puro, sem frameworks ou bibliotecas adicionais.

## 📑 Estrutura de Dados
As tarefas são gerenciadas através de um array de objetos JavaScript. Cada tarefa possui os seguintes atributos:

```javascript
let tarefas = [
  {
    id: 1,                      // Identificador único da tarefa
    descricao: 'Exemplo de tarefa', // Descrição da tarefa
    concluida: false            // Status da tarefa (concluída ou não)
  },
  // outras tarefas...
];
```

## ⚙️ Implementação das Funcionalidades

- **Adicionar Tarefa**: Função que adiciona uma nova tarefa ao array `tarefas` a partir da descrição fornecida pelo usuário via `prompt`.
- **Editar Tarefa**: Função que permite modificar a descrição de uma tarefa existente, solicitando o `ID` e a nova descrição.
- **Remover Tarefa**: Função que remove uma tarefa do array com base no `id` fornecido pelo usuário.
- **Listar Tarefas**: Função que exibe todas as tarefas cadastradas em um `alert`.
- **Buscar Tarefa por ID**: Função que busca e exibe os detalhes de uma tarefa específica pelo `ID`.

## ▶️ Como Executar o Projeto

1. **Copie o código JavaScript do projeto.**
2. **Abra uma página em branco no navegador e pressione `F12` para abrir o console.**
3. **Cole o código no console e pressione `Enter`.**
4. **O menu de opções será exibido para que você possa interagir com as funcionalidades da To-Do List.**

## ⚠️ Observações

- **Sem Persistência**: Não há persistência das tarefas em um banco de dados; todas as operações ocorrem em tempo real no array `tarefas`.
- **Interação via Prompt**: A interação é feita exclusivamente por meio de prompts, alerts e confirmações, proporcionando uma forma simplificada de testar a lógica de manipulação de dados.

## 🤝 Contribuição

Este projeto foi desenvolvido pelos participantes mencionados. Sugestões e feedbacks são bem-vindos para aprimorar a aplicação.
