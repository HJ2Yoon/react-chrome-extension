# React Chrome Extension Boilerplate
크롬 확장프로그램 개발환경에서 리엑트와 타입스크립트를 사용하기 위해 세팅된 보일러 플레이트입니다.

<br>

## 📦 보일러 플레이트 구조 
```
src
├── background
│   └──  background.ts
├── contentScript
│   └──  contentScript.ts
├── options
│   └──  options.tsx
├── popup
│   └──  popup.tsx
├── static
│   ├──  icon.png
│   └──  manifest.json
├── styles   
└── utils
```

## 📂 static

> static 내부에 있는 파일들은 모두 dist 내부로 바로 복사됩니다.
<br>

## Development Build
```
npm start
``` 

## Production Build
```
npm run build
``` 

## 🎁 Getting Started
```
 git clone https://github.com/HJ2Yoon/react-chrome-extension.git ./
```
