(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_widgets_sidebar_pannels_0c17ec._.js", {

"[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CampaignDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src\widgets\sidebar\pannels\CampaignCloneDetail.tsx
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/hooks/useApiForMain.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CallingNumberPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CallingNumberPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignManagerInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignScheduleInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CreateCampaignFormPanel/variables/variablesForCreateCampaignForm.ts [app-client] (ecmascript)");
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
    dial_mode: 0,
    callback_kind: 0,
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
    dial_try_interval: 0,
    trunk_access_code: '',
    DDD_code: '',
    power_divert_queue: '',
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
function CampaignDetail() {
    _s();
    const [tempCampaignManagerInfo, setTempCampaignManagerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignManagerInfo);
    const [tempCampaignInfo, setTempCampaignsInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignInfo"]);
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
    const [tempCampaignId, setTempCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { tenants, setCampaigns, campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { removeTab, activeTabId, activeTabKey, campaignIdForCopyCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { callingNumbers, campaignSkills, schedules, setCampaignSkills, setSchedules, setCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [inputSkills, setInputSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputCallingNumber, setInputCallingNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCampaign, setSelectedCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignInfo"]);
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
    const { id, menu_role_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    //캠페인 정보 최초 세팅 
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignDetail.useEffect": ()=>{
            if (selectedCampaign !== null) {
                setTempCampaignsInfo({
                    ...tempCampaignInfo,
                    campaign_id: 0,
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
                    redial_strategy: selectedCampaign.redial_strategy,
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
                    campaign_id: 0,
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
                    ...CampaignManagerInfo,
                    campaign_id: 0,
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
                if (schedules && schedules.length > 0) {
                    const tempCampaignSchedule = schedules.filter({
                        "CampaignDetail.useEffect.tempCampaignSchedule": (schedule)=>schedule.campaign_id === selectedCampaign?.campaign_id
                    }["CampaignDetail.useEffect.tempCampaignSchedule"]);
                    if (tempCampaignSchedule.length > 0) {
                        setTempCampaignSchedule({
                            ...tempCampaignSchedule[0],
                            campaign_id: 0,
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
                    }
                } else {
                    setTempCampaignSchedule({
                        ...tempCampaignSchedule,
                        campaign_id: 0,
                        tenant_id: selectedCampaign.tenant_id
                    });
                }
            }
        }
    }["CampaignDetail.useEffect"], [
        selectedCampaign,
        campaignSkills,
        callingNumbers,
        schedules
    ]);
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
                redial_strategy: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignInfo"].redial_strategy
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
            handleCampaignSave();
        }
        if (value.onClosed) {
            handleCampaignClosed();
        }
    };
    //캠페인 기타정보 탭 변경
    const handleAdditionalInfoTabChange = (value)=>{
        if (value.onSave) {
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
        removeTab(Number(activeTabId), activeTabKey + '');
    };
    //캠페인 저장
    const handleCampaignSave = ()=>{
        let saveErrorCheck = false;
        //2018.11.27 Gideon #23127 캠페인 수정창 연결 IVR 입력 예외 처리
        if (tempCampaignManagerInfo.dial_mode === 1 && (tempCampaignManagerInfo.token_id === 0 || tempCampaignManagerInfo.token_id === 3)) {
            if (tempCampaignManagerInfo.power_divert_queue === '0' || tempCampaignManagerInfo.power_divert_queue === '') {
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
        }
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
        if (!saveErrorCheck && tempCampaignManagerInfo.tenant_id < 0) {
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
    //캠페인 정보 수정 api 호출
    const { mutate: fetchCampaignManagerInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerInsert"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignManagerInsert": (data)=>{
                setTempCampaignId(data.result_data.campaign_id);
                const _tempCampaignSchedule = {
                    ...tempCampaignSchedule,
                    tenant_id: tempCampaignManagerInfo.tenant_id,
                    campaign_id: data.result_data.campaign_id
                };
                //캠페인 스케줄 수정 api 호출
                fetchCampaignScheduleInsert(_tempCampaignSchedule);
            }
        }["CampaignDetail.useApiForCampaignManagerInsert"],
        onError: {
            "CampaignDetail.useApiForCampaignManagerInsert": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "CampaignDetail.useApiForCampaignManagerInsert": ()=>goLogin()
                        }["CampaignDetail.useApiForCampaignManagerInsert"]
                    });
                }
            }
        }["CampaignDetail.useApiForCampaignManagerInsert"]
    });
    const goLogin = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
        router.push('/login');
    };
    //캠페인 스케줄 등록 api 호출
    const { mutate: fetchCampaignScheduleInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleInsert"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignScheduleInsert": (data)=>{
                if (tempCampaignSkills.skill_id[0] !== 0) {
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
        }["CampaignDetail.useApiForCampaignScheduleInsert"]
    });
    //캠페인 스킬 수정 api 호출
    const { mutate: fetchCampaignSkillUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"])({
        onSuccess: {
            "CampaignDetail.useApiForCampaignSkillUpdate": (data)=>{
                setCampaignSkillChangeYn(false);
            }
        }["CampaignDetail.useApiForCampaignSkillUpdate"]
    });
    //캠페인 발신번호 추가 api 호출
    const { mutate: fetchCallingNumberInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"])({
        onSuccess: {
            "CampaignDetail.useApiForCallingNumberInsert": (data)=>{
                setCallingNumberChangeYn(false);
            }
        }["CampaignDetail.useApiForCallingNumberInsert"]
    });
    //변경여부 체크
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignDetail.useEffect": ()=>{
            if (changeYn && !campaignInfoChangeYn && !campaignSkillChangeYn && !callingNumberChangeYn && !campaignDialSpeedChangeYn) {
                fetchMain({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }
    }["CampaignDetail.useEffect"], [
        campaignInfoChangeYn,
        campaignSkillChangeYn,
        callingNumberChangeYn,
        campaignDialSpeedChangeYn
    ]);
    //캠페인 정보 조회 api 호출
    const { mutate: fetchMain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"])({
        onSuccess: {
            "CampaignDetail.useApiForMain": (data)=>{
                setCampaigns(data.result_data);
                setSelectedCampaign(data.result_data.filter({
                    "CampaignDetail.useApiForMain": (campaign)=>campaign.campaign_id === tempCampaignId
                }["CampaignDetail.useApiForMain"])[0]);
                setTempCampaignsInfo(data.result_data.filter({
                    "CampaignDetail.useApiForMain": (campaign)=>campaign.campaign_id === tempCampaignId
                }["CampaignDetail.useApiForMain"])[0]);
                // setChangeYn(false);
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: '작업이 완료되었습니다.',
                    type: '2',
                    onClose: handleClose
                });
            }
        }["CampaignDetail.useApiForMain"]
    });
    const handleClose = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
        removeTab(Number(activeTabId), activeTabKey + '');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignDetail.useEffect": ()=>{
            if (campaigns) {
                setSelectedCampaign(campaigns.filter({
                    "CampaignDetail.useEffect": (data)=>data.campaign_id === Number(campaignIdForCopyCampaign)
                }["CampaignDetail.useEffect"])[0]);
            }
        }
    }["CampaignDetail.useEffect"], [
        campaigns,
        campaignIdForCopyCampaign
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5 w-full overflow-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "border-b border-gray-300 pb-1",
                        title: "상세내역",
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
                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                        lineNumber: 957,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-x-4 gap-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                        children: "캠페인 아이디"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 967,
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
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 968,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                lineNumber: 966,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                        children: "테넌트"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 979,
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
                                                    fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                    lineNumber: 986,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                lineNumber: 985,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: tenants.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.tenant_id.toString(),
                                                        children: option.tenant_name
                                                    }, option.tenant_id, false, {
                                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                        lineNumber: 990,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                lineNumber: 988,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 980,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                lineNumber: 978,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                        children: "캠페인명"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 999,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: tempCampaignInfo.campaign_name || '',
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_name'),
                                        className: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                lineNumber: 998,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                        children: "다이얼 모드"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1008,
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
                                                    fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                    lineNumber: 1014,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: dialModeList.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: option.dial_id.toString(),
                                                        children: option.dial_name
                                                    }, option.dial_id, false, {
                                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                        lineNumber: 1018,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                lineNumber: 1007,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                        children: "스킬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: inputSkills,
                                        className: "w-full",
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1027,
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
                                            fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                lineNumber: 1025,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                        children: "발신번호"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: inputCallingNumber,
                                        className: "w-full",
                                        disabled: selectedCampaign !== null,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1047,
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
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1051,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                lineNumber: 1045,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-[5.6rem] min-w-[5.6rem]",
                                        children: "설명"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        value: tempCampaignInfo.campaign_desc || '',
                                        className: "w-full",
                                        onChange: (e)=>handleInputData(e.target.value, 'campaign_desc')
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                                lineNumber: 1061,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                        lineNumber: 965,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CampaignManager$2f$CampaignTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    campaignSchedule: tempCampaignSchedule,
                    callCampaignMenu: 'CampaignClone',
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
                    fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                    lineNumber: 1070,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                lineNumber: 1069,
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
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                lineNumber: 1085,
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
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                lineNumber: 1095,
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
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
                lineNumber: 1104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx",
        lineNumber: 955,
        columnNumber: 5
    }, this);
}
_s(CampaignDetail, "f9Xr9nOS7b+vXE7bxxf0xnPW6po=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"]
    ];
});
_c = CampaignDetail;
var _c;
__turbopack_refresh__.register(_c, "CampaignDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/pannels/CampaignClonePanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src\widgets\sidebar\pannels\CampaignClonePanel.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSchedules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSkills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumber.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForPhoneDescription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$pannels$2f$CampaignCloneDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/sidebar/pannels/CampaignCloneDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
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
const CampaignClonePanel = ({ campaignId })=>{
    _s();
    const { tenants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { campaignIdForCopyCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { setSchedules, setSkills, setCallingNumbers, setCampaignSkills, setPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    // 스케줄 조회
    const { mutate: fetchSchedules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"])({
        onSuccess: {
            "CampaignClonePanel.useApiForSchedules": (data)=>{
                setSchedules(data.result_data);
                const tempTenantIdArray = tenants.map({
                    "CampaignClonePanel.useApiForSchedules.tempTenantIdArray": (tenant)=>tenant.tenant_id
                }["CampaignClonePanel.useApiForSchedules.tempTenantIdArray"]);
                fetchSkills({
                    tenant_id_array: tempTenantIdArray
                });
            }
        }["CampaignClonePanel.useApiForSchedules"]
    });
    // 스킬 조회
    const { mutate: fetchSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"])({
        onSuccess: {
            "CampaignClonePanel.useApiForSkills": (data)=>{
                setSkills(data.result_data);
                fetchCallingNumbers({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }["CampaignClonePanel.useApiForSkills"]
    });
    // 전화번호 조회
    const { mutate: fetchCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"])({
        onSuccess: {
            "CampaignClonePanel.useApiForCallingNumber": (data)=>{
                setCallingNumbers(data.result_data || []);
                fetchCampaignSkills({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }["CampaignClonePanel.useApiForCallingNumber"]
    });
    // 캠페인스킬 조회
    const { mutate: fetchCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onSuccess: {
            "CampaignClonePanel.useApiForCampaignSkill": (data)=>{
                setCampaignSkills(data.result_data);
                fetchPhoneDescriptions({
                    session_key: '',
                    tenant_id: 0
                });
            }
        }["CampaignClonePanel.useApiForCampaignSkill"]
    });
    // 전화번호설명 템플릿 조회
    const { mutate: fetchPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"])({
        onSuccess: {
            "CampaignClonePanel.useApiForPhoneDescription": (data)=>{
                setPhoneDescriptions(data.result_data || []);
            }
        }["CampaignClonePanel.useApiForPhoneDescription"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignClonePanel.useEffect": ()=>{
            if (tenants) {
                const tempTenantIdArray = tenants.map({
                    "CampaignClonePanel.useEffect.tempTenantIdArray": (tenant)=>tenant.tenant_id
                }["CampaignClonePanel.useEffect.tempTenantIdArray"]);
                fetchSchedules({
                    tenant_id_array: tempTenantIdArray
                });
            }
        }
    }["CampaignClonePanel.useEffect"], [
        tenants
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 limit-width",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$pannels$2f$CampaignCloneDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/widgets/sidebar/pannels/CampaignClonePanel.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignClonePanel.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/widgets/sidebar/pannels/CampaignClonePanel.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/widgets/sidebar/pannels/CampaignClonePanel.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
};
_s(CampaignClonePanel, "3fTPy8YXiLLLUi8vhWFUAmXJ+rE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSchedules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSchedules"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"]
    ];
});
_c = CampaignClonePanel;
const __TURBOPACK__default__export__ = CampaignClonePanel;
var _c;
__turbopack_refresh__.register(_c, "CampaignClonePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignManagerDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignScheduleDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkillUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$api$2f$mainCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/api/mainCallingNumberDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$api$2f$mainReservedCallDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/api/mainReservedCallDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$storeForSideMenuCampaignGroupTab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/storeForSideMenuCampaignGroupTab.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/CreateCampaignFormPanel/variables/variablesForCreateCampaignForm.ts [app-client] (ecmascript)");
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
const campaignInfoDelete = {
    campaign_id: 0,
    tenant_id: 0,
    delete_dial_list: 1
};
const CampaignManagerInfo = {
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
    phone_dial_try1: 0,
    phone_dial_try2: 0,
    phone_dial_try3: 0,
    phone_dial_try4: 0,
    phone_dial_try5: 0,
    dial_try_interval: 0,
    trunk_access_code: '',
    DDD_code: '',
    power_divert_queue: '',
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
// export const CampaignInfo: MainDataResponse = {
//     campaign_id: 0,
//     campaign_name: '',
//     campaign_desc: '',
//     site_code: 0,
//     service_code: 0,
//     start_flag: 0,
//     end_flag: 0,
//     dial_mode: 0,
//     callback_kind: 0,
//     delete_flag: 0,
//     list_count: 0,
//     list_redial_query: '',
//     next_campaign: 0,
//     token_id: 0,
//     phone_order: '',
//     phone_dial_try: [],
//     dial_try_interval: 0,
//     trunk_access_code: '',
//     DDD_code: '',
//     power_divert_queue: 0,
//     max_ring: 0,
//     detect_mode: 0,
//     auto_dial_interval: 0,
//     creation_user: '',
//     creation_time: '',
//     creation_ip: '',
//     update_user: '',
//     update_time: '',
//     update_ip: '',
//     dial_phone_id: 0,
//     tenant_id: 0,
//     alarm_answer_count: 0,
//     dial_speed: 0,
//     parent_campaign: 0,
//     overdial_abandon_time: 0,
//     list_alarm_count: 0,
//     supervisor_phone: '',
//     reuse_count: 0,
//     use_counsel_result: 0,
//     use_list_alarm: 0,
//     redial_strategy: [
//         "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
//         "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
//         "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
//         "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0",
//         "7:2.1.0\/3.1.0\/4.1.0\/5.1.0\/6.1.0\/10.1.0\/99.1.0\/2501.1.0\/2502.1.0\/2503.1.0\/2504.1.0\/2505.1.0\/2506.1.0"
//     ],
//     dial_mode_option: 0,
//     user_option: '',
// }
const CampaignSkillInfo = {
    campaign_id: 0,
    skill_id: []
};
const CallingNumberInfo = {
    campaign_id: 0,
    calling_number: ''
};
const CampaignDeletePanel = ({ campaignId, campaignName })=>{
    _s();
    // 탭 스토어에서 필요한 함수 가져오기
    const { activeTabKey, closeAllTabs, rows } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { callingNumbers, campaignSkills, schedules, setCampaignSkills, setSchedules, setCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [campaignSkillChangeYn, setCampaignSkillChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 캠페인스킬 변경여부
    const [campaignInfoChangeYn, setCampaignInfoChangeYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // 캠페인정보 변경여부
    const [tempCampaignInfo, setTempCampaignsInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$CreateCampaignFormPanel$2f$variables$2f$variablesForCreateCampaignForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignInfo"]);
    const [tempCampaignSkills, setTempCampaignSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignSkillInfo);
    const [tempCallingNumberInfo, setTempCallingNumberInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CallingNumberInfo);
    const [tempCampaignManagerInfo, setTempCampaignManagerInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CampaignManagerInfo);
    const _tenantId = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('tenant_id'));
    const { updateCampaignStatus, refetchTreeDataForCampaignGroupTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$storeForSideMenuCampaignGroupTab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSideMenuCampaignGroupTabStore"])();
    //캠페인 스킬 수정 api 호출
    const { mutate: fetchCampaignSkillUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"])({
        onSuccess: {
            "CampaignDeletePanel.useApiForCampaignSkillUpdate": (data)=>{
                // fetchCampaignSkills({
                //   session_key: '',
                //   tenant_id: 0,
                // });      
                setCampaignSkillChangeYn(false);
            }
        }["CampaignDeletePanel.useApiForCampaignSkillUpdate"]
    });
    //캠페인 스킬 조회 api 호출
    const { mutate: fetchCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onSuccess: {
            "CampaignDeletePanel.useApiForCampaignSkill": (data)=>{
                setCampaignSkills(data.result_data);
                setCampaignSkillChangeYn(false);
            }
        }["CampaignDeletePanel.useApiForCampaignSkill"]
    });
    const { mutate: fetchCampaignScheduleDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleDelete"])({
        onSuccess: {
            "CampaignDeletePanel.useApiForCampaignScheduleDelete": (data)=>{
                // 3)스킬편집 -> 캠페인 소속 스킬 할당 해제
                const tempSkill = campaignSkills.filter({
                    "CampaignDeletePanel.useApiForCampaignScheduleDelete.tempSkill": (skill)=>skill.campaign_id === tempCampaignInfo.campaign_id
                }["CampaignDeletePanel.useApiForCampaignScheduleDelete.tempSkill"]).map({
                    "CampaignDeletePanel.useApiForCampaignScheduleDelete.tempSkill": (data)=>data.skill_id
                }["CampaignDeletePanel.useApiForCampaignScheduleDelete.tempSkill"]).join(',');
                if (tempSkill !== '') {
                    fetchCampaignSkillUpdate({
                        ...tempCampaignSkills,
                        skill_id: []
                    });
                }
                // 4)캠페인별 발신번호 설정 삭제
                const tempCallNumber = callingNumbers.filter({
                    "CampaignDeletePanel.useApiForCampaignScheduleDelete.tempCallNumber": (callingNumber)=>callingNumber.campaign_id === tempCampaignInfo.campaign_id
                }["CampaignDeletePanel.useApiForCampaignScheduleDelete.tempCallNumber"]).map({
                    "CampaignDeletePanel.useApiForCampaignScheduleDelete.tempCallNumber": (data)=>data.calling_number
                }["CampaignDeletePanel.useApiForCampaignScheduleDelete.tempCallNumber"]).join(',');
                if (tempCallNumber !== '') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$api$2f$mainCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCallingNumberDelete"])(tempCallingNumberInfo);
                }
                // 5)캠페인별 문자할당 삭제 : 기능 사용시 API 생성 예정
                // 6)채널 할당 - 캠페인 모드시, 캠페인이 할당되면 Assign 해제 -> 회선사용 안함으로 변경 : /pds/channel-group - 제외
                // 7)예약콜제한설정 삭제 
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$api$2f$mainReservedCallDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchReservedCallDelete"])({
                    ...campaignInfoDelete,
                    campaign_id: tempCampaignManagerInfo.campaign_id,
                    tenant_id: tempCampaignManagerInfo.tenant_id
                });
            }
        }["CampaignDeletePanel.useApiForCampaignScheduleDelete"]
    });
    const { mutate: fetchCampaignManagerDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerDelete"])({
        onSuccess: {
            "CampaignDeletePanel.useApiForCampaignManagerDelete": (data)=>{
                // 2)캠페인 스케줄 삭제
                fetchCampaignScheduleDelete({
                    ...campaignInfoDelete,
                    campaign_id: tempCampaignManagerInfo.campaign_id,
                    tenant_id: tempCampaignManagerInfo.tenant_id
                });
            // removeTab(Number(activeTabId),activeTabKey+'');
            }
        }["CampaignDeletePanel.useApiForCampaignManagerDelete"]
    });
    // 캠페인 삭제 API 훅 사용
    const { mutate: deleteCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerDelete"])({
        onSuccess: {
            "CampaignDeletePanel.useApiForCampaignManagerDelete": (data, variables, context)=>{
                console.log('캠페인 삭제 성공:', data);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('캠페인이 삭제되었습니다.');
                fetchCampaignScheduleDelete({
                    ...campaignInfoDelete,
                    campaign_id: tempCampaignManagerInfo.campaign_id,
                    tenant_id: tempCampaignManagerInfo.tenant_id
                });
                handleCloseTab();
            }
        }["CampaignDeletePanel.useApiForCampaignManagerDelete"],
        onError: {
            "CampaignDeletePanel.useApiForCampaignManagerDelete": (error, variables, context)=>{
                console.error('캠페인 삭제 실패:', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message || '캠페인 삭제에 실패했습니다.');
            // 에러 메시지 처리 추가 가능
            }
        }["CampaignDeletePanel.useApiForCampaignManagerDelete"]
    });
    // 삭제 처리 함수
    const handleDelete = ()=>{
        if (!campaignId) return;
        // 단일 API 요청으로 캠페인 삭제 호출
        deleteCampaign({
            campaign_id: Number(campaignId),
            tenant_id: _tenantId,
            delete_dial_list: 1
        });
        refetchTreeDataForCampaignGroupTab();
    };
    // 현재 탭이 포함된 행과 섹션 ID 찾기
    const findCurrentTabLocation = ()=>{
        for (const row of rows){
            for (const section of row.sections){
                if (section.tabs.some((tab)=>tab.uniqueKey === activeTabKey)) {
                    return {
                        rowId: row.id,
                        sectionId: section.id
                    };
                }
            }
        }
        return {
            rowId: 'row-1',
            sectionId: 'default'
        }; // 기본값
    };
    // 탭 닫기 함수
    const handleCloseTab = ()=>{
        const { rowId, sectionId } = findCurrentTabLocation();
        // 상태 업데이트를 비동기적으로 처리
        setTimeout(()=>{
            closeAllTabs(rowId, sectionId);
        }, 100);
    };
    // ESC 키 이벤트 처리
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignDeletePanel.useEffect": ()=>{
            const handleEscapeKey = {
                "CampaignDeletePanel.useEffect.handleEscapeKey": (event)=>{
                    if (event.key === 'Escape') {
                        handleCloseTab();
                    }
                }
            }["CampaignDeletePanel.useEffect.handleEscapeKey"];
            window.addEventListener('keydown', handleEscapeKey);
            return ({
                "CampaignDeletePanel.useEffect": ()=>{
                    window.removeEventListener('keydown', handleEscapeKey);
                }
            })["CampaignDeletePanel.useEffect"];
        }
    }["CampaignDeletePanel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/10",
                onClick: handleCloseTab
            }, void 0, false, {
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                lineNumber: 305,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-md shadow-lg w-full max-w-sm relative z-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#5DC2BD] px-4 py-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-medium text-white",
                            children: "캠페인 삭제"
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                            lineNumber: 314,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                        lineNumber: 313,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4",
                                        children: [
                                            "캠페인 아이디: ",
                                            campaignId,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                                lineNumber: 321,
                                                columnNumber: 51
                                            }, this),
                                            "캠페인 이름: ",
                                            campaignName || '',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                                lineNumber: 322,
                                                columnNumber: 58
                                            }, this),
                                            "삭제된 캠페인은 복구가 불가능합니다. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                                lineNumber: 323,
                                                columnNumber: 50
                                            }, this),
                                            "캠페인을 삭제하시겠습니까???????"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                        lineNumber: 320,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "이 작업은 되돌릴 수 없습니다."
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                        lineNumber: 326,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                lineNumber: 319,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center gap-2 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "destructive",
                                        onClick: handleDelete,
                                        size: "default",
                                        children: "삭제하기"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                        lineNumber: 332,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "outline",
                                        onClick: handleCloseTab,
                                        size: "default",
                                        children: "취소"
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                        lineNumber: 339,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                                lineNumber: 331,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
                lineNumber: 311,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/sidebar/pannels/CampaignDeletePanel.tsx",
        lineNumber: 303,
        columnNumber: 9
    }, this);
};
_s(CampaignDeletePanel, "vNabQolhtzkTuzJQLnRucF9VWMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$storeForSideMenuCampaignGroupTab$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSideMenuCampaignGroupTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignScheduleDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignScheduleDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerDelete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignManagerDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignManagerDelete"]
    ];
});
_c = CampaignDeletePanel;
const __TURBOPACK__default__export__ = CampaignDeletePanel;
var _c;
__turbopack_refresh__.register(_c, "CampaignDeletePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_widgets_sidebar_pannels_0c17ec._.js.map