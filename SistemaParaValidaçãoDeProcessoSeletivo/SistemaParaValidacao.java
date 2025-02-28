public class SistemaParaValidacao {
    public static void main(String[] args) {
        // Definição de uma classe local dentro do método main
        class ValidarCandidato {
            String nome;
            int idade;
            int salario;

            // Construtor da classe
            public ValidarCandidato(String nome, int idade, int salario) {
                this.nome = nome;
                this.idade = idade;
                this.salario = salario;
            }
        }
        
        // Instanciamento da classe local
        ValidarCandidato candidato = new ValidarCandidato("João", 30, 5000);
        
        // Utilizando o atributo 'salario' do objeto 'candidato'
        if (candidato.salario > 5000 && candidato.idade > 25) {
            System.out.println("Salário acima do esperado.");
        } else {
            System.out.println("Salário dentro do esperado.");
        }
        
        System.out.println("Nome: " + candidato.nome);
    }
}
