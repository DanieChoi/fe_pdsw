// // import { useState, useEffect, useCallback } from "react";
// // // import { ChevronUp, ChevronDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";
// // import { ChevronUp, ChevronDown, Trash } from "lucide-react"; // PanelLeftClose, PanelLeftOpen 대신 Trash로 변경

// // import { isEqual } from 'lodash';
// // import { useAuthStore, useMainStore } from '@/store';
// // import { Resizable } from "re-resizable";
// // import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
// // import { toast } from "react-toastify";

// // type FooterDataType = {
// //   time: string;
// //   type: string;
// //   message: string;
// // };

// // interface FooterProps {
// //   footerHeight: number;      // 열려 있을 때 푸터의 높이(px)
// //   startResizing?: () => void; // 드래그로 푸터 높이를 조절하기 위한 함수
// //   onToggleDrawer?: (isOpen: boolean) => void; // 부모 컴포넌트에 열림/닫힘 상태 전달
// //   onResizeHeight?: (height: number) => void; // 리사이즈된 높이를 부모 컴포넌트에 전달
// //   onResizeStart?: () => void; // 리사이즈 시작 이벤트
// //   onResizeEnd?: (height: number) => void; // 리사이즈 종료 이벤트 - height 매개변수 추가
// // }

// // export default function Footer({
// //   footerHeight,
// //   onToggleDrawer,
// //   onResizeHeight,
// //   onResizeStart,
// //   onResizeEnd
// // }: FooterProps) {
// //   const [isExpanded, setIsExpanded] = useState(false);   // D(1단) / W(2단) 모드 토글
// //   const [isDrawerOpen, setIsDrawerOpen] = useState(true); // 푸터 열기/닫기 토글
// //   const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
// //   const [currentHeight, setCurrentHeight] = useState(footerHeight);
// //   const { tenant_id, role_id } = useAuthStore();
// //   const { campaigns, setCampaigns } = useMainStore();

// //   // 부모 컴포넌트에 열림/닫힘 상태 변경 알림
// //   useEffect(() => {
// //     if (onToggleDrawer) {
// //       onToggleDrawer(isDrawerOpen);
// //     }
// //   }, [isDrawerOpen, onToggleDrawer]);

// //   const clearAllMessages = () => {
// //     setFooterDataList([]); // 모든 메시지 삭제
// //   };

// //   // 열기/닫기
// //   const toggleDrawer = () => {
// //     const newState = !isDrawerOpen;
// //     setIsDrawerOpen(newState);
// //     if (onToggleDrawer) {
// //       onToggleDrawer(newState);
// //     }
// //   };

// //   //캠페인 정보 조회 api 호출
// //   const { mutate: fetchMain } = useApiForMain({
// //     onSuccess: (data) => {
// //       setCampaigns(data.result_data);
// //     }
// //   });

// //   const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
// //     //시간.
// //     const today = new Date();
// //     const _time = String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(today.getSeconds()).padStart(2, '0');
// //     //타입.
// //     let _type = 'Event';
// //     if (kind === 'event') {
// //       _type = 'Event';
// //     } else if (kind === 'alram') {
// //       _type = 'Event';
// //     }
// //     //메시지.
// //     let _message = '';

// //     //운영설정>캠페인별 발신번호설정
// //     if (announce === '/pds/campaign/calling-number') {
// //       _message = '캠페인 : '
// //       if (command === 'INSERT') {
// //         _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 추가 성공';
// //       } else if (command === 'DELETE') {
// //         _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 삭제 성공';
// //       } else if (command === 'UPDATE') {
// //         _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 변경 성공';
// //       }
// //     }
// //     //장비 사용, 장비 사용중지
// //     else if (announce === 'dialing-device') {
// //       if (command === 'UPDATE' && data['device_status'] === 'run') {
// //         _message = 'CIDS 작동중';
// //         // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
// //         const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
// //           detail: {
// //             device_id: data['device_id'].toString(),
// //             device_status: 'run'
// //           }
// //         });
// //         window.dispatchEvent(deviceStatusEvent);
// //       } else if (command === 'UPDATE' && data['device_status'] === 'down') {
// //         _message = 'CIDS 작동중지';
// //         // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
// //         const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
// //           detail: {
// //             device_id: data['device_id'].toString(),
// //             device_status: 'down'
// //           }
// //         });
// //         window.dispatchEvent(deviceStatusEvent);
// //       }
// //     }
// //     //캠페인수정>콜페이싱 수정
// //     else if (announce === '/pds/campaign/dial-speed') {
// //       _message = '[콜페이싱] '
// //       if (command === 'UPDATE') {
// //         const tempCampaign = campaigns.find((campaign) => campaign.campaign_id === data['campaign_id']);
// //         if (tempCampaign && tempCampaign.dial_mode === 2) {
// //           _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'] * 2;
// //         } else {
// //           _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'];
// //         }
// //       }
// //     }
// //     //캠페인.
// //     else if (announce === '/pds/campaign') {
// //       _message = '캠페인 '
// //       let _start_flag = '';
// //       if (data['start_flag'] === 1) {
// //         _start_flag = '시작';
// //       } else if (data['start_flag'] === 2) {
// //         _start_flag = '멈춤';
// //       } else if (data['start_flag'] === 3) {
// //         _start_flag = '중지';
// //       }
// //       let _end_flag = '';
// //       if (data['end_flag'] === 1) {
// //         _end_flag = '진행중';
// //       } else if (data['end_flag'] === 2) {
// //         _end_flag = '완료';
// //       }
// //       if (command === 'INSERT') {
// //         _message += '추가, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
// //       } else if (command === 'UPDATE') {
// //         _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
// //       } else if (command === 'DELETE') {
// //         _message += '삭제, 캠페인 아이디 : ' + data['campaign_id'];
// //       }
// //       fetchMain({
// //         session_key: '',
// //         tenant_id: tenant_id,
// //       });
// //       if (data['start_flag'] === 3) {
// //         setFooterDataList((prev) => [
// //           {
// //             time: _time,
// //             type: _type,
// //             message: '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag
// //           },
// //           ...prev
// //         ]);

