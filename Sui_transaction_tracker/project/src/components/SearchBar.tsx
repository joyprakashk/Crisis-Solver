import React from 'react';
import { Search } from 'lucide-react';
import { isValidSuiAddress } from '../utils/validation';

interface SearchBarProps {
  address: string;
  onAddressChange: (address: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function SearchBar({ address, onAddressChange, onSubmit }: SearchBarProps) {
  const isValid = address === '' || isValidSuiAddress(address) || address.includes('.sui') || address.match(/^[a-zA-Z0-9-]+$/);

  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            placeholder="Enter Sui address (0x...) or domain name..."
            className={`w-full px-4 py-2 rounded-lg border ${
              isValid ? 'border-gray-300' : 'border-red-500'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {!isValid && (
            <p className="mt-1 text-sm text-red-500">
              Please enter a valid Sui address or domain name
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid || !address}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}