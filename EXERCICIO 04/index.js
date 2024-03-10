const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    
    depositar: function(valor) {
        this.saldo += valor;
        this.historicos.push(`Depósito de R$${valor}`);
        return `Depósito de R$${valor} realizado para o cliente: ${this.nome}`;
    },

    sacar: function(valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        }
        this.saldo -= valor;
        this.historicos.push(`Saque de R$${valor}`);
        return `Saque de R$${valor} realizado para o cliente: ${this.nome}`;
    },

    extrato: function() {
        let extrato = `Extrato de ${this.nome} - Saldo: R$${this.saldo}\nHistórico:\n`;
        extrato += this.historicos.join('\n');
        return extrato;
    }
};


console.log(contaBancaria.depositar(100));
console.log(contaBancaria.sacar(50)); 
console.log(contaBancaria.extrato()); 