// //       }
// //     }
// //     //스킬.
// //     else if (announce === '/pds/skill/agent-list') {
// //       const tempAgentIdList = data['agent_id'];
// //       const _skillId = data['skill_id'];
// //       const tempFooterDataList: FooterDataType[] = [];
// //       for (let i = 0; i < tempAgentIdList.length; i++) {
// //         let __message = '[스킬 '
// //         if (command === 'UPDATE') {
// //           __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
// //         } else if (command === 'DELETE') {
// //           __message += '해제] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
// //         } else if (command === 'INSERT') {
// //           __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
// //         }
// //         tempFooterDataList.push({
// //           time: _time,
// //           type: _type,
// //           message: __message
// //         });
// //       }
// //       setFooterDataList((prev) => [
// //         ...tempFooterDataList,
// //         ...prev.slice(0, 9) // 상위 10개만 보이게.
// //       ]);

// //       _message = '';
// //     }
// //     //스킬편집
// //     else if (announce === '/pds/skill') {
// //       _message = '[스킬 '
// //       if (command === 'INSERT') {
// //         _message += '추가] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
// //       } else if (command === 'DELETE') {
// //         _message += '삭제] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
// //       } else if (command === 'UPDATE') {
// //         _message += '수정] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
// //       }
// //     }
// //     //캠페인 요구스킬 수정
// //     else if (announce === '/pds/campaign/skill') {
// //       _message = '캠페인 요구스킬 '
// //       if (command === 'UPDATE') {
// //         _message += '수정, 캠페인 아이디 : ' + data['campaign_id'];
// //       } else {
// //         _message = '';
// //       }
// //     }
// //     //상담원 자원 수정/삭제
// //     else if (announce === 'update-agent') {
// //       _message = '[상담원 자원 '
// //       if (command === 'UPDATE') {
// //         _message += '수정] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
// //       } else if (command === 'DELETE') {
// //         _message += '삭제] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
// //       }
// //     }
// //     //캠페인수정>동작시간 추가
// //     else if (announce === '/pds/campaign/schedule') {
// //       _message = '캠페인 스케쥴'
// //       if (command === 'INSERT') {
// //         _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'];
// //       } else {
// //         _message = '';
// //       }
// //     }
// //     //캠페인 동작상태 변경
// //     else if (announce === '/pds/campaign/status') {
// //       _message = '캠페인 동작상태 '
// //       if (command === 'UPDATE') {
// //         let _start_flag = '';
// //         if (data['campaign_status'] === 1) {
// //           _start_flag = '시작';
// //         } else if (data['campaign_status'] === 2) {
// //           _start_flag = '멈춤';
// //         } else if (data['campaign_status'] === 3) {
// //           _start_flag = '중지';
// //         }
// //         const tempCampaign = campaigns.filter((campaign) => campaign.campaign_id === Number(data['campaign_id']));
// //         _message += '변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + tempCampaign[0].campaign_name + ' , 동작상태 : ' + _start_flag + ' , 완료구분 : 진행중';
// //       }
// //     }
// //     if (_message !== '') {
// //       setFooterDataList((prev) => [
// //         {
// //           time: _time,
// //           type: _type,
// //           message: _message
// //         },
// //         ...prev.slice(0, 9) // 상위 10개만 보이게.
// //       ]);
// //     }
// //   }, [setFooterDataList]);

// //   // SSE 구독
// //   useEffect(() => {
// //     const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
// //     const eventSource = new EventSource(
// //       `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
// //     );

// //     let data: any = {};
// //     let announce = "";
// //     let command = "";
// //     let kind = "";

// //     eventSource.addEventListener("message", (event) => {
// //       //실시간 이벤트를 받아서 처리(함수로 처리하면 좋을 듯)
// //       console.log("footer sse event = ", event.data);
// //       if (event.data !== "Connected!!") {
// //         const tempEventData = JSON.parse(event.data);
// //         if (
// //           announce !== tempEventData["announce"] ||
// //           !isEqual(data, tempEventData.data) ||
// //           !isEqual(data, tempEventData["data"]) ||
// //           kind !== tempEventData["kind"]
// //         ) {
// //           announce = tempEventData["announce"];
// //           command = tempEventData["command"];
// //           data = tempEventData["data"];
// //           kind = tempEventData["kind"];

