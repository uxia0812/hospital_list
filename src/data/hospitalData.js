// 병원 데이터
const hospitalData = [
    {
      id: 1,
      name: '공간성형외과',
      category: '',
      address: '서울 강남구 강남대로 616 (신사동, 신사미타워) 15층 공간성형외과',
      tags: ['코성형', '눈성형', '필러', '리프팅', '지방성형'],
      image: '/images/clinic_images/공간성형외과01.jpg',
      images: [
        '/images/clinic_images/공간성형외과01.jpg',
        '/images/clinic_images/공간성형외과02.svg',
        '/images/clinic_images/공간성형외과03.jpg'
      ],
      doctor: '함기원 대표원장',
      intro: { 
        title: '공간성형외과는 연령별, 증상별에 따른 1:1 맞춤으로 솔루션을 제안합니다.',
        points: [],
          conclusion: '16년간의 풍부한 임상경험을 통해 디테일이 다른 결과로 만족 드리겠습니다. 눈성형/코성형/남자성형/재수술/리프팅'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '공간성형외과의원은 코성형, 코재수술, 눈성형을 전문으로 하며 특히 입체주의 코성형과 자연스러운 눈성형이 대표 시술입니다. 수술 후 꼼꼼한 경과 체크와 사후관리를 제공합니다. 3D-CT, CCTV 등 첨단 장비를 갖추고 있습니다. 3호선 신사역 6번 출구 바로 앞 신사미타워 15층에 위치해 접근성이 좋습니다. 함기원 대표원장은 연세대 의대 출신으로 세브란스병원 성형외과 레지던트를 수료했습니다.'
        ]
      }
    },
    {
      id: 2,
      name: '더새로이의원',
      category: '',
      address: '서울 강남구 언주로 641 (논현동) 펜트힐루논현 2층',
      tags: ['지방성형', '필러', '보톡스', '피부', '리프팅', '기타'],
      image: '/images/clinic_images/더새로이의원04.jpg',
      images: [
        '/images/clinic_images/더새로이의원01.jpg',
        '/images/clinic_images/더새로이의원02.jpg',
        '/images/clinic_images/더새로이의원03.jpg',
        '/images/clinic_images/더새로이의원04.jpg',
        '/images/clinic_images/더새로이의원05.jpg',
        '/images/clinic_images/더새로이의원06.jpg',
        '/images/clinic_images/더새로이의원07.jpg',
        '/images/clinic_images/더새로이의원08.jpg',
        '/images/clinic_images/더새로이의원09.jpg',
        '/images/clinic_images/더새로이의원10.jpg'
      ],
      doctor: '신준 대표원장',
      intro: {
        title: [],
        points: [],
          conclusion: '더새로이성형외과는 서울대 동문병원이자 삼성의료원 협력병원으로서 10년 체형 성형 중점 수술 병원입니다. \n\n *인기수술 : 안면거상, 복부거상, 가슴거상, 허벅지거상, 팔뚝거상 가슴 보형물 수술, 줄기세포 가슴이식, 힙성형(힙이식), 줄기세포재생주사, 문신제거, 실리프팅 등'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-15:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '더새로이의원은 체형성형과 안티에이징을 전문으로 하는 성형외과입니다. 주요 시술로는 지방흡입, 복부성형, 엉덩이성형, 가슴지방이식 등이 있습니다. 수술 후에도 책임감 있는 관리 서비스를 제공합니다. 최신 의료장비와 무균시설을 갖추고 있습니다. 강남구 언주로에 위치해 접근성이 좋습니다. 원장은 10년 이상의 임상경험을 가진 성형외과 전문의입니다. 평일 10시-19시, 토요일 10시-15시에 운영합니다.'
        ]
      }
    },
    {
      id: 3,
      name: '그리다성형외과',
      category: '',
      address: '서울 강남구 역삼동 820-8 YBM강남센터 12층',
      tags: ['피부', '코성형', '눈성형', '안면윤곽/양악', '보톡스', '필러', '리프팅'],
      image: '/images/clinic_images/그리다04.jpg',
      images: [
        '/images/clinic_images/그리다01.jpg',
        '/images/clinic_images/그리다02.jpg',
        '/images/clinic_images/그리다03.jpg',
        '/images/clinic_images/그리다04.jpg',
        '/images/clinic_images/그리다05.jpg',
        '/images/clinic_images/그리다06.jpg',
        '/images/clinic_images/그리다07.jpg'
      ],
      doctor: '김현수 대표원장',
      intro: {
        title: '평범함을 지우다, 예쁨을 그리다. 그리다성형외과 입니다.',
        points: [],
          conclusion: '풍부한 경험의 의료진이 개인별 맞춤 진단을 통해 만족스러운 수술 결과를 제공합니다.'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-17:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '그리다성형외과의원은 눈성형, 코성형, 동안성형을 전문으로 하며, 특히 자연유착 쌍꺼풀 수술과 코성형에 강점이 있습니다. 최첨단 의료장비를 구비하고 있으며 개인 맞춤형 안전마취관리와 통증관리 시스템을 갖추고 있습니다. 강남역 11번 출구 근처에 위치해 대중교통 접근성이 좋습니다. 김현수 대표원장은 15년 경력의 성형외과 전문의로 미용성형과 재수술을 전문으로 합니다. 평일 오전 10시부터 오후 7시까지 운영하며 금요일은 오후 9시까지 연장 진료합니다.'
        ]
      }
    },
    {
      id: 4,
      name: '뉴스타의원',
      category: '',
      address: '서울 서초구 강남대로69길 8 6층',
      tags: ['필러', '보톡스', '리프팅', '피부'],
      image: '/images/clinic_images/뉴스타의원05.jpg',
      images: [
        '/images/clinic_images/뉴스타의원03.jpg',
        '/images/clinic_images/뉴스타의원04.jpg',
        '/images/clinic_images/뉴스타의원05.jpg',
        '/images/clinic_images/뉴스타의원06.jpg',
        '/images/clinic_images/뉴스타의원07.jpg',
        '/images/clinic_images/뉴스타의원08.jpg',
      ],
      doctor: '강건우 대표원장',
      intro: {
        title: '뉴스타입니다.',
        conclusion: '우리가 만족하지 못하면 고객도 만족하지 못한다고 생각하며, 믿고 선택할 수 있는 뉴스타가 될 수 있도록 집중하고 있습니다. \n \n 뉴스타를 선택하는 이유 \n 1. 정품 정량 \n 2. 1:1 맞춤형 시술을 지향하는 원장 \n 3. 합리적인 시술가 \n 4. 고객 맞춤형 서비스 \n 5. 최신장비'
      },
      operatingHours: '월-목 11:00-19:00, 금 12:00-21:00, 토 11:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '뉴스타의원은 리프팅 및 피부 관리 전문 의원으로, 라라필과 올리지오 리프팅 등 첨단 시술을 제공합니다. 각 분야 전문의들이 1:1 맞춤 시술을 진행하며, 시술 후 전담팀의 세심한 케어 서비스를 제공합니다. 최신 장비와 간접조명을 활용한 쾌적한 환경을 갖추고 있습니다. 서울 서초구 KI타워 6층에 위치하여 접근성이 좋습니다. 진료 시간은 평일 11시부터 20시까지이며, 금요일은 21시까지 야간진료를 실시합니다. 토요일은 16시까지 운영하고 일요일은 휴진입니다.'
        ]
      }
    },
    {
      id: 5,
      name: '다태나의원',
      category: '',
      address: '서울 송파구 올림픽로 108(잠실동, 맥스빌딩) 3층',
      tags: ['피부', '코성형', '보톡스', '필러', '리프팅'],
      image: '/images/clinic_images/다태나의원01.jpg',
      images: [
        '/images/clinic_images/다태나의원01.jpg',
        '/images/clinic_images/다태나의원02.jpg',
        '/images/clinic_images/다태나의원03.jpg',
        '/images/clinic_images/다태나의원04.jpg',
        '/images/clinic_images/다태나의원05.jpg',
        '/images/clinic_images/다태나의원06.jpg',
        '/images/clinic_images/다태나의원07.jpg',
        '/images/clinic_images/다태나의원08.jpg',
        '/images/clinic_images/다태나의원09.jpg'
      ],
      doctor: '강동현 대표원장',
      intro: {
        title: '콜라겐클리닉 다태나의원 오직, 다태나의원에서만!',
        conclusion: '20분 코성형, 코플란트, 채워주고 당겨주는 콜라겐 팔자 시술, 모공에 효과있는, 살결테라피, 다태나의원은 당신의 콜라겐에 집중합니다. \n 가격가성비로 잠깐의 효과를 위한 치료보다는, 콜라겐 재생을 통한 지속가능한 효과와 건강한 아름다음을 지향합니다. \n 사람에 대한 관심과 사랑을 토대로, 찾아주시는 한분한분을 소중히 여기며, 내 가족에게도 할 수 있는 시술들과 함께 동행하겠습니다. \n 꾸준한 연구와 고민을 통해 안주하지 않고 발전하는 모습을 보여드리겠습니다. \n 감사합니다.'
      },
      operatingHours: '월/화/목/금 10:00-20:00, 수 휴진, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '다태나의원은 송파구 잠실새내역 인근에 위치한 피부과로, 콜라겐 리프팅, 여드름 치료, 색소 치료 등을 전문으로 합니다. 대표 시술로는 인모드, 슈링크유니버스 등이 있습니다. 강동현 대표원장이 1:1 맞춤 진료를 제공하며, 진정성 있는 상담과 시술을 지향합니다. 최신 장비를 갖추고 있으며, 편안한 공간과 서비스를 제공합니다. 운영 시간은 월/화/목/금 10:00-20:00, 토 10:00-16:00이며, 수/일 휴진입니다. 점심시간은 14:00-15:00입니다.'
        ]
      }
    },
    {
      id: 6,
      name: '두드림성형외과',
      category: '',
      address: '서울 강남구 테헤란로 105 강남A타워 10층,11층',
      tags: ['안면윤곽/양악', '모발이식', '눈성형', '코성형', '가슴성형', '지방성형', '리프팅'],
      image: '/images/clinic_images/두드림로고.jpg',
      images: [
        '/images/clinic_images/두드림성형외과02.png',
        '/images/clinic_images/두드림성형외과04.png',
        '/images/clinic_images/두드림성형외과03.png',
        '/images/clinic_images/두드림성형외과05.png',
        '/images/clinic_images/두드림성형외과06.png',
        '/images/clinic_images/두드림성형외과07.png',
        '/images/clinic_images/두드림성형외과01.jpg'
      ],
      doctor: '임찬수 대표원장',
      intro: {
        title: '아름다운 설레임, 두드림성형외과의원',
        conclusion: '분야별 전담 의료진, 최신 장비를 통한 사후 관리 안전 우선, 만족스러운 결과를 위한 1:1 맞춤 의료서비스'
      },
      operatingHours: '월-목 10:00-19:00, 금 10:00-20:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '두드림성형외과는 강남역 12번 출구 앞에 위치한 성형외과로, 눈성형, 코성형, 안면윤곽, 가슴성형 등 다양한 시술을 제공합니다. 특히 안면윤곽술과 모발이식에 특화되어 있습니다. 수술 후 관리와 탈모 치료 프로그램을 운영하며, 첨단 의료장비를 갖추고 있습니다. 임찬수 대표원장은 성형외과 전문의로 15년 이상의 경력을 보유하고 있으며, 분야별 전담 의료진이 포진해 있습니다. 3D CT 등 첨단 기기를 활용한 정밀 진단을 제공합니다.'
        ]
      }
    },
    {
      id: 7,
      name: '라이트성형외과',
      category: '',
      address: '서울 강남구 논현로 843 EGI빌딩 3층',
      tags: ['코', '눈', '지방', '가슴', '안면', '필러', '보톡스', '리프팅'],
      image: '/images/clinic_images/라이트성형외과05.jpg',
      images: [
        '/images/clinic_images/라이트성형외과01.jpg',
        '/images/clinic_images/라이트성형외과02.jpg',
        '/images/clinic_images/라이트성형외과03.jpg',
        '/images/clinic_images/라이트성형외과04.jpg',
        '/images/clinic_images/라이트성형외과05.jpg'
      ],
      doctor: '김지연 대표원장',
      intro: {
        title: '*반짝반짝* 라이트성형외과 입니다.',
        conclusion: '서울대 여성 1호 성형외과전문의 김지연 대표원장님의 폭넓은 수술경험과 꼼꼼한 진료, 감각적인 디자인으로 여러분의 아름다움을 위해 노력하겠습니다. 안심할 수 있는 수술과 수술 후 철저한 관리를 제공합니다.'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '라이트성형외과는 눈, 코 성형과 주름 성형, 지방흡입 등을 전문으로 하는 성형외과입니다. 김지연 대표원장은 서울대 출신 성형외과 전문의로 19년 경력을 보유하고 있습니다. 최신 장비와 시설을 갖추고 있으며, 수술 후 체계적인 사후관리 서비스를 제공합니다. 압구정역 4번 출구 근처에 위치해 접근성이 좋습니다. 운영 시간은 평일 10시-19시, 토요일 10시-16시입니다.'
        ]
      }
    },
    {
      id: 8,
      name: '레리의원',
      category: '',
      address: '서울 서초구 강남대로 605(잠원동, 세양21세기 휴먼TOWER) 12층 1202호',
      tags: ['피부', '보톡스', '필러', '리프팅', '기타'],
      image: '/images/clinic_images/레리의원01.jpg',
      images: [
        '/images/clinic_images/레리의원01.jpg',
        '/images/clinic_images/레리의원02.jpg',
        '/images/clinic_images/레리의원03.jpg',
        '/images/clinic_images/레리의원04.jpg',
        '/images/clinic_images/레리의원05.jpg',
        '/images/clinic_images/레리의원06.jpg',
        '/images/clinic_images/레리의원07.jpg',
      ],
      doctor: '오용주 대표원장',
      intro: {
        title: '안녕하세요, 감각적인 레이저 리프팅, 레리클리닉 입니다 :)',
        conclusion: '23년 경력의 오용주 대표원장의 프로페셔널한 실력과 노하우로 만족도 높은 레이저 리프팅을 느끼실 수 있도록 도와드리겠습니다. \n 감사합니다!'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '레리클리닉은 레이저 리프팅 전문 병원으로, 써마지, 울쎄라, 인모드 등 다양한 리프팅 시술을 제공합니다. 23년간 레이저 리프팅을 연구한 오용주 대표원장이 직접 상담과 시술을 진행합니다. 신사역 인근에 위치해 접근성이 좋으며, 프리미엄 마취제와 첨단 장비를 갖추고 있습니다. 오용주 원장은 가톨릭대 의대 졸업 후 전문의 자격을 취득했으며 여러 학회 정회원으로 활동 중입니다.'
        ]
      }
    },
    {
      id: 9,
      name: '리터닝성형외과',
      category: '',
      address: '서울 강남구 테헤란로 101 (역삼동, 이즈타워) 12층',
      tags: ['눈성형', '안면윤곽/양악', '보톡스', '필러', '리프팅', '지방성형', '코성형'],
      image: '/images/clinic_images/리터닝성형외과의원01.jpg',
      images: [
        '/images/clinic_images/리터닝성형외과의원01.jpg',
        '/images/clinic_images/리터닝성형외과의원02.png',
      ],
      doctor: '김용우 대표원장',
      intro: { 
        title: '당신의 시간을 되돌려 젊음으로 리터닝해드리겠습니다.',
          conclusion: '안녕하세요 리터닝 성형외과 대표원장 김용우원장입니다. \n 나이가 들어 노화가 온 얼굴을 젊게 해주는 일은 중년에 새로운 자극과 활력소를 줄 있는 매우 보람찬 수술입니다. \n 많은 분들에게 젊어지는 행복과 자신감을 드릴수 있도록 노력하는 리터닝 성형외과 되도록 하겠습니다.'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-17:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '리터닝성형외과의원은 안면거상술과 안티에이징 시술을 전문으로 하는 병원입니다. 김용우 대표원장이 직접 진료하는 1인 체계로 운영되며, 수술 책임 보증제를 실시합니다. 3D-CT, 코 내시경, 거상 내시경 등 첨단 장비를 갖추고 있으며, 수술실 CCTV 설치로 안전성을 높였습니다. 강남역 인근에 위치해 접근성이 좋고, 평일 10시부터 19시까지, 토요일은 17시까지 운영합니다. 수술 후에는 고주파 및 재생레이저를 활용한 맞춤 관리를 제공합니다.'
        ]
      }
    },
    {
      id: 10,
      name: '마블성형외과의원',
      category: '',
      address: '서울 서초구 강남대로 435 주류성빌딩 3층',
      tags: ['눈성형', '코성형', '안면윤곽/양악', '가슴성형', '지방성형', '필러', '보톡스'],
      image: '/images/clinic_images/마블성형외과의원01.jpg',
      images: [
        '/images/clinic_images/마블성형외과의원01.jpg',
        '/images/clinic_images/마블성형외과의원02.jpg',
        '/images/clinic_images/마블성형외과의원03.jpg',
        '/images/clinic_images/마블성형외과의원04.jpg',
        '/images/clinic_images/마블성형외과의원05.jpg',
        '/images/clinic_images/마블성형외과의원06.jpg',
        '/images/clinic_images/마블성형외과의원07.jpg',
        '/images/clinic_images/마블성형외과의원08.jpg',
      ],
      doctor: '서일범 대표원장',
      intro: {
        title: 'The Different. 마블성형외과는 다릅니다.',
        conclusion: '01. 절제미를 통한 필요한만큼의 수술 큰 만족감 \n 02. 개개인의 특징을 고려한 1:1 맞춤 시스템 \n 03. 환자를 생각하는 통합의료 안심시스템 \n 04. 상담부터 수술, 사후관리까지 안심 실명제도입 \n\n 젊음과 아름다움이 시작되는 곳, 마블성형외과에서 오늘도 행복을 꿈꾸는 많은 분들과 함께 하겠습니다.'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '마블성형외과의원은 눈, 코, 안면윤곽 등 다양한 성형 시술을 제공합니다. 특히 자가늑연골을 이용한 코성형이 대표적입니다. 수술 후 체계적인 사후관리를 제공하며, 최신 시설과 장비를 갖추고 있습니다. 서울 서초구 강남대로에 위치해 대중교통 이용이 편리합니다. 서일범 대표원장은 20년 이상의 경력을 보유한 성형외과 전문의입니다. 평일 10시-19시, 토요일 10시-16시 운영하며 일요일과 공휴일은 휴진입니다.'
        ]
      }
    },
    {
      id: 11,
      name: '마이셀의원',
      category: '',
      address: '서울 강남구 강남대로 616 신사미타워 B2',
      tags: ['코', '눈', '지방', '리프팅', '보톡스', '필러', '피부'],
      image: '/images/clinic_images/마이셀의원.png',
      images: [
        '/images/clinic_images/마이셀의원.png'
      ],
      doctor: '정의영 대표원장',
      intro: {
        title: '마이셀의원 성형외과 파트입니다.',
        conclusion: '본원은 성형외과 전문의로만 구성되어있으며 언제나 환자의 입장에서 생각하여 올바른 진료와 체계적인 진료, 1:1 맞춤 진료로 보다 나은 가치를 추구합니다. \n\n 1. 대표원장의 맞춤디자인상담 실시 \n 2. 정직한 상담과 올바른 진료로 수술플랜 \n 3. 3D-CT촬영을 통해 정밀검사 \n 4. 체계적인 사후관리 올케어시스템 운영 \n\n 진료항목 : 코성형, 기능코성형, 코재수술, 눈성형, 트임복원술, 안티에이징, 체형성형'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '마이셀의원은 통증 관리, 재활 치료, 성형 및 피부 관리 분야에 전문성을 갖춘 클리닉입니다. 외과, 통증, 성형피부 센터를 운영하며, 맞춤형 치료를 제공합니다. 특히 줄기세포 치료와 관련된 혁신적인 연구를 진행 중이며, JAEHA S-1과 W-1 앰플 주사 등 첨단 시술을 개발했습니다. 최신 의료 장비와 기술을 도입하여 효과적인 치료 환경을 갖추고 있으며, 전문 의료진이 상주하여 환자 중심의 서비스를 제공합니다.'
        ]
      }
    },
    {
      id: 12,
      name: '메리성형외과',
      category: '',
      address: '서울 강남구 논현로175길 6 (신사동) 4층, A호',
      tags: ['눈성형', '코성형', '가슴성형', '리프팅', '보톡스', '필러'],
      image: '/images/clinic_images/메리성형외과01.jpg',
      images: [
        '/images/clinic_images/메리성형외과01.jpg',
        '/images/clinic_images/메리성형외과02.png',
        '/images/clinic_images/메리성형외과03.png',
        '/images/clinic_images/메리성형외과04.png',
        '/images/clinic_images/메리성형외과05.png',
        '/images/clinic_images/메리성형외과06.png',
        '/images/clinic_images/메리성형외과07.png',
        '/images/clinic_images/메리성형외과08.jpg'
      ],
      doctor: '홍성택 대표원장',
      intro: {
        conclusion: '오시는 모든 분들에게 즐거움을 드리는 메리성형외과의원입니다.'
      },
      operatingHours: '월-금 09:30-18:30, 토 09:30-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '메리성형외과의원은 코성형과 안티에이징을 전문으로 하는 병원입니다. 홍성택 원장이 상담부터 시술, 수술, 애프터케어까지 1:1로 직접 진행합니다. 최신식 3D CT, ENT station, full HD 내시경 등 첨단 장비를 갖추고 있습니다. 압구정역 4, 5번 출구에서 도보 100m 이내로 접근성이 좋습니다. 홍성택 원장은 성형외과 전문의 자격을 보유하고 있습니다. 운영 시간은 평일 09:30-18:30, 토요일 09:30-16:00입니다.'
        ]
      }
    },
    {
      id: 13,
      name: '미고성형외과',
      category: '',
      address: '서울 강남구 논현로 838 (신사동, 원방프라자) 원방프라자 2층',
      tags: ['눈성형', '코성형', '안면윤곽/양악', '가슴성형', '지방성형', '필러', '보톡스'],
      image: '/images/clinic_images/미고성형외과01.jpg',
      images: [
        '/images/clinic_images/미고성형외과01.jpg',
        '/images/clinic_images/미고성형외과02.jpg',
        '/images/clinic_images/미고성형외과03.jpg',
        '/images/clinic_images/미고성형외과04.jpg',
        '/images/clinic_images/미고성형외과05.jpg',
        '/images/clinic_images/미고성형외과06.jpg',
        '/images/clinic_images/미고성형외과07.jpg'
      ],
      doctor: '강은택 대표원장',
      intro: {
        title: '1000번의 고민 1001번째 선택!',
        conclusion: '안심할 수 있는 미고성형외과 눈성형, 코성형, 가슴성형 \n 분야별 전문의료진 1:1 고객 맞춤형 상담부터 전담 의료진의 정밀한 진단과 수술 마취통증의학과 전문의&응급의료시스템 구축 체계적인 사후관리 시스템'
      },
       operatingHours: '월-금 10:00-19:00, 토 10:00-16:30, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '미고성형외과는 눈, 코, 가슴 성형 등을 전문으로 하며, 특히 내시경 가슴성형과 코성형이 대표 시술입니다. 대학병원급 안전 장비와 시설을 갖추고 있으며, 마취과 전문의가 상주합니다. 압구정역 3번 출구에서 220m 거리에 위치해 접근성이 좋습니다. 의료진은 10년 이상 경력의 성형외과 전문의들로 구성되어 있습니다. 윤원준 원장은 미국 성형외과 학회에서 강연할 정도로 실력을 인정받았습니다.'
        ]
      }
    },
    {
      id: 14,
      name: '미다스의원 강남점',
      category: '',
      address: '서울특별시 서초구 강남대로 439, 유화빌딩 15층',
      tags: ['지방', '가슴', '필러', '기타'],
      image: '/images/clinic_images/미다스강남01.jpg',
      images: [
        '/images/clinic_images/미다스강남01.jpg',
        '/images/clinic_images/미다스강남02.jpg',
        '/images/clinic_images/미다스강남03.jpg',
        '/images/clinic_images/미다스강남04.jpg',
        '/images/clinic_images/미다스강남05.jpg',
        '/images/clinic_images/미다스강남06.jpg',
        '/images/clinic_images/미다스강남07.jpg',
      ],
      doctor: '최중호 대표원장',
      intro: {
        title: '미다스의원은 2009년부터 15년 동안 줄기세포 지방성형 분야에 집중하고 있습니다.',
        conclusion: '줄기세포지방성형을 약 10,000례 집도하며 지방흡입과 지방이식 분야를 더 전문화 시키고자 최선을 다하고 있습니다. \n 허벅지, 복부, 팔흡입, 전신흡입, 가슴이식 등, 수천례의 수술한 통한 노하우와 경험으로 최선을 결과를 만들고 환자분의 안전을 가장 우선으로 생각하는 병원입니다. \n\n 다 똑같은 가슴지방이식? NO! \n 미다스 줄기세포가슴성형은 다릅니다! \n\n 허벅지나 복부에 지방은 많고 가슴은 작은분, 보형물에 대한 거부감이 큰분, 몸매교정과 가슴확대를 동시에 원하는 분, 수술한 티 없는 자연스런 볼륨감을 원하는 분, 부작용없는 안전한 시술을 원하는분 \n\n 높은 생착률과 자연스러운 라인과 볼륨감을 만들어드리는 미다스만의 줄기세포가슴성형. \n 풍부한 경험과 노하우의 의료진이 상주하고 있는 미다스 입니다.'
      },
      operatingHours: '월-수/금 10:00-19:00, 목/토/일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '미다스의원 강남본점은 줄기세포 지방성형에 특화된 의원으로, 4000례 이상의 줄기세포 가슴이식을 집도하며 지방흡입 및 이식 시술에 최선을 다하고 있습니다. 수술 후에는 1:1 개별 관리 시스템을 통해 전문적인 사후 관리 서비스를 제공합니다. 최첨단 시설과 장비를 갖춘 의원으로, 무균 수술실과 줄기세포 연구소를 운영하며, 서울 서초구 강남대로 439에 위치하고 있어 교통이 편리합니다. 대표원장 김영철은 줄기세포 분야의 전문의로, 다양한 경력을 보유하고 있습니다. 운영시간은 평일 10:00-19:00, 토요일 10:00-16:00이며, 목요일은 휴무입니다.'
        ]
      }
    },
    {
      id: 15,
      name: '미다스 용산',
      category: '',
      address: '서울 용산구 새창로 217 (한강로2가, 용산토투밸리) 2층',
      tags: ['코성형', '눈성형', '가슴성형', '지방성형', '필러', '보톡스', '리프팅'],
      image: '/images/clinic_images/미다스용산01.jpg',
      images: [
        '/images/clinic_images/미다스용산01.jpg',
        '/images/clinic_images/미다스용산02.jpg',
        '/images/clinic_images/미다스용산03.jpg',
        '/images/clinic_images/미다스용산04.jpg',
        '/images/clinic_images/미다스용산05.jpg',
        '/images/clinic_images/미다스용산06.jpg',
        '/images/clinic_images/미다스용산07.jpg',
        '/images/clinic_images/미다스용산08.jpg',
        '/images/clinic_images/미다스용산09.jpg',
        '/images/clinic_images/미다스용산10.jpg',
        '/images/clinic_images/미다스용산11.jpg'
      ],
      doctor: '김영철 대표원장',
      intro: {
        title: '♥나의 당당함은 미다스에서♥',
        conclusion: '말 안 하면 모르는 줄기세포가슴성형❗ \n 15년간 걸어온 줄기세포 & 가슴지방이식 시간과 데이터가 말해주는 경험과 노하우 \n\n 줄기세포가슴성형‼만이 가지는 특징 \n 🔸보형물과 다른 내 가슴 같은 촉감 \n 🔸꺼진 부위 채우기도 ok! 👍🏻 \n 🔸개인 맞춤 볼륨'
      },
      operatingHours: '월 10:00-18:00, 화-금 10:00-19:00, 토 10:00-15:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '미다스의원(용산)은 줄기세포 가슴성형과 지방이식 전문 병원입니다. 대표 시술인 가슴지방이식은 15년 이상의 경험을 바탕으로 합니다. 수술 후 1:1 개별 관리 시스템을 운영하며, 식약처 인증 줄기세포 배양시설과 대학병원 수준의 무균실을 갖추고 있습니다. 용산토투밸리 2층에 위치해 접근성이 좋습니다. 김영철 대표원장은 가슴지방이식 분야 국내 최초 저서를 출간했으며, 성형외과 전문의로 23년 이상의 경력을 보유하고 있습니다.'
        ]
      }
    },
    {
      id: 16,
      name: '비유성형외과',
      category: '',
      address: '서울 강남구 역삼동 820-11 시계탑빌딩 7층',
      tags: ['안면윤곽/양악', '가슴성형', '지방성형', '코성형', '필러', '보톡스'],
      image: '/images/clinic_images/비유성형외과01.jpg',
      images: [
        '/images/clinic_images/비유성형외과01.jpg',
        '/images/clinic_images/비유성형외과02.jpg',
        '/images/clinic_images/비유성형외과03.jpg',
        '/images/clinic_images/비유성형외과04.jpg',
        '/images/clinic_images/비유성형외과05.jpg',
        '/images/clinic_images/비유성형외과06.jpg',
        '/images/clinic_images/비유성형외과07.jpg',
        '/images/clinic_images/비유성형외과08.jpg',
      ],
      doctor: '최우경 대표원장',
      intro: {
        title: '당신에게 필요한건 남들과 다른 VIU.U! ',
        conclusion: '비유 성형외과는 본연의 아름다움을 담은 얼굴을 추구 합니다. \n 모든 성형수술은 올바른 진단을 받는 것에서 시작되어야 하는 만큼 정직한 진료와 끈임없는 연구를 통한 전문성으로 환자가 안심할 수 있는 병원이 되겠습니다. \n 최우경 대표원장님의 진료항목은 윤곽수술, 가슴성형, 입술성형 및 재수술 입니다.'
      },
      operatingHours: '월-수/금 10:00-19:00, 목 휴진, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '비유성형외과는 강남역 근처에 위치한 성형외과로, 안면윤곽, 코성형, 가슴성형, 지방흡입 등을 전문으로 하며, 특히 비유펜타윤곽수술이 대표 시술입니다. 수술 후 평생 관리 서비스를 제공합니다. 3D-CT, FULL HD 내시경 등 첨단 의료장비를 갖추고 있습니다. 최우경 대표원장은 단국대 출신으로 성형외과 전문의 자격을 보유하고 있습니다. 평일 10시~19시, 토요일 10시~16시 운영하며 목요일과 일요일은 휴진입니다.'
        ]
      }
    },
    {
      id: 17,
      name: '생활건강한의원',
      category: '',
      address: '서울 서초구 서초대로77길 24 (서초동, 강남 지웰타워2) 6층',
      tags: ['한방', '다이어트', '피부'],
      image: '/images/clinic_images/생활건강한의원01.jpg',
      images: [
        '/images/clinic_images/생활건강한의원01.jpg',
        '/images/clinic_images/생활건강한의원02.jpg',
        '/images/clinic_images/생활건강한의원03.jpg',
        '/images/clinic_images/생활건강한의원04.jpg',
        '/images/clinic_images/생활건강한의원05.jpg',
        '/images/clinic_images/생활건강한의원06.jpg'
      ],
      doctor: '김지승 대표원장',
      intro: { 
        title: '프로그램 안내',
        conclusion: '[다이어트프로그램] \n - 생활건강다이어트 \n - 오늘,감량프리미엄한약 \n - 내일,유지요요방지한약 \n\n [다이어트 부스터] \n - 팻컷주사 \n - 리프팅매선 \n - 메디컬기계관리 \n\n [1대1 다이어트] \n - 소아청소년비만 \n - 웨딩다이어트 \n - 산후다이어트 \n - 고도비만다이어트 \n - 갱년기다이어트 \n - 남성다이어트'
      },
      operatingHours: '월/금 10:00-20:00, 화-목 10:00-19:00, 토/일/공휴일 10:00-14:00',
      aiInsight: {
        paragraphs: [
          '생활건강한의원은 다이어트에 특화된 한의원으로, 개인 맞춤형 다이어트 한약과 시술을 제공합니다. 대표 시술로는 지방분해침, 다이어트 약침, 체형교정 등이 있습니다. 강남역 10번 출구 도보 1분 거리에 위치해 접근성이 좋습니다. 김지승 대표원장을 포함한 3인의 의료진이 협진 시스템으로 진료합니다. 평일 10시부터 19시까지, 토요일과 일요일에도 진료하며 야간 진료도 제공합니다. 최신 의료 장비를 갖추고 있어 정확한 진단과 치료가 가능합니다.'
        ]
      }
    },
    {
      id: 18,
      name: '허쉬성형외과',
      category: '',
      address: '서울 강남구 삼성로 730 (청담동) 2-4층',
      tags: ['눈성형', '리프팅', '필러', '보톡스', '지방성형', '피부'],
      image: '/images/clinic_images/허쉬성형외과01.jpg',
      images: [
        '/images/clinic_images/허쉬성형외과01.jpg',
        '/images/clinic_images/허쉬성형외과02.jpg',
        '/images/clinic_images/허쉬성형외과03.jpg',
        '/images/clinic_images/허쉬성형외과04.jpg',
        '/images/clinic_images/허쉬성형외과05.jpg',
        '/images/clinic_images/허쉬성형외과06.jpg',
        '/images/clinic_images/허쉬성형외과07.jpg',
        '/images/clinic_images/허쉬성형외과08.jpg',
        '/images/clinic_images/허쉬성형외과09.jpg',
        '/images/clinic_images/허쉬성형외과10.jpg',
      ],
      doctor: '정영춘 대표원장',
      intro: {
        conclusion: '청담동 위치, 얼굴리프팅, 바디성형, 안티에이징, 줄기세포, 눈성형을 중점진료하며, 환자의 안전과 빠른 회복을 지향합니다. \n 허쉬성형외과는 1992년 개원 이래 리프팅, 쁘띠성형, 안티에이징에 대한 연구와 노하우를 쌓아 오고 있으며, 현재 성형외과, 피부과에서 얼굴리프팅, 가슴리프팅, 힙업리프팅에 사용되고 있는 에피티콘 실을 개발 및 특허 취득한 병의원입니다. \n 이외에도 줄기세포, 지방조직 관련 연구 성과와 특허를 보유하고 있습니다. \n 안정적인 의료 서비스를 제공해 온 공로를 인정 받아 보건복지부장관상을 수상한 바 있습니다.'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '허쉬성형외과의원은 리프팅 수술과 시술, 눈성형, 지방이식 등에 전문화된 병원입니다. 대표 시술로는 에피티콘 실을 이용한 리프팅과 맥스리프팅이 있습니다. 수술 후 레이저 등 흉터 관리 프로그램을 제공합니다. 1992년 설립되어 노화 관리에 특화되어 있으며, 정영춘 대표원장이 에피티콘 실을 직접 개발했습니다. 청담동에 위치해 있고 해외 환자를 위한 원스톱 서비스를 제공합니다.'
        ]
      }
    },
    {
      id: 19,
      name: '소이의원',
      category: '',
      address: '서울 서초구 강남대로 563 (잠원동, 페이토) 페이토플라자 7층',
      tags: ['피부', '보톡스', '필러', '리프팅', '기타'],
      image: '/images/clinic_images/소이의원01.png',
      images: [
        '/images/clinic_images/소이의원01.png',
        '/images/clinic_images/소이의원02.jpg',
        '/images/clinic_images/소이의원03.jpg',
        '/images/clinic_images/소이의원04.jpg',
      ],
      doctor: '소지현 대표원장',
      intro: {
        title: '안녕하세요 소이의원(soiclinic)입니다.',
          conclusion: 'Experience timeless beauty with Soi \n 시간을 초월하는 아름다움을 선사하다'
      },
      operatingHours: '월-금 11:00-20:00, 토 11:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '소이의원은 실리프팅, 울쎄라, 필러 등 다양한 미용 시술을 제공합니다. 시술 전후 관리와 부작용 예방에 세심한 주의를 기울이며, 최신 진료 시설을 갖추고 있습니다. 서울 서초구 강남대로에 위치해 대중교통 접근성이 좋습니다. 소지현 대표원장은 풍부한 경력을 보유한 전문의입니다. 병원은 평일 오전 9시 30분부터 오후 5시 30분까지 운영되며 주말과 공휴일은 휴진입니다.'
        ]
      }
    },
    {
      id: 20,
      name: '스마일디치과의원',
      category: '',
      address: '서울 강남구 강남대로 624 (신사동, ICT TOWER) 13층',
      tags: ['치아'],
      image: '/images/clinic_images/스마일디치과01.jpg',
      images: [
        '/images/clinic_images/스마일디치과01.jpg',
        '/images/clinic_images/스마일디치과02.jpg',
        '/images/clinic_images/스마일디치과03.jpg',
        '/images/clinic_images/스마일디치과04.jpg',
        '/images/clinic_images/스마일디치과05.jpg',
        '/images/clinic_images/스마일디치과06.jpg',
        '/images/clinic_images/스마일디치과07.jpg',
        '/images/clinic_images/스마일디치과08.jpg',
        '/images/clinic_images/스마일디치과09.jpg',
        '/images/clinic_images/스마일디치과10.jpg',
        '/images/clinic_images/스마일디치과11.jpg',
        '/images/clinic_images/스마일디치과12.jpg',
        '/images/clinic_images/스마일디치과13.jpg'
      ],
      doctor: '오수환 대표원장',
      intro: {
        title: '10년차 이상 대표원장급 치과의사들이 모여 협진 시스템으로 진료하는 치과가 바로 스마일디치과입니다.',
        conclusion: '스마일디치과가 최저가 치과는 아닙니다. \n 최저가의 공장형 치과보다는 치과를 직접 운영할 수 있는 레벨의 원장님들을 모셔서 적절한 가격과 만족스러운 치료 결과에 집중하고 있습니다.'
      },
      operatingHours: '월/금 10:00-19:00, 화-목 10:00-21:00, 토 10:00-14:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '스마일디치과의원은 치과교정 전문 병원으로, 오수환 대표원장(17년 경력 치과교정과 전문의)이 직접 진료를 담당합니다. 교정 전 상담부터 치료 종료까지 책임지고 진료하는 것이 특징입니다. 첨단 디지털 장비를 갖추고 있으며, 강남 신사역 1번 출구 인근에 위치해 접근성이 좋습니다. 평일 오전 9:30부터 오후 6:30까지, 화/목요일은 오후 8:30까지 야간진료를 실시합니다. 토요일은 오후 2시까지 진료합니다.'
        ]
      }
    },
    {
      id: 21,
      name: '오페라성형외과의원',
      category: '',
      address: '서울 서초구 강남대로 527 (반포동, 브랜드칸 타워) 7층',
      tags: ['눈성형', '코성형', '안면윤곽/양악', '가슴성형', '지방성형', '필러', '보톡스'],
      image: '/images/clinic_images/오페라의원01.jpg',
      images: [
        '/images/clinic_images/오페라의원01.jpg',
        '/images/clinic_images/오페라의원02.jpg',
        '/images/clinic_images/오페라의원03.jpg',
        '/images/clinic_images/오페라의원04.jpg',
        '/images/clinic_images/오페라의원05.jpg',
        '/images/clinic_images/오페라의원06.jpg',
        '/images/clinic_images/오페라의원07.jpg',
        '/images/clinic_images/오페라의원08.jpg',
        '/images/clinic_images/오페라의원09.jpg',
        '/images/clinic_images/오페라의원10.jpg'
      ],
      doctor: '김석한 대표원장',
      intro: {
        conclusion: '오페라성형외과는 전원 성형외과 전문의로 구성된 분야별 전담의 시스템을 갖추고 있으며, 2명의 마취통증의학과 전문의가 상주하며 안전을 최우선으로 생각하고 있습니다. \n 다년 간의 수술 경험과 노하우를 보유한 오페라는 항상 고객의 입장에서 노력하고 있는 병원입니다.'
      },
      operatingHours: '월-목 10:00-19:00, 금 10:00-20:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '오페라성형외과의원은 안면윤곽, 가슴성형, 눈·코 성형을 전문으로 합니다. 마취통증의학과 전문의가 상주하며, 1인 책임전담 마취의 시스템을 운영합니다. 3D-CT, 가슴 초음파 등 첨단 장비를 보유하고 있습니다. 수술 후 24시간 전담 코디네이터와 간호 스태프가 관리합니다. 서울 강남구 논현동에 위치해 접근성이 좋으며 김석한 대표원장은 15년 이상의 수술 경험을 보유하고 있습니다. 평일 10시부터 19시까지, 금요일은 20시까지, 토요일은 16시까지 운영합니다.'
        ]
      }
    },
    {
      id: 22,
      name: '올라인의원',
      category: '',
      address: '서울 마포구 양화로 140 (동교동) 3층',
      tags: ['피부', '보톡스', '필러', '리프팅', '제모', '기타'],
      image: '/images/clinic_images/올라인의원01.jpg',
      images: [
        '/images/clinic_images/올라인의원01.jpg',
        '/images/clinic_images/올라인의원02.jpg',
        '/images/clinic_images/올라인의원04.jpg',
        '/images/clinic_images/올라인의원03.jpg',
        '/images/clinic_images/올라인의원05.jpg',
        '/images/clinic_images/올라인의원06.jpg'
      ],
      doctor: '나민균 대표원장',
      intro: {
        conclusion: '페이스부터 바디까지 All in one Solution 글로벌 쁘띠 센터'
      },
      operatingHours: '월-금 10:30-20:30, 토/일/공휴일 10:30-18:00',
      aiInsight: {
        paragraphs: [
          '올라인의원은 홍대에 위치한 피부·다이어트 전문 클리닉입니다. 프리미엄 리프팅, 색소 치료, 스킨부스터, 보톡스&필러, 다이어트 등을 전문으로 합니다. FDA, KFDA, 유럽CE 인증을 받은 첨단 레이저 장비를 다수 보유하고 있습니다. 고민 부위별 맞춤 시술이 가능하며, 시술 후 꼼꼼한 사후 관리를 제공합니다. 주소는 서울 마포구 양화로 140 3층이며, 평일 10:30-20:30, 주말/공휴일 10:30-18:00에 운영합니다.'
        ]
      }
    },
    {
      id: 23,
      name: '워나성형외과의원',
      category: '',
      address: '서울 서초구 강남대로 407 (서초동) 오퍼스407 빌딩 7층',
      tags: ['코성형', '눈성형', '리프팅', '필러', '보톡스', '가슴성형', '지방성형'],
      image: '/images/clinic_images/워나성형외과01.jpg',
      images: [
        '/images/clinic_images/워나성형외과01.jpg',
        '/images/clinic_images/워나성형외과02.jpg',
        '/images/clinic_images/워나성형외과03.jpg',
        '/images/clinic_images/워나성형외과04.jpg',
        '/images/clinic_images/워나성형외과05.jpg',
        '/images/clinic_images/워나성형외과06.jpg',
        '/images/clinic_images/워나성형외과07.jpg',
        '/images/clinic_images/워나성형외과08.jpg',
        '/images/clinic_images/워나성형외과09.jpg',
        '/images/clinic_images/워나성형외과10.jpg'
      ],
      doctor: '최태준 대표원장',
      intro: {
        title: '예뻐지길 원한다면? 워나에서! 모든 순간, 아름다움과 가까워지세요.',
        conclusion: '- 각 분야 전문의의 1:1 환자 전담 시스템 \n - 대학 병원급 수술 시설 완비 \n - 체계적인 관리 서비스 \n\n 문의 02)533-8001'
      },
      operatingHours: '월-목 10:00-19:00, 금 10:00-20:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '워나성형외과의원은 눈성형과 코성형을 전문으로 하며, 자연스러우면서도 화려한 결과를 추구합니다. 수술 후 철저한 사후관리를 제공하고, 대학병원급 안전시스템과 최첨단 의료장비를 갖추고 있습니다. 강남역 10번 출구에서 도보 1분 거리에 위치해 접근성이 좋습니다. 최태준 대표원장은 경희대 출신 성형외과 전문의로, 다수의 학회 활동 경력이 있습니다. 평일 10시-19시, 금요일 20시, 토요일 16시까지 운영합니다.'
        ]
      }
    },
    {
      id: 24,
      name: '김지연위쉬성형외과의원',
      category: '',
      address: '서울 강남구 청담동 80-4 송재빌딩 7층',
      tags: ['가슴성형'],
      image: '/images/clinic_images/위시성형외과01.jpg',
      images: [
        '/images/clinic_images/위시성형외과01.jpg',
        '/images/clinic_images/위시성형외과02.jpg',
        '/images/clinic_images/위시성형외과03.jpg',
        '/images/clinic_images/위시성형외과04.jpg',
        '/images/clinic_images/위시성형외과05.jpg'
      ],
      doctor: '김지연 대표원장',
      intro: {
        title: '여자의 가슴은 여자가 안다! 진짜보다 더 진짜같은 가슴💜',
        conclusion: '가슴외길, 김지연대표원장님 32년 경력과 연륜, 디테일이 다른 세심하고 꼼꼼한 수술! \n 자연스러운 아름다움, 마음까지 치유되는 여자만의 공간 아름다운 몸매를 가지고 싶다면, 먼저 위쉬부터 만날 것! \n 예쁘게 퍼지고 모이는 리얼 가슴핏 \n #촉감 #모양 #I라인 #움직임 가슴 전문병원❤️ 김지연 위쉬성형외과🧡💛 \n\n 당신이 위쉬를 선택하는 순간! 위쉬는 당신의 영원한 자부심이 됩니다. \n ❤️위쉬❤️만의 촉감과 모양, 노하우를 지금 만나보세요❕'
      },
      operatingHours: '월/화/목/금 10:00-19:00, 수 휴진, 토 10:00-15:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '김지연위쉬성형외과는 가슴성형을 전문으로 하며, 모티바 가슴성형이 대표 시술입니다. 수술 후 정기적인 초음파 검진과 흉터 관리 프로그램을 제공합니다. 안전한 마취 시스템과 전문 장비를 갖추고 있습니다. 압구정로데오역 3번 출구에서 100m 거리에 위치해 접근성이 좋습니다. 김지연 대표원장은 28년 이상의 경력을 보유한 성형외과 전문의입니다.'
        ]
      }
    },
    {
      id: 25,
      name: '이지동안의원',
      category: '',
      address: '서울 강남구 압구정로 168 (신사동) 2층',
      tags: ['눈성형', '코성형', '가슴성형', '리프팅', '지방성형', '필러', '보톡스', '피부'],
      image: '/images/clinic_images/이지동안의원01.jpg',
      images: [
        '/images/clinic_images/이지동안의원01.jpg',
        '/images/clinic_images/이지동안의원02.jpg',
        '/images/clinic_images/이지동안의원03.jpg',
        '/images/clinic_images/이지동안의원04.jpg',
        '/images/clinic_images/이지동안의원05.jpg',
        '/images/clinic_images/이지동안의원06.jpg',
        '/images/clinic_images/이지동안의원07.jpg',
        '/images/clinic_images/이지동안의원08.jpg',
        '/images/clinic_images/이지동안의원09.jpg',
        '/images/clinic_images/이지동안의원11.jpg',
        '/images/clinic_images/이지동안의원12.jpg',
        '/images/clinic_images/이지동안의원13.jpg'
      ],
      doctor: '도재운 대표원장',
      intro: { 
        title: '프리미엄 안티에이징 센터, 이지동안 강남본점입니다.',
          conclusion: '1. 베테랑 의료진의 맞춤 진료 \n 2. 뷰티 트렌드를 선도하는 병원 \n 3. 40여종 이상의 프리미엄 레이저 \n 4. 정밀 진단 데이터를 활용한 시술 \n 5. 세계에서 찾는 공식 트레이닝 센터 이지동안 강남본점에서는 성형수술 / 쁘띠성형 / 피부질환 / 바디관리 / 두피케어 등 다양한 미용시술을 모두 만나보실 수 있으며, 환자분 상태에 맞는 적절한 시술, 수술을 통해 만족스러운 결과를 약속드리겠습니다. \n\n ■ 위챗ID - egtongyan1 *微信搜一搜'
      },
      operatingHours: '월/화/목/금 10:00-21:00, 수 휴진, 토 10:00-17:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '이지동안의원은 필러, 보톡스, 리프팅 등 다양한 비수술 성형 시술을 전문으로 합니다. 대표 시술로는 콜라겐 필러와 엘라스티 메쉬필 등이 있습니다. 대표원장이 상담부터 시술, 사후관리까지 직접 담당하는 1:1 맞춤 진료 시스템을 갖추고 있습니다. 3D 가상성형 장비인 벡트라 XT를 보유하여 시술 결과를 미리 예측할 수 있습니다. 도재운 대표원장은 다양한 학회에서 강연 활동을 하며 전문성을 인정받고 있습니다.'
        ]
      }
    },
    {
      id: 26,
      name: '일치성형외과의원',
      category: '',
      address: '서울 강남구 봉은사로 108 (역삼동, 글라스톤빌딩) 3층',
      tags: ['눈성형', '코성형', '리프팅', '지방성형', '피부', '기타'],
      image: '/images/clinic_images/일치성형외과01.jpg',
      images: [
        '/images/clinic_images/일치성형외과01.jpg',
        '/images/clinic_images/일치성형외과02.jpg',
        '/images/clinic_images/일치성형외과03.jpg',
        '/images/clinic_images/일치성형외과04.jpg',
        '/images/clinic_images/일치성형외과05.jpg',
        '/images/clinic_images/일치성형외과06.jpg',
        '/images/clinic_images/일치성형외과07.jpg'
      ],
      doctor: '문형석 대표원장',
      intro: {
        title: '개인 고유 아름다움을 바탕으로 현대적인 미를 일치시키다.',
        conclusion: '고객의 기대와, 수술 결과가 하나가 될 수 있도록. \n 고객의 만족과 의료진에 대한 신뢰가 일치되도록 어긋남이 없이 한결같게 서로 맞을 수 있도록 하는 것이 우리가 추구하는 모토 입니다.'
      },
      operatingHours: '월-목 09:00-18:00, 금 09:00-20:30, 토 09:00-15:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '일치성형외과의원은 리프팅 시술을 전문으로 하며, 포니테일 리프팅과 마녀턱 리프팅이 대표 시술입니다. 문형석 대표원장은 성형외과 전문의로, 경희대학교병원 성형외과 외래교수를 역임했습니다. 서울 강남구 봉은사로 108에 위치해 있으며 지하철 9호선 4번 출구에서 도보 10분 거리입니다. 운영 시간은 월-목 9시-18시, 금 9시-20시 30분, 토 9시-15시입니다. 일요일은 정기 휴무입니다.'
        ]
      }
    },
    {
      id: 27,
      name: '제이드힐의원',
      category: '',
      address: '서울 강서구 강서로 323 효동빌딩 301호',
      tags: ['필러', '보톡스', '리프팅', '피부'],
      image: '/images/clinic_images/제이드힐로고.png',
      images: [
        '/images/clinic_images/제이드힐01.jpg',
        '/images/clinic_images/제이드힐02.jpg',
        '/images/clinic_images/제이드힐03.jpg',
        '/images/clinic_images/제이드힐04.jpg',
        '/images/clinic_images/제이드힐05.jpg'
      ],
      doctor: '조성훈 대표원장',
      intro: {
        conclusion: '제이드힐 의원에서는 고객님과 소통하고 공감하며 아름다움을 지켜드리기 위해 최선을 다해 노력할 것이며, 한분한분 소중한 고객님들과 함께 나아가는 제이드힐 의원이 될 것을 약속드립니다.'
      },
      operatingHours: '월/수/금 10:00-19:30, 화/목 10:00-20:30, 토 10:00-15:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '제이드힐 의원은 서울 강서구 내발산동에 위치하며 발산역에서 가깝고 교통이 편리합니다. 전문 시술로는 스킨보톡스, 레이저 제모, 리프팅 등이 있으며, 통증과 멍을 최소화한 무통 시술이 특징입니다. 12년 이상 경력의 숙련된 의료진이 1:1 맞춤 시술을 제공하며, 모든 장비와 재료는 정품만 사용합니다. 프라이빗 1인 관리실과 첨단 장비를 보유하여 안전하고 위생적인 환경을 제공합니다. 운영시간은 주중 10:30~19:30입니다.'
        ]
      }
    },
    {
      id: 28,
      name: '차이성형외과',
      category: '',
      address: '서울 강남구 강남대로 406 GLASS TOWER 14층(강남역11번출구)',
      tags: ['눈성형', '코성형', '지방성형', '보톡스', '필러', '리프팅'],
      image: '/images/clinic_images/차이성형외과01.png',
      images: [
        '/images/clinic_images/차이성형외과01.png',
        '/images/clinic_images/차이성형외과02.png',
        '/images/clinic_images/차이성형외과03.png',
        '/images/clinic_images/차이성형외과04.png',
        '/images/clinic_images/차이성형외과05.png',
        '/images/clinic_images/차이성형외과06.png',
        '/images/clinic_images/차이성형외과07.jpg',
        '/images/clinic_images/차이성형외과08.png',
        '/images/clinic_images/차이성형외과09.png',
        '/images/clinic_images/차이성형외과10.png',
      ],
      doctor: '최승호 대표원장',
      intro: {
        conclusion: '실력과 정성으로 하는 가치있는 진료 환자를 먼저 생각하는 진정성있는 진료 실력의 차이가 결과의 차이를 만듭니다. \n 차이성형외과는 고객 한분, 한분께 진심으로 다가서는 가치있고 진정성있는 진료를 원칙으로 합니다. \n 차이성형외과는 언제나 환자를 먼저 생각한다는 환자중심의 이념 아래 모든 직원 및 의료진들이 상담부터 수술, 수술 후 관리까지 진료의 모든 과정에서 안심할 수 있고 만족할 수 있는 결과를 위해 최선의 노력을 다하고 있습니다.'
      },
      operatingHours: '월-금 10:00-19:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '차이성형외과는 눈, 코 성형을 전문으로 하며 자연유착 눈재수술과 비절개 눈재수술이 대표 시술입니다. 수술 후 정성 어린 사후 관리를 제공합니다. 최신 시설과 장비를 갖추고 있으며, 서울 강남구에 위치해 접근성이 좋습니다. 최승호 대표원장은 10년 차 성형외과 전문의로, 직접 상담과 진료를 담당합니다. '
        ]
      }
    },
    {
      id: 29,
      name: '투비성형외과',
      category: '',
      address: '서울 강남구 도산대로 134 (논현동) 4층',
      tags: ['눈성형', '코성형', '보톡스', '필러', '지방성형', '리프팅'],
      image: '/images/clinic_images/투비성형외과01.jpg',
      images: [
        '/images/clinic_images/투비성형외과01.jpg',
        '/images/clinic_images/투비성형외과02.jpg',
        '/images/clinic_images/투비성형외과03.jpg'
      ],
      doctor: '김도훈 대표원장',
      intro: {
        conclusion: '서울 특별시 강남구 논현동 3호선 / 신분당선 신사역 1번 출구 \n 서울대학교병원/삼성서울병원 출신 성형외과 전문의 대표원장 2명 \n\n <전문 분야> \n 눈 수술 - 쌍꺼풀 수술 / 고난이도 쌍꺼풀 재수술 / 사방트임 / 안검하수 교정 \n 눈밑 수술 - 눈밑지방재배치 (+뒤밑트임) / 하안검 \n 안티에이징수술 - 이마거상 / 안면거상 / 목거상 / 실리프팅 / 상안검 / 눈썹거상술 \n 코 수술 - 코끝, 콧대성형 / 콧볼 축소 / 코재수술 \n 쁘띠 시술 - 레이저, 스킨부스터, 보톡스, 필러'
      },
      operatingHours: '월-금 10:00-18:30, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '투비성형외과의원은 눈성형, 특히 쌍꺼풀과 눈재수술을 전문으로 합니다. 수술 후 개인별 맞춤 관리를 제공하며, 레이저 치료부터 주사, 연고, 약 처방까지 다양한 서비스를 제공합니다. 최신 장비와 안전 시스템을 갖추고 있으며, 신사역 1번 출구에서 도보 3분 거리에 위치해 접근성이 좋습니다. 김도훈, 조혜인 대표원장은 성형외과 전문의로 풍부한 경험을 보유하고 있습니다. 평일 10:00-18:30, 토요일 10:00-16:00 운영합니다.'
        ]
      }
    },
    {
      id: 30,
      name: '포미엘의원',
      category: '',
      address: '경기 하남시 미사강변중앙로 214 (망월동, 레이크 더 타워) 5층',
      tags: ['리프팅', '필러', '보톡스', '제모', '피부'],
      image: '/images/clinic_images/포미엘의원01.jpg',
      images: [
        '/images/clinic_images/포미엘의원01.jpg',
        '/images/clinic_images/포미엘의원02.jpg',
        '/images/clinic_images/포미엘의원03.jpg',
        '/images/clinic_images/포미엘의원04.jpg',
        '/images/clinic_images/포미엘의원05.jpg',
        '/images/clinic_images/포미엘의원06.jpg',
        '/images/clinic_images/포미엘의원07.jpg',
        '/images/clinic_images/포미엘의원08.jpg',
        '/images/clinic_images/포미엘의원09.jpg',
        '/images/clinic_images/포미엘의원10.jpg',
        '/images/clinic_images/포미엘의원11.jpg',
        '/images/clinic_images/포미엘의원12.jpg',
        '/images/clinic_images/포미엘의원13.jpg',
        '/images/clinic_images/포미엘의원14.jpg',
        '/images/clinic_images/포미엘의원15.jpg',
        '/images/clinic_images/포미엘의원16.jpg',
        '/images/clinic_images/포미엘의원17.jpg',
      ],
      doctor: '강현수 대표원장',
      intro: {
        title: '꿀피부를 만들어주는 미사 포미엘의원입니다.',
        conclusion: '프랑스어로 Peau (피부) 와 miel (꿀) 이 결합되어 만들어진 포미엘은 꿀피부 라는 뜻이 있습니다. \n 포미엘의 큰 규모, 감각적인 인테리어, 프리미엄 장비를 보시기 전 의료철학을 먼저 봐주셨으면 합니다. \n\n 내 마음을 다해 치료하는 병원 포미엘의원에서 드리는 3가지 약속입니다. \n 1. 피부 MBTI 진단을 포함한 정확한 피부 진단 결과를 토대로 한 분 한 분 집중하여 피부에 알맞는 1:1 맞춤 시술로 피부를 개선합니다. \n 2. 내 가족에게 할 수 있는 시술만 합니다. \n 3. 시술만 받고 끝나는 것이 아닌 후케어까지 완벽하게 케어합니다. \n\n 현재 피부 고민으로 미사 피부과를 찾는 중이라면 포미엘의원 찾아주셔도 좋습니다. \n 믿고 선택하신 만큼 최선을 다해 결과로 보답하겠습니다.'
      },
      operatingHours: '월-금 10:00-20:00, 토 10:00-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '포미엘의원은 피부과 전문 의원으로, 피부 MBTI 진단을 포함한 트리플 피부 진단 시스템을 통해 1:1 맞춤 시술을 제공합니다. 기미/잡티/주근깨 치료, 온다리프팅, 보톡스, 필러 등 다양한 피부 시술을 전문으로 합니다. 강현수 대표원장은 10년 이상 피부재생을 연구한 경력을 보유하고 있습니다. 경기도 하남시 미사강변중앙로에 위치하며 미사역에서 도보로 이동 가능합니다. 운영 시간은 평일 10:00-20:00, 수요일 10:00-14:00, 토요일 10:00-16:00입니다.'
        ]
      }
    },
    {
      id: 31,
      name: '플랜에스의원',
      category: '',
      address: '서울 서초구 강남대로 419 (서초동, 파고다타워) B2층',
      tags: ['지방성형', '리프팅'],
      image: '/images/clinic_images/플랜에스의원01.jpg',
      images: [
        '/images/clinic_images/플랜에스의원01.jpg',
        '/images/clinic_images/플랜에스의원02.jpg',
        '/images/clinic_images/플랜에스의원03.jpg',
        '/images/clinic_images/플랜에스의원04.jpg',
        '/images/clinic_images/플랜에스의원05.jpg',
        '/images/clinic_images/플랜에스의원06.jpg',
        '/images/clinic_images/플랜에스의원07.jpg'
      ],
      doctor: '도건기 대표원장',
      intro: {
        title: '라인을 찾는 공간, 플랜에스의원',
        conclusion: '다이어트·리프팅 중점 진료'
      },
      operatingHours: '월-금 10:30-20:00, 토 10:30-16:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '플랜에스의원은 맞춤형 다이어트 및 리프팅 시술 전문 클리닉으로, 대표 시술로는 지방 세포 크기 및 수를 감소시키는 뺏주사와 티타늄 리프팅이 있습니다. 수술 후 관리는 체계적 프로그램으로 진행되며, 체형 분석과 인바디 체크를 통해 개인 맞춤 관리를 제공합니다. 강남역 파고다타워에 위치해 있어 교통이 편리합니다. 전문의 자격을 가진 의료진이 시술을 담당하며, 운영 시간은 평일 10시부터 19시까지입니다.'
        ]
      }
    },
    {
      id: 32,
      name: '신논현 예쁨주의쁨의원',
      category: '',
      address: '서울 강남구 강남대로 470 808타워 13,14층',
      tags: ['피부', '보톡스', '필러', '제모', '안티에이징', '리프팅'],
      image: '/images/clinic_images/쁨의원로고.png',
      images: [
        '/images/clinic_images/쁨의원02.jpg',
        '/images/clinic_images/쁨의원01.jpeg'
      ],
      doctor: '정헌진 대표원장',
      intro: {
        title: '예쁨주의쁨 NETWORK 전국 어디에서나, 토탈뷰티플렉스 예쁨주의 쁨의원',
        conclusion: '필러, 보톡스, 리프팅, 바디, 레이저 시술에 특화된 피부, 쁘띠 클리닉 \n\n WHY 예쁨주의 쁨클리닉? \n 1. 10인 이상의 서울대 출신 원장들의 공동 연구 \n 2. 정품 정량 원칙 준수 \n 3. 최신 레이저 장비 및 시술 도입 \n 4. 모든 시술 합리적인 시술가로 제공 \n 5. 감각적인 인테리어의 편안한 분위기'
      },
      operatingHours: '월-금 10:30-21:00, 토 10:30-17:00, 일/공휴일 휴진',
      aiInsight: {
        paragraphs: [
          '신논현예쁨주의쁨의원은 신논현역 인근에 위치한 클리닉으로, 위치와 교통 편의성이 뛰어납니다. 다양한 전문 시술 분야를 보유하고 있으며, 수술 후 관리 서비스도 제공하여 환자 만족도를 높이고 있습니다. 최신 시설과 장비를 갖추고 있어 안전하고 효과적인 시술이 가능합니다. 운영 시간은 평일 오전 10시 반부터 오후 7시까지이며, 토요일은 오전 10시 반부터 오후 4시까지 운영합니다. 일요일과 공휴일은 휴무입니다.'
        ]
      }
    },
  ];

export default hospitalData;