const cliente = {
    nome: "Vitória",
    idade: 16,
    email: "vitoria@firma.com",
    telefone: ["4255555444", "42999885544"],
    saldo: 200,
    efetuarPagamento: funcition (valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`)
        }
    } 
};

cliente.efetuarPagamento(250);