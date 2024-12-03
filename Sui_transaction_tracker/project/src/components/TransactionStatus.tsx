import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import type { Transaction } from '../types/transaction';

const statusIcons = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  failed: <XCircle className="w-5 h-5 text-red-500" />,
  pending: <Clock className="w-5 h-5 text-yellow-500" />
};

interface TransactionStatusProps {
  status: Transaction['status'];
}

export function TransactionStatus({ status }: TransactionStatusProps) {
  return <div className="flex-shrink-0">{statusIcons[status]}</div>;
}