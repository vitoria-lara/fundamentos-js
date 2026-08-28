const cliente = {
    nome: "Vitoria",
    idade : 16,
    cpf: "1122233345",
    email: "vitoria@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos. `);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach ((chave) => {
    console.log(`A chave ${chave} te valor ${cliente[chave]}`);

});