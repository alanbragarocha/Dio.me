import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitando e capturando os dados da conta
        System.out.print("Digite o número da conta: ");
        int numero = scanner.nextInt();
        scanner.nextLine(); // Consumir a quebra de linha pendente

        System.out.print("Digite a agência: ");
        String agencia = scanner.nextLine();

        System.out.print("Digite o nome do titular: ");
        String titular = scanner.nextLine();

        // Verificando se os dados são válidos
        if (numero == 1021 && titular.equals("João") && agencia.equals("067-8")) {
            System.out.println("\n✅ Conta válida");
        } else {
            System.out.println("\n❌ Conta inválida");
        }

        scanner.close(); // Fechar o scanner para evitar vazamento de memória
    }
}
