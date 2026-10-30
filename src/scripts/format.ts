export const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');
export const p90 = (n: number) => Math.round(n / 100) * 100 - 10;
