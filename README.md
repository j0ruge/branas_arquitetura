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


#### 11 - Inveja de dados (1:06 h)


* Mover métodos 

Existem muitas referencias, neste caso de exemplo a segments, então vamos moves estes métodos para dentro da Classe Segments tirando de Rides. 

* Ocultar delegações



#### 12 - Longa lista de parâmetros (1:10 h)

Quanto menos parâmetros melhor

* Intruduzir abstrações
* Intruduzer Objetos parâmetro



#Definições Interessantes

## CONSTRUTORES

O construtor serve para mediar a contrução do objeto e não permitir que ele seja inválido. 

## PARÂMETROS

Quantos parâmetos são o ideal? R: Quanto menos parâmetros melhor


## FACTORY


## CHAIN OF RESPONSABILITY

Lembra um pipeline.

# SOLID

## OCP

Estou aberto para extenção, fechado para modifiação.

## DIP (SOLID)
Externalizando a dependêcia e fazendo com que um módulo não dependa do outro, assim tendo uma testabilidade maior. 


## Aula 2, Code Smell e Refactoring

0 - O primeiro passo para sair do lugar e criar o teste.
1 - nomes estranhos
Renomear variável
2 - linhas em branco. 
apagar linhas em branco.
3- comentários
apagar comentários
4- condições aninhadas ou confusas
* remover condição aninhada por cláusula guarda, 
 cláusula guarda,  Se dá invertendo as condições e abortar o fluxo de execução o mais cedo possível, se for null SAI. 
* Intruduzir ternário. 

true para thuthy, false para falsy
false, '', undefined, null, 0, NaN => falsy, todo o resto é thuthy


Já podemos afirmar que o código está com um controle melhor, pelo simples fato dele estar mais perto da margem, menos aninhamentos. 

Quando vamos implementar um código que temos medo, colocamos ele em volta de um try, catch

5- uso indequado de controle de exceptions (ex.: try, catch )

* remover o try/catch inadequado. 

6- Identação errada

* Corrigir identação.

Declarar separado de inicializar é um code smell


7- Método grande (e fazendo muita coisa, com muita responsabilidade)
* Extrair método.

8- Algoritmo complexo.
Quando a forma utilizada para resolução do problema, não ter sido muito feliz.
* Reescrever algotitmo

26:57 m do segundo video de refatoração