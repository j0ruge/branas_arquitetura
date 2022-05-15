# branas_arquitetura

## Aula 1, Code Smell e Refactoring

Dado um código a ser estudado, criamos em primeira instância um teste, com intuito de estressa-lo. 


* O teste é a maior documentação que existe, não existe nada melhor em documentação do que o teste.
* teste de ser **FIRST**

 - **F**ast
 - **I**ndependent
 - **R**epeatable
 - **S**elf-validating
 - **T**imely


 Em testes, você vera que a cobertura funciona de maneira exponecial, é fácil sair de 0% para 30% por exemplo, mas de 83% para 84% começa a ficar muito difícil. 

 Após os teste realizados, além da já termos o código documentado, temos ele testado e agora sabemos como ele deve funcinar, agora temos base para fazer um bom refatoramento. 

 Entretanto 100% de cobertura, não garante 100% de acertividade.

 ### Code Smells

 #### 1- Nomes Estranhos

 dist, ds, calc, movArray, mov, result

Técnina básica, RENOMEAR

renomear variáveis
renomear métodos
renomear classes
renomear arquivos
renomear pastas

#### 2 - Números mágicos

3.90, 2.90, 2.1, 0, 10, -1, -2, 22, 6

Técnina básica, EXTRAIR

extrair constantes
extrair variáveis explicativas


#### 3 - Comentários

renomear
extrair método
extrair variável explicativa

#### 4 - código morto
apagar

#### 5 - linhas em branco

remover linhas em branco

#### 6 - Condições confusas

extrair condição
remover condições aninhadas por cláusula guarda
consolidar condições (50:03 min)
intruduzir ternário.

#### 7 - falta de tratamento de exceptions 


* Substituir códigode erro por exception (51:48 m)

Remover os ```return -1``` e ```return -2``` do código por ```thorw new Error()```

* Incorporar informações de tratamento. 

Dentro dos ```thorw new Error()```, informar sobre o que se trata o erro, alterando para ```throw new Error('Invalid Distance')``` e ```throw new Error('Invalid Date')```.

#### 8 - Método longo


#### 9 - "Classe grande"


#### 10 - Quebrando o OCP (Open/Close Principle)


#### 11 - Inveja de dados

mover métodos 
ocultar delegações


47:53