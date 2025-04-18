import React from 'react';

const HospitalRow = ({ hospital, isExpanded, onToggle }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-3 py-2 whitespace-nowrap text-gray-500 text-xs">{hospital.id}</td>
      <td className="px-3 py-2">
        <button 
          className="text-black hover:text-indigo-800 font-medium flex items-center text-s" 
          onClick={onToggle}
        >
          {hospital.name}
          <span className="ml-2 text-indigo-600">{isExpanded ? '▼' : '▶'}</span>
        </button>
      </td>
      <td className="px-3 py-2 text-gray-500 text-xs">{hospital.address}</td>
      <td className="px-3 py-2">
        <div className="flex flex-wrap gap-1 text-xs">
          {hospital.tags.map(tag => (
            <span 
              key={`${hospital.id}-${tag}`} 
              className="tag-compact rounded-full bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="px-3 py-2 whitespace-nowrap text-gray-900 text-xs">{hospital.doctor}</td>
      <td className="px-3 py-2 text-gray-500 text-xs">{hospital.operatingHours}</td>
    </tr>
  );
};

export default HospitalRow;