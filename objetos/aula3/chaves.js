const cliente = {
    nome: "Vitoria",
    idade: 16,
    email: "vitoria@firma.com",
    telefone: ["4255555444", "42999885544"],
};
/*
cliente.endereco = [
{
    rua: "R. Dr. Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",
},
];
*/

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")){
    console.log("Erro. É necessário ter um endereço cadastrado.");
}