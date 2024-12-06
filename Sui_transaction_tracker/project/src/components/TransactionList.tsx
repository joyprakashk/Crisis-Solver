import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { TransactionStatus } from './TransactionStatus';
import { truncateAddress, formatSuiAmount } from '../utils/format';
import type { Transaction } from '../types/transaction';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  if (!transactions.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No transactions found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TransactionStatus status={tx.status} />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  From: {truncateAddress(tx.sender)}
                </p>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-500">
                    To: {truncateAddress(tx.recipient)}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {formatSuiAmount(tx.amount)}
              </p>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(tx.timestamp, { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}