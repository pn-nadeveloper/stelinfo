const memberData = [
  {
    Kanna: {
      Eng_name: "Airi Kanna",
      Kor_name: "아이리 칸나",
      Short_name: "칸나",
      Age: "1700세",
      Birth_date: "12월 2일",
      Height: "155cm",
      MBTI: "ISFP",
      Species: "용",
      Fan_name: "비늘이",
      Hex: "#373584",
      Osimark: "🐉💎",
      Affiliation: "스텔라이브(1기 미스틱)",
      Debut: "2023년 01월 17일",
    },
  },
  {
    Yuni: {
      Eng_name: "Ayatsuno Yuni",
      Kor_name: "아야츠노 유니",
      Short_name: "유니",
      Age: "4세",
      Birth_date: "5월 21일",
      Height: "150cm",
      MBTI: "ISTP",
      Species: "혼혈 유니콘",
      Fan_name: "아르냥",
      Hex: "#B77DE4",
      Osimark: "☪️🤍",
      Affiliation: "스텔라이브(1기 에버리스)",
      Debut: "2023년 01월 08일",
    },
  },
  {
    Huya: {
      Eng_name: "Sakihane Huya",
      Kor_name: "사키하네 후야",
      Short_name: "후야",
      Age: "2000세 이상",
      Birth_date: "7월 7일",
      Height: "162.8cm",
      MBTI: "INFP",
      Species: "용",
      Fan_name: "바쿠",
      Hex: "#8166A1",
      Osimark: "💜🐲",
      Affiliation: "스텔라이브(1기 에버리스)",
      Debut: "2025년 09월 20일",
    },
  },
  {
    Hina: {
      Eng_name: "Shirayuki Hina",
      Kor_name: "시라유키 히나",
      Short_name: "히나",
      Age: "18세",
      Birth_date: "1월 5일",
      Height: "156cm",
      MBTI: "INFP",
      Species: "인간",
      Affiliation: "스텔라이브(2기 유니버스)",
      Fan_name: "해둥이",
      Debut: "2023년 06월 10일",
      Osimark: "🎀❄️",
      Hex: "#F2DCBF",
    },
  },
  {
    Mashiro: {
      Eng_name: "Neneko Mashiro",
      Kor_name: "네네코 마시로",
      Short_name: "마시로",
      Age: "2세",
      Birth_date: "2월 22일",
      Height: "160cm",
      MBTI: "INFJ-A",
      Species: "고양이",
      Affiliation: "스텔라이브(2기 유니버스)",
      Fan_name: "마로",
      Debut: "2023년 06월 10일",
      Osimark: "🧇🥛",
      Hex: "#25282A",
    },
  },
  {
    Lize: {
      Eng_name: "Akane Lize",
      Kor_name: "아카네 리제",
      Short_name: "리제",
      Age: "700세",
      Birth_date: "10월 1일",
      Height: "165cm",
      MBTI: "ISTJ",
      Species: "혼혈 뱀파이어",
      Affiliation: "스텔라이브(2기 유니버스)",
      Fan_name: "피엔나",
      Debut: "2023년 06월 11일",
      Osimark: "🍷🩸",
      Hex: "#971B2F",
    },
  },
  {
    Tabi: {
      Eng_name: "Arahashi Tabi",
      Kor_name: "아라하시 타비",
      Short_name: "타비",
      Age: "16세",
      Birth_date: "9월 7일",
      Height: "150cm",
      MBTI: "INFJ",
      Affiliation: "스텔라이브(2기 유니버스)",
      Species: "이세계인",
      Fan_name: "뿡댕이",
      Debut: "2023년 06월 11일",
      Osimark: "🧭🌊",
      Hex: "#9ADAFF",
    },
  },
  {
    Shibuki: {
      Eng_name: "Tenko Shibuki",
      Kor_name: "텐코 시부키",
      Short_name: "시부키",
      Age: "1000세",
      Birth_date: "3월 21일",
      Height: "157cm",
      MBTI: "ISFP/ESFP",
      Affiliation: "스텔라이브(3기 클리셰)",
      Species: "여우신",
      Fan_name: "이나리",
      Debut: "2024년 05월 18일",
      Osimark: "⛩️🕹️",
      Hex: "#C2AFE6",
    },
  },
  {
    Rin: {
      Eng_name: "Aokumo Rin",
      Kor_name: "아오쿠모 린",
      Short_name: "린",
      Age: "(영원한)17세",
      Birth_date: "5월 3일",
      Height: "160cm",
      MBTI: "ISTP",
      Affiliation: "스텔라이브(3기 클리셰)",
      Species: "인간",
      Fan_name: "쿠리미",
      Debut: "2024년 05월 18일",
      Osimark: "☁️🛼",
      Hex: "#2B66C0",
    },
  },
  {
    nana: {
      Eng_name: "Hanako Nana",
      Kor_name: "하나코 나나",
      Short_name: "나나",
      Age: "불명",
      Birth_date: "8월 7일",
      Height: "142cm",
      MBTI: "ENTP",
      Affiliation: "스텔라이브(3기 클리셰)",
      Species: "인간",
      Fan_name: "페토",
      Debut: "2024년 05월 19일",
      Osimark: "🔫🐰",
      Hex: "#DF7685",
    },
  },
  {
    riko: {
      Eng_name: "Yuzuha Riko",
      Kor_name: "유즈하 리코",
      Short_name: "리코",
      Age: "18세",
      Birth_date: "4월 13일",
      Height: "158cm",
      MBTI: "ESFP-T",
      Affiliation: "스텔라이브(3기 클리셰)",
      Species: "이세계인",
      Fan_name: "치코",
      Debut: "2024년 05월 19일",
      Osimark: "⚔️🍀",
      Hex: "#A6D0A6",
    },
  },
  {
    Toa: {
      Eng_name: "Shiuzuki Toa",
      Kor_name: "시즈키 토아",
      Short_name: "토아",
      Age: "19세",
      Birth_date: "11월 22일",
      Height: "157cm",
      MBTI: "",
      Affiliation: "스텔라이브(4기 어비스)",
      Species: "인간",
      Fan_name: "",
      Debut: "2026년 10월 17일",
      Osimark: "",
      Hex: "",
    },
  },
  {
    Rang: {
      Eng_name: "Kogane Rang",
      Kor_name: "코가네 랑",
      Short_name: "랑",
      Age: "500세",
      Birth_date: "8월 22일",
      Height: "145cm",
      MBTI: "",
      Affiliation: "스텔라이브(4기 어비스)",
      Species: "호랑이",
      Fan_name: "",
      Debut: "2026년 10월 17일",
      Osimark: "",
      Hex: "",
    },
  },
  {
    Hiyori: {
      Eng_name: "Hanayo Hiyori",
      Kor_name: "하나요 히요리",
      Short_name: "히요리",
      Age: "1300세",
      Birth_date: "3월 31일",
      Height: "161cm",
      MBTI: "",
      Affiliation: "스텔라이브(4기 어비스)",
      Species: "지박령",
      Fan_name: "",
      Debut: "2026년 10월 18일",
      Osimark: "",
      Hex: "",
    },
  },
  {
    Mary: {
      Eng_name: "Tokino Mary",
      Kor_name: "토키노 메리",
      Short_name: "메리",
      Age: "300세",
      Birth_date: "6월 13일",
      Height: "159cm",
      MBTI: "",
      Affiliation: "스텔라이브(4기 어비스)",
      Species: "저주인형",
      Fan_name: "",
      Debut: "2026년 10월 18일",
      Osimark: "",
      Hex: "",
    },
  },
];

