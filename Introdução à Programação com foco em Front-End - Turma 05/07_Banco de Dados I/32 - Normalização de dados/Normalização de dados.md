## Normalização de dados

### Instruções do projeto

A normalização de dados é um processo realizado nas tabelas para evitar anomalias. Com base no conteúdo visto no Hipertexto 3, transforme a tabela em anexo na Primeira Forma Normal (1FN).

![imagem](imagem01.png)

### Tabela normalizada 1FN:

Para atender à Primeira Forma Normal (1FN), é essencial garantir que cada coluna tenha valores atômicos, ou seja, sem múltiplos valores em uma única célula. Neste contexto, o campo "TELEFONE" possui múltiplos números para alguns registros, requerendo a divisão desses registros para que cada um contenha apenas um número de telefone.

#### Resultado da normalização:

| IDENTIFICADOR |   NOME   |   TELEFONE    |                ENDEREÇO                |               EMAIL                |
|---------------|----------|---------------|----------------------------------------|------------------------------------|
|       01      | Reinaldo | 68 0945-8723  | Rua 10, 34 São Paulo SP 12345-000 Brasil |  reinaldo000@gmail.com             |
|       01      | Reinaldo | 68 8734-2343  | Rua 10, 34 São Paulo SP 12345-000 Brasil |  reinaldo@outlook.com              |
|       01      | Reinaldo | 68 2143-5469  | Rua 10, 34 São Paulo SP 12345-000 Brasil |  reinaldo@outlook.com              |
|       02      |  Nestor  | 92 5400-0043  | Avenida Bela, 45 Paulo Afonso BA 00034 Brasil |  nestor123@gmail.com              |
|       03      |  Raquel  | 87 4300-0000  | Rua Cardoso, 100 Salvador BA 22222 Brasil  |  raquel@outlook.com               |
|       04      |   Tati   | 41 5400-1232  | Bairro Canoa, 002 Rio de Janeiro RJ 34251 Brasil |  tati000@gmail.com               |
|       04      |   Tati   | 41 4345-5555  | Bairro Canoa, 002 Rio de Janeiro RJ 34251 Brasil |  tati@outlook.com                |
|       05      |   Lia    | 98 1234-5678  | Rua 50, 41 Maceió AL 32450 Brasil        |  lia@outlook.com                  |
|       06      |   Paty   | 71 2123-2425  | Rua 01, -500 Pinheiros SP -90000 Brasil |  paty@outlook.com                 |

