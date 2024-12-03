export function isValidSuiAddress(address: string): boolean {
  // Sui addresses are 32 bytes (64 characters) hex strings starting with '0x'
  return /^0x[a-fA-F0-9]{64}$/.test(address);
}