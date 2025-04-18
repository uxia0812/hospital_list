import React from 'react';

const TagFilter = ({ tags, activeTag, onTagChange }) => {
  return (
    <div className="mb-4 overflow-x-auto">
      <div className="flex flex-wrap gap-1">
        <button
          className={`filter-tag-compact rounded-lg whitespace-nowrap ${
            activeTag === "all" ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onTagChange("all")}
        >
          전체
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            className={`filter-tag-compact rounded-lg whitespace-nowrap ${
              activeTag === tag ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => onTagChange(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;