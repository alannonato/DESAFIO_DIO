// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // facilita a comparação
    }

    atacar() {
        let ataque;

        // Definindo o ataque conforme o tipo
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando heróis de exemplo
const heroi1 = new Heroi("Gandalf", 100, "mago");
const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
const heroi3 = new Heroi("Lee", 30, "monge");
const heroi4 = new Heroi("Hattori", 25, "ninja");

// Heróis atacam
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
