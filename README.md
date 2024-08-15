<h1> BikeTracer </h1>

<h3> 서비스 이름 및 소개 </h3>



<br>


## 🔖 Naming Rules

- 일부 수정 예정
- component : **CamelCase**
    - 최상위 태그 : **-Layout**
    - 차상위 태그 : **-Container** >> **-Wrapper** >> **-Box**
- constant : **UPPER SAKE CASE**
- 변수 : **CamelCase**
- Interface
    - props : **PascalCase**
    - api response : **PascalCase**

<br>


## **🗂️ Commit Convention**

- `feat` : 새로운 기능 추가(기능 단위)
- `fix` : 버그 수정
- `chore` : 패키지 추가, 라이브러리, dependencies 설정, 셋팅 관련(빌드 스크립트, 패키지 변동사항)
- `docs` : 문서 수정(및 추가)
- `style` : 스타일 수정(코드 형식, 세미콜론 추가: 로직에 변화X)
- `refactor` : 코드 리팩토링
- `init` : 프로젝트 생성 후 첫 커밋
- `design` : CSS 등 사용자 UI 디자인 변경
- `move` : 파일 구조 변경, 파일 제거

### 예시
- 커밋 종류: 커밋 내용 ex) feat: 로그인 기능 구현


<br>

## 브랜치 전략

### 브랜치 종류
- `main`: 배포 버전 브랜치
- `dev`: 하나의 버전 단위에 해당함(feat에서 dev로 merge)
- `feat`: 기능 단위 개발 브랜치(dev로 merge 후 브랜치 삭제)


<br>
