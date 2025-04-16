(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_main_comp_ca0701._.js", {

"[project]/src/app/main/comp/preferences/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PreferencesBoard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/table-custom.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonRadio/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomCheckbox/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/hooks/useApiForEnvironment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInputForTime$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInputForTime/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function PreferencesBoard({ onSubmit }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 환경설정 스토어에서 데이터 가져오기
    const { environmentData, setEnvironment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    // 사용자 인증 정보 가져오기
    const { id: userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // 알림 상태
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '1',
        onConfirm: {
            "PreferencesBoard.useState": ()=>{}
        }["PreferencesBoard.useState"],
        onCancel: {
            "PreferencesBoard.useState": ()=>{}
        }["PreferencesBoard.useState"]
    });
    // 상태 초기화 - 기본값 없이 environmentData에서만 가져오도록 수정
    const [refreshCycle, setRefreshCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [monitoringType, setMonitoringType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [retryCount, setRetryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeout, setCustomTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [endTime, setEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messageType, setMessageType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [personalCampaignAlertOnly, setPersonalCampaignAlertOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unusedWorkHoursCalc, setUnusedWorkHoursCalc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dayOfWeek, setDayOfWeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'f',
        'f',
        'f',
        'f',
        'f',
        'f',
        'f'
    ]);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const weekdays = [
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        '토'
    ];
    const { activeTabId, activeTabKey, removeTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    // 알림 유틸리티 함수
    const showAlert = (message)=>{
        setAlertState({
            isOpen: true,
            message,
            title: '알림',
            type: '2',
            onConfirm: closeAlert,
            onCancel: ()=>{}
        });
    };
    const closeAlert = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        closeCurrentTab();
    };
    const closeCurrentTab = ()=>{
        if (activeTabId !== null && activeTabKey !== null) {
            removeTab(activeTabId, activeTabKey);
        }
    };
    // 환경설정 수정 API 호출
    const { mutate: environmentSave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApirForEnvironmentSave"])({
        onSuccess: {
            "PreferencesBoard.useApirForEnvironmentSave": (data)=>{
                setIsSaving(false);
                showAlert('환경설정이 저장되었습니다');
                // 환경설정 스토어도 업데이트하여 UI 반영
                if (environmentData) {
                    const updatedData = {
                        ...environmentData,
                        campaignListAlram: monitoringType === "oneTime" ? 1 : 0,
                        statisticsUpdateCycle: parseInt(retryCount),
                        serverConnectionTime: parseInt(timeout),
                        showChannelCampaignDayScop: parseInt(refreshCycle),
                        personalCampaignAlertOnly: personalCampaignAlertOnly ? 1 : 0,
                        useAlramPopup: messageType === "알림만" ? 1 : 0,
                        unusedWorkHoursCalc: unusedWorkHoursCalc ? 1 : 0,
                        sendingWorkStartHours: startTime,
                        sendingWorkEndHours: endTime,
                        dayOfWeekSetting: dayOfWeek.join(',')
                    };
                    setEnvironment(updatedData);
                }
            }
        }["PreferencesBoard.useApirForEnvironmentSave"],
        onError: {
            "PreferencesBoard.useApirForEnvironmentSave": (error)=>{
                setIsSaving(false);
                showAlert(`환경설정 저장에 실패했습니다. ${error.message}`);
            }
        }["PreferencesBoard.useApirForEnvironmentSave"]
    });
    // 환경설정 데이터가 로드되면 상태 업데이트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PreferencesBoard.useEffect": ()=>{
            if (environmentData) {
                // 환경설정 데이터에서 값 설정
                setRefreshCycle(environmentData.showChannelCampaignDayScop?.toString() || "");
                setMonitoringType(environmentData.campaignListAlram === 1 ? "oneTime" : "periodic");
                setRetryCount(environmentData.statisticsUpdateCycle?.toString() || "");
                setCustomTimeout(environmentData.serverConnectionTime?.toString() || "");
                setPersonalCampaignAlertOnly(environmentData.personalCampaignAlertOnly === 1);
                setMessageType(environmentData.useAlramPopup === 1 ? "알림만" : "알림과 없음");
                setUnusedWorkHoursCalc(environmentData.unusedWorkHoursCalc === 1);
                setStartTime(environmentData.sendingWorkStartHours || "");
                setEndTime(environmentData.sendingWorkEndHours || "");
                // 요일 설정 파싱
                if (environmentData.dayOfWeekSetting) {
                    setDayOfWeek(environmentData.dayOfWeekSetting.split(','));
                }
            }
        }
    }["PreferencesBoard.useEffect"], [
        environmentData
    ]);
    // 요일 체크박스 변경 핸들러
    const handleDayChange = (index, checked)=>{
        const newDays = [
            ...dayOfWeek
        ];
        newDays[index] = checked ? 't' : 'f';
        setDayOfWeek(newDays);
    };
    const handleCancel = ()=>{
        closeCurrentTab();
    };
    // #### 유효한 시간 형식인지 확인 (4자리 문자열이고, 시는 00~23, 분은 00~59이어야 함)
    const isTimeFormatValid = (time)=>{
        if (time.length !== 4) return false;
        const hours = Number(time.substring(0, 2));
        const minutes = Number(time.substring(2, 4));
        if (isNaN(hours) || isNaN(minutes)) return false;
        if (hours < 0 || hours > 23) return false;
        if (minutes < 0 || minutes > 59) return false;
        return true;
    };
    // #### 추가적인 유효성 예시("1112"인 경우 무효)와 24시간 체제 확인
    const validateTime = (time)=>{
        // "1112"는 예시로 무효 처리
        if (time === "1112") return false;
        return isTimeFormatValid(time);
    };
    // 폼 제출 핸들러
    const handleSubmit = ()=>{
        if (!environmentData) {
            showAlert('환경설정 데이터를 불러올 수 없습니다.');
            return;
        }
        // #### 필수 입력 및 기본 유효성 검사
        if (startTime.length === 4 && endTime.length === 4) {
            // 24시간 범위를 벗어난 경우
            if (!isTimeFormatValid(startTime) || !isTimeFormatValid(endTime)) {
                setAlertState({
                    ...alertState,
                    isOpen: true,
                    message: "잘못된 시간 형식입니다. 00:00 ~ 23:59 범위 내 입력해 주세요."
                });
                return;
            }
            // #### 시작시간/종료시간 추가 유효성 검사 (예: "1112" 무효 처리)
            if (!validateTime(startTime) || !validateTime(endTime)) {
                setAlertState({
                    ...alertState,
                    isOpen: true,
                    message: "잘못된 시간입니다."
                });
                return;
            }
            // #### 시작시간이 종료시간보다 늦은 경우
            if (startTime > endTime) {
                setAlertState({
                    ...alertState,
                    isOpen: true,
                    message: "시작시간이 종료시간보다 늦을 수 없습니다."
                });
                return;
            }
            let check = false;
            if (startTime.replace(":", "") === startTime && endTime.replace(":", "") === endTime) {
                check = true;
            }
            if (!check) {
                setStartTime("");
                setEndTime("");
                return;
            }
        }
        setIsSaving(true);
        // API 요청을 위한 데이터 형식으로 변환
        const requestData = {
            employeeId: userId,
            campaignListAlram: monitoringType === "oneTime" ? 1 : 0,
            statisticsUpdateCycle: parseInt(retryCount) || environmentData.statisticsUpdateCycle,
            serverConnectionTime: parseInt(timeout) || environmentData.serverConnectionTime,
            showChannelCampaignDayScop: parseInt(refreshCycle) || environmentData.showChannelCampaignDayScop,
            personalCampaignAlertOnly: personalCampaignAlertOnly ? 1 : 0,
            useAlramPopup: messageType === "알림만" ? 1 : 0,
            unusedWorkHoursCalc: unusedWorkHoursCalc ? 1 : 0,
            sendingWorkStartHours: startTime || environmentData.sendingWorkStartHours,
            sendingWorkEndHours: endTime || environmentData.sendingWorkEndHours,
            dayOfWeekSetting: dayOfWeek.join(',')
        };
        // 환경설정 저장 API 호출
        environmentSave(requestData);
        // 상위 컴포넌트의 onSubmit이 있는 경우에도 호출
        if (onSubmit) {
            onSubmit(requestData);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full limit-width",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-col flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "화면표시"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                className: "text-[#333]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    className: "w-[12.5rem] !pt-[6px] !pb-[5px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-32",
                                                        children: "채널 할당 시 보여주는 캠페인"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "w-[17rem]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                                type: "number",
                                                                value: refreshCycle,
                                                                onChange: (e)=>setRefreshCycle(e.target.value),
                                                                className: "w-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "일(day)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "채널을 캠페인 모드로 할당 시 화면에 보여주는 캠페인의 범위를 선택합니다. 현재 날짜를 기준으로 설정한 값만큼의 범위안에서 캠페인을 보여줍니다."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    className: "w-[12.5rem] !py-[6px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-32",
                                                        children: "일람설정"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "w-[17rem]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadio"], {
                                                        value: monitoringType,
                                                        onValueChange: setMonitoringType,
                                                        className: "flex gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                        value: "oneTime",
                                                                        id: "oneTime"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: "oneTime",
                                                                        children: "한번만"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                        value: "periodic",
                                                                        id: "periodic"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: "periodic",
                                                                        children: "주기적으로 계속"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "캠페인 리스트 잔량 부족시의 알람모드를 설정합니다."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "통신"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                className: "text-[#333]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    className: "w-[12.5rem] !pt-[6px] !pb-[5px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-32",
                                                        children: "통계 갱신주기"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "w-[17rem]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                                type: "number",
                                                                value: retryCount,
                                                                onChange: (e)=>setRetryCount(e.target.value),
                                                                className: "w-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "초(sec)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "캠페인 통계를 서버로부터 가져오는 주기를 설정합니다.(권장 30~60초)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    className: "w-[12.5rem] !py-[6px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-32",
                                                        children: "서버 접속시간"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "w-[17rem]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                                type: "number",
                                                                value: timeout,
                                                                onChange: (e)=>setCustomTimeout(e.target.value),
                                                                className: "w-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "초(sec)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "서버와의 접속시간을 설정합니다."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm",
                                            children: "알림"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                    id: "notification-enable",
                                                    checked: personalCampaignAlertOnly,
                                                    onCheckedChange: (checked)=>setPersonalCampaignAlertOnly(checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "notification-enable",
                                                    className: "text-sm",
                                                    children: "본인 캠페인만 업링크 알림"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                className: "text-[#333]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                className: "w-[12.5rem] !py-[6px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "w-32",
                                                    children: "메세지 알림창"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "w-[17rem]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: messageType,
                                                        onValueChange: setMessageType,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "w-40",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "알림 설정"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "알림과 없음",
                                                                        children: "알리지 않음"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 391,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "알림만",
                                                                        children: "알림"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "주요 이벤트 알림창 알림을 설정합니다."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm",
                                            children: "캠페인 가능 업무시간"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                    id: "worktime-enable",
                                                    checked: unusedWorkHoursCalc,
                                                    onCheckedChange: (checked)=>setUnusedWorkHoursCalc(checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "worktime-enable",
                                                    className: "text-sm",
                                                    children: "업무시간 계산 미사용"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                className: "text-[#333]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    className: "w-[12.5rem] !pt-[6px] !pb-[5px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-32",
                                                        children: "발신업무시간"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "w-[17rem]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                children: "시작시간"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInputForTime$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: startTime,
                                                                onChange: (value)=>setStartTime(value),
                                                                className: "w-16",
                                                                disabled: unusedWorkHoursCalc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                children: "종료시간"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInputForTime$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: endTime,
                                                                onChange: (value)=>setEndTime(value),
                                                                className: "w-16",
                                                                disabled: unusedWorkHoursCalc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "해당 업무 시간에만 캠페인을 시작할 수 있습니다."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    className: "w-[12.5rem] !py-[6px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-32",
                                                        children: "요일 설정"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "w-[17rem]",
                                                    colSpan: 2,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: weekdays.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                                        id: `day-${day}`,
                                                                        checked: dayOfWeek[index] === 't',
                                                                        onCheckedChange: (checked)=>handleDayChange(index, checked),
                                                                        disabled: unusedWorkHoursCalc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 454,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: `day-${day}`,
                                                                        children: day
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                        lineNumber: 460,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, day, true, {
                                                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                            lineNumber: 446,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                onClick: handleSubmit,
                                disabled: isSaving,
                                children: isSaving ? '저장 중...' : '저장'
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                onClick: handleCancel,
                                children: "취소"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                isOpen: alertState.isOpen,
                onClose: ()=>{
                    setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }));
                },
                onCancle: ()=>{
                    setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }));
                }
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/preferences/index.tsx",
                lineNumber: 480,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/preferences/index.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s(PreferencesBoard, "U2ISghGzXb76Q5uJPUo2Gh0sCb8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApirForEnvironmentSave"]
    ];
});
_c = PreferencesBoard;
var _c;
__turbopack_refresh__.register(_c, "PreferencesBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/SystemPreferences/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForChannelList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForChannelList.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForChannelEdit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForChannelEdit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForDialingDevice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSchedules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2'
};
const SystemPreferences = ()=>{
    _s();
    const [refreshCycle, setRefreshCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [monitoringType, setMonitoringType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("periodic");
    const [equipmentNumber, setEquipmentNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [equipmentName, setEquipmentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [allocationMode, setAllocationMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [allocationOutboundMode, setAllocationOutboundMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDevice, setSelectedDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedChannel, setSelectedChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filteredChannels, setFilteredChannels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isEditable, setIsEditable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scheduleData, setScheduleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 디바이스 상태를 저장할 상태 변수 추가
    const [deviceStatuses, setDeviceStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const { tenant_id, role_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // useMainStore의 campaigns에서 가져오는 creation_time으로 채널 리스트의 값이 useEnvironmentStore에서 가져오는 환경설정에서 설정한 
    // showChannelCampaignDayScop 시간내에 만들어진것만 보이게 수정해야함.
    const { tenants, campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { environmentData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    const [dialingDeviceList, setDialingDeviceList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [channelList, setChannelList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '1',
        onConfirm: {
            "SystemPreferences.useState": ()=>{}
        }["SystemPreferences.useState"],
        onCancel: {
            "SystemPreferences.useState": ()=>{}
        }["SystemPreferences.useState"]
    });
    const showAlert = (message)=>{
        setAlertState({
            isOpen: true,
            message,
            title: '알림',
            type: '2',
            onConfirm: closeAlert,
            onCancel: ()=>{}
        });
    };
    const showConfirm = (message, onConfirm)=>{
        setAlertState({
            isOpen: true,
            message,
            title: '확인',
            type: '1',
            onConfirm: ()=>{
                onConfirm();
                closeAlert();
            },
            onCancel: closeAlert
        });
    };
    const closeAlert = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    // Footer에서 발생하는 이벤트 수신을 위한 이벤트 리스너 추가
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemPreferences.useEffect": ()=>{
            // 장비 상태 변경 이벤트 수신 함수
            const handleDeviceStatusChange = {
                "SystemPreferences.useEffect.handleDeviceStatusChange": (event)=>{
                    const { device_id, device_status } = event.detail;
                    // 디바이스 상태 업데이트
                    setDeviceStatuses({
                        "SystemPreferences.useEffect.handleDeviceStatusChange": (prev)=>({
                                ...prev,
                                [device_id]: device_status
                            })
                    }["SystemPreferences.useEffect.handleDeviceStatusChange"]);
                    // 선택된 디바이스가 변경된 디바이스와 동일하면 상태 갱신
                    if (selectedDevice && selectedDevice.device_id === device_id) {
                        setSelectedDevice({
                            "SystemPreferences.useEffect.handleDeviceStatusChange": (prev)=>{
                                if (!prev) return null;
                                return {
                                    ...prev,
                                    usage: device_status === "run" ? "사용" : "미사용"
                                };
                            }
                        }["SystemPreferences.useEffect.handleDeviceStatusChange"]);
                    }
                }
            }["SystemPreferences.useEffect.handleDeviceStatusChange"];
            // 이벤트 리스너 등록 (타입 캐스팅 추가)
            window.addEventListener('deviceStatusChange', handleDeviceStatusChange);
            // 컴포넌트 언마운트 시 리스너 제거
            return ({
                "SystemPreferences.useEffect": ()=>{
                    window.removeEventListener('deviceStatusChange', handleDeviceStatusChange);
                }
            })["SystemPreferences.useEffect"];
        }
    }["SystemPreferences.useEffect"], [
        selectedDevice
    ]);
    // 장비 목록 조회
    const { mutate: fetchDialingDeviceList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDevice"])({
        onSuccess: {
            "SystemPreferences.useApiForDialingDevice": (data)=>{
                // 응답 데이터 구조 확인 및 예외 처리
                if (!data) {
                    setDialingDeviceList([]);
                    return;
                }
                if (!data.result_data) {
                    setDialingDeviceList([]);
                    return;
                }
                // result_data가 배열인지 확인
                if (!Array.isArray(data.result_data)) {
                    setDialingDeviceList([]);
                    return;
                }
                setDialingDeviceList(data.result_data);
                // 현재 저장된 장비를 찾아서 선택 상태로 설정
                if (!equipmentNumber) return;
                const currentDeviceId = equipmentNumber;
                const savedDevice = data.result_data.find({
                    "SystemPreferences.useApiForDialingDevice.savedDevice": (device)=>device && device.device_id && device.device_id.toString() === currentDeviceId
                }["SystemPreferences.useApiForDialingDevice.savedDevice"]);
                if (savedDevice) {
                    const deviceRow = {
                        device_id: savedDevice.device_id.toString(),
                        channel_count: savedDevice.channel_count,
                        device_name: savedDevice.device_name,
                        usage: getDeviceUsage(savedDevice.device_id)
                    };
                    setSelectedDevice(deviceRow);
                    setIsEditable(true);
                }
            }
        }["SystemPreferences.useApiForDialingDevice"],
        onError: {
            "SystemPreferences.useApiForDialingDevice": (error)=>{
                if (error.message && error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SystemPreferences.useApiForDialingDevice": ()=>{}
                        }["SystemPreferences.useApiForDialingDevice"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SystemPreferences.useApiForDialingDevice": ()=>{
                            router.push('/login');
                        }
                    }["SystemPreferences.useApiForDialingDevice"], 1000);
                } else {
                    showAlert(`시스템 모니터링 조회 실패: ${error.message || '알 수 없는 오류'}`);
                }
            }
        }["SystemPreferences.useApiForDialingDevice"]
    });
    // 채널 목록 조회
    const { mutate: fetchChannelList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForChannelList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForChannelList"])({
        onSuccess: {
            "SystemPreferences.useApiForChannelList": (data)=>{
                setChannelList(data.result_data);
            }
        }["SystemPreferences.useApiForChannelList"],
        onError: {
            "SystemPreferences.useApiForChannelList": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SystemPreferences.useApiForChannelList": ()=>{}
                        }["SystemPreferences.useApiForChannelList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SystemPreferences.useApiForChannelList": ()=>{
                            router.push('/login');
                        }
                    }["SystemPreferences.useApiForChannelList"], 1000);
                }
            }
        }["SystemPreferences.useApiForChannelList"]
    });
    // 채널 정보 수정 api 호출
    const { mutate: fetchChannelEdit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForChannelEdit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForChannelEdit"])({
        onSuccess: {
            "SystemPreferences.useApiForChannelEdit": (data)=>{
                fetchChannelList();
                fetchDialingDeviceList({
                    tenant_id_array: tenant_id === 0 ? tenants.map({
                        "SystemPreferences.useApiForChannelEdit": (tenant)=>tenant.tenant_id
                    }["SystemPreferences.useApiForChannelEdit"]) : [
                        tenant_id
                    ]
                });
            }
        }["SystemPreferences.useApiForChannelEdit"],
        onError: {
            "SystemPreferences.useApiForChannelEdit": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SystemPreferences.useApiForChannelEdit": ()=>{}
                        }["SystemPreferences.useApiForChannelEdit"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SystemPreferences.useApiForChannelEdit": ()=>{
                            router.push('/login');
                        }
                    }["SystemPreferences.useApiForChannelEdit"], 1000);
                } else {
                    showAlert('채널 정보 저장 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["SystemPreferences.useApiForChannelEdit"]
    });
    // 장비 신규 등록 API
    const { mutate: createDevice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDeviceCreate"])({
        onSuccess: {
            "SystemPreferences.useApiForDialingDeviceCreate": (data)=>{
                fetchChannelList();
                fetchDialingDeviceList({
                    tenant_id_array: tenant_id === 0 ? tenants.map({
                        "SystemPreferences.useApiForDialingDeviceCreate": (tenant)=>tenant.tenant_id
                    }["SystemPreferences.useApiForDialingDeviceCreate"]) : [
                        tenant_id
                    ]
                });
            }
        }["SystemPreferences.useApiForDialingDeviceCreate"],
        onError: {
            "SystemPreferences.useApiForDialingDeviceCreate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SystemPreferences.useApiForDialingDeviceCreate": ()=>{}
                        }["SystemPreferences.useApiForDialingDeviceCreate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SystemPreferences.useApiForDialingDeviceCreate": ()=>{
                            router.push('/login');
                        }
                    }["SystemPreferences.useApiForDialingDeviceCreate"], 1000);
                } else {
                    showAlert('장비 정보 저장 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["SystemPreferences.useApiForDialingDeviceCreate"]
    });
    // 장비 수정 API
    const { mutate: updateDevice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDeviceUpdate"])({
        onSuccess: {
            "SystemPreferences.useApiForDialingDeviceUpdate": (data)=>{
                fetchChannelList();
                fetchDialingDeviceList({
                    tenant_id_array: tenant_id === 0 ? tenants.map({
                        "SystemPreferences.useApiForDialingDeviceUpdate": (tenant)=>tenant.tenant_id
                    }["SystemPreferences.useApiForDialingDeviceUpdate"]) : [
                        tenant_id
                    ]
                });
            }
        }["SystemPreferences.useApiForDialingDeviceUpdate"],
        onError: {
            "SystemPreferences.useApiForDialingDeviceUpdate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SystemPreferences.useApiForDialingDeviceUpdate": ()=>{}
                        }["SystemPreferences.useApiForDialingDeviceUpdate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SystemPreferences.useApiForDialingDeviceUpdate": ()=>{
                            router.push('/login');
                        }
                    }["SystemPreferences.useApiForDialingDeviceUpdate"], 1000);
                } else {
                    showAlert('장비 정보 저장 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["SystemPreferences.useApiForDialingDeviceUpdate"]
    });
    // 장비 삭제 API
    const { mutate: deleteDevice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDeviceDelete"])({
        onSuccess: {
            "SystemPreferences.useApiForDialingDeviceDelete": (data)=>{
                fetchChannelList();
                fetchDialingDeviceList({
                    tenant_id_array: tenant_id === 0 ? tenants.map({
                        "SystemPreferences.useApiForDialingDeviceDelete": (tenant)=>tenant.tenant_id
                    }["SystemPreferences.useApiForDialingDeviceDelete"]) : [
                        tenant_id
                    ]
                });
            }
        }["SystemPreferences.useApiForDialingDeviceDelete"],
        onError: {
            "SystemPreferences.useApiForDialingDeviceDelete": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SystemPreferences.useApiForDialingDeviceDelete": ()=>{}
                        }["SystemPreferences.useApiForDialingDeviceDelete"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SystemPreferences.useApiForDialingDeviceDelete": ()=>{
                            router.push('/login');
                        }
                    }["SystemPreferences.useApiForDialingDeviceDelete"], 1000);
                } else {
                    showAlert('장비 정보 삭제 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["SystemPreferences.useApiForDialingDeviceDelete"]
    });
    // 스케줄 조회
    const { mutate: fetchSchedules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"])({
        onSuccess: {
            "SystemPreferences.useApiForSchedules": (data)=>{
                // 스케줄 데이터 처리 및 저장
                if (data && data.result_data && Array.isArray(data.result_data)) {
                    setScheduleData(data.result_data);
                }
            }
        }["SystemPreferences.useApiForSchedules"],
        onError: {
            "SystemPreferences.useApiForSchedules": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SystemPreferences.useApiForSchedules": ()=>{}
                        }["SystemPreferences.useApiForSchedules"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SystemPreferences.useApiForSchedules": ()=>{
                            router.push('/login');
                        }
                    }["SystemPreferences.useApiForSchedules"], 1000);
                } else {
                    showAlert('오류 발생: ' + error.message);
                }
            }
        }["SystemPreferences.useApiForSchedules"]
    });
    // 장비 목록 조회 시 테넌트 정보가 변경될 때마다 호출
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemPreferences.useEffect": ()=>{
            if (tenants && tenants.length > 0) {
                fetchDialingDeviceList({
                    tenant_id_array: tenant_id === 0 ? tenants.map({
                        "SystemPreferences.useEffect": (tenant)=>tenant.tenant_id
                    }["SystemPreferences.useEffect"]) : [
                        tenant_id
                    ]
                });
                fetchChannelList();
                fetchSchedules({
                    tenant_id_array: tenants.map({
                        "SystemPreferences.useEffect": (tenant)=>tenant.tenant_id
                    }["SystemPreferences.useEffect"])
                });
            }
        }
    }["SystemPreferences.useEffect"], [
        tenants
    ]);
    // 장비의 사용여부를 확인하는 함수 (실시간 상태 반영)
    const getDeviceUsage = (deviceId)=>{
        const deviceIdStr = deviceId.toString();
        // 실시간 상태가 있으면 확인
        if (deviceIdStr in deviceStatuses) {
            if (deviceStatuses[deviceIdStr] === "run") {
                return "사용";
            } else if (deviceStatuses[deviceIdStr] === "down") {
                return "미사용";
            } else {
                return "미사용"; // null 또는 기타 값
            }
        }
        // 실시간 상태가 없으면 API에서 받은 초기 상태 확인
        if (!dialingDeviceList || !Array.isArray(dialingDeviceList)) {
            return "미사용";
        }
        const device = dialingDeviceList.find((d)=>d && d.device_id && d.device_id.toString() === deviceIdStr);
        if (device) {
            if (device.device_state === "run") {
                return "사용";
            } else if (device.device_state === "down") {
                return "미사용";
            } else {
                return "미사용"; // null 또는 기타 값
            }
        }
        // 그 외에는 미사용
        return "미사용";
    };
    // 할당 발신모드에 따른 채널 모드 반환
    const getChannelMode = (assignValue, assignKind)=>{
        if (assignKind === 1) {
            // 캠페인으로 할당일 때 기존 로직
            switch(assignValue){
                case 2147483647:
                    return "모든 캠페인사용";
                case 0:
                    return "회선사용안함";
                default:
                    {
                        // 수정: campaigns가 비어있지 않은지 확인
                        if (!campaigns || !Array.isArray(campaigns)) {
                            return "미할당";
                        }
                        const campaign = campaigns.find((camp)=>camp && camp.campaign_id === assignValue);
                        if (campaign) {
                            return `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`;
                        }
                        return "미할당";
                    }
            }
        } else if (assignKind === 2) {
            // 발신모드로 할당일 때 새로운 로직
            switch(assignValue){
                case 0:
                    return "회선사용안함";
                case 2147483647:
                    return "발신방법 모두사용";
                case 1:
                    return "Power Mode";
                case 2:
                    return "Progressive Mode";
                case 3:
                    return "Predictive Mode";
                case 5:
                    return "System Preview";
                default:
                    return "미할당";
            }
        } else if (assignKind === 3) {
            switch(assignValue){
                case 0:
                    return "회선사용안함";
                case 2147483647:
                    return "모든 그룹아이디 사용";
                default:
                    return "미할당";
            }
        }
        return "미할당";
    };
    // 장비 목록 데이터 구성
    const equipmentRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SystemPreferences.useMemo[equipmentRows]": ()=>{
            // dialingDeviceList가 없을 경우 빈 배열 반환
            if (!dialingDeviceList || !Array.isArray(dialingDeviceList) || dialingDeviceList.length === 0) {
                return [];
            }
            return dialingDeviceList.map({
                "SystemPreferences.useMemo[equipmentRows]": (device)=>({
                        device_id: device.device_id.toString(),
                        channel_count: device.channel_count,
                        device_name: device.device_name,
                        usage: getDeviceUsage(device.device_id)
                    })
            }["SystemPreferences.useMemo[equipmentRows]"]);
        }
    }["SystemPreferences.useMemo[equipmentRows]"], [
        dialingDeviceList,
        channelList,
        deviceStatuses
    ]);
    // 장비 목록 데이터 구성
    const equipmentColumns = [
        {
            key: "device_id",
            name: "장비번호"
        },
        {
            key: "channel_count",
            name: "채널수"
        },
        {
            key: "device_name",
            name: "장비이름"
        },
        {
            key: "usage",
            name: "사용여부"
        }
    ];
    // 채널 목록 데이터 구성
    const channelColumns = [
        {
            key: "channelNumber",
            name: "채널번호"
        },
        {
            key: "channelName",
            name: "채널이름"
        },
        {
            key: "mode",
            name: "할당 발신모드"
        }
    ];
    // 장비 목록 클릭 핸들러
    const handleEquipmentCellClick = ({ row })=>{
        if (row) {
            setSelectedDevice(row);
        }
    };
    // 채널 목록 클릭 핸들러
    const handleChannelCellClick = ({ row })=>{
        if (row) {
            setSelectedChannel(row);
        }
    };
    // 장비 상세내역의 신규 버튼 클릭 핸들러
    const handleNewEquipment = ()=>{
        // dialingDeviceList 안전 검사 추가
        if (!dialingDeviceList || !Array.isArray(dialingDeviceList) || dialingDeviceList.length === 0) {
            // 장비가 없는 경우 첫 번호는 1로 설정
            setEquipmentNumber("1");
        } else {
            const deviceIds = dialingDeviceList.filter((device)=>device && device.device_id) // 유효한 device_id만 필터링
            .map((device)=>device.device_id).sort((a, b)=>a - b);
            const lastDeviceId = deviceIds.length > 0 ? deviceIds[deviceIds.length - 1] : 0;
            const newDeviceId = (lastDeviceId + 1).toString();
            setEquipmentNumber(newDeviceId);
        }
        setSelectedDevice(null);
        setEquipmentName("");
        setRefreshCycle("");
        setMonitoringType("periodic");
        setFilteredChannels([]);
        setSelectedChannel(null);
        setAllocationMode("");
        setAllocationOutboundMode("");
        setIsEditable(true);
    };
    // 장비 저장 핸들러 (신규/수정 공통 검증)
    const validateEquipmentData = ()=>{
        if (!equipmentNumber || !equipmentName || !refreshCycle) {
            showAlert('모든 필드를 입력해주세요.');
            return false;
        }
        const channelCount = parseInt(refreshCycle);
        if (isNaN(channelCount) || channelCount <= 0) {
            showAlert('유효한 채널 수를 입력해주세요.');
            return false;
        }
        return true;
    };
    // 장비 저장 핸들러
    const handleSaveEquipment = ()=>{
        if (!validateEquipmentData()) return;
        const saveRequest = {
            tenant_id: tenants[0].tenant_id,
            device_id: parseInt(equipmentNumber),
            device_name: equipmentName,
            channel_count: parseInt(refreshCycle)
        };
        const handleApiResponse = (response)=>{
            if (response.result_code === -1) {
                showAlert('[LICENSE FULL] CIOD 접속 라이선스를 초과하였습니다.\n라이선스 문의 후 다시 시도하여 주십시오.');
                return;
            }
            if (selectedDevice) {
                showAlert('장비 정보가 성공적으로 수정되었습니다.');
            } else {
                showAlert('새로운 장비 정보가 성공적으로 저장되었습니다.');
            }
        };
        if (selectedDevice) {
            updateDevice(saveRequest, {
                onSuccess: handleApiResponse
            });
        } else {
            createDevice(saveRequest, {
                onSuccess: handleApiResponse
            });
        }
    };
    // 장비 삭제 핸들러
    const handleDeleteEquipment = ()=>{
        // 선택된 장비가 없을 경우 경고 알림
        if (!selectedDevice) {
            showAlert('삭제할 장비를 먼저 선택해주세요.');
            return;
        }
        // 삭제 확인 알림
        showConfirm(`장비 [${selectedDevice.device_name}]를 삭제하시겠습니까? \n\n ※주의: 삭제시 데이터베이스에서 완전 삭제됩니다. \n 다시 한번 확인해 주시고 삭제해 주세요.`, ()=>{
            // 확인 버튼 클릭 시 실행될 함수
            deleteDevice({
                tenant_id: tenants[0].tenant_id,
                device_id: parseInt(selectedDevice.device_id || "0")
            }, {
                onSuccess: (data)=>{
                    showAlert('장비 삭제 요청이 성공적으로 처리되었습니다.');
                    setSelectedDevice(null);
                    setEquipmentNumber("");
                    setEquipmentName("");
                    setRefreshCycle("");
                    setFilteredChannels([]);
                    setSelectedChannel(null);
                    setAllocationMode("");
                    setAllocationOutboundMode("");
                    setIsEditable(false);
                }
            });
        });
    };
    // 채널 수정 핸들러
    const handleChannelEdit = ()=>{
        if (!selectedDevice) return;
        // channelList 안전 검사 추가
        if (!channelList || !Array.isArray(channelList)) {
            showAlert('채널 정보를 불러올 수 없습니다.');
            return;
        }
        const deviceChannels = channelList.find((channel)=>channel && channel.device_id && channel.device_id.toString() === selectedDevice.device_id);
        if (!deviceChannels) {
            showAlert('이 장비에 대한 채널 정보가 없습니다. 시스템 관리자에게 문의하세요.');
            return;
        }
        let updatedChannelAssign;
        // 할당모드가 변경되었는지 확인
        if (deviceChannels.assign_kind.toString() !== allocationMode) {
            // 할당모드가 변경된 경우 모든 채널을 0으로 설정
            updatedChannelAssign = new Array(selectedDevice.channel_count).fill(0);
            // 현재 선택된 채널과 할당발신모드가 있다면 해당 채널만 선택된 값으로 업데이트
            if (selectedChannel && allocationOutboundMode) {
                updatedChannelAssign[selectedChannel.channelNumber] = parseInt(allocationOutboundMode);
            }
        } else {
            // 할당모드가 변경되지 않은 경우 기존 로직 유지
            updatedChannelAssign = [
                ...deviceChannels.channel_assign
            ];
            if (selectedChannel) {
                updatedChannelAssign[selectedChannel.channelNumber] = parseInt(allocationOutboundMode);
            }
        }
        const channelEditRequest = {
            device_id: parseInt(selectedDevice.device_id),
            assign_kind: parseInt(allocationMode),
            channel_count: selectedDevice.channel_count,
            channel_assign: updatedChannelAssign
        };
        fetchChannelEdit(channelEditRequest);
        showAlert('채널 정보가 성공적으로 수정되었습니다.');
    };
    // 할당 발신모드 옵션 생성
    const getAllocationOutboundModeOptions = ()=>{
        if (allocationMode === "1") {
            // 캠페인으로 할당일 때 기본 옵션
            const defaultOptions = [
                {
                    value: "2147483647",
                    label: "모든 캠페인사용"
                },
                {
                    value: "0",
                    label: "회선사용안함"
                }
            ];
            // campaigns가 비어있는지 확인
            if (!campaigns || !Array.isArray(campaigns) || campaigns.length === 0) {
                return defaultOptions;
            }
            // 현재 날짜
            const currentDate = new Date();
            const dayScope = environmentData?.showChannelCampaignDayScop || 0; // 설정 값이 없으면 기본값 0
            // dayScope가 0이면 모든 캠페인 표시
            if (dayScope === 0) {
                const allCampaignOptions = campaigns.map((campaign)=>({
                        value: campaign.campaign_id.toString(),
                        label: `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`
                    }));
                return [
                    ...defaultOptions,
                    ...allCampaignOptions
                ];
            }
            // scheduleData가 없으면 모든 캠페인 표시
            if (!scheduleData || !Array.isArray(scheduleData) || scheduleData.length === 0) {
                const allCampaignOptions = campaigns.map((campaign)=>({
                        value: campaign.campaign_id.toString(),
                        label: `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`
                    }));
                return [
                    ...defaultOptions,
                    ...allCampaignOptions
                ];
            }
            // 캠페인 ID를 key로, end_date를 value로 맵 생성
            const campaignEndDateMap = new Map();
            // 스케줄 데이터에서 각 캠페인의 end_date 추출
            scheduleData.forEach((schedule)=>{
                if (schedule && schedule.campaign_id !== undefined && schedule.end_date) {
                    const campaignId = typeof schedule.campaign_id === 'number' ? schedule.campaign_id : parseInt(schedule.campaign_id);
                    // YYYYMMDD 형식의 end_date를 Date 객체로 변환
                    let endDateStr = schedule.end_date;
                    // YYYYMMDD 형식을 YYYY-MM-DD 형식으로 변환
                    if (endDateStr && endDateStr.length === 8) {
                        endDateStr = `${endDateStr.substring(0, 4)}-${endDateStr.substring(4, 6)}-${endDateStr.substring(6, 8)}`;
                    }
                    campaignEndDateMap.set(campaignId, endDateStr);
                }
            });
            // 필터링: end_date가 현재 날짜 기준으로 showChannelCampaignDayScop 일 이내인 캠페인만 표시
            const filteredCampaigns = campaigns.filter((campaign)=>{
                // 캠페인 객체가 유효한지 확인
                if (!campaign || campaign.campaign_id === undefined) {
                    return false;
                }
                // 캠페인에 대한 end_date 가져오기
                const endDateStr = campaignEndDateMap.get(campaign.campaign_id);
                // end_date가 없으면 포함 (이 부분이 수정됨)
                if (!endDateStr) {
                    return true;
                }
                // 날짜 문자열을 Date 객체로 변환
                const endDate = new Date(endDateStr);
                // 유효한 날짜인지 확인
                if (isNaN(endDate.getTime())) {
                    return true; // 날짜가 유효하지 않아도 포함 (이 부분도 수정됨)
                }
                // 현재 날짜와의 차이 계산 (밀리초 단위)
                const timeDiff = endDate.getTime() - currentDate.getTime();
                // 일 단위로 변환 (미래 날짜면 양수, 과거 날짜면 음수)
                const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
                // dayScope 이내인지 확인
                return dayDiff >= -dayScope;
            });
            // 필터링된 캠페인을 드롭다운 옵션으로 변환
            const campaignOptions = filteredCampaigns.map((campaign)=>({
                    value: campaign.campaign_id.toString(),
                    label: `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`
                }));
            return [
                ...defaultOptions,
                ...campaignOptions
            ];
        } else if (allocationMode === "2") {
            // 발신모드로 할당일 때 옵션 (변경 없음)
            return [
                {
                    value: "0",
                    label: "회선사용안함"
                },
                {
                    value: "2147483647",
                    label: "발신방법 모두사용"
                },
                {
                    value: "1",
                    label: "Power Mode"
                },
                {
                    value: "2",
                    label: "Progressive Mode"
                },
                {
                    value: "3",
                    label: "Predictive Mode"
                },
                {
                    value: "5",
                    label: "System Preview"
                }
            ];
        } else if (allocationMode === "3") {
            // 채널그룹으로 할당일 때 옵션 (변경 없음)
            return [
                {
                    value: "0",
                    label: "회선사용안함"
                },
                {
                    value: "2147483647",
                    label: "모든 그룹아이디 사용"
                }
            ];
        }
        return [];
    };
    // 장비 목록용 rowClass 함수
    const getEquipmentRowClass = (row)=>{
        return selectedDevice?.device_id === row.device_id ? 'bg-[#FFFAEE]' : '';
    };
    // 채널 목록용 rowClass 함수
    const getChannelRowClass = (row)=>{
        return selectedChannel?.channelNumber === row.channelNumber ? 'bg-[#FFFAEE]' : '';
    };
    // 장비 목록에서 선택된 장비가 변경될 때마다 채널 목록 업데이트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemPreferences.useEffect": ()=>{
            if (selectedDevice) {
                setEquipmentNumber(selectedDevice.device_id);
                setEquipmentName(selectedDevice.device_name);
                setRefreshCycle(selectedDevice.channel_count.toString());
                setMonitoringType(selectedDevice.usage === "사용" ? "oneTime" : "periodic");
                setIsEditable(true);
                // 수정: channelList가 비어있지 않은지 확인
                if (channelList && Array.isArray(channelList)) {
                    const selectedDeviceChannels = channelList.find({
                        "SystemPreferences.useEffect.selectedDeviceChannels": (channel)=>channel && channel.device_id && channel.device_id.toString() === selectedDevice.device_id
                    }["SystemPreferences.useEffect.selectedDeviceChannels"]);
                    if (selectedDeviceChannels) {
                        const channels = selectedDeviceChannels.channel_assign.map({
                            "SystemPreferences.useEffect.channels": (assignValue, index)=>({
                                    channelNumber: index,
                                    channelName: `Channel No ${index}`,
                                    mode: getChannelMode(assignValue, selectedDeviceChannels.assign_kind),
                                    assignValue: assignValue
                                })
                        }["SystemPreferences.useEffect.channels"]);
                        setFilteredChannels(channels);
                        setAllocationMode(selectedDeviceChannels.assign_kind.toString());
                        // 이전에 선택된 채널 번호 확인
                        const prevChannelNumber = selectedChannel?.channelNumber;
                        if (prevChannelNumber !== undefined) {
                            const existingChannel = channels.find({
                                "SystemPreferences.useEffect.existingChannel": (c)=>c.channelNumber === prevChannelNumber
                            }["SystemPreferences.useEffect.existingChannel"]);
                            if (existingChannel) {
                                setSelectedChannel(existingChannel);
                                setAllocationOutboundMode(existingChannel.assignValue.toString());
                                return;
                            }
                        }
                        // 첫 번째 채널 선택
                        if (channels.length > 0) {
                            setSelectedChannel(channels[0]);
                            setAllocationOutboundMode(channels[0].assignValue.toString());
                        } else {
                            setSelectedChannel(null);
                            setAllocationOutboundMode("");
                        }
                    } else {
                        setFilteredChannels([]);
                        setSelectedChannel(null);
                        setAllocationMode("");
                        setAllocationOutboundMode("");
                    }
                } else {
                    setFilteredChannels([]);
                    setSelectedChannel(null);
                    setAllocationMode("");
                    setAllocationOutboundMode("");
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SystemPreferences.useEffect"], [
        selectedDevice,
        channelList
    ]);
    // 채널 선택 시 상세 정보 업데이트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemPreferences.useEffect": ()=>{
            // console.log("campaigns", campaigns);
            if (selectedChannel) {
                setAllocationOutboundMode(selectedChannel.assignValue.toString());
            }
        }
    }["SystemPreferences.useEffect"], [
        selectedChannel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 flex-1 flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "장비 목록",
                                        totalCount: dialingDeviceList?.length || 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 873,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid-custom-wrap h-[300px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            columns: equipmentColumns,
                                            rows: equipmentRows,
                                            className: "grid-custom cursor-pointer",
                                            rowKeyGetter: (row)=>row.device_id,
                                            onCellClick: handleEquipmentCellClick,
                                            selectedRows: selectedDevice ? new Set([
                                                selectedDevice.device_id
                                            ]) : new Set(),
                                            rowHeight: 30,
                                            headerRowHeight: 30,
                                            rowClass: getEquipmentRowClass,
                                            enableVirtualization: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                            lineNumber: 875,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 874,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                lineNumber: 872,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "장비 상세내역",
                                        buttons: [
                                            {
                                                label: "신규",
                                                onClick: handleNewEquipment
                                            },
                                            {
                                                label: "저장",
                                                onClick: handleSaveEquipment
                                            },
                                            {
                                                label: "삭제",
                                                onClick: handleDeleteEquipment
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 892,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                                        children: "장비번호"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                        type: "text",
                                                        value: equipmentNumber,
                                                        onChange: (e)=>setEquipmentNumber(e.target.value),
                                                        disabled: true,
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                lineNumber: 909,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                                        children: "장비이름"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                        type: "text",
                                                        value: equipmentName,
                                                        onChange: (e)=>setEquipmentName(e.target.value),
                                                        disabled: !isEditable,
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 921,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                lineNumber: 919,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                                        children: "채널수"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                        type: "number",
                                                        value: refreshCycle,
                                                        onChange: (e)=>setRefreshCycle(e.target.value),
                                                        disabled: !isEditable || selectedDevice !== null,
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 931,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                lineNumber: 929,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 908,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                lineNumber: 891,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                        lineNumber: 870,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 flex-1 flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "채널목록",
                                        totalCount: filteredChannels?.length || 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 946,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid-custom-wrap h-[300px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            columns: channelColumns,
                                            rows: filteredChannels,
                                            className: "grid-custom cursor-pointer",
                                            onCellClick: handleChannelCellClick,
                                            selectedRows: selectedChannel ? new Set([
                                                selectedChannel.channelNumber.toString()
                                            ]) : new Set(),
                                            rowKeyGetter: (row)=>row.channelNumber.toString(),
                                            rowHeight: 30,
                                            headerRowHeight: 30,
                                            rowClass: getChannelRowClass
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                            lineNumber: 948,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 947,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                lineNumber: 945,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "채널 상세내역",
                                        buttons: [
                                            {
                                                label: "적용",
                                                onClick: handleChannelEdit,
                                                disabled: !selectedDevice || !selectedChannel
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 964,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                                        children: "할당모드"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: allocationMode,
                                                        onValueChange: setAllocationMode,
                                                        disabled: !selectedDevice,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "w-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "할당모드 선택"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                    lineNumber: 983,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                lineNumber: 982,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "1",
                                                                        children: "1.캠페인으로할당"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                        lineNumber: 986,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "2",
                                                                        children: "2.발신모드로할당"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                        lineNumber: 987,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "3",
                                                                        children: "3.채널그룹으로할당"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                        lineNumber: 988,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                lineNumber: 985,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 977,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                lineNumber: 975,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                                        children: "할당발신모드"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 993,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: allocationOutboundMode,
                                                        onValueChange: setAllocationOutboundMode,
                                                        disabled: !selectedChannel,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "w-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "할당발신모드 선택"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                    lineNumber: 1000,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                lineNumber: 999,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                style: {
                                                                    maxHeight: '300px',
                                                                    overflowY: 'auto'
                                                                },
                                                                children: getAllocationOutboundModeOptions().map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: option.value,
                                                                        children: option.label
                                                                    }, option.value, false, {
                                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                        lineNumber: 1004,
                                                                        columnNumber: 45
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                                lineNumber: 1002,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                                lineNumber: 992,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                        lineNumber: 974,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                                lineNumber: 963,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                        lineNumber: 943,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                lineNumber: 869,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: alertState.isOpen,
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                onClose: alertState.onConfirm,
                onCancle: alertState.onCancel
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
                lineNumber: 1015,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/SystemPreferences/index.tsx",
        lineNumber: 868,
        columnNumber: 9
    }, this);
};
_s(SystemPreferences, "xk0Kgu2SUrqpixly9DEwQf1cgSM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForChannelList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForChannelList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForChannelEdit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForChannelEdit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDeviceCreate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDeviceUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDeviceDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"]
    ];
});
_c = SystemPreferences;
const __TURBOPACK__default__export__ = SystemPreferences;
var _c;
__turbopack_refresh__.register(_c, "SystemPreferences");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/table-custom.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForCallProgressStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/monitoring/hooks/useApiForCallProgressStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForPhoneDescription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const OutboundCallProgressPanel = ({ externalCampaignId, onCampaignChange, onDataUpdate })=>{
    _s();
    const [internalSelectedCampaign, setInternalSelectedCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { campaignSkills, setCampaignSkills, phoneDescriptions, setPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [_campaignData, _setCampaignData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [waitingCounselorCnt, setWaitingCounselorCnt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { statisticsUpdateCycle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    const intervalRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // 실제 사용할 캠페인 ID 결정
    const selectedCampaign = externalCampaignId ?? internalSelectedCampaign;
    // 빈 데이터 정의
    const emptyData = {
        stats: {
            waiting: 0,
            firstCall: 0,
            retryCall: 0,
            distributing: 0
        },
        barData: [
            {
                name: '최초 발신용',
                value: 0
            },
            {
                name: '재시도 발신용',
                value: 0
            },
            {
                name: '분배 대기',
                value: 0
            }
        ],
        gridData: []
    };
    // 캠페인별 데이터
    // const campaignData: CampaignDataMap = {
    //   test1: {
    //     stats: {
    //       waiting: 2,
    //       firstCall: 3,
    //       retryCall: 2,
    //       distributing: 1
    //     },
    //     barData: [
    //       { name: '최초 발신용', value: 80 },
    //       { name: '재시도 발신용', value: 50 },
    //       { name: '분배 대기', value: 30 }
    //     ],
    //     gridData: [
    //       {
    //         skillId: '1246',
    //         campaignId: '0125',
    //         campaignName: 'test1캠페인',
    //         priority: '2',
    //         custKey: '241545',
    //         custName: '김철수',
    //         phoneType: '일반전화',
    //         phone1: '01087654321',
    //         attempt1: '1',
    //         phone2: '01087654321',
    //         attempt2: '1',
    //         phone3: '01087654321',
    //         attempt3: '2',
    //         phone4: '01087654321',
    //         attempt4: '2',
    //         phone5: '01087654321',
    //         attempt5: '2',
    //         result: '실패'
    //       }
    //     ]
    //   },
    //   test2: {
    //     stats: {
    //       waiting: 1,
    //       firstCall: 2,
    //       retryCall: 1,
    //       distributing: 0
    //     },
    //     barData: [
    //       { name: '최초 발신용', value: 60 },
    //       { name: '재시도 발신용', value: 40 },
    //       { name: '분배 대기', value: 20 }
    //     ],
    //     gridData: [
    //       {
    //         skillId: '1247',
    //         campaignId: '0126',
    //         campaignName: 'test2캠페인',
    //         priority: '3',
    //         custKey: '241546',
    //         custName: '이영희',
    //         phoneType: '회사전화',
    //         phone1: '01098765432',
    //         attempt1: '2',
    //         phone2: '01098765432',
    //         attempt2: '1',
    //         phone3: '01098765432',
    //         attempt3: '1',
    //         phone4: '01087654321',
    //         attempt4: '2',
    //         phone5: '01087654321',
    //         attempt5: '2',
    //         result: '진행중'
    //       }
    //     ]
    //   }
    // };
    // 전체 데이터 계산을 위한 useMemo 훅 사용
    const allCampaignData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OutboundCallProgressPanel.useMemo[allCampaignData]": ()=>{
            if (Object.keys(_campaignData).length === 0) return emptyData;
            // 모든 캠페인의 통계 합계 계산
            const totalStats = Object.values(_campaignData).reduce({
                "OutboundCallProgressPanel.useMemo[allCampaignData].totalStats": (acc, campaign)=>({
                        waiting: acc.waiting + campaign.stats.waiting,
                        firstCall: acc.firstCall + campaign.stats.firstCall,
                        retryCall: acc.retryCall + campaign.stats.retryCall,
                        distributing: acc.distributing + campaign.stats.distributing
                    })
            }["OutboundCallProgressPanel.useMemo[allCampaignData].totalStats"], {
                waiting: 0,
                firstCall: 0,
                retryCall: 0,
                distributing: 0
            });
            // 모든 캠페인의 바 차트 데이터 합계 계산
            const totalBarData = [
                {
                    name: '최초 발신용',
                    value: Object.values(_campaignData).reduce({
                        "OutboundCallProgressPanel.useMemo[allCampaignData]": (sum, campaign)=>sum + (campaign.barData.find({
                                "OutboundCallProgressPanel.useMemo[allCampaignData]": (item)=>item.name === '최초 발신용'
                            }["OutboundCallProgressPanel.useMemo[allCampaignData]"])?.value ?? 0)
                    }["OutboundCallProgressPanel.useMemo[allCampaignData]"], 0)
                },
                {
                    name: '재시도 발신용',
                    value: Object.values(_campaignData).reduce({
                        "OutboundCallProgressPanel.useMemo[allCampaignData]": (sum, campaign)=>sum + (campaign.barData.find({
                                "OutboundCallProgressPanel.useMemo[allCampaignData]": (item)=>item.name === '재시도 발신용'
                            }["OutboundCallProgressPanel.useMemo[allCampaignData]"])?.value ?? 0)
                    }["OutboundCallProgressPanel.useMemo[allCampaignData]"], 0)
                },
                {
                    name: '분배 대기',
                    value: Object.values(_campaignData).reduce({
                        "OutboundCallProgressPanel.useMemo[allCampaignData]": (sum, campaign)=>sum + (campaign.barData.find({
                                "OutboundCallProgressPanel.useMemo[allCampaignData]": (item)=>item.name === '분배 대기'
                            }["OutboundCallProgressPanel.useMemo[allCampaignData]"])?.value ?? 0)
                    }["OutboundCallProgressPanel.useMemo[allCampaignData]"], 0)
                }
            ];
            // 모든 캠페인의 그리드 데이터 통합
            const totalGridData = Object.values(_campaignData).flatMap({
                "OutboundCallProgressPanel.useMemo[allCampaignData].totalGridData": (campaign)=>campaign.gridData
            }["OutboundCallProgressPanel.useMemo[allCampaignData].totalGridData"]);
            return {
                stats: totalStats,
                barData: totalBarData,
                gridData: totalGridData
            };
        }
    }["OutboundCallProgressPanel.useMemo[allCampaignData]"], [
        _campaignData
    ]);
    // 현재 선택된 캠페인의 데이터 (안전하게 처리)
    const currentData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OutboundCallProgressPanel.useMemo[currentData]": ()=>{
            if (selectedCampaign === 'all') return allCampaignData;
            if (!selectedCampaign) return emptyData;
            return _campaignData[selectedCampaign] || emptyData;
        }
    }["OutboundCallProgressPanel.useMemo[currentData]"], [
        selectedCampaign,
        allCampaignData,
        _campaignData
    ]);
    // 데이터 업데이트 시 부모 컴포넌트에 알림
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutboundCallProgressPanel.useEffect": ()=>{
            if (onDataUpdate) {
                onDataUpdate(currentData);
            }
        }
    }["OutboundCallProgressPanel.useEffect"], [
        currentData,
        onDataUpdate
    ]);
    // 그리드 컬럼 정의
    const columns = [
        {
            key: 'skillId',
            name: '스킬아이디'
        },
        {
            key: 'campaignId',
            name: '캠페인아이디'
        },
        {
            key: 'campaignName',
            name: '캠페인이름'
        },
        {
            key: 'priority',
            name: '다이얼 순번'
        },
        {
            key: 'custKey',
            name: '고객키'
        },
        {
            key: 'custName',
            name: '고객이름'
        },
        {
            key: 'phoneType',
            name: '발신번호 구분'
        },
        {
            key: 'phone1',
            name: '전화번호1'
        },
        {
            key: 'attempt1',
            name: '시도횟수'
        },
        {
            key: 'phone2',
            name: '전화번호2'
        },
        {
            key: 'attempt2',
            name: '시도횟수'
        },
        {
            key: 'phone3',
            name: '전화번호3'
        },
        {
            key: 'attempt3',
            name: '시도횟수'
        },
        {
            key: 'phone4',
            name: '전화번호3'
        },
        {
            key: 'attempt4',
            name: '시도횟수'
        },
        {
            key: 'phone5',
            name: '전화번호3'
        },
        {
            key: 'attempt5',
            name: '시도횟수'
        },
        {
            key: 'result',
            name: '다이얼 결과'
        }
    ];
    // 캠페인 변경 핸들러
    const handleCampaignChange = (value)=>{
        if (onCampaignChange) {
            onCampaignChange(value);
        } else {
            setInternalSelectedCampaign(value);
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (value !== 'all') {
            const campaignInfo = campaigns.find((data)=>data.campaign_id === Number(value));
            const tenantId = campaignInfo?.tenant_id + '' || '1';
            const campaignId = campaignInfo?.campaign_id + '' || '0';
            fetchCallProgressStatus({
                tenantId,
                campaignId
            });
            if (statisticsUpdateCycle > 0) {
                intervalRef.current = setInterval(()=>{
                    fetchCallProgressStatus({
                        tenantId,
                        campaignId
                    });
                }, statisticsUpdateCycle * 1000);
            }
        } else {
            fetchCallProgressStatus({
                tenantId: '1',
                campaignId: '0'
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutboundCallProgressPanel.useEffect": ()=>{
            return ({
                "OutboundCallProgressPanel.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                }
            })["OutboundCallProgressPanel.useEffect"];
        }
    }["OutboundCallProgressPanel.useEffect"], []);
    // Select 컴포넌트 렌더링 여부 결정
    const [shouldRenderSelect, setShouldRenderSelect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 발신 진행 정보 api 호출
    const { mutate: fetchCallProgressStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForCallProgressStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallProgressStatus"])({
        onSuccess: {
            "OutboundCallProgressPanel.useApiForCallProgressStatus": (data)=>{
                const tempList = data.sendingProgressStatusList;
                setWaitingCounselorCnt(data.waitingCounselorCnt);
                if (tempList.length > 0) {
                    const sumCallProgressStatus = [];
                    for(let i = 0; i < tempList.length; i++){
                        const index = sumCallProgressStatus.findIndex({
                            "OutboundCallProgressPanel.useApiForCallProgressStatus.index": (data)=>data.campaignId === tempList[i].campaignId
                        }["OutboundCallProgressPanel.useApiForCallProgressStatus.index"]);
                        if (index === -1) {
                            sumCallProgressStatus.push({
                                ...tempList[i],
                                waiting: 0,
                                firstCall: tempList[i].reuseCount === 1 ? 1 : 0,
                                _retryCall: tempList[i].reuseCount === 2 ? 1 : 0,
                                distributing: tempList[i].waitingLstCnt,
                                result: campaigns.find({
                                    "OutboundCallProgressPanel.useApiForCallProgressStatus": (campaign)=>campaign.campaign_id === tempList[i].campaignId
                                }["OutboundCallProgressPanel.useApiForCallProgressStatus"])?.end_flag === 1 ? '진행중' : '완료',
                                phoneType: ({
                                    "OutboundCallProgressPanel.useApiForCallProgressStatus": ()=>{
                                        const campaign = campaigns.find({
                                            "OutboundCallProgressPanel.useApiForCallProgressStatus.campaign": (campaign)=>campaign.campaign_id === tempList[i].campaignId
                                        }["OutboundCallProgressPanel.useApiForCallProgressStatus.campaign"]);
                                        const phoneDescription = phoneDescriptions.find({
                                            "OutboundCallProgressPanel.useApiForCallProgressStatus.phoneDescription": (phoneDescription)=>phoneDescription.description_id === campaign?.dial_phone_id
                                        }["OutboundCallProgressPanel.useApiForCallProgressStatus.phoneDescription"]);
                                        return phoneDescription ? phoneDescription[`phone${tempList[i].dialedPhone}`] || '' : '';
                                    }
                                })["OutboundCallProgressPanel.useApiForCallProgressStatus"]()
                            });
                        } else {
                            // sumCallProgressStatus[index].waiting += tempList[i].waiting;
                            sumCallProgressStatus[index].firstCall += tempList[i].reuseCount === 1 ? 1 : 0;
                            sumCallProgressStatus[index].retryCall += tempList[i].reuseCount === 2 ? 1 : 0;
                            sumCallProgressStatus[index].distributing += tempList[i].waitingLstCnt;
                        }
                    }
                    const tempCampaignData = {};
                    for(let i = 0; i < sumCallProgressStatus.length; i++){
                        const _tempCampaignData = {
                            [sumCallProgressStatus[i].campaignId]: {
                                stats: {
                                    waiting: sumCallProgressStatus[i].waiting,
                                    firstCall: sumCallProgressStatus[i].firstCall,
                                    retryCall: sumCallProgressStatus[i].retryCall,
                                    distributing: sumCallProgressStatus[i].distributing //분배 대기
                                },
                                barData: [
                                    {
                                        name: '최초 발신용',
                                        value: sumCallProgressStatus[i].firstCall
                                    },
                                    {
                                        name: '재시도 발신용',
                                        value: sumCallProgressStatus[i].retryCall
                                    },
                                    {
                                        name: '분배 대기',
                                        value: sumCallProgressStatus[i].waiting - (sumCallProgressStatus[i].firstCall + sumCallProgressStatus[i].retryCall)
                                    } //분배 대기
                                ],
                                gridData: [
                                    {
                                        skillId: campaignSkills.filter({
                                            "OutboundCallProgressPanel.useApiForCallProgressStatus": (skill)=>skill.campaign_id === sumCallProgressStatus[i].campaignId
                                        }["OutboundCallProgressPanel.useApiForCallProgressStatus"]).map({
                                            "OutboundCallProgressPanel.useApiForCallProgressStatus": (data)=>data.skill_id
                                        }["OutboundCallProgressPanel.useApiForCallProgressStatus"]).join(','),
                                        campaignId: sumCallProgressStatus[i].campaignId + '',
                                        campaignName: sumCallProgressStatus[i].campaignName,
                                        priority: sumCallProgressStatus[i].dialSequence + '',
                                        custKey: sumCallProgressStatus[i].customerKey,
                                        custName: sumCallProgressStatus[i].customerName,
                                        phoneType: sumCallProgressStatus[i].phoneType,
                                        phone1: sumCallProgressStatus[i].phoneNumber[0] + '',
                                        attempt1: sumCallProgressStatus[i].phoneDialCount[0] + '',
                                        phone2: sumCallProgressStatus[i].phoneNumber[1] + '',
                                        attempt2: sumCallProgressStatus[i].phoneDialCount[1] + '',
                                        phone3: sumCallProgressStatus[i].phoneNumber[2] + '',
                                        attempt3: sumCallProgressStatus[i].phoneDialCount[2] + '',
                                        phone4: sumCallProgressStatus[i].phoneNumber[3] + '',
                                        attempt4: sumCallProgressStatus[i].phoneDialCount[3] + '',
                                        phone5: sumCallProgressStatus[i].phoneNumber[4] + '',
                                        attempt5: sumCallProgressStatus[i].phoneDialCount[4] + '',
                                        result: sumCallProgressStatus[i].result
                                    }
                                ]
                            }
                        };
                        Object.assign(tempCampaignData, _tempCampaignData);
                    }
                    _setCampaignData(tempCampaignData);
                } else {
                    _setCampaignData({
                        ' ': {
                            stats: {
                                waiting: data.waitingCounselorCnt,
                                firstCall: 0,
                                retryCall: 0,
                                distributing: 0
                            },
                            barData: [
                                {
                                    name: '최초 발신용',
                                    value: 0
                                },
                                {
                                    name: '재시도 발신용',
                                    value: 0
                                },
                                {
                                    name: '분배 대기',
                                    value: 0
                                }
                            ],
                            gridData: []
                        }
                    });
                }
                // setDataList(tempList);
                // setSelectedCall(tempList[0]);
                console.log("API 응답 데이터:", tempList);
            }
        }["OutboundCallProgressPanel.useApiForCallProgressStatus"]
    });
    // 전화번호설명 템플릿 조회
    const { mutate: fetchPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"])({
        onSuccess: {
            "OutboundCallProgressPanel.useApiForPhoneDescription": (data)=>{
                setPhoneDescriptions(data.result_data || []);
            }
        }["OutboundCallProgressPanel.useApiForPhoneDescription"]
    });
    // 캠페인스킬 조회
    const { mutate: fetchCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onSuccess: {
            "OutboundCallProgressPanel.useApiForCampaignSkill": (data)=>{
                setCampaignSkills(data.result_data);
            }
        }["OutboundCallProgressPanel.useApiForCampaignSkill"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutboundCallProgressPanel.useEffect": ()=>{
            if (externalCampaignId) {
                const campaignInfo = campaigns.find({
                    "OutboundCallProgressPanel.useEffect.campaignInfo": (data)=>data.campaign_id === Number(externalCampaignId)
                }["OutboundCallProgressPanel.useEffect.campaignInfo"]);
                const tenantId = campaignInfo?.tenant_id + '' || '1';
                const campaignId = campaignInfo?.campaign_id + '' || '0';
                fetchCallProgressStatus({
                    tenantId,
                    campaignId
                });
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
                if (statisticsUpdateCycle > 0) {
                    intervalRef.current = setInterval({
                        "OutboundCallProgressPanel.useEffect": ()=>{
                            fetchCallProgressStatus({
                                tenantId,
                                campaignId
                            });
                        }
                    }["OutboundCallProgressPanel.useEffect"], statisticsUpdateCycle * 1000);
                }
                setShouldRenderSelect(false);
                return ({
                    "OutboundCallProgressPanel.useEffect": ()=>{
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                        }
                    }
                })["OutboundCallProgressPanel.useEffect"];
            } else {
                setShouldRenderSelect(true);
            }
        }
    }["OutboundCallProgressPanel.useEffect"], [
        externalCampaignId,
        statisticsUpdateCycle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutboundCallProgressPanel.useEffect": ()=>{
            if (externalCampaignId) {
                const campaignInfo = campaigns.find({
                    "OutboundCallProgressPanel.useEffect.campaignInfo": (data)=>data.campaign_id === Number(externalCampaignId)
                }["OutboundCallProgressPanel.useEffect.campaignInfo"]);
                fetchCallProgressStatus({
                    tenantId: campaignInfo?.tenant_id + '' || '1',
                    campaignId: campaignInfo?.campaign_id + '' || '0'
                });
                setShouldRenderSelect(false);
            } else {
                setShouldRenderSelect(true);
            }
        }
    }["OutboundCallProgressPanel.useEffect"], [
        externalCampaignId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutboundCallProgressPanel.useEffect": ()=>{
            if (campaignSkills.length > 0 && phoneDescriptions.length > 0) {
                fetchCallProgressStatus({
                    tenantId: '1',
                    campaignId: '0'
                });
            }
        }
    }["OutboundCallProgressPanel.useEffect"], [
        campaignSkills,
        phoneDescriptions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutboundCallProgressPanel.useEffect": ()=>{
            let count = 0;
            if (campaignSkills.length === 0) {
                fetchCampaignSkills({
                    session_key: '',
                    tenant_id: 0
                });
                count++;
            }
            if (phoneDescriptions.length === 0) {
                fetchPhoneDescriptions({
                    session_key: '',
                    tenant_id: 0
                });
                count++;
            }
        }
    }["OutboundCallProgressPanel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5 h-full out-wrap",
        children: [
            shouldRenderSelect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "w-20 min-w-20",
                        children: "캠페인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                        lineNumber: 500,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        onValueChange: handleCampaignChange,
                        value: selectedCampaign,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-48",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "캠페인전체"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                    lineNumber: 503,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "all",
                                        children: "캠페인전체"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                        lineNumber: 506,
                                        columnNumber: 15
                                    }, this),
                                    campaigns.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: option.campaign_id.toString(),
                                            children: [
                                                "[",
                                                option.campaign_id,
                                                "]",
                                                option.campaign_name
                                            ]
                                        }, option.campaign_id, true, {
                                            fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                lineNumber: 505,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                lineNumber: 499,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5 h-[calc(100%-46px)] out-call-responsive-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 out-call-responsive-left gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                        className: "!bg-[#DDF4F2] !text-center text-sm font-normal text-[#3A9D6C] !h-[30px]",
                                                        children: "대기 상담사"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                        className: "!bg-[#FEE9EC] !text-center text-sm font-normal text-[#C95E5E] !h-[30px]",
                                                        children: "최초발신"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                        className: "!bg-[#E8EFFA] !text-center text-sm font-normal text-[#338BD3] !h-[30px]",
                                                        children: "재시도 발신"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                        className: "!bg-[#F6F0FA] !text-center text-sm font-normal text-[#9459BF] !h-[30px]",
                                                        children: "분배대기"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "!text-center text-sm !h-[30px]",
                                                        children: waitingCounselorCnt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "!text-center text-sm !h-[30px]",
                                                        children: currentData.stats.firstCall
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "!text-center text-sm !h-[30px]",
                                                        children: currentData.stats.retryCall
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "!text-center text-sm !h-[30px]",
                                                        children: currentData.stats.distributing
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                lineNumber: 538,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                            lineNumber: 537,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[calc(100%-57px)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    className: "m-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: currentData.barData,
                                        margin: {
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                        },
                                        layout: "vertical",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                horizontal: true,
                                                vertical: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                type: "number",
                                                tick: {
                                                    fontSize: 13
                                                },
                                                axisLine: {
                                                    stroke: '#999'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                type: "category",
                                                dataKey: "name",
                                                width: 100,
                                                tick: {
                                                    fontSize: 13
                                                },
                                                axisLine: {
                                                    stroke: '#999'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                lineNumber: 561,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                lineNumber: 568,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "value",
                                                fill: "#4FD1C5",
                                                barSize: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-custom-wrap flex-1 out-call-responsive-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            columns: columns,
                            rows: currentData.gridData,
                            className: "grid-custom",
                            rowHeight: 30,
                            headerRowHeight: 30
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                            lineNumber: 580,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx",
        lineNumber: 497,
        columnNumber: 5
    }, this);
};
_s(OutboundCallProgressPanel, "9INP6e3T2gM+6WpRcZTN+kMbpxQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForCallProgressStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallProgressStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"]
    ];
});
_c = OutboundCallProgressPanel;
const __TURBOPACK__default__export__ = OutboundCallProgressPanel;
var _c;
__turbopack_refresh__.register(_c, "OutboundCallProgressPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/StatusCampaign/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSkills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForCampaignProgressInformation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/monitoring/hooks/useApiForCampaignProgressInformation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
const DISPATCH_TYPES = {
    INITIAL: '최초발신',
    FIRST: '1차재발신',
    SECOND: '2차재발신',
    THIRD: '3차재발신',
    FOURTH: '4차재발신'
};
const StatusCampaign = ()=>{
    _s();
    const [selectedSkill, setSelectedSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('total');
    const [selectedDispatch, setSelectedDispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const { campaignSkills, setCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const [skills, setSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignInfoList, setCampaignInfoList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCampaignId, setSelectedCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedCampaignIdIndex, setSelectedCampaignIdIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [maxDispatchCount, setMaxDispatchCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dispatchTypeList, setDispatchTypeList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { statisticsUpdateCycle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    // 캠페인 진행 정보 API 호출 (useMutation 사용)
    const { mutate: fetchCampaignProgressInformation, data: progressData, isPending, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForCampaignProgressInformation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignProgressInformation"])({
        onSuccess: {
            "StatusCampaign.useApiForCampaignProgressInformation": (data)=>{
                if (data && data.progressInfoList && campaigns.length > 0 && selectedCampaignIdIndex < campaigns.length) {
                    const tempList = data.progressInfoList.sort({
                        "StatusCampaign.useApiForCampaignProgressInformation.tempList": (a, b)=>a.reuseCnt - b.reuseCnt
                    }["StatusCampaign.useApiForCampaignProgressInformation.tempList"]);
                    if (tempList.length > 0) {
                        const tempDataList = tempList.map({
                            "StatusCampaign.useApiForCampaignProgressInformation.tempDataList": (item, i)=>({
                                    campaign_id: item.campId || selectedCampaignId,
                                    dispatch_type: i.toString(),
                                    campaign_name: campaigns[selectedCampaignIdIndex].campaign_name,
                                    progress: item.totLstCnt === 0 ? 0 : parseFloat((item.nonTTCT / item.totLstCnt * 100).toFixed(1)),
                                    success: item.totLstCnt === 0 ? 0 : parseFloat((item.scct / item.totLstCnt * 100).toFixed(1))
                                })
                        }["StatusCampaign.useApiForCampaignProgressInformation.tempDataList"]);
                        setCampaignInfoList({
                            "StatusCampaign.useApiForCampaignProgressInformation": (prev)=>[
                                    ...prev,
                                    ...tempDataList
                                ]
                        }["StatusCampaign.useApiForCampaignProgressInformation"]);
                        if (maxDispatchCount < tempList.length) {
                            setMaxDispatchCount(tempList.length);
                        }
                    }
                    // 다음 캠페인으로 이동
                    const index = selectedCampaignIdIndex + 1;
                    if (index < campaigns.length) {
                        setSelectedCampaignId(campaigns[index].campaign_id);
                        setSelectedCampaignIdIndex(index);
                    } else {
                        const tempList = Array.from({
                            length: maxDispatchCount
                        }, {
                            "StatusCampaign.useApiForCampaignProgressInformation.tempList": (_, i)=>({
                                    dispatch_id: i,
                                    dispatch_name: i === 0 ? '최초발신' : `${i}차재발신`
                                })
                        }["StatusCampaign.useApiForCampaignProgressInformation.tempList"]);
                        setDispatchTypeList(tempList);
                        fetchSkills({
                            tenant_id_array: []
                        });
                    }
                }
            }
        }["StatusCampaign.useApiForCampaignProgressInformation"]
    });
    // 데이터 갱신 함수
    const refreshData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StatusCampaign.useCallback[refreshData]": ()=>{
            setIsRefreshing(true);
            // 초기화
            setSelectedCampaignId(campaigns[0]?.campaign_id || 0);
            setSelectedCampaignIdIndex(0);
            setCampaignInfoList([]);
            // campaigns이 있을 경우에만 API 호출
            if (campaigns.length > 0) {
                fetchCampaignProgressInformation({
                    tenantId: campaigns[0].tenant_id,
                    campaignId: campaigns[0].campaign_id
                });
            }
            // 타이머로 isRefreshing 상태 해제
            setTimeout({
                "StatusCampaign.useCallback[refreshData]": ()=>setIsRefreshing(false)
            }["StatusCampaign.useCallback[refreshData]"], 1000);
        }
    }["StatusCampaign.useCallback[refreshData]"], [
        campaigns,
        fetchCampaignProgressInformation
    ]);
    // 스킬 조회
    const { mutate: fetchSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"])({
        onSuccess: {
            "StatusCampaign.useApiForSkills": (data)=>{
                setSkills(data.result_data);
                fetchCampaignSkills({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }["StatusCampaign.useApiForSkills"]
    });
    // 캠페인 스킬 조회
    const { mutate: fetchCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onSuccess: {
            "StatusCampaign.useApiForCampaignSkill": (data)=>{
                setCampaignSkills(data.result_data);
                // 여기에 나중에 발신 상태 API 연동
                processDataForChart(data.result_data, selectedSkill, selectedDispatch);
            }
        }["StatusCampaign.useApiForCampaignSkill"]
    });
    // 테스트용 발신 상태 데이터 생성 함수 (나중에 API로 대체)
    const generateDispatchStatusData = (campaignId)=>{
        const tempDataList = campaignInfoList.filter((data)=>data.campaign_id === campaignId);
        const temp = {
            campaign_id: campaignId
        };
        for(let j = 0; j < maxDispatchCount; j++){
            const data = tempDataList[j] || {
                progress: 0,
                success: 0
            };
            temp[`dispatch${j}`] = {
                progress: data.progress,
                success: data.success
            };
        }
        return temp;
    };
    // 차트 데이터 처리 함수
    const processDataForChart = (campaignSkillsData, currentSkill, dispatchType)=>{
        let filteredCampaigns = campaignSkillsData.sort((a, b)=>a.campaign_id - b.campaign_id);
        // 스킬 필터링
        if (currentSkill !== 'total') {
            filteredCampaigns = campaignSkillsData.filter((campaign)=>campaign.skill_id?.includes(Number(currentSkill)));
        } else {
            filteredCampaigns = campaigns.sort((a, b)=>a.campaign_id - b.campaign_id);
        }
        // 각 캠페인에 대해 발신 단계 데이터 생성
        const processedData = filteredCampaigns.map((campaign)=>{
            // API에서 받아올 데이터 구조
            const statusData = generateDispatchStatusData(campaign.campaign_id);
            const dispatchKey = `dispatch${dispatchType}`;
            const campaignInfo = campaigns.find((data)=>data.campaign_id === campaign.campaign_id);
            const campaignName = campaignInfo ? campaignInfo.campaign_name : '알 수 없음';
            return {
                name: `[${campaign.campaign_id}]${campaignName}`,
                progress: typeof statusData[dispatchKey] === 'object' ? statusData[dispatchKey].progress : 0,
                success: typeof statusData[dispatchKey] === 'object' ? statusData[dispatchKey].success : 0
            };
        });
        setChartData(processedData);
    };
    // 스킬 선택 변경 핸들러
    const handleSkillChange = (value)=>{
        setSelectedSkill(value);
        if (campaignSkills.length > 0) {
            processDataForChart(campaignSkills, value, selectedDispatch);
        }
    };
    // 발신 단계 선택 변경 핸들러
    const handleDispatchChange = (value)=>{
        setSelectedDispatch(value);
        if (campaignSkills.length > 0) {
            processDataForChart(campaignSkills, selectedSkill, value);
        }
    };
    const itemHeight = 50;
    const chartHeight = Math.max(chartData.length * itemHeight + 100, 300);
    // 컴포넌트 마운트 시 및 selectedCampaignId 변경 시 데이터 로드
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusCampaign.useEffect": ()=>{
            if (selectedCampaignId > 0 && campaigns.length > 0 && selectedCampaignIdIndex < campaigns.length) {
                fetchCampaignProgressInformation({
                    tenantId: campaigns[selectedCampaignIdIndex].tenant_id,
                    campaignId: selectedCampaignId
                });
            }
        }
    }["StatusCampaign.useEffect"], [
        selectedCampaignId,
        selectedCampaignIdIndex,
        campaigns,
        fetchCampaignProgressInformation
    ]);
    // 통계 갱신 주기에 따른 자동 새로고침 설정
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusCampaign.useEffect": ()=>{
            if (statisticsUpdateCycle > 0) {
                const interval = setInterval({
                    "StatusCampaign.useEffect.interval": ()=>{
                        refreshData();
                    }
                }["StatusCampaign.useEffect.interval"], statisticsUpdateCycle * 1000);
                return ({
                    "StatusCampaign.useEffect": ()=>clearInterval(interval)
                })["StatusCampaign.useEffect"];
            }
        }
    }["StatusCampaign.useEffect"], [
        statisticsUpdateCycle,
        refreshData
    ]);
    // 캠페인 목록 변경 시 초기 데이터 설정
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusCampaign.useEffect": ()=>{
            if (campaigns.length > 0) {
                setSelectedCampaignId(campaigns[0].campaign_id);
                setSelectedCampaignIdIndex(0);
                setCampaignInfoList([]);
            }
        }
    }["StatusCampaign.useEffect"], [
        campaigns
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mb-6 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: selectedSkill,
                        onValueChange: handleSkillChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "스킬전체보기"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "total",
                                        children: "스킬전체보기"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: skill.skill_id.toString(),
                                            children: skill.skill_name
                                        }, skill.skill_id, false, {
                                            fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: selectedDispatch,
                        onValueChange: handleDispatchChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "최초발신"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: dispatchTypeList.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option.dispatch_id.toString(),
                                        children: option.dispatch_name
                                    }, option.dispatch_id, false, {
                                        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: refreshData,
                        disabled: isPending || isRefreshing,
                        children: isRefreshing ? '새로고침 중...' : '새로고침'
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            isPending && !isRefreshing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border p-2 rounded flex items-center justify-center",
                style: {
                    height: chartHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "데이터를 로드 중입니다..."
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                    lineNumber: 281,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border p-2 rounded flex items-center justify-center",
                style: {
                    height: chartHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "데이터 로드 중 오류가 발생했습니다. 새로고침을 시도해주세요."
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: chartHeight
                },
                className: "border p-2 rounded",
                children: chartData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        layout: "vertical",
                        data: chartData,
                        margin: {
                            top: 20,
                            right: 30,
                            left: 100,
                            bottom: 5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 296,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                type: "number",
                                tick: {
                                    fontSize: 13
                                },
                                axisLine: {
                                    stroke: '#999'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 297,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                type: "category",
                                dataKey: "name",
                                tick: {
                                    fontSize: 13
                                },
                                axisLine: {
                                    stroke: '#999'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 302,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 308,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                verticalAlign: "top",
                                align: "left",
                                wrapperStyle: {
                                    paddingBottom: '20px',
                                    fontSize: '14px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 309,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "success",
                                fill: "#FF8DA0",
                                name: "성공률"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 317,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "progress",
                                fill: "#4AD3C8",
                                name: "진행률"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                                lineNumber: 318,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                        lineNumber: 291,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                    lineNumber: 290,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "표시할 데이터가 없습니다."
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                        lineNumber: 323,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                    lineNumber: 322,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/StatusCampaign/index.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
};
_s(StatusCampaign, "4uRCjTgInxjf9OdB/ECiFg8+TS8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForCampaignProgressInformation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignProgressInformation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"]
    ];
});
_c = StatusCampaign;
const __TURBOPACK__default__export__ = StatusCampaign;
var _c;
__turbopack_refresh__.register(_c, "StatusCampaign");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/ChannelMonitor/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForChannelStateMonitoringList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/monitoring/hooks/useApiForChannelStateMonitoringList.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForDialingDevice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
const COLORS = {
    IDLE: '#4AD3C8',
    BUSY: '#FF8DA0',
    NONE: '#D398FF'
};
const secondModeAll = [
    {
        key: ' ',
        name: '선택'
    }
];
const secondModeCampaignGroup = [
    {
        key: ' ',
        name: '전체 채널그룹'
    },
    {
        key: '회선사용안함',
        name: '회선사용안함'
    },
    {
        key: '모든그룹아이디사용',
        name: '모든 그룹아이디 사용'
    }
];
const secondModeSender = [
    {
        key: ' ',
        name: '전체발신모드'
    },
    {
        key: '0',
        name: '회선사용안함'
    },
    {
        key: '발신방법모두사용',
        name: '발신방법모두사용'
    },
    {
        key: '1',
        name: 'power mode'
    },
    {
        key: '2',
        name: 'progressive mode'
    },
    {
        key: '3',
        name: 'predictive mode'
    },
    {
        key: '5',
        name: 'system preview'
    }
];
const ChannelMonitor = ()=>{
    _s();
    const [firstSelect, setFirstSelect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('전체');
    const [secondSelect, setSecondSelect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [thirdSelect, setThirdSelect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('상태전체');
    const [channelData, setChannelData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredData, setFilteredData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { statisticsUpdateCycle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    const { tenants, campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const [secondModeEquipment, setSecondModeEquipment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [secondModeCampaign, setSecondModeCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [secondModeCampaignGroup, setSecondModeCampaignGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 첫 번째 Select의 옵션
    const firstSelectOptions = [
        '전체',
        '장비번호',
        '캠페인 모드',
        '발신 모드',
        '채널 그룹 모드'
    ];
    // 두 번째 Select의 옵션 (첫 번째 선택에 따라 동적 변경)
    const getSecondSelectOptions = ()=>{
        switch(firstSelect){
            case '장비번호':
                return secondModeEquipment;
            case '캠페인 모드':
                return secondModeCampaign;
            case '발신 모드':
                return secondModeSender;
            default:
                return secondModeAll;
        }
    };
    // 세 번째 Select의 옵션
    const thirdSelectOptions = [
        '상태전체',
        'NONE',
        'IDLE',
        'BUSY'
    ];
    // 필터링 로직
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelMonitor.useEffect": ()=>{
            let newData = channelData.sort({
                "ChannelMonitor.useEffect.newData": (a, b)=>parseInt(a.CIDSNO) - parseInt(b.CIDSNO)
            }["ChannelMonitor.useEffect.newData"]);
            if (channelData.length > 0) {
                if (firstSelect !== '전체') {
                    if (secondSelect && secondSelect !== ' ') {
                        switch(firstSelect){
                            case '장비번호':
                                newData = channelData.filter({
                                    "ChannelMonitor.useEffect": (item)=>item.CIDSNO && item.CIDSNO === secondSelect
                                }["ChannelMonitor.useEffect"]);
                                break;
                            case '캠페인 모드':
                                newData = channelData.filter({
                                    "ChannelMonitor.useEffect": (item)=>item.campaignMode === secondSelect
                                }["ChannelMonitor.useEffect"]);
                                break;
                            case '발신 모드':
                                newData = channelData.filter({
                                    "ChannelMonitor.useEffect": (item)=>item.callMode === secondSelect
                                }["ChannelMonitor.useEffect"]);
                                break;
                            case '채널 그룹 모드':
                                newData = channelData.filter({
                                    "ChannelMonitor.useEffect": (item)=>item.channelGroupMode === secondSelect
                                }["ChannelMonitor.useEffect"]);
                                break;
                        }
                    } else if (firstSelect === '캠페인 모드') {
                        newData = channelData.filter({
                            "ChannelMonitor.useEffect": (item)=>item.campaignMode != ''
                        }["ChannelMonitor.useEffect"]);
                    } else if (firstSelect === '발신 모드') {
                        newData = channelData.filter({
                            "ChannelMonitor.useEffect": (item)=>item.callMode != ''
                        }["ChannelMonitor.useEffect"]);
                    } else if (firstSelect === '채널 그룹 모드') {
                        newData = channelData.filter({
                            "ChannelMonitor.useEffect": (item)=>item.channelGroupMode != ''
                        }["ChannelMonitor.useEffect"]);
                    }
                } else {}
                if (thirdSelect !== '상태전체') {
                    newData = newData.filter({
                        "ChannelMonitor.useEffect": (item)=>item.status === thirdSelect
                    }["ChannelMonitor.useEffect"]);
                }
                setFilteredData(newData);
            }
        }
    }["ChannelMonitor.useEffect"], [
        firstSelect,
        secondSelect,
        thirdSelect,
        channelData
    ]);
    // 상태별 카운트 계산
    const statusCounts = filteredData.reduce((acc, curr)=>{
        acc[curr.status] = (acc[curr.status] || 0) + 1;
        return acc;
    }, {});
    // 도넛 차트 데이터 준비
    const chartData = Object.entries(statusCounts).map(([name, value])=>({
            name: name + ':' + value,
            value: value / filteredData.length * 100
        }));
    // 그리드 컬럼 정의
    const columns = [
        {
            key: 'CIDSNO',
            name: 'CIDSNO'
        },
        {
            key: 'CHNO',
            name: 'CHNO'
        },
        {
            key: 'status',
            name: '상태',
            formatter: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-2 py-1 rounded text-center",
                    style: {
                        backgroundColor: COLORS[row.status],
                        color: 'white'
                    },
                    children: row.status
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
        }
    ];
    // 첫 번째 Select 변경 시 두 번째 Select 초기화
    const handleFirstSelectChange = (value)=>{
        setFirstSelect(value);
        setSecondSelect(' ');
    };
    // 채널 모니터링 api 호출
    const { mutate: fetchChannelStateMonitoringList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForChannelStateMonitoringList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForChannelStateMonitoringList"])({
        onSuccess: {
            "ChannelMonitor.useApiForChannelStateMonitoringList": (data)=>{
                const dataList = data.dialerChannelStatusList.sort({
                    "ChannelMonitor.useApiForChannelStateMonitoringList.dataList": (a, b)=>parseInt(a.id) - parseInt(b.id)
                }["ChannelMonitor.useApiForChannelStateMonitoringList.dataList"]).map({
                    "ChannelMonitor.useApiForChannelStateMonitoringList.dataList": (item)=>({
                            CIDSNO: item.deviceId,
                            CHNO: `CH${item.id}`,
                            status: item.state === '0' ? 'NONE' : item.state === '1' ? 'IDLE' : 'BUSY',
                            ChannelMode: item.assign_kind,
                            campaignMode: item.assign_kind === '1' ? item.dial_mode === '2147483647' ? '모든캠페인사용' : item.dial_mode === '0' ? '회선사용안함' : item.dial_mode : '',
                            callMode: item.assign_kind === '2' ? item.dial_mode === '2147483647' ? '발신방법모두사용' : item.dial_mode : '',
                            channelGroupMode: item.assign_kind === '3' ? item.dial_mode === '2147483647' ? '모든그룹아이디사용' : item.dial_mode === '0' ? '회선사용안함' : item.dial_mode : ''
                        })
                }["ChannelMonitor.useApiForChannelStateMonitoringList.dataList"]);
                setChannelData(dataList);
                const dataCampaignList = data.dialerChannelStatusList.filter({
                    "ChannelMonitor.useApiForChannelStateMonitoringList.dataCampaignList": (item)=>item.assign_kind === '1' && !(item.dial_mode == '0' || item.dial_mode == '2147483647')
                }["ChannelMonitor.useApiForChannelStateMonitoringList.dataCampaignList"]);
                if (dataCampaignList.length > 0) {
                    const tempData = dataCampaignList.map({
                        "ChannelMonitor.useApiForChannelStateMonitoringList.tempData": (item)=>({
                                key: `${item.dial_mode}`,
                                name: campaigns.filter({
                                    "ChannelMonitor.useApiForChannelStateMonitoringList.tempData": (data)=>data.campaign_id === Number(item.dial_mode)
                                }["ChannelMonitor.useApiForChannelStateMonitoringList.tempData"])[0].campaign_name
                            })
                    }["ChannelMonitor.useApiForChannelStateMonitoringList.tempData"]);
                    setSecondModeCampaign(tempData.sort({
                        "ChannelMonitor.useApiForChannelStateMonitoringList": (a, b)=>parseInt(a.key) - parseInt(b.key)
                    }["ChannelMonitor.useApiForChannelStateMonitoringList"]));
                }
                const dataGroupList = data.dialerChannelStatusList.filter({
                    "ChannelMonitor.useApiForChannelStateMonitoringList.dataGroupList": (item)=>item.assign_kind === '3' && !(item.dial_mode == '0' || item.dial_mode == '2147483647')
                }["ChannelMonitor.useApiForChannelStateMonitoringList.dataGroupList"]);
                if (dataGroupList.length > 0) {
                    const tempData = dataGroupList.map({
                        "ChannelMonitor.useApiForChannelStateMonitoringList.tempData": (item)=>({
                                key: `${item.dial_mode}`,
                                name: campaigns.filter({
                                    "ChannelMonitor.useApiForChannelStateMonitoringList.tempData": (data)=>data.campaign_id === Number(item.dial_mode)
                                }["ChannelMonitor.useApiForChannelStateMonitoringList.tempData"])[0].campaign_name
                            })
                    }["ChannelMonitor.useApiForChannelStateMonitoringList.tempData"]);
                    setSecondModeCampaignGroup(tempData.sort({
                        "ChannelMonitor.useApiForChannelStateMonitoringList": (a, b)=>parseInt(a.key) - parseInt(b.key)
                    }["ChannelMonitor.useApiForChannelStateMonitoringList"]));
                }
            }
        }["ChannelMonitor.useApiForChannelStateMonitoringList"]
    });
    // 장비 목록 조회
    const { mutate: fetchDialingDeviceList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDevice"])({
        onSuccess: {
            "ChannelMonitor.useApiForDialingDevice": (data)=>{
                if (data.result_data.length > 0) {
                    const tempData = data.result_data.map({
                        "ChannelMonitor.useApiForDialingDevice.tempData": (item)=>({
                                key: `${item.device_id}`,
                                name: item.device_name
                            })
                    }["ChannelMonitor.useApiForDialingDevice.tempData"]);
                    setSecondModeEquipment(tempData);
                }
                fetchChannelStateMonitoringList({
                    deviceId: 0
                });
            }
        }["ChannelMonitor.useApiForDialingDevice"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelMonitor.useEffect": ()=>{
            fetchDialingDeviceList({
                tenant_id_array: tenants.map({
                    "ChannelMonitor.useEffect": (tenant)=>tenant.tenant_id
                }["ChannelMonitor.useEffect"])
            });
            // fetchChannelStateMonitoringList({deviceId:0});
            if (statisticsUpdateCycle > 0) {
                const interval = setInterval({
                    "ChannelMonitor.useEffect.interval": ()=>{
                        fetchDialingDeviceList({
                            tenant_id_array: tenants.map({
                                "ChannelMonitor.useEffect.interval": (tenant)=>tenant.tenant_id
                            }["ChannelMonitor.useEffect.interval"])
                        });
                    // fetchChannelStateMonitoringList({deviceId:0});
                    }
                }["ChannelMonitor.useEffect.interval"], statisticsUpdateCycle * 1000);
                return ({
                    "ChannelMonitor.useEffect": ()=>clearInterval(interval)
                })["ChannelMonitor.useEffect"];
            }
        }
    }["ChannelMonitor.useEffect"], [
        statisticsUpdateCycle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-5 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-1/2 h-full flex flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm h-[26px] min-h-[26px] flex flex-col justify-center",
                            children: [
                                "TOTAL ",
                                filteredData.length,
                                " CH"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border p-2 rounded h-[calc(100%-46px)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                            data: chartData,
                                            dataKey: "value",
                                            nameKey: "name",
                                            cx: "50%",
                                            cy: "50%",
                                            innerRadius: 45,
                                            outerRadius: 100,
                                            fill: "#8884d8",
                                            label: ({ value })=>`${value.toFixed(0)}%`,
                                            children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: COLORS[entry.name.split(':')[0]]
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                            verticalAlign: "bottom",
                                            align: "center",
                                            wrapperStyle: {
                                                position: 'relative',
                                                bottom: '20%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-1/2 flex flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    onValueChange: handleFirstSelectChange,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: firstSelect
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: firstSelectOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: option,
                                                    children: option
                                                }, option, false, {
                                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    disabled: firstSelect === '전체',
                                    onValueChange: setSecondSelect,
                                    value: secondSelect,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: secondSelect || "선택"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: [
                                                firstSelect === '장비번호' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: ' ',
                                                    children: '전체장비'
                                                }, ' ', false, {
                                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this),
                                                firstSelect === '캠페인 모드' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: ' ',
                                                            children: '전체캠페인'
                                                        }, ' ', false, {
                                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: '회선사용안함',
                                                            children: '회선사용안함'
                                                        }, '회선사용안함', false, {
                                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: '모든캠페인사용',
                                                            children: '모든캠페인사용'
                                                        }, '모든캠페인사용', false, {
                                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                firstSelect === '채널 그룹 모드' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: ' ',
                                                            children: '전체 채널그룹'
                                                        }, ' ', false, {
                                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: '회선사용안함',
                                                            children: '회선사용안함'
                                                        }, '회선사용안함', false, {
                                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: '모든그룹아이디사용',
                                                            children: '모든 그룹아이디 사용'
                                                        }, '모든그룹아이디사용', false, {
                                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                firstSelect === '장비번호' ? secondModeEquipment.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.key,
                                                        children: [
                                                            "[",
                                                            option.key,
                                                            "]",
                                                            option.name
                                                        ]
                                                    }, option.key, true, {
                                                        fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this)) : firstSelect === '캠페인 모드' ? secondModeCampaign.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.key,
                                                        children: option.name
                                                    }, option.key, false, {
                                                        fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this)) : firstSelect === '발신 모드' ? secondModeSender.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.key,
                                                        children: option.name
                                                    }, option.key, false, {
                                                        fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this)) : firstSelect === '채널 그룹 모드' ? secondModeCampaignGroup.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.key,
                                                        children: option.name
                                                    }, option.key, false, {
                                                        fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this)) : secondModeAll.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.key,
                                                        children: option.name
                                                    }, option.key, false, {
                                                        fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    onValueChange: setThirdSelect,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: thirdSelect
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: thirdSelectOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: option,
                                                    children: option
                                                }, option, false, {
                                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-custom-wrap h-[calc(100%-46px)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                columns: columns,
                                rows: filteredData,
                                className: "grid-custom",
                                rowHeight: 30,
                                headerRowHeight: 30
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
            lineNumber: 235,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/ChannelMonitor/index.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
};
_s(ChannelMonitor, "A54TxF7iq/A+OGDG3pBdMQlgYCc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForChannelStateMonitoringList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForChannelStateMonitoringList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForDialingDevice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialingDevice"]
    ];
});
_c = ChannelMonitor;
const __TURBOPACK__default__export__ = ChannelMonitor;
var _c;
__turbopack_refresh__.register(_c, "ChannelMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CreateCampaignFormPanel/variables/variablesForCreateCampaignForm.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CampaignCallPacingTabInfo": (()=>CampaignCallPacingTabInfo),
    "CampaignDialSpeedInfo": (()=>CampaignDialSpeedInfo),
    "CampaignInfo": (()=>CampaignInfo),
    "CampaignManagerInfo": (()=>CampaignManagerInfo),
    "CampaignSkillInfo": (()=>CampaignSkillInfo),
    "errorMessage": (()=>errorMessage)
});
const CampaignInfo = {
    campaign_id: 0,
    campaign_name: '',
    campaign_desc: '',
    site_code: 0,
    service_code: 0,
    start_flag: 0,
    end_flag: 0,
    dial_mode: 1,
    callback_kind: 0,
    delete_flag: 0,
    list_count: 0,
    list_redial_query: '',
    next_campaign: 0,
    token_id: 0,
    phone_order: '',
    phone_dial_try: [
        0,
        0,
        0,
        0,
        0
    ],
    dial_try_interval: 20,
    trunk_access_code: '',
    DDD_code: '',
    power_divert_queue: 0,
    max_ring: 0,
    detect_mode: 0,
    auto_dial_interval: 30,
    creation_user: '',
    creation_time: '',
    creation_ip: '',
    update_user: '',
    update_time: '',
    update_ip: '',
    dial_phone_id: 0,
    tenant_id: -1,
    alarm_answer_count: 0,
    dial_speed: 0,
    parent_campaign: 0,
    overdial_abandon_time: 2,
    list_alarm_count: 100,
    supervisor_phone: '',
    reuse_count: 0,
    use_counsel_result: 0,
    use_list_alarm: 0,
    redial_strategy: [
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0"
    ],
    dial_mode_option: 0,
    user_option: '',
    campaign_status: 0,
    // 개별 속성 추가
    phone_dial_try1: 0,
    phone_dial_try2: 0,
    phone_dial_try3: 0,
    phone_dial_try4: 0,
    phone_dial_try5: 0,
    redial_strategy1: "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    redial_strategy2: "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    redial_strategy3: "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    redial_strategy4: "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0",
    redial_strategy5: "7:2.1.0/3.1.0/4.1.0/5.1.0/6.1.0/10.1.0/99.1.0/2501.1.0/2502.1.0/2503.1.0/2504.1.0/2505.1.0/2506.1.0"
};
const CampaignManagerInfo = {
    campaign_id: 0,
    campaign_name: '',
    campaign_desc: '',
    site_code: 0,
    service_code: 0,
    start_flag: 0,
    end_flag: 0,
    dial_mode: 1,
    callback_kind: 2,
    delete_flag: 0,
    list_count: 0,
    list_redial_query: '',
    next_campaign: 0,
    token_id: 0,
    phone_order: '',
    phone_dial_try1: 0,
    phone_dial_try2: 0,
    phone_dial_try3: 0,
    phone_dial_try4: 0,
    phone_dial_try5: 0,
    dial_try_interval: 20,
    trunk_access_code: '',
    DDD_code: '',
    power_divert_queue: '0',
    max_ring: 0,
    detect_mode: 0,
    auto_dial_interval: 30,
    creation_user: '',
    creation_time: '',
    creation_ip: '',
    update_user: '',
    update_time: '',
    update_ip: '',
    dial_phone_id: 0,
    tenant_id: -1,
    alarm_answer_count: 0,
    dial_speed: 0,
    parent_campaign: 0,
    overdial_abandon_time: 2,
    list_alarm_count: 100,
    supervisor_phone: '',
    reuse_count: 0,
    use_counsel_result: 0,
    use_list_alarm: 0,
    redial_strategy1: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy2: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy3: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy4: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy5: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    dial_mode_option: 0,
    user_option: '',
    customer_char_id: 1,
    counsel_script_id: 1,
    announcement_id: 1,
    campaign_level: 0,
    outbound_sequence: ''
};
const errorMessage = {
    isOpen: false,
    message: '',
    title: '캠페인',
    type: '1',
    onClose: ()=>{},
    onCancle: ()=>{}
};
const CampaignSkillInfo = {
    campaign_id: 0,
    skill_id: []
};
const CampaignDialSpeedInfo = {
    campaign_id: 0,
    tenant_id: 0,
    dial_speed: 0
};
const CampaignCallPacingTabInfo = {
    changeYn: false,
    campaignDialSpeedChangeYn: false,
    onSave: false,
    onClosed: false,
    dial_mode: 0,
    progressive_dial_speed: 0,
    predictive_dial_speed: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CampaignInfo": (()=>CampaignInfo),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/CampaignManager/CampaignManagerDetail.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$SkillListPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/SkillListPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkillUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignManagerInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignScheduleInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForDialSpeedUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForDialSpeedUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/hooks/useApiForMain.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CallingNumberPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CallingNumberPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const dialModeList = [
    {
        dial_id: 1,
        dial_name: 'Power'
    },
    {
        dial_id: 2,
        dial_name: 'Progressive'
    },
    {
        dial_id: 3,
        dial_name: 'Predictive'
    },
    {
        dial_id: 4,
        dial_name: 'System Preview'
    }
];
const errorMessage = {
    isOpen: false,
    message: '',
    title: '캠페인',
    type: '1',
    onClose: ()=>{},
    onCancle: ()=>{}
};
const CampaignSkillInfo = {
    campaign_id: 0,
    skill_id: []
};
const CallingNumberInfo = {
    campaign_id: 0,
    calling_number: ''
};
const CampaignDialSpeedInfo = {
    campaign_id: 0,
    tenant_id: 0,
    dial_speed: 0
};
const CampaignManagerInfo = {
    campaign_id: 0,
    campaign_name: '',
    campaign_desc: '',
    site_code: 0,
    service_code: 0,
    start_flag: 0,
    end_flag: 0,
    dial_mode: 1,
    callback_kind: 2,
    delete_flag: 0,
    list_count: 0,
    list_redial_query: '',
    next_campaign: 0,
    token_id: 0,
    phone_order: '',
    phone_dial_try1: 0,
    phone_dial_try2: 0,
    phone_dial_try3: 0,
    phone_dial_try4: 0,
    phone_dial_try5: 0,
    dial_try_interval: 20,
    trunk_access_code: '',
    DDD_code: '',
    power_divert_queue: '0',
    max_ring: 0,
    detect_mode: 1,
    auto_dial_interval: 30,
    creation_user: '',
    creation_time: '',
    creation_ip: '',
    update_user: '',
    update_time: '',
    update_ip: '',
    dial_phone_id: 0,
    tenant_id: -1,
    alarm_answer_count: 0,
    dial_speed: 0,
    parent_campaign: 0,
    overdial_abandon_time: 2,
    list_alarm_count: 100,
    supervisor_phone: '',
    reuse_count: 0,
    use_counsel_result: 0,
    use_list_alarm: 0,
    redial_strategy1: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy2: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy3: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy4: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    redial_strategy5: "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
    dial_mode_option: 0,
    user_option: '',
    customer_char_id: 1,
    counsel_script_id: 1,
    announcement_id: 1,
    campaign_level: 0,
    outbound_sequence: ''
};
const CampaignInfo = {
    campaign_id: 0,
    campaign_name: '',
    campaign_desc: '',
    site_code: 0,
    service_code: 0,
    start_flag: 0,
    end_flag: 0,
    dial_mode: 1,
    callback_kind: 0,
    delete_flag: 0,
    list_count: 0,
    list_redial_query: '',
    next_campaign: 0,
    token_id: 0,
    phone_order: '',
    phone_dial_try: [
        0,
        0,
        0,
        0,
        0
    ],
    dial_try_interval: 20,
    trunk_access_code: '',
    DDD_code: '',
    power_divert_queue: 0,
    max_ring: 0,
    detect_mode: 1,
    auto_dial_interval: 30,
    creation_user: '',
    creation_time: '',
    creation_ip: '',
    update_user: '',
    update_time: '',
    update_ip: '',
    dial_phone_id: 0,
    tenant_id: -1,
    alarm_answer_count: 0,
    dial_speed: 0,
    parent_campaign: 0,
    overdial_abandon_time: 2,
    list_alarm_count: 100,
    supervisor_phone: '',
    reuse_count: 0,
    use_counsel_result: 0,
    use_list_alarm: 0,
    redial_strategy: [
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
        "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0"
    ],
    dial_mode_option: 0,
    user_option: '',
    campaign_status: 0
};
const today = new Date();
const CampaignScheduleInfo = {
    campaign_id: 0,
    tenant_id: 0,
    start_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
    end_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
    start_time: [],
    end_time: []
};
const CampaignCallPacingTabInfo = {
    changeYn: false,
    campaignDialSpeedChangeYn: false,
    onSave: false,
    onClosed: false,
    dial_mode: 0,
    progressive_dial_speed: 0,
    predictive_dial_speed: 0
};
const NewCampaignManagerDetail = ({ tenantId })=>{
    _s();
    const [tempCampaignManagerInfo, setTempCampaignManagerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignManagerInfo);
    const [tempCampaignInfo, setTempCampaignsInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignInfo);
    const [tempCampaignSkills, setTempCampaignSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignSkillInfo);
    const [tempCallingNumberInfo, setTempCallingNumberInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CallingNumberInfo);
    const [tempCampaignSchedule, setTempCampaignSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignScheduleInfo);
    const [tempCampaignDialSpeedInfo, setTempCampaignDialSpeedInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignDialSpeedInfo);
    const [tempCampaignDialSpeedInfoParam, setTempCampaignDialSpeedInfoParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignCallPacingTabInfo);
    const [changeYn, setChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 변경여부
    const [campaignInfoChangeYn, setCampaignInfoChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // 캠페인정보 변경여부
    const [campaignSkillChangeYn, setCampaignSkillChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 캠페인스킬 변경여부
    const [callingNumberChangeYn, setCallingNumberChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 캠페인 발신번호 변경여부
    const [campaignDialSpeedChangeYn, setCampaignDialSpeedChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 캠페인 발신속도 변경여부
    const [campaignSaveYn, setCampaignSaveYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 캠페인 저장여부
    const { tenants, setCampaigns, selectedCampaign, setSelectedCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { removeTab, activeTabId, activeTabKey, addTab, openedTabs, setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { callingNumbers, campaignSkills, schedules, setCampaignSkills, setSchedules, setCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [inputSkills, setInputSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputCallingNumber, setInputCallingNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [skillPopupState, setSkillPopupState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        param: [],
        tenantId: 0,
        type: '1'
    });
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    const [callingNumberPopupState, setCallingNumberPopupState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        param: [],
        tenantId: 0,
        type: '1'
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tempCampaignId, setTempCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { id, menu_role_id, session_key, tenant_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    //input data change
    const handleInputData = (value, col)=>{
        if (col === 'campaign_id' && value !== '') {
            const numValue = Number(value);
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                campaign_id: numValue
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                campaign_id: numValue
            });
        }
        if (col === 'campaign_name') {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                campaign_name: value
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                campaign_name: value
            });
        }
        if (col === 'campaign_desc') {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                campaign_desc: value
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                campaign_desc: value
            });
        }
    };
    //select data change
    const handleSelectChange = (value, type)=>{
        if (type === 'tenant' && value !== '') {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                tenant_id: Number(value)
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                tenant_id: Number(value)
            });
        }
        if (type === 'dialMode' && value !== '') {
            console.log('dialMode');
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                dial_mode: Number(value)
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                dial_mode: Number(value)
            });
            setTempCampaignDialSpeedInfoParam({
                ...tempCampaignDialSpeedInfoParam,
                dial_mode: Number(value)
            });
        }
    };
    //스킬 선택 팝업 버튼이벤트
    const handleOpenSkillPopup = ()=>{
        console.log(tempCampaignInfo.tenant_id);
        if (tempCampaignInfo.tenant_id < 0) {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: '테넌트를 선택해 주세요.',
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        } else {
            setSkillPopupState({
                ...skillPopupState,
                isOpen: true
            });
        }
    };
    //스킬 선택 팝업
    const handleSelectSkills = (param)=>{
        if (tempCampaignSkills.skill_id.join(',') !== param) {
            setCampaignSkillChangeYn(true);
            setInputSkills(param);
            setTempCampaignSkills({
                ...tempCampaignSkills,
                campaign_id: tempCampaignInfo.campaign_id,
                skill_id: param.split(',').map((data)=>Number(data))
            });
        }
        setSkillPopupState((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    //발신번호 팝업
    const handleCallingNumlber = (param)=>{
        if (inputCallingNumber !== param) {
            setCallingNumberChangeYn(true);
            setInputCallingNumber(param);
            setTempCallingNumberInfo({
                ...tempCallingNumberInfo,
                campaign_id: tempCampaignInfo.campaign_id,
                calling_number: param
            });
        }
        setCallingNumberPopupState((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    //캠페인 동작시간 탭 변경
    const handleCampaignScheduleChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                start_flag: Number(value.start_flag)
            });
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                start_flag: Number(value.start_flag)
            });
        }
        if (value.campaignScheduleChangeYn) {
            setTempCampaignSchedule({
                ...tempCampaignSchedule,
                campaign_id: value.campaign_id,
                start_date: value.start_date,
                end_date: value.end_date,
                start_time: value.start_time,
                end_time: value.end_time
            });
        }
        if (value.onSave) {
            setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 발신순서 탭 변경
    const handleCampaignOutgoingOrderChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                dial_phone_id: Number(value.dial_phone_id),
                phone_dial_try: value.phone_dial_try,
                phone_order: value.phone_order
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                dial_phone_id: Number(value.dial_phone_id),
                phone_dial_try1: value.phone_dial_try[0],
                phone_dial_try2: value.phone_dial_try[1],
                phone_dial_try3: value.phone_dial_try[2],
                phone_dial_try4: value.phone_dial_try[3],
                phone_dial_try5: value.phone_dial_try[4],
                phone_order: value.phone_order
            });
        }
        if (value.onSave) {
            setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 발신전략 탭 변경
    const handleOutgoingStrategyTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                redial_strategy: value.redial_strategy
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                redial_strategy1: value.redial_strategy[0],
                redial_strategy2: value.redial_strategy[1],
                redial_strategy3: value.redial_strategy[2],
                redial_strategy4: value.redial_strategy[3],
                redial_strategy5: value.redial_strategy[4]
            });
        }
        //초기화버튼 클릭시
        if (value.onInit) {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                redial_strategy: CampaignInfo.redial_strategy
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                redial_strategy1: CampaignManagerInfo.redial_strategy1,
                redial_strategy2: CampaignManagerInfo.redial_strategy2,
                redial_strategy3: CampaignManagerInfo.redial_strategy3,
                redial_strategy4: CampaignManagerInfo.redial_strategy4,
                redial_strategy5: CampaignManagerInfo.redial_strategy5
            });
        }
        if (value.onSave) {
            setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 발신방법 탭 변경
    const handleOutgoingMethodTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                trunk_access_code: value.trunk_access_code,
                dial_try_interval: value.dial_try_interval,
                alarm_answer_count: value.alarm_answer_count,
                overdial_abandon_time: value.overdial_abandon_time,
                detect_mode: value.detect_mode,
                auto_dial_interval: value.auto_dial_interval,
                power_divert_queue: value.power_divert_queue,
                next_campaign: value.next_campaign,
                DDD_code: value.DDD_code,
                callback_kind: value.callback_kind,
                max_ring: value.max_ring,
                token_id: value.token_id,
                use_counsel_result: value.use_counsel_result,
                dial_mode_option: value.dial_mode_option,
                user_option: value.user_option
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                trunk_access_code: value.trunk_access_code,
                dial_try_interval: value.dial_try_interval,
                alarm_answer_count: value.alarm_answer_count,
                overdial_abandon_time: value.overdial_abandon_time,
                detect_mode: value.detect_mode,
                auto_dial_interval: value.auto_dial_interval,
                power_divert_queue: value.power_divert_queue + '',
                next_campaign: value.next_campaign,
                DDD_code: value.DDD_code,
                callback_kind: value.callback_kind,
                max_ring: value.max_ring,
                token_id: value.token_id,
                use_counsel_result: value.use_counsel_result,
                dial_mode_option: value.dial_mode_option,
                user_option: value.user_option
            });
        }
        if (value.onSave) {
            setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 콜페이싱 탭 변경
    const handleCallPacingTabChange = (value)=>{
        if (value.campaignDialSpeedChangeYn) {
            setCampaignDialSpeedChangeYn(value.campaignDialSpeedChangeYn);
            setTempCampaignDialSpeedInfoParam({
                ...tempCampaignDialSpeedInfoParam,
                predictive_dial_speed: value.predictive_dial_speed,
                progressive_dial_speed: value.progressive_dial_speed
            });
            setTempCampaignDialSpeedInfo({
                ...tempCampaignDialSpeedInfo,
                dial_speed: value.dial_mode === 2 ? Math.floor(value.progressive_dial_speed) : value.predictive_dial_speed
            });
        }
        if (value.onSave) {
            setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 콜백 탭 변경
    const handleCampaignCallbackTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                dial_phone_id: Number(value.dial_phone_id),
                phone_dial_try: value.phone_dial_try,
                phone_order: value.phone_order
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                dial_phone_id: Number(value.dial_phone_id),
                phone_dial_try1: value.phone_dial_try[0],
                phone_dial_try2: value.phone_dial_try[1],
                phone_dial_try3: value.phone_dial_try[2],
                phone_dial_try4: value.phone_dial_try[3],
                phone_dial_try5: value.phone_dial_try[4],
                phone_order: value.phone_order
            });
        }
        if (value.onSave) {
            setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 콜백 탭 변경
    const handleCallbackTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                callback_kind: Number(value.callback_kind),
                service_code: value.service_code
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                callback_kind: Number(value.callback_kind),
                service_code: value.service_code
            });
        }
        if (value.onSave) {
            // setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 알림 탭 변경
    const handleNotificationTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                list_alarm_count: Number(value.list_alarm_count),
                supervisor_phone: value.supervisor_phone,
                use_list_alarm: value.use_list_alarm
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                list_alarm_count: Number(value.list_alarm_count),
                supervisor_phone: value.supervisor_phone,
                use_list_alarm: value.use_list_alarm
            });
        }
        if (value.onSave) {
            // setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 기타정보 탭 변경
    const handleAdditionalInfoTabChange = (value)=>{
        if (value.onSave) {
            // setCampaignSaveYn(false);
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 취소
    const handleCampaignClosed = ()=>{
        setAlertState({
            ...errorMessage,
            isOpen: true,
            message: '캠페인 편집창을 종료하시겠습니까?',
            onClose: handleCampaignClosedExecute,
            onCancle: ()=>setAlertState((prev)=>({
                        ...prev,
                        isOpen: false
                    }))
        });
    };
    //캠페인 취소 실행.
    const handleCampaignClosedExecute = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        // removeTab(Number(activeTabId),activeTabKey+'');
        const existingTabs = openedTabs.filter((tab)=>tab.id === 13);
        existingTabs.forEach((tab)=>{
            removeTab(tab.id, tab.uniqueKey);
        });
    };
    //캠페인 저장
    const handleCampaignSave = ()=>{
        let saveErrorCheck = false;
        //2018.11.27 Gideon #23127 캠페인 수정창 연결 IVR 입력 예외 처리
        if (!saveErrorCheck && tempCampaignManagerInfo.dial_mode !== 2 && (tempCampaignManagerInfo.power_divert_queue === '0' || tempCampaignManagerInfo.power_divert_queue === '')) {
            saveErrorCheck = true;
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "'발신 방법' 탭의 '연결 IVR NO' 값을 입력해 주시기 바랍니다.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
        // }
        if (!saveErrorCheck && tempCampaignManagerInfo.campaign_name === '') {
            saveErrorCheck = true;
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "캠페인명을 입력해 주세요.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
        if (!saveErrorCheck && isNaN(tempCampaignManagerInfo.tenant_id)) {
            saveErrorCheck = true;
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "테넌트를 선택해 주세요.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
        if (!saveErrorCheck && tempCampaignSchedule.start_time.length === 0) {
            saveErrorCheck = true;
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "시작시간 또는 종료시간을 지정해 주세요.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
        if (!saveErrorCheck) {
            handleCampaignSaveExecute();
        }
    };
    //캠페인 저장 실행.
    const handleCampaignSaveExecute = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        setChangeYn(true);
        fetchCampaignManagerInsert({
            ...tempCampaignManagerInfo,
            update_user: id,
            creation_user: id,
            update_ip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('userHost') + '',
            creation_ip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('userHost') + ''
        });
    };
    const handleBlur = (e)=>{
        const currentValue = e.target.value;
        if (currentValue.startsWith("0") && currentValue.length > 1) {
            e.target.value = currentValue.replace(/^0+/, "");
        }
    };
    //변경여부 체크
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewCampaignManagerDetail.useEffect": ()=>{
            if (changeYn && !campaignInfoChangeYn && !campaignSkillChangeYn && !callingNumberChangeYn && !campaignDialSpeedChangeYn) {
                fetchMain({
                    session_key: session_key,
                    tenant_id: tenant_id
                });
            }
        }
    }["NewCampaignManagerDetail.useEffect"], [
        campaignInfoChangeYn,
        campaignSkillChangeYn,
        callingNumberChangeYn,
        campaignDialSpeedChangeYn
    ]);
    //캠페인 정보 조회 api 호출
    const { mutate: fetchMain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"])({
        onSuccess: {
            "NewCampaignManagerDetail.useApiForMain": (data)=>{
                setCampaigns(data.result_data);
                setSelectedCampaign(data.result_data.filter({
                    "NewCampaignManagerDetail.useApiForMain": (campaign)=>campaign.campaign_id === tempCampaignId
                }["NewCampaignManagerDetail.useApiForMain"])[0]);
                setTempCampaignsInfo(data.result_data.filter({
                    "NewCampaignManagerDetail.useApiForMain": (campaign)=>campaign.campaign_id === tempCampaignId
                }["NewCampaignManagerDetail.useApiForMain"])[0]);
                //   setChangeYn(false);
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: '작업이 완료되었습니다.',
                    type: '2',
                    onClose: handleClose
                });
            }
        }["NewCampaignManagerDetail.useApiForMain"]
    });
    const handleClose = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        removeTab(Number(activeTabId), activeTabKey + '');
    };
    //캠페인 발신번호 추가 api 호출
    const { mutate: fetchCallingNumberInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"])({
        onSuccess: {
            "NewCampaignManagerDetail.useApiForCallingNumberInsert": (data)=>{
                setCallingNumberChangeYn(false);
            }
        }["NewCampaignManagerDetail.useApiForCallingNumberInsert"]
    });
    //캠페인 정보 수정 api 호출
    const { mutate: fetchCampaignManagerInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerInsert"])({
        onSuccess: {
            "NewCampaignManagerDetail.useApiForCampaignManagerInsert": (data)=>{
                setTempCampaignId(data.result_data.campaign_id);
                const _tempCampaignSchedule = {
                    ...tempCampaignSchedule,
                    tenant_id: tempCampaignManagerInfo.tenant_id,
                    campaign_id: data.result_data.campaign_id
                };
                //캠페인 스케줄 수정 api 호출
                fetchCampaignScheduleInsert(_tempCampaignSchedule);
            }
        }["NewCampaignManagerDetail.useApiForCampaignManagerInsert"],
        onError: {
            "NewCampaignManagerDetail.useApiForCampaignManagerInsert": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "NewCampaignManagerDetail.useApiForCampaignManagerInsert": ()=>goLogin()
                        }["NewCampaignManagerDetail.useApiForCampaignManagerInsert"]
                    });
                }
            }
        }["NewCampaignManagerDetail.useApiForCampaignManagerInsert"]
    });
    const goLogin = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
        router.push('/login');
    };
    //캠페인 스킬 수정 api 호출
    const { mutate: fetchCampaignSkillUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"])({
        onSuccess: {
            "NewCampaignManagerDetail.useApiForCampaignSkillUpdate": (data)=>{
                setCampaignSkillChangeYn(false);
            }
        }["NewCampaignManagerDetail.useApiForCampaignSkillUpdate"]
    });
    //캠페인 스케줄 등록 api 호출
    const { mutate: fetchCampaignScheduleInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleInsert"])({
        onSuccess: {
            "NewCampaignManagerDetail.useApiForCampaignScheduleInsert": (data)=>{
                if (tempCampaignSkills.skill_id.length > 0) {
                    const _tempCampaignSkills = {
                        ...tempCampaignSkills,
                        campaign_id: tempCampaignId
                    };
                    fetchCampaignSkillUpdate(_tempCampaignSkills);
                }
                if (tempCallingNumberInfo.calling_number !== '') {
                    const _tempCallingNumberInfo = {
                        ...tempCallingNumberInfo,
                        campaign_id: tempCampaignId
                    };
                    fetchCallingNumberInsert(_tempCallingNumberInfo);
                }
                setCampaignInfoChangeYn(false);
            }
        }["NewCampaignManagerDetail.useApiForCampaignScheduleInsert"]
    });
    //캠페인 발신 속도 수정 api 호출
    const { mutate: fetchDialSpeedUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForDialSpeedUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialSpeedUpdate"])({
        onSuccess: {
            "NewCampaignManagerDetail.useApiForDialSpeedUpdate": (data)=>{
                setCampaignDialSpeedChangeYn(false);
            }
        }["NewCampaignManagerDetail.useApiForDialSpeedUpdate"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewCampaignManagerDetail.useEffect": ()=>{
            if (id !== '') {
                setTempCampaignManagerInfo({
                    ...tempCampaignManagerInfo,
                    update_user: id,
                    creation_user: id
                });
            }
        }
    }["NewCampaignManagerDetail.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewCampaignManagerDetail.useEffect": ()=>{
            if (tenantId !== '') {
                setTempCampaignsInfo({
                    ...tempCampaignInfo,
                    tenant_id: Number(tenantId)
                });
                setTempCampaignManagerInfo({
                    ...tempCampaignManagerInfo,
                    tenant_id: Number(tenantId)
                });
            }
        }
    }["NewCampaignManagerDetail.useEffect"], [
        tenantId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5 w-full overflow-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "border-b border-gray-300 pb-1",
                        title: "캠페인정보",
                        buttons: [
                            {
                                label: "캠페인 생성",
                                onClick: ()=>handleCampaignSave()
                            },
                            {
                                label: "생성 취소",
                                onClick: ()=>handleCampaignClosed()
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                        lineNumber: 904,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-x-[24px] gap-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[90px] min-w-[90px]",
                                        children: "캠페인 아이디"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 914,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "number",
                                        value: tempCampaignInfo.campaign_id,
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_id'),
                                        className: "",
                                        min: "0",
                                        onBlur: handleBlur
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 915,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                lineNumber: 913,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "테넌트"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 926,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        onValueChange: (value)=>handleSelectChange(value, 'tenant'),
                                        value: tempCampaignInfo.tenant_id + '' || '',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "테넌트를 선택하세요"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                    lineNumber: 932,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                lineNumber: 931,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: tenants.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.tenant_id.toString(),
                                                        children: option.tenant_name
                                                    }, option.tenant_id, false, {
                                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                        lineNumber: 936,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                lineNumber: 934,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 927,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                lineNumber: 925,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "캠페인명"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 945,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: tempCampaignInfo.campaign_name || '',
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_name'),
                                        className: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 946,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                lineNumber: 944,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[90px] min-w-[90px]",
                                        children: "다이얼 모드"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 954,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        onValueChange: (value)=>handleSelectChange(value, 'dialMode'),
                                        value: tempCampaignInfo.dial_mode + '',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "다이얼 모드를 선택하세요"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                lineNumber: 959,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: dialModeList.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.dial_id.toString(),
                                                        children: option.dial_name
                                                    }, option.dial_id, false, {
                                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                        lineNumber: 964,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                                lineNumber: 962,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 955,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "스킬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 972,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: inputSkills,
                                        className: "w-full",
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 973,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "absolute right-2 top-[52%] transform -translate-y-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/skill-popup.svg",
                                            alt: "스킬팝업",
                                            width: 12,
                                            height: 12,
                                            priority: true,
                                            onClick: ()=>handleOpenSkillPopup()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                            lineNumber: 976,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 974,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                lineNumber: 971,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "발신번호"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 987,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: inputCallingNumber,
                                        className: "w-full",
                                        disabled: selectedCampaign !== null,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 988,
                                        columnNumber: 13
                                    }, this),
                                    menu_role_id === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                        variant: "outline",
                                        className: "h-[24px]",
                                        onClick: ()=>setCallingNumberPopupState({
                                                ...callingNumberPopupState,
                                                isOpen: true
                                            }),
                                        children: "발신번호 변경"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 992,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                lineNumber: 986,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[90px] min-w-[90px]",
                                        children: "설명"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 1003,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: tempCampaignInfo.campaign_desc || '',
                                        className: "w-full",
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_desc')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                                lineNumber: 1002,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                        lineNumber: 912,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                lineNumber: 903,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    campaignSchedule: tempCampaignSchedule,
                    callCampaignMenu: 'NewCampaignManager',
                    campaignInfo: tempCampaignInfo,
                    campaignDialSpeedInfo: tempCampaignDialSpeedInfoParam,
                    onCampaignOutgoingOrderChange: (value)=>handleCampaignOutgoingOrderChange(value),
                    onCampaignScheduleChange: (value)=>handleCampaignScheduleChange(value),
                    onCampaignOutgoingStrategyChange: (value)=>handleOutgoingStrategyTabChange(value),
                    onCampaignOutgoingMethodChange: (value)=>handleOutgoingMethodTabChange(value),
                    onHandleCallPacingTabChange: (value)=>handleCallPacingTabChange(value),
                    onHandleAdditionalInfoTabChange: (value)=>handleAdditionalInfoTabChange(value),
                    onHandleCallbackTabChange: (value)=>handleCallbackTabChange(value),
                    onHandleNotificationTabChange: (value)=>handleNotificationTabChange(value)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                    lineNumber: 1011,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                lineNumber: 1010,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$SkillListPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                param: tempCampaignSkills.skill_id || [],
                tenantId: tempCampaignInfo.tenant_id,
                type: skillPopupState.type,
                isOpen: skillPopupState.isOpen,
                onConfirm: (param)=>handleSelectSkills(param),
                onCancel: ()=>setSkillPopupState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                lineNumber: 1025,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                isOpen: alertState.isOpen,
                onClose: ()=>{
                    alertState.onClose();
                },
                onCancle: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                lineNumber: 1033,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CallingNumberPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                param: inputCallingNumber,
                type: callingNumberPopupState.type,
                isOpen: callingNumberPopupState.isOpen,
                onConfirm: (param)=>handleCallingNumlber(param),
                onCancle: ()=>setCallingNumberPopupState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
                lineNumber: 1042,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx",
        lineNumber: 902,
        columnNumber: 5
    }, this);
};
_s(NewCampaignManagerDetail, "ceo4vQh06vTNhYQKlOo5fVdD1Rk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForDialSpeedUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialSpeedUpdate"]
    ];
});
_c = NewCampaignManagerDetail;
const __TURBOPACK__default__export__ = NewCampaignManagerDetail;
var _c;
__turbopack_refresh__.register(_c, "NewCampaignManagerDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/NewCampaignManager/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$NewCampaignManager$2f$NewCampaignManagerDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/NewCampaignManager/NewCampaignManagerDetail.tsx [app-client] (ecmascript)");
// import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
// import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
// import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
// import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
// import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const NewCampaignManager = ({ tenantId })=>{
    _s();
    const { tenants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { campaignIdForUpdateFromSideMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    // const [campaignHeaderSearchParam,setCampaignHeaderSearchParam] = useState<CampaignHeaderSearch>();
    // const handleCampaignHeaderSearch = (param:CampaignHeaderSearch) => {
    //   setCampaignHeaderSearchParam(param);
    // };
    // 스케줄 조회
    // const { mutate: fetchSchedules } = useApiForSchedules({
    //   onSuccess: (data) => {
    //     setSchedules(data.result_data);  
    //     const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id); 
    //     fetchSkills({
    //       tenant_id_array: tempTenantIdArray
    //     });   
    //   }
    // });
    // 스킬 조회
    // const { mutate: fetchSkills } = useApiForSkills({
    //   onSuccess: (data) => {
    //     setSkills(data.result_data);
    //     fetchCallingNumbers({
    //       session_key: '',
    //       tenant_id: 0,
    //     });
    //   }
    // });
    // 전화번호 조회
    // const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    //   onSuccess: (data) => {
    //     setCallingNumbers(data.result_data);
    //     fetchCampaignSkills({
    //       session_key: '',
    //       tenant_id: 0,
    //     });
    //   }
    // });
    // 캠페인스킬 조회
    // const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    //   onSuccess: (data) => {
    //     setCampaignSkills(data.result_data);
    //     fetchPhoneDescriptions({
    //       session_key: '',
    //       tenant_id: 0,
    //     });
    //   }
    // });
    // 전화번호설명 템플릿 조회
    // const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
    //   onSuccess: (data) => {
    //     setPhoneDescriptions(data.result_data);
    //   }
    // });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewCampaignManager.useEffect": ()=>{
            if (typeof tenantId !== 'undefined') {
                console.log(tenantId);
            }
        }
    }["NewCampaignManager.useEffect"], [
        tenantId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-[15px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-[30px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$NewCampaignManager$2f$NewCampaignManagerDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tenantId: tenantId
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/NewCampaignManager/index.tsx",
                    lineNumber: 84,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/NewCampaignManager/index.tsx",
                lineNumber: 83,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/main/comp/NewCampaignManager/index.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/NewCampaignManager/index.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
};
_s(NewCampaignManager, "lvMEux6svLfdDF+3cpTyx2rF+Os=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"]
    ];
});
_c = NewCampaignManager;
const __TURBOPACK__default__export__ = NewCampaignManager;
var _c;
__turbopack_refresh__.register(_c, "NewCampaignManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/AgentStatusMonitoring/component/StatusTimer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/components/shared/StatusTimer.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
const StatusTimer = ({ initialTime, isRunning = true })=>{
    _s();
    // Convert initialTime to seconds from various possible formats
    const parseTimeToSeconds = (time)=>{
        // Handle numeric inputs (already in seconds)
        if (typeof time === 'number') return time;
        if (!isNaN(Number(time))) return Number(time);
        // Handle HH:MM:SS format
        if (time && time.includes(':')) {
            try {
                const [hours, minutes, seconds] = time.split(':').map(Number);
                return hours * 3600 + minutes * 60 + seconds;
            } catch (e) {
                console.error('Error parsing time:', time, e);
                return 0;
            }
        }
        // Default fallback
        return 0;
    };
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(parseTimeToSeconds(initialTime));
    // Format seconds to "HH:MM:SS"
    const formatTime = (totalSeconds)=>{
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const secs = totalSeconds % 60;
        return [
            hours,
            minutes,
            secs
        ].map((val)=>String(val).padStart(2, '0')).join(':');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusTimer.useEffect": ()=>{
            // Reset timer when initialTime changes
            setSeconds(parseTimeToSeconds(initialTime));
        }
    }["StatusTimer.useEffect"], [
        initialTime
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusTimer.useEffect": ()=>{
            let intervalId = null;
            if (isRunning) {
                intervalId = setInterval({
                    "StatusTimer.useEffect": ()=>{
                        setSeconds({
                            "StatusTimer.useEffect": (prevSeconds)=>prevSeconds + 1
                        }["StatusTimer.useEffect"]);
                    }
                }["StatusTimer.useEffect"], 1000);
            }
            return ({
                "StatusTimer.useEffect": ()=>{
                    if (intervalId) clearInterval(intervalId);
                }
            })["StatusTimer.useEffect"];
        }
    }["StatusTimer.useEffect"], [
        isRunning
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: formatTime(seconds)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/component/StatusTimer.tsx",
        lineNumber: 66,
        columnNumber: 10
    }, this);
};
_s(StatusTimer, "wnn6L0qVUM9C+v3kHQVnVCKdtvA=");
_c = StatusTimer;
const __TURBOPACK__default__export__ = StatusTimer;
var _c;
__turbopack_refresh__.register(_c, "StatusTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// // src\app\main\comp\AgentStatusMonitoring\index.tsx
// import React, { useState, useMemo, useEffect } from "react";
// import TitleWrap from "@/components/shared/TitleWrap";
// import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
// import Image from "next/image";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
// import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
// import { Label } from "@/components/ui/label";
// import { useMainStore } from '@/store';
// import { useEnvironmentStore } from '@/store/environmentStore';
// // 타입 임포트
// import {
//   AgentStatus,
//   AgentData,
//   StatusHeaderItem,
//   SortField,
//   SortDirection,
//   AgentStatusMonitoringProps,
//   AgentStateMonitoringListResponse
// } from './types/typeForCunsultantMonitoring';
// import { useApiForGetConsultantStatusMonitorData } from "@/features/monitoring/hooks/useApiForGetConsultantStatusMonitorData";
// import StatusTimer from "./component/StatusTimer";
// const AgentStatusMonitoring: React.FC<AgentStatusMonitoringProps> = ({
//   sessionKey,
//   campaignId,
//   tenantId,
// }) => {
//   // 상태 관리
//   const [selectedStatuses, setSelectedStatuses] = useState<AgentStatus>({
//     waiting: true,
//     processing: false,
//     afterprocessing: false,
//     rest: false
//   });
//   // 정렬 관련 상태
//   const [sortField, setSortField] = useState<SortField>('time');
//   const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
//   const { campaigns } = useMainStore();
//   const [agentData, setAgentData] = useState<AgentData[]>([]);
//   const { statisticsUpdateCycle } = useEnvironmentStore();
//   const handleStatusChange = (status: keyof AgentStatus): void => {
//     setSelectedStatuses(prev => ({
//       ...prev,
//       [status]: !prev[status]
//     }));
//   };
//   const toggleSortDirection = (): void => {
//     setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
//   };
//   const getStatusColor = (status: AgentData['status']): string => {
//     const colors = {
//       waiting: 'text-[#3A9D6C]',
//       processing: 'text-[#C95E5E]',
//       afterprocessing: 'text-[#338BD3]',
//       rest: 'text-[#9459BF]'
//     };
//     return colors[status];
//   };
//   const getStatusText = (status: AgentData['status']): string => {
//     const statusMap = {
//       waiting: '대기',
//       processing: '처리',
//       afterprocessing: '후처리',
//       rest: '휴식'
//     };
//     return statusMap[status];
//   };
//   const sortedAndFilteredAgents = useMemo(() => {
//     const filtered = agentData.filter(agent => selectedStatuses[agent.status]);
//     return [...filtered].sort((a, b) => {
//       let compareA: string | number = a[sortField];
//       let compareB: string | number = b[sortField];
//       if (sortField === 'status') {
//         compareA = getStatusText(a.status);
//         compareB = getStatusText(b.status);
//       }
//       if (sortField === 'time') {
//         // 시간을 초 단위로 변환하여 비교
//         const timeToSeconds = (time: string): number => {
//           const [hours, minutes, seconds] = time.split(':').map(Number);
//           return hours * 3600 + minutes * 60 + seconds;
//         };
//         compareA = timeToSeconds(a.time);
//         compareB = timeToSeconds(b.time);
//       }
//       if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
//       if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
//       return 0;
//     });
//   }, [agentData, selectedStatuses, sortField, sortDirection]);
//   const getStatusCount = (status: AgentData['status']): number => {
//     return agentData.filter(agent => agent.status === status).length;
//   };
//   const statusHeaderItems: StatusHeaderItem[] = [
//     { status: 'waiting', bg: '!bg-[#DDF4F2]', text: '대기 상담사', icon: '/waiting.svg' },
//     { status: 'processing', bg: '!bg-[#FEE9EC]', text: '처리', icon: '/processing.svg' },
//     { status: 'afterprocessing', bg: '!bg-[#E8EFFA]', text: '후처리', icon: '/afterprocessing.svg' },
//     { status: 'rest', bg: '!bg-[#F6F0FA]', text: '휴식', icon: '/rest.svg' }
//   ];
//   // 새로 만든 useApiForGetConsultantStatusMonitorData 훅 사용
//   const { data, refetch, isLoading } = useApiForGetConsultantStatusMonitorData({
//     tenantId: Number(tenantId || 0),
//     campaignId: Number(campaignId || 0),
//     sessionKey: sessionKey || '',
//   }, {
//     enabled: !!sessionKey && tenantId !== 'undefined', // sessionKey가 존재하고 tenantId != null 인 경우
//     refetchInterval: statisticsUpdateCycle > 0 ? statisticsUpdateCycle * 1000 : false,
//   });
//   console.log("AgentStatusMonitoring data", data);
//   useEffect(() => {
//     if (data && data.counselorStatusList.length > 0) {
//       const tempDataList: AgentData[] = data.counselorStatusList.map((item, index) => ({
//         id: index,
//         status: item.statusCode === '204'
//           ? 'waiting'
//           : item.statusCode === '205'
//             ? 'processing'
//             : item.statusCode === '206'
//               ? 'afterprocessing'
//               : 'rest',
//         agent: item.counselorId,
//         name: item.counselorName,
//         time: item.statusTime || '0',
//       }));
//       setAgentData(tempDataList);
//     }else{
//       setAgentData([]);
//     }
//   }, [data]);
//   return (
//     <>
//       <div>
//         <TitleWrap
//           // title={`상담사 상태 통계${campaignId ? ` (캠페인 ID: ${campaignId})` : ''} tenantId: ${tenantId}`}
//           title={`상담사 상태 통계`}
//           className="border-b border-gray-300 pb-1"
//         />
//         <Table>
//           <tbody>
//             <TableRow>
//               {statusHeaderItems.map(item => (
//                 <TableHeader
//                   key={item.status}
//                   className={`${item.bg} !text-center text-sm font-normal !h-[30px] ${getStatusColor(item.status)}`}
//                 >
//                   <div className="flex items-center gap-2 justify-center">
//                     <Image
//                       src={item.icon}
//                       alt={item.text}
//                       width={14}
//                       height={14}
//                       priority
//                     />
//                     {item.text}
//                   </div>
//                 </TableHeader>
//               ))}
//             </TableRow>
//             <TableRow>
//               {statusHeaderItems.map(item => (
//                 <TableCell key={item.status} className="!text-center text-sm !h-[30px]">
//                   {getStatusCount(item.status)}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </tbody>
//         </Table>
//       </div>
//       <div className="h-[calc(100%-115px)]">
//         <TitleWrap
//           title="상담사 상태"
//           className="border-b border-gray-300 pb-1"
//         />
//         <div className="flex justify-between items-center bg-[#f8f8f8] h-[30px] px-5 border-t border-x rounded-t-[3px]">
//           <div className="flex gap-4">
//             {statusHeaderItems.map(item => (
//               <div key={item.status} className="flex gap-1 items-center">
//                 <div className="flex items-center space-x-2">
//                   <CustomCheckbox
//                     id={item.status}
//                     checked={selectedStatuses[item.status]}
//                     onCheckedChange={(checked: boolean) => handleStatusChange(item.status)}
//                   />
//                   <label
//                     htmlFor={item.status}
//                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                   >
//                     {getStatusText(item.status)}
//                   </label>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex gap-4 items-center">
//             <div className="flex items-center gap-2">
//               <Label className="pr-2">정렬선택</Label>
//               <div className="w-[120px]">
//                 <Select value={sortField} onValueChange={(value: SortField) => setSortField(value)}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="시간" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="time">시간</SelectItem>
//                     <SelectItem value="agent">상담사 아이디</SelectItem>
//                     <SelectItem value="name">상담사 이름</SelectItem>
//                     <SelectItem value="status">상태</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <button
//               onClick={toggleSortDirection}
//               type="button"
//               aria-label={sortDirection === 'asc' ? "오름차순" : "내림차순"}
//             >
//               <Image
//                 src="/sort_button.svg"
//                 alt={sortDirection === 'asc' ? "오름차순" : "내림차순"}
//                 width={12}
//                 height={12}
//                 className={sortDirection === 'desc' ? "rotate-180" : ""}
//               />
//             </button>
//           </div>
//         </div>
//         <div className="h-[calc(100%-59px)] overflow-auto border border-[#ebebeb] rounded-b-[3px]">
//           <table className="w-full table-auto rounded-[3px] border-separate border-spacing-0">
//             <tbody>
//               { sortedAndFilteredAgents && !isLoading ? sortedAndFilteredAgents.map((agent) => (
//                 <tr key={agent.id}>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
//                     <div className={`flex items-center gap-2 justify-center ${getStatusColor(agent.status)}`}>
//                       <Image
//                         src={`/${agent.status}.svg`}
//                         alt={getStatusText(agent.status)}
//                         width={14}
//                         height={14}
//                       />
//                       {getStatusText(agent.status)}
//                     </div>
//                   </td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">{agent.agent}</td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">{agent.name}</td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
//                   <StatusTimer initialTime={agent.time || 0} />
//                   </td>
//                   <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
//                     ({agentData.filter(a => a.status === agent.status).length}/{agentData.length})
//                   </td>
//                 </tr>
//               )) :
//                 (
//                   [...Array(6)].map((_, index) => (
//                     <tr key={`skeleton-${index}`}>
//                       {Array.from({ length: 5 }).map((_, colIndex) => (
//                         <td key={colIndex} className="text-center text-sm border-b px-3 py-1">
//                           <div className="flex justify-center">
//                             <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
//                           </div>
//                         </td>
//                       ))}
//                     </tr>
//                   ))
//                 )
//               }
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };
// export default AgentStatusMonitoring;
// src\app\main\comp\AgentStatusMonitoring\index.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/table-custom.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomCheckbox/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForGetConsultantStatusMonitorData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/monitoring/hooks/useApiForGetConsultantStatusMonitorData.ts [app-client] (ecmascript)"); // Adjust path if needed
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$AgentStatusMonitoring$2f$component$2f$StatusTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/AgentStatusMonitoring/component/StatusTimer.tsx [app-client] (ecmascript)"); // Adjust path if needed
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
// --- Ensure AgentData type reflects time as number ---
// Example modification (adjust in your actual types file):
// export interface AgentData {
//   id: number;
//   status: 'waiting' | 'processing' | 'afterprocessing' | 'rest';
//   agent: string;
//   name: string;
//   time: number; // Changed from string to number
// }
// -----------------------------------------------------
const AgentStatusMonitoring = ({ sessionKey, campaignId, tenantId })=>{
    _s();
    // 상태 관리
    const [selectedStatuses, setSelectedStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        waiting: true,
        processing: true,
        afterprocessing: true,
        rest: true
    });
    // 정렬 관련 상태
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('time'); // Default sort field
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('asc'); // Default sort direction
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])(); // campaigns might not be used here, check if needed
    const [agentData, setAgentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { statisticsUpdateCycle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    const handleStatusChange = (status)=>{
        setSelectedStatuses((prev)=>({
                ...prev,
                [status]: !prev[status]
            }));
    };
    // API 훅 호출
    const { data, refetch, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForGetConsultantStatusMonitorData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForGetConsultantStatusMonitorData"])({
        tenantId: Number(tenantId || 0),
        campaignId: Number(campaignId || 0),
        sessionKey: sessionKey || ''
    }, {
        enabled: !!sessionKey && tenantId !== 'undefined' && tenantId !== null,
        refetchInterval: statisticsUpdateCycle > 0 ? statisticsUpdateCycle * 1000 : false
    });
    // API 데이터 처리 및 상태 업데이트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentStatusMonitoring.useEffect": ()=>{
            // Check if data exists and has the expected structure
            if (data && data.counselorStatusList && data.counselorStatusList.length >= 0) {
                const tempDataList = data.counselorStatusList.map({
                    "AgentStatusMonitoring.useEffect.tempDataList": (item, index)=>{
                        let status;
                        switch(item.statusCode){
                            case '204':
                                status = 'waiting';
                                break;
                            case '205':
                                status = 'processing';
                                break;
                            case '206':
                                status = 'afterprocessing';
                                break;
                            default:
                                status = 'rest'; // Assuming any other code means rest
                        }
                        return {
                            // Use index as numeric ID to match AgentData type
                            id: index,
                            status: status,
                            agent: item.counselorId,
                            name: item.counselorName,
                            // Keep time as string to match AgentData type
                            time: String(item.statusTime || '0')
                        };
                    }
                }["AgentStatusMonitoring.useEffect.tempDataList"]);
                setAgentData(tempDataList);
            } else if (!isLoading && !error) {
                // If data is null/undefined/empty array after loading and no error, clear the list
                setAgentData([]);
            }
        // Add isLoading and error to dependencies if needed, e.g., for clearing data on error
        }
    }["AgentStatusMonitoring.useEffect"], [
        data,
        isLoading,
        error
    ]); // Dependencies for processing data
    const toggleSortDirection = ()=>{
        setSortDirection((prev)=>prev === 'asc' ? 'desc' : 'asc');
    };
    const getStatusColor = (status)=>{
        const colors = {
            waiting: 'text-[#3A9D6C]',
            processing: 'text-[#C95E5E]',
            afterprocessing: 'text-[#338BD3]',
            rest: 'text-[#9459BF]'
        };
        return colors[status];
    };
    const getStatusText = (status)=>{
        const statusMap = {
            waiting: '대기',
            processing: '처리',
            afterprocessing: '후처리',
            rest: '휴식'
        };
        return statusMap[status];
    };
    // 정렬 및 필터링 로직 (useMemo)
    const sortedAndFilteredAgents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AgentStatusMonitoring.useMemo[sortedAndFilteredAgents]": ()=>{
            // Start with filtering
            const filtered = agentData.filter({
                "AgentStatusMonitoring.useMemo[sortedAndFilteredAgents].filtered": (agent)=>selectedStatuses[agent.status]
            }["AgentStatusMonitoring.useMemo[sortedAndFilteredAgents].filtered"]);
            // Then sort the filtered data
            return [
                ...filtered
            ].sort({
                "AgentStatusMonitoring.useMemo[sortedAndFilteredAgents]": (a, b)=>{
                    let compareA = a[sortField];
                    let compareB = b[sortField];
                    // Handle specific sort fields
                    if (sortField === 'status') {
                        compareA = getStatusText(a.status);
                        compareB = getStatusText(b.status);
                        // String comparison
                        return sortDirection === 'asc' ? compareA.localeCompare(compareB) : compareB.localeCompare(compareA);
                    }
                    if (sortField === 'agent' || sortField === 'name') {
                        // String comparison (case-insensitive example)
                        compareA = String(compareA).toLowerCase();
                        compareB = String(compareB).toLowerCase();
                        return sortDirection === 'asc' ? compareA.localeCompare(compareB) : compareB.localeCompare(compareA);
                    }
                    // *** MODIFICATION: Direct numeric comparison for 'time' ***
                    if (sortField === 'time') {
                        // Ensure values are numbers before comparison
                        const numA = typeof compareA === 'string' ? Number(compareA) : compareA;
                        const numB = typeof compareB === 'string' ? Number(compareB) : compareB;
                        return sortDirection === 'asc' ? numA - numB : numB - numA;
                    }
                    // Default fallback (shouldn't be reached with defined SortField types)
                    if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
                    if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
                    return 0;
                }
            }["AgentStatusMonitoring.useMemo[sortedAndFilteredAgents]"]);
        }
    }["AgentStatusMonitoring.useMemo[sortedAndFilteredAgents]"], [
        agentData,
        selectedStatuses,
        sortField,
        sortDirection
    ]); // Dependencies
    const getStatusCount = (status)=>{
        // Count based on the original, unfiltered data
        return agentData.filter((agent)=>agent.status === status).length;
    };
    // Static header items
    const statusHeaderItems = [
        {
            status: 'waiting',
            bg: '!bg-[#DDF4F2]',
            text: '대기',
            icon: '/waiting.svg'
        },
        {
            status: 'processing',
            bg: '!bg-[#FEE9EC]',
            text: '처리',
            icon: '/processing.svg'
        },
        {
            status: 'afterprocessing',
            bg: '!bg-[#E8EFFA]',
            text: '후처리',
            icon: '/afterprocessing.svg'
        },
        {
            status: 'rest',
            bg: '!bg-[#F6F0FA]',
            text: '휴식',
            icon: '/rest.svg'
        }
    ];
    // --- JSX Rendering ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: `상담사 상태 통계`,
                        className: "border-b border-gray-300 pb-1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: statusHeaderItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                            className: `${item.bg} !text-center text-sm font-normal !h-[30px] ${getStatusColor(item.status)}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: item.icon,
                                                        alt: item.text,
                                                        width: 14,
                                                        height: 14,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.text
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                lineNumber: 500,
                                                columnNumber: 19
                                            }, this)
                                        }, item.status, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: statusHeaderItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "!text-center text-sm !h-[30px]",
                                            children: getStatusCount(item.status)
                                        }, item.status, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 515,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-[calc(100%-115px)] mt-2",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "상담사 상태",
                        className: "border-b border-gray-300 pb-1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center bg-[#f8f8f8] h-[40px] px-4 border-t border-x rounded-t-[3px]",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    " ",
                                    statusHeaderItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                    id: item.status,
                                                    checked: selectedStatuses[item.status],
                                                    // Pass boolean directly to onCheckedChange if CustomCheckbox expects it
                                                    onCheckedChange: ()=>handleStatusChange(item.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: item.status,
                                                    className: "text-sm font-medium ml-2 cursor-pointer" // Added ml-2 and cursor-pointer
                                                    ,
                                                    children: getStatusText(item.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, item.status, true, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 535,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 items-center",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[130px]",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: sortField,
                                                onValueChange: (value)=>setSortField(value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "w-full h-8 text-sm",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "정렬 기준"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "time",
                                                                children: "시간"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "agent",
                                                                children: "상담사 아이디"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "name",
                                                                children: "상담사 이름"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                                lineNumber: 561,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "status",
                                                                children: "상태"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                lineNumber: 554,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                        lineNumber: 553,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleSortDirection,
                                        type: "button",
                                        "aria-label": sortDirection === 'asc' ? "오름차순" : "내림차순",
                                        className: "p-1 rounded hover:bg-gray-200" // Added padding and hover effect
                                        ,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/sort_button.svg" // Ensure this path is correct
                                            ,
                                            alt: sortDirection === 'asc' ? "오름차순" : "내림차순",
                                            width: 14,
                                            height: 14,
                                            className: `transition-transform duration-200 ${sortDirection === 'desc' ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 572,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                        lineNumber: 566,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                lineNumber: 551,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow overflow-auto border border-t-0 border-[#ebebeb] rounded-b-[3px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full table-fixed border-separate border-spacing-0",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            style: {
                                                width: '20%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 588,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            style: {
                                                width: '25%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 589,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            style: {
                                                width: '25%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            style: {
                                                width: '15%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            style: {
                                                width: '15%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                    lineNumber: 587,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: isLoading ? // Skeleton Loader
                                    [
                                        ...Array(6)
                                    ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "h-[34px]",
                                            children: [
                                                " ",
                                                Array.from({
                                                    length: 5
                                                }).map((_, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-center text-sm border-b px-3 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center items-center h-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-4 w-20 rounded bg-gray-200 animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, colIndex, false, {
                                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, `skeleton-${index}`, true, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 598,
                                            columnNumber: 19
                                        }, this)) : error ? // Error Message
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "text-center text-red-500 py-4",
                                            children: [
                                                "데이터 로드 중 오류 발생: ",
                                                error.message
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 611,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                        lineNumber: 610,
                                        columnNumber: 18
                                    }, this) : sortedAndFilteredAgents.length === 0 ? // No Data Message
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "text-center text-gray-500 py-4",
                                            children: "표시할 데이터가 없습니다."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 618,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                        lineNumber: 617,
                                        columnNumber: 19
                                    }, this) : // Actual Data Rows
                                    sortedAndFilteredAgents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "h-[34px]",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center text-sm border-b px-3 py-1 text-[#333] truncate",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center gap-1.5 justify-center ${getStatusColor(agent.status)}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: `/${agent.status}.svg`,
                                                                alt: getStatusText(agent.status),
                                                                width: 14,
                                                                height: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 25
                                                            }, this),
                                                            getStatusText(agent.status)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center text-sm border-b px-3 py-1 text-[#333] truncate",
                                                    children: agent.agent
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center text-sm border-b px-3 py-1 text-[#333] truncate",
                                                    children: agent.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center text-sm border-b px-3 py-1 text-[#333]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$AgentStatusMonitoring$2f$component$2f$StatusTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        initialTime: agent.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                        lineNumber: 641,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center text-sm border-b px-3 py-1 text-[#333] truncate",
                                                    children: [
                                                        "(",
                                                        getStatusCount(agent.status),
                                                        "/",
                                                        agentData.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, agent.id, true, {
                                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                            lineNumber: 625,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(AgentStatusMonitoring, "OK+1eheAakkeHfaqWh1z6JIbxfc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForGetConsultantStatusMonitorData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForGetConsultantStatusMonitorData"]
    ];
});
_c = AgentStatusMonitoring;
const __TURBOPACK__default__export__ = AgentStatusMonitoring;
var _c;
__turbopack_refresh__.register(_c, "AgentStatusMonitoring");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/SystemMonitoring/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/table-custom.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForSystemMonitoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/monitoring/hooks/useApiForSystemMonitoring.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
// 상태에 따른 스타일 설정
const statusStyles = {
    normal: {
        bgColor: "#44B67D",
        text: "정상"
    },
    abnormal: {
        bgColor: "#FC5858",
        text: "비정상"
    }
};
// 개별 시스템 컴포넌트
const SystemCard = ({ title, status, pid, time })=>{
    const style = status === "normal" ? statusStyles.normal : statusStyles.abnormal;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: title
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-[#ebebeb] rounded-[3px] px-[40px] py-[25px] flex flex-col gap-5 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded-full",
                                style: {
                                    backgroundColor: style.bgColor
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                style: {
                                    color: style.bgColor
                                },
                                children: style.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        className: "!w-[80%] text-[#333]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                            className: "text-sm font-normal",
                                            children: "pid"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-sm",
                                            children: pid
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                            className: "text-sm font-normal",
                                            children: "time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2d$custom$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-sm",
                                            children: time
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
_c = SystemCard;
const SystemMonitoring = ()=>{
    _s();
    // 상태 관리 추가
    const [systemsData, setSystemsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { statisticsUpdateCycle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    // API 호출 및 응답 처리
    const { mutate: systemMonitoring } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForSystemMonitoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSystemMonitoring"])({
        onSuccess: {
            "SystemMonitoring.useApiForSystemMonitoring": (data)=>{
                // API 응답 데이터를 컴포넌트 데이터 형식으로 변환
                if (data && data.processStatusList && Array.isArray(data.processStatusList)) {
                    if (data.processStatusList.length === 0) {
                        setSystemsData([]);
                    } else {
                        const formattedData = data.processStatusList.map({
                            "SystemMonitoring.useApiForSystemMonitoring.formattedData": (item, index)=>({
                                    id: index + 1,
                                    title: item.name,
                                    status: item.state === 1 ? "normal" : "abnormal",
                                    pid: item.pid.toString(),
                                    time: item.time // time은 그대로 사용
                                })
                        }["SystemMonitoring.useApiForSystemMonitoring.formattedData"]);
                        // #### 요구사항 정렬순서 텍스트 배열
                        const customOrder = [
                            "EXDdesigner",
                            "EXDdbcontrol",
                            "EXDfr",
                            "EXDdialer",
                            "EXDcallpacing",
                            "EXDassist",
                            "EXDListAutomation",
                            "EXDfw",
                            "EXDMMService",
                            "CCbridge1",
                            "CCbridge2"
                        ];
                        // ####
                        const sortedProcessData = formattedData.sort({
                            "SystemMonitoring.useApiForSystemMonitoring.sortedProcessData": (a, b)=>{
                                // b는 원본객체, a는 b의 다음순서객체이며,
                                // customOrder 순서에서 a와 b의 index를 구하고, 음수면 a가 앞으로, 양수면 b가 앞으로 옴
                                // 즉, api받아온 순서를 customOrder의 index에 맞게 앞으로 뒤로 정렬시킨다.
                                return customOrder.indexOf(a.title) - customOrder.indexOf(b.title);
                            }
                        }["SystemMonitoring.useApiForSystemMonitoring.sortedProcessData"]);
                        setSystemsData(sortedProcessData);
                    }
                }
            }
        }["SystemMonitoring.useApiForSystemMonitoring"],
        onError: {
            "SystemMonitoring.useApiForSystemMonitoring": (error)=>{
                console.error(error);
            }
        }["SystemMonitoring.useApiForSystemMonitoring"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemMonitoring.useEffect": ()=>{
            systemMonitoring({}); // 시스템 모니터링 API 호출
            if (statisticsUpdateCycle > 0) {
                const interval = setInterval({
                    "SystemMonitoring.useEffect.interval": ()=>{
                        systemMonitoring({}); // 시스템 모니터링 API 호출
                    }
                }["SystemMonitoring.useEffect.interval"], statisticsUpdateCycle * 1000);
                return ({
                    "SystemMonitoring.useEffect": ()=>clearInterval(interval)
                })["SystemMonitoring.useEffect"];
            }
        }
    }["SystemMonitoring.useEffect"], [
        systemMonitoring,
        statisticsUpdateCycle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full limit-width",
        children: systemsData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 grid-rows-3 gap-[30px]",
            children: systemsData.map((system)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SystemCard, {
                    title: system.title,
                    status: system.status,
                    pid: system.pid,
                    time: system.time
                }, system.id, false, {
                    fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                    lineNumber: 154,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
            lineNumber: 152,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-[300px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-500",
                children: "데이터가 없습니다"
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
                lineNumber: 165,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
            lineNumber: 164,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/SystemMonitoring/index.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
};
_s(SystemMonitoring, "C3WEg4WckDem9VRzPyVsE9iI8AM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$monitoring$2f$hooks$2f$useApiForSystemMonitoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSystemMonitoring"]
    ];
});
_c1 = SystemMonitoring;
const __TURBOPACK__default__export__ = SystemMonitoring;
var _c, _c1;
__turbopack_refresh__.register(_c, "SystemCard");
__turbopack_refresh__.register(_c1, "SystemMonitoring");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// C:\nproject\fe_pdsw\src\app\main\comp\IntegratedMonitoringDashboard.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ui$2f$ZoomableContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/ui/ZoomableContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const IntegratedMonitoringDashboard = ()=>{
    _s();
    const [isAlertOpen, setIsAlertOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOpenAlert = ()=>setIsAlertOpen(true);
    const handleCloseAlert = ()=>setIsAlertOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ui$2f$ZoomableContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZoomableContent"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full p-4 bg-gray-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-center",
                        children: "통합 모니터링 대시보드"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex flex-wrap gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "w-full md:w-1/2 lg:w-1/3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "실시간 메트릭"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: "CPU 사용률"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: "75%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: "메모리 사용률"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: "60%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 35,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: "디스크 사용률"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: "80%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "w-full md:w-1/2 lg:w-1/3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "알림"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                    variant: "destructive",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                                            children: "경고: 메모리 사용률 높음"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                            children: "2023-10-01 12:00:00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                    variant: "destructive",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                                            children: "경고: 디스크 사용률 높음"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                            children: "2023-10-01 13:00:00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "w-full md:w-1/2 lg:w-1/3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "로그"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "2023-10-01 12:00:00 - 시스템 시작"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "2023-10-01 12:05:00 - 사용자 로그인"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "w-full md:w-1/2 lg:w-1/3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "상태 표시기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: "서버 상태"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: "정상"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: "네트워크 상태"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: "정상"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleOpenAlert,
                    className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded",
                    children: "알림 열기"
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "알림",
                    message: "이것은 테스트 알림입니다.",
                    type: "1",
                    isOpen: isAlertOpen,
                    onClose: handleCloseAlert
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_s(IntegratedMonitoringDashboard, "rfLbazSTMuZA9TvK3oqFcBn0DzY=");
_c = IntegratedMonitoringDashboard;
const __TURBOPACK__default__export__ = IntegratedMonitoringDashboard;
var _c;
__turbopack_refresh__.register(_c, "IntegratedMonitoringDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useAssignableSkills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useAssignableSkills.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$storeForSsideMenuCampaignTab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/storeForSsideMenuCampaignTab.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const SkilFilterOptionPannelForCampaignTab = ({ closePanel, onConfirm, selectedSkills: externalSelectedSkills, onSelectedSkillsChange, shouldCloseOnConfirm = false })=>{
    _s();
    const { tenant_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // 통합 스토어에서 스킬 ID 목록 가져오기
    const { skilIdsForCampaignTreeMenu, setSkilIdsForCampaignTreeMenu, setFilterMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$storeForSsideMenuCampaignTab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreeMenuStore"])();
    // 할당 가능한 스킬 목록 가져오기
    const { data: skills = [], isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useAssignableSkills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAssignableSkills"])();
    // 로컬 상태로 체크 박스 선택 상태 관리
    const [localSelectedSkills, setLocalSelectedSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 외부에서 선택된 스킬이 있으면 우선 사용, 없으면 스토어 값 사용
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkilFilterOptionPannelForCampaignTab.useEffect": ()=>{
            if (externalSelectedSkills) {
                setLocalSelectedSkills(externalSelectedSkills);
            } else {
                // 스토어의 문자열 배열을 숫자 배열로 변환
                const numericSkillIds = skilIdsForCampaignTreeMenu.map({
                    "SkilFilterOptionPannelForCampaignTab.useEffect.numericSkillIds": (id)=>Number(id)
                }["SkilFilterOptionPannelForCampaignTab.useEffect.numericSkillIds"]);
                setLocalSelectedSkills(numericSkillIds);
            }
        }
    }["SkilFilterOptionPannelForCampaignTab.useEffect"], [
        externalSelectedSkills,
        skilIdsForCampaignTreeMenu
    ]);
    // 체크박스 변경 핸들러
    const handleSkillChange = (skill_id)=>{
        const updatedSkills = localSelectedSkills.includes(skill_id) ? localSelectedSkills.filter((id)=>id !== skill_id) : [
            ...localSelectedSkills,
            skill_id
        ];
        setLocalSelectedSkills(updatedSkills);
        // 외부 상태 업데이트 콜백이 있으면 호출
        if (onSelectedSkillsChange) {
            onSelectedSkillsChange(updatedSkills);
        }
    };
    // 확인 버튼 → 선택한 스킬 ID를 스토어에 저장하고 패널 닫기
    const handleConfirm = ()=>{
        // 외부에서 관리되는 경우 외부 콜백만 실행
        if (onConfirm) {
            onConfirm();
        } else {
            // 선택된 스킬 ID 배열을 스토어에 저장
            setSkilIdsForCampaignTreeMenu(localSelectedSkills);
            // 선택된 스킬이 있으면 필터 모드를 'skill'로, 없으면 'all'로 설정
            setFilterMode(localSelectedSkills.length > 0 ? 'skill' : 'all');
            if (shouldCloseOnConfirm && closePanel) {
                closePanel();
            }
        }
        // 항상 패널 닫기 (외부 콜백이 처리하지 않는 경우)
        if (!onConfirm && closePanel) {
            closePanel();
        }
    };
    // 취소 버튼 → 로컬 상태 초기화하고 패널 닫기
    const handleCancel = ()=>{
        if (externalSelectedSkills) {
            setLocalSelectedSkills(externalSelectedSkills);
        } else {
            // 스토어의 문자열 배열을 숫자 배열로 변환
            const numericSkillIds = skilIdsForCampaignTreeMenu.map((id)=>Number(id));
            setLocalSelectedSkills(numericSkillIds);
        }
        if (closePanel) {
            closePanel();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-center py-4",
                children: "로딩 중..."
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                lineNumber: 112,
                columnNumber: 21
            }, this),
            isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-center py-4",
                children: "스킬 데이터를 불러오는 중 오류가 발생했습니다."
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                lineNumber: 113,
                columnNumber: 19
            }, this),
            !isLoading && !isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 bg-gray-100 p-2 text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: "선택"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: "아이디"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: "이름"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[300px] overflow-y-auto",
                                children: skills.length > 0 ? skills.map(({ skill_id, skill_name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 p-2 border-t hover:bg-gray-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                    id: `skill-${skill_id}`,
                                                    checked: localSelectedSkills.includes(skill_id),
                                                    onCheckedChange: ()=>handleSkillChange(skill_id)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: skill_id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: skill_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, skill_id, true, {
                                        fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center text-gray-500",
                                    children: "불러올 스킬이 없습니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex justify-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleCancel,
                                variant: "secondary",
                                children: "취소"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleConfirm,
                                children: "확인"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
};
_s(SkilFilterOptionPannelForCampaignTab, "Dzr9rKAdaEg7rnVkaUokMG1UAgY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$storeForSsideMenuCampaignTab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreeMenuStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useAssignableSkills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAssignableSkills"]
    ];
});
_c = SkilFilterOptionPannelForCampaignTab;
const __TURBOPACK__default__export__ = SkilFilterOptionPannelForCampaignTab;
var _c;
__turbopack_refresh__.register(_c, "SkilFilterOptionPannelForCampaignTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// CallSettingBulkUpdateFormForCampaingGroup.tsx
__turbopack_esm__({
    "CallSettingBulkUpdateFormForCampaingGroup": (()=>CallSettingBulkUpdateFormForCampaingGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)"); // shadcn/ui Tabs components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/select.tsx [app-client] (ecmascript)"); // shadcn/ui Select components
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>"); // Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function CallSettingBulkUpdateFormForCampaingGroup({ groupId } = {}) {
    _s();
    // Main 탭 목록
    const tabs = [
        {
            key: "registrationTime",
            label: "등록시간"
        },
        {
            key: "callingOrder",
            label: "발신순서"
        },
        {
            key: "callingStrategy",
            label: "발신전략"
        },
        {
            key: "callingMethod",
            label: "발신방법"
        },
        {
            key: "callLineCount",
            label: "콜라인수"
        },
        {
            key: "lunarCalendar",
            label: "음력"
        },
        {
            key: "assignedCounselor",
            label: "할당상담사"
        },
        {
            key: "otherInfo",
            label: "기타정보"
        }
    ];
    // 선택된 탭 상태 관리 (기본값 "registrationTime")
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tabs[0].key);
    // 전화번호 탭 목록 (발신순서 탭 내부에서 사용)
    const phoneNumbers = [
        {
            id: 1,
            label: "고객 전화번호(1)"
        },
        {
            id: 2,
            label: "고객 전화번호(2)"
        },
        {
            id: 3,
            label: "고객 전화번호(3)"
        },
        {
            id: 4,
            label: "고객 전화번호(4)"
        },
        {
            id: 5,
            label: "고객 전화번호(5)"
        }
    ];
    // 발신순서 탭 외 다른 탭의 기본 내용 (placeholder)
    const tabContents = {
        registrationTime: "등록시간 관련 내용을 여기에 표시합니다.",
        callingStrategy: "발신전략 관련 내용을 여기에 표시합니다.",
        callingMethod: "발신방법 관련 내용을 여기에 표시합니다.",
        callLineCount: "콜라인수 관련 내용을 여기에 표시합니다.",
        lunarCalendar: "음력 관련 내용을 여기에 표시합니다.",
        assignedCounselor: "할당상담사 관련 내용을 여기에 표시합니다.",
        otherInfo: "기타정보 관련 내용을 여기에 표시합니다."
    };
    const [selectedPhoneId, setSelectedPhoneId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 선택된 Phone ID
    const [selectedPhoneNumberTab, setSelectedPhoneNumberTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); //선택된 번호 탭
    const [leftPhoneNumbers, setLeftPhoneNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(phoneNumbers); // 왼쪽 전화번호 목록
    const [rightPhoneNumbers, setRightPhoneNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 오른쪽 전화번호 목록 (순서 포함)
    // 오른쪽으로 전화번호 이동
    const moveNumberToRight = ()=>{
        if (selectedPhoneId) {
            const selectedNumber = leftPhoneNumbers.find((num)=>num.id === selectedPhoneId);
            if (selectedNumber) {
                setRightPhoneNumbers([
                    ...rightPhoneNumbers,
                    selectedNumber
                ]);
                setLeftPhoneNumbers(leftPhoneNumbers.filter((num)=>num.id !== selectedPhoneId));
                setSelectedPhoneId(null); // 선택 해제
            }
        }
    };
    // 왼쪽으로 전화번호 이동
    const moveNumberToLeft = ()=>{
        if (selectedPhoneId) {
            const selectedNumber = rightPhoneNumbers.find((num)=>num.id === selectedPhoneId);
            if (selectedNumber) {
                setLeftPhoneNumbers([
                    ...leftPhoneNumbers,
                    selectedNumber
                ]);
                setRightPhoneNumbers(rightPhoneNumbers.filter((num)=>num.id !== selectedPhoneId));
                setSelectedPhoneId(null);
            }
        }
    };
    // 위로 이동
    const moveNumberUp = ()=>{
        if (selectedPhoneId) {
            const currentIndex = rightPhoneNumbers.findIndex((num)=>num.id === selectedPhoneId);
            if (currentIndex > 0) {
                const newRightPhoneNumbers = [
                    ...rightPhoneNumbers
                ];
                const temp = newRightPhoneNumbers[currentIndex];
                newRightPhoneNumbers[currentIndex] = newRightPhoneNumbers[currentIndex - 1];
                newRightPhoneNumbers[currentIndex - 1] = temp;
                setRightPhoneNumbers(newRightPhoneNumbers);
            }
        }
    };
    // 아래로 이동
    const moveNumberDown = ()=>{
        if (selectedPhoneId) {
            const currentIndex = rightPhoneNumbers.findIndex((num)=>num.id === selectedPhoneId);
            if (currentIndex < rightPhoneNumbers.length - 1) {
                const newRightNumbers = [
                    ...rightPhoneNumbers
                ];
                const temp = newRightNumbers[currentIndex];
                newRightNumbers[currentIndex] = newRightNumbers[currentIndex + 1];
                newRightNumbers[currentIndex + 1] = temp;
                setRightPhoneNumbers(newRightNumbers);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-3 flex flex-col h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
            value: activeTab,
            onValueChange: setActiveTab,
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                    className: "mb-4",
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: tab.key,
                            className: "px-4 py-2",
                            children: tab.label
                        }, tab.key, false, {
                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: tab.key,
                        className: "flex-1",
                        children: tab.key === "callingOrder" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mr-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm mr-2",
                                                    children: "Phone ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: (value)=>setSelectedPhoneId(Number(value)),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "w-[180px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "선택"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: (leftPhoneNumbers.length > 0 ? leftPhoneNumbers : rightPhoneNumbers).map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: num.id.toString(),
                                                                    children: num.label
                                                                }, num.id, false, {
                                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex border border-gray-300",
                                            children: phoneNumbers.map((phone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: selectedPhoneNumberTab === phone.id ? "default" : "ghost",
                                                    className: `px-3 py-1 text-sm ${selectedPhoneNumberTab === phone.id ? "" : ""}`,
                                                    onClick: ()=>setSelectedPhoneNumberTab(phone.id),
                                                    children: phone.label
                                                }, phone.id, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-300 p-2 flex-1 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium mb-2",
                                            children: "전화번호별 발신순서 편집"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-48 border border-gray-300 mr-2 overflow-auto",
                                                    children: leftPhoneNumbers.map((phone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-1 text-sm cursor-pointer ${selectedPhoneId === phone.id ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`,
                                                            onClick: ()=>setSelectedPhoneId(phone.id),
                                                            children: phone.label
                                                        }, phone.id, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center space-y-2 mr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: moveNumberToRight,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: moveNumberToLeft,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 border border-gray-300 flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex border-b border-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-2 py-1 text-sm w-24 text-center border-r border-gray-300",
                                                                    children: "순서"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 text-center py-1 text-sm",
                                                                    children: "전화번호 그룹"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 overflow-auto",
                                                            children: rightPhoneNumbers.map((phone, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex items-center border-b border-gray-300 last:border-none ${selectedPhoneId === phone.id ? 'bg-blue-100' : ''}`,
                                                                    onClick: ()=>setSelectedPhoneId(phone.id),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-24 text-center text-sm border-r border-gray-300 p-1",
                                                                            children: index + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                            lineNumber: 209,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 p-1 text-sm",
                                                                            children: phone.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                            lineNumber: 210,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, phone.id, true, {
                                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center space-y-2 ml-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: moveNumberUp,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: moveNumberDown,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: tabContents[tab.key]
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 230,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                            lineNumber: 229,
                            columnNumber: 15
                        }, this)
                    }, tab.key, false, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(CallSettingBulkUpdateFormForCampaingGroup, "nxeu37SJVN40sCgT0dOhmRlfrX8=");
_c = CallSettingBulkUpdateFormForCampaingGroup;
var _c;
__turbopack_refresh__.register(_c, "CallSettingBulkUpdateFormForCampaingGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CampaignInfoBulkUpdateFormForCampaingGroup": (()=>CampaignInfoBulkUpdateFormForCampaingGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CampaignInfoBulkUpdateFormForCampaingGroup({ groupId = "37", groupName = "037" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 border-b border-gray-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-300 px-3 py-1.5 font-medium border-b border-gray-400",
                children: "캠페인 정보"
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-24 text-sm",
                                        children: "그룹 아이디"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: groupId,
                                        readOnly: true,
                                        className: "border border-gray-300 px-2 py-1 w-32 bg-gray-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-16 text-sm",
                                        children: "테넌트"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "border border-gray-300 px-2 py-1 w-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-20 text-sm",
                                        children: "그룹 이름"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        defaultValue: groupName,
                                        className: "border border-gray-300 px-2 py-1 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-24 text-sm",
                                        children: "다이얼모드"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "border border-gray-300 px-2 py-1 w-32",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Power",
                                                children: "Power"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Preview",
                                                children: "Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Progressive",
                                                children: "Progressive"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-16 text-sm",
                                        children: "스킬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "border border-gray-300 px-2 py-1 flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "border border-gray-300 px-3 bg-gray-100",
                                                children: "..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "w-16 text-sm",
                                children: "설명"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border border-gray-300 px-2 py-1 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = CampaignInfoBulkUpdateFormForCampaingGroup;
var _c;
__turbopack_refresh__.register(_c, "CampaignInfoBulkUpdateFormForCampaingGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupBulkUpdatePanel$2f$CallSettingBulkUpdateFormForCampaingGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CallSettingBulkUpdateFormForCampaingGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupBulkUpdatePanel$2f$CampaignInfoBulkUpdateFormForCampaingGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/CampaignInfoBulkUpdateFormForCampaingGroup.tsx [app-client] (ecmascript)");
;
;
;
const CampaignGroupBulkUpdatePanel = ({ groupId, groupName })=>{
    console.log("CampaignGroupBulkUpdatePanel !!!!!!!!!: ", groupId, groupName);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col border border-gray-300 bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center bg-gray-300 px-3 py-1.5 border-b border-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-medium",
                        children: [
                            "캠페인 그룹 일괄 수정 (groupId : ",
                            groupId,
                            " , groupName: ",
                            groupName,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-1.5 hover:bg-gray-400 rounded",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "campaign-info-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupBulkUpdatePanel$2f$CampaignInfoBulkUpdateFormForCampaingGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignInfoBulkUpdateFormForCampaingGroup"], {
                    groupId: groupId,
                    groupName: groupName
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "call-setting-section flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupBulkUpdatePanel$2f$CallSettingBulkUpdateFormForCampaingGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallSettingBulkUpdateFormForCampaingGroup"], {}, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 p-3 border-t border-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-8 py-1.5 bg-gray-600 text-white rounded hover:bg-gray-700",
                        children: "확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-8 py-1.5 bg-gray-400 text-white rounded hover:bg-gray-500",
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = CampaignGroupBulkUpdatePanel;
const __TURBOPACK__default__export__ = CampaignGroupBulkUpdatePanel;
var _c;
__turbopack_refresh__.register(_c, "CampaignGroupBulkUpdatePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/TabContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$preferences$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/preferences/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$SystemPreferences$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/SystemPreferences/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$Campaignprogress$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/Campaignprogress/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignMonitorDashbord$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignMonitorDashbord/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$OutboundCallProgressPanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/OutboundCallProgressPanel/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$StatusCampaign$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/StatusCampaign/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ChannelMonitor$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/ChannelMonitor/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/ListManager/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$NewCampaignManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/NewCampaignManager/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignGroupManager/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$RebroadcastSettingsPanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$RebroadcastSettingsGroupPanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/RebroadcastSettingsGroupPanel/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$AgentStatusMonitoring$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/AgentStatusMonitoring/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$SystemMonitoring$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/SystemMonitoring/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$pannels$2f$CampaignClonePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/sidebar/pannels/CampaignClonePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$IntegratedMonitoringDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/IntegratedMonitoringDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$treeMenus$2f$SkillAssignmentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/components/treeMenus/SkillAssignmentTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$popups$2f$BlackListCountPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/components/popups/BlackListCountPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$treeMenus$2f$TeamSkillAssignmentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/components/treeMenus/TeamSkillAssignmentTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$treeMenus$2f$GroupSkillAssignmentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/components/treeMenus/GroupSkillAssignmentTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$SkilFilterOptionPannelForCampaignTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/SkilFilterOptionPannelForCampaignTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$pannels$2f$CampaignDeletePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupBulkUpdatePanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignGroupBulkUpdatePanel/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// 탭 ID별 실제 화면을 매핑
const renderContent = (tabId, campaignId, campaignName, params)=>{
    switch(tabId){
        case 1:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                groupId: params?.groupId,
                groupName: params?.groupName
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 35,
                columnNumber: 14
            }, this);
        case 2:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                campaignId: params?.campaignId
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 40,
                columnNumber: 14
            }, this);
        case 3:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$IntegratedMonitoringDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        case 4:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$Campaignprogress$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 46,
                columnNumber: 14
            }, this);
        case 5:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$OutboundCallProgressPanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 48,
                columnNumber: 14
            }, this);
        case 6:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ChannelMonitor$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 50,
                columnNumber: 14
            }, this);
        case 7:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 52,
                columnNumber: 14
            }, this);
        case 8:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 54,
                columnNumber: 14
            }, this);
        case 9:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 56,
                columnNumber: 14
            }, this);
        case 10:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$SystemPreferences$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 58,
                columnNumber: 14
            }, this);
        case 11:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 60,
                columnNumber: 14
            }, this);
        case 12:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$preferences$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 62,
                columnNumber: 14
            }, this);
        case 13:
            // 새 캠페인 입력용 패널
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$NewCampaignManager$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tenantId: params?.tenantId
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 65,
                columnNumber: 14
            }, this);
        case 14:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$StatusCampaign$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 67,
                columnNumber: 14
            }, this);
        case 20:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$RebroadcastSettingsPanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 69,
                columnNumber: 14
            }, this);
        case 21:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignMonitorDashbord$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                campaignId: campaignId
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        // case 22:
        //   return <AgentStatusMonitoring campaignId={params?.campainId}/>;
        case 22:
            // 상담원 상태 모니터 
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$AgentStatusMonitoring$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sessionKey: params?.sessionKey,
                campaignId: params?.campaignId,
                tenantId: params?.tenantId
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this);
        case 23:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$SystemMonitoring$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 84,
                columnNumber: 14
            }, this);
        case 24:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$RebroadcastSettingsGroupPanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 86,
                columnNumber: 14
            }, this);
        case 100:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: "잘못된 스킬 할당 탭입니다."
            }, void 0, false);
        case 130:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$pannels$2f$CampaignClonePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 90,
                columnNumber: 14
            }, this);
        case 131:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$pannels$2f$CampaignDeletePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                campaignId: campaignId,
                campaignName: campaignName
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 93,
                columnNumber: 14
            }, this);
        case 501:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-left w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$popups$2f$BlackListCountPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabContent.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this);
        case 600:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-left w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[500px] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$treeMenus$2f$SkillAssignmentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillAssignmentTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabContent.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabContent.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this);
        case 601:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-left w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[530px] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$treeMenus$2f$TeamSkillAssignmentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamSkillAssignmentTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabContent.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabContent.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this);
        case 602:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-left w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[500px] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$components$2f$treeMenus$2f$GroupSkillAssignmentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupSkillAssignmentTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabContent.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabContent.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this);
        case 603:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-left w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[500px] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$SkilFilterOptionPannelForCampaignTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabContent.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabContent.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this);
        case 700:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-left w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1000px] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignGroupBulkUpdatePanel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        groupId: params?.groupId,
                        groupName: params?.groupName
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabContent.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabContent.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-full text-gray-500",
                children: "탭을 선택!"
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this);
    }
};
const TabContent = ()=>{
    _s();
    const { rows, activeTabId, activeTabKey, setActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const widthsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        left: 50,
        right: 50
    });
    const startXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(rows[0]?.sections || []);
    // Performance optimization using requestAnimationFrame
    const updateWidths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabContent.useCallback[updateWidths]": (leftWidth)=>{
            const clampedLeft = Math.max(20, Math.min(80, leftWidth));
            const right = 100 - clampedLeft;
            requestAnimationFrame({
                "TabContent.useCallback[updateWidths]": ()=>{
                    if (sections.length === 2) {
                        const newSections = [
                            ...sections
                        ];
                        newSections[0] = {
                            ...newSections[0],
                            width: clampedLeft
                        };
                        newSections[1] = {
                            ...newSections[1],
                            width: right
                        };
                        setSections(newSections);
                        widthsRef.current = {
                            left: clampedLeft,
                            right
                        };
                    }
                }
            }["TabContent.useCallback[updateWidths]"]);
        }
    }["TabContent.useCallback[updateWidths]"], [
        sections
    ]);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabContent.useCallback[handleMouseDown]": (e)=>{
            if (!containerRef.current) return;
            setIsDragging(true);
            startXRef.current = e.clientX;
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none'; // Prevent text selection while dragging
        }
    }["TabContent.useCallback[handleMouseDown]"], []);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabContent.useCallback[handleMouseMove]": (e)=>{
            if (!isDragging || !containerRef.current) return;
            const container = containerRef.current.getBoundingClientRect();
            const deltaX = e.clientX - startXRef.current;
            const containerWidth = container.width;
            // Calculate new width based on delta movement
            const deltaPercentage = deltaX / containerWidth * 100;
            const newLeftWidth = widthsRef.current.left + deltaPercentage;
            updateWidths(newLeftWidth);
            startXRef.current = e.clientX;
        }
    }["TabContent.useCallback[handleMouseMove]"], [
        isDragging,
        updateWidths
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabContent.useCallback[handleMouseUp]": ()=>{
            setIsDragging(false);
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
        }
    }["TabContent.useCallback[handleMouseUp]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabContent.useEffect": ()=>{
            if (isDragging) {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
                window.addEventListener('mouseleave', handleMouseUp);
            }
            return ({
                "TabContent.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleMouseUp);
                    window.removeEventListener('mouseleave', handleMouseUp);
                }
            })["TabContent.useEffect"];
        }
    }["TabContent.useEffect"], [
        isDragging,
        handleMouseMove,
        handleMouseUp
    ]);
    // Update sections when rows change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabContent.useEffect": ()=>{
            setSections(rows[0]?.sections || []);
        }
    }["TabContent.useEffect"], [
        rows
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "flex flex-col w-full h-full overflow-auto bg-white",
        children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-1 border-b last:border-b-0 relative h-full",
                children: sections.map((section, index)=>{
                    const activeKey = section.activeTabKey;
                    const activeTab = section.tabs.find((t)=>t.uniqueKey === activeKey);
                    const isActiveGlobal = activeTabId === activeTab?.id && activeTabKey === activeTab?.uniqueKey;
                    const tabIdToRender = isActiveGlobal ? activeTabId : activeTab?.id ?? null;
                    // 현재 활성화된 탭에서 campaignId 가져오기
                    const campaignId = activeTab?.campaignId;
                    const campaignName = activeTab?.campaignName;
                    const params = activeTab?.params; // params 추출 추가
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `overflow-auto transition-all duration-75 ease-out ${sections.length === 2 ? 'p-2' : ''}`,
                                style: {
                                    width: `${section.width}%`,
                                    border: sections.length === 2 ? '1px solid #bbb' : 'none'
                                },
                                onClick: ()=>{
                                    if (activeTab) {
                                        setActiveTab(activeTab.id, activeTab.uniqueKey);
                                    }
                                },
                                children: renderContent(tabIdToRender, campaignId, campaignName, params)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                                lineNumber: 253,
                                columnNumber: 17
                            }, this),
                            index === 0 && sections.length === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: dragRef,
                                className: "w-1 bg-gray-200 hover:bg-[#55BEC8] active:bg-[#55BEC8] cursor-col-resize select-none",
                                onMouseDown: handleMouseDown,
                                style: {
                                    touchAction: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                                lineNumber: 268,
                                columnNumber: 19
                            }, this)
                        ]
                    }, section.id, true, {
                        fileName: "[project]/src/app/main/comp/TabContent.tsx",
                        lineNumber: 252,
                        columnNumber: 15
                    }, this);
                })
            }, row.id, false, {
                fileName: "[project]/src/app/main/comp/TabContent.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/TabContent.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
};
_s(TabContent, "zc/4TTBysgE+V/m4tCk9Dpp1n+M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"]
    ];
});
_c = TabContent;
const __TURBOPACK__default__export__ = TabContent;
var _c;
__turbopack_refresh__.register(_c, "TabContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/DraggableTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/app/main/comp/DraggableTab.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const DraggableTab = ({ id, uniqueKey, title, //icon,
isActive, onRemove, onSelect, rowId, sectionId })=>{
    _s();
    const { attributes, listeners, setNodeRef, transform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraggable"])({
        id: uniqueKey,
        data: {
            type: "tab",
            id,
            uniqueKey,
            rowId,
            sectionId
        }
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Translate.toString(transform)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        ...attributes,
        ...listeners,
        className: `
        flex items-center gap-2 px-3 py-1.5 h-[30px] drag-tab cursor-pointer
        ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
      `,
        onClick: onSelect,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm whitespace-nowrap",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/DraggableTab.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                variant: "ghost",
                size: "sm",
                onClick: (e)=>{
                    e.stopPropagation();
                    onRemove();
                },
                className: `
          p-0 min-w-[8px]
          ${isActive ? "hover:bg-[transparent]" : "hover:bg-[transparent]"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: isActive ? "/header-menu/maintap_colse_on.png" : "/header-menu/maintap_colse_off.png",
                    alt: "닫기",
                    width: 8,
                    height: 8
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/DraggableTab.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/DraggableTab.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/DraggableTab.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
_s(DraggableTab, "KToSDLllTTEzOm4MO+FGxu29k4s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraggable"]
    ];
});
_c = DraggableTab;
const __TURBOPACK__default__export__ = DraggableTab;
var _c;
__turbopack_refresh__.register(_c, "DraggableTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/TabSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/app/main/comp/TabSection.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$DraggableTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/DraggableTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const TabSection = ({ rowId, sectionId, width, canRemove = true, showDivider = false })=>{
    _s();
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isScrolling, setIsScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isOver, setNodeRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: `section-${rowId}-${sectionId}`,
        data: {
            type: "section",
            rowId,
            sectionId
        }
    });
    const { rows, removeTab, removeSection, setSectionActiveTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabSection.useEffect": ()=>{
            return ({
                "TabSection.useEffect": ()=>{
                    if (scrollIntervalRef.current) {
                        clearInterval(scrollIntervalRef.current);
                    }
                }
            })["TabSection.useEffect"];
        }
    }["TabSection.useEffect"], []);
    const scroll = (direction)=>{
        if (!scrollContainerRef.current) return;
        const scrollAmount = 100;
        const newLeft = direction === "left" ? scrollContainerRef.current.scrollLeft - scrollAmount : scrollContainerRef.current.scrollLeft + scrollAmount;
        scrollContainerRef.current.scrollTo({
            left: newLeft,
            behavior: "smooth"
        });
    };
    const startScrolling = (direction)=>{
        setIsScrolling(direction);
        if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
        scroll(direction);
        scrollIntervalRef.current = setInterval(()=>{
            scroll(direction);
        }, 150);
    };
    const stopScrolling = ()=>{
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
        setIsScrolling(null);
    };
    // 현재 섹션 찾기
    const row = rows.find((r)=>r.id === rowId);
    if (!row) return null;
    const section = row.sections.find((s)=>s.id === sectionId);
    if (!section) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        className: `
        flex-none h-full relative
        transition-colors duration-200
        ${isOver ? "bg-gray-100" : "bg-white"}
        ${showDivider ? "border-r border-gray-200" : ""}
      `,
        style: {
            width: `${width}%`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                    variant: "tabEtc",
                    size: "sm",
                    onMouseDown: ()=>startScrolling("left"),
                    onMouseUp: stopScrolling,
                    onMouseLeave: stopScrolling,
                    onTouchStart: ()=>startScrolling("left"),
                    onTouchEnd: stopScrolling,
                    className: `
            ${isScrolling === "left" ? "bg-gray-100" : ""}
          `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/header-menu/leftArrow.svg",
                        alt: "left",
                        width: 8,
                        height: 8
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabSection.tsx",
                        lineNumber: 117,
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabSection.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollContainerRef,
                    className: "flex-1 flex scroll-smooth",
                    children: section.tabs.map((tab)=>{
                        const isActive = section.activeTabKey === tab.uniqueKey;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$DraggableTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: tab.id,
                            uniqueKey: tab.uniqueKey,
                            title: tab.title,
                            //icon={tab.icon}
                            isActive: isActive,
                            // 탭 제거
                            onRemove: ()=>removeTab(tab.id, tab.uniqueKey),
                            // 탭 선택 => 섹션 단위 활성화
                            onSelect: ()=>setSectionActiveTab(rowId, sectionId, tab.uniqueKey),
                            rowId: rowId,
                            sectionId: sectionId
                        }, tab.uniqueKey, false, {
                            fileName: "[project]/src/app/main/comp/TabSection.tsx",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabSection.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                    variant: "tabEtc",
                    size: "sm",
                    onMouseDown: ()=>startScrolling("right"),
                    onMouseUp: stopScrolling,
                    onMouseLeave: stopScrolling,
                    onTouchStart: ()=>startScrolling("right"),
                    onTouchEnd: stopScrolling,
                    className: `
            ${isScrolling === "right" ? "bg-gray-100" : ""}
          `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/header-menu/rightArrow.svg",
                        alt: "right",
                        width: 8,
                        height: 8
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabSection.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabSection.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                canRemove && row.sections.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                    variant: "tabEtc",
                    size: "sm",
                    onClick: ()=>removeSection(rowId, sectionId),
                    className: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/header-menu/tab_minus.svg",
                        alt: "plus",
                        width: 8,
                        height: 8
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabSection.tsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabSection.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/TabSection.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/TabSection.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
_s(TabSection, "3mYKVkIVWP5S3alaRq46R0LGWBc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"]
    ];
});
_c = TabSection;
const __TURBOPACK__default__export__ = TabSection;
var _c;
__turbopack_refresh__.register(_c, "TabSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/TabRowMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/app/main/comp/TabRowMenu.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const TabRowMenu = ({ rowId, isOpen, onClose })=>{
    _s();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { closeAllTabs, closeOtherTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    // 드롭다운 외부 클릭 시 닫기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabRowMenu.useEffect": ()=>{
            const handleClickOutside = {
                "TabRowMenu.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["TabRowMenu.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "TabRowMenu.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["TabRowMenu.useEffect"];
        }
    }["TabRowMenu.useEffect"], [
        isOpen,
        onClose
    ]);
    // 다른 탭 닫기 (현재 활성화된 탭 빼고 모두 닫기)
    const handleCloseOtherTabs = ()=>{
        const { rows } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"].getState();
        const row = rows.find((r)=>r.id === rowId);
        if (row) {
            row.sections.forEach((section)=>{
                if (section.activeTabKey) {
                    closeOtherTabs(rowId, section.id, section.activeTabKey);
                }
            });
        }
        onClose();
    };
    // 모든 탭 닫기
    const handleCloseAllTabs = ()=>{
        const { rows } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"].getState();
        const row = rows.find((r)=>r.id === rowId);
        if (row) {
            row.sections.forEach((section)=>{
                closeAllTabs(rowId, section.id);
            });
        }
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "absolute p-2 right-[0px] z-20 mt-1 w-[150px] rounded-[3px] shadow-lg bg-white ring-1 ring-black ring-opacity-5",
        style: {
            top: '27px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCloseOtherTabs,
                    className: "block px-2 py-1.5 text-sm text-[#333] hover:bg-[#F4F6F9] w-full text-left rounded-[3px]",
                    children: "다른 탭 닫기"
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabRowMenu.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCloseAllTabs,
                    className: "block px-2 py-1.5 text-sm text-[#333] hover:bg-[#F4F6F9] w-full text-left rounded-[3px]",
                    children: "모든 탭 닫기"
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/TabRowMenu.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/TabRowMenu.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/TabRowMenu.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_s(TabRowMenu, "IDPCrIS4SDdfwtp+5igDr3i2sH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"]
    ];
});
_c = TabRowMenu;
const __TURBOPACK__default__export__ = TabRowMenu;
var _c;
__turbopack_refresh__.register(_c, "TabRowMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/TabRow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/app/main/comp/TabRow.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$TabSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/TabSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$TabRowMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/TabRowMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const TabRow = ({ rowId })=>{
    _s();
    const { rows, addRow, addSection, removeRow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 메뉴 열림/닫힘 상태
    const row = rows.find((r)=>r.id === rowId);
    if (!row) return null;
    // `+` 버튼 클릭 시 분할 동작
    const handleSplitClick = ()=>{
        if (row.sections.length === 1) {
            // 현재 행에 새로운 섹션 추가 (최대 2개)
            addSection(rowId);
        }
    // else if (row.sections.length === 2) {
    //   // 만약 섹션이 이미 2개라면, 새 행 추가
    //   addRow();
    // }
    };
    // 행 삭제 핸들러
    const handleRemoveRow = ()=>{
        removeRow(rowId);
    };
    // 드롭다운 토글 처리
    const handleDropdownToggle = ()=>{
        setMenuOpen(!menuOpen);
    };
    const canRemove = rowId !== "row-1"; // 예시로 첫 번째 행은 삭제 불가능
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center min-h-[30px] w-full border-b border-[#ebebeb] relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex w-[calc(100%-46px)]",
                children: row.sections.map((section, idx)=>{
                    // TabSection에서 탭들을 렌더링
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$TabSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rowId: rowId,
                        sectionId: section.id,
                        width: section.width,
                        canRemove: section.id !== "default",
                        showDivider: idx < row.sections.length - 1
                    }, section.id, false, {
                        fileName: "[project]/src/app/main/comp/TabRow.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabRow.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-none flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "tabEtc",
                        size: "icon",
                        onClick: handleSplitClick,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/header-menu/tab_plus.svg",
                            alt: "plus",
                            width: 8,
                            height: 8
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/TabRow.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabRow.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "tabEtc",
                        size: "icon",
                        onClick: handleDropdownToggle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/header-menu/dropdown-toggle.png",
                            alt: "dropdown-toggle",
                            width: 3,
                            height: 10
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/TabRow.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabRow.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    canRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "tabEtc",
                        size: "icon",
                        onClick: handleRemoveRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/header-menu/tab_minus.svg",
                            alt: "minus",
                            width: 8,
                            height: 8
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/TabRow.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/TabRow.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/TabRow.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$TabRowMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rowId: rowId,
                isOpen: menuOpen,
                onClose: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/TabRow.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/TabRow.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(TabRow, "Y7utPc/gS0S309YiiTxMeF+BGHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"]
    ];
});
_c = TabRow;
const __TURBOPACK__default__export__ = TabRow;
var _c;
__turbopack_refresh__.register(_c, "TabRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_main_comp_ca0701._.js.map