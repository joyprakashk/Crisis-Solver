import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import Providers from './Provider.tsx';
 
// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>

    <App />
    </Providers>
  </StrictMode>
);
