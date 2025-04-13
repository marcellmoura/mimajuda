# Modelo Lógico – Sistema MimAjuda

Este documento descreve a estrutura lógica das tabelas do banco de dados do sistema MimAjuda. As tabelas foram definidas com base no modelo conceitual previamente elaborado.

```sql
-- Tabela: USUARIO
-- Armazena os dados dos usuários do sistema.

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- ------------------------------------------------------------

-- Tabela: CATEGORIA
-- Representa as categorias personalizadas que o usuário utiliza para organizar suas transações.
-- Cada categoria pode ser do tipo "receita" ou "despesa".

CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    tipo ENUM('receita', 'despesa') NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- ------------------------------------------------------------

-- Tabela: TRANSACAO
-- Armazena os lançamentos financeiros (receitas ou despesas) realizados pelos usuários,
-- sempre associados a uma categoria e a um usuário.

CREATE TABLE transacao (
    id_transacao INT PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255),
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);
