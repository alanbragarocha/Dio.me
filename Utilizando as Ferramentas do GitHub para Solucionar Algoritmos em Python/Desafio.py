# 1 - Concatenando Dados 🐾
print("=" * 50)
print("1 - CONCATENANDO DADOS")
print("=" * 50)

dado1 = input("Digite o primeiro dado: ")
dado2 = input("Digite o segundo dado: ")
resultado = dado1 + dado2
print(f"Resultado da concatenação: {resultado}")
print()

# 2 - Repetindo Textos ✏️
print("=" * 50)
print("2 - REPETINDO TEXTOS")
print("=" * 50)

texto = input("Digite um texto: ")
vezes = int(input("Digite quantas vezes quer repetir: "))
resultado = texto * vezes
print(f"Resultado: {resultado}")
print()

# 3 - Operações Matemáticas Simples 📐
print("=" * 50)
print("3 - OPERAÇÕES MATEMÁTICAS SIMPLES")
print("=" * 50)

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

print(f"Soma: {num1 + num2}")
print(f"Subtração: {num1 - num2}")
print(f"Multiplicação: {num1 * num2}")
print(f"Divisão: {num1 / num2 if num2 != 0 else 'Impossível dividir por zero'}")
print()

# 4 - Verificando Números Pares e Ímpares 🧮
print("=" * 50)
print("4 - VERIFICANDO NÚMEROS PARES E ÍMPARES")
print("=" * 50)

numero = int(input("Digite um número inteiro: "))

if numero % 2 == 0:
    print(f"O número {numero} é PAR")
else:
    print(f"O número {numero} é ÍMPAR")
print()

# 5 - Calculando Média de Notas 📚
print("=" * 50)
print("5 - CALCULANDO MÉDIA DE NOTAS")
print("=" * 50)

nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))

media = (nota1 + nota2 + nota3) / 3
print(f"A média das notas é: {media:.2f}")
print()

# 6 - Verificando Palíndromos 🔄
print("=" * 50)
print("6 - VERIFICANDO PALÍNDROMOS")
print("=" * 50)

palavra = input("Digite uma palavra: ").lower().replace(" ", "")
palavra_invertida = palavra[::-1]

if palavra == palavra_invertida:
    print(f"'{palavra}' é um PALÍNDROMO! 🎉")
else:
    print(f"'{palavra}' NÃO é um palíndromo.")
