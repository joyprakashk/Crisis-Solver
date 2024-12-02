import { connectToWallet } from './services';

const handleWalletConnect = async () => {
  try {
    const wallet = await connectToWallet();
    console.log('Wallet connected:', wallet);
  } catch (error) {
    console.error('Wallet connection failed:', error);
  }
};

return <button onClick={handleWalletConnect}>Connect Wallet</button>;
