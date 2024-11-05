export function ValidaDebito(target, properKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw Error("O valor a ser debitado precisa ser maior do que zero!");
        }
        if (valorDoDebito > this.saldo) {
            throw Error("Seu saldo é insuficiente para realizar a operação!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaDeposito(target, properKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw Error("O valor a ser depositado deve ser maior do que zero!");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