// //           footerDataSet(
// //             tempEventData["announce"],
// //             tempEventData["command"],
// //             tempEventData["data"],
// //             tempEventData["kind"],
// //             tempEventData
// //           );
// //         }
// //       }
// //     });
// //     return () => {
// //       eventSource.close();
// //     };
// //   }, [tenant_id, role_id]);

// //   // 높이 변경 핸들러
// //   const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
// //     const newHeight = currentHeight + d.height;
// //     setCurrentHeight(newHeight);

// //     if (onResizeHeight) {
// //       onResizeHeight(newHeight);
// //     }

// //     if (onResizeEnd) {
// //       onResizeEnd(newHeight); // 수정: 높이 값을 인자로 전달
// //     }
// //   };

// //   useEffect(() => {
// //     if (campaigns && campaigns.length === 0) {
// //       fetchMain({
// //         session_key: '',
// //         tenant_id: tenant_id,
// //       });
// //     }
// //   }, []);

// //   return (
// //     <Resizable
// //       size={{
// //         width: '100%',
// //         height: isDrawerOpen ? currentHeight : 32
// //       }}
// //       minHeight={100}
// //       maxHeight={500}
// //       enable={{
// //         top: isDrawerOpen,
// //         right: false,
// //         bottom: false,
// //         left: false,
// //         topRight: false,
// //         bottomRight: false,
// //         bottomLeft: false,
// //         topLeft: false
// //       }}
// //       className={`
// //         border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col duration-300 ease-in-out group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
// //         ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
// //       `}
// //       onResizeStart={onResizeStart}
// //       onResizeStop={handleResizeStop}
// //     >
// //       {/* 상단 바 영역 */}
// //       <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
// //         <span className="text-[13px] text-[#333]">현재 진행 상태</span>

// //         <div className="flex items-center gap-2">
// //           {/* 모드 전환 버튼 - 아이콘으로 변경 */}
// //           <button
// //             onClick={clearAllMessages}
// //             className="flex items-center"
// //             title="모든 알림 삭제"
// //           >
// //             <Trash className="w-4 h-4" />
// //           </button>

// //           {/* 열기/닫기 버튼 */}
// //           <button
// //             onClick={toggleDrawer}
// //             className=""
// //             title={isDrawerOpen ? "닫기" : "열기"}
// //           >
// //             {isDrawerOpen ? (
// //               <ChevronDown className="w-4 h-4" />
// //             ) : (
// //               <ChevronUp className="w-4 h-4" />
// //             )}
// //           </button>
// //         </div>
// //       </div>

// //       {/* 푸터 내부 콘텐츠: isDrawerOpen이 true일 때만 렌더링 */}
// //       {isDrawerOpen && (
// //         <div className="flex-1 flex overflow-hidden">
// //           {/* D(1단) -> w-full, W(2단) -> w-1/2 + 오른쪽 테이블 */}
// //           <div
// //             className={`
// //               ${isExpanded ? "w-1/2" : "w-full"}
// //               overflow-auto py-[7px] px-[20px]
// //               ${isExpanded ? "border-r" : ""}
// //             `}
// //           >
// //             <table className="w-full text-sm">
// //               <tbody>
// //                 {footerDataList.map((log, index) => (
// //                   <tr key={index}>
// //                     <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
// //                     <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
// //                     <td className="text-[13px]">{log.message}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* 2단(W) 모드일 때만 오른쪽 테이블 표시 */}
// //           {isExpanded && (
// //             <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
// //               <table className="w-full text-sm">
// //                 <tbody>
// //                   {footerDataList.map((log, index) => (
// //                     <tr key={index}>
// //                       <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
// //                       <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
// //                       <td className="text-[13px]">{log.message}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </Resizable>
// //   );
// // }

// import { useState, useEffect, useCallback } from "react";
// import { ChevronUp, ChevronDown, Trash } from "lucide-react";
// import { isEqual } from 'lodash';
// import { useAuthStore, useMainStore } from '@/store';
// import { Resizable } from "re-resizable";
// import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
// import { toast } from "react-toastify";
// import { useEnvironmentStore } from "@/store/environmentStore";

// type FooterDataType = {
//   time: string;
//   type: string;
//   message: string;
// };

// interface FooterProps {
//   footerHeight: number;
//   startResizing?: () => void;
//   onToggleDrawer?: (isOpen: boolean) => void;
//   onResizeHeight?: (height: number) => void;
//   onResizeStart?: () => void;
//   onResizeEnd?: (height: number) => void;
// }

// export default function Footer({
//   footerHeight,
//   onToggleDrawer,
//   onResizeHeight,
//   onResizeStart,
//   onResizeEnd
// }: FooterProps) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
//   const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
//   const [currentHeight, setCurrentHeight] = useState(footerHeight);
//   const { tenant_id, role_id } = useAuthStore();
//   const { campaigns, setCampaigns } = useMainStore();
//   const { useAlramPopup } = useEnvironmentStore(); // Get useAlramPopup value

