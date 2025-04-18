const dotenv = require("dotenv");
const { findUpSync } = require("find-up");
const { realpathSync, writeFileSync } = require("fs");

// .env 파일 탐색
const envFilePath = findUpSync(".env");
// 환경변수 파싱
const parsed = dotenv.config({ path: envFilePath }).parsed || {};
// public/env.js에 window._env 로 저장
const scriptFilePath = `${realpathSync(process.cwd())}/public/env.js`;
writeFileSync(scriptFilePath, `window._env = ${JSON.stringify(parsed)};`);

console.log("env file parsed. create window._env object...");
