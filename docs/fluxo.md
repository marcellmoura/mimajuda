# Fluxo do Sistema – MimAjuda

Este documento descreve a sequência de telas e interações principais no sistema MimAjuda, seguindo a lógica de navegação do usuário final.

---

## Visão Geral

O sistema é composto por telas acessíveis por meio da barra lateral, com exceção da tela de login, que antecede o acesso autenticado.

---

## 1. Tela de Login

Acesso inicial do sistema.

- O usuário informa e-mail e senha.
- Ao confirmar o login com sucesso, é redirecionado para o Dashboard.

---

## 2. Dashboard

Visão geral do saldo e transações recentes.

- Mostra três cards:
  - Saldo atual
  - Total de receitas
  - Total de despesas
- Tabela com últimas transações
- Botão "Nova Transação" exibe o formulário no lugar da tabela

---

## 3. Formulário de Nova Transação

Exibe-se no lugar da tabela ao clicar em "Nova Transação".

- Campos: data, descrição, categoria, tipo (receita/despesa), valor
- Botões: Cancelar e Salvar
- Ao salvar ou cancelar, o sistema volta para a visualização da tabela

---

## 4. Tela de Transações

Histórico completo das transações.

- Filtros por tipo, categoria e intervalo de datas
- Tabela com ações (editar, excluir)
- Dados idênticos aos da tela inicial, mas com mais controle

---

## 5. Tela de Relatórios

Exibição gráfica de dados filtrados.

- Filtros por mês e ano
- Gráficos:
  - Pizza: distribuição por categoria
  - Linha: evolução ao longo do tempo

---

## 6. Tela de Perfil

Mostra os dados do usuário.

- Nome
- E-mail
- Botão: "Alterar Senha" leva à próxima tela

---

## 7. Tela de Alteração de Senha

Formulário para alteração segura.

- Campo de senha atual
- Campo de nova senha
- Campo de confirmação
- Botões: Cancelar e Salvar

---

## 8. Logout

A opção "Sair" na barra lateral encerra a sessão e retorna à tela de login.
