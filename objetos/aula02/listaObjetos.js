const cliente = {
    nome: "Xaxá",
    idade: 45,
    email: "xaxa@firma.com",
    telefone: ["4255555444", "42999885544"],
};

cliente.endereco = [
{
    rua: "R. Dr. Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",
},
];

cliente.endereco.push({
    rua: "R. XV de novembro",
    numero: 350,
    apartamento: false,
});

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos);