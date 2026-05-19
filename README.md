# Stelinfo
스텔라이브(StelLive) 멤버들의 프로필 정보를 함수 호출 한 줄로 간편하게 조회할 수 있는 바닐라 JS 라이브러리입니다.

---

## 📝 소개 (Introduction)
오로지 순수 팬심으로 개발되었습니다.

외부 개발자들이 일일이 데이터를 구축하거나 크롤링하는 번거로움 없이 2차 창작 개발에만 집중할 수 있도록 진입장벽을 낮추기 위해 배포되었습니다.

순수 바닐라 JS 환경으로 짜여 있어 Node.js 백엔드 환경은 물론 React, Vue, Vite, Next.js 등 모든 웹 브라우저 환경에서 에러 없이 안전하게 작동합니다.

---

## 👤 제작자 (Author)
* **개발자:** 개발하는피엔나 ([@Pn_nadeveloper](https://x.com/Pn_nadeveloper))
* **GitHub:** [pn-nadeveloper](https://github.com/pn-nadeveloper)
* **✉️:**  pn_nadeveloper@daum.net

---

## 🚀 설치 방법 (Installation)
```bash
npm install stelinfo
```

---


## 🛠️ 사용 방법 (Usage)

`stelinfo`는 ES 모듈 환경을 지원합니다.
사용자의 프로젝트에 맞춰 아래 방식을 참고하여 호출하세요.

**호출시 사용가능한 항목 목록**:
| Key(입력할 항목명) | 설명 | 예시 데이터 출력 |
| :-- | --- | :-- |
| Eng_name | 영문 이름 | **"Airi Kanna"**,**"Ayatsuno Yuni"** |
| Kor_name | 한국어 이름 | **"아이리 칸나"**,**"아야츠노 유니"** |
| Short_name | 짧은 이름 | **"리제"**,**"히나"** |
| Age | 나이 | **"1700세"**,**"4세"**,**"18세"** |
| Birth_date | 생일 | **"01월 05일"**,**"2월 22일"** |
| Height | 키 | **"155cm"**,**"160cm"**,**"165cm"** |
| MBTI | MBTI 유형 | **"INFP"**,**"INFJ-A"**,**"ISFP/ESFP"** |
| Species | 종족 | **"용"**,**"혼혈 유니콘"**,**"인간"** |
| Fan_name | 팬덤 이름 | **"해둥이"**,**"치코"**,**"쿠리미"** |
| Osimark | 오시마크(이모지) | **"☪️🤍"**,**"⛩️🕹️"**,**"🧭🌊"** |
| Hex | 퍼스널 컬러 | **"#DF7685"**,**"#A6D0A6"**,**"#25282A"** |
| Affiliation | 소속 및 기수정보 | **"스텔라이브(1기 에버리스)"**,**"스텔라이브(2기 유니버스)"**,**"스텔라이브(3기 클리셰)"** |
| Debut | 데뷔일 | **"2023년 01월 08일"**,**"2025년 09월 20일"**,**"2024년 05월 19일"** |

### 1. 특정 멤버 함수만 골라서 가져오기(Named Import)
라이브러리에서 제공하는 멤버 함수를 직접 불러와 사용합니다.

**지원되는 멤버** : 
| 멤버 이름 | |호출함수명 |
| :-- | --- |:-- |
| 아이리 칸나 | -> | Kanna|
| 아야츠노 유니 | -> | Yuni |
| 사키하네 후야 | -> | Huya |
| 시라유키 히나 | -> | Hina |
| 네네코 마시로 | -> | Mashiro |
| 아카네 리제 | -> | Lize |
| 아라하시 타비 | -> | Tabi |
| 텐코 시부키 | -> | Shibuki |
| 아오쿠모 린 | -> | Rin |
| 하나코 나나 | -> | Nana |
| 유즈하 리코 | -> | Riko |

</br>

함수 괄호 안에 조회하고 싶은 <strong>프로필 항목명(Key)</strong>을 문자열로 넣어서 호출하면 데이터가 반환됩니다.

```javascript
import { Kanna, Yuni, Huya, Hina, Mashiro, Lize, Tabi, Shibuki, Rin, Nana, Riko } from 'stelinfo';

// 예시: 함수 인자에 항목명을 넣어서 호출
console.log(Kanna('Kor_name'));    // 출력: 아이리 칸나
console.log(Yuni('MBTI'));         // 출력: ISTP
console.log(Huya('Age'));          // 출력: 2000세 이상
console.log(Shibuki('Species'));   // 출력: 여우신
console.log(Riko('Osimark'));      // 출력: ⚔️🍀
```

### 2. 라이브러리 전체로 가져오기 (Default Import)
모든 멤버 함수를 하나의 객체(Object)로 묶어서 가져옵니다.

지정한 변수명 뒤에 <strong>점(.)</strong>을 찍고 멤버 함수를 호출하는 방식입니다.

```javascript
import stellar from 'stelinfo';

// 예시: 객체.함수이름(호출할 값)
console.log(stellar.Lize('Fan_name')) // 출력: 피엔나
console.log(stellar.Hina('Hex'))      // 출력: #F2DCBF
console.log(stellar.Mashiro('Age'))   // 출력: 2세
```