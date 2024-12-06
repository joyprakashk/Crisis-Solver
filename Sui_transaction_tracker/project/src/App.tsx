import React, { useState } from 'react';
import { useSuiTransactions } from './hooks/useSuiTransactions';
import { SearchBar } from './components/SearchBar';
import { TransactionList } from './components/TransactionList';

function App() {
  const [input, setInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const { transactions, loading, error, resolvedAddress } = useSuiTransactions(searchInput);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchInput(input);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Sui Transaction Tracker
        </h1>

        <SearchBar
          address={input}
          onAddressChange={setInput}
          onSubmit={handleSubmit}
        />

        {resolvedAddress && input.includes('.sui') && (
          <div className="bg-blue-50 text-blue-700 p-4 rounded-lg mb-6">
            Resolved address: {resolvedAddress}
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading transactions...</p>
          </div>
        ) : (
          <TransactionList transactions={transactions} />
        )}
      </div>
    </div>
  );
}

export default App;