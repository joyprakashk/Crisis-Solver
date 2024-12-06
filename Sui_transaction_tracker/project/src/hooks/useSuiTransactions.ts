import { useEffect, useState } from 'react';
import type { Transaction } from '../types/transaction';
import { suiClient } from '../utils/sui-client';
import { isValidSuiAddress } from '../utils/validation';
import { resolveSuiDomain } from '../utils/sui-name';
import { SuiTransactionBlockResponse } from '@mysten/sui.js/client';

export function useSuiTransactions(input: string) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resolvedAddress, setResolvedAddress] = useState<string | null>(null);

  useEffect(() => {
    async function resolveAndFetch() {
      if (!input) {
        setTransactions([]);
        setResolvedAddress(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // First resolve the domain if needed
        const address = await resolveSuiDomain(input);
        
        if (!address) {
          setError('Invalid domain name or address');
          setTransactions([]);
          return;
        }

        setResolvedAddress(address);

        if (!isValidSuiAddress(address)) {
          setError('Invalid Sui address format');
          setTransactions([]);
          return;
        }

        const response = await suiClient.queryTransactionBlocks({
          filter: {
            FromAddress: address
          },
          options: {
            showInput: true,
            showEffects: true,
            showEvents: true,
            showBalanceChanges: true
          },
          limit: 50
        });

        const formattedTxs: Transaction[] = response.data.map((tx: SuiTransactionBlockResponse) => {
          const suiTransfer = tx.balanceChanges?.find(change => 
            change.coinType === '0x2::sui::SUI' && BigInt(change.amount) < 0
          );

          return {
            id: tx.digest,
            sender: tx.transaction?.data?.sender || 'Unknown',
            recipient: tx.effects?.events?.[0]?.receiver || 'Unknown',
            amount: suiTransfer ? (-BigInt(suiTransfer.amount)).toString() : '0',
            timestamp: Number(tx.timestampMs) || Date.now(),
            status: tx.effects?.status?.status === 'success' ? 'success' : 'failed'
          };
        });

        setTransactions(formattedTxs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch transactions');
      } finally {
        setLoading(false);
      }
    }

    resolveAndFetch();
  }, [input]);

  return { transactions, loading, error, resolvedAddress };
}