//   // 부모 컴포넌트에 열림/닫힘 상태 변경 알림
//   useEffect(() => {
//     if (onToggleDrawer) {
//       onToggleDrawer(isDrawerOpen);
//     }
//   }, [isDrawerOpen, onToggleDrawer]);

//   const clearAllMessages = () => {
//     setFooterDataList([]);
//   };

//   // 열기/닫기
//   const toggleDrawer = () => {
//     const newState = !isDrawerOpen;
//     setIsDrawerOpen(newState);
//     if (onToggleDrawer) {
//       onToggleDrawer(newState);
//     }
//   };

//   //캠페인 정보 조회 api 호출
//   const { mutate: fetchMain } = useApiForMain({
//     onSuccess: (data) => {
//       setCampaigns(data.result_data);
//     }
//   });

//   const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
//     //시간.
//     const today = new Date();
//     const _time = String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(today.getSeconds()).padStart(2, '0');
//     //타입.
//     let _type = 'Event';
//     if (kind === 'event') {
//       _type = 'Event';
//     } else if (kind === 'alram') {
//       _type = 'Event';
//     }
//     //메시지.
//     let _message = '';

//     //운영설정>캠페인별 발신번호설정
//     if (announce === '/pds/campaign/calling-number') {
//       _message = '캠페인 : '
//       if (command === 'INSERT') {
//         _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 추가 성공';
//       } else if (command === 'DELETE') {
//         _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 삭제 성공';
//       } else if (command === 'UPDATE') {
//         _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 변경 성공';
//       }
//     }
//     //장비 사용, 장비 사용중지
//     else if (announce === 'dialing-device') {
//       if (command === 'UPDATE' && data['device_status'] === 'run') {
//         _message = 'CIDS 작동중';
//         // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
//         const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
//           detail: {
//             device_id: data['device_id'].toString(),
//             device_status: 'run'
//           }
//         });
//         window.dispatchEvent(deviceStatusEvent);
//       } else if (command === 'UPDATE' && data['device_status'] === 'down') {
//         _message = 'CIDS 작동중지';
//         // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
//         const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
//           detail: {
//             device_id: data['device_id'].toString(),
//             device_status: 'down'
//           }
//         });
//         window.dispatchEvent(deviceStatusEvent);
//       }
//     }
//     //캠페인수정>콜페이싱 수정
//     else if (announce === '/pds/campaign/dial-speed') {
//       _message = '[콜페이싱] '
//       if (command === 'UPDATE') {
//         const tempCampaign = campaigns.find((campaign) => campaign.campaign_id === data['campaign_id']);
//         if (tempCampaign && tempCampaign.dial_mode === 2) {
//           _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'] * 2;
//         } else {
//           _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'];
//         }
//       }
//     }
//     //캠페인.
//     else if (announce === '/pds/campaign') {
//       _message = '캠페인 '
//       let _start_flag = '';
//       if (data['start_flag'] === 1) {
//         _start_flag = '시작';
//       } else if (data['start_flag'] === 2) {
//         _start_flag = '멈춤';
//       } else if (data['start_flag'] === 3) {
//         _start_flag = '중지';
//       }
//       let _end_flag = '';
//       if (data['end_flag'] === 1) {
//         _end_flag = '진행중';
//       } else if (data['end_flag'] === 2) {
//         _end_flag = '완료';
//       }
//       if (command === 'INSERT') {
//         _message += '추가, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
//       } else if (command === 'UPDATE') {
//         _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
//       } else if (command === 'DELETE') {
//         _message += '삭제, 캠페인 아이디 : ' + data['campaign_id'];
//       }
//       fetchMain({
//         session_key: '',
//         tenant_id: tenant_id,
//       });
//       if (data['start_flag'] === 3) {
//         setFooterDataList((prev) => [
//           {
//             time: _time,
//             type: _type,
//             message: '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag
//           },
//           ...prev
//         ]);

//         // Toast 알림 처리 - useAlramPopup이 1일 경우에만
//         if (useAlramPopup === 1) {
//           // alert("여기 실행1");
//           setFooterDataList((prev) => [
//             {
//               time: _time,
//               type: _type,
//               message: '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag
//             },
//             ...prev
//           ]);

//           toast.info('캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag, {
//             position: "bottom-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "square-toast"
//           });
//         }
//       }
//     }
//     //스킬.
//     else if (announce === '/pds/skill/agent-list') {
//       const tempAgentIdList = data['agent_id'];
//       const _skillId = data['skill_id'];
//       const tempFooterDataList: FooterDataType[] = [];
//       for (let i = 0; i < tempAgentIdList.length; i++) {
//         let __message = '[스킬 '
//         if (command === 'UPDATE') {
//           __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
//         } else if (command === 'DELETE') {
//           __message += '해제] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
//         } else if (command === 'INSERT') {
//           __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
//         }
//         tempFooterDataList.push({
//           time: _time,
//           type: _type,
//           message: __message
//         });
//       }
//       setFooterDataList((prev) => [
//         ...tempFooterDataList,
//         ...prev.slice(0, 9) // 상위 10개만 보이게.
//       ]);

