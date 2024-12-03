export interface Transaction {
  id: string;
  sender: string;
  recipient: string;
  amount: string;
  timestamp: number;
  status: 'success' | 'pending' | 'failed';
}