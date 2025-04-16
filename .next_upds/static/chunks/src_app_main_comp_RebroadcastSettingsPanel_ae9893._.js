(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_main_comp_RebroadcastSettingsPanel_ae9893._.js", {

"[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonRadio/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
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
const errorMessage = {
    isOpen: false,
    message: '',
    title: '재발신 설정',
    type: '0',
    onClose: ()=>{},
    onCancle: ()=>{}
};
const RebroadcastSettingsPanelHeader = ({ campaignId, reservationShouldShowApply, reservationShouldShowAdd, reservationShouldShowDelete, selectedRebroadcastId, textType, handleBroadcastTypeChange, handleAddRebroadcast, handleRemoveRebroadcast, handleApplyRebroadcast, handleCheckListCount })=>{
    _s();
    // TabStore에서 현재 활성화된 탭 정보 가져오기
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { removeTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    const [broadcastType, setBroadcastType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("reservation");
    const [listCount, setListCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shouldShowApply, setShouldShowApply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); //적용 버튼.
    const [shouldShowAdd, setShouldShowAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); //추가 버튼.
    const [shouldShowAddDelete, setShouldShowDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); //삭제 버튼.
    const [headerCampaignId, setHeaderCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [realtime, setRealtime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //리스트 건수 확인 버튼 클릭 이벤트.
    const handleCheckListCountHeader = ()=>{
        if (broadcastType === 'reservation') {
            setAlertState({
                isOpen: true,
                message: `선택된 재발신 조건에 해당되는 리스트 수 : ${listCount}`,
                title: '리스트 건수 확인',
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        })),
                onCancle: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        } else {
            handleCheckListCount();
        }
    };
    //추가 버튼 클릭 이벤트.
    const handleAddRebroadcastClick = ()=>{
        handleAddRebroadcast();
    };
    //삭제 버튼 클릭 이벤트.
    const handleRemoveRebroadcastClick = ()=>{
        handleRemoveRebroadcast();
    };
    //예약, 실시간 변경 이벤트.
    const handleBroadcastType = (value)=>{
        setBroadcastType(value);
        handleBroadcastTypeChange(value);
        if (value === 'realtime') {
            setShouldShowApply(true);
        } else {
            setShouldShowApply(reservationShouldShowApply);
        }
    };
    //적용 버튼 클릭 이벤트.
    const handleApplyRebroadcastClick = ()=>{
        handleApplyRebroadcast();
    };
    //적용 버튼 
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RebroadcastSettingsPanelHeader.useEffect": ()=>{
            setShouldShowApply(reservationShouldShowApply);
            setShouldShowAdd(reservationShouldShowAdd);
            setShouldShowDelete(reservationShouldShowDelete);
        }
    }["RebroadcastSettingsPanelHeader.useEffect"], [
        reservationShouldShowApply,
        reservationShouldShowAdd,
        reservationShouldShowDelete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RebroadcastSettingsPanelHeader.useEffect": ()=>{
            if (campaigns && campaignId !== '0') {
                setHeaderCampaignId(campaignId + '');
                const tempCampaign = campaigns.filter({
                    "RebroadcastSettingsPanelHeader.useEffect.tempCampaign": (data)=>Number(campaignId) === data.campaign_id
                }["RebroadcastSettingsPanelHeader.useEffect.tempCampaign"]);
                if (tempCampaign.length > 0) {
                    setListCount(tempCampaign[0].list_count);
                }
                if (tempCampaign[0].start_flag === 1) {
                    setRealtime(true);
                } else {
                    setRealtime(false);
                }
            // setListCount(campaigns.filter(data=>Number(campaignId) === data.campaign_id)[0].list_count);
            }
        }
    }["RebroadcastSettingsPanelHeader.useEffect"], [
        campaignId,
        campaigns
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex title-background justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "w-20 min-w-20",
                                children: "캠페인 아이디"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                defaultValue: "0",
                                value: headerCampaignId,
                                onValueChange: setHeaderCampaignId,
                                disabled: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "w-[140px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "캠페인선택"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                            lineNumber: 152,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "0",
                                                children: "-선택-"
                                            }, "0", false, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                                lineNumber: 155,
                                                columnNumber: 29
                                            }, this),
                                            campaigns.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: option.campaign_id + '',
                                                    children: option.campaign_id
                                                }, option.campaign_id, false, {
                                                    fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                lineNumber: 150,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "w-20 min-w-20",
                                children: "캠페인 이름"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                className: "w-[140px]",
                                disabled: true,
                                value: headerCampaignId === '' ? '' : campaigns.filter((data)=>Number(headerCampaignId) === data.campaign_id)[0].campaign_name || ''
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadio"], {
                        defaultValue: "reservation",
                        className: "flex gap-5",
                        onValueChange: (value)=>handleBroadcastType(value),
                        value: broadcastType,
                        disabled: realtime,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                        value: "reservation",
                                        id: "reservation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "reservation",
                                        children: "예약"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                lineNumber: 180,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                        value: "realtime",
                                        id: "realtime"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                        lineNumber: 185,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "realtime",
                                        children: "실시간"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                                lineNumber: 184,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center",
                children: [
                    broadcastType === 'reservation' && textType !== '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-1 text-sm font-medium text-gray-700 bg-blue-100 border border-blue-200 rounded-md shadow-sm inline-flex items-center mr-[200px]",
                        children: textType
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 193,
                        columnNumber: 21
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        onClick: handleCheckListCountHeader,
                        children: "리스트 건수 확인"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        onClick: handleAddRebroadcastClick,
                        disabled: !shouldShowAdd,
                        children: "추가"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        onClick: handleRemoveRebroadcastClick,
                        disabled: !shouldShowAddDelete,
                        children: "삭제"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        onClick: handleApplyRebroadcastClick,
                        disabled: !shouldShowApply,
                        children: "적용"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 214,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                        onClick: ()=>removeTab(20, '20'),
                        children: "닫기"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                lineNumber: 191,
                columnNumber: 13
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
                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, this);
};
_s(RebroadcastSettingsPanelHeader, "V6WX4o3NKAr/RHT1uvvghI6XIEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"]
    ];
});
_c = RebroadcastSettingsPanelHeader;
const __TURBOPACK__default__export__ = RebroadcastSettingsPanelHeader;
var _c;
__turbopack_refresh__.register(_c, "RebroadcastSettingsPanelHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonRadio/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomCheckbox/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$RebroadcastSettingsPanel$2f$RebroadcastSettingsPanelHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/RebroadcastSettingsPanel/RebroadcastSettingsPanelHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForAutoRedial.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignAutoRedialInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/rebroadcastSettingsPanel/hooks/useApiForCampaignAutoRedialInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedialDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForAutoRedialDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignRedialPreviewSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/rebroadcastSettingsPanel/hooks/useApiForCampaignRedialPreviewSearch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignCurrentRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/rebroadcastSettingsPanel/hooks/useApiForCampaignCurrentRedial.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignStatusUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/common.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignManagerUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-date-picker/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
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
const errorMessage = {
    isOpen: false,
    message: '',
    title: '재발신 설정',
    type: '1',
    onClose: ()=>{},
    onCancle: ()=>{}
};
const today = new Date();
const initialSettings = {
    campaignId: '',
    startDate: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
    startTime: '',
    changeYn: false,
    scheduleChangeYn: false
};
const getOutgoingResultLabel = (key)=>{
    const labels = {
        'outgoing-success-ok': '발신 성공 상담사 연결 성공',
        'outgoing-success-no': '발신 성공 상담사 연결 실패',
        'fail-busy': '통화중 실패',
        'fail-no-answer': '무응답 실패',
        'fail-fax': '팩스/모뎀 실패',
        'fail-machine': '기계음 실패',
        'fail-etc': '기타실패',
        'fail-wrong-num': '전화번호 오류 실패',
        'fail-line': '회선오류 실패',
        'fail-hangup': '고객 바로끊음 실패',
        'fail-no-tone': '통화음 없음 실패',
        'fail-no-dial': '다이얼톤 없음 실패',
        'outgoing-attempt': '발신 시도 건수'
    };
    return labels[key] || key;
};
const initOutgoingResult = {
    'outgoing-success-ok': false,
    'outgoing-success-no': true,
    'fail-busy': true,
    'fail-no-answer': true,
    'fail-fax': false,
    'fail-machine': true,
    'fail-etc': false,
    'fail-wrong-num': false,
    'fail-line': false,
    'fail-hangup': true,
    'fail-no-tone': false,
    'fail-no-dial': false,
    'outgoing-attempt': true
};
const RebroadcastSettingsPanel = ()=>{
    _s();
    // TabStore에서 현재 활성화된 탭 정보 가져오기
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { activeTabId, openedTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSettings);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    const [broadcastType, setBroadcastType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("reservation");
    const [outgoingResultChecked, setOutgoingResultChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [outgoingTypeChecked, setOutgoingTypeChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [callType, setCallType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("not-sent");
    const [outgoingTimeChecked, setOutgoingTimeChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeType, setTimeType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("final-call-date");
    const [rebroadcastList, setRebroadcastList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedRebroadcastId, setSelectedRebroadcastId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRebroadcastDetails, setSelectedRebroadcastDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [campaignId, setCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [listRedialQuery, setListRedialQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [reservationShouldShowApply, setReservationShouldShowApply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); //적용 버튼.
    const [reservationShouldShowAdd, setReservationShouldShowAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); //추가 버튼.
    const [reservationShouldShowDelete, setReservationShouldShowDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); //삭제 버튼.
    const [outgoingResultDisabled, setOutgoingResultDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sequenceNumber, setSequenceNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [caseType, setCaseType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [textType, setTextType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tempCampaignManagerInfo, setTempCampaignManagerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignManagerInfo"]);
    // 발신결과 체크박스 상태 관리
    const [selectedOutgoingResults, setSelectedOutgoingResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initOutgoingResult);
    const resetAllStates = ()=>{
        setStartDate(new Date());
        setEndDate(new Date());
        setStartTime("0000");
        setTimeType("final-call-date"); //발신시간.
        setCallType("not-sent");
        setSelectedRebroadcastId(null);
        setSelectedRebroadcastDetails(null);
        // 모드별 체크박스 상태 설정
        setOutgoingResultChecked(true);
        setOutgoingTypeChecked(false);
        setOutgoingTimeChecked(false);
    };
    const handleDateChange = (value)=>{
        if (value instanceof Date || value === null) {
            let tempStartDate = '';
            if (value != null) {
                tempStartDate = value.getFullYear() + ('0' + (value.getMonth() + 1)).slice(-2) + ('0' + value.getDate()).slice(-2);
            }
            setStartDate(value);
            setSettings((prev)=>({
                    ...prev,
                    startDate: tempStartDate,
                    changeYn: true,
                    scheduleChangeYn: true
                }));
        }
    };
    const handleEndDateChange = (value)=>{
        setEndDate(value);
    };
    //시작시간 이벤트.
    const handleTimeChange = (e)=>{
        const value = e.target.value;
        if (value.length <= 4 && /^\d*$/.test(value)) {
            setStartTime(value);
        }
    };
    const handleOutgoingResultChange = (id, checked)=>{
        setSelectedOutgoingResults((prev)=>({
                ...prev,
                [id]: checked
            }));
    };
    const MakeRedialPacket = ()=>{
        let returnValue = '00';
        //발신결과.
        if (outgoingResultChecked) {
            if (selectedOutgoingResults['outgoing-success-ok'] && selectedOutgoingResults['outgoing-success-no']) {
                returnValue += "35210@";
            } else {
                //80954, "발신 성공 상담사 연결 성공"
                if (selectedOutgoingResults['outgoing-success-ok']) {
                    returnValue += "35233@";
                }
                //80955, "발신 성공 상담사 연결 실패"
                if (selectedOutgoingResults['outgoing-success-no']) {
                    returnValue += "35223@35213@";
                }
            }
            //80174, "통화중 실패")
            if (selectedOutgoingResults['fail-busy']) {
                returnValue += "26232@";
            }
            //80175, "무응답 실패")
            if (selectedOutgoingResults['fail-no-answer']) {
                returnValue += "26233@";
            }
            //80176, "팩스/모뎀 실패)
            if (selectedOutgoingResults['fail-fax']) {
                returnValue += "26234@";
            }
            //80177, "기계음 실패"
            if (selectedOutgoingResults['fail-machine']) {
                returnValue += "26235@";
            }
            //80178, "기타실패"
            if (selectedOutgoingResults['fail-etc']) {
                returnValue += "26236@";
            }
            //80179, "전화번호 오류 실패"
            if (selectedOutgoingResults['fail-wrong-num']) {
                returnValue += "26237@";
            }
            //80180, "회선오류 실패"
            if (selectedOutgoingResults['fail-line']) {
                returnValue += "26239@";
            }
            //80181, "고객 바로끊음 실패"
            if (selectedOutgoingResults['fail-hangup']) {
                returnValue += "262310@";
            }
            //80182, "통화음 없음 실패"
            if (selectedOutgoingResults['fail-no-tone']) {
                returnValue += "262311@";
            }
            //80183, "다이얼톤 없음 실패"
            if (selectedOutgoingResults['fail-no-dial']) {
                returnValue += "262312@";
            }
            //80185, "발신 시도 건수"
            if (selectedOutgoingResults['outgoing-attempt']) {
                returnValue += "26238@";
            }
        }
        //발신구분 체크박스.
        if (outgoingTypeChecked) {
            returnValue += "^";
            //발신되지 않은 예약콜
            if (callType === 'not-sent') {
                returnValue += "402399";
            }
            //발신되어진 예약콜
            if (callType === 'sent') {
                returnValue += "4023100";
            }
        }
        //발신시간 체크박스
        if (outgoingTimeChecked) {
            if (!outgoingResultChecked && !outgoingTypeChecked) {
                // 최종발신날짜
                if (timeType === 'final-call-date') {
                    if (startDate && endDate) {
                        if (startDate instanceof Date && endDate instanceof Date) {
                            returnValue += "2714" + startDate.toISOString().slice(0, 10).replace(/-/g, '') + " 000000^2715" + endDate.toISOString().slice(0, 10).replace(/-/g, '') + " 235959";
                        }
                    }
                } else {
                    if (startDate && endDate) {
                        if (startDate instanceof Date && endDate instanceof Date) {
                            returnValue += "4315" + startDate.toISOString().slice(0, 10).replace(/-/g, '') + " 000000^2715" + endDate.toISOString().slice(0, 10).replace(/-/g, '') + " 235959";
                        }
                    }
                }
            } else {
                returnValue += "^";
                // 최종발신날짜
                if (timeType === 'final-call-date') {
                    if (startDate && endDate) {
                        if (startDate instanceof Date && endDate instanceof Date) {
                            returnValue += "(2714" + startDate.toISOString().slice(0, 10).replace(/-/g, '') + " 000000^2715" + endDate.toISOString().slice(0, 10).replace(/-/g, '') + " 235959)";
                        }
                    }
                } else {
                    if (startDate && endDate) {
                        if (startDate instanceof Date && endDate instanceof Date) {
                            returnValue += "(4315" + startDate.toISOString().slice(0, 10).replace(/-/g, '') + " 000000^2715" + endDate.toISOString().slice(0, 10).replace(/-/g, '') + " 235959)";
                        }
                    }
                }
            }
        }
        if (returnValue.lastIndexOf('@') === returnValue.length - 1) {
            returnValue = returnValue.substring(0, returnValue.length - 1);
        }
        return returnValue;
    };
    //재발송 예약 추가 버튼 클릭 이벤트.
    const handleAddRebroadcast = ()=>{
        const redialCondition = MakeRedialPacket();
        const newRebroadcast = {
            id: sequenceNumber,
            scheduleStartDate: "",
            scheduleStartTime: '0000',
            outgoingResults: [],
            outgoingType: "",
            outgoingTime: {
                type: "",
                startDate: "",
                endDate: ""
            },
            run_flag: 0,
            redialCondition: '',
            isDummy: true
        };
        //버튼 설정.        
        setReservationShouldShowApply(true);
        setReservationShouldShowAdd(false);
        setReservationShouldShowDelete(false);
        //발신결과 disabled 설정.
        setOutgoingResultDisabled(false);
        setSelectedRebroadcastId(sequenceNumber);
        setTextType('재발신 추가중');
        setRebroadcastList([
            ...rebroadcastList,
            newRebroadcast
        ]);
        resetAllStates();
    };
    //삭제 버튼 클릭 이벤트.
    const handleRemoveRebroadcast = ()=>{
        if (selectedRebroadcastId !== null && rebroadcastList.some((item)=>item.id === selectedRebroadcastId)) {
            fetchAutoRedialDelete({
                campaign_id: Number(campaignId),
                sequence_number: selectedRebroadcastId
            });
            setTextType('');
        }
    };
    const handleWorkDelete = ()=>{
        const tempRebroadcastList = rebroadcastList.filter((data)=>!data.isDummy);
        setRebroadcastList(tempRebroadcastList);
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        //버튼 설정.        
        setReservationShouldShowApply(false);
        setReservationShouldShowAdd(true);
        setReservationShouldShowDelete(true);
        //발신결과 disabled 설정. 
        setOutgoingResultChecked(false);
        setOutgoingTypeChecked(false);
        setOutgoingTimeChecked(false);
        setOutgoingResultDisabled(true);
        if (tempRebroadcastList.length > 0) {
            setSelectedRebroadcastId(tempRebroadcastList[0].id);
            if (tempRebroadcastList[0].run_flag === 2) {
                setTextType('Time out');
            } else if (tempRebroadcastList[0].run_flag === 1) {
                setTextType('실행');
            } else if (tempRebroadcastList[0].run_flag === 0) {
                setTextType('미실행');
            }
        }
    };
    //그리드 클릭이벤트..
    const handleSelectRebroadcast = (id)=>{
        // 더미 항목이 있는지 확인
        const hasDummyItem = rebroadcastList.some((item)=>item.isDummy);
        if (hasDummyItem) {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: '재발신 추가중입니다. \n추가를 중단하고 삭제하시겠습니까?',
                title: '알림',
                type: '1',
                onClose: handleWorkDelete,
                onCancle: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
            return;
        }
        // 기존 선택 로직
        setSelectedRebroadcastId((prevId)=>prevId === id ? null : id);
        // 선택된 항목 찾기
        const selected = rebroadcastList.find((item)=>item.id === id);
        if (selected) {
            setSelectedRebroadcastDetails(selected);
            // 날짜 및 시간 설정
            if (selected.scheduleStartDate) {
                setStartDate(new Date(selected.scheduleStartDate));
            }
            if (selected.scheduleStartTime) {
                setStartTime(selected.scheduleStartTime);
            }
            if (selected.outgoingType) {
                setCallType(selected.outgoingType);
            }
            if (selected.outgoingTime && selected.outgoingTime.type) {
                setTimeType(selected.outgoingTime.type);
            }
            if (selected.outgoingTime && selected.outgoingTime.endDate) {
                setEndDate(new Date(selected.outgoingTime.endDate));
            }
            if (selected.run_flag === 2) {
                setTextType('Time out');
            } else if (selected.run_flag === 1) {
                setTextType('실행');
            } else if (selected.run_flag === 0) {
                setTextType('미실행');
            }
            setListRedialQuery(selected.redialCondition);
        } else {
            // 선택 해제된 경우 상태 초기화
            setSelectedRebroadcastDetails(null);
            resetAllStates();
        }
    };
    //적용 버튼 클릭 이벤트.
    const handleApplyRebroadcast = ()=>{
        // 예약 모드에서 실제 데이터 처리
        if (broadcastType === "reservation") {
            const selectedResults = Object.entries(selectedOutgoingResults).filter(([_, isSelected])=>isSelected).map(([key])=>key);
            if (selectedResults.length === 0) {
                setAlertState({
                    isOpen: true,
                    message: '최소 하나 이상의 발신결과를 선택해주세요.',
                    title: '알림',
                    type: '0',
                    onClose: ()=>setAlertState((prev)=>({
                                ...prev,
                                isOpen: false
                            })),
                    onCancle: ()=>setAlertState((prev)=>({
                                ...prev,
                                isOpen: false
                            }))
                });
                return;
            }
            fetchCampaignAutoRedialInsert({
                campaign_id: Number(campaignId),
                sequence_number: sequenceNumber,
                start_date: startDate instanceof Date ? startDate.getFullYear() + ('0' + (startDate.getMonth() + 1)).slice(-2) + ('0' + startDate.getDate()).slice(-2) + startTime + '00' : '',
                redial_condition: MakeRedialPacket(),
                run_flag: 0
            });
        } else if (broadcastType === "realtime") {
            setCaseType(2);
            fetchCampaignRedialPreviewSearch({
                campaign_id: Number(campaignId),
                condition: MakeRedialPacket()
            });
        }
    };
    //예약, 실시간 변경 이벤트.
    const handleBroadcastTypeChange = (param)=>{
        setBroadcastType(param);
        resetAllStates();
        if (param === 'realtime') {
            //버튼 설정.        
            setReservationShouldShowApply(true);
            setReservationShouldShowAdd(false);
            setReservationShouldShowDelete(false);
            setOutgoingResultDisabled(false);
        } else {
            // setShouldShowApply(reservationShouldShowApply);
            if (rebroadcastList.length > 0 && rebroadcastList.filter((data)=>data.isDummy).length > 0) {
                //버튼 설정.
                setReservationShouldShowApply(true);
                setReservationShouldShowAdd(false);
                setReservationShouldShowDelete(false);
            } else if (rebroadcastList.length > 0) {
                //첫번째 row 선택.
                setSelectedRebroadcastId(rebroadcastList[0].id);
                setListRedialQuery(rebroadcastList[0].redialCondition);
                //발신결과 disabled 설정. 
                setOutgoingResultChecked(false);
                setOutgoingTypeChecked(false);
                setOutgoingTimeChecked(false);
                setOutgoingResultDisabled(true);
                //버튼 설정.
                setReservationShouldShowApply(false);
                setReservationShouldShowAdd(true);
                setReservationShouldShowDelete(true);
            } else {
                //버튼 설정.
                setReservationShouldShowApply(false);
                setReservationShouldShowAdd(true);
                setReservationShouldShowDelete(true);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RebroadcastSettingsPanel.useEffect": ()=>{
            if (listRedialQuery !== '') {
                if (broadcastType === 'realtime') {
                    setSelectedOutgoingResults(initOutgoingResult);
                } else {
                    let outgoingSuccessOk = false; //80954, "발신 성공 상담사 연결 성공"
                    if (listRedialQuery.indexOf('35233') > -1) {
                        outgoingSuccessOk = true;
                    }
                    let outgoingSuccessNo = false; //80955, "발신 성공 상담사 연결 실패"
                    if (listRedialQuery.indexOf('35223@35213') > -1) {
                        outgoingSuccessNo = true;
                    }
                    if (listRedialQuery.indexOf('35210') > -1) {
                        outgoingSuccessOk = true;
                        outgoingSuccessNo = true;
                    }
                    let failBusy = false; //80174, "통화중 실패"
                    if (listRedialQuery.indexOf('26232') > -1) {
                        // 2018.07.10 Gideon #24364 삼성화재(중국) 장애현상 수정 - 아래 || str == "0026232" 부분 추가
                        const tempList = listRedialQuery.split('@');
                        if (tempList.filter({
                            "RebroadcastSettingsPanel.useEffect": (data)=>data === '26232' || data === '0026232'
                        }["RebroadcastSettingsPanel.useEffect"]).length > 0) {
                            failBusy = true;
                        }
                    }
                    let failNoAnswer = false; //80175, "무응답 실패"
                    if (listRedialQuery.indexOf('26233') > -1) {
                        failNoAnswer = true;
                    }
                    let failFax = false; //80176, "팩스/모뎀 실패"
                    if (listRedialQuery.indexOf('26234') > -1) {
                        failFax = true;
                    }
                    let failMachine = false; //80177, "기계음 실패"
                    if (listRedialQuery.indexOf('26235') > -1) {
                        failMachine = true;
                    }
                    let failEtc = false; //80178, "기타실패"
                    if (listRedialQuery.indexOf('26236') > -1) {
                        failEtc = true;
                    }
                    let failWrongNum = false; //80179, "전화번호 오류 실패"
                    if (listRedialQuery.indexOf('26237') > -1) {
                        failWrongNum = true;
                    }
                    let failLine = false; //80180, "회선오류 실패"
                    if (listRedialQuery.indexOf('26239') > -1) {
                        failLine = true;
                    }
                    let failHangup = false; //80181, "고객 바로끊음 실패"
                    if (listRedialQuery.indexOf('262310') > -1) {
                        failHangup = true;
                    }
                    let failNoTone = false; //80182, "통화음 없음 실패"
                    if (listRedialQuery.indexOf('262311') > -1) {
                        failNoTone = true;
                    }
                    let failNoDial = false; //80183, "다이얼톤 없음 실패
                    if (listRedialQuery.indexOf('262312') > -1) {
                        failNoDial = true;
                    }
                    let outgoingAttempt = false; //80185, "발신 시도 건수"
                    if (listRedialQuery.indexOf('26238') > -1 || listRedialQuery.indexOf('0026238') > -1) {
                        outgoingAttempt = true;
                    }
                    //발신결과 체크박스.
                    setSelectedOutgoingResults({
                        ...initOutgoingResult,
                        'outgoing-success-ok': outgoingSuccessOk,
                        'outgoing-success-no': outgoingSuccessNo,
                        'fail-busy': failBusy,
                        'fail-no-answer': failNoAnswer,
                        'fail-fax': failFax,
                        'fail-machine': failMachine,
                        'fail-etc': failEtc,
                        'fail-wrong-num': failWrongNum,
                        'fail-line': failLine,
                        'fail-hangup': failHangup,
                        'fail-no-tone': failNoTone,
                        'fail-no-dial': failNoDial,
                        'outgoing-attempt': outgoingAttempt
                    });
                    if (listRedialQuery.indexOf("(") > 0 || listRedialQuery.indexOf("235959") > 0) {
                        if (listRedialQuery.indexOf("(") > 0) {
                            const strTimes = listRedialQuery.split(/[()]/);
                            if (strTimes[1].indexOf("2714") > 0) {
                                setTimeType("final-call-date");
                                setStartDate(strTimes[1].substring(4, 8) + "-" + strTimes[1].substring(8, 10) + "-" + strTimes[1].substring(10, 12));
                                setEndDate(strTimes[1].substring(24, 28) + "-" + strTimes[1].substring(28, 30) + "-" + strTimes[1].substring(30, 32));
                            } else {
                                setTimeType("recall-date");
                                setStartDate(strTimes[1].substring(4, 8) + "-" + strTimes[1].substring(8, 10) + "-" + strTimes[1].substring(10, 12));
                                setEndDate(strTimes[1].substring(24, 28) + "-" + strTimes[1].substring(28, 30) + "-" + strTimes[1].substring(30, 32));
                            }
                        }
                    // setOutgoingTimeChecked(true);
                    }
                    //발신되지 않은 예약콜
                    if (listRedialQuery.indexOf('402399') > -1) {
                        setCallType("not-sent");
                    }
                    //발신되어진 예약콜
                    if (listRedialQuery.indexOf('4023100') > -1) {
                        setCallType('sent');
                    }
                }
            } else {
                setSelectedOutgoingResults(initOutgoingResult);
            }
        }
    }["RebroadcastSettingsPanel.useEffect"], [
        listRedialQuery,
        broadcastType
    ]);
    // 캠페인 재발신 정보 리스트 조회
    const { mutate: fetchCampaignAutoRedials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedial"])({
        onSuccess: {
            "RebroadcastSettingsPanel.useApiForAutoRedial": (data)=>{
                if (data.result_data.length > 0) {
                    const tempList = data.result_data.filter({
                        "RebroadcastSettingsPanel.useApiForAutoRedial.tempList": (data)=>data.campaign_id === Number(campaignId)
                    }["RebroadcastSettingsPanel.useApiForAutoRedial.tempList"]);
                    if (tempList.length > 0) {
                        const prevList = tempList.map({
                            "RebroadcastSettingsPanel.useApiForAutoRedial.prevList": (item)=>({
                                    id: item.sequence_number,
                                    scheduleStartDate: item.start_date.substring(0, 4) + '-' + item.start_date.substring(4, 6) + '-' + item.start_date.substring(6, 8),
                                    scheduleStartTime: item.start_date.substring(8, 12),
                                    outgoingResults: [],
                                    outgoingType: "",
                                    outgoingTime: {
                                        type: "",
                                        startDate: "",
                                        endDate: ""
                                    },
                                    run_flag: item.run_flag,
                                    redialCondition: item.redial_condition,
                                    isDummy: false
                                })
                        }["RebroadcastSettingsPanel.useApiForAutoRedial.prevList"]);
                        setRebroadcastList(prevList);
                        //첫번째 row 선택.
                        setSelectedRebroadcastId(prevList[0].id);
                        // handleSelectRebroadcast(prevList[0].id);
                        setListRedialQuery(prevList[0].redialCondition);
                        //발신결과 disabled 설정.
                        setOutgoingResultChecked(false);
                        setOutgoingTypeChecked(false);
                        setOutgoingTimeChecked(false);
                        setOutgoingResultDisabled(true);
                        setSequenceNumber(Math.max(...tempList.map({
                            "RebroadcastSettingsPanel.useApiForAutoRedial": (item)=>item.sequence_number
                        }["RebroadcastSettingsPanel.useApiForAutoRedial"])) + 1);
                        // 선택된 항목 찾기
                        const selected = prevList[0];
                        setSelectedRebroadcastDetails(prevList[0]);
                        // 날짜 및 시간 설정
                        if (selected.scheduleStartDate) {
                            setStartDate(new Date(selected.scheduleStartDate));
                        }
                        if (selected.scheduleStartTime) {
                            setStartTime(selected.scheduleStartTime);
                        }
                        if (selected.outgoingType) {
                            setCallType(selected.outgoingType);
                        }
                        if (selected.outgoingTime && selected.outgoingTime.type) {
                            setTimeType(selected.outgoingTime.type);
                        }
                        if (selected.outgoingTime && selected.outgoingTime.endDate) {
                            setEndDate(new Date(selected.outgoingTime.endDate));
                        }
                        if (selected.run_flag === 2) {
                            setTextType('Time out');
                        } else if (selected.run_flag === 1) {
                            setTextType('실행');
                        } else if (selected.run_flag === 0) {
                            setTextType('미실행');
                        }
                        setListRedialQuery(selected.redialCondition);
                    }
                }
            }
        }["RebroadcastSettingsPanel.useApiForAutoRedial"],
        onError: {
            "RebroadcastSettingsPanel.useApiForAutoRedial": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForAutoRedial": ()=>goLogin()
                        }["RebroadcastSettingsPanel.useApiForAutoRedial"]
                    });
                }
            }
        }["RebroadcastSettingsPanel.useApiForAutoRedial"]
    });
    const goLogin = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
        router.push('/login');
    };
    // 캠페인 재발신 정보 추가
    const { mutate: fetchCampaignAutoRedialInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignAutoRedialInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAutoRedialInsert"])({
        onSuccess: {
            "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert": (data)=>{
                const tempData = data.result_data;
                const processedRebroadcasts = rebroadcastList.filter({
                    "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert.processedRebroadcasts": (item)=>item.isDummy
                }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert.processedRebroadcasts"]).map({
                    "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert.processedRebroadcasts": (item)=>({
                            id: tempData.sequence_number,
                            scheduleStartDate: tempData.start_date.substring(0, 4) + '-' + tempData.start_date.substring(4, 6) + '-' + tempData.start_date.substring(6, 8),
                            scheduleStartTime: tempData.start_date.substring(8, 12),
                            outgoingResults: [],
                            outgoingType: callType,
                            outgoingTime: {
                                type: timeType,
                                startDate: startDate ? startDate.toString() : '',
                                endDate: endDate ? endDate.toString() : ''
                            },
                            run_flag: 0,
                            redialCondition: tempData.redial_condition,
                            isDummy: false
                        })
                }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert.processedRebroadcasts"]);
                setRebroadcastList({
                    "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert": (prevList)=>prevList.map({
                            "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert": (item)=>item.isDummy ? processedRebroadcasts.find({
                                    "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert": (proc)=>proc.id === item.id
                                }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert"]) || item : item
                        }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert"])
                }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert"]);
                //발신결과 disabled 설정.
                setOutgoingResultDisabled(true);
                setSequenceNumber(tempData.sequence_number + 1);
                //버튼 설정.
                setReservationShouldShowApply(false);
                setReservationShouldShowAdd(true);
                setReservationShouldShowDelete(true);
                setTextType('미실행');
            }
        }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert"],
        onError: {
            "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert": ()=>goLogin()
                        }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert"]
                    });
                }
            }
        }["RebroadcastSettingsPanel.useApiForCampaignAutoRedialInsert"]
    });
    // 캠페인 재발신 정보 삭제 api 호출
    const { mutate: fetchAutoRedialDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedialDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedialDelete"])({
        onSuccess: {
            "RebroadcastSettingsPanel.useApiForAutoRedialDelete": (data)=>{
                const updatedList = rebroadcastList.filter({
                    "RebroadcastSettingsPanel.useApiForAutoRedialDelete.updatedList": (item)=>item.id !== selectedRebroadcastId
                }["RebroadcastSettingsPanel.useApiForAutoRedialDelete.updatedList"]);
                setRebroadcastList(updatedList);
                setSelectedRebroadcastId(null);
                if (updatedList.length === 0) {
                    resetAllStates();
                }
            }
        }["RebroadcastSettingsPanel.useApiForAutoRedialDelete"],
        onError: {
            "RebroadcastSettingsPanel.useApiForAutoRedialDelete": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForAutoRedialDelete": ()=>goLogin()
                        }["RebroadcastSettingsPanel.useApiForAutoRedialDelete"]
                    });
                }
            }
        }["RebroadcastSettingsPanel.useApiForAutoRedialDelete"]
    });
    //캠페인 정보 수정 api 호출
    const { mutate: fetchCampaignManagerUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerUpdate"])({
        onSuccess: {
            "RebroadcastSettingsPanel.useApiForCampaignManagerUpdate": (data)=>{}
        }["RebroadcastSettingsPanel.useApiForCampaignManagerUpdate"],
        onError: {
            "RebroadcastSettingsPanel.useApiForCampaignManagerUpdate": (data)=>{}
        }["RebroadcastSettingsPanel.useApiForCampaignManagerUpdate"]
    });
    //캠페인 재발신 추출 api 호출.
    const { mutate: fetchCampaignCurrentRedial } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignCurrentRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignCurrentRedial"])({
        onSuccess: {
            "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (data)=>{
                if (data.result_code != 0) {
                    let _message = '';
                    if (data.reason_code === -2) {
                        _message = '[-2]재발신 추출 에러';
                    } else if (data.reason_code === -1) {
                        _message = '[-1]실시간 재발신 요청을 실패 하였습니다. \n서버의 상태를 확인 후 다시 시도하여 주십시오.';
                    } else if (data.reason_code === -3) {
                        _message = '[-3]상담사과 고객이 통화 중이라 캠페인 통계가 완료되지 않았습니다. \n잠시만 기다려주세요.';
                    }
                    fetchCampaignManagerUpdate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdataCampaignInfo"])(campaigns, Number(campaignId), 2));
                    setAlertState({
                        isOpen: true,
                        message: _message,
                        title: '리스트 오류',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"])
                        }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"],
                        onCancle: {
                            "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"])
                        }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"]
                    });
                } else {
                    setAlertState({
                        isOpen: true,
                        message: '재발신 적용 완료했습니다.',
                        title: '재발신',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"])
                        }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"],
                        onCancle: {
                            "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"])
                        }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"]
                    });
                }
            }
        }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"],
        onError: {
            "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (data)=>{
                setAlertState({
                    isOpen: true,
                    message: data.message,
                    title: '리스트 오류',
                    type: '2',
                    onClose: {
                        "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": ()=>setAlertState({
                                "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (prev)=>({
                                        ...prev,
                                        isOpen: false
                                    })
                            }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"])
                    }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"],
                    onCancle: {
                        "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": ()=>setAlertState({
                                "RebroadcastSettingsPanel.useApiForCampaignCurrentRedial": (prev)=>({
                                        ...prev,
                                        isOpen: false
                                    })
                            }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"])
                    }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"]
                });
                fetchCampaignManagerUpdate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdataCampaignInfo"])(campaigns, Number(campaignId), 2));
            }
        }["RebroadcastSettingsPanel.useApiForCampaignCurrentRedial"]
    });
    // 캠페인 재발신 미리보기 api 호출
    const { mutate: fetchCampaignRedialPreviewSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignRedialPreviewSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignRedialPreviewSearch"])({
        onSuccess: {
            "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (data)=>{
                if (caseType === 1) {
                    setAlertState({
                        isOpen: true,
                        message: `선택된 재발신 조건에 해당되는 리스트 수 : ${data.result_data.redial_count}`,
                        title: '리스트 건수 확인',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                        }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"],
                        onCancle: {
                            "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                        }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
                    });
                } else if (caseType === 2) {
                    if (data.result_data.redial_count > 0) {
                        // setAlertState({
                        //     isOpen: true,
                        //     message: `캠페인 아이디 : ${campaignIdForUpdateFromSideMenu} \n캠페인을 바로 시작하시겠습니까?`,
                        //     title: '재발신 적용',
                        //     type: '1',
                        //     onClose: handleCampaignCurrentRedial,
                        //     onCancle: () => setAlertState(prev => ({ ...prev, isOpen: false }))
                        // });          
                        setAlertState({
                            isOpen: true,
                            message: `현재 발신가능한 리스트가 남아있습니다. \n 그래도 재설정 하시겠습니까?`,
                            title: '재발신 설정 경고',
                            type: '1',
                            onClose: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>{
                                    setAlertState({
                                        isOpen: true,
                                        message: `캠페인 아이디 : ${campaignId} \n캠페인을 바로 시작하시겠습니까?`,
                                        title: '재발신 적용',
                                        type: '1',
                                        onClose: handleCampaignCurrentRedial,
                                        onCancle: {
                                            "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                                    "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                            ...prev,
                                                            isOpen: false
                                                        })
                                                }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                                        }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
                                    });
                                }
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"],
                            onCancle: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                        "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
                        });
                    } else {
                        setAlertState({
                            isOpen: true,
                            message: '적용할 건수가 없습니다.',
                            title: '리스트 건수 확인',
                            type: '2',
                            onClose: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                        "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"],
                            onCancle: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                        "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
                        });
                    }
                }
            }
        }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"],
        onError: {
            "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>goLogin()
                        }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
                    });
                } else {
                    if (caseType === 1) {
                        setAlertState({
                            isOpen: true,
                            message: '선택된 재발신 조건에 해당되는 리스트 수 : 0',
                            title: '리스트 건수 확인',
                            type: '2',
                            onClose: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                        "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"],
                            onCancle: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                        "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
                        });
                    } else if (caseType === 2) {
                        setAlertState({
                            isOpen: true,
                            message: '적용할 건수가 없습니다.',
                            title: '리스트 건수 확인',
                            type: '2',
                            onClose: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                        "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"],
                            onCancle: {
                                "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": ()=>setAlertState({
                                        "RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch": (prev)=>({
                                                ...prev,
                                                isOpen: false
                                            })
                                    }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"])
                            }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
                        });
                    }
                }
            }
        }["RebroadcastSettingsPanel.useApiForCampaignRedialPreviewSearch"]
    });
    //캠페인 상태 변경 api 호출
    const { mutate: fetchCampaignStatusUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignStatusUpdate"])({
        onSuccess: {
            "RebroadcastSettingsPanel.useApiForCampaignStatusUpdate": (data)=>{
                if (data.result_code === 0 || data.result_code === -13) {
                    fetchCampaignCurrentRedial({
                        campaign_id: Number(campaignId),
                        condition: MakeRedialPacket()
                    });
                } else {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCampaignSaveReturnCode"])(data.reason_code),
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForCampaignStatusUpdate": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignStatusUpdate": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignStatusUpdate"])
                        }["RebroadcastSettingsPanel.useApiForCampaignStatusUpdate"],
                        onCancle: {
                            "RebroadcastSettingsPanel.useApiForCampaignStatusUpdate": ()=>setAlertState({
                                    "RebroadcastSettingsPanel.useApiForCampaignStatusUpdate": (prev)=>({
                                            ...prev,
                                            isOpen: false
                                        })
                                }["RebroadcastSettingsPanel.useApiForCampaignStatusUpdate"])
                        }["RebroadcastSettingsPanel.useApiForCampaignStatusUpdate"]
                    });
                }
            }
        }["RebroadcastSettingsPanel.useApiForCampaignStatusUpdate"],
        onError: {
            "RebroadcastSettingsPanel.useApiForCampaignStatusUpdate": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "RebroadcastSettingsPanel.useApiForCampaignStatusUpdate": ()=>goLogin()
                        }["RebroadcastSettingsPanel.useApiForCampaignStatusUpdate"]
                    });
                }
            }
        }["RebroadcastSettingsPanel.useApiForCampaignStatusUpdate"]
    });
    //캠페인 실시간 적용 이벤트.  
    const handleCampaignCurrentRedial = ()=>{
        // fetchCampaignCurrentRedial({
        //     campaign_id: Number(campaignIdForUpdateFromSideMenu),
        //     condition: MakeRedialPacket()
        // });
        const tempCampaign = campaigns.filter((data)=>data.campaign_id === Number(campaignId))[0];
        if (tempCampaign.start_flag === 1) {
            fetchCampaignCurrentRedial({
                campaign_id: Number(campaignId),
                condition: MakeRedialPacket()
            });
        } else {
            fetchCampaignStatusUpdate({
                campaign_id: Number(campaignId),
                campaign_status: 1
            });
        }
    };
    //실시간 리스트 건수 확인 버튼 클릭 이벤트.
    const handleCheckListCount = async ()=>{
        setCaseType(1);
        fetchCampaignRedialPreviewSearch({
            campaign_id: Number(campaignId),
            condition: MakeRedialPacket()
        });
    };
    //최초 캠페인 재발신 정보 리스트 조회 실행.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RebroadcastSettingsPanel.useEffect": ()=>{
            if (activeTabId === 20) {
                const tempData = openedTabs.filter({
                    "RebroadcastSettingsPanel.useEffect.tempData": (tab)=>tab.id === 20
                }["RebroadcastSettingsPanel.useEffect.tempData"]);
                if (tempData.length > 0 && tempData[0].campaignId && tempData[0].campaignName) {
                    const _campaignId = Number(tempData[0].campaignId);
                    setCampaignId(_campaignId);
                    setSettings({
                        "RebroadcastSettingsPanel.useEffect": (prev)=>({
                                ...prev,
                                campaignId: _campaignId + ''
                            })
                    }["RebroadcastSettingsPanel.useEffect"]);
                    const campaign = campaigns.find({
                        "RebroadcastSettingsPanel.useEffect.campaign": (data)=>_campaignId === data.campaign_id
                    }["RebroadcastSettingsPanel.useEffect.campaign"]);
                    if (campaign) {
                        setListRedialQuery(campaign.list_redial_query);
                    }
                    //버튼 설정.                    
                    setReservationShouldShowAdd(true);
                    setReservationShouldShowDelete(true);
                    fetchCampaignAutoRedials({
                        session_key: '',
                        tenant_id: 0
                    });
                }
            }
        }
    }["RebroadcastSettingsPanel.useEffect"], [
        activeTabId,
        openedTabs,
        campaigns
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "limit-width",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$RebroadcastSettingsPanel$2f$RebroadcastSettingsPanelHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        campaignId: campaignId + '',
                        reservationShouldShowApply: reservationShouldShowApply,
                        reservationShouldShowAdd: reservationShouldShowAdd,
                        reservationShouldShowDelete: reservationShouldShowDelete,
                        handleBroadcastTypeChange: handleBroadcastTypeChange,
                        handleAddRebroadcast: handleAddRebroadcast,
                        handleRemoveRebroadcast: handleRemoveRebroadcast,
                        handleApplyRebroadcast: handleApplyRebroadcast,
                        handleCheckListCount: handleCheckListCount,
                        textType: textType,
                        selectedRebroadcastId: selectedRebroadcastId
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                        lineNumber: 1002,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-5 h-[580px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 w-1/3 flex flex-col gap-5 ${broadcastType === "realtime" ? "opacity-50 pointer-events-none" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "스케줄 재발신 설정"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border p-2 rounded flex flex-col gap-2 py-[20px] px-[30px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "w-20 min-w-20",
                                                                children: "시작날짜"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1021,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                                onChange: handleDateChange,
                                                                value: startDate,
                                                                format: "yyyy-MM-dd",
                                                                className: "w-full custom-calendar",
                                                                calendarIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "mr-2 h-4 w-4",
                                                                    color: "#989898"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                    lineNumber: 1027,
                                                                    columnNumber: 55
                                                                }, void 0),
                                                                clearIcon: null,
                                                                dayPlaceholder: "dd",
                                                                monthPlaceholder: "mm",
                                                                yearPlaceholder: "yyyy",
                                                                disabled: textType !== '재발신 추가중'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1022,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1020,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "w-20 min-w-20",
                                                                children: "시작시간"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                                className: "w-full",
                                                                type: "text",
                                                                value: startTime,
                                                                onChange: handleTimeChange,
                                                                maxLength: 4,
                                                                placeholder: "0000",
                                                                disabled: textType !== '재발신 추가중'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1035,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "예약 재발신 목록"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border p-2 rounded h-[400px] py-[20px] px-[20px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-2",
                                                    children: broadcastType === 'reservation' ? rebroadcastList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            onClick: ()=>handleSelectRebroadcast(item.id),
                                                            className: `text-sm cursor-pointer p-[5px] ${selectedRebroadcastId === item.id ? 'bg-[#FFFAEE]' : item.isDummy ? 'bg-[#F0F0F0]' : 'hover:bg-[#FFFAEE]'}`,
                                                            children: [
                                                                `${index + 1}번째 재발신`,
                                                                item.isDummy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500 ml-2",
                                                                    children: "(추가 중)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                    lineNumber: 1066,
                                                                    columnNumber: 66
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                            lineNumber: 1055,
                                                            columnNumber: 45
                                                        }, this)) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                    lineNumber: 1052,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1051,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                lineNumber: 1016,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-1/3 flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                id: "outgoing-result",
                                                checked: outgoingResultChecked,
                                                onCheckedChange: (checked)=>setOutgoingResultChecked(checked),
                                                disabled: outgoingResultDisabled
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1076,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "outgoing-result",
                                                className: "text-sm",
                                                children: "발신결과"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1082,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                        lineNumber: 1075,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `border p-2 rounded py-[20px] px-[20px] flex flex-col gap-2 ${!outgoingResultChecked ? "opacity-50 pointer-events-none" : ""}`,
                                        style: {
                                            height: "calc(100% - 29px)"
                                        },
                                        children: Object.keys(selectedOutgoingResults).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                        id: key,
                                                        checked: selectedOutgoingResults[key],
                                                        onCheckedChange: (checked)=>handleOutgoingResultChange(key, checked),
                                                        disabled: !outgoingResultChecked
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: key,
                                                        className: "text-sm",
                                                        children: getOutgoingResultLabel(key)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1088,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                        lineNumber: 1086,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                lineNumber: 1074,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-1/3 flex flex-col gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2 h-[40%]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                        id: "outgoing-type",
                                                        checked: outgoingTypeChecked,
                                                        onCheckedChange: (checked)=>setOutgoingTypeChecked(checked),
                                                        disabled: outgoingResultDisabled
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1105,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "outgoing-type",
                                                        className: "text-sm",
                                                        children: "발신구분"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1111,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1104,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `border p-2 rounded py-[20px] px-[20px] flex flex-col gap-6 ${!outgoingTypeChecked ? "opacity-50 pointer-events-none" : ""}`,
                                                style: {
                                                    height: "calc(100% - 29px)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        children: "재콜 구분을 선택합니다."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1120,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadio"], {
                                                        defaultValue: "not-sent",
                                                        className: "flex gap-5 flex-col",
                                                        disabled: !outgoingTypeChecked,
                                                        value: callType,
                                                        onValueChange: setCallType,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                        value: "not-sent",
                                                                        id: "not-sent",
                                                                        disabled: !outgoingTypeChecked
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1129,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: "not-sent",
                                                                        children: "발신되지 않은 예약콜"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1130,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1128,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                        value: "sent",
                                                                        id: "sent",
                                                                        disabled: !outgoingTypeChecked
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1133,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: "sent",
                                                                        children: "발신되어진 예약콜"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1134,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1132,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1121,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1119,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                        lineNumber: 1103,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2 h-[60%]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                        id: "outgoing-time",
                                                        checked: outgoingTimeChecked,
                                                        onCheckedChange: (checked)=>setOutgoingTimeChecked(checked),
                                                        disabled: outgoingResultDisabled
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "outgoing-time",
                                                        className: "text-sm",
                                                        children: "발신시간"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1147,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1140,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `border p-2 rounded py-[20px] px-[20px] flex flex-col gap-6 ${!outgoingTimeChecked ? "opacity-50 pointer-events-none" : ""}`,
                                                style: {
                                                    height: "calc(100% - 29px)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadio"], {
                                                        defaultValue: "final-call-date",
                                                        className: "flex gap-5",
                                                        disabled: !outgoingTimeChecked,
                                                        value: timeType,
                                                        onValueChange: setTimeType,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                        value: "final-call-date",
                                                                        id: "final-call-date",
                                                                        disabled: !outgoingTimeChecked
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1160,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: "final-call-date",
                                                                        children: "최종 발신 날짜"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1161,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1159,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                        value: "recall-date",
                                                                        id: "recall-date",
                                                                        disabled: !outgoingTimeChecked
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1164,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        htmlFor: "recall-date",
                                                                        children: "재콜 예약 날짜"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1165,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1163,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1152,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "w-20 min-w-20",
                                                                        children: "시작날짜"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1170,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                                        onChange: handleDateChange,
                                                                        disabled: !outgoingTimeChecked,
                                                                        value: startDate,
                                                                        format: "yyyy-MM-dd",
                                                                        className: "w-full custom-calendar",
                                                                        calendarIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "mr-2 h-4 w-4",
                                                                            color: "#989898"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                            lineNumber: 1177,
                                                                            columnNumber: 59
                                                                        }, void 0),
                                                                        clearIcon: null,
                                                                        dayPlaceholder: "dd",
                                                                        monthPlaceholder: "mm",
                                                                        yearPlaceholder: "yyyy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1171,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1169,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        className: "w-20 min-w-20",
                                                                        children: "종료날짜"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1185,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$picker$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                                        onChange: handleEndDateChange,
                                                                        disabled: !outgoingTimeChecked,
                                                                        value: endDate,
                                                                        format: "yyyy-MM-dd",
                                                                        className: "w-full custom-calendar",
                                                                        calendarIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "mr-2 h-4 w-4",
                                                                            color: "#989898"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                            lineNumber: 1192,
                                                                            columnNumber: 59
                                                                        }, void 0),
                                                                        clearIcon: null,
                                                                        dayPlaceholder: "dd",
                                                                        monthPlaceholder: "mm",
                                                                        yearPlaceholder: "yyyy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                        lineNumber: 1186,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                        lineNumber: 1168,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                                lineNumber: 1151,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                        lineNumber: 1139,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                                lineNumber: 1102,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                        lineNumber: 1015,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                lineNumber: 1001,
                columnNumber: 13
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
                fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
                lineNumber: 1205,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/RebroadcastSettingsPanel/index.tsx",
        lineNumber: 1000,
        columnNumber: 9
    }, this);
};
_s(RebroadcastSettingsPanel, "D9T7vA5ljC3XPb8JUMT3BghxfdE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedial"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignAutoRedialInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAutoRedialInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForAutoRedialDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForAutoRedialDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignCurrentRedial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignCurrentRedial"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rebroadcastSettingsPanel$2f$hooks$2f$useApiForCampaignRedialPreviewSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignRedialPreviewSearch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignStatusUpdate"]
    ];
});
_c = RebroadcastSettingsPanel;
const __TURBOPACK__default__export__ = RebroadcastSettingsPanel;
var _c;
__turbopack_refresh__.register(_c, "RebroadcastSettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_main_comp_RebroadcastSettingsPanel_ae9893._.js.map