//       // alert("여기 실행3 : "+ useAlramPopup);
//       // Toast 알림 처리 - useAlramPopup이 1일 경우에만
//       if (useAlramPopup === 1) {
//         // alert("여기 실행2");
//         setFooterDataList((prev) => [
//           ...tempFooterDataList,
//           ...prev.slice(0, 9) // 상위 10개만 보이게.
//         ]);

//         // 한 번의 알림으로 모든 상담원 정보 요약해서 표시
//         const actionType = command === 'UPDATE' || command === 'INSERT' ? '추가' : '해제';
//         const toastMessage = `[스킬 ${actionType}] 스킬 아이디 : ${_skillId}, ${tempAgentIdList.length}명의 상담원 변경됨`;

//         toast.info(toastMessage, {
//           position: "bottom-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "square-toast"
//         });
//       }

//       _message = '';
//     }
//     //스킬편집
//     else if (announce === '/pds/skill') {
//       _message = '[스킬 '
//       if (command === 'INSERT') {
//         _message += '추가] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
//       } else if (command === 'DELETE') {
//         _message += '삭제] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
//       } else if (command === 'UPDATE') {
//         _message += '수정] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
//       }
//     }
//     //캠페인 요구스킬 수정
//     else if (announce === '/pds/campaign/skill') {
//       _message = '캠페인 요구스킬 '
//       if (command === 'UPDATE') {
//         _message += '수정, 캠페인 아이디 : ' + data['campaign_id'];
//       } else {
//         _message = '';
//       }
//     }
//     //상담원 자원 수정/삭제
//     else if (announce === 'update-agent') {
//       _message = '[상담원 자원 '
//       if (command === 'UPDATE') {
//         _message += '수정] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
//       } else if (command === 'DELETE') {
//         _message += '삭제] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
//       }
//     }
//     //캠페인수정>동작시간 추가
//     else if (announce === '/pds/campaign/schedule') {
//       _message = '캠페인 스케쥴'
//       if (command === 'INSERT') {
//         _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'];
//       } else {
//         _message = '';
//       }
//     }
//     //캠페인 동작상태 변경
//     else if (announce === '/pds/campaign/status') {
//       _message = '캠페인 동작상태 '
//       if (command === 'UPDATE') {
//         let _start_flag = '';
//         if (data['campaign_status'] === 1) {
//           _start_flag = '시작';
//         } else if (data['campaign_status'] === 2) {
//           _start_flag = '멈춤';
//         } else if (data['campaign_status'] === 3) {
//           _start_flag = '중지';
//         }
//         const tempCampaign = campaigns.filter((campaign) => campaign.campaign_id === Number(data['campaign_id']));
//         _message += '변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + tempCampaign[0].campaign_name + ' , 동작상태 : ' + _start_flag + ' , 완료구분 : 진행중';
//       }
//     }
//     if (_message !== '') {
//       setFooterDataList((prev) => [
//         {
//           time: _time,
//           type: _type,
//           message: _message
//         },
//         ...prev.slice(0, 9) // 상위 10개만 보이게.
//       ]);
//     }
//   }, [campaigns, setFooterDataList, useAlramPopup, tenant_id]);

//   // SSE 구독
//   useEffect(() => {
//     const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
//     const eventSource = new EventSource(
//       `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
//     );

//     let data: any = {};
//     let announce = "";
//     let command = "";
//     let kind = "";

//     eventSource.addEventListener("message", (event) => {
//       console.log("footer sse event = ", event.data);
//       if (event.data !== "Connected!!") {
//         const tempEventData = JSON.parse(event.data);
//         if (
//           announce !== tempEventData["announce"] ||
//           !isEqual(data, tempEventData.data) ||
//           !isEqual(data, tempEventData["data"]) ||
//           kind !== tempEventData["kind"]
//         ) {
//           announce = tempEventData["announce"];
//           command = tempEventData["command"];
//           data = tempEventData["data"];
//           kind = tempEventData["kind"];

//           footerDataSet(
//             tempEventData["announce"],
//             tempEventData["command"],
//             tempEventData["data"],
//             tempEventData["kind"],
//             tempEventData
//           );
//         }
//       }
//     });
//     return () => {
//       eventSource.close();
//     };
//   }, [tenant_id, role_id, footerDataSet]);

//   // 높이 변경 핸들러
//   const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
//     const newHeight = currentHeight + d.height;
//     setCurrentHeight(newHeight);

//     if (onResizeHeight) {
//       onResizeHeight(newHeight);
//     }

//     if (onResizeEnd) {
//       onResizeEnd(newHeight);
//     }
//   };

//   useEffect(() => {
//     if (campaigns && campaigns.length === 0) {
//       fetchMain({
//         session_key: '',
//         tenant_id: tenant_id,
//       });
//     }
//   }, [campaigns, fetchMain, tenant_id]);

//   return (
//     <Resizable
//       size={{
//         width: '100%',
//         height: isDrawerOpen ? currentHeight : 32
//       }}
//       minHeight={100}
//       maxHeight={500}
//       enable={{
//         top: isDrawerOpen,
//         right: false,
//         bottom: false,
//         left: false,
//         topRight: false,
//         bottomRight: false,
//         bottomLeft: false,
//         topLeft: false
//       }}
//       className={`
//         border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col duration-300 ease-in-out group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
//         ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
//       `}
//       onResizeStart={onResizeStart}
//       onResizeStop={handleResizeStop}
//     >
//       {/* 상단 바 영역 */}
//       <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
//         <span className="text-[13px] text-[#333]">현재 진행 상태</span>

