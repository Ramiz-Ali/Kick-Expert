import React, { useState } from 'react';
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

type Question = {
  id: number;
  text: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  correctPercentage: number;
  averageTime: string;
};

const QuestionBank = () => {
  // Sample questions data
  const initialQuestions: Question[] = [
    {
      id: 1,
      text: 'Who was the top scorer in the 2000 Premier League season?',
      category: 'History',
      difficulty: 'Easy',
      correctPercentage: 66.6,
      averageTime: '7.9s',
    },
    {
      id: 2,
      text: 'Who was the top scorer in the 2001 Premier League season?',
      category: 'Statistics',
      difficulty: 'Medium',
      correctPercentage: 71.2,
      averageTime: '9.5s',
    },
    {
      id: 3,
      text: 'Which team won the Champions League in 2005?',
      category: 'History',
      difficulty: 'Medium',
      correctPercentage: 58.3,
      averageTime: '12.1s',
    },
    {
      id: 4,
      text: 'Who holds the record for most goals in a single Premier League season?',
      category: 'Records',
      difficulty: 'Hard',
      correctPercentage: 42.7,
      averageTime: '15.3s',
    },
  ];

  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Question>>({});

  // Get unique categories for filter dropdown
  const categories = ['All', ...new Set(questions.map(q => q.category))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  // Filter questions based on search and filters
  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || question.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || question.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Handle edit start
  const handleEditStart = (question: Question) => {
    setEditingId(question.id);
    setEditForm({ ...question });
  };

  // Handle edit save
  const handleEditSave = () => {
    if (editingId) {
      setQuestions(questions.map(q => 
        q.id === editingId ? { ...q, ...editForm } as Question : q
      ));
      setEditingId(null);
    }
  };

  // Handle edit cancel
  const handleEditCancel = () => {
    setEditingId(null);
  };

  // Handle delete
  const handleDelete = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  // Handle add new question
  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: Math.max(...questions.map(q => q.id)) + 1,
      text: 'New question (click to edit)',
      category: 'General',
      difficulty: 'Easy',
      correctPercentage: 0,
      averageTime: '0s',
    };
    setQuestions([...questions, newQuestion]);
    setEditingId(newQuestion.id);
    setEditForm({ ...newQuestion });
  };

  // Handle input change for edit form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: name === 'correctPercentage' ? parseFloat(value) : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Question Bank</h1>
            <button 
              onClick={handleAddQuestion}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md"
            >
              <FiPlus className="text-lg" />
              Add Question
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex border-b">
              <button className="px-6 py-3 font-medium text-indigo-600 border-b-2 border-indigo-600">
                Competition Questions
              </button>
              <button className="px-6 py-3 font-medium text-gray-500 hover:text-gray-700">
                Free Quiz Questions
              </button>
            </div>

            {/* Search and Filters */}
            <div className="p-4 border-b">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative md:col-span-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search questions..."
                    className="pl-10 w-full p-2 bg-gray-50 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="p-2 bg-gray-50 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <select
                  className="p-2 bg-gray-50 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'All' ? 'All Difficulties' : difficulty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Questions Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question Text</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correct %</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredQuestions.length > 0 ? (
                    filteredQuestions.map(question => (
                      <tr key={question.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {editingId === question.id ? (
                            <input
                              type="text"
                              name="text"
                              value={editForm.text || ''}
                              onChange={handleInputChange}
                              className="w-full p-1 border rounded"
                            />
                          ) : (
                            question.text
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === question.id ? (
                            <input
                              type="text"
                              name="category"
                              value={editForm.category || ''}
                              onChange={handleInputChange}
                              className="w-full p-1 border rounded"
                            />
                          ) : (
                            question.category
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === question.id ? (
                            <select
                              name="difficulty"
                              value={editForm.difficulty || ''}
                              onChange={handleInputChange}
                              className="w-full p-1 border rounded"
                            >
                              <option value="Easy">Easy</option>
                              <option value="Medium">Medium</option>
                              <option value="Hard">Hard</option>
                            </select>
                          ) : (
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                              question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {question.difficulty}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === question.id ? (
                            <input
                              type="number"
                              name="correctPercentage"
                              value={editForm.correctPercentage || ''}
                              onChange={handleInputChange}
                              className="w-full p-1 border rounded"
                              step="0.1"
                              min="0"
                              max="100"
                            />
                          ) : (
                            `${question.correctPercentage}%`
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === question.id ? (
                            <input
                              type="text"
                              name="averageTime"
                              value={editForm.averageTime || ''}
                              onChange={handleInputChange}
                              className="w-full p-1 border rounded"
                            />
                          ) : (
                            question.averageTime
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingId === question.id ? (
                            <div className="flex space-x-2">
                              <button 
                                onClick={handleEditSave}
                                className="text-green-600 hover:text-green-800"
                                title="Save"
                              >
                                <FiCheck />
                              </button>
                              <button 
                                onClick={handleEditCancel}
                                className="text-red-600 hover:text-red-800"
                                title="Cancel"
                              >
                                <FiX />
                              </button>
                            </div>
                          ) : (
                            <div className="flex space-x-2">
                              <button 
                                onClick={() => handleEditStart(question)}
                                className="text-indigo-600 hover:text-indigo-800"
                                title="Edit"
                              >
                                <FiEdit2 />
                              </button>
                              <button 
                                onClick={() => handleDelete(question.id)}
                                className="text-red-600 hover:text-red-800"
                                title="Delete"
                              >
                                <FiTrash2 />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No questions found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;