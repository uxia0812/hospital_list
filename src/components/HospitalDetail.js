import React from 'react';

const HospitalDetail = ({ hospital }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* 병원 소개 섹션 */}
      <div className="bg-white p-3 rounded shadow-sm">
        <h3 className="text-base font-semibold text-indigo-600 mb-2">병원 소개</h3>
        {hospital.intro.title && (
          <div className="mb-2">
            <h4 className="text-s font-medium text-gray-700 mb-1">{hospital.intro.title}</h4>
          </div>
        )}
        {hospital.intro.conclusion && (
          <div>
            <p className="text-xs text-gray-600 whitespace-pre-line">{hospital.intro.conclusion}</p>
          </div>
        )}
      </div>
      
      {/* AI 인사이트 섹션 */}
      <div className="bg-white p-3 rounded shadow-sm">
        <h3 className="text-base font-semibold text-indigo-600 mb-2">AI 인사이트</h3>
        <div>
          {hospital.aiInsight.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-xs text-gray-600 mb-2">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;