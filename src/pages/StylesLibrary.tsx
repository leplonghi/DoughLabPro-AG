import React, { useState, useMemo } from 'react';
import { getAllStyles } from '../data/styles';
import { DoughStyle, Category, Region } from '../types/dough';
import { Filter, Droplet, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StylesLibrary: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const navigate = useNavigate();

  const styles = useMemo(() => getAllStyles(), []);

  const filteredStyles = useMemo(() => {
    if (activeFilter === 'All') return styles;
    return styles.filter(s => 
      s.category === activeFilter || 
      s.region === activeFilter || 
      s.tags.includes(activeFilter)
    );
  }, [styles, activeFilter]);

  const filters = ['All', 'Pizza', 'Bread', 'Italy', 'High Heat'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Global Dough Atlas</h1>
          <p className="text-slate-500">Explore scientifically validated formulas from around the world.</p>
        </div>

        {/* Smart Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === filter 
                ? 'bg-slate-900 text-white shadow-lg transform scale-105' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStyles.map(style => (
            <div 
              key={style.id} 
              onClick={() => navigate(`/styles/${style.id}`)}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-slate-100 hover:border-slate-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-md tracking-wider">
                  {style.region}
                </span>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                  style.specs.difficulty === 'Expert' ? 'bg-red-100 text-red-700' :
                  style.specs.difficulty === 'Hard' ? 'bg-orange-100 text-orange-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {style.specs.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {style.name}
              </h3>
              
              <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                {style.description}
              </p>

              <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-blue-500" />
                  {style.specs.hydration.ideal}%
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400" />
                  {style.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStyles.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No styles found for this filter.
          </div>
        )}

      </div>
    </div>
  );
};

export default StylesLibrary;
