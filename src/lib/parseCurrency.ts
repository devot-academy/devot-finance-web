
export function parseCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    const formattedValue = formatter.format(Math.abs(value));
    const sign = value >= 0 ? '+' : '-';
    return `${sign} ${formattedValue}`;
}   