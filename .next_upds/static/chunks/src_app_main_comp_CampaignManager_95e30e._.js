(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_main_comp_CampaignManager_95e30e._.js", {

"[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInputForTime$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInputForTime/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CalendarRadix$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CalendarRadix/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
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
const errorMessage = {
    isOpen: false,
    message: "",
    title: "캠페인 동작시간",
    type: "0",
    onClose: ()=>{},
    onCancle: ()=>{}
};
const today = new Date();
const tempOperationTimeTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    campaignScheduleChangeYn: false,
    onSave: false,
    onClosed: false,
    campaign_id: 0,
    start_date: today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + ("0" + today.getDate()).slice(-2),
    end_date: today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + ("0" + today.getDate()).slice(-2),
    start_time: [],
    end_time: [],
    start_flag: ""
};
const OperationTimeTab = ({ callCampaignMenu, campaignInfo, campaignSchedule, onCampaignScheduleChange })=>{
    _s();
    const [tempData, setTempData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 시작시간 (예: "1110")
    const [endTime, setEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 종료시간 (예: "1210")
    const [isValidForStartAndEndTime, setIsValidForStartAndEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tempCampaignSchedule, setTempCampaignSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tempOperationTimeTab);
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    // 유효한 시간 형식인지 확인 (4자리 문자열이고, 시는 00~23, 분은 00~59이어야 함)
    const isTimeFormatValid = (time)=>{
        if (time.length !== 4) return false;
        const hours = Number(time.substring(0, 2));
        const minutes = Number(time.substring(2, 4));
        if (isNaN(hours) || isNaN(minutes)) return false;
        if (hours < 0 || hours > 23) return false;
        if (minutes < 0 || minutes > 59) return false;
        return true;
    };
    // 시작 시간 종료 시간 유효성 검사
    const validateTime = (time)=>{
        if (time === "1112") return false;
        return isTimeFormatValid(time);
    };
    // startTime, endTime 값이 변경될 때마다 유효성 검사 실행
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OperationTimeTab.useEffect": ()=>{
            if (startTime && !validateTime(startTime) || endTime && !validateTime(endTime)) {
                setIsValidForStartAndEndTime(false);
            } else {
                setIsValidForStartAndEndTime(true);
            }
        }
    }["OperationTimeTab.useEffect"], [
        startTime,
        endTime
    ]);
    const handleSelectChange = (value, col)=>{
        onCampaignScheduleChange({
            ...tempCampaignSchedule,
            changeYn: true,
            campaignInfoChangeYn: true,
            start_flag: value
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OperationTimeTab.useEffect": ()=>{
            if (campaignInfo && campaignSchedule.start_date !== "") {
                const tempCampaignScheduleData = campaignSchedule;
                const CampaignScheduleStartTime = tempCampaignScheduleData.start_time;
                const CampaignScheduleEndTime = tempCampaignScheduleData.end_time;
                setTempData([]);
                if (CampaignScheduleStartTime.length > 0 && CampaignScheduleEndTime.length > 0) {
                    CampaignScheduleStartTime.forEach({
                        "OperationTimeTab.useEffect": (item, index)=>{
                            setTempData({
                                "OperationTimeTab.useEffect": (prev)=>[
                                        ...prev,
                                        {
                                            no: index + 1,
                                            division: index + 1,
                                            startTime: item.substring(0, 2) + ":" + item.substring(2, 4),
                                            endTime: (CampaignScheduleEndTime[index] + "").substring(0, 2) + ":" + (CampaignScheduleEndTime[index] + "").substring(2, 4)
                                        }
                                    ]
                            }["OperationTimeTab.useEffect"]);
                        }
                    }["OperationTimeTab.useEffect"]);
                }
                setTempCampaignSchedule({
                    ...tempOperationTimeTab,
                    campaign_id: campaignInfo.campaign_id,
                    start_date: tempCampaignScheduleData.start_date,
                    end_date: tempCampaignScheduleData.end_date,
                    start_time: CampaignScheduleStartTime,
                    end_time: CampaignScheduleEndTime,
                    start_flag: campaignInfo.start_flag + "",
                    onSave: false
                });
            }
        }
    }["OperationTimeTab.useEffect"], [
        callCampaignMenu,
        campaignSchedule,
        campaignInfo
    ]);
    // 행 삭제 함수
    const handleDelete = (no)=>{
        setTempData((prevData)=>{
            const newData = prevData.filter((item)=>item.no !== no).map((item, index)=>({
                    ...item,
                    no: index + 1,
                    division: index + 1
                }));
            const newStartTimes = newData.map((item)=>item.startTime.split(":").join(""));
            const newEndTimes = newData.map((item)=>item.endTime.split(":").join(""));
            const updatedSchedule = {
                ...tempCampaignSchedule,
                changeYn: true,
                campaignScheduleChangeYn: true,
                start_time: newStartTimes,
                end_time: newEndTimes
            };
            setTempCampaignSchedule(updatedSchedule);
            onCampaignScheduleChange(updatedSchedule);
            return newData;
        });
    };
    // 그리드 컬럼 정의 (삭제 버튼 컬럼 추가, delete 열에 width 추가)
    const gridColumns = [
        {
            key: "no",
            name: "NO"
        },
        {
            key: "division",
            name: "구분"
        },
        {
            key: "startTime",
            name: "시작시간"
        },
        {
            key: "endTime",
            name: "종료시간"
        },
        {
            key: "delete",
            name: "",
            width: 50,
            frozen: false,
            sortable: false,
            resizable: false,
            renderCell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleDelete(row.no),
                        className: "text-gray-600 hover:text-red-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-[20px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-[30px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[30%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border-b border-gray-300 pb-1 !text-[#444] !mb-3",
                                title: "선택"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[10px] justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[70px] min-w-[70px]",
                                                children: "시작"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: callCampaignMenu === "NewCampaignManager" || callCampaignMenu === "CampaignGroupManager" ? "2" : campaignInfo.start_flag + "",
                                                onValueChange: (value)=>handleSelectChange(value, "startFlag"),
                                                disabled: callCampaignMenu === "NewCampaignManager" || callCampaignMenu === "CampaignGroupManager",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "시작"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "1",
                                                                children: "시작"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "2",
                                                                children: "멈춤"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "3",
                                                                children: "중지"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[10px] justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[70px] min-w-[70px]",
                                                children: "종료구분"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                disabled: true,
                                                value: campaignInfo?.end_flag === 1 ? "진행 중" : campaignInfo?.end_flag === 2 ? "완료" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[10px] justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[70px] min-w-[70px]",
                                                children: "시작날짜"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CalendarRadix$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarHeadless"], {
                                                date: new Date(`${tempCampaignSchedule.start_date.substring(0, 4)}-${tempCampaignSchedule.start_date.substring(4, 6)}-${tempCampaignSchedule.start_date.substring(6, 8)}`),
                                                setDate: (value)=>{
                                                    if (value instanceof Date || value === null) {
                                                        let tempStartDate = "";
                                                        let tempEndDate = tempCampaignSchedule.end_date;
                                                        if (value) {
                                                            tempStartDate = `${value.getFullYear()}${("0" + (value.getMonth() + 1)).slice(-2)}${("0" + value.getDate()).slice(-2)}`;
                                                            if (tempStartDate > tempEndDate) {
                                                                tempEndDate = tempStartDate;
                                                            }
                                                        }
                                                        onCampaignScheduleChange({
                                                            ...tempCampaignSchedule,
                                                            changeYn: true,
                                                            campaignScheduleChangeYn: true,
                                                            start_date: tempStartDate,
                                                            end_date: tempEndDate
                                                        });
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[10px] justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[70px] min-w-[70px]",
                                                children: "종료날짜"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CalendarRadix$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarHeadless"], {
                                                date: new Date(`${tempCampaignSchedule.end_date.substring(0, 4)}-${tempCampaignSchedule.end_date.substring(4, 6)}-${tempCampaignSchedule.end_date.substring(6, 8)}`),
                                                setDate: (value)=>{
                                                    if (value instanceof Date || value === null) {
                                                        const tempStartDate = tempCampaignSchedule.start_date;
                                                        let tempEndDate = "";
                                                        if (value) {
                                                            tempEndDate = `${value.getFullYear()}${("0" + (value.getMonth() + 1)).slice(-2)}${("0" + value.getDate()).slice(-2)}`;
                                                            if (tempEndDate < tempStartDate) {
                                                                tempEndDate = tempStartDate;
                                                            }
                                                        }
                                                        onCampaignScheduleChange({
                                                            ...tempCampaignSchedule,
                                                            changeYn: true,
                                                            campaignScheduleChangeYn: true,
                                                            start_date: tempStartDate,
                                                            end_date: tempEndDate
                                                        });
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[70%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border-b border-gray-300 pb-1 !text-[#444] !mb-3",
                                title: "추가"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-[20px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[40%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-[10px] justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "w-[70px] min-w-[70px]",
                                                            children: "시작시간"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInputForTime$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: startTime,
                                                            onChange: (value)=>setStartTime(value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-[10px] justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "w-[70px] min-w-[70px]",
                                                            children: "종료시간"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInputForTime$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: endTime,
                                                            onChange: (value)=>setEndTime(value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                                        variant: "secondary",
                                                        disabled: !isValidForStartAndEndTime,
                                                        onClick: ()=>{
                                                            // 필수 입력 및 기본 유효성 검사
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
                                                                // 시작시간/종료시간 추가 유효성 검사 (예: "1112" 무효 처리)
                                                                if (!validateTime(startTime) || !validateTime(endTime)) {
                                                                    setAlertState({
                                                                        ...alertState,
                                                                        isOpen: true,
                                                                        message: "잘못된 시간입니다."
                                                                    });
                                                                    return;
                                                                }
                                                                // 시작시간이 종료시간보다 늦은 경우
                                                                if (startTime > endTime) {
                                                                    setAlertState({
                                                                        ...alertState,
                                                                        isOpen: true,
                                                                        message: "시작시간이 종료시간보다 늦을 수 없습니다."
                                                                    });
                                                                    return;
                                                                }
                                                                let check = false;
                                                                const tempStartTime = [];
                                                                const tempEndTime = [];
                                                                tempData.forEach((item)=>{
                                                                    if (item.startTime.replace(":", "") === startTime && item.endTime.replace(":", "") === endTime) {
                                                                        setAlertState({
                                                                            ...alertState,
                                                                            isOpen: true,
                                                                            message: "동일한 시간이 이미 설정되어 있습니다."
                                                                        });
                                                                        check = true;
                                                                    }
                                                                    tempStartTime.push(item.startTime.replace(":", ""));
                                                                    tempEndTime.push(item.endTime.replace(":", ""));
                                                                });
                                                                if (!check) {
                                                                    tempStartTime.push(startTime);
                                                                    tempEndTime.push(endTime);
                                                                    onCampaignScheduleChange({
                                                                        ...tempCampaignSchedule,
                                                                        changeYn: true,
                                                                        campaignScheduleChangeYn: true,
                                                                        start_time: tempStartTime,
                                                                        end_time: tempEndTime
                                                                    });
                                                                    setTempData((prev)=>[
                                                                            ...prev,
                                                                            {
                                                                                no: prev.length + 1,
                                                                                division: prev.length + 1,
                                                                                startTime: startTime.substring(0, 2) + ":" + startTime.substring(2, 4),
                                                                                endTime: endTime.substring(0, 2) + ":" + endTime.substring(2, 4)
                                                                            }
                                                                        ]);
                                                                    setStartTime("");
                                                                    setEndTime("");
                                                                }
                                                            }
                                                        },
                                                        children: [
                                                            "시간추가",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/addArrow.svg",
                                                                alt: "화살표",
                                                                width: 10,
                                                                height: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[60%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid-custom-wrap h-[270px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                columns: gridColumns,
                                                rows: tempData,
                                                className: "grid-custom",
                                                rowHeight: 30,
                                                headerRowHeight: 30
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            !(callCampaignMenu === "NewCampaignManager" || callCampaignMenu === "CampaignGroupManager" || callCampaignMenu === "CampaignClone") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onCampaignScheduleChange({
                                ...tempCampaignSchedule,
                                onSave: true
                            }),
                        children: "확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                        lineNumber: 439,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onCampaignScheduleChange({
                                ...tempCampaignSchedule,
                                onClosed: true
                            }),
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                        lineNumber: 450,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                lineNumber: 438,
                columnNumber: 11
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
                fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
};
_s(OperationTimeTab, "W6o094sGVXYFQUFpPc70TVprBPs=");
_c = OperationTimeTab;
const __TURBOPACK__default__export__ = OperationTimeTab;
var _c;
__turbopack_refresh__.register(_c, "OperationTimeTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CreateCampaignFormPanel/variables/variablesForCreateCampaignForm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
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
const columns = [
    {
        key: "phone1",
        name: "고객전화번호(1)"
    },
    {
        key: "phone2",
        name: "고객전화번호(2)"
    },
    {
        key: "phone3",
        name: "고객전화번호(3)"
    },
    {
        key: "phone4",
        name: "고객전화번호(4)"
    },
    {
        key: "phone5",
        name: "고객전화번호(5)"
    }
];
const rows = [
    {
        phone1: "01012345678",
        phone2: "01012345678",
        phone3: "01012345678",
        phone4: "01012345678",
        phone5: "01012345678"
    }
];
const CampaignOutgoingOrderTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    onSave: false,
    onClosed: false,
    dial_phone_id: 0,
    phone_order: '',
    phone_dial_try: []
};
const OutgoingOrderTab = ({ callCampaignMenu, campaignInfo, onCampaignOutgoingOrderChange })=>{
    _s();
    const { phoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [tempData, setTempData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tempRightData, setTempRightData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tempCampaignInfo, setTempCampaignsInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignInfo"]);
    const [tempCampaignOutgoingOrderTab, setTempCampaignOutgoingOrderTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignOutgoingOrderTab);
    const [leftList, setLeftList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "고객 전화번호(3)",
        "고객 전화번호(4)",
        "고객 전화번호(5)"
    ]);
    const [rightList, setRightList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            label: "고객 전화번호(1)"
        },
        {
            id: 2,
            label: "고객 전화번호(2)"
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutgoingOrderTab.useEffect": ()=>{
            if (phoneDescriptions.length > 0 && campaignInfo) {
                setTempCampaignOutgoingOrderTab({
                    ...tempCampaignOutgoingOrderTab,
                    dial_phone_id: campaignInfo.dial_phone_id,
                    phone_order: campaignInfo.phone_order,
                    phone_dial_try: campaignInfo.phone_dial_try
                });
                setLeftList([]);
                const tempLeftData = [];
                campaignInfo.phone_dial_try.map({
                    "OutgoingOrderTab.useEffect": (data, index)=>data === 0 && tempLeftData.push('고객 전화번호(' + (index + 1) + ')')
                }["OutgoingOrderTab.useEffect"]);
                setLeftList(tempLeftData);
                setRightList([]);
                const tempRigntData = [];
                if (tempLeftData.length < 5) {
                    const cnt = Number(campaignInfo.phone_order.substring(0, 1));
                    for(let i = 0; i < cnt; i++){
                        tempRigntData.push({
                            id: i + 1,
                            label: '고객 전화번호(' + campaignInfo.phone_order[i + 1] + ')'
                        });
                    }
                }
                setRightList(tempRigntData);
                setTempCampaignsInfo(campaignInfo);
                setTempData([]);
                const tempDialPhoneId = phoneDescriptions.filter({
                    "OutgoingOrderTab.useEffect.tempDialPhoneId": (dialPhoneId)=>dialPhoneId.description_id === campaignInfo.dial_phone_id
                }["OutgoingOrderTab.useEffect.tempDialPhoneId"]);
                if (tempDialPhoneId.length > 0) {
                    setTempData({
                        "OutgoingOrderTab.useEffect": (prev)=>[
                                ...prev,
                                {
                                    phone1: tempDialPhoneId[0].description[0] + '',
                                    phone2: tempDialPhoneId[0].description[1] + '',
                                    phone3: tempDialPhoneId[0].description[2] + '',
                                    phone4: tempDialPhoneId[0].description[3] + '',
                                    phone5: tempDialPhoneId[0].description[4] + ''
                                }
                            ]
                    }["OutgoingOrderTab.useEffect"]);
                } else {
                    setTempData({
                        "OutgoingOrderTab.useEffect": (prev)=>[
                                ...prev,
                                {
                                    phone1: phoneDescriptions[0].description[0] + '',
                                    phone2: phoneDescriptions[0].description[1] + '',
                                    phone3: phoneDescriptions[0].description[2] + '',
                                    phone4: phoneDescriptions[0].description[3] + '',
                                    phone5: phoneDescriptions[0].description[4] + ''
                                }
                            ]
                    }["OutgoingOrderTab.useEffect"]);
                }
            }
        }
    }["OutgoingOrderTab.useEffect"], [
        campaignInfo,
        phoneDescriptions
    ]);
    const [selectedLeft, setSelectedLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRight, setSelectedRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const moveToRight = ()=>{
        if (selectedLeft) {
            setRightList([
                ...rightList,
                {
                    id: rightList.length + 1,
                    label: selectedLeft
                }
            ]);
            setLeftList(leftList.filter((item)=>item !== selectedLeft));
            setSelectedLeft(null);
            const index = Number(selectedLeft.substring(8, 9));
            onCampaignOutgoingOrderChange({
                ...tempCampaignOutgoingOrderTab,
                changeYn: true,
                campaignInfoChangeYn: true,
                phone_dial_try: tempCampaignOutgoingOrderTab.phone_dial_try.map((val, idx)=>idx === index - 1 ? 1 : val),
                phone_order: rightList.length == 0 ? '1' + index : rightList.length + 1 + tempCampaignOutgoingOrderTab.phone_order.substring(1) + index
            });
            setSelectedRight(rightList.length + 1);
        }
    };
    const moveToLeft = ()=>{
        if (selectedRight !== null) {
            const removedItem = rightList.find((item)=>item.id === selectedRight);
            if (removedItem) {
                setLeftList([
                    ...leftList,
                    removedItem.label
                ]);
                setRightList(rightList.filter((item)=>item.id !== selectedRight).map((item, index)=>({
                        id: index + 1,
                        label: item.label
                    })));
                setSelectedRight(null);
                const index = Number(removedItem.label.substring(8, 9));
                const idx = tempCampaignOutgoingOrderTab.phone_order.lastIndexOf(index + '');
                onCampaignOutgoingOrderChange({
                    ...tempCampaignOutgoingOrderTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    phone_dial_try: tempCampaignOutgoingOrderTab.phone_dial_try.map((val, idx)=>idx === index - 1 ? 0 : val),
                    phone_order: rightList.length == 1 ? '' : rightList.length - 1 + tempCampaignOutgoingOrderTab.phone_order.substring(1, idx) + tempCampaignOutgoingOrderTab.phone_order.substring(idx + 1)
                });
                setSelectedLeft(removedItem.label);
            }
        }
    };
    const moveUp = ()=>{
        if (selectedRight !== null) {
            const index = rightList.findIndex((item)=>item.id === selectedRight);
            if (index > 0 && rightList.length > 1) {
                const updatedList = [
                    ...rightList
                ];
                [updatedList[index - 1], updatedList[index]] = [
                    updatedList[index],
                    updatedList[index - 1]
                ];
                setRightList(updatedList.map((item, index)=>({
                        id: index + 1,
                        label: item.label
                    })));
                if (rightList.length > 2) {
                    const upItem = rightList.find((item)=>item.id === selectedRight);
                    const cnt = Number(upItem?.label.substring(8, 9));
                    const idx = tempCampaignOutgoingOrderTab.phone_order.lastIndexOf(cnt + '');
                    onCampaignOutgoingOrderChange({
                        ...tempCampaignOutgoingOrderTab,
                        changeYn: true,
                        campaignInfoChangeYn: true,
                        phone_order: tempCampaignOutgoingOrderTab.phone_order.substring(0, idx - 1) + tempCampaignOutgoingOrderTab.phone_order.substring(idx, idx + 1) + tempCampaignOutgoingOrderTab.phone_order.substring(idx - 1, idx) + tempCampaignOutgoingOrderTab.phone_order.substring(idx + 1)
                    });
                }
                setSelectedLeft(null);
                setSelectedRight(index); // 선택된 항목을 이동된 순서에 맞게 업데이트
            }
        }
    };
    const moveDown = ()=>{
        if (selectedRight !== null) {
            const index = rightList.findIndex((item)=>item.id === selectedRight);
            if (index < rightList.length - 1 && rightList.length > 1) {
                const updatedList = [
                    ...rightList
                ];
                [updatedList[index], updatedList[index + 1]] = [
                    updatedList[index + 1],
                    updatedList[index]
                ];
                setRightList(updatedList.map((item, index)=>({
                        id: index + 1,
                        label: item.label
                    })));
                if (rightList.length > 2) {
                    // setSelectedRight(index); // 선택된 항목을 이동된 순서에 맞게 업데이트
                    const upItem = rightList.find((item)=>item.id === selectedRight);
                    const cnt = Number(upItem?.label.substring(8, 9));
                    const idx = tempCampaignOutgoingOrderTab.phone_order.lastIndexOf(cnt + '');
                    onCampaignOutgoingOrderChange({
                        ...tempCampaignOutgoingOrderTab,
                        changeYn: true,
                        campaignInfoChangeYn: true,
                        phone_order: tempCampaignOutgoingOrderTab.phone_order.substring(0, idx) + tempCampaignOutgoingOrderTab.phone_order.substring(idx + 1, idx + 2) + tempCampaignOutgoingOrderTab.phone_order.substring(idx, idx + 1) + tempCampaignOutgoingOrderTab.phone_order.substring(idx + 2)
                    });
                }
                setSelectedLeft(null);
                setSelectedRight(index + 2); // 선택된 항목을 이동된 순서에 맞게 업데이트
            }
        }
    };
    const handleSelectChange = (value, col)=>{
        onCampaignOutgoingOrderChange({
            ...tempCampaignOutgoingOrderTab,
            changeYn: true,
            campaignInfoChangeYn: true,
            dial_phone_id: Number(value)
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutgoingOrderTab.useEffect": ()=>{
            if (selectedRight != null) {
                console.log(selectedRight);
            }
        }
    }["OutgoingOrderTab.useEffect"], [
        selectedRight
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-5 justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 justify-between w-[25%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "Phone ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    onValueChange: (value)=>handleSelectChange(value, 'dialMode'),
                                    value: tempCampaignOutgoingOrderTab.dial_phone_id > 0 ? tempCampaignOutgoingOrderTab.dial_phone_id + '' : phoneDescriptions.length > 0 ? phoneDescriptions[0].description_id + '' : '',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: " "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: tempCampaignOutgoingOrderTab.dial_phone_id > 0 ? phoneDescriptions //.filter((dialPhoneId) => dialPhoneId.description_id === tempCampaignOutgoingOrderTab.dial_phone_id)
                                            .map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: item.description_id + '',
                                                    children: item.description_id
                                                }, item.description_id, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this)) : phoneDescriptions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: item.description_id + '',
                                                    children: item.description_id
                                                }, item.description_id, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-custom-wrap w-[75%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                columns: columns,
                                rows: tempData,
                                className: "grid-custom h-auto",
                                rowHeight: 26,
                                headerRowHeight: 26
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "border-b border-gray-300 pb-1",
                            title: "전화번호별 발신순서 편집"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border p-2 rounded h-40 overflow-y-auto w-[calc(100%-22px)]",
                                                children: leftList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>setSelectedLeft(item),
                                                        className: `cursor-pointer p-1 rounded text-sm ${selectedLeft === item ? "bg-[#FFFAEE]" : ""}`,
                                                        children: item
                                                    }, item, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-2 min-w-[22px] justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: moveToRight,
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: !selectedLeft,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: moveToLeft,
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: !selectedRight,
                                                        children: "←"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded h-40 overflow-y-auto  w-[calc(100%-22px)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-sm border-collapse",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border-r border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                        children: "순서"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                        children: "전화번호 구분"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                                        lineNumber: 334,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: rightList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    onClick: ()=>setSelectedRight(item.id),
                                                                    className: `cursor-pointer ${selectedRight === item.id ? "bg-[#FFFAEE]" : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border-b border-r p-1 text-center",
                                                                            children: item.id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                                            lineNumber: 346,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border-b p-1",
                                                                            children: item.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                                            lineNumber: 347,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-2 min-w-[22px] justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: moveUp,
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: !selectedRight,
                                                        children: "↑"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: moveDown,
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: !selectedRight,
                                                        children: "↓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                            lineNumber: 292,
                            columnNumber: 12
                        }, this),
                        !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    variant: "secondary",
                                    onClick: ()=>onCampaignOutgoingOrderChange({
                                            ...tempCampaignOutgoingOrderTab,
                                            onSave: true
                                        }),
                                    children: "확인"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    variant: "secondary",
                                    onClick: ()=>onCampaignOutgoingOrderChange({
                                            ...tempCampaignOutgoingOrderTab,
                                            onClosed: true
                                        }),
                                    children: "취소"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
};
_s(OutgoingOrderTab, "wTc4CYRrflaVoIGc42NRMsTgkm4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"]
    ];
});
_c = OutgoingOrderTab;
const __TURBOPACK__default__export__ = OutgoingOrderTab;
var _c;
__turbopack_refresh__.register(_c, "OutgoingOrderTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const handleBlur = (e)=>{
    const currentValue = e.target.value;
    if (currentValue.startsWith("0") && currentValue.length > 1) {
        e.target.value = currentValue.replace(/^0+/, "");
    }
};
const EditableCell = ({ row, column, onRowChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: "w-full h-full text-center bg-white border-none outline-none",
        type: "number",
        value: row[column.key],
        onChange: (e)=>{
            const newValue = parseInt(e.target.value) || 0;
            onRowChange({
                ...row,
                [column.key]: newValue
            });
        },
        onBlur: handleBlur
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
_c = EditableCell;
const CampaignOutgoingOrderTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    onSave: false,
    onClosed: false,
    onInit: false,
    redial_strategy: []
};
const OutgoingStrategyTab = ({ callCampaignMenu, campaignInfo, onCampaignOutgoingStrategyChange })=>{
    _s();
    const [tempOutgoingStrategyTab, setTempOutgoingStrategyTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignOutgoingOrderTab);
    const [maxCallsRows, setMaxCallsRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            call1: 3,
            call2: 7,
            call3: 7,
            call4: 7,
            call5: 7
        }
    ]);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '전화번호1',
            count1: 2,
            duration1: 0,
            count2: 1,
            duration2: 0,
            count3: 1,
            duration3: 0,
            count4: 1,
            duration4: 0,
            count5: 1,
            duration5: 0,
            count6: 1,
            duration6: 0,
            count7: 1,
            duration7: 0
        },
        {
            id: '전화번호2',
            count1: 1,
            duration1: 0,
            count2: 1,
            duration2: 0,
            count3: 1,
            duration3: 0,
            count4: 1,
            duration4: 0,
            count5: 1,
            duration5: 0,
            count6: 1,
            duration6: 0,
            count7: 1,
            duration7: 0
        },
        {
            id: '전화번호3',
            count1: 1,
            duration1: 0,
            count2: 1,
            duration2: 0,
            count3: 1,
            duration3: 0,
            count4: 1,
            duration4: 0,
            count5: 1,
            duration5: 0,
            count6: 1,
            duration6: 0,
            count7: 1,
            duration7: 0
        },
        {
            id: '전화번호4',
            count1: 1,
            duration1: 0,
            count2: 1,
            duration2: 0,
            count3: 1,
            duration3: 0,
            count4: 1,
            duration4: 0,
            count5: 1,
            duration5: 0,
            count6: 1,
            duration6: 0,
            count7: 1,
            duration7: 0
        },
        {
            id: '전화번호5',
            count1: 1,
            duration1: 0,
            count2: 1,
            duration2: 0,
            count3: 1,
            duration3: 0,
            count4: 1,
            duration4: 0,
            count5: 1,
            duration5: 0,
            count6: 1,
            duration6: 0,
            count7: 1,
            duration7: 0
        }
    ]);
    const maxCallsColumns = [
        {
            key: 'call1',
            name: '고객 전화번호(1)',
            renderCell: EditableCell
        },
        {
            key: 'call2',
            name: '고객 전화번호(2)',
            renderCell: EditableCell
        },
        {
            key: 'call3',
            name: '고객 전화번호(3)',
            renderCell: EditableCell
        },
        {
            key: 'call4',
            name: '고객 전화번호(4)',
            renderCell: EditableCell
        },
        {
            key: 'call5',
            name: '고객 전화번호(5)',
            renderCell: EditableCell
        }
    ];
    const mainColumns = [
        {
            key: 'id',
            name: '전화번호',
            frozen: true,
            cellClass: 'bg-[#f8f8f8]',
            headerCellClass: '!p-0'
        },
        {
            key: 'section1',
            name: '통화중 실패',
            children: [
                {
                    key: 'count1',
                    name: '횟수',
                    renderCell: EditableCell
                },
                {
                    key: 'duration1',
                    name: '간격',
                    renderCell: EditableCell
                }
            ]
        },
        {
            key: 'section2',
            name: '무응답 실패',
            width: 120,
            children: [
                {
                    key: 'count2',
                    name: '횟수',
                    renderCell: EditableCell
                },
                {
                    key: 'duration2',
                    name: '간격',
                    renderCell: EditableCell
                }
            ]
        },
        {
            key: 'section3',
            name: '팩스/전화번호 오류',
            children: [
                {
                    key: 'count3',
                    name: '횟수',
                    renderCell: EditableCell
                },
                {
                    key: 'duration3',
                    name: '간격',
                    renderCell: EditableCell
                }
            ]
        },
        {
            key: 'section4',
            name: '기계음 실패',
            children: [
                {
                    key: 'count4',
                    name: '횟수',
                    renderCell: EditableCell
                },
                {
                    key: 'duration4',
                    name: '간격',
                    renderCell: EditableCell
                }
            ]
        },
        {
            key: 'section5',
            name: '기타 실패',
            children: [
                {
                    key: 'count5',
                    name: '횟수',
                    renderCell: EditableCell
                },
                {
                    key: 'duration5',
                    name: '간격',
                    renderCell: EditableCell
                }
            ]
        },
        {
            key: 'section6',
            name: '고객 바로 끊음',
            children: [
                {
                    key: 'count6',
                    name: '횟수',
                    renderCell: EditableCell
                },
                {
                    key: 'duration6',
                    name: '간격',
                    renderCell: EditableCell
                }
            ]
        },
        {
            key: 'section7',
            name: '채널오류',
            children: [
                {
                    key: 'count7',
                    name: '횟수',
                    renderCell: EditableCell
                },
                {
                    key: 'duration7',
                    name: '간격',
                    renderCell: EditableCell
                }
            ]
        }
    ];
    const handleMaxCallsRowsChange = (newRows)=>{
        setMaxCallsRows(newRows);
        const tempdata = newRows[0].call1 + ',' + newRows[0].call2 + ',' + newRows[0].call3 + ',' + newRows[0].call4 + ',' + newRows[0].call5;
        onCampaignOutgoingStrategyChange({
            ...tempOutgoingStrategyTab,
            changeYn: true,
            campaignInfoChangeYn: true,
            redial_strategy: tempOutgoingStrategyTab.redial_strategy.map((val, index)=>tempdata.split(',')[index] + val.substring(val.indexOf(':')))
        });
    };
    const changeRedialStrategyData = (row, value)=>{
        const tempRedialStrategy = value.substring(0, value.indexOf(':') + 1) + '2.' + row.count1 + '.' + row.duration1 + '\/3.' + row.count2 + '.' + row.duration2 + '\/4.' + row.count3 + '.' + row.duration3 + '\/5.' + row.count4 + '.' + row.duration4 + '\/6.' + row.count5 + '.' + row.duration5 + '\/10.' + row.count6 + '.' + row.duration6 + '\/99.' + row.count7 + '.' + row.duration7 + value.substring(value.indexOf('/2501'));
        return tempRedialStrategy;
    };
    const handleMainRowsChange = (newRows)=>{
        let check = true;
        for(let i = 0; i < newRows.length; i++){
            if (newRows[i].count1 < 1) {
                newRows[i].count1 = 1;
                check = false;
            } else if (newRows[i].count2 < 1) {
                newRows[i].count2 = 1;
                check = false;
            } else if (newRows[i].count3 < 1) {
                newRows[i].count3 = 1;
                check = false;
            } else if (newRows[i].count4 < 1) {
                newRows[i].count4 = 1;
                check = false;
            } else if (newRows[i].count5 < 1) {
                newRows[i].count5 = 1;
                check = false;
            } else if (newRows[i].count6 < 1) {
                newRows[i].count6 = 1;
                check = false;
            } else if (newRows[i].count7 < 1) {
                newRows[i].count7 = 1;
                check = false;
            } else if (newRows[i].duration1 < 0) {
                newRows[i].duration1 = 0;
                check = false;
            } else if (newRows[i].duration2 < 0) {
                newRows[i].duration2 = 0;
                check = false;
            } else if (newRows[i].duration3 < 0) {
                newRows[i].duration3 = 0;
                check = false;
            } else if (newRows[i].duration4 < 0) {
                newRows[i].duration4 = 0;
                check = false;
            } else if (newRows[i].duration5 < 0) {
                newRows[i].duration5 = 0;
                check = false;
            } else if (newRows[i].duration6 < 0) {
                newRows[i].duration6 = 0;
                check = false;
            } else if (newRows[i].duration7 < 0) {
                newRows[i].duration7 = 0;
                check = false;
            } else if (newRows[i].count1 > 5) {
                newRows[i].count1 = 5;
                check = false;
            } else if (newRows[i].count2 > 5) {
                newRows[i].count2 = 5;
                check = false;
            } else if (newRows[i].count3 > 5) {
                newRows[i].count3 = 5;
                check = false;
            } else if (newRows[i].count4 > 5) {
                newRows[i].count4 = 5;
                check = false;
            } else if (newRows[i].count5 > 5) {
                newRows[i].count5 = 5;
                check = false;
            } else if (newRows[i].count6 > 5) {
                newRows[i].count6 = 5;
                check = false;
            } else if (newRows[i].count7 > 5) {
                newRows[i].count7 = 5;
                check = false;
            } else if (newRows[i].duration1 > 100) {
                newRows[i].duration1 = 100;
                check = false;
            } else if (newRows[i].duration2 > 100) {
                newRows[i].duration2 = 100;
                check = false;
            } else if (newRows[i].duration3 > 100) {
                newRows[i].duration3 = 100;
                check = false;
            } else if (newRows[i].duration4 > 100) {
                newRows[i].duration4 = 100;
                check = false;
            } else if (newRows[i].duration5 > 100) {
                newRows[i].duration5 = 100;
                check = false;
            } else if (newRows[i].duration6 > 100) {
                newRows[i].duration6 = 100;
                check = false;
            } else if (newRows[i].duration7 > 100) {
                newRows[i].duration7 = 100;
                check = false;
            }
        }
        if (check) {
            setRows(newRows);
            onCampaignOutgoingStrategyChange({
                ...tempOutgoingStrategyTab,
                changeYn: true,
                campaignInfoChangeYn: true,
                redial_strategy: tempOutgoingStrategyTab.redial_strategy.map((val, index)=>changeRedialStrategyData(newRows[index], val))
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutgoingStrategyTab.useEffect": ()=>{
            if (campaignInfo.redial_strategy && campaignInfo.redial_strategy.length > 0) {
                setTempOutgoingStrategyTab({
                    ...tempOutgoingStrategyTab,
                    redial_strategy: campaignInfo.redial_strategy
                });
                setMaxCallsRows(maxCallsRows.map({
                    "OutgoingStrategyTab.useEffect": (row)=>({
                            ...row,
                            call1: Number(campaignInfo.redial_strategy[0].substring(0, 1)),
                            call2: Number(campaignInfo.redial_strategy[1].substring(0, 1)),
                            call3: Number(campaignInfo.redial_strategy[2].substring(0, 1)),
                            call4: Number(campaignInfo.redial_strategy[3].substring(0, 1)),
                            call5: Number(campaignInfo.redial_strategy[4].substring(0, 1))
                        })
                }["OutgoingStrategyTab.useEffect"]));
                setRows(rows.map({
                    "OutgoingStrategyTab.useEffect": (row, index)=>({
                            ...row,
                            id: '전화번호' + (index + 1),
                            count1: Number(campaignInfo.redial_strategy[index].split('\/')[0].split('.')[1]),
                            duration1: Number(campaignInfo.redial_strategy[index].split('\/')[0].split('.')[2]),
                            count2: Number(campaignInfo.redial_strategy[index].split('\/')[1].split('.')[1]),
                            duration2: Number(campaignInfo.redial_strategy[index].split('\/')[1].split('.')[2]),
                            count3: Number(campaignInfo.redial_strategy[index].split('\/')[2].split('.')[1]),
                            duration3: Number(campaignInfo.redial_strategy[index].split('\/')[2].split('.')[2]),
                            count4: Number(campaignInfo.redial_strategy[index].split('\/')[3].split('.')[1]),
                            duration4: Number(campaignInfo.redial_strategy[index].split('\/')[3].split('.')[2]),
                            count5: Number(campaignInfo.redial_strategy[index].split('\/')[4].split('.')[1]),
                            duration5: Number(campaignInfo.redial_strategy[index].split('\/')[4].split('.')[2]),
                            count6: Number(campaignInfo.redial_strategy[index].split('\/')[5].split('.')[1]),
                            duration6: Number(campaignInfo.redial_strategy[index].split('\/')[5].split('.')[2]),
                            count7: Number(campaignInfo.redial_strategy[index].split('\/')[6].split('.')[1]),
                            duration7: Number(campaignInfo.redial_strategy[index].split('\/')[6].split('.')[2])
                        })
                }["OutgoingStrategyTab.useEffect"]));
            }
        }
    }["OutgoingStrategyTab.useEffect"], [
        campaignInfo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "pb-1",
                                title: "전화번호별 최대 링 횟수"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-custom-wrap w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    columns: maxCallsColumns,
                                    rows: maxCallsRows,
                                    onRowsChange: handleMaxCallsRowsChange,
                                    className: "grid-custom row-none",
                                    rowHeight: 26
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "pb-1",
                                title: "재시도 전략 설정",
                                buttons: [
                                    {
                                        label: "초기화",
                                        onClick: ()=>onCampaignOutgoingStrategyChange({
                                                ...tempOutgoingStrategyTab,
                                                onInit: true
                                            }),
                                        variant: "secondary"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-custom-wrap w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    columns: mainColumns,
                                    rows: rows,
                                    onRowsChange: handleMainRowsChange,
                                    className: "grid-custom row-none h-[300px]",
                                    rowHeight: 26
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onCampaignOutgoingStrategyChange({
                                ...tempOutgoingStrategyTab,
                                onSave: true
                            }),
                        children: "확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onCampaignOutgoingStrategyChange({
                                ...tempOutgoingStrategyTab,
                                onClosed: true
                            }),
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
};
_s(OutgoingStrategyTab, "MXI8RzlFeKwat5ZoFlFWay1a9nc=");
_c1 = OutgoingStrategyTab;
const __TURBOPACK__default__export__ = OutgoingStrategyTab;
var _c, _c1;
__turbopack_refresh__.register(_c, "EditableCell");
__turbopack_refresh__.register(_c1, "OutgoingStrategyTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomCheckbox/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
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
const useCounselResultList = [
    {
        useCounselResultId: 0,
        useCounselResultName: '미사용'
    },
    {
        useCounselResultId: 1,
        useCounselResultName: '사용'
    }
];
const useMachineHandling = [
    {
        id: 1,
        name: '컬러링 판별후 사람만연결'
    },
    {
        id: 2,
        name: '컬러링 판별후 사람/ 기계음 연결'
    },
    {
        id: 3,
        name: '기계음/사람 무조건연결'
    }
];
const CampaignOutgoingMethodTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    onSave: false,
    onClosed: false,
    trunk_access_code: '',
    dial_try_interval: 0,
    alarm_answer_count: 0,
    overdial_abandon_time: 0,
    detect_mode: 1,
    auto_dial_interval: 0,
    power_divert_queue: 0,
    next_campaign: 0,
    DDD_code: '',
    callback_kind: 0,
    max_ring: 0,
    token_id: 0,
    use_counsel_result: 0,
    dial_mode_option: 0,
    user_option: ''
};
const OutgoingMethodTab = ({ callCampaignMenu, campaignInfo, onCampaignOutgoingMethodChange })=>{
    _s();
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const [maxRings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("10");
    const [dialModeOption, setDialModeOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    const [limitRateRateEnabled, setLimitRateRateEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [limitRateEnabled, setLimitRateEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [limitExitInit, setLimitExitInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [limitInit, setLimitInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [limitRate, setLimitRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tempOutgoingMethodTab, setTempOutgoingMethodTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignOutgoingMethodTab);
    const [tempCampaignId, setTempCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // 숫자만 입력되도록 제어하는 함수
    const handleNumericInput = (e, type)=>{
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            if (type === 'setTrunkAccessCode') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    trunk_access_code: value
                });
            } else if (type === 'setCallGoal') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    alarm_answer_count: Number(value)
                });
            } else if (type === 'setAutoDial') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    auto_dial_interval: Number(value)
                });
            } else if (type === 'setDddNumber') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    DDD_code: value
                });
            } else if (type === 'setTokenId') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    token_id: Number(value)
                });
            } else if (type === 'setIvrNo') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    power_divert_queue: Number(value)
                });
            } else if (type === 'setLimitRate') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    changeYn: true,
                    campaignInfoChangeYn: true,
                    user_option: value === '' ? '' : 'limit=' + value
                });
                setLimitRate(value);
            }
        }
    };
    const handleAbandonmentTime = (value)=>{
        onCampaignOutgoingMethodChange({
            ...tempOutgoingMethodTab,
            changeYn: true,
            campaignInfoChangeYn: true,
            overdial_abandon_time: Number(value)
        });
    };
    const handleLinkedCampaign = (value)=>{
        onCampaignOutgoingMethodChange({
            ...tempOutgoingMethodTab,
            changeYn: true,
            campaignInfoChangeYn: true,
            next_campaign: Number(value)
        });
    };
    const handleUseCounselResult = (value)=>{
        onCampaignOutgoingMethodChange({
            ...tempOutgoingMethodTab,
            changeYn: true,
            campaignInfoChangeYn: true,
            use_counsel_result: Number(value)
        });
    };
    const handleMachineHandling = (value)=>{
        onCampaignOutgoingMethodChange({
            ...tempOutgoingMethodTab,
            changeYn: true,
            campaignInfoChangeYn: true,
            detect_mode: Number(value)
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutgoingMethodTab.useEffect": ()=>{
            if (campaignInfo) {
                // 서버에서 값이 0이거나 없는 경우, 기본값 1로 설정
                const detectMode = campaignInfo.detect_mode === 0 ? 1 : campaignInfo.detect_mode;
                setTempOutgoingMethodTab({
                    ...tempOutgoingMethodTab,
                    trunk_access_code: campaignInfo.trunk_access_code,
                    dial_try_interval: campaignInfo.dial_try_interval,
                    alarm_answer_count: campaignInfo.alarm_answer_count,
                    overdial_abandon_time: campaignInfo.overdial_abandon_time,
                    detect_mode: detectMode // 기본값 1로 설정
                    ,
                    auto_dial_interval: campaignInfo.auto_dial_interval,
                    power_divert_queue: Number(campaignInfo.power_divert_queue),
                    next_campaign: campaignInfo.next_campaign,
                    DDD_code: campaignInfo.DDD_code,
                    callback_kind: campaignInfo.callback_kind,
                    max_ring: campaignInfo.max_ring,
                    token_id: campaignInfo.token_id,
                    use_counsel_result: campaignInfo.use_counsel_result,
                    dial_mode_option: campaignInfo.dial_mode_option,
                    user_option: campaignInfo.user_option
                });
                if (tempCampaignId !== campaignInfo.campaign_id) {
                    setTempCampaignId(campaignInfo.campaign_id);
                    setLimitRate(campaignInfo.user_option === '' ? '' : campaignInfo.user_option.split(',')[0].indexOf('limit') > -1 ? campaignInfo.user_option.split(',')[0].split('=')[1] : '');
                    setLimitInit(campaignInfo.user_option === '' ? false : campaignInfo.user_option.split(',')[0].indexOf('limit') > -1 && campaignInfo.user_option.split(',')[1] === '0' ? true : false);
                    setLimitRateEnabled(campaignInfo.user_option === '' ? false : campaignInfo.user_option.split(',')[0].indexOf('limit') > -1 ? true : false);
                }
            }
        }
    }["OutgoingMethodTab.useEffect"], [
        campaignInfo
    ]);
    // 초기 생성시에 기본값으로 1 설정하기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutgoingMethodTab.useEffect": ()=>{
            if (callCampaignMenu === 'NewCampaignManager' || callCampaignMenu === 'CampaignClone') {
                onCampaignOutgoingMethodChange({
                    ...tempOutgoingMethodTab,
                    detect_mode: 1 // 컬러링 판별후 사람만연결
                });
            }
        }
    }["OutgoingMethodTab.useEffect"], [
        callCampaignMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-[60px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[50%] flex flex-col gap-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "Trunk Access Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: tempOutgoingMethodTab.trunk_access_code,
                                        onChange: (e)=>handleNumericInput(e, 'setTrunkAccessCode')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "재시도 간격(초)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: tempOutgoingMethodTab.dial_try_interval + '',
                                        disabled: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: tempOutgoingMethodTab.dial_try_interval
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "20",
                                                    children: "20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "콜 목표량"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: tempOutgoingMethodTab.alarm_answer_count,
                                        onChange: (e)=>handleNumericInput(e, 'setCallGoal')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "포기호 처리시간(초)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: tempOutgoingMethodTab.overdial_abandon_time + '',
                                        onValueChange: handleAbandonmentTime,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: tempOutgoingMethodTab.overdial_abandon_time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    "0",
                                                    "2",
                                                    "3",
                                                    "4",
                                                    "5",
                                                    "6",
                                                    "7",
                                                    "10",
                                                    "15",
                                                    "20",
                                                    "30",
                                                    "60"
                                                ].map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: time,
                                                        children: time
                                                    }, time, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "기계음처리"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: tempOutgoingMethodTab.detect_mode + '',
                                        onValueChange: handleMachineHandling,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "컬러링 판별후 사람만연결"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: useMachineHandling.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.id + '',
                                                        children: option.name
                                                    }, option.id, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "자동 다이얼 시"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: tempOutgoingMethodTab.auto_dial_interval,
                                        onChange: (e)=>handleNumericInput(e, 'setAutoDial')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "다이얼 모드 옵션"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 283,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: dialModeOption,
                                        disabled: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: dialModeOption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 285,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "default",
                                                    children: "default"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 288,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 284,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[50%] flex flex-col gap-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "연결 캠페인"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: tempOutgoingMethodTab.next_campaign + '',
                                        onValueChange: handleLinkedCampaign,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: ''
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: '0',
                                                        children: "없음"
                                                    }, 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this),
                                                    isNaN(campaignInfo.tenant_id) ? campaigns.map((campaign)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: campaign.campaign_id + '',
                                                            children: [
                                                                "[",
                                                                campaign.campaign_id,
                                                                "]",
                                                                campaign.campaign_name
                                                            ]
                                                        }, campaign.campaign_id, true, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this)) : campaigns.filter((data)=>data.tenant_id === Number(campaignInfo.tenant_id)).map((campaign)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: campaign.campaign_id + '',
                                                            children: [
                                                                "[",
                                                                campaign.campaign_id,
                                                                "]",
                                                                campaign.campaign_name
                                                            ]
                                                        }, campaign.campaign_id, true, {
                                                            fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "DDD Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: tempOutgoingMethodTab.DDD_code,
                                        onChange: (e)=>handleNumericInput(e, 'setDddNumber')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "최대 링 횟수"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: maxRings,
                                        disabled: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: maxRings
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 339,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "10",
                                                    children: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "Token ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: tempOutgoingMethodTab.token_id,
                                        onChange: (e)=>handleNumericInput(e, 'setTokenId')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "상담결과 등록"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: tempOutgoingMethodTab.use_counsel_result + '',
                                        onValueChange: handleUseCounselResult,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: '미사용'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: useCounselResultList.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: status.useCounselResultId + '',
                                                        children: status.useCounselResultName
                                                    }, status.useCounselResultId, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[8.3rem] min-w-[8.3rem]",
                                        children: "연결 IVR NO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: tempOutgoingMethodTab.power_divert_queue,
                                        onChange: (e)=>handleNumericInput(e, 'setIvrNo')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                id: "limit-rate",
                                                checked: limitRateEnabled,
                                                onCheckedChange: (checked)=>{
                                                    setLimitRateEnabled(checked);
                                                    setLimitRateRateEnabled(checked);
                                                    if (!checked) {
                                                        // setLimitRate(""); // 비활성화 시 입력 값 초기화
                                                        setLimitInit(checked);
                                                        setLimitExitInit(checked);
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "limit-rate",
                                                className: "w-[108px] min-w-[108px]",
                                                children: "제한 호수 비율"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                type: "text",
                                                value: limitRate,
                                                onChange: (e)=>handleNumericInput(e, 'setLimitRate'),
                                                disabled: !limitRateRateEnabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 407,
                                                columnNumber: 15
                                            }, this),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                id: "limit-init",
                                                checked: limitInit,
                                                onCheckedChange: (checked)=>{
                                                    setLimitInit(checked);
                                                    setLimitRateRateEnabled(!checked);
                                                    if (checked) {
                                                        setLimitRate("0"); // 비활성화 시 입력 값 초기화
                                                        onCampaignOutgoingMethodChange({
                                                            ...tempOutgoingMethodTab,
                                                            changeYn: true,
                                                            campaignInfoChangeYn: true,
                                                            user_option: 'limit=0'
                                                        });
                                                        setLimitExitInit(!checked);
                                                    }
                                                },
                                                disabled: !limitRateEnabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "limit-init",
                                                className: "",
                                                children: "분배제한 고정 포함 초기화"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 434,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                id: "limit-exit-init",
                                                checked: limitExitInit,
                                                onCheckedChange: (checked)=>{
                                                    setLimitExitInit(checked);
                                                    setLimitRateRateEnabled(!checked);
                                                    if (checked) {
                                                        setLimitRate(""); // 비활성화 시 입력 값 초기화
                                                        onCampaignOutgoingMethodChange({
                                                            ...tempOutgoingMethodTab,
                                                            changeYn: true,
                                                            campaignInfoChangeYn: true,
                                                            user_option: ''
                                                        });
                                                        setLimitInit(!checked);
                                                    }
                                                },
                                                disabled: !limitRateEnabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 439,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "limit-exit-init",
                                                className: "",
                                                children: "분배제한 고정 제외 초기화"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                                lineNumber: 457,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                                lineNumber: 389,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onCampaignOutgoingMethodChange({
                                ...tempOutgoingMethodTab,
                                onSave: true
                            }),
                        children: "확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onCampaignOutgoingMethodChange({
                                ...tempOutgoingMethodTab,
                                onClosed: true
                            }),
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
};
_s(OutgoingMethodTab, "uGhaM26Ah5dm51t6otTdZY5tAzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"]
    ];
});
_c = OutgoingMethodTab;
const __TURBOPACK__default__export__ = OutgoingMethodTab;
var _c;
__turbopack_refresh__.register(_c, "OutgoingMethodTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const tempCallPacingTab = {
    changeYn: false,
    campaignDialSpeedChangeYn: false,
    onSave: false,
    onClosed: false,
    dial_mode: 0,
    progressive_dial_speed: 0,
    predictive_dial_speed: 0
};
const CallPacingTab = ({ callCampaignMenu, campaignDialSpeedInfo, onHandleCallPacingTabChange })=>{
    _s();
    const [predictiveValue, setPredictiveValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [progressiveValue, setProgressiveValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const [predictiveUnit, setPredictiveUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [progressiveUnit, setProgressiveUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [predictiveDisabled, setPredictiveDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progressiveValueeDisabled, setProgressiveValueDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tempCallPacingTabParam, setTempCallPacingTabParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(campaignDialSpeedInfo);
    const predictiveUnits = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ];
    const progressiveUnits = [
        1,
        5,
        10,
        50,
        100
    ];
    const handleDecrement = (type)=>{
        if (type === 'predictive') {
            setPredictiveValue(Math.max(50, predictiveValue - predictiveUnit));
            onHandleCallPacingTabChange({
                ...tempCallPacingTabParam,
                campaignDialSpeedChangeYn: true,
                predictive_dial_speed: Math.max(50, predictiveValue - predictiveUnit)
            });
        } else {
            setProgressiveValue(Math.max(25, progressiveValue - progressiveUnit));
            onHandleCallPacingTabChange({
                ...tempCallPacingTabParam,
                campaignDialSpeedChangeYn: true,
                progressive_dial_speed: Math.max(12.5, (progressiveValue - progressiveUnit) / 2)
            });
        }
    };
    const handleIncrement = (type)=>{
        if (type === 'predictive') {
            setPredictiveValue(Math.min(100, predictiveValue + predictiveUnit));
            onHandleCallPacingTabChange({
                ...tempCallPacingTabParam,
                campaignDialSpeedChangeYn: true,
                predictive_dial_speed: Math.min(100, predictiveValue + predictiveUnit)
            });
        } else {
            setProgressiveValue(Math.min(500, progressiveValue + progressiveUnit));
            onHandleCallPacingTabChange({
                ...tempCallPacingTabParam,
                campaignDialSpeedChangeYn: true,
                progressive_dial_speed: Math.min(250, (progressiveValue + progressiveUnit) / 2)
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallPacingTab.useEffect": ()=>{
            if (campaignDialSpeedInfo) {
                if (campaignDialSpeedInfo.dial_mode === 2) {
                    setPredictiveDisabled(true);
                    setProgressiveValueDisabled(false);
                } else if (campaignDialSpeedInfo.dial_mode === 3) {
                    setPredictiveDisabled(false);
                    setProgressiveValueDisabled(true);
                } else {
                    setPredictiveDisabled(true);
                    setProgressiveValueDisabled(true);
                }
                setProgressiveValue(campaignDialSpeedInfo.progressive_dial_speed * 2 < 25 ? 25 : campaignDialSpeedInfo.progressive_dial_speed * 2);
                setPredictiveValue(campaignDialSpeedInfo.predictive_dial_speed < 50 ? 50 : campaignDialSpeedInfo.predictive_dial_speed);
            }
        }
    }["CallPacingTab.useEffect"], [
        campaignDialSpeedInfo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-[20px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "",
                                title: "Predictive"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                lineNumber: 89,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[#ebebeb] rounded-[3px] px-[40px] py-[20px] flex flex-col gap-[14px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "발신 속도 조절"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium min-w-[25px] text-center",
                                                        children: predictiveValue
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: [
                                                            "(",
                                                            predictiveValue === 50 ? 0 : '+' + (predictiveValue - 50),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 138
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-[5px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "변경 단위 :"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: predictiveUnit.toString(),
                                                        onValueChange: (value)=>setPredictiveUnit(Number(value)),
                                                        disabled: predictiveDisabled,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "w-24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Select unit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                children: predictiveUnits.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: unit.toString(),
                                                                        children: unit
                                                                    }, unit, false, {
                                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-[20px] w-full rounded-full bg-[#ddd]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full bg-[#4EE781]",
                                                        style: {
                                                            width: `${(predictiveValue - 50) * 2 / 100 * 100}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDecrement('predictive'),
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: predictiveDisabled,
                                                        children: "←"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleIncrement('predictive'),
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: predictiveDisabled,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "",
                                title: "Progressive"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[#ebebeb] rounded-[3px] px-[40px] py-[20px] flex flex-col gap-[14px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "발신 비율(%):범위"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium min-w-[25px] text-center",
                                                        children: progressiveValue
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "(%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 139
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-[5px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "변경 단위 :"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: progressiveUnit.toString(),
                                                        onValueChange: (value)=>setProgressiveUnit(Number(value)),
                                                        disabled: progressiveValueeDisabled,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "w-24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Select unit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                children: progressiveUnits.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: unit.toString(),
                                                                        children: unit
                                                                    }, unit, false, {
                                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                        lineNumber: 160,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-[20px] w-full rounded-full bg-[#ddd]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full bg-green-400",
                                                        style: {
                                                            width: `${(progressiveValue - 25) / (500 - 25) * 100}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDecrement('progressive'),
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: progressiveValueeDisabled,
                                                        children: "←"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleIncrement('progressive'),
                                                        className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                        disabled: progressiveValueeDisabled,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                        lineNumber: 168,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onHandleCallPacingTabChange({
                                ...tempCallPacingTabParam,
                                onSave: true
                            }),
                        children: "확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onHandleCallPacingTabChange({
                                ...tempCallPacingTabParam,
                                onClosed: true
                            }),
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
};
_s(CallPacingTab, "62BPgl2lUZa4zjQWsUB6Dse/Bnw=");
_c = CallPacingTab;
const __TURBOPACK__default__export__ = CallPacingTab;
var _c;
__turbopack_refresh__.register(_c, "CallPacingTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomCheckbox/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const tempCallbackTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    onSave: false,
    onClosed: false,
    callback_kind: 0,
    service_code: 0
};
const CallbackTab = ({ callCampaignMenu, campaignInfo, onHandleCallbackTabChange })=>{
    _s();
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 체크박스 상태 관리
    const [tempCallbackTabParam, setTempCallbackTabParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tempCallbackTab);
    // 숫자 입력만 허용하는 핸들러
    const handleServiceCodeChange = (e)=>{
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            onHandleCallbackTabChange({
                ...tempCallbackTabParam,
                campaignInfoChangeYn: true,
                service_code: Number(value)
            });
        }
    };
    const handleChecked = (checked)=>{
        setIsChecked(checked);
        if (checked) {
            onHandleCallbackTabChange({
                ...tempCallbackTabParam,
                campaignInfoChangeYn: true,
                callback_kind: 1,
                service_code: 0
            });
        } else {
            onHandleCallbackTabChange({
                ...tempCallbackTabParam,
                campaignInfoChangeYn: true,
                callback_kind: 0,
                service_code: 0
            });
        }
    };
    const handleSelectChange = (value, col)=>{
        onHandleCallbackTabChange({
            ...tempCallbackTabParam,
            campaignInfoChangeYn: true,
            callback_kind: Number(value)
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallbackTab.useEffect": ()=>{
            if (campaignInfo) {
                if (campaignInfo.callback_kind === 0) {
                    setIsChecked(false);
                } else {
                    setIsChecked(true);
                }
                setTempCallbackTabParam({
                    ...tempCallbackTabParam,
                    callback_kind: campaignInfo.callback_kind,
                    service_code: campaignInfo.service_code
                });
            }
        }
    }["CallbackTab.useEffect"], [
        campaignInfo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-[50px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-[12px] w-[400px] m-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                            id: "callbackCampaign",
                            checked: isChecked,
                            onCheckedChange: (checked)=>handleChecked(checked === true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "callbackCampaign",
                            children: "Call back Campaign"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "w-[8.3rem] min-w-[8.3rem]",
                            children: "Call back 구분"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            disabled: !isChecked,
                            value: campaignInfo?.callback_kind === 0 ? '1' : campaignInfo?.callback_kind + '',
                            onValueChange: (value)=>handleSelectChange(value, 'callback_kind'),
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: "Select an option"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "1",
                                            children: "무한 callback"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "2",
                                            children: "일반 callback"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "w-[8.3rem] min-w-[8.3rem]",
                            children: "Service Code"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                            type: "text",
                            value: campaignInfo?.service_code + '',
                            onChange: handleServiceCodeChange,
                            disabled: !isChecked
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                            variant: "secondary",
                            onClick: ()=>onHandleCallbackTabChange({
                                    ...tempCallbackTabParam,
                                    onSave: true
                                }),
                            children: "확인"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                            variant: "secondary",
                            onClick: ()=>onHandleCallbackTabChange({
                                    ...tempCallbackTabParam,
                                    onClosed: true
                                }),
                            children: "취소"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_s(CallbackTab, "3hEL0fNDAZaedEclLQWZHX1Er8E=");
_c = CallbackTab;
const __TURBOPACK__default__export__ = CallbackTab;
var _c;
__turbopack_refresh__.register(_c, "CallbackTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomCheckbox/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const tempNotificationTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    onSave: false,
    onClosed: false,
    list_alarm_count: 0,
    supervisor_phone: '',
    use_list_alarm: 0
};
const NotificationTab = ({ callCampaignMenu, campaignInfo, onHandleNotificationTabChange })=>{
    _s();
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 잔량 부족 알림 사용 상태
    const [alertMessage, setAlertMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 메시지로 알림
    const [alertSound, setAlertSound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 소리로 알림
    const [alertCall, setAlertCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 관리자에게 전화로 알림
    const [tempNotificationTabParam, setTempNotificationTabParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tempNotificationTab);
    const [tempCampaignInfoChangeYn, setTempCampaignInfoChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 숫자 입력만 허용하는 핸들러
    const handleNumericInput = (e)=>{
        const value = e.target.value;
        setTempCampaignInfoChangeYn(true);
        if (/^\d*$/.test(value)) {
            onHandleNotificationTabChange({
                ...tempNotificationTabParam,
                campaignInfoChangeYn: true,
                list_alarm_count: Number(value)
            });
        }
    };
    const handleInput = (e)=>{
        const value = e.target.value;
        onHandleNotificationTabChange({
            ...tempNotificationTabParam,
            campaignInfoChangeYn: true,
            supervisor_phone: value
        });
    };
    const handleCheckbox = (checked, type)=>{
        let tempData = 0;
        if (type === 'alertMessage') {
            if (checked) {
                if (alertSound && alertCall) {
                    tempData = 7;
                } else if (alertSound && !alertCall) {
                    tempData = 4;
                } else if (!alertSound && alertCall) {
                    tempData = 5;
                } else if (!alertSound && !alertCall) {
                    tempData = 1;
                }
            } else {
                if (alertSound && alertCall) {
                    tempData = 6;
                } else if (alertSound && !alertCall) {
                    tempData = 2;
                } else if (!alertSound && alertCall) {
                    tempData = 3;
                } else if (!alertSound && !alertCall) {
                    tempData = 0;
                }
            }
        } else if (type === 'alertSound') {
            if (checked) {
                if (alertMessage && alertCall) {
                    tempData = 7;
                } else if (alertMessage && !alertCall) {
                    tempData = 4;
                } else if (!alertMessage && alertCall) {
                    tempData = 6;
                } else if (!alertMessage && !alertCall) {
                    tempData = 2;
                }
            } else {
                if (alertMessage && alertCall) {
                    tempData = 5;
                } else if (alertMessage && !alertCall) {
                    tempData = 1;
                } else if (!alertMessage && alertCall) {
                    tempData = 3;
                } else if (!alertMessage && !alertCall) {
                    tempData = 0;
                }
            }
        } else if (type === 'alertCall') {
            if (checked) {
                if (alertMessage && alertSound) {
                    tempData = 7;
                } else if (alertMessage && !alertSound) {
                    tempData = 5;
                } else if (!alertMessage && alertSound) {
                    tempData = 6;
                } else if (!alertMessage && !alertSound) {
                    tempData = 3;
                }
            } else {
                if (alertMessage && alertSound) {
                    tempData = 4;
                } else if (alertMessage && !alertSound) {
                    tempData = 1;
                } else if (!alertMessage && alertSound) {
                    tempData = 2;
                } else if (!alertMessage && !alertSound) {
                    tempData = 0;
                }
            }
        }
        onHandleNotificationTabChange({
            ...tempNotificationTabParam,
            campaignInfoChangeYn: true,
            use_list_alarm: tempData
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationTab.useEffect": ()=>{
            if (campaignInfo) {
                setTempNotificationTabParam({
                    ...tempNotificationTabParam,
                    list_alarm_count: campaignInfo.list_alarm_count,
                    use_list_alarm: campaignInfo.use_list_alarm,
                    supervisor_phone: campaignInfo.supervisor_phone
                });
                if (campaignInfo.use_list_alarm === 0 && !tempCampaignInfoChangeYn) {
                    setIsChecked(false);
                    setAlertMessage(true);
                    setAlertSound(false);
                    setAlertCall(false);
                } else {
                    setIsChecked(true);
                    if (campaignInfo.use_list_alarm === 1) {
                        setAlertMessage(true);
                        setAlertSound(false);
                        setAlertCall(false);
                    } else if (campaignInfo.use_list_alarm === 2) {
                        setAlertMessage(false);
                        setAlertSound(true);
                        setAlertCall(false);
                    } else if (campaignInfo.use_list_alarm === 3) {
                        setAlertMessage(false);
                        setAlertSound(false);
                        setAlertCall(true);
                    } else if (campaignInfo.use_list_alarm === 4) {
                        setAlertMessage(true);
                        setAlertSound(true);
                        setAlertCall(false);
                    } else if (campaignInfo.use_list_alarm === 5) {
                        setAlertMessage(true);
                        setAlertSound(false);
                        setAlertCall(true);
                    } else if (campaignInfo.use_list_alarm === 6) {
                        setAlertMessage(false);
                        setAlertSound(true);
                        setAlertCall(true);
                    } else if (campaignInfo.use_list_alarm === 7) {
                        setAlertMessage(true);
                        setAlertSound(true);
                        setAlertCall(true);
                    }
                }
            }
        }
    }["NotificationTab.useEffect"], [
        campaignInfo,
        tempCampaignInfoChangeYn
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-[50px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-[12px] w-[460px] m-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                            id: "lowStockAlert",
                            checked: isChecked,
                            onCheckedChange: (checked)=>setIsChecked(checked === true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "lowStockAlert",
                            children: "잔량 부족 알림 사용"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-[30px] flex flex-col gap-[12px] border-[#ebebeb] border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: tempNotificationTabParam.list_alarm_count,
                                    onChange: (e)=>handleNumericInput(e),
                                    disabled: !isChecked
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[8.3rem] min-w-[8.3rem]",
                                    children: "잔량 부족 알림 개수"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                    id: "alertMessage",
                                    disabled: !isChecked,
                                    checked: alertMessage,
                                    onCheckedChange: (checked)=>handleCheckbox(checked === true, 'alertMessage')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "alertMessage",
                                    children: "메시지로 알림"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                    id: "alertSound",
                                    disabled: !isChecked,
                                    checked: alertSound,
                                    onCheckedChange: (checked)=>handleCheckbox(checked === true, 'alertSound')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "alertSound",
                                    children: "소리로 알림"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                    id: "alertCall",
                                    disabled: !isChecked,
                                    checked: alertCall,
                                    onCheckedChange: (checked)=>handleCheckbox(checked === true, 'alertCall')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "alertCall",
                                    children: "관리자에게 전화로 알림"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[6rem] min-w-[6rem]",
                                    children: "관리자 전화번호"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: tempNotificationTabParam.supervisor_phone,
                                    onChange: (e)=>handleInput(e),
                                    disabled: !isChecked
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end text-sm text-gray-500",
                            children: "(외부 회선을 사용할 경우 국선 번호를 포함하여 주십시요.)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                            variant: "secondary",
                            onClick: ()=>onHandleNotificationTabChange({
                                    ...tempNotificationTabParam,
                                    onSave: true
                                }),
                            children: "확인"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                            variant: "secondary",
                            onClick: ()=>onHandleNotificationTabChange({
                                    ...tempNotificationTabParam,
                                    onClosed: true
                                }),
                            children: "취소"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
};
_s(NotificationTab, "EuyJ2To6jMdlvsQ3JDnauvQb4GU=");
_c = NotificationTab;
const __TURBOPACK__default__export__ = NotificationTab;
var _c;
__turbopack_refresh__.register(_c, "NotificationTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignAssignmentAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignAssignmentAgent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const tempAdditionalInfoTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    onSave: false,
    onClosed: false
};
const AssignedAgentTab = ({ callCampaignMenu, campaignInfo, onHandleAdditionalInfoTabChange })=>{
    _s();
    const [initialData, setInitialData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const transformToTreeData = (counselors)=>{
        const result = [];
        counselors.forEach((counselor)=>{
            let group = result.find((group)=>group.affiliationGroupId === counselor.affiliationGroupId);
            if (!group) {
                group = {
                    id: `group-${counselor.affiliationGroupId}`,
                    level: 0,
                    hasChildren: true,
                    affiliationGroupId: counselor.affiliationGroupId,
                    children: []
                };
                result.push(group);
            }
            let team = group.children.find((team)=>team.affiliationTeamId === counselor.affiliationTeamId);
            if (!team) {
                team = {
                    id: `team-${counselor.affiliationTeamId}`,
                    parentId: group.id,
                    level: 1,
                    hasChildren: true,
                    affiliationTeamId: counselor.affiliationTeamId,
                    children: []
                };
                group.children.push(team);
            }
            team.children.push({
                id: counselor.counselorEmplNum,
                parentId: team.id,
                level: 2,
                counselorEmplNum: counselor.counselorEmplNum,
                counselorId: counselor.counselorId,
                counselorname: counselor.counselorname
            });
            group.children.sort((a, b)=>a.id.localeCompare(b.id));
        });
        return result;
    };
    //할당상담사 정보 조회
    const { mutate: fetchCampaignAssignmentAgents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignAssignmentAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAssignmentAgent"])({
        onSuccess: {
            "AssignedAgentTab.useApiForCampaignAssignmentAgent": (data)=>{
                const transformedData = transformToTreeData(data.assignedCounselorList);
                setInitialData(transformedData.sort({
                    "AssignedAgentTab.useApiForCampaignAssignmentAgent": (a, b)=>a.id.localeCompare(b.id)
                }["AssignedAgentTab.useApiForCampaignAssignmentAgent"]));
            }
        }["AssignedAgentTab.useApiForCampaignAssignmentAgent"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignedAgentTab.useEffect": ()=>{
            if (initialData.length > 0) {
                // const expandedRowIds = initialData.map(row => row.id);
                const expandedData = initialData.map({
                    "AssignedAgentTab.useEffect.expandedData": (group)=>({
                            ...group,
                            children: group.children?.map({
                                "AssignedAgentTab.useEffect.expandedData": (team)=>({
                                        ...team,
                                        children: team.children?.map({
                                            "AssignedAgentTab.useEffect.expandedData": (counselor)=>({
                                                    ...counselor,
                                                    expanded: true // Marking the counselors as expanded
                                                })
                                        }["AssignedAgentTab.useEffect.expandedData"])
                                    })
                            }["AssignedAgentTab.useEffect.expandedData"])
                        })
                }["AssignedAgentTab.useEffect.expandedData"]);
                const expandedRowIds = new Set();
                expandedData.forEach({
                    "AssignedAgentTab.useEffect": (group)=>{
                        expandedRowIds.add(group.id);
                        group.children?.forEach({
                            "AssignedAgentTab.useEffect": (team)=>{
                                expandedRowIds.add(team.id);
                                team.children?.forEach({
                                    "AssignedAgentTab.useEffect": (counselor)=>{
                                        expandedRowIds.add(counselor.id);
                                    }
                                }["AssignedAgentTab.useEffect"]);
                            }
                        }["AssignedAgentTab.useEffect"]);
                    }
                }["AssignedAgentTab.useEffect"]);
                setExpandedRows(expandedRowIds);
            }
        }
    }["AssignedAgentTab.useEffect"], [
        initialData
    ]);
    const [expandedRows, setExpandedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignedAgentTab.useEffect": ()=>{
            if (!(callCampaignMenu == 'NewCampaignManager') && campaignInfo && campaignInfo.campaign_id > 0) {
                fetchCampaignAssignmentAgents({
                    tenantId: campaignInfo.tenant_id + '',
                    campaignId: campaignInfo.campaign_id + ''
                });
            }
            setInitialData([]);
        }
    }["AssignedAgentTab.useEffect"], [
        callCampaignMenu,
        campaignInfo
    ]);
    const toggleRowExpand = (rowId)=>{
        const newExpandedRows = new Set(expandedRows);
        if (expandedRows.has(rowId)) {
            newExpandedRows.delete(rowId);
        } else {
            newExpandedRows.add(rowId);
        }
        setExpandedRows(newExpandedRows);
    };
    function flattenRows(rows) {
        let flat = [];
        if (rows.length > 0) {
            rows.forEach((row)=>{
                const isExpanded = expandedRows.has(row.id);
                flat.push({
                    ...row,
                    isExpanded
                });
                if (row.children && isExpanded) {
                    flat = flat.concat(flattenRows(row.children));
                }
            });
        }
        return flat;
    }
    const rowKeyGetter = (row)=>row.id;
    const columns = [
        {
            key: 'groupName',
            name: '상담그룹',
            width: 200,
            renderCell: ({ row })=>{
                const indent = row.level * 20;
                const showToggle = row.hasChildren;
                let displayName = '';
                if (row.level === 0) {
                    displayName = `상담그룹 : ${row.affiliationGroupId}`;
                } else if (row.level === 1) {
                    displayName = `상담파트 : ${row.affiliationTeamId}`;
                } else {
                    displayName = row.id;
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginLeft: `${indent}px`
                    },
                    className: "flex items-center",
                    children: [
                        showToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                toggleRowExpand(row.id);
                            },
                            className: "cursor-pointer mr-1",
                            children: row.isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                                lineNumber: 188,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                                lineNumber: 190,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                            lineNumber: 180,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: displayName
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this);
            }
        },
        {
            key: 'counselorEmplNum',
            name: '상담사'
        },
        {
            key: 'counselorId',
            name: '사번'
        },
        {
            key: 'counselorname',
            name: '상담사 아이디'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[280px] w-full grid-custom-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    rows: flattenRows(initialData),
                    rowKeyGetter: rowKeyGetter,
                    className: "w-full h-auto grid-custom",
                    rowHeight: 26,
                    headerRowHeight: 26,
                    rowClass: (row)=>{
                        if (row.level === 0) {
                            return 'bg-[#fafafa]';
                        } else if (row.level === 1) {
                            return 'bg-[#f5faff]';
                        }
                        return '';
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onHandleAdditionalInfoTabChange({
                                ...tempAdditionalInfoTab,
                                onSave: true
                            }),
                        children: "확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onHandleAdditionalInfoTabChange({
                                ...tempAdditionalInfoTab,
                                onClosed: true
                            }),
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
};
_s(AssignedAgentTab, "EudhCVKyJrvSnXdSFjSrQijXtOI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignAssignmentAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAssignmentAgent"]
    ];
});
_c = AssignedAgentTab;
const __TURBOPACK__default__export__ = AssignedAgentTab;
var _c;
__turbopack_refresh__.register(_c, "AssignedAgentTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const tempAdditionalInfoTab = {
    changeYn: false,
    campaignInfoChangeYn: false,
    onSave: false,
    onClosed: false
};
const AdditionalInfoTab = ({ callCampaignMenu, campaignInfo, onHandleAdditionalInfoTabChange })=>{
    _s();
    // 캠페인 생성 정보 상태
    const [creator, setCreator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // 생성 인
    const [creationDate, setCreationDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 생성 날짜
    const [creationPlace, setCreationPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 생성 장소
    // 캠페인 수정 정보 상태
    const [editor, setEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // 수정 인
    const [editDate, setEditDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 수정 날짜
    const [editPlace, setEditPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // 수정 장소
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdditionalInfoTab.useEffect": ()=>{
            if (campaignInfo && campaignInfo.campaign_id !== 0) {
                setCreator(campaignInfo.creation_user);
                setCreationDate(campaignInfo.creation_time);
                setCreationPlace(campaignInfo.creation_ip);
                setEditor(campaignInfo.update_user + '');
                setEditDate(campaignInfo.update_time);
                setEditPlace(campaignInfo.update_ip);
            }
        }
    }["AdditionalInfoTab.useEffect"], [
        campaignInfo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border-b border-gray-300 pb-1",
                                title: "캠페인 생성 정보"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[5rem] min-w-[5rem]",
                                                children: "생성 인"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                className: "w-[14rem]",
                                                type: "text",
                                                value: creator,
                                                onChange: (e)=>setCreator(e.target.value),
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[5rem] min-w-[5rem]",
                                                children: "생성 날짜"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                className: "w-[14rem]",
                                                type: "text",
                                                value: creationDate,
                                                onChange: (e)=>setCreationDate(e.target.value),
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[5rem] min-w-[5rem]",
                                                children: "생성 장소"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                className: "w-[14rem]",
                                                type: "text",
                                                value: creationPlace,
                                                onChange: (e)=>setCreationPlace(e.target.value),
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border-b border-gray-300 pb-1",
                                title: "캠페인 수정 정보"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[5rem] min-w-[5rem]",
                                                children: "수정 인"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                className: "w-[14rem]",
                                                type: "text",
                                                value: editor,
                                                onChange: (e)=>setEditor(e.target.value),
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[5rem] min-w-[5rem]",
                                                children: "수정 날짜"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                className: "w-[14rem]",
                                                type: "text",
                                                value: editDate,
                                                onChange: (e)=>setEditDate(e.target.value),
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[5rem] min-w-[5rem]",
                                                children: "수정 장소"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                className: "w-[14rem]",
                                                type: "text",
                                                value: editPlace,
                                                onChange: (e)=>setEditPlace(e.target.value),
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            !(callCampaignMenu == 'NewCampaignManager' || callCampaignMenu == 'CampaignGroupManager' || callCampaignMenu == 'CampaignClone') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onHandleAdditionalInfoTabChange({
                                ...tempAdditionalInfoTab,
                                onSave: true
                            }),
                        children: "확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        variant: "secondary",
                        onClick: ()=>onHandleAdditionalInfoTabChange({
                                ...tempAdditionalInfoTab,
                                onClosed: true
                            }),
                        children: "취소"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(AdditionalInfoTab, "Sk4xMFfmsH1uexHd7KAqecKN5iw=");
_c = AdditionalInfoTab;
const __TURBOPACK__default__export__ = AdditionalInfoTab;
var _c;
__turbopack_refresh__.register(_c, "AdditionalInfoTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OperationTimeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/OperationTimeTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OutgoingOrderTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/OutgoingOrderTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OutgoingStrategyTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/OutgoingStrategyTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OutgoingMethodTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/OutgoingMethodTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CallPacingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/CallPacingTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CallbackTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/CallbackTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$NotificationTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/NotificationTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$AssignedAgentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/AssignedAgentTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$AdditionalInfoTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/AdditionalInfoTab.tsx [app-client] (ecmascript)");
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
const CampaignTab = ({ campaignSchedule, callCampaignMenu, campaignInfo, campaignDialSpeedInfo, onCampaignScheduleChange, onCampaignOutgoingOrderChange, onCampaignOutgoingStrategyChange, onCampaignOutgoingMethodChange, onHandleCallPacingTabChange, onHandleCallbackTabChange, onHandleNotificationTabChange, onHandleAdditionalInfoTabChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
        defaultValue: "tab1",
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tab-custom-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab1",
                            children: "동작시간"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab2",
                            children: "발신순서"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab3",
                            children: "발신전략"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab4",
                            children: "발신방법"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab5",
                            children: "콜페이싱"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab6",
                            children: "콜백"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab7",
                            children: "알림"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        callCampaignMenu != 'NewCampaignManager' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab8",
                            children: "할당상담사"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                            value: "tab9",
                            children: "기타정보"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OperationTimeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    campaignSchedule: campaignSchedule,
                    onCampaignScheduleChange: onCampaignScheduleChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OutgoingOrderTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    onCampaignOutgoingOrderChange: onCampaignOutgoingOrderChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OutgoingStrategyTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    onCampaignOutgoingStrategyChange: onCampaignOutgoingStrategyChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$OutgoingMethodTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    onCampaignOutgoingMethodChange: onCampaignOutgoingMethodChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CallPacingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignDialSpeedInfo: campaignDialSpeedInfo,
                    onHandleCallPacingTabChange: onHandleCallPacingTabChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CallbackTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    onHandleCallbackTabChange: onHandleCallbackTabChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab7",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$NotificationTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    onHandleNotificationTabChange: onHandleNotificationTabChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            callCampaignMenu != 'NewCampaignManager' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$AssignedAgentTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    onHandleAdditionalInfoTabChange: onHandleAdditionalInfoTabChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "tab9",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$AdditionalInfoTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    callCampaignMenu: callCampaignMenu,
                    campaignInfo: campaignInfo,
                    onHandleAdditionalInfoTabChange: onHandleAdditionalInfoTabChange
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_c = CampaignTab;
const __TURBOPACK__default__export__ = CampaignTab;
var _c;
__turbopack_refresh__.register(_c, "CampaignTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CampaignManagerHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/main/CampaignManager.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
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
function CampaignManagerHeader({ onSearch, init, setInit }) {
    _s();
    const { tenants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { skills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [tenantId, setTenantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'); // 테넌트
    const [campaignName, setCampaignName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // 캠페인이름
    const [dailMode, setDailMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'); // 다이얼모드
    const [skill, setSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all'); // 스킬
    const [callNumber, setCallNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // 발신번호
    const [tempSkills, setTempSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const onHeaderSearch = ()=>{
        const param = {
            tenantId: tenantId === 'all' ? -1 : Number(tenantId),
            campaignName: campaignName,
            dailMode: dailMode === 'all' ? -1 : Number(dailMode),
            skill: skill === 'all' ? -1 : Number(skill),
            callNumber: callNumber
        };
        onSearch(param);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManagerHeader.useEffect": ()=>{
            if (typeof tenantId !== 'undefined') {
                if (tenantId === 'all') {
                    setTempSkills(skills);
                } else {
                    setTempSkills(skills.filter({
                        "CampaignManagerHeader.useEffect": (skill)=>skill.tenant_id === Number(tenantId)
                    }["CampaignManagerHeader.useEffect"]));
                }
            }
            setSkill('all');
        }
    }["CampaignManagerHeader.useEffect"], [
        tenantId,
        skills
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManagerHeader.useEffect": ()=>{
            if (init) {
                setInit();
                setTenantId('all');
                setCampaignName('');
                setDailMode('all');
                setSkill('all');
                setCallNumber('');
                onSearch({
                    tenantId: -1,
                    campaignName: '',
                    dailMode: -1,
                    skill: -1,
                    callNumber: ''
                });
            }
        }
    }["CampaignManagerHeader.useEffect"], [
        init
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex title-background justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-[40px] gap-use-10 items-center flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "pr-[15px] whitespace-nowrap",
                                children: "테넌트"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                defaultValue: "all",
                                value: tenantId,
                                onValueChange: setTenantId,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[180px] w-use-140",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "테넌트",
                                            className: "truncate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "all",
                                                className: "truncate",
                                                children: "전체"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            tenants.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: option.tenant_id + '',
                                                    className: "truncate",
                                                    children: option.tenant_name
                                                }, option.tenant_id, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "pr-[15px] whitespace-nowrap",
                                children: "캠페인이름"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                type: "text",
                                value: campaignName,
                                onChange: (e)=>setCampaignName(e.target.value),
                                className: "w-[180px] w-use-140 truncate"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "pr-[15px] whitespace-nowrap",
                                children: "다이얼 모드"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                defaultValue: "all",
                                value: dailMode,
                                onValueChange: setDailMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[180px] w-use-140",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "다이얼 모드",
                                            className: "truncate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "all",
                                                className: "truncate",
                                                children: "전체"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            dialModeList.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: option.dial_id + '',
                                                    className: "truncate",
                                                    children: option.dial_name
                                                }, option.dial_id, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "pr-[15px] whitespace-nowrap",
                                children: "스킬"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                defaultValue: "all",
                                value: skill,
                                onValueChange: setSkill,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[180px] w-use-140",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "스킬",
                                            className: "truncate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "all",
                                                className: "truncate",
                                                children: "전체"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            tempSkills.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: option.skill_id + '',
                                                    className: "truncate",
                                                    children: option.skill_name
                                                }, option.skill_id, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "pr-[15px] whitespace-nowrap",
                                children: "발신번호"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                type: "text",
                                value: callNumber,
                                onChange: (e)=>setCallNumber(e.target.value),
                                className: "w-[180px] w-use-140 truncate"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                    onClick: onHeaderSearch,
                    children: "조회"
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(CampaignManagerHeader, "hAJ86x9mW5CFOQzA2MDlQOUSFKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"]
    ];
});
_c = CampaignManagerHeader;
var _c;
__turbopack_refresh__.register(_c, "CampaignManagerHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CampaignInfo": (()=>CampaignInfo),
    "default": (()=>CampaignDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/CampaignTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$SkillListPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/SkillListPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkillUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignManagerUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignManagerDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignScheduleUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignScheduleInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignScheduleDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignStatusUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedialDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForAutoRedialDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForReservedCallDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForReservedCallDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForMaxcallExtDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForMaxcallExtDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForDialSpeedUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForDialSpeedUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/hooks/useApiForMain.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumber.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForAutoRedial.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSchedules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CallingNumberPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CallingNumberPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignAgent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForCallingListDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/listManager/hooks/useApiForCallingListDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/common.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
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
const CampaignInfo = {
    campaign_id: 0,
    campaign_name: '',
    campaign_desc: '',
    site_code: 0,
    service_code: 0,
    start_flag: 0,
    end_flag: 0,
    dial_mode: 0,
    callback_kind: 0,
    delete_flag: 0,
    list_count: 0,
    list_redial_query: '',
    next_campaign: 0,
    token_id: 0,
    phone_order: '',
    phone_dial_try: [],
    dial_try_interval: 0,
    trunk_access_code: '',
    DDD_code: '',
    power_divert_queue: 0,
    max_ring: 0,
    detect_mode: 0,
    auto_dial_interval: 0,
    creation_user: '',
    creation_time: '',
    creation_ip: '',
    update_user: '',
    update_time: '',
    update_ip: '',
    dial_phone_id: 0,
    tenant_id: 0,
    alarm_answer_count: 0,
    dial_speed: 0,
    parent_campaign: 0,
    overdial_abandon_time: 0,
    list_alarm_count: 0,
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
    user_option: ''
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
const campaignInfoDelete = {
    campaign_id: 0,
    tenant_id: 0,
    delete_dial_list: 1
};
const agientListDelte = {
    campaign_id: 0,
    agent_id_list: []
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
function CampaignDetail({ campaignId, isOpen, onCampaignPopupClose, setInit }) {
    _s();
    const [oriCampaignManagerInfo, setOriCampaignManagerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"]);
    const [tempCampaignManagerInfo, setTempCampaignManagerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"]);
    const [tempCampaignInfo, setTempCampaignsInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignInfo);
    const [tempCampaignSkills, setTempCampaignSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignSkillInfo);
    const [tempCallingNumberInfo, setTempCallingNumberInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CallingNumberInfo);
    const [tempCampaignSchedule, setTempCampaignSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignScheduleInfo);
    const [tempCampaignDialSpeedInfo, setTempCampaignDialSpeedInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignDialSpeedInfo);
    const [tempCampaignDialSpeedInfoParam, setTempCampaignDialSpeedInfoParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignCallPacingTabInfo);
    const [changeYn, setChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [campaignInfoChangeYn, setCampaignInfoChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignSkillChangeYn, setCampaignSkillChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [callingNumberChangeYn, setCallingNumberChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignScheduleChangeYn, setCampaignScheduleChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignDialSpeedChangeYn, setCampaignDialSpeedChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rtnMessage, setRtnMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { tenants, setCampaigns, selectedCampaign, setSelectedCampaign, setSelectedCampaignRow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { id: user_id, tenant_id, menu_role_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { removeTab, activeTabId, activeTabKey, addTab, openedTabs, setActiveTab, campaignIdForUpdateFromSideMenu, setCampaignIdForUpdateFromSideMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
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
    // 캠페인 정보 초기화 (campaignId, selectedCampaign, 관련 데이터가 변경될 때마다 실행)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignDetail.useEffect": ()=>{
            if (campaignId && selectedCampaign) {
                // masterCampaignId가 변경되거나 selectedCampaign이 업데이트되면 상태 재설정
                setTempCampaignsInfo({
                    ...tempCampaignInfo,
                    campaign_id: selectedCampaign.campaign_id,
                    campaign_name: selectedCampaign.campaign_name,
                    campaign_desc: selectedCampaign.campaign_desc,
                    site_code: selectedCampaign.site_code,
                    service_code: selectedCampaign.service_code,
                    start_flag: selectedCampaign.start_flag,
                    end_flag: selectedCampaign.end_flag,
                    dial_mode: selectedCampaign.dial_mode,
                    callback_kind: selectedCampaign.callback_kind,
                    delete_flag: selectedCampaign.delete_flag,
                    list_count: selectedCampaign.list_count,
                    list_redial_query: selectedCampaign.list_redial_query,
                    next_campaign: selectedCampaign.next_campaign,
                    token_id: selectedCampaign.token_id,
                    phone_order: selectedCampaign.phone_order,
                    phone_dial_try: selectedCampaign.phone_dial_try,
                    dial_try_interval: selectedCampaign.dial_try_interval,
                    trunk_access_code: selectedCampaign.trunk_access_code,
                    DDD_code: selectedCampaign.DDD_code,
                    power_divert_queue: selectedCampaign.power_divert_queue,
                    max_ring: selectedCampaign.max_ring,
                    detect_mode: selectedCampaign.detect_mode,
                    auto_dial_interval: selectedCampaign.auto_dial_interval,
                    creation_user: selectedCampaign.creation_user,
                    creation_time: selectedCampaign.creation_time,
                    creation_ip: selectedCampaign.creation_ip,
                    update_user: selectedCampaign.update_user,
                    update_time: selectedCampaign.update_time,
                    update_ip: selectedCampaign.update_ip,
                    dial_phone_id: selectedCampaign.dial_phone_id,
                    tenant_id: selectedCampaign.tenant_id,
                    alarm_answer_count: selectedCampaign.alarm_answer_count,
                    dial_speed: selectedCampaign.dial_speed,
                    parent_campaign: selectedCampaign.parent_campaign,
                    overdial_abandon_time: selectedCampaign.overdial_abandon_time,
                    list_alarm_count: selectedCampaign.list_alarm_count,
                    supervisor_phone: selectedCampaign.supervisor_phone,
                    reuse_count: selectedCampaign.reuse_count,
                    use_counsel_result: selectedCampaign.use_counsel_result,
                    use_list_alarm: selectedCampaign.use_list_alarm,
                    dial_mode_option: selectedCampaign.dial_mode_option,
                    user_option: selectedCampaign.user_option
                });
                const tempSkill = campaignSkills.filter({
                    "CampaignDetail.useEffect.tempSkill": (skill)=>skill.campaign_id === selectedCampaign.campaign_id
                }["CampaignDetail.useEffect.tempSkill"]).map({
                    "CampaignDetail.useEffect.tempSkill": (data)=>data.skill_id
                }["CampaignDetail.useEffect.tempSkill"]).join(',');
                setInputSkills(tempSkill);
                setTempCampaignSkills({
                    ...tempCampaignSkills,
                    skill_id: tempSkill.split(',').map({
                        "CampaignDetail.useEffect": (data)=>Number(data)
                    }["CampaignDetail.useEffect"])
                });
                const tempCallNumber = callingNumbers.filter({
                    "CampaignDetail.useEffect.tempCallNumber": (callingNumber)=>callingNumber.campaign_id === selectedCampaign.campaign_id
                }["CampaignDetail.useEffect.tempCallNumber"]).map({
                    "CampaignDetail.useEffect.tempCallNumber": (data)=>data.calling_number
                }["CampaignDetail.useEffect.tempCallNumber"]).join(',');
                setInputCallingNumber(tempCallNumber);
                setTempCallingNumberInfo({
                    ...tempCallingNumberInfo,
                    calling_number: tempCallNumber
                });
                setTempCampaignDialSpeedInfo({
                    ...tempCampaignDialSpeedInfo,
                    campaign_id: selectedCampaign.campaign_id,
                    tenant_id: selectedCampaign.tenant_id,
                    dial_speed: selectedCampaign.dial_speed
                });
                setTempCampaignDialSpeedInfoParam({
                    ...tempCampaignDialSpeedInfoParam,
                    dial_mode: selectedCampaign.dial_mode,
                    predictive_dial_speed: selectedCampaign.dial_mode === 2 ? 0 : selectedCampaign.dial_speed,
                    progressive_dial_speed: selectedCampaign.dial_mode === 3 ? 0 : selectedCampaign.dial_speed
                });
                setTempCampaignManagerInfo({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"],
                    campaign_id: selectedCampaign.campaign_id,
                    campaign_name: selectedCampaign.campaign_name,
                    campaign_desc: selectedCampaign.campaign_desc,
                    site_code: selectedCampaign.site_code,
                    service_code: selectedCampaign.service_code,
                    start_flag: selectedCampaign.start_flag,
                    end_flag: selectedCampaign.end_flag,
                    dial_mode: selectedCampaign.dial_mode,
                    callback_kind: selectedCampaign.callback_kind,
                    delete_flag: selectedCampaign.delete_flag,
                    list_count: selectedCampaign.list_count,
                    list_redial_query: selectedCampaign.list_redial_query,
                    next_campaign: selectedCampaign.next_campaign,
                    token_id: selectedCampaign.token_id,
                    phone_order: selectedCampaign.phone_order,
                    phone_dial_try1: selectedCampaign.phone_dial_try !== undefined ? Number(selectedCampaign.phone_dial_try.slice(0, 1)[0]) : 0,
                    phone_dial_try2: selectedCampaign.phone_dial_try !== undefined ? Number(selectedCampaign.phone_dial_try.slice(1, 2)[0]) : 0,
                    phone_dial_try3: selectedCampaign.phone_dial_try !== undefined ? Number(selectedCampaign.phone_dial_try.slice(2, 3)[0]) : 0,
                    phone_dial_try4: selectedCampaign.phone_dial_try !== undefined ? Number(selectedCampaign.phone_dial_try.slice(3, 4)[0]) : 0,
                    phone_dial_try5: selectedCampaign.phone_dial_try !== undefined ? Number(selectedCampaign.phone_dial_try.slice(4, 5)[0]) : 0,
                    dial_try_interval: selectedCampaign.dial_try_interval,
                    trunk_access_code: selectedCampaign.trunk_access_code,
                    DDD_code: selectedCampaign.DDD_code,
                    power_divert_queue: selectedCampaign.power_divert_queue + '',
                    max_ring: selectedCampaign.max_ring,
                    detect_mode: selectedCampaign.detect_mode,
                    auto_dial_interval: selectedCampaign.auto_dial_interval,
                    creation_user: selectedCampaign.creation_user + '',
                    creation_time: selectedCampaign.creation_time,
                    creation_ip: selectedCampaign.creation_ip,
                    update_user: selectedCampaign.update_user + '',
                    update_time: selectedCampaign.update_time,
                    update_ip: selectedCampaign.update_ip,
                    dial_phone_id: selectedCampaign.dial_phone_id,
                    tenant_id: selectedCampaign.tenant_id,
                    alarm_answer_count: selectedCampaign.alarm_answer_count,
                    dial_speed: selectedCampaign.dial_speed,
                    parent_campaign: selectedCampaign.parent_campaign,
                    overdial_abandon_time: selectedCampaign.overdial_abandon_time,
                    list_alarm_count: selectedCampaign.list_alarm_count,
                    supervisor_phone: selectedCampaign.supervisor_phone,
                    reuse_count: selectedCampaign.reuse_count,
                    use_counsel_result: selectedCampaign.use_counsel_result,
                    use_list_alarm: selectedCampaign.use_list_alarm,
                    redial_strategy1: selectedCampaign.redial_strategy !== undefined ? selectedCampaign.redial_strategy.slice(0, 1)[0] + '' : '',
                    redial_strategy2: selectedCampaign.redial_strategy !== undefined ? selectedCampaign.redial_strategy.slice(1, 2)[0] + '' : '',
                    redial_strategy3: selectedCampaign.redial_strategy !== undefined ? selectedCampaign.redial_strategy.slice(2, 3)[0] + '' : '',
                    redial_strategy4: selectedCampaign.redial_strategy !== undefined ? selectedCampaign.redial_strategy.slice(3, 4)[0] + '' : '',
                    redial_strategy5: selectedCampaign.redial_strategy !== undefined ? selectedCampaign.redial_strategy.slice(4, 5)[0] + '' : '',
                    dial_mode_option: selectedCampaign.dial_mode_option,
                    user_option: selectedCampaign.user_option,
                    customer_char_id: 1,
                    counsel_script_id: 1,
                    announcement_id: 1,
                    campaign_level: 0,
                    outbound_sequence: ''
                });
                if (schedules.length > 0) {
                    const tempCampaignSchedule = schedules.filter({
                        "CampaignDetail.useEffect.tempCampaignSchedule": (schedule)=>schedule.campaign_id === selectedCampaign?.campaign_id
                    }["CampaignDetail.useEffect.tempCampaignSchedule"]);
                    if (tempCampaignSchedule.length > 0) {
                        setTempCampaignSchedule({
                            ...tempCampaignSchedule[0],
                            campaign_id: selectedCampaign.campaign_id,
                            tenant_id: selectedCampaign.tenant_id,
                            start_date: schedules.filter({
                                "CampaignDetail.useEffect": (schedule)=>schedule.campaign_id === selectedCampaign.campaign_id
                            }["CampaignDetail.useEffect"])[0].start_date,
                            end_date: schedules.filter({
                                "CampaignDetail.useEffect": (schedule)=>schedule.campaign_id === selectedCampaign.campaign_id
                            }["CampaignDetail.useEffect"])[0].end_date,
                            start_time: schedules.filter({
                                "CampaignDetail.useEffect": (schedule)=>schedule.campaign_id === selectedCampaign.campaign_id
                            }["CampaignDetail.useEffect"])[0].start_time,
                            end_time: schedules.filter({
                                "CampaignDetail.useEffect": (schedule)=>schedule.campaign_id === selectedCampaign.campaign_id
                            }["CampaignDetail.useEffect"])[0].end_time
                        });
                    } else {
                        setTempCampaignSchedule(CampaignScheduleInfo);
                    }
                } else {
                    setTempCampaignSchedule({
                        ...tempCampaignSchedule,
                        campaign_id: selectedCampaign.campaign_id,
                        tenant_id: selectedCampaign.tenant_id
                    });
                }
            } else {}
        // campaignId 추가하여 masterCampaignId 변경 시에도 재설정되도록 함
        }
    }["CampaignDetail.useEffect"], [
        campaignId,
        selectedCampaign,
        campaignSkills,
        callingNumbers,
        schedules
    ]);
    // input 데이터 변경
    const handleInputData = (value, col)=>{
        if (!campaignInfoChangeYn) {
            setCampaignInfoChangeYn(true);
        }
        if (col === 'campaign_id' && value !== '') {
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                campaign_id: Number(value)
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                campaign_id: Number(value)
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
    // select 데이터 변경
    const handleSelectChange = (value, type)=>{
        if (!campaignInfoChangeYn) {
            setCampaignInfoChangeYn(true);
        }
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
    // 스킬 선택 팝업
    const handleSelectSkills = (param)=>{
        if (tempCampaignSkills.skill_id.join(',') !== param) {
            setCampaignSkillChangeYn(true);
            setInputSkills(param);
            setTempCampaignSkills({
                ...tempCampaignSkills,
                campaign_id: campaignId,
                skill_id: param.split(',').map((data)=>Number(data))
            });
        }
        setSkillPopupState((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    // 발신번호 팝업
    const handleCallingNumlber = (param)=>{
        if (inputCallingNumber !== param) {
            setCallingNumberChangeYn(true);
            setInputCallingNumber(param);
            setTempCallingNumberInfo({
                ...tempCallingNumberInfo,
                campaign_id: campaignId,
                calling_number: param
            });
        }
        setCallingNumberPopupState((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    // 캠페인 동작시간 탭 변경
    const handleCampaignScheduleChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
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
            if (!campaignScheduleChangeYn) {
                setCampaignScheduleChangeYn(true);
            }
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
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 발신순서 탭 변경
    const handleCampaignOutgoingOrderChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
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
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 발신전략 탭 변경
    const handleOutgoingStrategyTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
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
        if (value.onInit) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
            setTempCampaignsInfo({
                ...tempCampaignInfo,
                redial_strategy: CampaignInfo.redial_strategy
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                redial_strategy1: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"].redial_strategy1,
                redial_strategy2: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"].redial_strategy2,
                redial_strategy3: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"].redial_strategy3,
                redial_strategy4: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"].redial_strategy4,
                redial_strategy5: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"].redial_strategy5
            });
        }
        if (value.onSave) {
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 발신방법 탭 변경
    const handleOutgoingMethodTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
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
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 콜페이싱 탭 변경
    const handleCallPacingTabChange = (value)=>{
        if (value.campaignDialSpeedChangeYn) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
            setCampaignDialSpeedChangeYn(value.campaignDialSpeedChangeYn);
            setTempCampaignDialSpeedInfoParam({
                ...tempCampaignDialSpeedInfoParam,
                predictive_dial_speed: value.predictive_dial_speed,
                progressive_dial_speed: value.progressive_dial_speed
            });
            setTempCampaignDialSpeedInfo({
                ...tempCampaignDialSpeedInfo,
                dial_speed: tempCampaignManagerInfo.dial_mode === 2 ? Math.floor(value.progressive_dial_speed) : value.predictive_dial_speed
            });
            setTempCampaignManagerInfo({
                ...tempCampaignManagerInfo,
                dial_speed: tempCampaignManagerInfo.dial_mode === 2 ? Math.floor(value.progressive_dial_speed) : value.predictive_dial_speed
            });
        }
        if (value.onSave) {
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 콜백 탭 변경
    const handleCallbackTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
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
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 알림 탭 변경
    const handleNotificationTabChange = (value)=>{
        if (value.campaignInfoChangeYn) {
            if (!campaignInfoChangeYn) {
                setCampaignInfoChangeYn(true);
            }
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
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 기타정보 탭 변경
    const handleAdditionalInfoTabChange = (value)=>{
        if (value.onSave) {
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    // 캠페인 취소
    const handleCampaignClosed = ()=>{
        if (isOpen) {
            if (onCampaignPopupClose) {
                onCampaignPopupClose();
            }
        } else {
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
        }
    };
    // 캠페인 취소 실행
    const handleCampaignClosedExecute = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        removeTab(Number(activeTabId), activeTabKey + '');
    };
    // 캠페인 저장 체크
    const saveCampaignCheck = ()=>{
        let saveCheck = true;
        const today = new Date();
        const tempDate = today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2);
        if (tempCampaignSchedule.start_time.length === 0) {
            saveCheck = false;
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
        } else if (tempCampaignSchedule.end_date < tempDate) {
            saveCheck = false;
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "종료일이 금일 이전으로 설정되어 있습니다.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
        return saveCheck;
    };
    // 캠페인 저장
    const handleCampaignSave = ()=>{
        if (saveCampaignCheck()) {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: '캠페인 아이디 : ' + tempCampaignManagerInfo.campaign_id + '\n 캠페인 이름 : ' + tempCampaignManagerInfo.campaign_name + '\n 캠페인을 수정하시겠습니까?',
                onClose: handleCampaignSaveExecute,
                onCancle: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
    };
    // 캠페인 저장 실행
    const handleCampaignSaveExecute = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        setChangeYn(false);
        if (campaignInfoChangeYn) {
            fetchCampaignManagerUpdate({
                ...tempCampaignManagerInfo,
                update_user: user_id,
                update_ip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('userHost') + ''
            });
            if (tempCampaignManagerInfo.start_flag === 1 && oriCampaignManagerInfo.start_flag != 1) {
                fetchCampaignStatusUpdate({
                    campaign_id: tempCampaignManagerInfo.campaign_id,
                    campaign_status: tempCampaignManagerInfo.start_flag
                });
            } else {
                if (tempCampaignManagerInfo.dial_mode === 2 || tempCampaignManagerInfo.dial_mode === 3) {
                    fetchCampaignManagerUpdate({
                        ...tempCampaignManagerInfo,
                        update_user: user_id,
                        update_ip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('userHost') + ''
                    });
                } else {
                    fetchCampaignManagerUpdate({
                        ...tempCampaignManagerInfo,
                        update_user: user_id,
                        update_ip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('userHost') + '',
                        dial_speed: 0
                    });
                }
                if (campaignSkillChangeYn) {
                    if (tempCampaignSkills.skill_id[0] === 0) {
                        fetchCampaignSkillUpdate({
                            ...tempCampaignSkills,
                            skill_id: []
                        });
                    } else {
                        fetchCampaignSkillUpdate(tempCampaignSkills);
                    }
                }
                if (campaignScheduleChangeYn) {
                    if (tempCampaignSchedule.tenant_id === 0) {
                        fetchCampaignScheduleInsert({
                            ...tempCampaignSchedule,
                            tenant_id: tempCampaignManagerInfo.tenant_id
                        });
                    } else {
                        fetchCampaignScheduleUpdate(tempCampaignSchedule);
                    }
                }
                if (callingNumberChangeYn) {
                    const tempCallNumber = callingNumbers.filter((callingNumber)=>callingNumber.campaign_id === tempCampaignManagerInfo.campaign_id).map((data)=>data.calling_number).join(',');
                    if (tempCallingNumberInfo.calling_number !== '' && tempCallNumber === '') {
                        fetchCallingNumberInsert(tempCallingNumberInfo);
                    } else if (tempCallingNumberInfo.calling_number === '' && tempCallNumber !== '') {
                        fetchCallingNumberDelete(tempCallingNumberInfo);
                    } else {
                        fetchCallingNumberUpdate(tempCallingNumberInfo);
                    }
                }
                if (campaignDialSpeedChangeYn) {
                    if (tempCampaignManagerInfo.dial_mode === 2 || tempCampaignManagerInfo.dial_mode === 3) {
                        fetchDialSpeedUpdate(tempCampaignDialSpeedInfo);
                    } else {
                        fetchDialSpeedUpdate({
                            ...tempCampaignDialSpeedInfo,
                            dial_speed: 0
                        });
                    }
                }
            }
        } else {
            if (campaignSkillChangeYn) {
                if (tempCampaignSkills.skill_id[0] === 0) {
                    fetchCampaignSkillUpdate({
                        ...tempCampaignSkills,
                        skill_id: []
                    });
                } else {
                    fetchCampaignSkillUpdate(tempCampaignSkills);
                }
            }
            if (campaignScheduleChangeYn) {
                if (tempCampaignSchedule.tenant_id === 0) {
                    fetchCampaignScheduleInsert({
                        ...tempCampaignSchedule,
                        tenant_id: tempCampaignManagerInfo.tenant_id
                    });
                } else {
                    fetchCampaignScheduleUpdate(tempCampaignSchedule);
                }
            }
            if (callingNumberChangeYn) {
                const tempCallNumber = callingNumbers.filter((callingNumber)=>callingNumber.campaign_id === tempCampaignManagerInfo.campaign_id).map((data)=>data.calling_number).join(',');
                if (tempCallingNumberInfo.calling_number !== '' && tempCallNumber === '') {
                    fetchCallingNumberInsert(tempCallingNumberInfo);
                } else if (tempCallingNumberInfo.calling_number === '' && tempCallNumber !== '') {
                    fetchCallingNumberDelete(tempCallingNumberInfo);
                } else {
                    fetchCallingNumberUpdate(tempCallingNumberInfo);
                }
            }
            if (campaignDialSpeedChangeYn) {
                if (tempCampaignManagerInfo.dial_mode === 2 || tempCampaignManagerInfo.dial_mode === 3) {
                    fetchDialSpeedUpdate(tempCampaignDialSpeedInfo);
                } else {
                    fetchDialSpeedUpdate({
                        ...tempCampaignDialSpeedInfo,
                        dial_speed: 0
                    });
                }
            }
        }
    };
    // 캠페인 삭제
    const handleCampaignDelete = ()=>{
        setAlertState({
            ...errorMessage,
            isOpen: true,
            message: '캠페인 아이디 : ' + tempCampaignManagerInfo.campaign_id + '\n 캠페인 이름 : ' + tempCampaignManagerInfo.campaign_name + '\n 삭제된 캠페인은 복구가 불가능합니다.' + '\n 캠페인을 삭제하시겠습니까?',
            onClose: handleCampaignDeleteExecute,
            onCancle: ()=>setAlertState((prev)=>({
                        ...prev,
                        isOpen: false
                    }))
        });
    };
    // 캠페인 삭제 실행
    const handleCampaignDeleteExecute = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        if (selectedCampaign?.start_flag === 3) {
            fetchCampaignManagerDelete({
                ...campaignInfoDelete,
                campaign_id: tempCampaignManagerInfo.campaign_id,
                tenant_id: tempCampaignManagerInfo.tenant_id
            });
        } else {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: '캠페인 삭제는 중지 상태에서만 가능합니다.',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        })),
                onCancle: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignDetail.useEffect": ()=>{
            if (!changeYn && !campaignInfoChangeYn && !campaignSkillChangeYn && !callingNumberChangeYn && !campaignDialSpeedChangeYn) {
                setChangeYn(true);
                fetchMain({
                    session_key: '',
                    tenant_id: 0
                });
                setRtnMessage('');
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: '작업이 완료되었습니다.',
                    type: '2',
                    onClose: {
                        "CampaignDetail.useEffect": ()=>setAlertState({
                                "CampaignDetail.useEffect": (prev)=>({
                                        ...prev,
                                        isOpen: false
                                    })
                            }["CampaignDetail.useEffect"])
                    }["CampaignDetail.useEffect"]
                });
            }
        }
    }["CampaignDetail.useEffect"], [
        campaignInfoChangeYn,
        campaignSkillChangeYn,
        callingNumberChangeYn,
        campaignDialSpeedChangeYn
    ]);
    // 캠페인 정보 수정 API 호출
    const { mutate: fetchCampaignManagerUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerUpdate"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignManagerUpdate": (data)=>{
                setCampaignInfoChangeYn(false);
            }
        }["CampaignDetail.useApiForCampaignManagerUpdate"],
        onError: {
            "CampaignDetail.useApiForCampaignManagerUpdate": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "CampaignDetail.useApiForCampaignManagerUpdate": ()=>goLogin()
                        }["CampaignDetail.useApiForCampaignManagerUpdate"]
                    });
                }
            }
        }["CampaignDetail.useApiForCampaignManagerUpdate"]
    });
    // 캠페인 정보 조회 API 호출
    const { mutate: fetchMain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"])({
        onSuccess: {
            "CampaignDetail.useApiForMain": (data)=>{
                setCampaigns(data.result_data);
                setSelectedCampaign(data.result_data.filter({
                    "CampaignDetail.useApiForMain": (campaign)=>campaign.campaign_id === selectedCampaign?.campaign_id
                }["CampaignDetail.useApiForMain"])[0]);
                setTempCampaignsInfo(data.result_data.filter({
                    "CampaignDetail.useApiForMain": (campaign)=>campaign.campaign_id === selectedCampaign?.campaign_id
                }["CampaignDetail.useApiForMain"])[0]);
                setCampaignInfoChangeYn(true);
                setRtnMessage('');
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: '작업이 완료되었습니다.',
                    type: '2',
                    onClose: {
                        "CampaignDetail.useApiForMain": ()=>setAlertState({
                                "CampaignDetail.useApiForMain": (prev)=>({
                                        ...prev,
                                        isOpen: false
                                    })
                            }["CampaignDetail.useApiForMain"])
                    }["CampaignDetail.useApiForMain"]
                });
            }
        }["CampaignDetail.useApiForMain"]
    });
    // 발신리스트 업로드 취소 api 호출
    const { mutate: fetchCallingListDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForCallingListDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingListDelete"])({
        onSuccess: {
            "CampaignDetail.useApiForCallingListDelete": (data)=>{
                setAlertState({
                    "CampaignDetail.useApiForCallingListDelete": (prev)=>({
                            ...prev,
                            isOpen: false
                        })
                }["CampaignDetail.useApiForCallingListDelete"]);
            }
        }["CampaignDetail.useApiForCallingListDelete"],
        onError: {
            "CampaignDetail.useApiForCallingListDelete": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "CampaignDetail.useApiForCallingListDelete": ()=>goLogin()
                        }["CampaignDetail.useApiForCallingListDelete"]
                    });
                }
            }
        }["CampaignDetail.useApiForCallingListDelete"]
    });
    // 캠페인 정보 삭제 API 호출
    const { mutate: fetchCampaignManagerDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerDelete"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignManagerDelete": (data)=>{
                // 2)캠페인 스케줄 삭제
                fetchCampaignScheduleDelete({
                    ...campaignInfoDelete,
                    campaign_id: tempCampaignManagerInfo.campaign_id,
                    tenant_id: tempCampaignManagerInfo.tenant_id
                });
            }
        }["CampaignDetail.useApiForCampaignManagerDelete"],
        onError: {
            "CampaignDetail.useApiForCampaignManagerDelete": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "CampaignDetail.useApiForCampaignManagerDelete": ()=>goLogin()
                        }["CampaignDetail.useApiForCampaignManagerDelete"]
                    });
                }
            }
        }["CampaignDetail.useApiForCampaignManagerDelete"]
    });
    // 캠페인 스킬 조회 API 호출
    const { mutate: fetchCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignSkill": (data)=>{
                setCampaignSkills(data.result_data);
                setCampaignSkillChangeYn(false);
            }
        }["CampaignDetail.useApiForCampaignSkill"]
    });
    // 캠페인 스킬 수정 API 호출
    const { mutate: fetchCampaignSkillUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignSkillUpdate": (data)=>{
                setCampaignSkillChangeYn(false);
            }
        }["CampaignDetail.useApiForCampaignSkillUpdate"]
    });
    // 캠페인 스케줄 조회 API 호출
    const { mutate: fetchSchedules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"])({
        onSuccess: {
            "CampaignDetail.useApiForSchedules": (data)=>{
                setSchedules(data.result_data);
                setCampaignScheduleChangeYn(false);
            }
        }["CampaignDetail.useApiForSchedules"]
    });
    // 캠페인 스케줄 등록 API 호출
    const { mutate: fetchCampaignScheduleInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleInsert"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignScheduleInsert": (data)=>{
                const tempTenantIdArray = tenants.map({
                    "CampaignDetail.useApiForCampaignScheduleInsert.tempTenantIdArray": (tenant)=>tenant.tenant_id
                }["CampaignDetail.useApiForCampaignScheduleInsert.tempTenantIdArray"]);
                fetchSchedules({
                    tenant_id_array: tempTenantIdArray
                });
            }
        }["CampaignDetail.useApiForCampaignScheduleInsert"]
    });
    // 캠페인 스케줄 수정 API 호출
    const { mutate: fetchCampaignScheduleUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleUpdate"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignScheduleUpdate": (data)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('캠페인 스케줄 수정이 완료되었습니다.');
                const tempTenantIdArray = tenants.map({
                    "CampaignDetail.useApiForCampaignScheduleUpdate.tempTenantIdArray": (tenant)=>tenant.tenant_id
                }["CampaignDetail.useApiForCampaignScheduleUpdate.tempTenantIdArray"]);
                fetchSchedules({
                    tenant_id_array: tempTenantIdArray
                });
            }
        }["CampaignDetail.useApiForCampaignScheduleUpdate"]
    });
    // 캠페인 스케줄 삭제 API 호출
    const { mutate: fetchCampaignScheduleDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleDelete"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignScheduleDelete": (data)=>{
                // 3)스킬편집 -> 캠페인 소속 스킬 할당 해제
                const tempSkill = campaignSkills.filter({
                    "CampaignDetail.useApiForCampaignScheduleDelete.tempSkill": (skill)=>skill.campaign_id === campaignId
                }["CampaignDetail.useApiForCampaignScheduleDelete.tempSkill"]).map({
                    "CampaignDetail.useApiForCampaignScheduleDelete.tempSkill": (data)=>data.skill_id
                }["CampaignDetail.useApiForCampaignScheduleDelete.tempSkill"]).join(',');
                if (tempSkill !== '') {
                    fetchCampaignSkillUpdate({
                        ...tempCampaignSkills,
                        skill_id: []
                    });
                }
                // 4)캠페인별 발신번호 설정 삭제
                const tempCallNumber = callingNumbers.filter({
                    "CampaignDetail.useApiForCampaignScheduleDelete.tempCallNumber": (callingNumber)=>callingNumber.campaign_id === campaignId
                }["CampaignDetail.useApiForCampaignScheduleDelete.tempCallNumber"]).map({
                    "CampaignDetail.useApiForCampaignScheduleDelete.tempCallNumber": (data)=>data.calling_number
                }["CampaignDetail.useApiForCampaignScheduleDelete.tempCallNumber"]).join(',');
                if (tempCallNumber !== '') {
                    fetchCallingNumberDelete(tempCallingNumberInfo);
                }
                // 5)캠페인별 문자할당 삭제 : 기능 사용시 API 생성 예정
                // 6)채널 할당 - 캠페인 모드시, 캠페인이 할당되면 Assign 해제 -> 회선사용 안함으로 변경 : /pds/channel-group - 제외
                // 7)예약콜제한설정 삭제 
                fetchReservedCallDelete({
                    ...campaignInfoDelete,
                    campaign_id: tempCampaignManagerInfo.campaign_id,
                    tenant_id: tempCampaignManagerInfo.tenant_id
                });
            }
        }["CampaignDetail.useApiForCampaignScheduleDelete"]
    });
    // 예약콜 삭제 API 호출
    const { mutate: fetchReservedCallDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForReservedCallDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForReservedCallDelete"])({
        onSuccess: {
            "CampaignDetail.useApiForReservedCallDelete": (data)=>{
                // 8)분배호수제한설정에 캠페인 할당된 정보 삭제 - 캠페인 소속 상담사 리스트 정보 조회 후 삭제한다.
                // 캠페인 소속 상담사 리스트 요청
                fetchCampaignAgents({
                    campaign_id: tempCampaignManagerInfo.campaign_id
                });
            }
        }["CampaignDetail.useApiForReservedCallDelete"]
    });
    // 캠페인 소속 상담사 리스트 요청
    const { mutate: fetchCampaignAgents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAgent"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignAgent": (data)=>{
                if (data.result_data.length > 0 && data.result_data[0].agent_id.length > 0) {
                    const agentList = data.result_data[0].agent_id.join(',');
                    // 8)분배호수제한설정에 캠페인 할당된 정보 삭제 - 캠페인 소속 상담사 리스트 정보 조회 후 삭제한다.
                    fetchMaxcallExtDelete({
                        ...agientListDelte,
                        campaign_id: tempCampaignManagerInfo.campaign_id,
                        agent_id_list: agentList.split(',').map({
                            "CampaignDetail.useApiForCampaignAgent": (agent)=>({
                                    agent_id: agent
                                })
                        }["CampaignDetail.useApiForCampaignAgent"])
                    });
                } else {
                    // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
                    fetchAutoRedials({
                        session_key: '',
                        tenant_id: 0
                    });
                }
            }
        }["CampaignDetail.useApiForCampaignAgent"],
        onError: {
            "CampaignDetail.useApiForCampaignAgent": (data)=>{
                // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
                fetchAutoRedials({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }["CampaignDetail.useApiForCampaignAgent"]
    });
    // 분배제한 정보 삭제 API 호출
    const { mutate: fetchMaxcallExtDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForMaxcallExtDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxcallExtDelete"])({
        onSuccess: {
            "CampaignDetail.useApiForMaxcallExtDelete": (data)=>{
                // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
                fetchAutoRedials({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }["CampaignDetail.useApiForMaxcallExtDelete"]
    });
    // 캠페인 재발신 조회 API 호출
    const { mutate: fetchAutoRedials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedial"])({
        onSuccess: {
            "CampaignDetail.useApiForAutoRedial": (data)=>{
                // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
                if (typeof data.result_data !== 'undefined') {
                    if (data.result_data.length > 0) {
                        const dataList = data.result_data.filter({
                            "CampaignDetail.useApiForAutoRedial.dataList": (data)=>data.campaign_id === campaignId
                        }["CampaignDetail.useApiForAutoRedial.dataList"]);
                        if (dataList.length > 0 && dataList[0].sequence_number != null) {
                            // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
                            fetchAutoRedialDelete({
                                campaign_id: campaignId,
                                sequence_number: dataList[0].sequence_number
                            });
                        } else {
                            //캠페인관리 화면 닫기.
                            setInit(0);
                            setAlertState({
                                ...errorMessage,
                                isOpen: true,
                                message: '작업이 완료되었습니다.',
                                type: '2',
                                onClose: {
                                    "CampaignDetail.useApiForAutoRedial": ()=>setAlertState({
                                            "CampaignDetail.useApiForAutoRedial": (prev)=>({
                                                    ...prev,
                                                    isOpen: false
                                                })
                                        }["CampaignDetail.useApiForAutoRedial"])
                                }["CampaignDetail.useApiForAutoRedial"]
                            });
                        }
                    } else {
                        //캠페인관리 화면 닫기.
                        setInit(0);
                        setAlertState({
                            ...errorMessage,
                            isOpen: true,
                            message: '작업이 완료되었습니다.',
                            type: '2',
                            onClose: {
                                "CampaignDetail.useApiForAutoRedial": ()=>setAlertState({
                                        "CampaignDetail.useApiForAutoRedial": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["CampaignDetail.useApiForAutoRedial"])
                            }["CampaignDetail.useApiForAutoRedial"]
                        });
                    }
                } else {
                    setInit(0);
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: '작업이 완료되었습니다.',
                        type: '2',
                        onClose: {
                            "CampaignDetail.useApiForAutoRedial": ()=>setAlertState({
                                    "CampaignDetail.useApiForAutoRedial": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["CampaignDetail.useApiForAutoRedial"])
                        }["CampaignDetail.useApiForAutoRedial"]
                    });
                }
            }
        }["CampaignDetail.useApiForAutoRedial"],
        onError: {
            "CampaignDetail.useApiForAutoRedial": (data)=>{
                // 9)캠페인 예약 재발신 삭제 - 캠페인 재발신 정보 조회 후 삭제한다.
                //캠페인관리 화면 닫기.
                setInit(0);
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: '작업이 완료되었습니다.',
                    type: '2',
                    onClose: {
                        "CampaignDetail.useApiForAutoRedial": ()=>setAlertState({
                                "CampaignDetail.useApiForAutoRedial": (prev)=>({
                                        ...prev,
                                        isOpen: false
                                    })
                            }["CampaignDetail.useApiForAutoRedial"])
                    }["CampaignDetail.useApiForAutoRedial"]
                });
            }
        }["CampaignDetail.useApiForAutoRedial"]
    });
    // 재발신 삭제 API 호출
    const { mutate: fetchAutoRedialDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedialDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedialDelete"])({
        onSuccess: {
            "CampaignDetail.useApiForAutoRedialDelete": (data)=>{
                setInit(0);
            }
        }["CampaignDetail.useApiForAutoRedialDelete"]
    });
    // 발신번호 삭제 API 호출
    const { mutate: fetchCallingNumberDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberDelete"])({
        onSuccess: {
            "CampaignDetail.useApiForCallingNumberDelete": (data)=>{
                setCallingNumberChangeYn(false);
            }
        }["CampaignDetail.useApiForCallingNumberDelete"]
    });
    // 발신번호 추가 API 호출
    const { mutate: fetchCallingNumberInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"])({
        onSuccess: {
            "CampaignDetail.useApiForCallingNumberInsert": (data)=>{
                setCallingNumberChangeYn(false);
                fetchCallingNumbers({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }["CampaignDetail.useApiForCallingNumberInsert"]
    });
    // 발신번호 수정 API 호출
    const { mutate: fetchCallingNumberUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberUpdate"])({
        onSuccess: {
            "CampaignDetail.useApiForCallingNumberUpdate": (data)=>{
                setCallingNumberChangeYn(false);
            }
        }["CampaignDetail.useApiForCallingNumberUpdate"]
    });
    // 캠페인 상태 변경 API 호출
    const { mutate: fetchCampaignStatusUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignStatusUpdate"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignStatusUpdate": (data)=>{
                if (data.result_code === 0) {
                    fetchCampaignManagerUpdate(tempCampaignManagerInfo);
                    if (campaignSkillChangeYn) {
                        if (tempCampaignSkills.skill_id[0] === 0) {
                            fetchCampaignSkillUpdate({
                                ...tempCampaignSkills,
                                skill_id: []
                            });
                        } else {
                            fetchCampaignSkillUpdate(tempCampaignSkills);
                        }
                    }
                    if (campaignScheduleChangeYn) {
                        if (tempCampaignSchedule.tenant_id === 0) {
                            fetchCampaignScheduleInsert({
                                ...tempCampaignSchedule,
                                tenant_id: tempCampaignManagerInfo.tenant_id
                            });
                        } else {
                            fetchCampaignScheduleUpdate(tempCampaignSchedule);
                        }
                    }
                    if (callingNumberChangeYn) {
                        const tempCallNumber = callingNumbers.filter({
                            "CampaignDetail.useApiForCampaignStatusUpdate.tempCallNumber": (callingNumber)=>callingNumber.campaign_id === campaignId
                        }["CampaignDetail.useApiForCampaignStatusUpdate.tempCallNumber"]).map({
                            "CampaignDetail.useApiForCampaignStatusUpdate.tempCallNumber": (data)=>data.calling_number
                        }["CampaignDetail.useApiForCampaignStatusUpdate.tempCallNumber"]).join(',');
                        if (tempCallingNumberInfo.calling_number !== '' && tempCallNumber === '') {
                            fetchCallingNumberInsert(tempCallingNumberInfo);
                        } else if (tempCallingNumberInfo.calling_number === '' && tempCallNumber !== '') {
                            fetchCallingNumberDelete(tempCallingNumberInfo);
                        } else {
                            fetchCallingNumberUpdate(tempCallingNumberInfo);
                        }
                    }
                    if (campaignDialSpeedChangeYn) {
                        if (tempCampaignManagerInfo.dial_mode === 2 || tempCampaignManagerInfo.dial_mode === 3) {
                            fetchDialSpeedUpdate(tempCampaignDialSpeedInfo);
                        } else {
                            fetchDialSpeedUpdate({
                                ...tempCampaignDialSpeedInfo,
                                dial_speed: 0
                            });
                        }
                    }
                } else {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCampaignSaveReturnCode"])(data.reason_code),
                        type: '2',
                        onClose: {
                            "CampaignDetail.useApiForCampaignStatusUpdate": ()=>setAlertState({
                                    "CampaignDetail.useApiForCampaignStatusUpdate": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["CampaignDetail.useApiForCampaignStatusUpdate"])
                        }["CampaignDetail.useApiForCampaignStatusUpdate"]
                    });
                }
            }
        }["CampaignDetail.useApiForCampaignStatusUpdate"],
        onError: {
            "CampaignDetail.useApiForCampaignStatusUpdate": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "CampaignDetail.useApiForCampaignStatusUpdate": ()=>goLogin()
                        }["CampaignDetail.useApiForCampaignStatusUpdate"]
                    });
                }
            }
        }["CampaignDetail.useApiForCampaignStatusUpdate"]
    });
    const goLogin = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
        router.push('/login');
    };
    // 발신 속도 수정 API 호출
    const { mutate: fetchDialSpeedUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForDialSpeedUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialSpeedUpdate"])({
        onSuccess: {
            "CampaignDetail.useApiForDialSpeedUpdate": (data)=>{
                setCampaignDialSpeedChangeYn(false);
            }
        }["CampaignDetail.useApiForDialSpeedUpdate"]
    });
    // 발신번호 조회 API 호출
    const { mutate: fetchCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"])({
        onSuccess: {
            "CampaignDetail.useApiForCallingNumber": (data)=>{
                setCallingNumbers(data.result_data || []);
                setCallingNumberChangeYn(false);
            }
        }["CampaignDetail.useApiForCallingNumber"]
    });
    // 새 캠페인 버튼 이벤트
    const handleNewCampaign = ()=>{
        const existingTabs = openedTabs.filter((tab)=>tab.id === 13);
        existingTabs.forEach((tab)=>{
            removeTab(tab.id, tab.uniqueKey);
        });
        const newTabKey = `13-${Date.now()}`;
        addTab({
            id: 13,
            uniqueKey: '13',
            title: '새 캠페인',
            icon: '',
            href: '',
            content: null
        });
        setTimeout(function() {
            setActiveTab(13, newTabKey);
        }, 50);
    };
    // 리스트 적용 버튼 이벤트
    const handleListManager = ()=>{
        const existingTabs = openedTabs.filter((tab)=>tab.id === 7);
        existingTabs.forEach((tab)=>{
            removeTab(tab.id, tab.uniqueKey);
        });
        const newTabKey = `7-${Date.now()}`;
        addTab({
            id: 7,
            campaignId: campaignId + '',
            campaignName: tempCampaignInfo.campaign_name,
            uniqueKey: '7',
            title: '리스트매니저',
            icon: '',
            href: '',
            content: null
        });
        setTimeout(function() {
            setActiveTab(7, newTabKey);
        }, 50);
    };
    // 리스트 삭제 버튼 이벤트
    const handleListManagerDelete = ()=>{
        setAlertState({
            ...errorMessage,
            isOpen: true,
            message: '캠페인 아이디 : ' + tempCampaignManagerInfo.campaign_id + '\n 캠페인 이름 : ' + tempCampaignManagerInfo.campaign_name + '\n\n 발신리스트 삭제시 발신리스트와 캠페인 진행정보가 초기화 됩니다.' + '\n 삭제된 발신리스트와 캠페인 진행정보는 복구가 불가능합니다.' + '\n 발신리스트를 삭제하시겠습니까?',
            onClose: ()=>fetchCallingListDelete(campaignId),
            onCancle: ()=>setAlertState((prev)=>({
                        ...prev,
                        isOpen: false
                    }))
        });
    };
    // 예약콜 제한건수설정 버튼 이벤트
    const handleReservedCall = ()=>{
        const existingTabs = openedTabs.filter((tab)=>tab.id === 8);
        existingTabs.forEach((tab)=>{
            removeTab(tab.id, tab.uniqueKey);
        });
        const newTabKey = `8-${Date.now()}`;
        addTab({
            id: 8,
            campaignId: campaignId + '',
            campaignName: tempCampaignInfo.campaign_name,
            uniqueKey: newTabKey,
            title: '예약콜 제한 설정',
            icon: '/header-menu/예약콜제한설정.svg',
            href: '/reserve',
            content: null
        });
        setTimeout(function() {
            setActiveTab(8, newTabKey);
        }, 50);
    };
    // 분배호수 제한설정 버튼 이벤트
    const handleMaxCall = ()=>{
        const existingTabs = openedTabs.filter((tab)=>tab.id === 9);
        existingTabs.forEach((tab)=>{
            removeTab(tab.id, tab.uniqueKey);
        });
        const newTabKey = `9-${Date.now()}`;
        addTab({
            id: 9,
            campaignId: campaignId + '',
            campaignName: tempCampaignInfo.campaign_name,
            uniqueKey: newTabKey,
            title: '분배호수 제한 설정',
            icon: '/header-menu/분배호수제한설정.svg',
            href: '/distribute',
            content: null
        });
        setTimeout(function() {
            setActiveTab(9, newTabKey);
        }, 50);
    };
    // 재발신 버튼 이벤트
    const handleRebroadcast = ()=>{
        if (campaignIdForUpdateFromSideMenu == null || campaignIdForUpdateFromSideMenu === '') {
            setCampaignIdForUpdateFromSideMenu(campaignId + '');
        }
        const existingTabs = openedTabs.filter((tab)=>tab.id === 20);
        existingTabs.forEach((tab)=>{
            removeTab(tab.id, tab.uniqueKey);
        });
        const newTabKey = `20-${Date.now()}`;
        addTab({
            id: 20,
            campaignId: campaignId + '',
            campaignName: tempCampaignInfo.campaign_name,
            uniqueKey: '20',
            title: '재발신 설정',
            icon: '',
            href: '',
            content: null
        });
        setTimeout(function() {
            setActiveTab(20, newTabKey);
        }, 50);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5 w-[58%]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "border-b border-gray-300 pb-1",
                        title: "상세내역",
                        buttons: menu_role_id === 1 ? selectedCampaign?.start_flag === 3 ? [
                            {
                                label: "새 캠페인",
                                onClick: ()=>handleNewCampaign()
                            },
                            {
                                label: "캠페인 삭제",
                                onClick: ()=>handleCampaignDelete()
                            },
                            {
                                label: "재발신",
                                onClick: ()=>handleRebroadcast(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 적용",
                                onClick: ()=>handleListManager(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 삭제",
                                onClick: ()=>handleListManagerDelete(),
                                variant: "customblue"
                            },
                            {
                                label: "예약콜 제한건수설정",
                                onClick: ()=>handleReservedCall(),
                                variant: "customblue"
                            },
                            {
                                label: "분배호수 제한설정",
                                onClick: ()=>handleMaxCall(),
                                variant: "customblue"
                            }
                        ] : [
                            {
                                label: "새 캠페인",
                                onClick: ()=>handleNewCampaign()
                            },
                            {
                                label: "캠페인 삭제",
                                onClick: ()=>handleCampaignDelete()
                            },
                            {
                                label: "재발신",
                                onClick: ()=>handleRebroadcast(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 적용",
                                onClick: ()=>handleListManager(),
                                variant: "customblue"
                            },
                            {
                                label: "예약콜 제한건수설정",
                                onClick: ()=>handleReservedCall(),
                                variant: "customblue"
                            },
                            {
                                label: "분배호수 제한설정",
                                onClick: ()=>handleMaxCall(),
                                variant: "customblue"
                            }
                        ] : menu_role_id === 2 ? selectedCampaign?.start_flag === 3 ? [
                            {
                                label: "새 캠페인",
                                onClick: ()=>handleNewCampaign()
                            },
                            {
                                label: "캠페인 삭제",
                                onClick: ()=>handleCampaignDelete()
                            },
                            {
                                label: "재발신",
                                onClick: ()=>handleRebroadcast(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 적용",
                                onClick: ()=>handleListManager(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 삭제",
                                onClick: ()=>handleListManagerDelete(),
                                variant: "customblue"
                            }
                        ] : [
                            {
                                label: "새 캠페인",
                                onClick: ()=>handleNewCampaign()
                            },
                            {
                                label: "캠페인 삭제",
                                onClick: ()=>handleCampaignDelete()
                            },
                            {
                                label: "재발신",
                                onClick: ()=>handleRebroadcast(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 적용",
                                onClick: ()=>handleListManager(),
                                variant: "customblue"
                            }
                        ] : menu_role_id === 3 ? [
                            {
                                label: "새 캠페인",
                                onClick: ()=>handleNewCampaign()
                            },
                            {
                                label: "캠페인 삭제",
                                onClick: ()=>handleCampaignDelete()
                            },
                            {
                                label: "재발신",
                                onClick: ()=>handleRebroadcast(),
                                variant: "customblue"
                            }
                        ] : selectedCampaign?.start_flag === 3 ? [
                            {
                                label: "새 캠페인",
                                onClick: ()=>handleNewCampaign()
                            },
                            {
                                label: "캠페인 삭제",
                                onClick: ()=>handleCampaignDelete()
                            },
                            {
                                label: "재발신",
                                onClick: ()=>handleRebroadcast(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 적용",
                                onClick: ()=>handleListManager(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 삭제",
                                onClick: ()=>handleListManagerDelete(),
                                variant: "customblue"
                            },
                            {
                                label: "예약콜 제한건수설정",
                                onClick: ()=>handleReservedCall(),
                                variant: "customblue"
                            },
                            {
                                label: "분배호수 제한설정",
                                onClick: ()=>handleMaxCall(),
                                variant: "customblue"
                            }
                        ] : [
                            {
                                label: "새 캠페인",
                                onClick: ()=>handleNewCampaign()
                            },
                            {
                                label: "캠페인 삭제",
                                onClick: ()=>handleCampaignDelete()
                            },
                            {
                                label: "재발신",
                                onClick: ()=>handleRebroadcast(),
                                variant: "customblue"
                            },
                            {
                                label: "리스트 적용",
                                onClick: ()=>handleListManager(),
                                variant: "customblue"
                            },
                            {
                                label: "예약콜 제한건수설정",
                                onClick: ()=>handleReservedCall(),
                                variant: "customblue"
                            },
                            {
                                label: "분배호수 제한설정",
                                onClick: ()=>handleMaxCall(),
                                variant: "customblue"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                        lineNumber: 1570,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-x-[26px] gap-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[90px] min-w-[90px]",
                                        children: "캠페인 아이디"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1642,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "number",
                                        value: campaignId,
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_id'),
                                        disabled: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1643,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                lineNumber: 1641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "테넌트"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1651,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        onValueChange: (value)=>handleSelectChange(value, 'tenant'),
                                        value: tempCampaignInfo.tenant_id + '' || '',
                                        disabled: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "테넌트를 선택하세요"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                    lineNumber: 1658,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                lineNumber: 1657,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: tenants.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.tenant_id.toString(),
                                                        children: option.tenant_name
                                                    }, option.tenant_id, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                        lineNumber: 1662,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                lineNumber: 1660,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1652,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                lineNumber: 1650,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "캠페인명"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: tempCampaignInfo.campaign_name || '',
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_name')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1671,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                lineNumber: 1669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[90px] min-w-[90px]",
                                        children: "다이얼 모드"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1677,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        onValueChange: (value)=>handleSelectChange(value, 'dialMode'),
                                        value: tempCampaignInfo.dial_mode + '' || '',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "다이얼 모드를 선택하세요"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                    lineNumber: 1683,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                lineNumber: 1682,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: dialModeList.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.dial_id.toString(),
                                                        children: option.dial_name
                                                    }, option.dial_id, false, {
                                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                        lineNumber: 1687,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                                lineNumber: 1685,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1678,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                lineNumber: 1676,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "스킬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1695,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: inputSkills,
                                        className: "w-full",
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1696,
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
                                            onClick: ()=>setSkillPopupState({
                                                    ...skillPopupState,
                                                    isOpen: true
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                            lineNumber: 1698,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1697,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                lineNumber: 1694,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[74px] min-w-[74px]",
                                        children: "발신번호"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1714,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: inputCallingNumber,
                                        className: "w-full",
                                        disabled: selectedCampaign !== null,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1715,
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
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1717,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                lineNumber: 1713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[90px] min-w-[90px]",
                                        children: "설명"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1728,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: tempCampaignInfo.campaign_desc || '',
                                        className: "w-full",
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_desc')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                        lineNumber: 1729,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                                lineNumber: 1727,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                        lineNumber: 1640,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                lineNumber: 1569,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    campaignSchedule: tempCampaignSchedule,
                    callCampaignMenu: 'CampaignManager',
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
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                    lineNumber: 1738,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                lineNumber: 1737,
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
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                lineNumber: 1753,
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
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                lineNumber: 1761,
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
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
                lineNumber: 1769,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx",
        lineNumber: 1566,
        columnNumber: 5
    }, this);
}
_s(CampaignDetail, "lICxK0GsZdhQMFBNoZIZxjXjtbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForCallingListDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingListDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForReservedCallDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForReservedCallDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAgent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForMaxcallExtDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxcallExtDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedial"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedialDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedialDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignStatusUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForDialSpeedUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDialSpeedUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"]
    ];
});
_c = CampaignDetail;
var _c;
__turbopack_refresh__.register(_c, "CampaignDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/features/campaignManager/CampaignManagerList.tsx
__turbopack_esm__({
    "default": (()=>CampaignManagerList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
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
// columns 정의 (Grid에 표시될 열들)
const columns = [
    {
        key: "no",
        name: "NO.",
        width: 60,
        resizable: true
    },
    {
        key: "idName",
        name: "아이디+이름",
        width: 180,
        resizable: true
    },
    {
        key: "startDate",
        name: "시작일자",
        width: 120,
        resizable: true
    },
    {
        key: "endDate",
        name: "종료일자",
        width: 120,
        resizable: true
    },
    {
        key: "skill",
        name: "스킬",
        width: 100,
        resizable: true
    },
    {
        key: "dialMode",
        name: "다이얼모드",
        width: 150,
        resizable: true
    },
    {
        key: "callingNumber",
        name: "발신번호",
        width: 150,
        resizable: true
    }
];
function CampaignManagerList({ campaignId, campaignHeaderSearchParam, onRowClick }) {
    _s();
    const { campaigns, setSelectedCampaign, selectedCampaignRow, setSelectedCampaignRow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { setCampaignIdForUpdateFromSideMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { schedules, callingNumbers, campaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [filteredCampaigns, setFilteredCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tempData, setTempData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // campaignListResponse를 처리하여 filteredCampaigns 업데이트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManagerList.useEffect": ()=>{
            let _filteredCampaigns = campaigns;
            setFilteredCampaigns([]);
            if (typeof campaignHeaderSearchParam != 'undefined') {
                // full view mode: search 파라미터 적용
                if (campaignHeaderSearchParam) {
                    if (campaignHeaderSearchParam.tenantId > -1) {
                        _filteredCampaigns = _filteredCampaigns.filter({
                            "CampaignManagerList.useEffect": (campaign)=>campaign.tenant_id === Number(campaignHeaderSearchParam.tenantId)
                        }["CampaignManagerList.useEffect"]);
                    }
                    if (campaignHeaderSearchParam.dailMode > 0) {
                        _filteredCampaigns = _filteredCampaigns.filter({
                            "CampaignManagerList.useEffect": (campaign)=>campaign.dial_mode === Number(campaignHeaderSearchParam.dailMode)
                        }["CampaignManagerList.useEffect"]);
                    }
                    if (campaignHeaderSearchParam.campaignName !== '') {
                        _filteredCampaigns = _filteredCampaigns.filter({
                            "CampaignManagerList.useEffect": (campaign)=>campaign.campaign_name.includes(campaignHeaderSearchParam.campaignName)
                        }["CampaignManagerList.useEffect"]);
                    }
                    if (campaignHeaderSearchParam.callNumber !== '') {
                        const filteredCallingNumbers = callingNumbers.filter({
                            "CampaignManagerList.useEffect.filteredCallingNumbers": (callingNumber)=>callingNumber.calling_number.includes(campaignHeaderSearchParam.callNumber)
                        }["CampaignManagerList.useEffect.filteredCallingNumbers"]);
                        _filteredCampaigns = _filteredCampaigns.filter({
                            "CampaignManagerList.useEffect": (campaign)=>filteredCallingNumbers.some({
                                    "CampaignManagerList.useEffect": (callingNumber)=>callingNumber.campaign_id === campaign.campaign_id
                                }["CampaignManagerList.useEffect"])
                        }["CampaignManagerList.useEffect"]);
                    }
                    if (campaignHeaderSearchParam.skill > 0) {
                        const filteredCampaignSkills = campaignSkills.filter({
                            "CampaignManagerList.useEffect.filteredCampaignSkills": (campaignSkill)=>campaignSkill.skill_id.includes(campaignHeaderSearchParam.skill)
                        }["CampaignManagerList.useEffect.filteredCampaignSkills"]);
                        _filteredCampaigns = _filteredCampaigns.filter({
                            "CampaignManagerList.useEffect": (campaign)=>filteredCampaignSkills.some({
                                    "CampaignManagerList.useEffect": (campaignSkill)=>campaignSkill.campaign_id === campaign.campaign_id
                                }["CampaignManagerList.useEffect"])
                        }["CampaignManagerList.useEffect"]);
                    }
                }
            }
            setFilteredCampaigns(_filteredCampaigns);
        }
    }["CampaignManagerList.useEffect"], [
        campaignHeaderSearchParam,
        campaigns
    ]);
    // 셀 클릭 시 호출 - 클릭한 행의 캠페인 데이터를 선택 상태로 업데이트하고, onRowClick이 있다면 호출
    const handleCellClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CampaignManagerList.useCallback[handleCellClick]": ({ row })=>{
            const clickedCampaign = filteredCampaigns.find({
                "CampaignManagerList.useCallback[handleCellClick].clickedCampaign": (campaign)=>campaign.campaign_id === row.campaignId
            }["CampaignManagerList.useCallback[handleCellClick].clickedCampaign"]);
            if (clickedCampaign) {
                setSelectedCampaign(clickedCampaign);
                setSelectedCampaignRow(row);
                setCampaignIdForUpdateFromSideMenu(clickedCampaign.campaign_id.toString());
                if (onRowClick) {
                    onRowClick(row.campaignId.toString());
                }
            }
            setCampaignIdForUpdateFromSideMenu(row.campaignId.toString());
        }
    }["CampaignManagerList.useCallback[handleCellClick]"], [
        filteredCampaigns,
        setSelectedCampaign,
        setSelectedCampaignRow,
        onRowClick
    ]);
    // filteredCampaigns를 grid 데이터 형식(Row)로 변환
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManagerList.useEffect": ()=>{
            if (filteredCampaigns.length > 0) {
                const newTempData = filteredCampaigns.map({
                    "CampaignManagerList.useEffect.newTempData": (campaign, index)=>({
                            no: index + 1,
                            campaignId: campaign.campaign_id,
                            idName: `[${campaign.campaign_id}]${campaign.campaign_name}`,
                            startDate: schedules.filter({
                                "CampaignManagerList.useEffect.newTempData": (schedule)=>schedule.campaign_id === campaign.campaign_id
                            }["CampaignManagerList.useEffect.newTempData"]).map({
                                "CampaignManagerList.useEffect.newTempData": (data)=>data.start_date && data.start_date.length === 8 ? `${data.start_date.substring(0, 4)}-${data.start_date.substring(4, 6)}-${data.start_date.substring(6, 8)}` : ''
                            }["CampaignManagerList.useEffect.newTempData"]).join(','),
                            endDate: schedules.filter({
                                "CampaignManagerList.useEffect.newTempData": (schedule)=>schedule.campaign_id === campaign.campaign_id
                            }["CampaignManagerList.useEffect.newTempData"]).map({
                                "CampaignManagerList.useEffect.newTempData": (data)=>data.end_date && data.end_date.length === 8 ? `${data.end_date.substring(0, 4)}-${data.end_date.substring(4, 6)}-${data.end_date.substring(6, 8)}` : ''
                            }["CampaignManagerList.useEffect.newTempData"]).join(','),
                            skill: campaignSkills.filter({
                                "CampaignManagerList.useEffect.newTempData": (skill)=>skill.campaign_id === campaign.campaign_id
                            }["CampaignManagerList.useEffect.newTempData"]).map({
                                "CampaignManagerList.useEffect.newTempData": (data)=>data.skill_id
                            }["CampaignManagerList.useEffect.newTempData"]).join(','),
                            dialMode: dialModeList.filter({
                                "CampaignManagerList.useEffect.newTempData": (dialMode)=>dialMode.dial_id === campaign.dial_mode
                            }["CampaignManagerList.useEffect.newTempData"]).map({
                                "CampaignManagerList.useEffect.newTempData": (data)=>data.dial_name
                            }["CampaignManagerList.useEffect.newTempData"]).join(','),
                            callingNumber: callingNumbers.filter({
                                "CampaignManagerList.useEffect.newTempData": (callingNumber)=>callingNumber.campaign_id === campaign.campaign_id
                            }["CampaignManagerList.useEffect.newTempData"]).map({
                                "CampaignManagerList.useEffect.newTempData": (data)=>data.calling_number
                            }["CampaignManagerList.useEffect.newTempData"]).join(',')
                        })
                }["CampaignManagerList.useEffect.newTempData"]);
                setTempData(newTempData);
            } else {
                setTempData([]);
                setSelectedCampaign(null);
                setSelectedCampaignRow(null);
            }
        }
    }["CampaignManagerList.useEffect"], [
        filteredCampaigns,
        schedules,
        campaignSkills,
        callingNumbers
    ]);
    // 자동 선택: 목록에 행이 있고 선택된 행이 없으면 첫 번째 행을 선택
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManagerList.useEffect": ()=>{
            if (tempData.length > 0 && campaignId != '') {
                const selectedCampaign = campaigns.find({
                    "CampaignManagerList.useEffect.selectedCampaign": (c)=>c.campaign_id === Number(campaignId)
                }["CampaignManagerList.useEffect.selectedCampaign"]);
                const filterCampaign = filteredCampaigns.find({
                    "CampaignManagerList.useEffect.filterCampaign": (c)=>c.campaign_id === Number(campaignId)
                }["CampaignManagerList.useEffect.filterCampaign"]);
                const index = tempData.findIndex({
                    "CampaignManagerList.useEffect.index": (d)=>d.campaignId === Number(campaignId)
                }["CampaignManagerList.useEffect.index"]);
                if (selectedCampaign && index !== -1 && typeof filterCampaign !== 'undefined') {
                    setSelectedCampaign(selectedCampaign ?? null);
                    setSelectedCampaignRow(tempData[index]);
                } else {
                // const selectedCampaign = campaigns.find(c => c.campaign_id === tempData[0].campaignId);
                // setSelectedCampaign(selectedCampaign ?? null);
                // setSelectedCampaignRow(tempData[0]);
                // if (onRowClick) {
                //   onRowClick(tempData[0].campaignId.toString());
                // }
                }
            } else if (tempData.length > 0) {
                const selectedCampaign = campaigns.find({
                    "CampaignManagerList.useEffect.selectedCampaign": (c)=>c.campaign_id === tempData[0].campaignId
                }["CampaignManagerList.useEffect.selectedCampaign"]);
                setSelectedCampaign(selectedCampaign ?? null);
                setSelectedCampaignRow(tempData[0]);
                if (onRowClick) {
                    onRowClick(tempData[0].campaignId.toString());
                }
            }
        }
    }["CampaignManagerList.useEffect"], [
        tempData,
        filteredCampaigns,
        campaignId
    ]);
    const getCampaignRowClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CampaignManagerList.useCallback[getCampaignRowClass]": (row)=>{
            return selectedCampaignRow?.campaignId === row.campaignId ? 'bg-[#FFFAEE]' : '';
        }
    }["CampaignManagerList.useCallback[getCampaignRowClass]"], [
        selectedCampaignRow
    ]);
    const selectedRowKeys = selectedCampaignRow ? new Set([
        selectedCampaignRow.campaignId
    ]) : new Set();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[40%] shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "캠페인 목록",
                    totalCount: filteredCampaigns?.length || 0
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-custom-wrap h-[500px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        columns: columns,
                        rows: tempData,
                        className: "grid-custom text-align-left rdg-light",
                        rowHeight: 30,
                        rowClass: getCampaignRowClass,
                        headerRowHeight: 30,
                        onCellClick: handleCellClick,
                        rowKeyGetter: (row)=>row.campaignId,
                        selectedRows: selectedRowKeys
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
_s(CampaignManagerList, "ZbbY55H6/OFRcBqlKC1fRx9A3AI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"]
    ];
});
_c = CampaignManagerList;
var _c;
__turbopack_refresh__.register(_c, "CampaignManagerList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/CampaignManager/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/app/main/comp/CampaignManager/index.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignManagerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/CampaignManagerHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignManagerDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/CampaignManagerDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignManagerList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CampaignManager/CampaignManagerList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSchedules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSkills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumber.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForPhoneDescription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/hooks/useApiForMain.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
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
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '0',
    onClose: ()=>{},
    onCancle: ()=>{}
};
const CampaignManager = ({ campaignId, isOpen, onCampaignPopupClose })=>{
    _s();
    const { tenants, campaigns, selectedCampaign, setSelectedCampaign, setCampaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { campaignIdForUpdateFromSideMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { session_key, tenant_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [masterCampaignId, setMasterCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [headerInit, setHeaderInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions, schedules, campaignSkills, callingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [campaignHeaderSearchParam, setCampaignHeaderSearchParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const handleCampaignHeaderSearch = (param)=>{
        setCampaignHeaderSearchParam(param);
    };
    // 스케줄 조회
    const { mutate: fetchSchedules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"])({
        onSuccess: {
            "CampaignManager.useApiForSchedules": (data)=>{
                setSchedules(data.result_data);
                const tempTenantIdArray = tenants.map({
                    "CampaignManager.useApiForSchedules.tempTenantIdArray": (tenant)=>tenant.tenant_id
                }["CampaignManager.useApiForSchedules.tempTenantIdArray"]);
                fetchSkills({
                    tenant_id_array: tempTenantIdArray
                });
            }
        }["CampaignManager.useApiForSchedules"],
        onError: {
            "CampaignManager.useApiForSchedules": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "CampaignManager.useApiForSchedules": ()=>goLogin()
                        }["CampaignManager.useApiForSchedules"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                }
            }
        }["CampaignManager.useApiForSchedules"]
    });
    const goLogin = ()=>{
        router.push('/login');
    };
    // 스킬 조회
    const { mutate: fetchSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"])({
        onSuccess: {
            "CampaignManager.useApiForSkills": (data)=>{
                setSkills(data.result_data || []);
                fetchCallingNumbers({
                    session_key: session_key,
                    tenant_id: 0
                });
            }
        }["CampaignManager.useApiForSkills"],
        retry: 0
    });
    // 전화번호 조회
    const { mutate: fetchCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"])({
        onSuccess: {
            "CampaignManager.useApiForCallingNumber": (data)=>{
                setCallingNumbers(data.result_data || []);
                fetchCampaignSkills({
                    session_key: session_key,
                    tenant_id: 0
                });
            }
        }["CampaignManager.useApiForCallingNumber"]
    });
    // 캠페인스킬 조회
    const { mutate: fetchCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onSuccess: {
            "CampaignManager.useApiForCampaignSkill": (data)=>{
                setCampaignSkills(data.result_data || []);
                fetchPhoneDescriptions({
                    session_key: session_key,
                    tenant_id: 0
                });
            }
        }["CampaignManager.useApiForCampaignSkill"]
    });
    // 전화번호설명 템플릿 조회
    const { mutate: fetchPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"])({
        onSuccess: {
            "CampaignManager.useApiForPhoneDescription": (data)=>{
                setPhoneDescriptions(data.result_data || []);
            }
        }["CampaignManager.useApiForPhoneDescription"]
    });
    //초기화실행.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManager.useEffect": ()=>{
            if (tenants && campaigns) {
                const tempTenantIdArray = tenants.map({
                    "CampaignManager.useEffect.tempTenantIdArray": (tenant)=>tenant.tenant_id
                }["CampaignManager.useEffect.tempTenantIdArray"]);
                fetchSchedules({
                    tenant_id_array: tempTenantIdArray
                });
            }
        }
    }["CampaignManager.useEffect"], [
        tenants,
        campaigns
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManager.useEffect": ()=>{
            if (selectedCampaign != null) {
                setSelectedCampaign(selectedCampaign);
            }
        }
    }["CampaignManager.useEffect"], [
        selectedCampaign
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignManager.useEffect": ()=>{
            setHeaderInit(true);
            if (typeof campaignId === 'undefined') {
                setMasterCampaignId(campaignIdForUpdateFromSideMenu || '');
            } else {
                setMasterCampaignId(campaignId);
            }
        }
    }["CampaignManager.useEffect"], [
        campaignIdForUpdateFromSideMenu,
        campaignId
    ]);
    const handleRowClick = (campaignId)=>{
        setMasterCampaignId(campaignId);
    };
    const handleHeaderInit = ()=>{
        setHeaderInit(false);
    };
    const handleDetailInit = (campaign_id)=>{
        console.log('campaign_id:: ' + campaign_id);
        setMasterCampaignId(campaign_id + '');
        setHeaderInit(true);
        fetchMain({
            session_key: session_key,
            tenant_id: tenant_id
        });
    };
    // 캠페인 정보 조회 API 호출
    const { mutate: fetchMain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"])({
        onSuccess: {
            "CampaignManager.useApiForMain": (data)=>{
                setCampaigns(data.result_data);
            }
        }["CampaignManager.useApiForMain"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "compaign-wrap stable-scrollbar",
        style: {
            overflowY: 'scroll',
            scrollbarGutter: 'stable',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            contain: 'content'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-[15px] limit-width",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignManagerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        init: headerInit,
                        setInit: handleHeaderInit,
                        onSearch: handleCampaignHeaderSearch
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/index.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-[30px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignManagerList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                campaignId: campaignIdForUpdateFromSideMenu || masterCampaignId,
                                onRowClick: handleRowClick,
                                campaignHeaderSearchParam: campaignHeaderSearchParam
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/index.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignManagerDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                campaignId: campaignIdForUpdateFromSideMenu || masterCampaignId,
                                isOpen: isOpen,
                                onCampaignPopupClose: onCampaignPopupClose,
                                setInit: handleDetailInit
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/CampaignManager/index.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/CampaignManager/index.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/CampaignManager/index.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                isOpen: alertState.isOpen,
                onClose: alertState.onClose,
                onCancle: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/CampaignManager/index.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/CampaignManager/index.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
};
_s(CampaignManager, "Dcr0bxVDQP5Sw1B4F81IKhsDoQw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"]
    ];
});
_c = CampaignManager;
const __TURBOPACK__default__export__ = CampaignManager;
var _c;
__turbopack_refresh__.register(_c, "CampaignManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_main_comp_CampaignManager_95e30e._.js.map