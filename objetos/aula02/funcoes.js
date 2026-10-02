const cliente = {
    nome: "Xaxá",
    idade: 44,
    email: "xaxa@firma.com",
    telefone: ["4255555444", "42999885544"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(25);

cliente.efetuarPagamento(250);