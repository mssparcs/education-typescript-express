# 📌 개요
이 프로젝트는 TypeScript와 Express 교육을 위한 자료입니다.

테스트할 수 있는 **[프론트엔드 웹사이트](https://edu.techceo.kr/)** 를 제공합니다

웹사이트 상단의 Localhost 버튼 클릭 후, **[Short URL(URL 단축 서비스)](https://edu.techceo.kr/short-url)** 와 **[Live Clock(서버 시간을 알려주는 서비스)](https://edu.techceo.kr/live-clock)** 이 정상 작동하도록 **백엔드를 구축**하는 것이 학습 목표입니다.

`8.practice/backend/src/routes/short-url.ts`, `8.practice/backend/src/routes/live-clock.ts` 의 **코드**를 수정해주세요.

**[CRUD TEST](https://edu.techceo.kr/crud-test)** 에서 벡엔드 서버로 API 요청이 가능하며, 자세한 설명은 **[ppt](/slides.pdf)** 를 참조해주세요.


# 1. NVM 설치
NVM(Node Version Manager) 설치 방법은 **Linux**, **Mac**, **Windows** 별로 다릅니다.


## **1. Linux 및 Mac (공통)**
Linux와 Mac에서는 `curl` 또는 `wget`을 이용해서 NVM을 설치.

### **(1) NVM 설치**
#### **1) curl 이용**
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

#### **2) wget 이용**
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

> 최신 버전이 필요하면 [공식 NVM GitHub](https://github.com/nvm-sh/nvm)에서 버전을 확인하기.

---

### **(2) 설치 후 환경 변수 적용**
설치가 끝나면 `bashrc` 파일 또는 `zshrc` 파일에 아래 코드 추가해야함.
본인이 쓰는 터미널 창이 `bash`인지 `zsh` 확인할 것. 

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

이 설정을 적용하려면 터미널에서 아래 명령어를 실행:

```sh
source ~/.bashrc   # bash 사용 시
source ~/.zshrc    # zsh 사용 시
```

---

### **(3) NVM 설치 확인**
설치가 잘 되었는지 확인하려면 아래 명령어를 실행:

```sh
nvm --version
```

출력 예시:
```
0.40.2
```


## **2. Windows**
Windows에서는 공식적으로 `nvm-windows`를 사용해야함. (NVM과는 별개의 프로젝트)

### **(1) NVM for Windows 설치**
1. [NVM for Windows 공식 사이트](https://github.com/coreybutler/nvm-windows/releases)에서 최신 버전의 `nvm-setup.exe`를 다운로드.
2. `nvm-setup.exe` 실행 후 설치 진행.
3. 설치 후 명령 프롬프트(CMD) 또는 PowerShell을 새로 열고 `nvm version`을 입력하여 확인.

```sh
nvm version
```

출력 예시:
```
1.1.10
```

### **(2) NVM for Windows 주의사항**
- Windows에서는 설치된 Node.js를 전역(global)으로 사용하는 경우 충돌이 발생할 수 있으므로, 충돌 시 기존에 설치된 Node.js가 있다면 삭제 후 NVM을 사용.
- nvm 설치 시 경로에 한글이 있으면 설치가 안되는 현상 발생하므로 설치 경로에 한글 제외하기.
- nvm 명령어 사용 시 명령 프롬프트 창을 관리자 권한으로 열어야함.


---

## **3. Node.js 설치 및 사용**
```sh
nvm install 22   # Node.js 22 설치
nvm use 22      # 해당 터미널 세션에서 Node.js 22 버전 사용
nvm list         # 설치된 Node.js 버전 목록 확인
nvm alias default 22  # 새 터미널 열때 적용되는 Node.js 버전 설정
```
<!-- 
**(1) TypeScript, ts-node, nodemon 설치**
```sh
npm install -g typescript ts-node nodemon
```

**(2) ts-nodemon 설치** (TypeScript 파일을 실시간으로 실행)
```sh
npm install -g ts-nodemon
```

### 2️⃣ TypeScript 설정 (`tsconfig.json` 초기화)
```sh
tsc --init
```
이 명령어를 실행하면 `tsconfig.json`이 생성되며, TypeScript 컴파일러의 설정을 변경할 수 있습니다.

---

## 🛠️ 실행 방법

### 1️⃣ Python 실행
```sh
python python_code.py
```

### 2️⃣ JavaScript 실행
```sh
node javascript_code.js
```

### 3️⃣ TypeScript 실행
**(1) TypeScript 코드 컴파일 후 실행**
```sh
tsc typescript_code.ts  # TypeScript를 JavaScript로 변환
node typescript_code.js  # 변환된 JavaScript 실행
```

**(2) `ts-node`로 바로 실행** (컴파일 없이 실행 가능)
```sh
ts-node typescript_code.ts
```

---

## 🚀 자동 실행 (개발 중 편리하게 사용)

**(1) `nodemon`으로 JavaScript 실행 (파일 변경 시 자동 재실행)**
```sh
nodemon javascript_code.js
```

**(2) `ts-nodemon`으로 TypeScript 실행 (파일 변경 시 자동 재실행)**
```sh
ts-nodemon typescript_code.ts
```

---

## ✅ 실행 결과 비교
각 파일을 실행한 결과는 동일한 로직을 수행하며, 언어별 문법 차이만 존재합니다. 실행 후 출력 결과를 비교하면서 학습해보세요! 🎯



# 실행 방법 및 패키지 설치 가이드

## 📌 개요
이 프로젝트는 같은 로직을 **JavaScript, TypeScript, Python**으로 구현한 코드입니다. 각 파일을 실행한 결과는 유사하며, 다른 언어에서 동일한 동작을 확인할 수 있습니다.

## 🛠️ 실행 방법

### 1️⃣ JavaScript 실행
```sh
node javascript_code.js
```

### 2️⃣ TypeScript 실행
**(1) TypeScript 코드 컴파일 후 실행**
```sh
tsc typescript_code.ts  # TypeScript를 JavaScript로 변환
node typescript_code.js  # 변환된 JavaScript 실행
```

**(2) `ts-node`로 바로 실행** (컴파일 없이 실행 가능)
```sh
ts-node typescript_code.ts
```

### 3️⃣ Python 실행
```sh
python python_code.py
```

---

## 🔧 필수 패키지 설치

### 1️⃣ Node.js 및 패키지 설치
Node.js가 설치되어 있지 않다면 먼저 [Node.js 공식 웹사이트](https://nodejs.org/)에서 설치하세요.

**(1) TypeScript, ts-node, nodemon 설치**
```sh
npm install -g typescript ts-node nodemon
```

**(2) ts-nodemon 설치** (TypeScript 파일을 실시간으로 실행)
```sh
npm install -g ts-nodemon
```

### 2️⃣ TypeScript 설정 (`tsconfig.json` 초기화)
```sh
tsc --init
```
이 명령어를 실행하면 `tsconfig.json`이 생성되며, TypeScript 컴파일러의 설정을 변경할 수 있습니다.

---

## 🚀 자동 실행 (개발 중 편리하게 사용)

**(1) `nodemon`으로 JavaScript 실행 (파일 변경 시 자동 재실행)**
```sh
nodemon javascript_code.js
```

**(2) `ts-nodemon`으로 TypeScript 실행 (파일 변경 시 자동 재실행)**
```sh
ts-nodemon typescript_code.ts
```

---

## ✅ 실행 결과 비교
각 파일을 실행한 결과는 동일한 로직을 수행하며, 언어별 문법 차이만 존재합니다. 실행 후 출력 결과를 비교하면서 학습해보세요! 🎯

---

## ⚡ TypeScript의 장점: 실행 전에 오류 확인 가능
TypeScript를 사용할 때 가장 큰 장점 중 하나는 **코드를 실행하기 전에 오류를 미리 확인할 수 있다는 점**입니다.

```sh
tsc add_typescript.ts
```
이 명령어를 실행하면 **컴파일 과정에서 타입 오류를 먼저 확인**할 수 있습니다. 이는 JavaScript에서는 실행해야만 알 수 있는 오류를 사전에 방지하는 데 유용합니다.

예를 들어, 아래 코드 같은 경우 바로 실행이 됩니다.
```javascript
// add_javascript.js (JavaScript)
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 정상 출력: 15
console.log(add("5", 10)); // 🚨 문제 발생! 결과: "510" (문자열 결합됨)
```

아래 코드를 `tsc`로 컴파일하면 오류가 발생하고, **실행 전에 문제를 수정할 수 있습니다!** 🚀
```typescript
// add_typescript.ts (TypeScript)
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // 정상 출력: 15
console.log(add("5", 10)); // ❌ TypeScript 오류 발생 (잘못된 타입 전달 방지)
``` -->