//         <div className="flex items-center gap-2">
//           {/* 모든 알림 삭제 버튼 */}
//           <button
//             onClick={clearAllMessages}
//             className="flex items-center"
//             title="모든 알림 삭제"
//           >
//             <Trash className="w-4 h-4" />
//           </button>

//           {/* 열기/닫기 버튼 */}
//           <button
//             onClick={toggleDrawer}
//             className=""
//             title={isDrawerOpen ? "닫기" : "열기"}
//           >
//             {isDrawerOpen ? (
//               <ChevronDown className="w-4 h-4" />
//             ) : (
//               <ChevronUp className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* 푸터 내부 콘텐츠: isDrawerOpen이 true일 때만 렌더링 */}
//       {isDrawerOpen && (
//         <div className="flex-1 flex overflow-hidden">
//           {/* D(1단) -> w-full, W(2단) -> w-1/2 + 오른쪽 테이블 */}
//           <div
//             className={`
//               ${isExpanded ? "w-1/2" : "w-full"}
//               overflow-auto py-[7px] px-[20px]
//               ${isExpanded ? "border-r" : ""}
//             `}
//           >
//             <table className="w-full text-sm">
//               <tbody>
//                 {footerDataList.map((log, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                     <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
//                     <td className="text-[13px]">{log.message}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* 2단(W) 모드일 때만 오른쪽 테이블 표시 */}
//           {isExpanded && (
//             <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
//               <table className="w-full text-sm">
//                 <tbody>
//                   {footerDataList.map((log, index) => (
//                     <tr key={index}>
//                       <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                       <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
//                       <td className="text-[13px]">{log.message}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </Resizable>
//   );
// }

import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, Trash } from "lucide-react";
import { isEqual } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { Resizable } from "re-resizable";
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useEnvironmentStore } from "@/store/environmentStore";
// Headless UI 토스트 가져오기
import { initToasts, toast } from './CustomToast';

type FooterDataType = {
  time: string;
  type: string;
  message: string;
};

interface FooterProps {
  footerHeight: number;
  startResizing?: () => void;
  onToggleDrawer?: (isOpen: boolean) => void;
  onResizeHeight?: (height: number) => void;
  onResizeStart?: () => void;
  onResizeEnd?: (height: number) => void;
}

// NEXPOS 테마 색상 - 애플리케이션 테마에 맞게 지정
const themeColors = {
  primary: {
    bgColor: 'bg-[#5BC2C1]',
    gradientFrom: 'from-[#5BC2C1]',
    gradientTo: 'to-[#4A9E9D]',
    textColor: 'text-white'
  },
  secondary: {
    bgColor: 'bg-[#4A90E2]',
    gradientFrom: 'from-[#5A9FE8]',
    gradientTo: 'to-[#3A80D2]',
    textColor: 'text-white'
  },
  event: {
    bgColor: 'bg-[#4A90E2]', // 푸른색 계열로 변경
    gradientFrom: 'from-[#5A9FE8]',
    gradientTo: 'to-[#3A80D2]',
    textColor: 'text-white'
  }
};

