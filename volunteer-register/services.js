import { SuietWalletAdapter } from '@suiet/wallet-adapter';

export const connectToWallet = async () => {
  const wallet = new SuietWalletAdapter();
  await wallet.connect(); // Prompts user to connect their wallet.
  return wallet; // Returns the connected wallet instance.
};
