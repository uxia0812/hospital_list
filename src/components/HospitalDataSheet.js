import React, { useState, useMemo } from 'react';
import HospitalRow from './HospitalRow';
import HospitalDetail from './HospitalDetail';
import SearchBar from './SearchBar';
import TagFilter from './TagFilter';
import hospitalData from '../data/hospitalData';

const HospitalDataSheet = () => {
  const [activeHospitalId, setActiveHospitalId] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  // 모든 태그 추출
  const allTags = useMemo(() => {
    const tagSet = new Set();
    hospitalData.forEach(hospital => {
      hospital.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // 필터링된 데이터
  const filteredData = useMemo(() => {
    return hospitalData.filter(hospital => {
      const matchesFilter = 
        hospital.name.toLowerCase().includes(filterText.toLowerCase()) ||
        hospital.address.toLowerCase().includes(filterText.toLowerCase()) ||
        hospital.doctor.toLowerCase().includes(filterText.toLowerCase()) ||
        hospital.tags.some(tag => tag.toLowerCase().includes(filterText.toLowerCase()));
      
      if (activeTag === "all") {
        return matchesFilter;
      } else {
        return matchesFilter && hospital.tags.includes(activeTag);
      }
    });
  }, [hospitalData, filterText, activeTag]);

  // 아코디언 토글 함수
  const toggleAccordion = (id) => {
    setActiveHospitalId(activeHospitalId === id ? null : id);
  };

  return (
    <div className="p-3 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-3 text-center text-indigo-700">병원 정보 시트</h1>

      {/* 검색창 */}
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />

      {/* 태그 필터 */}
      <TagFilter tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />

      {/* 병원 목록 테이블 */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 table-compact">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">병원명</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주소</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">태그</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">대표원장</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">운영시간</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map(hospital => (
              <React.Fragment key={hospital.id}>
                <HospitalRow 
                  hospital={hospital} 
                  isExpanded={activeHospitalId === hospital.id}
                  onToggle={() => toggleAccordion(hospital.id)} 
                />
                {activeHospitalId === hospital.id && (
                  <tr className="bg-gray-50">
                    <td colSpan={6} className="px-3 py-3">
                      <HospitalDetail hospital={hospital} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        총 {filteredData.length}개 병원 (전체 {hospitalData.length}개 중)
      </div>
    </div>
  );
};

export default HospitalDataSheet;