'use client';

import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface Competition {
  league: string;
  time: string;
  entryFee: string;
  players: number;
  status: 'Running' | 'Finished' | 'Scheduled';
}

export default function Competitions() {
  const [competitions, setCompetitions] = useState<Competition[]>([
    { league: 'Elite', time: '2025-06-08 17:00', entryFee: '$50', players: 45, status: 'Running' },
    { league: 'Pro', time: '2025-06-08 16:00', entryFee: '$10', players: 150, status: 'Finished' },
    { league: 'Starter', time: '2025-06-08 18:00', entryFee: '$2', players: 8, status: 'Scheduled' },
    { league: 'Elite', time: '2025-06-09 17:00', entryFee: '$50', players: 0, status: 'Scheduled' },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCompetition, setNewCompetition] = useState<Omit<Competition, 'status'>>({ 
    league: '', 
    time: '', 
    entryFee: '', 
    players: 0 
  });

  const handleCreateCompetition = () => {
    setCompetitions([...competitions, { ...newCompetition, status: 'Scheduled' }]);
    setNewCompetition({ league: '', time: '', entryFee: '', players: 0 });
    setShowCreateModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running': return 'bg-lime-100 text-lime-800';
      case 'Finished': return 'bg-gray-100 text-gray-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Competitions Management</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <PlusCircle size={18} />
          Create Competition
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">League</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entry Fee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Players</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {competitions.map((comp, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{comp.league}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comp.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comp.entryFee}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comp.players}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(comp.status)}`}>
                    {comp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Competition Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-lg">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Competition</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">League</label>
                <input
                  type="text"
                  value={newCompetition.league}
                  onChange={(e) => setNewCompetition({...newCompetition, league: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder="Enter league name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="datetime-local"
                  value={newCompetition.time}
                  onChange={(e) => setNewCompetition({...newCompetition, time: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Entry Fee</label>
                <input
                  type="text"
                  value={newCompetition.entryFee}
                  onChange={(e) => setNewCompetition({...newCompetition, entryFee: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder="e.g. $10"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCompetition}
                className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-md"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}