interface Window {
  _env?: { [key: string]: string };
}

// 아래와 같이 환경변수의 key들을 strict하게 정의해줄 수도 있습니다.
// interface Window {
//   _env?: {
//     BACKEND_URL: string;
//     PRIVATE_KEY: string;
//   };
// }