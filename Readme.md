<img width="1049" height="579" alt="image" src="https://github.com/user-attachments/assets/d31ca96f-63c0-464d-b6ad-2432859d1a9a" />

🎬 AI-Manim Pipeline (OCR → Storyboard → Manim → Render)

AI-Manim Pipeline은 4개의 노드를 중심으로 PDF/이미지/텍스트 입력에서 Manim 영상을 자동 생성하고, 각 단계별 결과물을 수정·확인할 수 있는 노드 기반 시각화 파이프라인입니다.
UI는 React Flow를 활용하여 직관적인 노드 연결과 출력 노드를 강조합니다.

🧩 노드 구조

Node 1: 입력 (OCR)

입력: PDF, 이미지, 텍스트

처리: OpenAI API OCR

출력: 추출된 텍스트

Node 2: 스토리보드 생성

입력: Node 1 결과

처리: OpenAI API 스토리보드 생성

출력: 장면별 시나리오

Node 3: Manim 코드 생성

입력: Node 2 결과

처리: OpenAI API 기반 Manim 코드 자동 생성

출력: Python 코드

Node 4: 영상 랜더링 출력

입력: Node 1~3 연결

처리: Manim 렌더링 → 최종 영상 출력

특징: 크기가 큰 메인 출력 노드

✍️ 편집 & 랜더링 기능
기능

각 노드별 생성물(OCR 텍스트 / 스토리보드 / Manim 코드)을 사용자가 직접 타이핑 수정 가능

최종 영상 결과물을 시청 가능

구현 옵션

오른쪽 고정 창: 노드별 탭 전환으로 수정 (관리성 ↑, 직관성 ↓)

노드 클릭형: 클릭 시 해당 노드의 생성물 표시 (직관성 ↑, 비교 ↓)

하이브리드형 (추천):

기본은 오른쪽 고정 편집창

노드 클릭 시 해당 생성물 활성화

영상 결과물 뷰어

하단 전용 뷰어 (추천): 편집창은 텍스트, 하단은 영상 전용 플레이어

보조 옵션: 오른쪽 창 최상단/최하단 썸네일 배치

🎨 UI/UX 설계 (React Flow)

캔버스 기능

노드 드래그/드롭 & 자유로운 선 연결

Zoom In/Out 지원

Make.com과 유사한 워크플로우 경험

출력 노드 구조 (예시)

(Node 1)   (Node 2)   (Node 3) ---> (Node 4: 렌더링 출력)
   |          |          |             [영상 뷰어]


첨부 이미지 기반 예시

Node 4를 크게 두고, Node 1~3을 연결 (3→1 방식)

출력 노드가 중심, 사전 단계 노드는 보조

⚙️ 개발 원칙

MVP 최소 기능 우선

OCR → 스토리보드 → 코드 → 영상 확인

각 단계 수정 가능

영상 미리보기 지원

추가 제안 기능

LocalStorage 기반 버전 관리

Manim 코드 실행 오류 로그 표시

결과 다운로드 (텍스트/영상)

🚀 설치 & 실행
# 레포 클론
git clone https://github.com/<username>/ai-manim-pipeline.git
cd ai-manim-pipeline

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

📌 로드맵

 Node 1 OCR + 수정 UI

 Node 2 스토리보드 생성 + 수정 UI

 Node 3 Manim 코드 생성 + 수정 UI

 Node 4 영상 랜더링 출력 + 하단 뷰어

 React Flow 기반 노드 연결

 MVP 완성 후 버전 관리/로그 추가

📷 레이아웃 초안
 -----------------------------------------------------
|                   React Flow Canvas                 |
|   (Node 1)   (Node 2)   (Node 3)    --->  (Node 4)  |
|                                                   |
 -----------------------------------------------------
|              오른쪽 편집 창                        |
|   - OCR 결과 수정                                 |
|   - 스토리보드 수정                              |
|   - Manim 코드 수정                              |
 -----------------------------------------------------
|              하단 영상 뷰어                        |
 -----------------------------------------------------


👉 이 문서는 최초 기획 README이며, 개발이 진행됨에 따라 업데이트될 예정입니다.