export function Kanna($input) {
  if (!$input) {
    console.error("칸나의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[0].Kanna[$input];
  if (!info) {
    console.error(`칸나의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Yuni($input) {
  if (!$input) {
    console.error("유니의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[1].Yuni[$input];
  if (!info) {
    console.error(`유니의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Huya($input) {
  if (!$input) {
    console.error("후야의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[2].Huya[$input];
  if (!info) {
    console.error(`후야의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Hina($input) {
  if (!$input) {
    console.error("히나의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[3].Hina[$input];
  if (!info) {
    console.error(`히나의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Mashiro($input) {
  if (!$input) {
    console.error("마시로의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[4].Mashiro[$input];
  if (!info) {
    console.error(`마시로의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Lize($input) {
  if (!$input) {
    console.error("리제의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[5].Lize[$input];
  if (!info) {
    console.error(`리제의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Tabi($input) {
  if (!$input) {
    console.error("타비의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[6].Tabi[$input];
  if (!info) {
    console.error(`타비의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Shibuki($input) {
  if (!$input) {
    console.error("시부키의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[7].Shibuki[$input];
  if (!info) {
    console.error(`시부키의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Rin($input) {
  if (!$input) {
    console.error("린의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[8].Rin[$input];
  if (!info) {
    console.error(`린의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Nana($input) {
  if (!$input) {
    console.error("나나의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[9].nana[$input];
  if (!info) {
    console.error(`나나의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Riko($input) {
  if (!$input) {
    console.error("리코의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[10].riko[$input];
  if (!info) {
    console.error(`리코의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Toa($input) {
  if (!$input) {
    console.error("토아의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[11].Toa[$input];
  if (!info) {
    console.error(`토아의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Rang($input) {
  if (!$input) {
    console.error("랑의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[12].Rang[$input];
  if (!info) {
    console.error(`랑의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Hiyori($input) {
  if (!$input) {
    console.error("히요리의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[13].Hiyori[$input];
  if (!info) {
    console.error(`히요리의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}

export function Mary($input) {
  if (!$input) {
    console.error("메리의 정보를 조회하려면 조회할 항목을 입력해주세요.");
    return null;
  }
  const info = memberData[14].Mary[$input];
  if (!info) {
    console.error(`메리의 ${$input} 정보를 찾을 수 없습니다.`);
    return null;
  }
  return info;
}
export default {
  Kanna,
  Yuni,
  Huya,
  Hina,
  Mashiro,
  Lize,
  Tabi,
  Shibuki,
  Rin,
  Nana,
  Riko,
  Toa,
  Rang,
  Hiyori,
  Mary,
};
