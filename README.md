# Vite

## Vite 사용 이유

- 기존에는 콜드-스타트* 방식으로 개발 서버를 구동할 때, 번들러 기반의 도구의 경우 애플리케이션 내 모든 소스 코드에 대해 크롤링 및 빌드 작업을 마쳐야지만이 실제 페이지를 제공할 수 있음. (* 콜드-스타트: 최초로 실행되어 이전에 캐싱한 데이터가 없는 경우를 의미)
  - vite는 이 문제를 dependencies 그리고 source code 두 가지 카테고리로 나누어 개발 서버를 시작하도록 함으로써 해결.
- Dependencies: 개발 시 그 내용이 바뀌지 않을 일반적인(Plain) JavaScript 소스 코드. 기존 번들러로는 컴포넌트 라이브러리와 같이 몇 백 개의 JavaScript 모듈을 갖고 있는 매우 큰 디펜던시에 대한 번들링 과정이 매우 비효율적이었고 많은 시간을 필요로 했음.
  - Vite의 사전 번들링 기능은 Esbuild를 사용 --> Go로 작성된 Esbuild는 Webpack, Parcel과 같은 기존의 번들러 대비 10-100배 빠른 번들링 속도를 보임
- Source code: vite는 Native ESM을 이용해 소스 코드를 제공. (브라우저가 곧 번들러) vite는 그저 브라우저의 판단 아래 특정 모듈에 대한 소스 코드를 요청하면 이를 전달할 뿐. 조건부 동적 import 이후의 코드는 현재 화면에서 실제로 사용이 되어야만 처리가 됨.

---

## 참고자료

- [Vite 공식문서](https://vitejs-kr.github.io/guide/why.html)