export default function Footer({
  footerHeight,
  onToggleDrawer,
  onResizeHeight,
  onResizeStart,
  onResizeEnd
}: FooterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
  const [currentHeight, setCurrentHeight] = useState(footerHeight);
  const { tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();
  const { useAlramPopup } = useEnvironmentStore(); // Get useAlramPopup value

  useEffect(() => {
    // 컴포넌트 마운트 시 토스트 초기화 확인
    const toastContainer = document.getElementById('headless-toast-container');
    if (!toastContainer) {
      // 토스트 컨테이너가 없으면 초기화
      initToasts();
    }
  }, []);

  // 부모 컴포넌트에 열림/닫힘 상태 변경 알림
  useEffect(() => {
    if (onToggleDrawer) {
      onToggleDrawer(isDrawerOpen);
    }
  }, [isDrawerOpen, onToggleDrawer]);

  const clearAllMessages = () => {
    setFooterDataList([]);
  };

  // 열기/닫기
  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    if (onToggleDrawer) {
      onToggleDrawer(newState);
    }
  };

  //캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });

  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
    //시간.
    const today = new Date();
    const _time = String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(today.getSeconds()).padStart(2, '0');
    //타입.
    let _type = 'Event';
    if (kind === 'event') {
      _type = 'Event';
    } else if (kind === 'alram') {
      _type = 'Event';
    }
    //메시지.
    let _message = '';

    //운영설정>캠페인별 발신번호설정
    if (announce === '/pds/campaign/calling-number') {
      _message = '캠페인 : '
      if (command === 'INSERT') {
        _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 추가 성공';
      } else if (command === 'DELETE') {
        _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 삭제 성공';
      } else if (command === 'UPDATE') {
        _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 변경 성공';
      }
    }
    //장비 사용, 장비 사용중지
    else if (announce === 'dialing-device') {
      if (command === 'UPDATE' && data['device_status'] === 'run') {
        _message = 'CIDS 작동중';
        // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
        const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
          detail: {
            device_id: data['device_id'].toString(),
            device_status: 'run'
          }
        });
        window.dispatchEvent(deviceStatusEvent);
      } else if (command === 'UPDATE' && data['device_status'] === 'down') {
        _message = 'CIDS 작동중지';
        // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
        const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
          detail: {
            device_id: data['device_id'].toString(),
            device_status: 'down'
          }
        });
        window.dispatchEvent(deviceStatusEvent);
      }
    }
    //캠페인수정>콜페이싱 수정
    else if (announce === '/pds/campaign/dial-speed') {
      _message = '[콜페이싱] '
      if (command === 'UPDATE') {
        const tempCampaign = campaigns.find((campaign) => campaign.campaign_id === data['campaign_id']);
        if (tempCampaign && tempCampaign.dial_mode === 2) {
          _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'] * 2;
        } else {
          _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'];
        }
      }
    }
    //캠페인.
    else if (announce === '/pds/campaign') {
      _message = '캠페인 '
      let _start_flag = '';
      if (data['start_flag'] === 1) {
        _start_flag = '시작';
      } else if (data['start_flag'] === 2) {
        _start_flag = '멈춤';
      } else if (data['start_flag'] === 3) {
        _start_flag = '중지';
      }
      let _end_flag = '';
      if (data['end_flag'] === 1) {
        _end_flag = '진행중';
      } else if (data['end_flag'] === 2) {
        _end_flag = '완료';
      }
      if (command === 'INSERT') {
        _message += '추가, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
      } else if (command === 'UPDATE') {
        _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
      } else if (command === 'DELETE') {
        _message += '삭제, 캠페인 아이디 : ' + data['campaign_id'];
      }
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
      if (data['start_flag'] === 3) {
        setFooterDataList((prev) => [
          {
            time: _time,
            type: _type,
            message: '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag
          },
          ...prev
        ]);

        // Toast 알림 처리 - useAlramPopup이 1일 경우에만
        if (useAlramPopup === 1) {
          // 푸른색 계열의 이벤트 토스트 표시
          // toast.event(
          //   // '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + 
          //   ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag ,
          //   // + ', 완료구분 : ' + _end_flag,
          //   {
          //     colors: themeColors.event
          //   }
          // );

          toast.event(
            ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag,
            {
              colors: themeColors.event
            }
          );

        }
      }
    }
    //스킬.
    else if (announce === '/pds/skill/agent-list') {
      const tempAgentIdList = data['agent_id'];
      const _skillId = data['skill_id'];
      const tempFooterDataList: FooterDataType[] = [];
      for (let i = 0; i < tempAgentIdList.length; i++) {
        let __message = '[스킬 '
        if (command === 'UPDATE') {
          __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
        } else if (command === 'DELETE') {
          __message += '해제] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
        } else if (command === 'INSERT') {
          __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
        }
        tempFooterDataList.push({
          time: _time,
          type: _type,
          message: __message
        });
      }
      setFooterDataList((prev) => [
        ...tempFooterDataList,
        ...prev.slice(0, 9) // 상위 10개만 보이게.
      ]);

      // Toast 알림 처리 - useAlramPopup이 1일 경우에만
      if (useAlramPopup === 1) {
        // 한 번의 알림으로 모든 상담원 정보 요약해서 표시
        const actionType = command === 'UPDATE' || command === 'INSERT' ? '추가' : '해제';
        const toastMessage = `[스킬 ${actionType}] 스킬 아이디 : ${_skillId}\n${tempAgentIdList.length}명의 상담원 변경됨`;


        toast.event(
          toastMessage,
          {
            colors: themeColors.event
          });
      }

      _message = '';
    }
    //스킬편집
    else if (announce === '/pds/skill') {
      _message = '[스킬 '
      if (command === 'INSERT') {
        _message += '추가] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      } else if (command === 'DELETE') {
        _message += '삭제] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      } else if (command === 'UPDATE') {
        _message += '수정] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      }
    }
    //캠페인 요구스킬 수정
    else if (announce === '/pds/campaign/skill') {
      _message = '캠페인 요구스킬 '
      if (command === 'UPDATE') {
        _message += '수정, 캠페인 아이디 : ' + data['campaign_id'];
      } else {
        _message = '';
      }
    }
    //상담원 자원 수정/삭제
    else if (announce === 'update-agent') {
      _message = '[상담원 자원 '
      if (command === 'UPDATE') {
        _message += '수정] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
      } else if (command === 'DELETE') {
        _message += '삭제] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
      }
    }
    //캠페인수정>동작시간 추가
    else if (announce === '/pds/campaign/schedule') {
      _message = '캠페인 스케쥴'
      if (command === 'INSERT') {
        _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'];
      } else {
        _message = '';
      }
    }
    //캠페인 동작상태 변경
    else if (announce === '/pds/campaign/status') {
      _message = '캠페인 동작상태 '
      if (command === 'UPDATE') {
        let _start_flag = '';
        if (data['campaign_status'] === 1) {
          _start_flag = '시작';
        } else if (data['campaign_status'] === 2) {
          _start_flag = '멈춤';
        } else if (data['campaign_status'] === 3) {
          _start_flag = '중지';
        }
        const tempCampaign = campaigns.filter((campaign) => campaign.campaign_id === Number(data['campaign_id']));
        _message += '변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + tempCampaign[0].campaign_name + ' , 동작상태 : ' + _start_flag + ' , 완료구분 : 진행중';
      }
    }
    if (_message !== '') {
      setFooterDataList((prev) => [
        {
          time: _time,
          type: _type,
          message: _message
        },
        ...prev.slice(0, 9) // 상위 10개만 보이게.
      ]);

      // Toast 알림 처리 - useAlramPopup이 1일 경우에만
      if (useAlramPopup === 1 && _message !== '') {

        let _start_flag = '';
        if (data['campaign_status'] === 1) {
          _start_flag = '시작';
        } else if (data['campaign_status'] === 2) {
          _start_flag = '멈춤';
        } else if (data['campaign_status'] === 3) {
          _start_flag = '중지';
        }

        const tempCampaign = campaigns.filter((campaign) => campaign.campaign_id === Number(data['campaign_id']));
        const toastMessage =
          `캠페인 이름 : ${tempCampaign[0].campaign_name}\n동작상태 : ${_start_flag}`;


        toast.event(toastMessage, {
          colors: themeColors.event
        });
      }
    }
  }, [campaigns, setFooterDataList, useAlramPopup, tenant_id, fetchMain]);

  // SSE 구독
  useEffect(() => {
    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const eventSource = new EventSource(
      `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
    );

    let data: any = {};
    let announce = "";
    let command = "";
    let kind = "";

    eventSource.addEventListener("message", (event) => {
      console.log("footer sse event = ", event.data);
      if (event.data !== "Connected!!") {
        const tempEventData = JSON.parse(event.data);
        if (
          announce !== tempEventData["announce"] ||
          !isEqual(data, tempEventData.data) ||
          !isEqual(data, tempEventData["data"]) ||
          kind !== tempEventData["kind"]
        ) {
          announce = tempEventData["announce"];
          command = tempEventData["command"];
          data = tempEventData["data"];
          kind = tempEventData["kind"];

          footerDataSet(
            tempEventData["announce"],
            tempEventData["command"],
            tempEventData["data"],
            tempEventData["kind"],
            tempEventData
          );
        }
      }
    });
    return () => {
      eventSource.close();
    };
  }, [tenant_id, role_id, footerDataSet]);

  // 높이 변경 핸들러
  const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
    const newHeight = currentHeight + d.height;
    setCurrentHeight(newHeight);

    if (onResizeHeight) {
      onResizeHeight(newHeight);
    }

    if (onResizeEnd) {
      onResizeEnd(newHeight);
    }
  };

  useEffect(() => {
    if (campaigns && campaigns.length === 0) {
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    }
  }, [campaigns, fetchMain, tenant_id]);

  return (
    <Resizable
      size={{
        width: '100%',
        height: isDrawerOpen ? currentHeight : 32
      }}
      minHeight={100}
      maxHeight={500}
      enable={{
        top: isDrawerOpen,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      }}
      className={`
        border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col duration-300 ease-in-out group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
        ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
      `}
      onResizeStart={onResizeStart}
      onResizeStop={handleResizeStop}
    >
      {/* 상단 바 영역 */}
      <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
        <span className="text-[13px] text-[#333]">현재 진행 상태</span>

        <div className="flex items-center gap-2">
          {/* 모든 알림 삭제 버튼 */}
          <button
            onClick={clearAllMessages}
            className="flex items-center"
            title="모든 알림 삭제"
          >
            <Trash className="w-4 h-4" />
          </button>

          {/* 열기/닫기 버튼 */}
          <button
            onClick={toggleDrawer}
            className=""
            title={isDrawerOpen ? "닫기" : "열기"}
          >
            {isDrawerOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* 푸터 내부 콘텐츠: isDrawerOpen이 true일 때만 렌더링 */}
      {isDrawerOpen && (
        <div className="flex-1 flex overflow-hidden">
          {/* D(1단) -> w-full, W(2단) -> w-1/2 + 오른쪽 테이블 */}
          <div
            className={`
              ${isExpanded ? "w-1/2" : "w-full"}
              overflow-auto py-[7px] px-[20px]
              ${isExpanded ? "border-r" : ""}
            `}
          >
            <table className="w-full text-sm">
              <tbody>
                {footerDataList.map((log, index) => (
                  <tr key={`left-${index}`}>
                    <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
                    <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
                    <td className="text-[13px]">{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 2단(W) 모드일 때만 오른쪽 테이블 표시 */}
          {isExpanded && (
            <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
              <table className="w-full text-sm">
                <tbody>
                  {footerDataList.map((log, index) => (
                    <tr key={`right-${index}`}>
                      <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
                      <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
                      <td className="text-[13px]">{log.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          )}
        </div>
      )}
    </Resizable>
  );
}