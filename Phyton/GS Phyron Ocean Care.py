
FinalColor, vermelho, verde, amarelo, azul, azul_claro = ('\033[m', '\033[31m', '\033[32m', '\033[33m', '\033[34m',
                                                        '\033[36m')

class emissário:
    def __init__(self, numero, estado, cidade, qualidade):
        self.numero = numero
        self.estado = estado
        self.cidade = cidade
        self.qualidade = qualidade

emissário_cadastrados = []

def cadastrar_emissário():
    numero = int(input(f"{azul}Digite o numero do emissário: {FinalColor}"))
    estado = input(f"{azul}Digite o estado do emissário: {FinalColor}")
    cidade = input(f"{azul}Digite a cidade do emissário: {FinalColor}")
    qualidade = input(f"{azul}Digite a qualidade do emissário: {FinalColor}")

    novo_emissário = emissário(numero, estado, cidade, qualidade)
    emissário_cadastrados.append(novo_emissário)
    print("Emissário cadastrado com sucesso!")

def ver_emissários_cadastrados():
    print(f"Emissários cadastrados:")
    for emissário in emissário_cadastrados:
            print(f'{azul} Numero: {amarelo}{emissário.numero}\n {azul_claro}Estado:{amarelo} {emissário.estado} \n {azul_claro}Cidade:{amarelo} {emissário.cidade}\n {azul_claro}Qualidade:{amarelo} {emissário.qualidade} \n ---------------- ')

def menu():
    while True:
        print(f'{azul}\n===== MENU ====={FinalColor}')
        print(f'{amarelo}1.{verde} Cadastrar Novo Emissário{FinalColor}')
        print(f'{amarelo}2.{verde} Ver Emissários Cadastrados{FinalColor}')
        print(f'{amarelo}3.{vermelho} Sair{FinalColor}')
        opcao = input(f'{azul_claro}Escolha uma opção: {FinalColor}')

        if opcao == "1":
            cadastrar_emissário()
        elif opcao == "2":
            ver_emissários_cadastrados()
        elif opcao == "3":
            print(f"{amarelo}Saindo do programa...{FinalColor}")
            break
        else:
            print(f"{vermelho}Opção inválida! Por favor, escolha uma opção válida.{FinalColor}")

if __name__ == "__main__":
    menu()