import { suiClient } from './sui-client';

export async function resolveSuiDomain(input: string): Promise<string | null> {
  try {
    // If it's already an address, return it
    if (input.startsWith('0x')) {
      return input;
    }

    // Ensure the input ends with .sui
    const domain = input.endsWith('.sui') ? input : `${input}.sui`;

    // Query the Sui Name Service
    const response = await suiClient.resolveNameServiceAddress({
      name: domain
    });

    return response || null;
  } catch (error) {
    console.error('Error resolving SUI domain:', error);
    return null;
  }
}