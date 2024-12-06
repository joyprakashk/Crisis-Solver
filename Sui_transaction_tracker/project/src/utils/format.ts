export function truncateAddress(address: string): string {
  if (!address) return 'Unknown';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatSuiAmount(amount: string): string {
  const num = parseFloat(amount);
  if (isNaN(num)) return '0 SUI';
  return `${num.toLocaleString()} SUI`;
}