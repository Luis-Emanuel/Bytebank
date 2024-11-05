export class Armazenador {
  private constructor() { }

  static salvar(chave: string, value: any): void {
    const valorConmoString = JSON.stringify(value);
    localStorage.setItem(chave, valorConmoString)
  }

  static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
    const valor = localStorage.getItem(chave);
    if (valor === null) {
      return null;
    }

    if (reviver) {
      return JSON.parse(valor, reviver) as T
    }

    return JSON.parse(valor) as T
  }
} 