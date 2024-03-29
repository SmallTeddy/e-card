
# '도박의 종말'을 모방한 E-Card 미니게임

[중국어 문서](./README_CN.md) | [영문 문서](../README.md) | [일본어 문서](./README_JP.md) | **한국어 문서**

## 개발 도구

| 도구 | 설명하다    | 공식 웹 사이트 |
| --- |-------| --- |
| icon | 상    | [https://icones.js.org/collection/all](https://icones.js.org/collection/all) |
| vueuse | 유틸리티 기능  | [https://vueuse.org/functions.html](https://vueuse.org/functions.html) |
| unocss | 원자화된 스타일 | [https://unocss.dev/interactive/](https://unocss.dev/interactive/) |
| grid | 그리드 레이아웃  | [https://cssgrid-generator.netlify.app/](https://cssgrid-generator.netlify.app/) |

## 할 일 목록

- [x] 레이아웃 및 기본 기능 버튼 개발
- [x] 손패 영역 구성 요소 개발
- [x] 검사 영역 구성 요소 개발
- [x] 대결 정보 구성 요소 개발
- [x] 대결 시작 구성 요소, 킹과 노예 중에서 무작위로 `1`개를 선택하여 플레이어의 시작 역할을 지정하고, 이후 역할은 21회 동안 롤링됩니다.
- [x] 버려진 카드 영역 구성 요소 개발, 카드가 없으면 점선 + 텍스트를 표시하고, 카드가 있을 경우 0° - 30°의 무작위 각도로 회전하여 쌓여서 표시됩니다.
- [x] 손패에서 카드를 선택하면 `check` 버튼이 표시됩니다.
- [x] `check` 버튼을 클릭하면 해당 카드가 손패에서 제거되고 검사 영역에 추가됩니다.
- [x] 카드는 `3D` 효과를 구현하여 `check` 후 뒤집어 검사 영역에 표시되며, 2초 후 검사 영역의 카드는 정면으로 뒤집어져 비교하고, 비교 후 버려진 카드 영역으로 이동합니다.
- [ ] 손패에서 검사 영역으로, 검사 영역에서 버려진 카드 영역으로의 구성 요소 간 애니메이션 효과
- [x] 킹 카드나 노예 카드가 낸 경우 대결이 종료됩니다.
- [x] 대결 정보를 정산하고 다음 대결을 시작합니다.
- [ ] 플레이어가 5회를 플레이한 후, 컴퓨터는 이전 5회 데이터와 이후 각 회차 데이터를 기반으로 플레이어의 카드 낸 전략을 분석하여 자신의 카드 낸 전략을 결정합니다.
- [x] 게임이 종료되면 대결 정보를 표시하고 게임을 다시 시작할 수 있습니다.
- [x] 메뉴에 게임 규칙 및 제작자 명단 버튼을 추가하고 해당 내용을 추가합니다.
- [x] 여러 언어 지원
- [ ] `web` 엔드 어댑트
- [ ] 적절한 배경 음악 추가 및 음악 재생
- [ ] 게임 난이도를 선택할 수 있으며 기본값은 중간입니다.

## 게임 미리보기

![menu](/gameImg/menu.png)

![explain](/gameImg/explain.png)

![role](/gameImg/role.png)

![gameInfo](/gameImg/gameinfo.png)

![choose](/gameImg/choose.png)

![changeBackGround](/gameImg/changeBackground.png)

![drop](/gameImg/drop.png)

![final](/gameImg/final.png)

![win](/gameImg/win.png)

![lose](/gameImg/lose.png)

![producer](/gameImg/producer.png)
