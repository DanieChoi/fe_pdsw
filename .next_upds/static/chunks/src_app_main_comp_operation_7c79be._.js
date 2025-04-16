(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_main_comp_operation_7c79be._.js", {

"[project]/src/app/main/comp/operation/CampaignModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CampaignModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForSkills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumber.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
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
function CampaignModal({ isOpen, onClose, onSelect }) {
    _s();
    const { tenants, campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { campaignSkills, setCampaignSkills, callingNumbers, setCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [skills, setSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCampaign, setSelectedCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tenantId, setTenantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [campaignName, setCampaignName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dailMode, setDailMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [skill, setSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [callNumber, setCallNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tempSkills, setTempSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRows, setFilteredRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 발신번호
    const { mutate: fetchCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"])({
        onSuccess: {
            "CampaignModal.useApiForCallingNumber": (data)=>{
                setCallingNumbers(data.result_data || []);
            }
        }["CampaignModal.useApiForCallingNumber"]
    });
    // 검색 스킬
    const { mutate: fetchSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"])({
        onSuccess: {
            "CampaignModal.useApiForSkills": (data)=>{
                setSkills(data.result_data);
            }
        }["CampaignModal.useApiForSkills"]
    });
    // 그리드스킬 조회
    const { mutate: fetchCampaignSkills } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onSuccess: {
            "CampaignModal.useApiForCampaignSkill": (data)=>{
                setCampaignSkills(data.result_data);
            }
        }["CampaignModal.useApiForCampaignSkill"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignModal.useEffect": ()=>{
            fetchSkills({
                tenant_id_array: tenants.map({
                    "CampaignModal.useEffect": (t)=>t.tenant_id
                }["CampaignModal.useEffect"])
            });
            fetchCampaignSkills({
                session_key: '',
                tenant_id: 0
            });
            fetchCallingNumbers({
                session_key: '',
                tenant_id: 0
            });
        }
    }["CampaignModal.useEffect"], [
        tenants,
        fetchSkills,
        fetchCallingNumbers,
        fetchCampaignSkills
    ]);
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignModal.useMemo[columns]": ()=>[
                {
                    key: 'campaign_id',
                    name: '캠페인 아이디',
                    width: 150
                },
                {
                    key: 'campaign_name',
                    name: '캠페인 이름',
                    width: 244
                },
                {
                    key: 'tenant_name',
                    name: '테넌트',
                    width: 150
                },
                {
                    key: 'skills',
                    name: '스킬',
                    width: 200
                }
            ]
    }["CampaignModal.useMemo[columns]"], []);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignModal.useMemo[rows]": ()=>campaigns.map({
                "CampaignModal.useMemo[rows]": (campaign)=>{
                    const tenant = tenants.find({
                        "CampaignModal.useMemo[rows].tenant": (t)=>t.tenant_id === campaign.tenant_id
                    }["CampaignModal.useMemo[rows].tenant"]);
                    // 캠페인에 해당하는 스킬 ID 배열 찾기
                    const campaignSkill = campaignSkills.find({
                        "CampaignModal.useMemo[rows].campaignSkill": (c)=>c.campaign_id === campaign.campaign_id
                    }["CampaignModal.useMemo[rows].campaignSkill"]);
                    // 스킬 ID에 해당하는 스킬 이름 찾기
                    const skillNames = skills.filter({
                        "CampaignModal.useMemo[rows].skillNames": (skill)=>campaignSkill?.skill_id?.includes(skill.skill_id)
                    }["CampaignModal.useMemo[rows].skillNames"]).map({
                        "CampaignModal.useMemo[rows].skillNames": (skill)=>skill.skill_name
                    }["CampaignModal.useMemo[rows].skillNames"]).join(', ');
                    return {
                        campaign_id: campaign.campaign_id,
                        campaign_name: campaign.campaign_name,
                        tenant_name: tenant?.tenant_name || '',
                        skills: skillNames
                    };
                }
            }["CampaignModal.useMemo[rows]"])
    }["CampaignModal.useMemo[rows]"], [
        campaigns,
        tenants,
        skills,
        campaignSkills
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignModal.useEffect": ()=>{
            setFilteredRows(rows);
        }
    }["CampaignModal.useEffect"], [
        rows
    ]);
    const handleCellClick = ({ row })=>{
        const campaign = campaigns.find((c)=>c.campaign_id === row.campaign_id);
        if (campaign) {
            setSelectedCampaign(campaign);
        }
    };
    const handleConfirm = ()=>{
        if (selectedCampaign) {
            onSelect(selectedCampaign.campaign_id.toString(), selectedCampaign.campaign_name);
        }
        onClose();
    };
    const handleClose = ()=>{
        setSelectedCampaign(null);
        onSelect('', '');
        onClose();
    };
    const onHeaderSearch = ()=>{
        const param = {
            tenantId: tenantId === 'all' ? -1 : Number(tenantId),
            campaignName: campaignName,
            dailMode: dailMode === 'all' ? -1 : Number(dailMode),
            skill: skill === 'all' ? -1 : Number(skill),
            callNumber: callNumber
        };
        // Filter campaigns based on search parameters
        const filteredCampaigns = campaigns.filter((campaign)=>{
            // Tenant filter
            if (param.tenantId !== -1 && campaign.tenant_id !== param.tenantId) {
                return false;
            }
            // Campaign name filter
            if (param.campaignName && !campaign.campaign_name.toLowerCase().includes(param.campaignName.toLowerCase())) {
                return false;
            }
            // Dial mode filter
            if (param.dailMode !== -1 && campaign.dial_mode !== param.dailMode) {
                return false;
            }
            // Skill filter
            if (param.skill !== -1) {
                const campaignSkill = campaignSkills.find((c)=>c.campaign_id === campaign.campaign_id);
                if (!campaignSkill?.skill_id?.includes(param.skill)) {
                    return false;
                }
            }
            // Call number filter
            if (param.callNumber) {
                const campaignCallingNumber = callingNumbers.find((c)=>c.campaign_id === campaign.campaign_id)?.calling_number;
                if (!campaignCallingNumber?.toLowerCase().includes(param.callNumber.toLowerCase())) {
                    return false;
                }
            }
            return true;
        });
        setFilteredRows(filteredCampaigns.map((campaign)=>{
            const tenant = tenants.find((t)=>t.tenant_id === campaign.tenant_id);
            // 캠페인에 해당하는 스킬 ID 배열 찾기
            const campaignSkill = campaignSkills.find((c)=>c.campaign_id === campaign.campaign_id);
            // 스킬 ID에 해당하는 스킬 이름 찾기
            const skillNames = skills.filter((skill)=>campaignSkill?.skill_id?.includes(skill.skill_id)).map((skill)=>skill.skill_name).join(', ');
            return {
                campaign_id: campaign.campaign_id,
                campaign_name: campaign.campaign_name,
                tenant_name: tenant?.tenant_name || '',
                skills: skillNames
            };
        }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignModal.useEffect": ()=>{
            if (typeof tenantId != 'undefined') {
                if (tenantId === 'all') {
                    setTempSkills(skills);
                } else {
                    setTempSkills(skills.filter({
                        "CampaignModal.useEffect": (skill)=>skill.tenant_id === Number(tenantId)
                    }["CampaignModal.useEffect"]));
                }
            }
            setSkill('all');
        }
    }["CampaignModal.useEffect"], [
        tenantId,
        skills
    ]);
    const modalContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "조회조건",
                buttons: [
                    {
                        label: "적용",
                        onClick: onHeaderSearch
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-wrap flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-20 min-w-20",
                                        children: "테넌트"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[140px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: tenantId,
                                            onValueChange: setTenantId,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "w-[140px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "테넌트"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "전체"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 19
                                                        }, this),
                                                        tenants.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option.tenant_id + '',
                                                                children: option.tenant_name
                                                            }, option.tenant_id, false, {
                                                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-20 min-w-20",
                                        children: "캠페인이름"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: campaignName,
                                        onChange: (e)=>setCampaignName(e.target.value),
                                        className: "w-[140px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-20 min-w-20",
                                        children: "다이얼모드"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[140px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: dailMode,
                                            onValueChange: setDailMode,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "다이얼모드"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "전체"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 19
                                                        }, this),
                                                        dialModeList.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option.dial_id + '',
                                                                children: option.dial_name
                                                            }, option.dial_id, false, {
                                                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-20 min-w-20",
                                        children: "스킬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[140px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: skill,
                                            onValueChange: setSkill,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "w-[140px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "스킬"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "전체"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this),
                                                        tempSkills.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option.skill_id + '',
                                                                children: option.skill_name
                                                            }, option.skill_id, false, {
                                                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-20 min-w-20",
                                        children: "발신번호"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                        type: "text",
                                        value: callNumber,
                                        onChange: (e)=>setCallNumber(e.target.value),
                                        className: "w-[140px]",
                                        placeholder: "발신번호 입력"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "캠페인 검색목록",
                totalCount: filteredRows.length,
                className: "mt-[14px]"
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-custom-wrap h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    rows: filteredRows,
                    className: "grid-custom",
                    rowKeyGetter: (row)=>row.campaign_id,
                    onCellClick: handleCellClick,
                    selectedRows: selectedCampaign ? new Set([
                        selectedCampaign.campaign_id
                    ]) : new Set(),
                    rowClass: (row)=>selectedCampaign?.campaign_id === row.campaign_id ? 'bg-[#FFFAEE]' : '',
                    rowHeight: 26,
                    headerRowHeight: 26
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        title: "캠페인 조회",
        message: modalContent,
        type: "1",
        onClose: handleConfirm,
        onCancle: handleClose,
        width: "max-w-modal"
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/operation/CampaignModal.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
_s(CampaignModal, "6p4a0LAqXbnXbnKmHk0n7c+JN3k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForSkills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkills"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"]
    ];
});
_c = CampaignModal;
var _c;
__turbopack_refresh__.register(_c, "CampaignModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/CampaignModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumber.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCallingNumberDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$OnlyNumberInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/OnlyNumberInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
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
function CampaignLayout() {
    _s();
    const { tenant_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { campaigns, setSelectedCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { callingNumbers, setCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRow, setSelectedRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCampaignId, setSelectedCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCampaignName, setSelectedCampaignName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCallingNumber, setSelectedCallingNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isNewMode, setIsNewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '2',
        onConfirm: {
            "CampaignLayout.useState": ()=>{}
        }["CampaignLayout.useState"],
        onCancel: {
            "CampaignLayout.useState": ()=>{}
        }["CampaignLayout.useState"]
    });
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
    };
    // 발신번호 조회
    const { mutate: fetchCallingNumbers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"])({
        onSuccess: {
            "CampaignLayout.useApiForCallingNumber": (data)=>{
                // 데이터 유효성 검사 추가
                if (data && data.result_data && Array.isArray(data.result_data)) {
                    setCallingNumbers(data.result_data);
                } else {
                    // 빈 데이터나 잘못된 형식의 데이터가 왔을 때 빈 배열로 설정
                    setCallingNumbers([]);
                }
            }
        }["CampaignLayout.useApiForCallingNumber"],
        onError: {
            "CampaignLayout.useApiForCallingNumber": (data)=>{
                // 에러 발생 시 callingNumbers를 빈 배열로 설정
                setCallingNumbers([]);
                showAlert('발신번호 조회 중 오류가 발생했습니다: ' + data.message);
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignLayout.useApiForCallingNumber": ()=>{}
                        }["CampaignLayout.useApiForCallingNumber"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignLayout.useApiForCallingNumber": ()=>{
                            router.push('/login');
                        }
                    }["CampaignLayout.useApiForCallingNumber"], 1000);
                }
            }
        }["CampaignLayout.useApiForCallingNumber"]
    });
    //캠페인 발신번호 추가 api 호출
    const { mutate: fetchCallingNumberInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"])({
        onSuccess: {
            "CampaignLayout.useApiForCallingNumberInsert": (data)=>{
                fetchCallingNumbers({
                    session_key: '',
                    tenant_id: tenant_id
                });
                // 신규 모드 해제하고 선택 상태 유지
                setIsNewMode(false);
                showAlert('새로운 발신번호가 성공적으로 저장되었습니다.');
            }
        }["CampaignLayout.useApiForCallingNumberInsert"],
        onError: {
            "CampaignLayout.useApiForCallingNumberInsert": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignLayout.useApiForCallingNumberInsert": ()=>{}
                        }["CampaignLayout.useApiForCallingNumberInsert"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignLayout.useApiForCallingNumberInsert": ()=>{
                            router.push('/login');
                        }
                    }["CampaignLayout.useApiForCallingNumberInsert"], 1000);
                } else {
                    showAlert('발신번호 저장 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["CampaignLayout.useApiForCallingNumberInsert"]
    });
    // 발신번호 수정
    const { mutate: fetchCallingNumberUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberUpdate"])({
        onSuccess: {
            "CampaignLayout.useApiForCallingNumberUpdate": (data)=>{
                fetchCallingNumbers({
                    session_key: '',
                    tenant_id: tenant_id
                });
                // 신규 모드 해제하고 선택 상태 유지
                setIsNewMode(false);
                showAlert('발신번호가 성공적으로 수정되었습니다.');
            }
        }["CampaignLayout.useApiForCallingNumberUpdate"],
        onError: {
            "CampaignLayout.useApiForCallingNumberUpdate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignLayout.useApiForCallingNumberUpdate": ()=>{}
                        }["CampaignLayout.useApiForCallingNumberUpdate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignLayout.useApiForCallingNumberUpdate": ()=>{
                            router.push('/login');
                        }
                    }["CampaignLayout.useApiForCallingNumberUpdate"], 1000);
                } else {
                    showAlert('발신번호 수정 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["CampaignLayout.useApiForCallingNumberUpdate"]
    });
    // 발신번호 삭제
    const { mutate: fetchCallingNumberDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberDelete"])({
        onSuccess: {
            "CampaignLayout.useApiForCallingNumberDelete": (data)=>{
                fetchCallingNumbers({
                    session_key: '',
                    tenant_id: tenant_id
                });
            }
        }["CampaignLayout.useApiForCallingNumberDelete"],
        onError: {
            "CampaignLayout.useApiForCallingNumberDelete": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignLayout.useApiForCallingNumberDelete": ()=>{}
                        }["CampaignLayout.useApiForCallingNumberDelete"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignLayout.useApiForCallingNumberDelete": ()=>{
                            router.push('/login');
                        }
                    }["CampaignLayout.useApiForCallingNumberDelete"], 1000);
                } else {
                    showAlert('발신번호 수정 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["CampaignLayout.useApiForCallingNumberDelete"]
    });
    // 컴포넌트 마운트 시 발신번호 조회  ######
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignLayout.useEffect": ()=>{
            fetchCallingNumbers({
                session_key: '',
                tenant_id: tenant_id
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CampaignLayout.useEffect"], []);
    // 키보드 이벤트 리스너 추가
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignLayout.useEffect": ()=>{
            const handleKeyDown = {
                "CampaignLayout.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'ArrowDown') {
                        handleNew();
                    }
                }
            }["CampaignLayout.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "CampaignLayout.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["CampaignLayout.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CampaignLayout.useEffect"], []);
    // 목록 새로고침 후 현재 선택된 캠페인 정보를 유지하는 useEffect 추가
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignLayout.useEffect": ()=>{
            // callingNumbers가 업데이트되고 selectedCampaignId가 있을 때
            if (selectedCampaignId && !isNewMode) {
                const campaignIdNum = Number(selectedCampaignId);
                // 새로운 목록에서 현재 선택된 캠페인 찾기
                const updatedCallingNumber = callingNumbers.find({
                    "CampaignLayout.useEffect.updatedCallingNumber": (num)=>num.campaign_id === campaignIdNum
                }["CampaignLayout.useEffect.updatedCallingNumber"]);
                if (updatedCallingNumber) {
                    // 발신번호 업데이트
                    setSelectedCallingNumber(updatedCallingNumber.calling_number);
                    // 해당 행을 그리드에서 선택 상태로 유지
                    const campaign = campaigns.find({
                        "CampaignLayout.useEffect.campaign": (c)=>c.campaign_id === campaignIdNum
                    }["CampaignLayout.useEffect.campaign"]);
                    if (campaign) {
                        setSelectedRow({
                            ...campaign,
                            calling_number: updatedCallingNumber.calling_number
                        });
                    }
                }
            }
        }
    }["CampaignLayout.useEffect"], [
        callingNumbers,
        selectedCampaignId,
        isNewMode,
        campaigns
    ]);
    // 발신번호 업데이트 함수
    const updateCallingNumber = (campaignId)=>{
        const callingNumber = callingNumbers.find((num)=>num.campaign_id === campaignId);
        setSelectedCallingNumber(callingNumber?.calling_number || '');
    };
    // 그리드 열 정의
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignLayout.useMemo[columns]": ()=>[
                {
                    key: 'campaign_id',
                    name: '캠페인 아이디'
                },
                {
                    key: 'campaign_name',
                    name: '캠페인 이름'
                },
                {
                    key: 'calling_number',
                    name: '발신번호'
                }
            ]
    }["CampaignLayout.useMemo[columns]"], []);
    // 그리드 행 데이터 생성
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignLayout.useMemo[rows]": ()=>{
            // campaigns나 callingNumbers가 없거나 빈 배열인 경우 빈 배열 반환
            if (!campaigns || !Array.isArray(campaigns) || campaigns.length === 0) {
                return [];
            }
            // callingNumbers가 없는 경우 빈 발신번호로 처리
            const safeCallingNumbers = Array.isArray(callingNumbers) ? callingNumbers : [];
            return campaigns.map({
                "CampaignLayout.useMemo[rows]": (campaign)=>{
                    // campaign이 유효한지 확인
                    if (!campaign || typeof campaign !== 'object') return null;
                    // callingNumbers에서 캠페인 ID에 해당하는 발신번호 찾기
                    const callingNumber = safeCallingNumbers.find({
                        "CampaignLayout.useMemo[rows].callingNumber": (num)=>num && campaign && num.campaign_id === campaign.campaign_id
                    }["CampaignLayout.useMemo[rows].callingNumber"]);
                    return {
                        ...campaign,
                        calling_number: callingNumber?.calling_number || ''
                    };
                }
            }["CampaignLayout.useMemo[rows]"]).filter(Boolean) // null 값 제거
            .filter({
                "CampaignLayout.useMemo[rows]": (row)=>row !== null && row.calling_number !== ''
            }["CampaignLayout.useMemo[rows]"]) // 발신번호가 있는 행만 필터링
            .sort({
                "CampaignLayout.useMemo[rows]": (a, b)=>Number(a.campaign_id) - Number(b.campaign_id)
            }["CampaignLayout.useMemo[rows]"]); // #### 오름차순 정리를 위한 2차 sort    
        }
    }["CampaignLayout.useMemo[rows]"], [
        campaigns,
        callingNumbers
    ]);
    // 그리드 셀 클릭 핸들러
    const handleCellClick = (args)=>{
        setSelectedRow(args.row);
        setSelectedCampaign(args.row);
        setSelectedCampaignId(args.row.campaign_id.toString());
        setSelectedCampaignName(args.row.campaign_name);
        setSelectedCallingNumber(args.row.calling_number || '');
        setIsNewMode(false); // 그리드 선택 시 신규 모드 해제
    };
    const getRowClass = (row)=>{
        return selectedRow?.campaign_id === row.campaign_id ? 'bg-[#FFFAEE]' : '';
    };
    // 모달에서 캠페인 선택 시 호출되는 핸들러
    // 캠페인 아이디와 이름을 받아서 상태 업데이트 및 발신번호 조회
    const handleModalSelect = (campaignId, campaignName)=>{
        setSelectedCampaignId(campaignId);
        setSelectedCampaignName(campaignName);
        const campaignIdNum = Number(campaignId);
        updateCallingNumber(campaignIdNum);
        const campaign = campaigns.find((c)=>c.campaign_id === campaignIdNum);
        if (campaign) {
            const campaignWithCallingNumber = {
                ...campaign,
                calling_number: callingNumbers.find((num)=>num.campaign_id === campaign.campaign_id)?.calling_number || ''
            };
            setSelectedRow(campaignWithCallingNumber);
            setSelectedCampaign(campaign);
        }
    };
    // 발신번호 저장 버튼 핸들러
    const handleSave = ()=>{
        if (!selectedCampaignId) {
            showAlert('대상캠페인을 선택해주세요.');
            return;
        }
        if (!selectedCallingNumber || selectedCallingNumber.trim().length === 0) {
            showAlert('발신번호를 입력해주세요.');
            return;
        }
        const isNumber = /^[0-9]+$/.test(selectedCallingNumber);
        if (!isNumber) {
            showAlert('발신번호는 숫자로만 입력해주세요.');
            return;
        }
        // 발신번호가 이미 존재하는지 확인
        const existingCallingNumber = callingNumbers.find((num)=>num.campaign_id === Number(selectedCampaignId));
        const saveRequest = {
            campaign_id: Number(selectedCampaignId),
            calling_number: selectedCallingNumber
        };
        if (existingCallingNumber) {
            fetchCallingNumberUpdate(saveRequest);
        // showAlert은 mutate의 onSuccess에서 처리
        } else {
            fetchCallingNumberInsert(saveRequest);
        // showAlert은 mutate의 onSuccess에서 처리
        }
    };
    const handleDelete = ()=>{
        // 선택된 캠페인이 없을 경우 알림
        if (!selectedCampaignId || selectedCampaignId.trim() === '') {
            showAlert('삭제할 발신번호의 캠페인을 먼저 선택해주세요.');
            return;
        }
        // 발신번호가 없는 경우 알림
        if (!selectedCallingNumber || selectedCallingNumber.trim() === '') {
            showAlert('선택한 캠페인에 등록된 발신번호가 없습니다.');
            return;
        }
        // 삭제 확인 알림
        showConfirm(`선택된 캠페인 [${selectedCampaignName}]의 발신번호를 삭제하시겠습니까? \n\n ※주의: 삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해 주세요.`, ()=>{
            // 확인 버튼 클릭 시 실행될 함수
            fetchCallingNumberDelete({
                campaign_id: Number(selectedCampaignId),
                calling_number: selectedCallingNumber
            }, {
                onSuccess: (data)=>{
                    showAlert('발신번호가 성공적으로 삭제되었습니다.');
                    // 삭제 후 데이터 초기화
                    setSelectedRow(null);
                    setSelectedCampaign(null);
                    setSelectedCampaignId('');
                    setSelectedCampaignName('');
                    setSelectedCallingNumber('');
                    setIsNewMode(true); // 삭제 후 신규 모드로 변경
                }
            });
        });
    };
    // 신규 버튼 핸들러
    const handleNew = ()=>{
        setSelectedRow(null);
        setSelectedCampaign(null);
        setSelectedCampaignId('');
        setSelectedCampaignName('');
        setSelectedCallingNumber('');
        setIsNewMode(true); // 신규 모드 활성화
    };
    // 필드 비활성화 여부를 결정하는 함수
    const isCampaignFieldDisabled = ()=>{
        // 신규 모드가 아니면 캠페인 필드 비활성화
        return !isNewMode;
    };
    const isCallingNumberDisabled = ()=>{
        // 캠페인이 선택되지 않았으면 발신번호 필드 비활성화
        return !selectedCampaignId;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[580px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-custom-wrap h-[230px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        columns: columns,
                        rows: rows,
                        className: "grid-custom",
                        onCellClick: handleCellClick,
                        rowKeyGetter: (row)=>row.campaign_id,
                        selectedRows: selectedRow ? new Set([
                            selectedRow.campaign_id
                        ]) : new Set(),
                        rowHeight: 30,
                        headerRowHeight: 30,
                        rowClass: getRowClass,
                        enableVirtualization: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                        lineNumber: 440,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[513px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "대상캠페인"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: selectedCampaignId,
                                    readOnly: true,
                                    disabled: isCampaignFieldDisabled(),
                                    className: "w-[140px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setIsModalOpen(true),
                                    children: "캠페인조회"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: selectedCampaignName,
                                    readOnly: true,
                                    disabled: isCampaignFieldDisabled(),
                                    className: ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "발신번호"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 486,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$OnlyNumberInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "text",
                                    value: selectedCallingNumber,
                                    onChange: (e)=>setSelectedCallingNumber(e.target.value),
                                    disabled: isCallingNumberDisabled(),
                                    className: ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleNew,
                                    children: "신규"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleSave,
                                    children: "저장"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleDelete,
                                    children: "삭제"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                            lineNumber: 497,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-[20px] text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• 멤버십 별로 발신번호를 설정할 수 있습니다."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• 발신번호를 설정하시려면 그리드에서 키보드 ↓를 누르거나 신규 버튼을 클릭해 주세요."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-[20px]",
                                    children: "※ 변경된 정보는 캠페인의 발신 작업이 재시작 시 반영됩니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onSelect: handleModalSelect
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: alertState.isOpen,
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                onClose: alertState.onConfirm,
                onCancle: alertState.onCancel
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx",
        lineNumber: 436,
        columnNumber: 5
    }, this);
}
_s(CampaignLayout, "+mtLj/pAFDLoHVqHDL8W+zEKxzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumber$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumber"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCallingNumberDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingNumberDelete"]
    ];
});
_c = CampaignLayout;
const __TURBOPACK__default__export__ = CampaignLayout;
var _c;
__turbopack_refresh__.register(_c, "CampaignLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForPhoneDescription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForPhoneDescriptionUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForPhoneDescriptionInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForPhoneDescriptionDelete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/campainManagerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
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
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2'
};
const EditDescription = ()=>{
    _s();
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { phoneDescriptions, setPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"])();
    const [selectedRow, setSelectedRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inputId, setInputId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputPhone1, setInputPhone1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputPhone2, setInputPhone2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputPhone3, setInputPhone3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputPhone4, setInputPhone4] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputPhone5, setInputPhone5] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isNewMode, setIsNewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 신규 모드 상태 추가
    const { tenant_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // api 응답 데이터를 그리드 형식으로 변환하는 함수
    const transformToGridData = (apiData)=>{
        return apiData.map((item)=>({
                id: item.description_id.toString(),
                phone1: item.description[0] || '',
                phone2: item.description[1] || '',
                phone3: item.description[2] || '',
                phone4: item.description[3] || '',
                phone5: item.description[4] || ''
            }));
    };
    //전화번호설명 템플릿 조회
    const { mutate: fetchPhoneDescriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"])({
        onSuccess: {
            "EditDescription.useApiForPhoneDescription": (data)=>{
                setPhoneDescriptions(data.result_data || []);
            }
        }["EditDescription.useApiForPhoneDescription"],
        onError: {
            "EditDescription.useApiForPhoneDescription": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "EditDescription.useApiForPhoneDescription": ()=>{}
                        }["EditDescription.useApiForPhoneDescription"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "EditDescription.useApiForPhoneDescription": ()=>{
                            router.push('/login');
                        }
                    }["EditDescription.useApiForPhoneDescription"], 1000);
                }
            }
        }["EditDescription.useApiForPhoneDescription"]
    });
    // 전화번호설명 추가
    const { mutate: fetchPhoneDescriptionInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescriptionInsert"])({
        onSuccess: {
            "EditDescription.useApiForPhoneDescriptionInsert": (data)=>{
                fetchPhoneDescriptions({
                    session_key: '',
                    tenant_id: tenant_id
                });
                showAlert('저장되었습니다');
            }
        }["EditDescription.useApiForPhoneDescriptionInsert"],
        onError: {
            "EditDescription.useApiForPhoneDescriptionInsert": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "EditDescription.useApiForPhoneDescriptionInsert": ()=>{}
                        }["EditDescription.useApiForPhoneDescriptionInsert"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "EditDescription.useApiForPhoneDescriptionInsert": ()=>{
                            router.push('/login');
                        }
                    }["EditDescription.useApiForPhoneDescriptionInsert"], 1000);
                } else {
                    showAlert('전화번호설명 저장 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["EditDescription.useApiForPhoneDescriptionInsert"]
    });
    // 전화번호설명 수정
    const { mutate: fetchPhoneDescriptionUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescriptionUpdate"])({
        onSuccess: {
            "EditDescription.useApiForPhoneDescriptionUpdate": (data)=>{
                fetchPhoneDescriptions({
                    session_key: '',
                    tenant_id: tenant_id
                });
                showConfirm('수정되었습니다', {
                    "EditDescription.useApiForPhoneDescriptionUpdate": ()=>{}
                }["EditDescription.useApiForPhoneDescriptionUpdate"]);
            }
        }["EditDescription.useApiForPhoneDescriptionUpdate"],
        onError: {
            "EditDescription.useApiForPhoneDescriptionUpdate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "EditDescription.useApiForPhoneDescriptionUpdate": ()=>{}
                        }["EditDescription.useApiForPhoneDescriptionUpdate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "EditDescription.useApiForPhoneDescriptionUpdate": ()=>{
                            router.push('/login');
                        }
                    }["EditDescription.useApiForPhoneDescriptionUpdate"], 1000);
                } else {
                    showAlert('전화번호설명 저장 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["EditDescription.useApiForPhoneDescriptionUpdate"]
    });
    // 전화번호 설명 삭제
    const { mutate: fetchPhoneDescriptionDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescriptionDelete"])({
        onSuccess: {
            "EditDescription.useApiForPhoneDescriptionDelete": (data)=>{
                fetchPhoneDescriptions({
                    session_key: '',
                    tenant_id: tenant_id
                });
                showAlert('삭제되었습니다');
            }
        }["EditDescription.useApiForPhoneDescriptionDelete"],
        onError: {
            "EditDescription.useApiForPhoneDescriptionDelete": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "EditDescription.useApiForPhoneDescriptionDelete": ()=>{}
                        }["EditDescription.useApiForPhoneDescriptionDelete"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "EditDescription.useApiForPhoneDescriptionDelete": ()=>{
                            router.push('/login');
                        }
                    }["EditDescription.useApiForPhoneDescriptionDelete"], 1000);
                } else {
                    showAlert('전화번호설명 저장 중 오류가 발생했습니다: ' + error.message);
                }
            }
        }["EditDescription.useApiForPhoneDescriptionDelete"]
    });
    // 전화번호설명 템플릿 조회
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditDescription.useEffect": ()=>{
            console.log("campaigns", campaigns);
            fetchPhoneDescriptions({
                session_key: '',
                tenant_id: tenant_id
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["EditDescription.useEffect"], [
        tenant_id
    ]);
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '2',
        onConfirm: {
            "EditDescription.useState": ()=>{}
        }["EditDescription.useState"],
        onCancel: {
            "EditDescription.useState": ()=>{}
        }["EditDescription.useState"]
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
    // 전화번호 설명 저장
    const handleSave = ()=>{
        if (!validateData()) return;
        const saveData = {
            description_id: Number(inputId),
            description: [
                inputPhone1,
                inputPhone2,
                inputPhone3,
                inputPhone4,
                inputPhone5
            ]
        };
        if (selectedRow) {
            // 수정
            fetchPhoneDescriptionUpdate(saveData);
            showAlert('수정되었습니다');
        } else {
            // 신규 저장
            fetchPhoneDescriptionInsert(saveData);
            showAlert('저장되었습니다');
        }
    };
    // 전화번호 설명 삭제
    const handleDelete = ()=>{
        // 선택된 행이 없는 경우 알림
        if (!selectedRow) {
            showAlert('삭제할 항목을 선택해주세요.');
            return;
        }
        // campaigns 배열에서 현재 선택된 phone description ID가 사용 중인지 확인
        const descriptionId = Number(selectedRow.id);
        const isInUse = campaigns.some((campaign)=>campaign.dial_phone_id === descriptionId);
        if (isInUse) {
            // 사용 중인 경우 알림 표시하고 삭제 방지
            showAlert(`선택되어진 발신번호 설명을 사용하는 캠페인이 있습니다.\n캠페인 아이디 : ${campaigns.filter((c)=>c.dial_phone_id === descriptionId).map((c)=>c.campaign_id).join(', ')}\n캠페인 정보수정후 삭제하여 주십시오.`);
            return;
        }
        // 삭제 확인 메시지 표시
        showConfirm('선택된 전화번호 설명을 삭제하시겠습니까?\n\n ※주의:  삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해 주세요.', ()=>{
            // 선택된 행의 ID를 숫자로 변환하여 직접 전달
            const idToDelete = Number(selectedRow.id);
            fetchPhoneDescriptionDelete(idToDelete, {
                onSuccess: ()=>{
                    // 2. 입력 필드 초기화
                    setSelectedRow(null);
                    setInputId('');
                    setInputPhone1('');
                    setInputPhone2('');
                    setInputPhone3('');
                    setInputPhone4('');
                    setInputPhone5('');
                    setIsNewMode(false);
                }
            });
        });
    };
    // 전화번호 설명 데이터 유효성 검사
    const validateData = ()=>{
        if (!inputId || !inputPhone1 || !inputPhone2 || !inputPhone3 || !inputPhone4 || !inputPhone5) {
            showAlert('모든 필드를 입력해주세요.');
            return false;
        }
        return true;
    };
    // 전화번호 설명 데이터 그리드 열 정의
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditDescription.useMemo[columns]": ()=>[
                {
                    key: 'id',
                    name: '아이디'
                },
                {
                    key: 'phone1',
                    name: '전화번호1'
                },
                {
                    key: 'phone2',
                    name: '전화번호2'
                },
                {
                    key: 'phone3',
                    name: '전화번호3'
                },
                {
                    key: 'phone4',
                    name: '전화번호4'
                },
                {
                    key: 'phone5',
                    name: '전화번호5'
                }
            ]
    }["EditDescription.useMemo[columns]"], []);
    // 전화번호 설명 데이터 그리드 행 정의
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditDescription.useMemo[rows]": ()=>{
            const phoneData = phoneDescriptions || [];
            return phoneData.length > 0 ? transformToGridData(phoneData) : [];
        }
    }["EditDescription.useMemo[rows]"], [
        phoneDescriptions
    ]);
    // 셀 클릭 핸들러
    const handleCellClick = ({ row })=>{
        setSelectedRow(row);
        setInputId(row.id);
        setInputPhone1(row.phone1);
        setInputPhone2(row.phone2);
        setInputPhone3(row.phone3);
        setInputPhone4(row.phone4);
        setInputPhone5(row.phone5);
        setIsNewMode(false);
    };
    // 신규 버튼 핸들러
    const handleNew = ()=>{
        setSelectedRow(null);
        // 그리드의 마지막 ID를 찾아서 +1 한 값을 설정
        if (rows.length > 0) {
            const lastId = Math.max(...rows.map((row)=>parseInt(row.id)));
            setInputId((lastId + 1).toString());
        } else {
            setInputId('1'); // 데이터가 없는 경우 1부터 시작
        }
        setInputPhone1('');
        setInputPhone2('');
        setInputPhone3('');
        setInputPhone4('');
        setInputPhone5('');
        setIsNewMode(true);
    };
    const getRowClass = (row)=>{
        return selectedRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
    };
    // 필드가 비활성화되어야 하는지 결정하는 함수
    const isFieldDisabled = ()=>{
        // 선택된 행이 없고 신규 모드도 아니면 비활성화
        return !selectedRow && !isNewMode;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[580px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-custom-wrap h-[230px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        columns: columns,
                        rows: rows,
                        className: "grid-custom",
                        onCellClick: handleCellClick,
                        rowKeyGetter: (row)=>row.id,
                        selectedRows: selectedRow ? new Set([
                            selectedRow.id
                        ]) : new Set(),
                        rowHeight: 30,
                        headerRowHeight: 30,
                        rowClass: getRowClass,
                        enableVirtualization: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[513px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "아이디"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: inputId,
                                    onChange: (e)=>setInputId(e.target.value),
                                    className: "w-full",
                                    disabled: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "전화번호1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: inputPhone1,
                                    onChange: (e)=>setInputPhone1(e.target.value),
                                    className: "w-full",
                                    disabled: isFieldDisabled()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "전화번호2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: inputPhone2,
                                    onChange: (e)=>setInputPhone2(e.target.value),
                                    className: "w-full",
                                    disabled: isFieldDisabled()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "전화번호3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: inputPhone3,
                                    onChange: (e)=>setInputPhone3(e.target.value),
                                    className: "w-full",
                                    disabled: isFieldDisabled()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "전화번호4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: inputPhone4,
                                    onChange: (e)=>setInputPhone4(e.target.value),
                                    className: "w-full",
                                    disabled: isFieldDisabled()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "전화번호5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    type: "text",
                                    value: inputPhone5,
                                    onChange: (e)=>setInputPhone5(e.target.value),
                                    className: "w-full",
                                    disabled: isFieldDisabled()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleNew,
                                    children: "신규"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleSave,
                                    children: "저장"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleDelete,
                                    children: "삭제"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: alertState.isOpen,
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                onClose: alertState.onConfirm,
                onCancle: alertState.onCancel
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
};
_s(EditDescription, "GS8KpaiR0EW472AK0w4ax62IDYs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$campainManagerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCampainManagerStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescription"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescriptionInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescriptionUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForPhoneDescriptionDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForPhoneDescriptionDelete"]
    ];
});
_c = EditDescription;
const __TURBOPACK__default__export__ = EditDescription;
var _c;
__turbopack_refresh__.register(_c, "EditDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/CampaignModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForCallLimitSetting.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
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
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2'
};
const CampaignSettings = ()=>{
    _s();
    const { tenants, campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const [selectedRow, setSelectedRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignId, setCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [campaignName, setCampaignName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [limitCount, setLimitCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [limitSettings, setLimitSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isNewMode, setIsNewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 신규 모드 상태 추가
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { activeTabId, openedTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '1',
        onConfirm: {
            "CampaignSettings.useState": ()=>{}
        }["CampaignSettings.useState"],
        onCancel: {
            "CampaignSettings.useState": ()=>{}
        }["CampaignSettings.useState"]
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
    // 예약콜 제한건수 조회
    const { mutate: fetchCallLimitSettingList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingList"])({
        onSuccess: {
            "CampaignSettings.useApiForCallLimitSettingList": (data)=>{
                setLimitSettings(data.result_data);
                setIsNewMode(false); // 데이터 로드 시 신규 모드 해제
            }
        }["CampaignSettings.useApiForCallLimitSettingList"],
        onError: {
            "CampaignSettings.useApiForCallLimitSettingList": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignSettings.useApiForCallLimitSettingList": ()=>{}
                        }["CampaignSettings.useApiForCallLimitSettingList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignSettings.useApiForCallLimitSettingList": ()=>{
                            router.push('/login');
                        }
                    }["CampaignSettings.useApiForCallLimitSettingList"], 1000);
                }
            }
        }["CampaignSettings.useApiForCallLimitSettingList"]
    });
    // 제한건수 추가 API 
    const { mutate: createCallLimitSetting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingCreate"])({
        onSuccess: {
            "CampaignSettings.useApiForCallLimitSettingCreate": (data)=>{
                if (data.result_code === -1) {
                    // -9053 메시지 표시
                    showAlert('리스트 등록 건수를 초과하였습니다.');
                } else {
                    // 저장 성공 후 리스트를 새로 가져오기
                    fetchCallLimitSettingList({
                        tenant_id_array: tenants.map({
                            "CampaignSettings.useApiForCallLimitSettingCreate": (tenant)=>tenant.tenant_id
                        }["CampaignSettings.useApiForCallLimitSettingCreate"])
                    });
                    // 저장 후에도 현재 선택된 캠페인 정보 유지
                    // 신규 모드는 해제하지만, 선택 상태는 유지
                    setIsNewMode(false);
                    // 저장 성공 메시지 표시
                    showAlert('저장되었습니다.');
                }
            }
        }["CampaignSettings.useApiForCallLimitSettingCreate"],
        onError: {
            "CampaignSettings.useApiForCallLimitSettingCreate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignSettings.useApiForCallLimitSettingCreate": ()=>{}
                        }["CampaignSettings.useApiForCallLimitSettingCreate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignSettings.useApiForCallLimitSettingCreate": ()=>{
                            router.push('/login');
                        }
                    }["CampaignSettings.useApiForCallLimitSettingCreate"], 1000);
                } else {
                    showAlert('저장에 실패했습니다: ' + error.message);
                }
            }
        }["CampaignSettings.useApiForCallLimitSettingCreate"]
    });
    // 제한건수 수정 API
    const { mutate: updateCallLimitSetting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingUpdate"])({
        onSuccess: {
            "CampaignSettings.useApiForCallLimitSettingUpdate": (data)=>{
                if (data.result_code === -1) {
                    // -9053 메시지 표시
                    showAlert('리스트 등록 건수를 초과하였습니다.');
                } else {
                    fetchCallLimitSettingList({
                        tenant_id_array: tenants.map({
                            "CampaignSettings.useApiForCallLimitSettingUpdate": (tenant)=>tenant.tenant_id
                        }["CampaignSettings.useApiForCallLimitSettingUpdate"])
                    });
                    setIsNewMode(false); // 수정 후 신규 모드 해제
                    showAlert('수정되었습니다.');
                }
            }
        }["CampaignSettings.useApiForCallLimitSettingUpdate"],
        onError: {
            "CampaignSettings.useApiForCallLimitSettingUpdate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignSettings.useApiForCallLimitSettingUpdate": ()=>{}
                        }["CampaignSettings.useApiForCallLimitSettingUpdate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignSettings.useApiForCallLimitSettingUpdate": ()=>{
                            router.push('/login');
                        }
                    }["CampaignSettings.useApiForCallLimitSettingUpdate"], 1000);
                } else {
                    showAlert('수정에 실패했습니다: ' + error.message);
                }
            }
        }["CampaignSettings.useApiForCallLimitSettingUpdate"]
    });
    // 제한건수 삭제 API
    const { mutate: deleteCallLimitSetting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingDelete"])({
        onSuccess: {
            "CampaignSettings.useApiForCallLimitSettingDelete": ()=>{
                fetchCallLimitSettingList({
                    tenant_id_array: tenants.map({
                        "CampaignSettings.useApiForCallLimitSettingDelete": (tenant)=>tenant.tenant_id
                    }["CampaignSettings.useApiForCallLimitSettingDelete"])
                });
                setIsNewMode(false); // 삭제 후 신규 모드 해제
            }
        }["CampaignSettings.useApiForCallLimitSettingDelete"],
        onError: {
            "CampaignSettings.useApiForCallLimitSettingDelete": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "CampaignSettings.useApiForCallLimitSettingDelete": ()=>{}
                        }["CampaignSettings.useApiForCallLimitSettingDelete"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "CampaignSettings.useApiForCallLimitSettingDelete": ()=>{
                            router.push('/login');
                        }
                    }["CampaignSettings.useApiForCallLimitSettingDelete"], 1000);
                } else {
                    showAlert('삭제에 실패했습니다: ' + error.message);
                }
            }
        }["CampaignSettings.useApiForCallLimitSettingDelete"]
    });
    // 예약콜 제한건수 조회 API 호출 후 선택된 캠페인ID에 해당하는 항목을 찾아서 선택 상태 업데이트
    const updateSelectionAfterAPICall = ()=>{
        // limitSettings에서 선택된 캠페인 ID에 해당하는 항목 찾기
        const updatedSetting = limitSettings.find((setting)=>setting.campaign_id === Number(campaignId));
        // 찾은 항목이 있을 경우 선택 상태 업데이트
        if (updatedSetting) {
            const campaign = campaigns?.find((camp)=>camp.campaign_id === updatedSetting.campaign_id);
            // 찾은 데이터로 선택 상태 업데이트
            setSelectedRow({
                campaign_id: updatedSetting.campaign_id.toString(),
                campaign_name: campaign?.campaign_name || '',
                limit_number: updatedSetting.max_call.toString()
            });
            // 제한건수도 최신 데이터로 업데이트
            setLimitCount(updatedSetting.max_call.toString());
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignSettings.useEffect": ()=>{
            if (campaignId && !isNewMode) {
                updateSelectionAfterAPICall();
            }
        }
    }["CampaignSettings.useEffect"], [
        limitSettings
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignSettings.useEffect": ()=>{
            fetchCallLimitSettingList({
                tenant_id_array: tenants.map({
                    "CampaignSettings.useEffect": (tenant)=>tenant.tenant_id
                }["CampaignSettings.useEffect"])
            });
            // 초기 로딩 시 신규 모드 비활성화
            setIsNewMode(false);
        }
    }["CampaignSettings.useEffect"], [
        fetchCallLimitSettingList,
        tenants
    ]);
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignSettings.useMemo[columns]": ()=>[
                {
                    key: 'campaign_id',
                    name: '캠페인 아이디'
                },
                {
                    key: 'campaign_name',
                    name: '캠페인 이름'
                },
                {
                    key: 'limit_number',
                    name: '제한건수'
                }
            ]
    }["CampaignSettings.useMemo[columns]"], []);
    // 그리드에 표시할 데이터
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CampaignSettings.useMemo[rows]": ()=>limitSettings?.map({
                "CampaignSettings.useMemo[rows]": (setting)=>{
                    const campaign = campaigns?.find({
                        "CampaignSettings.useMemo[rows]": (camp)=>camp.campaign_id === setting.campaign_id
                    }["CampaignSettings.useMemo[rows]"]);
                    return {
                        campaign_id: setting.campaign_id.toString(),
                        campaign_name: campaign?.campaign_name || '',
                        limit_number: setting.max_call.toString()
                    };
                }
            }["CampaignSettings.useMemo[rows]"]) || [] // 기본값으로 빈 배열 설정
    }["CampaignSettings.useMemo[rows]"], [
        limitSettings,
        campaigns
    ]);
    // 저장 버튼 클릭 시 호출되는 함수
    // 캠페인 아이디, 캠페인 이름, 제한건수 모두 입력되어야 저장 가능
    const handleSave = ()=>{
        if (!campaignId || !campaignName || !limitCount) {
            showAlert('모든 필드를 입력해주세요.');
            return;
        }
        // 선택된 캠페인의 tenant_id 찾기
        const selectedCampaign = campaigns?.find((camp)=>camp.campaign_id === Number(campaignId));
        if (!selectedCampaign) {
            return;
        }
        const saveData = {
            campaign_id: Number(campaignId),
            tenant_id: selectedCampaign.tenant_id,
            call_kind: 1,
            call_timeout: 0,
            max_call: Number(limitCount),
            max_criteria: 1
        };
        if (selectedRow) {
            // 수정
            updateCallLimitSetting(saveData);
        // showAlert은 mutate의 onSuccess에서 처리
        } else {
            // 신규 등록
            createCallLimitSetting(saveData);
        // showAlert은 mutate의 onSuccess에서 처리
        }
    };
    // 삭제 버튼 클릭 시 호출되는 함수
    // 선택된 캠페인 아이디가 없을 경우 알림
    const handleDelete = ()=>{
        // 선택된 항목이 없을 경우 알림
        if (!campaignId || !selectedRow) {
            showAlert('삭제할 캠페인을 먼저 선택해주세요.');
            return;
        }
        // 선택된 캠페인의 tenant_id 찾기
        const selectedCampaign = campaigns?.find((camp)=>camp.campaign_id === Number(campaignId));
        if (!selectedCampaign) {
            showAlert('캠페인 정보를 찾을 수 없습니다.');
            return;
        }
        // 삭제 확인 알림
        showConfirm(`선택된 캠페인 [${selectedCampaign.campaign_name}]의 제한건수 설정을 삭제하시겠습니까? \n\n ※주의: 삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해 주세요.`, ()=>{
            // 확인 버튼 클릭 시 실행될 함수
            deleteCallLimitSetting({
                campaign_id: Number(campaignId),
                tenant_id: selectedCampaign.tenant_id
            }, {
                onSuccess: ()=>{
                    // showAlert('제한건수 설정이 성공적으로 삭제되었습니다.');
                    // 삭제 후 데이터 초기화
                    setSelectedRow(null);
                    setCampaignId('');
                    setCampaignName('');
                    setLimitCount('');
                    setIsNewMode(false);
                // 데이터 목록 새로고침 - 이미 onSuccess에서 처리됨
                }
            });
        });
    };
    // 그리드 셀 클릭 시 호출되는 함수
    const handleCellClick = ({ row })=>{
        setSelectedRow(row);
        setCampaignId(row.campaign_id);
        setCampaignName(row.campaign_name);
        setLimitCount(row.limit_number);
    };
    // 신규 버튼 클릭 시 호출되는 함수
    // 입력 필드 초기화 및 신규 모드 활성화
    const handleNew = ()=>{
        setSelectedRow(null);
        setCampaignId('');
        setCampaignName('');
        setLimitCount('');
        setIsNewMode(true);
    };
    // 캠페인 선택 모달에서 캠페인 선택 시 호출되는 함수
    // 선택된 캠페인 아이디와 이름을 상태에 저장하고, 그리드 로우도 선택
    const handleCampaignSelect = (id, name)=>{
        setCampaignId(id);
        setCampaignName(name);
        // 선택된 캠페인의 제한건수가 있는지 체크
        const matchingSetting = limitSettings.find((item)=>item.campaign_id === Number(id));
        if (matchingSetting) {
            const limitStr = matchingSetting.max_call.toString();
            setLimitCount(limitStr);
            // 해당 캠페인이 이미 설정되어 있으면 그리드 로우도 선택
            setSelectedRow({
                campaign_id: id,
                campaign_name: name,
                limit_number: limitStr
            });
            setIsNewMode(false);
        } else {
            // 제한건수가 없으면 입력 필드와 그리드 선택 모두 초기화
            setLimitCount('');
            setSelectedRow(null);
            setIsNewMode(true);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignSettings.useEffect": ()=>{
            if (activeTabId === 8) {
                const tempData = openedTabs.filter({
                    "CampaignSettings.useEffect.tempData": (tab)=>tab.id === 8
                }["CampaignSettings.useEffect.tempData"]);
                if (tempData.length > 0 && tempData[0].campaignId && tempData[0].campaignName) {
                    setCampaignId(tempData[0].campaignId);
                    setCampaignName(tempData[0].campaignName);
                }
                if (limitSettings.length > 0 && tempData.length > 0) {
                    const templimitSetting = limitSettings.filter({
                        "CampaignSettings.useEffect.templimitSetting": (data)=>data.campaign_id === Number(tempData[0].campaignId)
                    }["CampaignSettings.useEffect.templimitSetting"]);
                    if (templimitSetting.length > 0) {
                        setLimitCount(templimitSetting[0].max_call + '');
                    }
                }
            }
        }
    }["CampaignSettings.useEffect"], [
        activeTabId,
        openedTabs,
        limitSettings
    ]);
    // 필드가 비활성화되어야 하는지 결정하는 함수
    const isFieldDisabled = ()=>{
        // 캠페인 아이디가 있으면 항상 입력 가능하게 설정
        if (campaignId) {
            return false;
        }
        // 선택된 행이 없고 신규 모드도 아니면 비활성화
        return !selectedRow && !isNewMode;
    };
    const getRowClass = (row)=>{
        return selectedRow?.campaign_id === row.campaign_id && selectedRow?.limit_number === row.limit_number ? 'bg-[#FFFAEE]' : '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[580px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid-custom-wrap h-[230px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        columns: columns,
                        rows: rows,
                        className: "grid-custom",
                        onCellClick: handleCellClick,
                        rowKeyGetter: (row)=>row.campaign_id + row.limit_number,
                        selectedRows: selectedRow ? new Set([
                            selectedRow.campaign_id.toString()
                        ]) : new Set(),
                        rowHeight: 30,
                        headerRowHeight: 30,
                        rowClass: getRowClass,
                        enableVirtualization: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[513px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "캠페인 아이디"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    value: campaignId,
                                    readOnly: true,
                                    className: "w-full",
                                    disabled: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setIsModalOpen(true),
                                    children: "캠페인조회"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "캠페인 이름"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    value: campaignName,
                                    readOnly: true,
                                    className: "w-full",
                                    disabled: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-[5rem] min-w-[5rem]",
                                    children: "제한건수"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                    value: limitCount,
                                    className: "w-full",
                                    onChange: (e)=>setLimitCount(e.target.value),
                                    disabled: isFieldDisabled()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleNew,
                                    children: "신규"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleSave,
                                    children: "저장"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    onClick: handleDelete,
                                    children: "삭제"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-[20px] text-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• 필요 이상의 예약콜/ 콜백에 대한 제한이 필요한 경우"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• 입력 받을 콜 수를 제한 할 수 있습니다."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                        lineNumber: 494,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onSelect: handleCampaignSelect
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: alertState.isOpen,
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                onClose: alertState.onConfirm,
                onCancle: alertState.onCancel
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx",
        lineNumber: 429,
        columnNumber: 5
    }, this);
};
_s(CampaignSettings, "P74mFjdVlejpO/93N7aJ54Lw9LE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingCreate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCallLimitSetting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallLimitSettingDelete"]
    ];
});
_c = CampaignSettings;
const __TURBOPACK__default__export__ = CampaignSettings;
var _c;
__turbopack_refresh__.register(_c, "CampaignSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
;
;
const TimePickerComponent = ({ value, onChange })=>{
    // 시간을 시, 분으로 분리
    const parseTimeValue = (timeString)=>{
        // 빈 값이거나 유효하지 않은 형식이면 기본값 사용
        if (!timeString || timeString === "9999" || timeString.length !== 4) {
            return {
                hour: "00",
                minute: "00"
            };
        }
        return {
            hour: timeString.slice(0, 2),
            minute: timeString.slice(2, 4)
        };
    };
    const { hour, minute } = parseTimeValue(typeof value === 'string' ? value : '');
    // 시간이나 분이 변경될 때 전체 값 업데이트
    const handleTimeChange = (type, newValue)=>{
        const currentTime = parseTimeValue(value);
        const updatedTime = {
            ...currentTime,
            [type]: newValue
        };
        onChange(`${updatedTime.hour}${updatedTime.minute}`);
    };
    // 시간(0-23)과 분(0-59) 옵션 생성
    const hours = Array.from({
        length: 24
    }, (_, i)=>i.toString().padStart(2, '0'));
    const minutes = Array.from({
        length: 60
    }, (_, i)=>i.toString().padStart(2, '0'));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: hour,
                onValueChange: (newHour)=>handleTimeChange("hour", newHour),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                        className: "w-[80px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                            placeholder: "시"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                        style: {
                            maxHeight: '200px',
                            overflowY: 'auto'
                        },
                        children: hours.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: h,
                                children: [
                                    h,
                                    "시"
                                ]
                            }, `hour-${h}`, true, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mx-1",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: minute,
                onValueChange: (newMinute)=>handleTimeChange("minute", newMinute),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                        className: "w-[80px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                            placeholder: "분"
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                        style: {
                            maxHeight: '200px',
                            overflowY: 'auto'
                        },
                        children: minutes.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: m,
                                children: [
                                    m,
                                    "분"
                                ]
                            }, `minute-${m}`, true, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_c = TimePickerComponent;
const __TURBOPACK__default__export__ = TimePickerComponent;
var _c;
__turbopack_refresh__.register(_c, "TimePickerComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/DistributionLimit/context_menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
const ContextMenu = ({ x, y, onDelete, onChangeBulkLimit, onClose, level })=>{
    _s();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [adjustedPosition, setAdjustedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: x,
        top: y
    });
    // 메뉴 외부 클릭 시 닫기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContextMenu.useEffect": ()=>{
            const handleClickOutside = {
                "ContextMenu.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["ContextMenu.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "ContextMenu.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["ContextMenu.useEffect"];
        }
    }["ContextMenu.useEffect"], [
        onClose
    ]);
    // 메뉴 위치 조정 (화면 경계 넘어가지 않게)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContextMenu.useEffect": ()=>{
            if (menuRef.current) {
                const menuRect = menuRef.current.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                let newLeft = x;
                let newTop = y;
                // 우측 경계 확인
                if (x + menuRect.width > viewportWidth) {
                    newLeft = x - menuRect.width;
                }
                // 하단 경계 확인
                if (y + menuRect.height > viewportHeight) {
                    newTop = y - menuRect.height;
                }
                setAdjustedPosition({
                    left: newLeft,
                    top: newTop
                });
            }
        }
    }["ContextMenu.useEffect"], [
        x,
        y
    ]);
    // 레벨에 따른 메뉴 항목 텍스트 설정
    let menuText = "분배제한 정보 삭제";
    // 각 레벨에 따라 다른 텍스트 표시
    if (level === 1) {
        // menuText = "상담그룹 분배제한 정보 삭제";
        menuText = "분배제한 정보 삭제";
    } else if (level === 2) {
        // menuText = "상담파트 분배제한 정보 삭제";
        menuText = "분배제한 정보 삭제";
    } else if (level === 3) {
        menuText = "분배제한 정보 삭제";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "absolute bg-white border border-gray-210 shadow-md rounded-md py-1 z-50",
        style: {
            position: 'fixed',
            left: `${adjustedPosition.left}px`,
            top: `${adjustedPosition.top}px`,
            fontSize: '14px',
            minWidth: 'auto',
            width: 'auto'
        },
        children: [
            (level === 1 || level === 2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-blue-600",
                onClick: onChangeBulkLimit,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "최대분배호수 변경"
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/context_menu.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/context_menu.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-red-600",
                onClick: onDelete,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: menuText
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/context_menu.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/context_menu.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/context_menu.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_s(ContextMenu, "R3ee+P7KmqOBh6UgR9QNQWwyk4M=");
_c = ContextMenu;
const __TURBOPACK__default__export__ = ContextMenu;
var _c;
__turbopack_refresh__.register(_c, "ContextMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/DistributionLimit/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/CampaignModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForCounselorList.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForMaxCall.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCampaignAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForCampaignAgent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$DistributionLimit$2f$TimePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/DistributionLimit/TimePicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$DistributionLimit$2f$context_menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/DistributionLimit/context_menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$OnlyNumberInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/OnlyNumberInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
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
;
;
;
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2'
};
const DistributionLimit = ()=>{
    _s();
    const { tenant_id, role_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { campaigns, setSelectedCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const [treeData, setTreeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedRows, setExpandedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([]));
    const [selectedCampaignId, setSelectedCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCampaignName, setSelectedCampaignName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignAgents, setCampaignAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [initTime, setInitTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('없음');
    const [viewFilter, setViewFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [rawAgentData, setRawAgentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { activeTabId, openedTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const [editedRows, setEditedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [hasChanges, setHasChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 최대분배호수 일괄 변경 모달 상태
    const [bulkLimitModal, setBulkLimitModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        maxLimit: '',
        fixFlag: false,
        targetLevel: 0,
        targetGroup: '',
        targetPart: ''
    });
    // 최대분배호수 일괄 변경 모달 열기
    const handleOpenBulkLimitModal = ()=>{
        // 컨텍스트 메뉴 닫기
        handleCloseContextMenu();
        setBulkLimitModal({
            isOpen: true,
            maxLimit: '',
            fixFlag: false,
            targetLevel: contextMenu.level || 0,
            targetGroup: contextMenu.group || '',
            targetPart: contextMenu.part || ''
        });
    };
    // 우클릭 컨텍스트 메뉴 상태
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        x: 0,
        y: 0,
        rowId: null,
        agentId: null
    });
    // 컨텍스트 메뉴 닫기 함수
    const handleCloseContextMenu = ()=>{
        setContextMenu({
            visible: false,
            x: 0,
            y: 0,
            rowId: null,
            agentId: null
        });
    };
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '1',
        onConfirm: {
            "DistributionLimit.useState": ()=>{}
        }["DistributionLimit.useState"],
        onCancel: {
            "DistributionLimit.useState": ()=>{}
        }["DistributionLimit.useState"]
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
    const transformToTreeData = (agentData)=>{
        const result = [];
        agentData.forEach((agent)=>{
            let center = result.find((c)=>c.center === agent.center);
            if (!center) {
                center = {
                    id: `center-${agent.center}`,
                    center: agent.center,
                    group: '',
                    part: '',
                    agent_id: '',
                    agent_name: '',
                    max_dist: '',
                    current_resp: '',
                    fix_flag: '',
                    level: 0,
                    hasChildren: true,
                    children: []
                };
                result.push(center);
            }
            let group = center.children?.find((g)=>g.group === agent.group);
            if (!group) {
                group = {
                    id: `group-${agent.center}-${agent.group}`,
                    parentId: center.id,
                    // Keep center value
                    center: agent.center,
                    group: agent.group,
                    part: '',
                    agent_id: '',
                    agent_name: '',
                    max_dist: '',
                    current_resp: '',
                    fix_flag: '',
                    level: 1,
                    hasChildren: true,
                    children: []
                };
                center.children?.push(group);
            }
            let part = group.children?.find((p)=>p.part === agent.part);
            if (!part) {
                part = {
                    id: `part-${agent.center}-${agent.group}-${agent.part}`,
                    parentId: group.id,
                    center: agent.center,
                    group: agent.group,
                    part: agent.part,
                    agent_id: '',
                    agent_name: '',
                    max_dist: '',
                    current_resp: '',
                    fix_flag: '',
                    level: 2,
                    hasChildren: true,
                    children: []
                };
                group.children?.push(part);
            }
            part.children?.push({
                id: `agent-${agent.agent_id}`,
                parentId: part.id,
                center: agent.center,
                group: agent.group,
                part: agent.part,
                agent_id: agent.agent_id,
                agent_name: agent.agent_name,
                max_dist: agent.max_dist,
                current_resp: agent.current_resp,
                fix_flag: agent.fix_flag,
                level: 3
            });
        });
        result.sort((a, b)=>a.center.localeCompare(b.center));
        result.forEach((center)=>{
            center.children?.sort((a, b)=>a.group.localeCompare(b.group));
            center.children?.forEach((group)=>{
                group.children?.sort((a, b)=>a.part.localeCompare(b.part));
                group.children?.forEach((part)=>{
                    part.children?.sort((a, b)=>a.agent_id.localeCompare(b.agent_id));
                });
            });
        });
        return result;
    };
    const flattenRows = (rows)=>{
        const getVisibleAgents = (nodes)=>{
            let visibleAgents = [];
            nodes.forEach((node)=>{
                if (node.level === 3) {
                    let shouldInclude = true;
                    if (viewFilter !== 'all') {
                        const maxDist = parseInt(node.max_dist || '0');
                        const currentResp = parseInt(node.current_resp || '0');
                        switch(viewFilter){
                            case 'remaining':
                                // 잔여 호수가 남은 상담사 (최대 분배호수 > 현재 응답호수)
                                shouldInclude = maxDist > currentResp && (maxDist > 0 || currentResp > 0);
                                break;
                            case 'no-remaining':
                                // 잔여 호수가 없는 상담사 (최대 분배호수 = 현재 응답호수)
                                shouldInclude = maxDist === currentResp && (maxDist > 0 || currentResp > 0);
                                break;
                            case 'no-limit':
                                // 최대 분배호수가 설정되지 않은 상담사 (데이터가 없거나 둘 다 0인 경우)
                                shouldInclude = maxDist === 0 && currentResp === 0;
                                break;
                            case 'has-limit':
                                // 최대 분배호수가 설정된 상담사 (최대 분배호수나 현재 응답호수 중 하나라도 값이 있는 경우)
                                shouldInclude = maxDist > 0 || currentResp > 0;
                                break;
                        }
                    }
                    if (shouldInclude) {
                        visibleAgents.push(node);
                    }
                } else if (node.children) {
                    visibleAgents = visibleAgents.concat(getVisibleAgents(node.children));
                }
            });
            return visibleAgents;
        };
        const visibleAgents = getVisibleAgents(rows);
        const parentsWithVisibleChildren = new Set();
        visibleAgents.forEach((agent)=>{
            if (agent.parentId) parentsWithVisibleChildren.add(agent.parentId);
            const partParentId = rows.find((center)=>center.children?.some((group)=>group.children?.some((part)=>part.id === agent.parentId)))?.children?.find((group)=>group.children?.some((part)=>part.id === agent.parentId))?.id;
            if (partParentId) parentsWithVisibleChildren.add(partParentId);
            const groupParentId = rows.find((center)=>center.children?.some((group)=>group.id === partParentId))?.id;
            if (groupParentId) parentsWithVisibleChildren.add(groupParentId);
        });
        const flatten = (nodes)=>{
            let flat = [];
            nodes.forEach((node)=>{
                const isExpanded = expandedRows.has(node.id);
                const hasChildren = node.children && node.children.length > 0;
                if (node.level < 3) {
                    if (viewFilter !== 'all' && !parentsWithVisibleChildren.has(node.id) && !visibleAgents.some((agent)=>agent.id === node.id)) {
                        return;
                    }
                    flat.push({
                        ...node,
                        isExpanded,
                        hasChildren
                    });
                    if (hasChildren && isExpanded) {
                        flat = flat.concat(flatten(node.children));
                    }
                } else {
                    let shouldInclude = true;
                    if (viewFilter !== 'all') {
                        const maxDist = parseInt(node.max_dist || '0');
                        const currentResp = parseInt(node.current_resp || '0');
                        switch(viewFilter){
                            case 'remaining':
                                // 잔여 호수가 남은 상담사 (최대 분배호수 > 현재 응답호수)
                                shouldInclude = maxDist > currentResp && (maxDist > 0 || currentResp > 0);
                                break;
                            case 'no-remaining':
                                // 잔여 호수가 없는 상담사 (최대 분배호수 = 현재 응답호수)
                                shouldInclude = maxDist === currentResp && (maxDist > 0 || currentResp > 0);
                                break;
                            case 'no-limit':
                                // 최대 분배호수가 설정되지 않은 상담사 (데이터가 없거나 둘 다 0인 경우)
                                shouldInclude = maxDist === 0 && currentResp === 0;
                                break;
                            case 'has-limit':
                                // 최대 분배호수가 설정된 상담사 (최대 분배호수나 현재 응답호수 중 하나라도 값이 있는 경우)
                                shouldInclude = maxDist > 0 || currentResp > 0;
                                break;
                        }
                    }
                    if (shouldInclude) {
                        // 편집된 데이터가 있으면 그 값으로 업데이트
                        if (editedRows[node.id]) {
                            flat.push({
                                ...node,
                                isExpanded,
                                max_dist: editedRows[node.id].max_dist,
                                fix_flag: editedRows[node.id].fix_flag,
                                hasChanges: true
                            });
                        } else {
                            flat.push({
                                ...node,
                                isExpanded
                            });
                        }
                    }
                }
            });
            return flat;
        };
        return flatten(rows);
    };
    // Apply filter to raw agent data - 필터는 최종 표시 시 적용
    const filteredAgentData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DistributionLimit.useMemo[filteredAgentData]": ()=>{
            // 필터링하지 않고 모든 상담사 데이터 반환
            // 실제 필터링은 트리 데이터 평탄화 과정에서 수행
            return rawAgentData;
        }
    }["DistributionLimit.useMemo[filteredAgentData]"], [
        rawAgentData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistributionLimit.useEffect": ()=>{
            if (filteredAgentData.length > 0) {
                const transformedData = transformToTreeData(filteredAgentData);
                setTreeData(transformedData);
            } else {
                setTreeData([]);
            }
        }
    }["DistributionLimit.useEffect"], [
        filteredAgentData
    ]);
    // 처음에 모든 레벨 확장
    const collectAllNodeIds = (nodes, ids)=>{
        nodes.forEach((node)=>{
            // 현재 노드 ID 추가
            ids.add(node.id);
            // 자식 노드가 있는 경우 재귀적으로 수집
            if (node.children && node.children.length > 0) {
                collectAllNodeIds(node.children, ids);
            }
        });
        return ids;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistributionLimit.useEffect": ()=>{
            if (treeData.length > 0) {
                // 모든 노드를 확장하기 위해 모든 노드 ID 수집
                const allNodeIds = collectAllNodeIds(treeData, new Set());
                setExpandedRows(allNodeIds);
            }
        }
    }["DistributionLimit.useEffect"], [
        treeData
    ]);
    // 캠페인 ID Select 변경 핸들러
    const handleCampaignIdChange = (value)=>{
        // 변경된 데이터가 있으면 확인 창 표시
        if (hasChanges) {
            showConfirm("저장되지 않은 변경사항이 있습니다. 계속하시겠습니까?", ()=>{
                proceedWithCampaignChange(value);
            });
        } else {
            proceedWithCampaignChange(value);
        }
    };
    const proceedWithCampaignChange = (value)=>{
        setIsLoading(true); // 로딩 시작
        // 상태 초기화 추가
        setRawAgentData([]); // 기존 에이전트 데이터 초기화
        setCampaignAgents([]); // 캠페인 에이전트 초기화
        setTreeData([]); // 트리 데이터 초기화
        setEditedRows({}); // 편집 데이터 초기화
        setHasChanges(false); // 변경사항 플래그 초기화
        setSelectedCampaignId(value);
        const campaign = campaigns.find((c)=>c.campaign_id.toString() === value);
        if (campaign) {
            setSelectedCampaignName(campaign.campaign_name);
            setSelectedCampaign(campaign);
        }
    };
    // 캠페인 모달에서 선택 시 핸들러
    const handleModalSelect = (campaignId, campaignName)=>{
        if (hasChanges) {
            showConfirm("저장되지 않은 변경사항이 있습니다. 계속하시겠습니까?", ()=>{
                setSelectedCampaignId(campaignId);
                setSelectedCampaignName(campaignName);
                const campaign = campaigns.find((c)=>c.campaign_id === Number(campaignId));
                if (campaign) {
                    setSelectedCampaign(campaign);
                }
                // 편집 데이터와 변경사항 초기화
                setEditedRows({});
                setHasChanges(false);
            });
        } else {
            setSelectedCampaignId(campaignId);
            setSelectedCampaignName(campaignName);
            const campaign = campaigns.find((c)=>c.campaign_id === Number(campaignId));
            if (campaign) {
                setSelectedCampaign(campaign);
            }
        }
    };
    // 캠페인별 상담사 목록 조회
    const { mutate: fetchCampaignAgentList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCampaignAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAgentList"])({
        onSuccess: {
            "DistributionLimit.useApiForCampaignAgentList": (response)=>{
                console.log("response : ", response);
                if (response?.result_data && response.result_data.length > 0) {
                    // 캠페인에 소속된 상담사 ID 목록 저장
                    const agentIds = response.result_data[0].agent_id;
                    setCampaignAgents(agentIds);
                } else {
                    setCampaignAgents([]);
                }
            }
        }["DistributionLimit.useApiForCampaignAgentList"],
        onError: {
            "DistributionLimit.useApiForCampaignAgentList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForCampaignAgentList": ()=>{}
                        }["DistributionLimit.useApiForCampaignAgentList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForCampaignAgentList": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForCampaignAgentList"], 1000);
                } else {
                    showAlert('캠페인 상담사 목록 조회 실패: ' + error.message);
                    setCampaignAgents([]);
                }
            }
        }["DistributionLimit.useApiForCampaignAgentList"]
    });
    // 백엔드에서 가져온 상담사 리스트 정보 처리
    const { mutate: fetchCounselorList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCounselorList"])({
        onSuccess: {
            "DistributionLimit.useApiForCounselorList": (response)=>{
                if (response?.organizationList && selectedCampaignId) {
                    const counselorRows = [];
                    response.organizationList.forEach({
                        "DistributionLimit.useApiForCounselorList": (org)=>{
                            const centerName = org.centerName;
                            org.tenantInfo.forEach({
                                "DistributionLimit.useApiForCounselorList": (tenant)=>{
                                    tenant.groupInfo.forEach({
                                        "DistributionLimit.useApiForCounselorList": (group)=>{
                                            group.teamInfo.forEach({
                                                "DistributionLimit.useApiForCounselorList": (team)=>{
                                                    team.counselorInfo.forEach({
                                                        "DistributionLimit.useApiForCounselorList": (counselor)=>{
                                                            // 캠페인에 소속된 상담사만 추가
                                                            if (campaignAgents.includes(counselor.counselorId)) {
                                                                counselorRows.push({
                                                                    id: `agent-${counselor.counselorId}`,
                                                                    center: centerName,
                                                                    group: group.groupId,
                                                                    part: team.teamId,
                                                                    agent_id: counselor.counselorId,
                                                                    agent_name: counselor.counselorname,
                                                                    max_dist: '0',
                                                                    current_resp: '0',
                                                                    fix_flag: 'N',
                                                                    level: 3
                                                                });
                                                            }
                                                        }
                                                    }["DistributionLimit.useApiForCounselorList"]);
                                                }
                                            }["DistributionLimit.useApiForCounselorList"]);
                                        }
                                    }["DistributionLimit.useApiForCounselorList"]);
                                }
                            }["DistributionLimit.useApiForCounselorList"]);
                        }
                    }["DistributionLimit.useApiForCounselorList"]);
                    setRawAgentData(counselorRows);
                } else {
                    setRawAgentData([]);
                }
            }
        }["DistributionLimit.useApiForCounselorList"],
        onError: {
            "DistributionLimit.useApiForCounselorList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForCounselorList": ()=>{}
                        }["DistributionLimit.useApiForCounselorList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForCounselorList": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForCounselorList"], 1000);
                } else {
                    showAlert('상담사 목록 조회 실패: ' + error.message);
                    setRawAgentData([]);
                }
            }
        }["DistributionLimit.useApiForCounselorList"]
    });
    // 운영설정 분배호수 제한 설정 리스트 API 호출
    const { mutate: fetchMaxCallList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxCallList"])({
        onSuccess: {
            "DistributionLimit.useApiForMaxCallList": (maxCallResponse)=>{
                if (maxCallResponse?.result_data) {
                    setRawAgentData({
                        "DistributionLimit.useApiForMaxCallList": (prevRows)=>{
                            return prevRows.map({
                                "DistributionLimit.useApiForMaxCallList": (row)=>{
                                    const maxCallInfo = maxCallResponse.result_data.find({
                                        "DistributionLimit.useApiForMaxCallList.maxCallInfo": (call)=>call.agent_id === row.agent_id
                                    }["DistributionLimit.useApiForMaxCallList.maxCallInfo"]);
                                    if (maxCallInfo) {
                                        return {
                                            ...row,
                                            max_dist: maxCallInfo.max_call.toString(),
                                            current_resp: maxCallInfo.answered_call.toString(),
                                            fix_flag: maxCallInfo.fix_flag === 1 ? 'Y' : 'N'
                                        };
                                    }
                                    // 매칭되는 정보가 없으면 기존 row 반환
                                    return row;
                                }
                            }["DistributionLimit.useApiForMaxCallList"]);
                        }
                    }["DistributionLimit.useApiForMaxCallList"]);
                }
                setIsLoading(false); // 로딩 완료
            }
        }["DistributionLimit.useApiForMaxCallList"],
        onError: {
            "DistributionLimit.useApiForMaxCallList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForMaxCallList": ()=>{}
                        }["DistributionLimit.useApiForMaxCallList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForMaxCallList": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForMaxCallList"], 1000);
                } else {
                    showAlert('운영설정 분배호수 제한 설정 리스트 조회 실패: ' + error.message);
                }
                setIsLoading(false);
            }
        }["DistributionLimit.useApiForMaxCallList"]
    });
    const { mutate: createMaxCallMutation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCreateMaxCall"])({
        onError: {
            "DistributionLimit.useApiForCreateMaxCall": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForCreateMaxCall": ()=>{}
                        }["DistributionLimit.useApiForCreateMaxCall"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForCreateMaxCall": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForCreateMaxCall"], 1000);
                } else {
                    showAlert('운영설정 분배호수 제한 설정 저장 실패: ' + error.message);
                }
            }
        }["DistributionLimit.useApiForCreateMaxCall"]
    });
    const { mutate: updateMaxCallMutation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForUpdateMaxCall"])({
        onError: {
            "DistributionLimit.useApiForUpdateMaxCall": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForUpdateMaxCall": ()=>{}
                        }["DistributionLimit.useApiForUpdateMaxCall"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForUpdateMaxCall": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForUpdateMaxCall"], 1000);
                } else {
                    showAlert('운영설정 분배호수 제한 설정 수정 실패: ' + error.message);
                }
            }
        }["DistributionLimit.useApiForUpdateMaxCall"]
    });
    const { mutate: fetchMaxCallInitTimeList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxCallInitTimeList"])({
        onSuccess: {
            "DistributionLimit.useApiForMaxCallInitTimeList": (data)=>{
                setInitTime(data.result_data.init_time);
            }
        }["DistributionLimit.useApiForMaxCallInitTimeList"],
        onError: {
            "DistributionLimit.useApiForMaxCallInitTimeList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForMaxCallInitTimeList": ()=>{}
                        }["DistributionLimit.useApiForMaxCallInitTimeList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForMaxCallInitTimeList": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForMaxCallInitTimeList"], 1000);
                } else {
                    showAlert('초기화 시간 설정 조회 실패: ' + error.message);
                }
            }
        }["DistributionLimit.useApiForMaxCallInitTimeList"]
    });
    const { mutate: deleteMaxCallMutation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteMaxCall"])({
        onError: {
            "DistributionLimit.useApiForDeleteMaxCall": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForDeleteMaxCall": ()=>{}
                        }["DistributionLimit.useApiForDeleteMaxCall"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForDeleteMaxCall": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForDeleteMaxCall"], 1000);
                } else {
                    showAlert('삭제 실패: ' + error.message);
                }
            }
        }["DistributionLimit.useApiForDeleteMaxCall"]
    });
    // 응답호수 초기화 시각 수정
    const { mutate: updateMaxCallInitTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxCallInitTimeUpdate"])({
        onSuccess: {
            "DistributionLimit.useApiForMaxCallInitTimeUpdate": (data)=>{
                if (data.result_code === 0) {
                    fetchMaxCallInitTimeList({}); // 변경 후 목록 재조회
                } else {
                    showAlert(`초기화 시간 변경 실패: ${data.result_msg}`);
                }
            }
        }["DistributionLimit.useApiForMaxCallInitTimeUpdate"],
        onError: {
            "DistributionLimit.useApiForMaxCallInitTimeUpdate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "DistributionLimit.useApiForMaxCallInitTimeUpdate": ()=>{}
                        }["DistributionLimit.useApiForMaxCallInitTimeUpdate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "DistributionLimit.useApiForMaxCallInitTimeUpdate": ()=>{
                            router.push('/login');
                        }
                    }["DistributionLimit.useApiForMaxCallInitTimeUpdate"], 1000);
                } else {
                    showAlert(`초기화 시간 변경 중 오류가 발생했습니다: ${error.message}`);
                }
            }
        }["DistributionLimit.useApiForMaxCallInitTimeUpdate"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistributionLimit.useEffect": ()=>{
            fetchMaxCallInitTimeList({});
            if (selectedCampaignId) {
                // 1. 먼저 캠페인 상담사 목록을 가져옴
                fetchCampaignAgentList({
                    campaign_id: [
                        Number(selectedCampaignId)
                    ]
                });
            } else {
                setCampaignAgents([]);
                setRawAgentData([]);
            }
        }
    }["DistributionLimit.useEffect"], [
        selectedCampaignId,
        fetchCampaignAgentList,
        fetchMaxCallInitTimeList
    ]);
    // campaignAgents가 업데이트되면 상담사 목록 조회
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistributionLimit.useEffect": ()=>{
            if (selectedCampaignId && campaignAgents.length > 0) {
                fetchCounselorList({
                    tenantId: tenant_id,
                    roleId: role_id
                });
            }
        }
    }["DistributionLimit.useEffect"], [
        tenant_id,
        role_id,
        selectedCampaignId,
        campaignAgents,
        fetchCounselorList
    ]);
    // 캠페인이 선택되고 상담사 목록이 로드된 후에 분배호수 제한 설정 조회
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistributionLimit.useEffect": ()=>{
            if (selectedCampaignId && rawAgentData.length > 0) {
                fetchMaxCallList({
                    campaign_id: [
                        Number(selectedCampaignId)
                    ]
                });
            }
        }
    }["DistributionLimit.useEffect"], [
        selectedCampaignId,
        rawAgentData.length,
        fetchMaxCallList
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistributionLimit.useEffect": ()=>{
            const handleGridContextMenu = {
                "DistributionLimit.useEffect.handleGridContextMenu": (e)=>{
                    // 기본 컨텍스트 메뉴 방지
                    e.preventDefault();
                    // 마우스 위치 정확히 저장
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    // 우클릭된 요소 찾기
                    let targetElement = e.target;
                    // 행 찾기 - 각 행은 [role="row"] 속성을 가집니다
                    let rowElement = null;
                    while(targetElement && targetElement !== gridRef.current){
                        if (targetElement.getAttribute('role') === 'row') {
                            rowElement = targetElement;
                            break;
                        }
                        targetElement = targetElement.parentElement;
                    }
                    // 유효한 행 요소를 찾지 못한 경우
                    if (!rowElement) return;
                    // 현재 화면에 표시된 행만 포함된 배열
                    const visibleRows = flattenRows(treeData);
                    // 행의 aria-rowindex는 1부터 시작하고 헤더 행도 포함하므로 -2를 해줍니다
                    const rowIndex = parseInt(rowElement.getAttribute('aria-rowindex') || '0') - 2;
                    // 인덱스 범위 체크
                    if (rowIndex < 0 || rowIndex >= visibleRows.length) return;
                    // 클릭된 행 데이터
                    const row = visibleRows[rowIndex];
                    // 레벨에 따라 컨텍스트 메뉴 표시 (센터 제외)
                    if (row && (row.level === 1 || row.level === 2 || row.level === 3)) {
                        setContextMenu({
                            visible: true,
                            x: mouseX,
                            y: mouseY,
                            rowId: row.id,
                            agentId: row.agent_id,
                            level: row.level,
                            group: row.group,
                            part: row.part
                        });
                    }
                }
            }["DistributionLimit.useEffect.handleGridContextMenu"];
            const gridElement = gridRef.current;
            if (gridElement) {
                gridElement.addEventListener('contextmenu', handleGridContextMenu);
            }
            return ({
                "DistributionLimit.useEffect": ()=>{
                    if (gridElement) {
                        gridElement.removeEventListener('contextmenu', handleGridContextMenu);
                    }
                }
            })["DistributionLimit.useEffect"];
        }
    }["DistributionLimit.useEffect"], [
        treeData,
        expandedRows
    ]); // 확장 상태 변경 시에도 다시 실행되도록 의존성 추가
    const [isTimeSettingOpen, setIsTimeSettingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTimeRemoveOpen, setIsTimeRemoveOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeValue, setTimeValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // 모달 열 때 시간 상태 초기화 함수 개선
    const openTimeSettingModal = ()=>{
        // 기존 설정 값이 있고 유효한 경우 기본값으로 설정
        if (initTime && initTime !== "9999") {
            setTimeValue(initTime);
        } else {
            // 기본값으로 00시 00분 설정
            setTimeValue("0000");
        }
        setIsTimeSettingOpen(true);
    };
    const handleTimeSettingSave = ()=>{
        if (!timeValue) {
            showAlert('시간을 입력해주세요.');
            return;
        }
        if (timeValue.length !== 4) {
            showAlert('올바른 시간 형식이 아닙니다.');
            return;
        }
        updateMaxCallInitTime({
            init_time: timeValue
        });
        setTimeValue('');
        setIsTimeSettingOpen(false);
    };
    const handleTimeRemove = ()=>{
        updateMaxCallInitTime({
            init_time: "9999"
        }); // 초기화 시간을 "없음"으로 설정
        setIsTimeRemoveOpen(false);
    };
    const closeAlert = ()=>{
        setAlertState((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    // 셀 값 변경 처리 함수
    const handleCellChange = (row, field, value)=>{
        // 상담사 행만 편집 가능
        if (row.level !== 3) return;
        // 값의 유효성 검사
        if (field === 'max_dist') {
            const numValue = parseInt(value);
            if (isNaN(numValue) || numValue < 0) {
                showAlert('최대 분배호수는 0 이상의 숫자여야 합니다.');
                return;
            }
            if (numValue > 99999) {
                showAlert('최대 분배호수는 99999 까지 입력 가능합니다.');
                return;
            }
        }
        // 편집된 데이터 추적
        setEditedRows((prev)=>{
            const newEditedRows = {
                ...prev
            };
            // 이 행에 대한 이전 편집 내용이 없는 경우 원본 값 저장
            if (!newEditedRows[row.id]) {
                newEditedRows[row.id] = {
                    max_dist: row.max_dist,
                    fix_flag: row.fix_flag,
                    original: {
                        max_dist: row.max_dist,
                        fix_flag: row.fix_flag
                    }
                };
            }
            // 편집된 값 업데이트
            newEditedRows[row.id][field] = value;
            // 변경사항 없으면 해당 행 제거
            if (newEditedRows[row.id].max_dist === newEditedRows[row.id].original.max_dist && newEditedRows[row.id].fix_flag === newEditedRows[row.id].original.fix_flag) {
                delete newEditedRows[row.id];
            }
            // 변경사항 플래그 업데이트
            setHasChanges(Object.keys(newEditedRows).length > 0);
            return newEditedRows;
        });
    };
    // 그리드 데이터에서 편집된 셀 값을 가져오는 함수
    const getCellValue = (row, field)=>{
        if (row.level === 3 && editedRows[row.id]) {
            return editedRows[row.id][field];
        }
        return row[field];
    };
    // 일괄 저장
    const handleBulkSave = ()=>{
        if (!selectedCampaignId) {
            showAlert('캠페인을 선택해주세요.');
            return;
        }
        if (Object.keys(editedRows).length === 0) {
            showAlert('변경된 내용이 없습니다.');
            return;
        }
        // 유효성 검사
        const invalidEntries = Object.entries(editedRows).filter(([_, data])=>{
            const maxDist = parseInt(data.max_dist);
            return isNaN(maxDist) || maxDist < 0 || data.fix_flag === 'Y' && maxDist === 0;
        });
        if (invalidEntries.length > 0) {
            showAlert('최대 분배호수는 0 이상의 숫자여야 하며, 호수 고정이 설정된 경우 최대 분배호수는 0일 수 없습니다.');
            return;
        }
        // 0값 검사를 별도로 먼저 수행
        const zeroEntries = Object.entries(editedRows).filter(([_, data])=>{
            return parseInt(data.max_dist) === 0;
        });
        if (zeroEntries.length > 0) {
            showAlert('최대 분배호수는 0으로 설정할 수 없습니다.');
            return;
        }
        showConfirm(`${Object.keys(editedRows).length}개의 항목을 저장하시겠습니까?`, async ()=>{
            setIsLoading(true);
            let successCount = 0;
            let failCount = 0;
            // 변경된 각 항목에 대해 저장 또는 업데이트 요청
            for (const [rowId, data] of Object.entries(editedRows)){
                const agentId = rowId.replace('agent-', '');
                const maxDist = parseInt(data.max_dist);
                const fixFlag = data.fix_flag === 'Y' ? 1 : 0;
                const saveData = {
                    campaign_id: parseInt(selectedCampaignId),
                    agent_id: agentId,
                    max_call: maxDist,
                    fix_flag: fixFlag
                };
                // 기존 설정 존재 여부 확인 (max_dist가 0이 아닌 경우)
                const isExisting = parseInt(data.original.max_dist) > 0;
                try {
                    if (isExisting) {
                        // 기존 설정 수정
                        await new Promise((resolve, reject)=>{
                            updateMaxCallMutation(saveData, {
                                onSuccess: (response)=>{
                                    if (response.result_code === 0) {
                                        successCount++;
                                        resolve();
                                    } else {
                                        failCount++;
                                        reject(new Error(response.result_msg));
                                    }
                                },
                                onError: (error)=>{
                                    failCount++;
                                    reject(error);
                                }
                            });
                        });
                    } else {
                        // 새 설정 생성
                        await new Promise((resolve, reject)=>{
                            createMaxCallMutation(saveData, {
                                onSuccess: (response)=>{
                                    if (response.result_code === 0) {
                                        successCount++;
                                        resolve();
                                    } else {
                                        failCount++;
                                        reject(new Error(response.result_msg));
                                    }
                                },
                                onError: (error)=>{
                                    failCount++;
                                    reject(error);
                                }
                            });
                        });
                    }
                } catch (error) {
                    console.error('저장 중 오류 발생:', error);
                // 에러는 이미 각 API 호출의 onError에서 처리
                }
            }
            // 모든 요청 완료 후 결과 표시
            setIsLoading(false);
            // showAlert(`저장 완료: ${successCount}개 성공, ${failCount}개 실패`);
            showAlert(`수정된 자원을 적용합니다.`);
            if (successCount > 0) {
                // 변경된 데이터 초기화 및 목록 재조회
                setEditedRows({});
                setHasChanges(false);
                fetchMaxCallList({
                    campaign_id: [
                        parseInt(selectedCampaignId)
                    ]
                });
            }
        });
    };
    // 변경사항 취소
    const handleCancelChanges = ()=>{
        if (Object.keys(editedRows).length === 0) {
            return;
        }
        showConfirm('모든 변경사항을 취소하시겠습니까?', ()=>{
            setEditedRows({});
            setHasChanges(false);
        });
    };
    // 삭제 처리 함수
    const handleDeleteMaxCall = ()=>{
        if (!contextMenu.rowId || !selectedCampaignId) return;
        let confirmMessage = "";
        let agentIds = [];
        // 삭제 대상에 따라 메시지와 상담사 ID 목록 설정
        if (contextMenu.level === 3) {
            // 상담사 개인 삭제
            // confirmMessage = `${contextMenu.agentId} 상담사의 분배 제한 정보를 삭제하시겠습니까?`;
            confirmMessage = '분배 제한 정보를 삭제 하시겠습니까?';
            if (contextMenu.agentId) {
                agentIds = [
                    contextMenu.agentId
                ];
            }
        } else if (contextMenu.level === 2) {
            // 상담파트 전체 삭제 - 분배호수가 설정된 상담사만 삭제
            confirmMessage = `파트 ${contextMenu.part} 의 할당된 콜수를 삭제하시겠습니까?`;
            // 파트에 속한 상담사 중 최대분배호수가 0보다 큰 상담사만 ID 수집
            agentIds = rawAgentData.filter((agent)=>agent.part === contextMenu.part && parseInt(agent.max_dist) > 0).map((agent)=>agent.agent_id);
        } else if (contextMenu.level === 1) {
            // 상담그룹 전체 삭제 - 분배호수가 설정된 상담사만 삭제
            confirmMessage = `그룹 ${contextMenu.group} 의 할당된 콜수를 삭제하시겠습니까?`;
            // 그룹에 속한 상담사 중 최대분배호수가 0보다 큰 상담사만 ID 수집
            agentIds = rawAgentData.filter((agent)=>agent.group === contextMenu.group && parseInt(agent.max_dist) > 0).map((agent)=>agent.agent_id);
        }
        if (agentIds.length === 0) {
            showAlert('삭제할 상담사가 없습니다.');
            handleCloseContextMenu();
            return;
        }
        showConfirm(confirmMessage, async ()=>{
            setIsLoading(true);
            let successCount = 0;
            let failCount = 0;
            // 선택된 모든 상담사에 대해 삭제 처리
            for (const agentId of agentIds){
                try {
                    await new Promise((resolve, reject)=>{
                        deleteMaxCallMutation({
                            campaign_id: parseInt(selectedCampaignId),
                            agent_id: agentId
                        }, {
                            onSuccess: (response)=>{
                                if (response.result_code === 0) {
                                    successCount++;
                                    resolve();
                                } else {
                                    failCount++;
                                    reject(new Error(response.result_msg));
                                }
                            },
                            onError: (error)=>{
                                failCount++;
                                reject(error);
                            }
                        });
                    });
                } catch (error) {
                    console.error('삭제 중 오류 발생:', error);
                }
            }
            setIsLoading(false);
            // 화면 데이터 업데이트
            setRawAgentData((prevData)=>prevData.map((row)=>{
                    if (agentIds.includes(row.agent_id)) {
                        return {
                            ...row,
                            max_dist: '0',
                            current_resp: '0',
                            fix_flag: 'N'
                        };
                    }
                    return row;
                }));
            // 편집 중인 데이터에서도 제거
            if (Object.keys(editedRows).length > 0) {
                const newEditedRows = {
                    ...editedRows
                };
                // 해당하는 모든 행 ID에 대해 편집 데이터 제거
                Object.keys(newEditedRows).forEach((rowId)=>{
                    const agentId = rowId.replace('agent-', '');
                    if (agentIds.includes(agentId)) {
                        delete newEditedRows[rowId];
                    }
                });
                setEditedRows(newEditedRows);
                setHasChanges(Object.keys(newEditedRows).length > 0);
            }
            // showAlert(`삭제 완료`);
            // 컨텍스트 메뉴 닫기
            handleCloseContextMenu();
        });
    };
    // 최대분배호수 일괄 변경 적용 및 즉시 저장
    const handleApplyBulkLimit = async ()=>{
        if (!bulkLimitModal.maxLimit) {
            showAlert('최대 발신 건수를 입력해주세요.');
            return;
        }
        const maxLimit = parseInt(bulkLimitModal.maxLimit);
        if (isNaN(maxLimit) || maxLimit <= 0) {
            showAlert('최대 발신 건수는 0보다 큰 숫자여야 합니다.');
            return;
        }
        if (maxLimit > 99999) {
            showAlert('최대 발신 건수는 99999까지 입력 가능합니다.');
            return;
        }
        // 영향을 받는 상담사 ID 찾기 - 정확한 필터링으로 수정
        let targetAgents = [];
        if (bulkLimitModal.targetLevel === 1) {
            // 상담그룹에 속한 모든 상담사만 정확히 필터링
            targetAgents = rawAgentData.filter((agent)=>agent.group === bulkLimitModal.targetGroup);
        // console.log(`그룹 ${bulkLimitModal.targetGroup}에 속한 상담사 ${targetAgents.length}명 선택됨`);
        } else if (bulkLimitModal.targetLevel === 2) {
            // 상담파트에 속한 모든 상담사만 정확히 필터링
            targetAgents = rawAgentData.filter((agent)=>agent.part === bulkLimitModal.targetPart);
        // console.log(`파트 ${bulkLimitModal.targetPart}에 속한 상담사 ${targetAgents.length}명 선택됨`);
        }
        if (targetAgents.length === 0) {
            showAlert('변경할 상담사가 없습니다.');
            return;
        }
        console.log("targetAgents : ", targetAgents);
        // 모달 닫기
        setBulkLimitModal((prev)=>({
                ...prev,
                isOpen: false
            }));
        // 로딩 시작
        setIsLoading(true);
        // 지연 추가
        await new Promise((resolve)=>setTimeout(resolve, 300));
        let successCount = 0;
        let failCount = 0;
        // #### 일괄 수정은 update api로 보내기!
        const agentIds = targetAgents.map((agent)=>agent.agent_id);
        const updateArr = [];
        // 변경 대상 상담사 ID 100개씩 자르기 (한 요청에 최대 100개의 상담사 ID)
        for(let i = 0; i < targetAgents.length; i += 100){
            updateArr.push(targetAgents.slice(i, i + 100));
        }
        for (const agent of updateArr){
            const saveData = agent.map((row)=>{
                const agent_id = row.agent_id.replace('agent-', '');
                return {
                    campaign_id: parseInt(selectedCampaignId),
                    agent_id: agent_id,
                    max_call: maxLimit,
                    fix_flag: bulkLimitModal.fixFlag ? 1 : 0
                };
            });
            // console.log("saveData : ", saveData);
            await new Promise((resolve, reject)=>{
                updateMaxCallMutation(saveData, {
                    onSuccess: (response)=>{
                        if (response.result_code === 0) {
                            successCount++;
                            resolve();
                        } else {
                            // 이미 적용된 설정이라면 성공으로 처리
                            if (response.result_msg && response.result_msg.includes("No action is needed")) {
                                successCount++;
                                resolve();
                            } else {
                                failCount++;
                                reject(new Error(response.result_msg));
                            }
                        }
                    },
                    onError: (error)=>{
                        // "No action is needed" 오류는 무시하고 성공으로 처리
                        if (error.message && error.message.includes("No action is needed")) {
                            successCount++;
                            resolve();
                        } else {
                            failCount++;
                            reject(error);
                        }
                    }
                });
            });
        } // end of for
        // console.log("successCount : ",successCount);
        // console.log("failcount : ", failCount);
        // 화면 데이터 직접 업데이트 (API 응답을 기다리지 않고)
        setRawAgentData((prevData)=>prevData.map((row)=>{
                // 선택된 상담사 ID에 포함된 경우에만 업데이트
                if (agentIds.includes(row.agent_id)) {
                    return {
                        ...row,
                        max_dist: maxLimit.toString(),
                        fix_flag: bulkLimitModal.fixFlag ? 'Y' : 'N'
                    };
                }
                return row;
            }));
        // 변경 후 목록 다시 조회
        await fetchMaxCallList({
            campaign_id: [
                parseInt(selectedCampaignId)
            ]
        });
        // 로딩 종료
        setIsLoading(false);
    // 아래는 기존 개별 api 호출
    // 모든 대상 상담사에 대해 API 호출로 바로 저장
    // for (const agent of targetAgents) {
    //   const saveData = {
    //     campaign_id: parseInt(selectedCampaignId),
    //     agent_id: agent.agent_id,
    //     max_call: maxLimit,
    //     fix_flag: bulkLimitModal.fixFlag ? 1 : 0
    //   };
    //   // 기존 설정 존재 여부 확인 (max_dist가 0이 아닌 경우)
    //   const isExisting = parseInt(agent.max_dist) > 0;
    //   try {
    //     if (isExisting) {
    //       // 기존 설정 수정
    //       await new Promise<void>((resolve, reject) => {
    //         updateMaxCallMutation(saveData, {
    //           onSuccess: (response) => {
    //             if (response.result_code === 0) {
    //               successCount++;
    //               resolve();
    //             } else {
    //               // 이미 적용된 설정이라면 성공으로 처리
    //               if (response.result_msg && response.result_msg.includes("No action is needed")) {
    //                 successCount++;
    //                 resolve();
    //               } else {
    //                 failCount++;
    //                 reject(new Error(response.result_msg));
    //               }
    //             }
    //           },
    //           onError: (error) => {
    //             // "No action is needed" 오류는 무시하고 성공으로 처리
    //             if (error.message && error.message.includes("No action is needed")) {
    //               successCount++;
    //               resolve();
    //             } else {
    //               failCount++;
    //               reject(error);
    //             }
    //           }
    //         });
    //       });
    //     } else {
    //       // 새 설정 생성
    //       await new Promise<void>((resolve, reject) => {
    //         createMaxCallMutation(saveData, {
    //           onSuccess: (response) => {
    //             if (response.result_code === 0) {
    //               successCount++;
    //               resolve();
    //             } else {
    //               // 이미 적용된 설정이라면 성공으로 처리
    //               if (response.result_msg && response.result_msg.includes("No action is needed")) {
    //                 successCount++;
    //                 resolve();
    //               } else {
    //                 failCount++;
    //                 reject(new Error(response.result_msg));
    //               }
    //             }
    //           },
    //           onError: (error) => {
    //             // "No action is needed" 오류는 무시하고 성공으로 처리
    //             if (error.message && error.message.includes("No action is needed")) {
    //               successCount++;
    //               resolve();
    //             } else {
    //               failCount++;
    //               reject(error);
    //             }
    //           }
    //         });
    //       });
    //     }
    //   } catch (error) {
    //     console.error('저장 중 오류 발생:', error);
    //   }
    // } // end of for
    // 화면 데이터 직접 업데이트 (API 응답을 기다리지 않고)
    // setRawAgentData(prevData => 
    //   prevData.map(row => {
    //     // 선택된 상담사 ID에 포함된 경우에만 업데이트
    //     if (agentIds.includes(row.agent_id)) {
    //       return {
    //         ...row,
    //         max_dist: maxLimit.toString(),
    //         fix_flag: bulkLimitModal.fixFlag ? 'Y' : 'N'
    //       };
    //     }
    //     return row;
    //   })
    // );
    // // 변경 후 목록 다시 조회
    // await fetchMaxCallList({
    //   campaign_id: [parseInt(selectedCampaignId)]
    // });
    // // 로딩 종료
    // setIsLoading(false);
    }; // end of handleApplyBulkLimit
    // Toggle row expansion - 행 확장/축소 토글 개선
    const toggleRowExpand = (rowId)=>{
        // 새로운 확장 상태 세트 생성
        const newExpandedRows = new Set(expandedRows);
        // 현재 노드의 확장 상태 업데이트
        if (expandedRows.has(rowId)) {
            // 해당 노드 및 모든 하위 노드를 축소
            const nodeToCollapse = treeData.reduce((foundNode, center)=>{
                if (foundNode) return foundNode;
                if (center.id === rowId) return center;
                // 센터 내 그룹에서 찾기
                if (center.children) {
                    const groupNode = center.children.find((group)=>group.id === rowId);
                    if (groupNode) return groupNode;
                    // 그룹 내 파트에서 찾기
                    for (const group of center.children){
                        if (group.children) {
                            const partNode = group.children.find((part)=>part.id === rowId);
                            if (partNode) return partNode;
                        }
                    }
                }
                return null;
            }, null);
            // 하위 노드의 ID 수집 및 삭제
            const removeChildrenIds = (node)=>{
                if (!node || !node.children) return;
                node.children.forEach((child)=>{
                    newExpandedRows.delete(child.id);
                    removeChildrenIds(child);
                });
            };
            newExpandedRows.delete(rowId);
            removeChildrenIds(nodeToCollapse);
        } else {
            // 노드 확장
            newExpandedRows.add(rowId);
        }
        setExpandedRows(newExpandedRows);
    };
    const rowKeyGetter = (row)=>row.id;
    // 고급된 열 정의 - 이제 편집 가능한 셀 포함
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DistributionLimit.useMemo[columns]": ()=>[
                {
                    key: 'center',
                    name: '센터',
                    width: 200,
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            const indent = row.level * 20;
                            const hasToggle = row.hasChildren;
                            const centerContent = row.level === 3 ? row.center : '';
                            // 계층 구조 표시 (기존의 hierarchy 열 기능)
                            let hierarchyContent = '';
                            if (row.level === 0) {
                                hierarchyContent = `센터: ${row.center}`;
                            } else if (row.level === 1) {
                                hierarchyContent = `상담그룹: ${row.group}`;
                            } else if (row.level === 2) {
                                hierarchyContent = `상담파트: ${row.part}`;
                            } else if (row.level === 3) {
                                // 상담사 레벨에서는 계층 표시 없이 센터 값만 보여줌
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginLeft: `${indent}px`
                                    },
                                    children: centerContent
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1496,
                                    columnNumber: 18
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: `${indent}px`
                                },
                                className: "flex items-center",
                                children: [
                                    hasToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        // onClick={(e) => {
                                        //   e.stopPropagation();
                                        //   toggleRowExpand(row.id);
                                        // }}
                                        // className="cursor-pointer mr-2"
                                        className: "mr-2",
                                        style: {
                                            display: 'inline-block',
                                            width: '9px',
                                            height: '9px',
                                            border: '1px solid #999',
                                            backgroundColor: '#f1f1f1',
                                            lineHeight: '7px',
                                            textAlign: 'center',
                                            fontSize: '9px',
                                            fontWeight: 'bold',
                                            color: '#333',
                                            marginRight: '5px'
                                        },
                                        children: row.isExpanded ? '-' : '+'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1502,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: hierarchyContent
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1526,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1500,
                                columnNumber: 11
                            }, this);
                        }
                    }["DistributionLimit.useMemo[columns]"]
                },
                {
                    key: 'group',
                    name: '상담그룹',
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            // 상담사 행에만 데이터 표시
                            return row.level === 3 ? row.group : '';
                        }
                    }["DistributionLimit.useMemo[columns]"]
                },
                {
                    key: 'part',
                    name: '상담파트',
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            // 상담사 행에만 데이터 표시
                            return row.level === 3 ? row.part : '';
                        }
                    }["DistributionLimit.useMemo[columns]"]
                },
                {
                    key: 'agent_id',
                    name: '상담사 아이디',
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            return row.level === 3 ? row.agent_id : '';
                        }
                    }["DistributionLimit.useMemo[columns]"]
                },
                {
                    key: 'agent_name',
                    name: '상담사 이름',
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            return row.level === 3 ? row.agent_name : '';
                        }
                    }["DistributionLimit.useMemo[columns]"]
                },
                {
                    key: 'max_dist',
                    name: '최대 분배호수',
                    width: 120,
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            if (row.level !== 3) return '';
                            // 편집 가능한 셀로 변경
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-2 flex justify-center w-full ${row.hasChanges ? 'bg-yellow-50' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "0",
                                    max: "99999",
                                    value: getCellValue(row, 'max_dist'),
                                    // onChange={(e) => handleCellChange(row, 'max_dist', e.target.value)}
                                    onChange: {
                                        "DistributionLimit.useMemo[columns]": (e)=>{
                                            let inputValue = e.target.value;
                                            // 강제로 99999 넘으면 잘라주기
                                            if (parseInt(inputValue) > 99999) {
                                                showAlert('최대 분배호수는 99999 까지 입력 가능합니다.');
                                                inputValue = "99999";
                                            }
                                            handleCellChange(row, 'max_dist', inputValue);
                                        }
                                    }["DistributionLimit.useMemo[columns]"],
                                    className: "w-full h-full px-2 text-center border-0 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1570,
                                columnNumber: 11
                            }, this);
                        }
                    }["DistributionLimit.useMemo[columns]"]
                },
                {
                    key: 'current_resp',
                    name: '현재 응답호수',
                    width: 120,
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            return row.level === 3 ? row.current_resp : '';
                        }
                    }["DistributionLimit.useMemo[columns]"]
                },
                {
                    key: 'fix_flag',
                    name: '호수 고정',
                    width: 120,
                    renderCell: {
                        "DistributionLimit.useMemo[columns]": ({ row })=>{
                            if (row.level !== 3) return '';
                            // 편집 가능한 드롭다운으로 변경
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: row.hasChanges ? 'bg-yellow-50' : '',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: getCellValue(row, 'fix_flag'),
                                    onChange: {
                                        "DistributionLimit.useMemo[columns]": (e)=>handleCellChange(row, 'fix_flag', e.target.value)
                                    }["DistributionLimit.useMemo[columns]"],
                                    className: "w-full h-full text-center border-0 bg-transparent focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Y",
                                            children: "고정"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "N",
                                            children: "미고정"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                            lineNumber: 1618,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1612,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1611,
                                columnNumber: 11
                            }, this);
                        }
                    }["DistributionLimit.useMemo[columns]"]
                }
            ]
    }["DistributionLimit.useMemo[columns]"], [
        editedRows
    ]);
    const handleCellClick = ({ row })=>{
        // 계층 노드 클릭 시 확장/축소
        if (row.level !== 3 && row.hasChildren) {
            toggleRowExpand(row.id);
        }
    };
    const getRowClass = (row)=>{
        // 편집된 행은 강조 표시
        if (row.level === 3 && editedRows[row.id]) {
            return 'bg-[#FFFAEE]';
        }
        // 레벨별 배경색 설정
        if (row.level === 0) {
            return 'bg-[#fafafa]';
        } else if (row.level === 1) {
            return 'bg-[#f5faff]';
        }
        return '';
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistributionLimit.useEffect": ()=>{
            if (activeTabId === 9) {
                const tempData = openedTabs.filter({
                    "DistributionLimit.useEffect.tempData": (tab)=>tab.id === 9
                }["DistributionLimit.useEffect.tempData"]);
                if (tempData.length > 0 && tempData[0].campaignId && tempData[0].campaignName) {
                    setSelectedCampaignId(tempData[0].campaignId);
                    setSelectedCampaignName(tempData[0].campaignName);
                    // 캠페인 객체도 업데이트
                    const campaign = campaigns.find({
                        "DistributionLimit.useEffect.campaign": (c)=>c.campaign_id.toString() === tempData[0].campaignId
                    }["DistributionLimit.useEffect.campaign"]);
                    if (campaign) {
                        setSelectedCampaign(campaign);
                    }
                }
            }
        }
    }["DistributionLimit.useEffect"], [
        activeTabId,
        openedTabs,
        campaigns,
        setSelectedCampaign
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: selectedCampaignId,
                                        onValueChange: handleCampaignIdChange,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-[140px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "캠페인선택"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                    lineNumber: 1676,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                lineNumber: 1675,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                style: {
                                                    maxHeight: '300px',
                                                    overflowY: 'auto'
                                                },
                                                children: campaigns.map((campaign)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: campaign.campaign_id.toString(),
                                                        children: campaign.campaign_id
                                                    }, campaign.campaign_id, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                        lineNumber: 1680,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                lineNumber: 1678,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1671,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>{
                                    if (hasChanges) {
                                        showConfirm("저장되지 않은 변경사항이 있습니다. 계속하시겠습니까?", ()=>{
                                            setSelectedCampaignId('');
                                            setSelectedCampaignName('');
                                            setSelectedCampaign(null);
                                            setEditedRows({});
                                            setHasChanges(false);
                                            setIsModalOpen(true);
                                        });
                                    } else {
                                        setSelectedCampaignId('');
                                        setSelectedCampaignName('');
                                        setSelectedCampaign(null);
                                        setIsModalOpen(true);
                                    }
                                },
                                children: "캠페인조회"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1690,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                value: selectedCampaignName,
                                readOnly: true,
                                className: "w-[140px]",
                                disabled: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm w-full ml-5",
                                children: [
                                    "응답호수 초기화 시간 : ",
                                    initTime === "9999" ? "없음" : `${initTime.slice(0, 2)}:${initTime.slice(2)}`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1719,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                        lineNumber: 1668,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                onClick: openTimeSettingModal,
                                children: "초기화시간 변경"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1724,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                onClick: ()=>setIsTimeRemoveOpen(true),
                                children: "초기화시간 설정해제"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1725,
                                columnNumber: 11
                            }, this),
                            hasChanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                        variant: "outline",
                                        onClick: handleCancelChanges,
                                        children: "변경취소"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1728,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                        onClick: handleBulkSave,
                                        children: "저장"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1729,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                        lineNumber: 1723,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                lineNumber: 1667,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: "할당 상담사 목록"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1737,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "w-12 min-w-12",
                                        children: "보기설정"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: viewFilter,
                                        onValueChange: setViewFilter,
                                        defaultValue: "all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "w-[250px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "해당 상담사 전체"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                    lineNumber: 1746,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                lineNumber: 1745,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "all",
                                                        children: "해당 상담사 전체"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                        lineNumber: 1749,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "remaining",
                                                        children: "잔여 호수가 남은 상담사"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                        lineNumber: 1750,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "no-remaining",
                                                        children: "잔여 호수가 없는 상담사"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                        lineNumber: 1751,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "no-limit",
                                                        children: "최대 분배호수가 설정되지 않은 상담사"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                        lineNumber: 1752,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "has-limit",
                                                        children: "최대 분배호수가 설정된 상담사"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                        lineNumber: 1753,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                                lineNumber: 1748,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                        lineNumber: 1740,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1738,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                        lineNumber: 1736,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-custom-wrap h-[560px]",
                        ref: gridRef,
                        onContextMenu: (e)=>e.preventDefault(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    columns: columns,
                                    rows: flattenRows(treeData),
                                    className: "grid-custom",
                                    onCellClick: handleCellClick,
                                    rowKeyGetter: rowKeyGetter,
                                    rowHeight: 30,
                                    headerRowHeight: 30,
                                    rowClass: getRowClass,
                                    enableVirtualization: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1760,
                                    columnNumber: 13
                                }, this),
                                contextMenu.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$DistributionLimit$2f$context_menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    x: contextMenu.x,
                                    y: contextMenu.y,
                                    onDelete: handleDeleteMaxCall,
                                    onChangeBulkLimit: handleOpenBulkLimitModal,
                                    onClose: handleCloseContextMenu,
                                    level: contextMenu.level
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1774,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                        lineNumber: 1758,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-[20px] text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1 notice-li",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• 상담사에게 분배하는 콜 수를 제한합니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1788,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• 운영시간 중의 일괄처리(Batch)작업은 많은 부하를 발생시켜 정상적인 운영이 불가능 할 수 있습니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1789,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• 일괄처리작업의 경우, 발신 량이 적은 시간이나, 업무 종료 후 작업하시기를 권장합니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1790,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                            lineNumber: 1787,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                        lineNumber: 1786,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                lineNumber: 1735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onSelect: handleModalSelect
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                lineNumber: 1795,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isTimeSettingOpen,
                message: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: initTime === "9999" ? "현재 설정 값이 없습니다. 시간을 입력하세요" : `현재설정값 : ${initTime.slice(0, 2)}시 ${initTime.slice(2)}분`
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                            lineNumber: 1805,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$DistributionLimit$2f$TimePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: timeValue,
                                onChange: setTimeValue
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                lineNumber: 1812,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                            lineNumber: 1811,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                    lineNumber: 1804,
                    columnNumber: 11
                }, void 0),
                title: "초기화 시간 설정",
                type: "1",
                onClose: handleTimeSettingSave,
                onCancle: ()=>setIsTimeSettingOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                lineNumber: 1801,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: bulkLimitModal.isOpen,
                message: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-2",
                            children: bulkLimitModal.targetLevel === 1 ? `그룹 ${bulkLimitModal.targetGroup}의 할당된 콜수를 일괄 변경합니다.` : bulkLimitModal.targetLevel === 2 ? `파트 ${bulkLimitModal.targetPart}의 할당된 콜수를 일괄 변경합니다.` : ''
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                            lineNumber: 1830,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "w-32 min-w-32",
                                    children: "최대 발신 건수"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1838,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$OnlyNumberInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "text",
                                    min: 1,
                                    max: 99999,
                                    value: bulkLimitModal.maxLimit,
                                    onChange: (e)=>{
                                        const value = e.target.value;
                                        const numericValue = parseInt(value, 10);
                                        if (numericValue <= 0) {
                                            showAlert("최대 발신건수는 최소 1부터 입력 가능합니다.");
                                            setBulkLimitModal((prev)=>({
                                                    ...prev,
                                                    maxLimit: "1"
                                                }));
                                            return;
                                        }
                                        if (numericValue > 99999) {
                                            showAlert("최대 발신건수는 99999까지 입력 가능합니다.");
                                            setBulkLimitModal((prev)=>({
                                                    ...prev,
                                                    maxLimit: "99999"
                                                }));
                                            return;
                                        }
                                        setBulkLimitModal((prev)=>({
                                                ...prev,
                                                maxLimit: value
                                            }));
                                    },
                                    className: "w-[140px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1839,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                            lineNumber: 1837,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    id: "fixFlagCheckbox",
                                    checked: bulkLimitModal.fixFlag,
                                    onChange: (e)=>setBulkLimitModal((prev)=>({
                                                ...prev,
                                                fixFlag: e.target.checked
                                            })),
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1866,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "fixFlagCheckbox",
                                    children: "호수 일괄고정"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                                    lineNumber: 1873,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                            lineNumber: 1865,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                    lineNumber: 1829,
                    columnNumber: 11
                }, void 0),
                title: "최대분배호수 일괄 변경",
                type: "1",
                onClose: handleApplyBulkLimit,
                onCancle: ()=>setBulkLimitModal((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                lineNumber: 1826,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isTimeRemoveOpen,
                message: "초기화 시간 설정을 해제 하시겠습니까?",
                title: "초기화 시간 설정해제",
                type: "1",
                onClose: handleTimeRemove,
                onCancle: ()=>setIsTimeRemoveOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                lineNumber: 1883,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: alertState.isOpen,
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                onClose: alertState.onConfirm,
                onCancle: alertState.onCancel
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
                lineNumber: 1892,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/DistributionLimit/index.tsx",
        lineNumber: 1666,
        columnNumber: 5
    }, this);
};
_s(DistributionLimit, "Tn8DIoOMWPnnw+WtsG1p2iwMjY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCampaignAgent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignAgentList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCounselorList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxCallList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCreateMaxCall"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForUpdateMaxCall"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxCallInitTimeList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteMaxCall"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForMaxCall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMaxCallInitTimeUpdate"]
    ];
});
_c = DistributionLimit;
const __TURBOPACK__default__export__ = DistributionLimit;
var _c;
__turbopack_refresh__.register(_c, "DistributionLimit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/SkillEdit/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForCounselorList.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkillUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForCampaignSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
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
;
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2'
};
const SkillEdit = ()=>{
    _s();
    const { tenants, campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { tenant_id, role_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSkill, setSelectedSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCampaignRows, setSelectedCampaignRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [selectedAgentRows, setSelectedAgentRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [filteredCampaigns, setFilteredCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredAgents, setFilteredAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allCampaigns, setAllCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 다중 선택 스킬 관리를 위한 상태 추가 (체크박스로 선택된 항목들)
    const [selectedSkillRows, setSelectedSkillRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 신규 등록을 위한 초기 상태
    const initialSkillState = {
        center: '',
        tenant: '',
        tenantId: tenant_id,
        skillId: '',
        skillName: '',
        description: '',
        campaignCount: 0,
        agentCount: 0
    };
    // 수정 가능한 필드들을 위한 상태
    const [editableFields, setEditableFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tenantId: tenant_id,
        skillName: '',
        description: ''
    });
    // 새로운 스킬 생성 모드인지 여부
    const [isNewMode, setIsNewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '2',
        onConfirm: {
            "SkillEdit.useState": ()=>{}
        }["SkillEdit.useState"],
        onCancel: {
            "SkillEdit.useState": ()=>{}
        }["SkillEdit.useState"]
    });
    // 스킬 그리드 컬럼
    const skillColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SkillEdit.useMemo[skillColumns]": ()=>[
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectColumn"],
                {
                    key: 'center',
                    name: '센터'
                },
                {
                    key: 'tenant',
                    name: '테넌트'
                },
                {
                    key: 'skillId',
                    name: '스킬아이디'
                },
                {
                    key: 'skillName',
                    name: '스킬이름'
                },
                {
                    key: 'description',
                    name: '설명'
                },
                {
                    key: 'campaignCount',
                    name: '소속캠페인 수'
                },
                {
                    key: 'agentCount',
                    name: '소속상담사 수'
                }
            ]
    }["SkillEdit.useMemo[skillColumns]"], []);
    // 캠페인 그리드 컬럼
    const campaignColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SkillEdit.useMemo[campaignColumns]": ()=>[
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectColumn"],
                {
                    key: 'campaignId',
                    name: '캠페인 아이디'
                },
                {
                    key: 'campaignName',
                    name: '캠페인 이름'
                },
                {
                    key: 'mode',
                    name: '캠페인 모드'
                }
            ]
    }["SkillEdit.useMemo[campaignColumns]"], []);
    // 상담사 그리드 컬럼
    const agentColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SkillEdit.useMemo[agentColumns]": ()=>[
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectColumn"],
                {
                    key: 'teamId',
                    name: '팀아이디'
                },
                {
                    key: 'teamName',
                    name: '팀이름'
                },
                {
                    key: 'loginId',
                    name: '로그인아이디'
                },
                {
                    key: 'agentId',
                    name: '상담사아이디'
                },
                {
                    key: 'agentName',
                    name: '상담사 이름'
                },
                {
                    key: 'consultMode',
                    name: '상담모드'
                }
            ]
    }["SkillEdit.useMemo[agentColumns]"], []);
    const getBlendKindText = (blendKind)=>{
        switch(blendKind){
            case '1':
                return '인바운드';
            case '2':
                return '아웃바운드';
            case '3':
                return '블렌드';
            default:
                return 'Unknown';
        }
    };
    // 캠페인 발신 모드 변환 함수
    const getDialModeText = (dialMode)=>{
        switch(dialMode){
            case 1:
                return 'Power Mode';
            case 2:
                return 'Progressive Mode';
            case 3:
                return 'Predictive Mode';
            case 5:
                return 'Preview Mode';
            default:
                return 'Unknown';
        }
    };
    const getRowClass = (row)=>{
        return selectedSkill?.skillId === row.skillId ? 'bg-amber-50' : '';
    };
    // 스킬 ID 자동 생성 함수
    const generateSkillId = ()=>{
        // 스킬 ID가 없는 경우 기본값으로 1 사용
        if (rows.length === 0) return "1";
        // 모든 스킬 ID를 숫자로 변환 (숫자가 아닌 경우 필터링)
        const numericSkillIds = rows.map((row)=>row.skillId).filter((id)=>/^\d+$/.test(id)) // 순수 숫자 형식만 필터링
        .map((id)=>parseInt(id, 10));
        // 최대값 찾기
        const maxSkillId = numericSkillIds.length > 0 ? Math.max(...numericSkillIds) : 0;
        // 최대값 + 1 반환
        return String(maxSkillId + 1);
    };
    // 스킬 로우 클릭 이벤트 핸들러
    const handleSkillClick = ({ row })=>{
        setSelectedSkill(row);
        setSelectedCampaignRows(new Set());
        setSelectedAgentRows(new Set());
        setEditableFields({
            tenantId: row.tenantId,
            skillName: row.skillName,
            description: row.description
        });
        setIsNewMode(false);
        // 캠페인 데이터 불러오기
        const loadCampaignData = ()=>{
            if (campaignData && campaignData.result_data) {
                const skillCampaignEntry = campaignData.result_data.find((entry)=>String(entry.skill_id) === row.skillId);
                const campaignIds = skillCampaignEntry ? skillCampaignEntry.campaign_id : [];
                const relatedCampaigns = allCampaigns.filter((campaign)=>campaignIds.includes(campaign.campaignId));
                setFilteredCampaigns(relatedCampaigns);
            } else {
                // 캠페인 데이터가 아직 없는 경우 다시 불러오기
                fetchSkillCampaignList();
            }
        };
        loadCampaignData();
        // 상담사 불러오기
        fetchCounselorAssignList({
            tenantId: row.tenantId,
            skillId: Number(row.skillId)
        });
    };
    // 스킬 체크박스 선택 변경 이벤트 핸들러 (다중 선택)
    const handleSkillSelectionChange = (selectedRows)=>{
        // 체크박스 선택 상태만 업데이트 (상세 정보는 변경하지 않음)
        setSelectedSkillRows(selectedRows);
    };
    const handleCampaignSelectionChange = (selectedRows)=>{
        setSelectedCampaignRows(selectedRows);
    };
    const handleAgentSelectionChange = (selectedRows)=>{
        setSelectedAgentRows(selectedRows);
    };
    const handleSkillUnassign = ()=>{
        if (selectedCampaignRows.size === 0) {
            showAlert('스킬을 해제할 캠페인을 선택해주세요.');
            return;
        }
        if (!selectedSkill) {
            showAlert('현재 선택된 스킬이 없습니다.');
            return;
        }
        const currentSkillId = parseInt(selectedSkill.skillId, 10);
        showConfirm('선택한 캠페인에서 현재 스킬을 해제하시겠습니까?', async ()=>{
            // 선택된 캠페인 ID 배열 생성
            const selectedCampaignIds = Array.from(selectedCampaignRows).map((campaignId)=>{
                const campaign = filteredCampaigns.find((c)=>c.campaignId === campaignId);
                return campaign ? parseInt(campaign.campaignId, 10) : 0;
            }).filter((id)=>id !== 0);
            // 최신 캠페인 스킬 데이터 가져오기 위한 호출
            campaignSkillList({
                session_key: '',
                tenant_id: tenant_id
            }, {
                onSuccess: async (data)=>{
                    const campaignSkillData = data.result_data || [];
                    // console.log("최신 캠페인 스킬 데이터", data);
                    // console.log("선택된 캠페인 ID", selectedCampaignIds);
                    // 진행 상태 추적
                    let successCount = 0;
                    let failCount = 0;
                    // 각 캠페인에 대해 API 호출
                    for (const campaignId of selectedCampaignIds){
                        try {
                            // 해당 캠페인의 스킬 데이터 찾기
                            const campaignSkillInfo = campaignSkillData.find((item)=>item.campaign_id === campaignId);
                            if (!campaignSkillInfo) {
                                failCount++;
                                // console.error(`캠페인 ID ${campaignId}의 스킬 정보를 찾을 수 없습니다.`);
                                showAlert(`캠페인 ID ${campaignId}의 스킬 정보를 찾을 수 없습니다.`);
                                continue;
                            }
                            // 현재 선택된 스킬을 제외한 스킬 ID 배열
                            const remainingSkillIds = campaignSkillInfo.skill_id.filter((skillId)=>skillId !== currentSkillId);
                            // 업데이트 API 호출
                            await new Promise((resolve)=>{
                                campaignSkillUpdate({
                                    campaign_id: campaignId,
                                    skill_id: remainingSkillIds
                                }, {
                                    onSuccess: ()=>{
                                        successCount++;
                                        resolve(null);
                                    },
                                    onError: (error)=>{
                                        failCount++;
                                        // console.error(`캠페인 ID ${campaignId} 스킬 해제 실패:`, error);
                                        showAlert(`캠페인 ID ${campaignId} 스킬 해제 실패: ${error}`);
                                        resolve(null);
                                    }
                                });
                            });
                        } catch (error) {
                            failCount++;
                            // console.error(`캠페인 ID ${campaignId} 스킬 해제 오류:`, error);
                            showAlert(`캠페인 ID ${campaignId} 스킬 해제 오류: ${error}`);
                        }
                    }
                    // 작업 완료 후 메시지 표시
                    if (failCount === 0) {
                        showAlert(`${successCount}개 캠페인에서 스킬이 성공적으로 해제되었습니다.`);
                    } else {
                        showAlert(`${successCount}개 성공, ${failCount}개 실패하였습니다.`);
                    }
                    // 데이터 갱신
                    fetchSkillList({
                        tenant_id_array: tenants.map((tenant)=>tenant.tenant_id)
                    });
                    fetchSkillCampaignList();
                    // UI에서 선택된 캠페인 즉시 제거 (그리드 즉시 갱신)
                    const updatedCampaigns = filteredCampaigns.filter((campaign)=>!selectedCampaignRows.has(campaign.campaignId));
                    setFilteredCampaigns(updatedCampaigns);
                    // 선택 초기화
                    setSelectedCampaignRows(new Set());
                    // 선택된 스킬의 캠페인 카운트 업데이트
                    if (selectedSkill) {
                        setSelectedSkill((prev)=>prev ? {
                                ...prev,
                                campaignCount: prev.campaignCount - successCount
                            } : prev);
                    }
                },
                onError: (error)=>{
                    if (error.message.split('||')[0] === '5') {
                        setAlertState({
                            ...errorMessage,
                            isOpen: true,
                            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                            onConfirm: closeAlert,
                            onCancel: ()=>{}
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                        setTimeout(()=>{
                            router.push('/login');
                        }, 1000);
                    } else {
                        showAlert(`캠페인 스킬 정보 조회 실패: ${error.message}`);
                    }
                }
            });
        });
    };
    const handleAgentSkillUnassign = ()=>{
        if (selectedAgentRows.size === 0) {
            showAlert('스킬을 해제할 상담사을 선택해주세요.');
            return;
        }
        // 선택된 상담사 ID 배열 생성
        const selectedAgentIds = Array.from(selectedAgentRows).map((agentId)=>{
            const agent = filteredAgents.find((agent)=>agent.agentId === agentId);
            return agent ? agent.agentId : '';
        }).filter((id)=>id !== ''); // 빈 ID 필터링
        // 실제로 API 호출하기 전에 확인 메시지 표시
        showConfirm(`선택한 ${selectedAgentIds.length}명의 상담사 스킬을 해제하시겠습니까?`, ()=>{
            // 먼저 UI 업데이트 - 이 부분이 중요!
            if (selectedSkill) {
                // 1. 소속상담사 목록에서 선택된 상담사들 제거
                const updatedAgents = filteredAgents.filter((agent)=>!selectedAgentRows.has(agent.agentId));
                setFilteredAgents(updatedAgents);
                // 2. 스킬목록에서 소속상담사 수 갱신
                const newAgentCount = selectedSkill.agentCount - selectedAgentIds.length;
                // 전체 스킬 목록 업데이트
                setRows((prevRows)=>prevRows.map((row)=>row.skillId === selectedSkill.skillId ? {
                            ...row,
                            agentCount: newAgentCount
                        } : row));
                // 선택된 스킬 정보 업데이트
                setSelectedSkill({
                    ...selectedSkill,
                    agentCount: newAgentCount
                });
            }
            // 선택 초기화
            setSelectedAgentRows(new Set());
            // API 호출
            deleteAgentSkill({
                skill_id: Number(selectedSkill?.skillId || 0),
                agent_id: selectedAgentIds
            });
        });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleNew = ()=>{
        setSelectedSkill({
            ...initialSkillState,
            skillId: generateSkillId()
        });
        setEditableFields({
            tenantId: tenant_id,
            skillName: '',
            description: ''
        });
        setSelectedCampaignRows(new Set());
        setSelectedAgentRows(new Set());
        setFilteredCampaigns([]);
        setFilteredAgents([]);
        setIsNewMode(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSave = ()=>{
        if (isNewMode && (!editableFields.skillName || !editableFields.description)) {
            showAlert('스킬 이름과 설명을 모두 입력해주세요.');
            return;
        }
        const skillData = {
            skill_id: Number(selectedSkill?.skillId),
            tenant_id: editableFields.tenantId,
            skill_name: editableFields.skillName,
            skill_description: editableFields.description
        };
        const savedSkillId = String(selectedSkill?.skillId);
        if (isNewMode) {
            createSkill(skillData, {
                onSuccess: ()=>{
                    fetchSkillList({
                        tenant_id_array: tenants.map((tenant)=>tenant.tenant_id)
                    });
                    setTimeout(()=>{
                        const newSkill = rows.find((r)=>r.skillId === savedSkillId);
                        if (newSkill) {
                            handleSkillClick({
                                row: newSkill
                            });
                        }
                    }, 300);
                    setIsNewMode(false);
                },
                onError: (error)=>{
                    if (error.message.split('||')[0] === '5') {
                        setAlertState({
                            ...errorMessage,
                            isOpen: true,
                            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                            onConfirm: closeAlert,
                            onCancel: ()=>{}
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                        setTimeout(()=>{
                            router.push('/login');
                        }, 1000);
                    } else {
                        showAlert(`저장 실패: ${error.message}`);
                    }
                }
            });
        } else {
            updateSkill(skillData, {
                onSuccess: ()=>{
                    fetchSkillList({
                        tenant_id_array: tenants.map((tenant)=>tenant.tenant_id)
                    });
                },
                onError: (error)=>{
                    if (error.message.split('||')[0] === '5') {
                        setAlertState({
                            ...errorMessage,
                            isOpen: true,
                            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                            onConfirm: closeAlert,
                            onCancel: ()=>{}
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                        setTimeout(()=>{
                            router.push('/login');
                        }, 1000);
                    } else {
                        showAlert(`수정 실패: ${error.message}`);
                    }
                }
            });
        }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleDelete = ()=>{
        // 체크박스로 선택된 스킬이 있는 경우 다중 삭제 진행
        if (selectedSkillRows.size > 0) {
            // 선택된 스킬 ID 배열 생성
            const selectedSkillIds = Array.from(selectedSkillRows);
            // 선택된 스킬 중 사용 중인 스킬이 있는지 확인
            const inUseSkills = selectedSkillIds.map((skillId)=>rows.find((row)=>row.skillId === skillId)).filter((skill)=>skill && (skill.campaignCount > 0 || skill.agentCount > 0));
            if (inUseSkills.length > 0) {
                // 사용 중인 스킬 이름들을 출력
                const inUseSkillNames = inUseSkills.map((skill)=>skill?.skillName).join(', ');
                showAlert(`다음 스킬은 사용 중이므로 삭제할 수 없습니다: ${inUseSkillNames}`);
                return;
            }
            // 확인 메시지
            const confirmMessage = selectedSkillIds.length === 1 ? '선택한 스킬을 삭제하시겠습니까?\n\n※주의 : 삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해주세요.' : `선택한 ${selectedSkillIds.length}개 스킬을 삭제하시겠습니까?\n\n※주의 : 삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해주세요.`;
            showConfirm(confirmMessage, async ()=>{
                let successCount = 0;
                let failCount = 0;
                // 각 스킬에 대해 API 호출
                for (const skillId of selectedSkillIds){
                    try {
                        await new Promise((resolve, reject)=>{
                            deleteSkill({
                                skill_id: Number(skillId),
                                skill_name: editableFields.skillName
                            }, {
                                onSuccess: ()=>{
                                    successCount++;
                                    resolve();
                                },
                                onError: (error)=>{
                                    if (error.message.split('||')[0] === '5') {
                                        setAlertState({
                                            ...errorMessage,
                                            isOpen: true,
                                            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                                            onConfirm: closeAlert,
                                            onCancel: ()=>{}
                                        });
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                                        setTimeout(()=>{
                                            router.push('/login');
                                        }, 1000);
                                    } else {
                                        failCount++;
                                        showAlert(`스킬 ID ${skillId} 삭제 실패: ${error}`);
                                        reject(error);
                                    }
                                }
                            });
                        });
                    } catch (error) {
                        showAlert(`스킬 ID ${skillId} 삭제 중 오류:  ${error}`);
                    }
                }
                // 작업 완료 후 메시지 표시
                if (failCount === 0) {
                    showAlert(`${successCount}개 스킬이 성공적으로 삭제되었습니다.`);
                } else {
                    showAlert(`${successCount}개 삭제 성공, ${failCount}개 삭제 실패하였습니다.`);
                }
                // 스킬 리스트 새로고침
                fetchSkillList({
                    tenant_id_array: tenants.map((tenant)=>tenant.tenant_id)
                });
                // 체크박스 선택 초기화
                setSelectedSkillRows(new Set());
                // 선택된 스킬이 삭제되었을 경우 상세 정보도 초기화
                if (selectedSkill && selectedSkillIds.includes(selectedSkill.skillId)) {
                    setSelectedSkill(null);
                    setEditableFields({
                        tenantId: tenant_id,
                        skillName: '',
                        description: ''
                    });
                    setFilteredCampaigns([]);
                    setFilteredAgents([]);
                    setSelectedCampaignRows(new Set());
                    setSelectedAgentRows(new Set());
                }
            });
        } else if (selectedSkill) {
            if (selectedSkill.campaignCount > 0 || selectedSkill.agentCount > 0) {
                showAlert('사용 중인 스킬은 삭제할 수 없습니다.');
                return;
            }
            showConfirm('선택한 스킬을 삭제하시겠습니까?\n\n※주의 : 삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해주세요.', ()=>{
                deleteSkill({
                    skill_id: Number(selectedSkill.skillId),
                    skill_name: editableFields.skillName
                }, {
                    onSuccess: ()=>{
                        // 스킬 리스트 새로고침
                        fetchSkillList({
                            tenant_id_array: tenants.map((tenant)=>tenant.tenant_id)
                        });
                        // 상세 정보 초기화
                        setSelectedSkill(null);
                        setEditableFields({
                            tenantId: tenant_id,
                            skillName: '',
                            description: ''
                        });
                        // 관련 데이터 초기화
                        setFilteredCampaigns([]);
                        setFilteredAgents([]);
                        setSelectedCampaignRows(new Set());
                        setSelectedAgentRows(new Set());
                        showAlert('스킬이 성공적으로 삭제되었습니다.');
                    },
                    onError: (error)=>{
                        if (error.message.split('||')[0] === '5') {
                            setAlertState({
                                ...errorMessage,
                                isOpen: true,
                                message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                                onConfirm: closeAlert,
                                onCancel: ()=>{}
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                            setTimeout(()=>{
                                router.push('/login');
                            }, 1000);
                        } else {
                            showAlert(`삭제 실패: ${error.message}`);
                        }
                    }
                });
            });
        } else {
            showAlert('삭제할 스킬을 선택해주세요.');
        }
    };
    const handleInputChange = (field, value)=>{
        setEditableFields((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleTenantChange = (value)=>{
        const tenantId = parseInt(value, 10);
        setEditableFields((prev)=>({
                ...prev,
                tenantId
            }));
    };
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
    // API 상태 관리
    const [campaignData, setCampaignData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [agentData, setAgentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // API Hooks
    const { mutate: fetchCounselorList, data: counselorData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCounselorList"])({
        onError: {
            "SkillEdit.useApiForCounselorList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForCounselorList": ()=>{}
                        }["SkillEdit.useApiForCounselorList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForCounselorList": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForCounselorList"], 1000);
                } else {
                    showAlert(`상담사 리스트 조회 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForCounselorList"]
    });
    const { mutate: fetchSkillList, data: skillData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillList"])({
        onError: {
            "SkillEdit.useApiForSkillList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForSkillList": ()=>{}
                        }["SkillEdit.useApiForSkillList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForSkillList": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForSkillList"], 1000);
                } else {
                    showAlert(`스킬 리스트 조회 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForSkillList"]
    });
    const { mutate: fetchSkillCampaignList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillCampaignList"])({
        onSuccess: {
            "SkillEdit.useApiForSkillCampaignList": (data)=>{
                setCampaignData(data);
            }
        }["SkillEdit.useApiForSkillCampaignList"],
        onError: {
            "SkillEdit.useApiForSkillCampaignList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForSkillCampaignList": ()=>{}
                        }["SkillEdit.useApiForSkillCampaignList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForSkillCampaignList": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForSkillCampaignList"], 1000);
                }
            }
        }["SkillEdit.useApiForSkillCampaignList"]
    });
    const { mutate: fetchSkillAgentList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillAgentList"])({
        onSuccess: {
            "SkillEdit.useApiForSkillAgentList": (data)=>{
                setAgentData(data);
            }
        }["SkillEdit.useApiForSkillAgentList"],
        onError: {
            "SkillEdit.useApiForSkillAgentList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForSkillAgentList": ()=>{}
                        }["SkillEdit.useApiForSkillAgentList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForSkillAgentList": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForSkillAgentList"], 1000);
                }
            }
        }["SkillEdit.useApiForSkillAgentList"]
    });
    const { mutate: fetchCampaignList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignList"])({
        onSuccess: {
            "SkillEdit.useApiForCampaignList": (data)=>{
                const campaigns = data.result_data.map({
                    "SkillEdit.useApiForCampaignList.campaigns": (campaign)=>({
                            skillId: '',
                            campaignId: String(campaign.campaign_id),
                            campaignName: campaign.campaign_name,
                            mode: getDialModeText(campaign.dial_mode)
                        })
                }["SkillEdit.useApiForCampaignList.campaigns"]);
                setAllCampaigns(campaigns);
            }
        }["SkillEdit.useApiForCampaignList"],
        onError: {
            "SkillEdit.useApiForCampaignList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForCampaignList": ()=>{}
                        }["SkillEdit.useApiForCampaignList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForCampaignList": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForCampaignList"], 1000);
                }
            }
        }["SkillEdit.useApiForCampaignList"]
    });
    const { mutate: fetchCounselorAssignList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCounselorAssignList"])({
        onSuccess: {
            "SkillEdit.useApiForCounselorAssignList": (data)=>{
                if (data.skillAssignedCounselorList) {
                    const mappedAgents = data.skillAssignedCounselorList.map({
                        "SkillEdit.useApiForCounselorAssignList.mappedAgents": (counselor)=>({
                                skillId: selectedSkill?.skillId || '',
                                teamId: counselor.affiliationTeamId,
                                teamName: counselor.affiliationTeamName,
                                loginId: counselor.counselorId,
                                agentId: counselor.counselorEmplNum,
                                agentName: counselor.counselorname,
                                consultMode: getBlendKindText(counselor.blendKind)
                            })
                    }["SkillEdit.useApiForCounselorAssignList.mappedAgents"]);
                    // 소속 상담사목록 팀아이디 기준 오름차순 정렬
                    setFilteredAgents(mappedAgents.sort({
                        "SkillEdit.useApiForCounselorAssignList": (a, b)=>Number(a.teamId) - Number(b.teamId)
                    }["SkillEdit.useApiForCounselorAssignList"]));
                }
            }
        }["SkillEdit.useApiForCounselorAssignList"],
        onError: {
            "SkillEdit.useApiForCounselorAssignList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForCounselorAssignList": ()=>{}
                        }["SkillEdit.useApiForCounselorAssignList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForCounselorAssignList": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForCounselorAssignList"], 1000);
                }
            }
        }["SkillEdit.useApiForCounselorAssignList"]
    });
    const { mutate: createSkill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCreateSkill"])({
        onSuccess: {
            "SkillEdit.useApiForCreateSkill": ()=>{
                showAlert('스킬이 성공적으로 추가되었습니다.');
            }
        }["SkillEdit.useApiForCreateSkill"],
        onError: {
            "SkillEdit.useApiForCreateSkill": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForCreateSkill": ()=>{}
                        }["SkillEdit.useApiForCreateSkill"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForCreateSkill": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForCreateSkill"], 1000);
                } else {
                    showAlert(`스킬 추가 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForCreateSkill"]
    });
    const { mutate: updateSkill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForUpdateSkill"])({
        onSuccess: {
            "SkillEdit.useApiForUpdateSkill": ()=>{
                showAlert('스킬이 성공적으로 수정되었습니다.');
            }
        }["SkillEdit.useApiForUpdateSkill"],
        onError: {
            "SkillEdit.useApiForUpdateSkill": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForUpdateSkill": ()=>{}
                        }["SkillEdit.useApiForUpdateSkill"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForUpdateSkill": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForUpdateSkill"], 1000);
                } else {
                    showAlert(`스킬 수정 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForUpdateSkill"]
    });
    const { mutate: deleteSkill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteSkill"])({
        onSuccess: {
            "SkillEdit.useApiForDeleteSkill": ()=>{
            // showAlert('스킬이 성공적으로 삭제되었습니다.');
            }
        }["SkillEdit.useApiForDeleteSkill"],
        onError: {
            "SkillEdit.useApiForDeleteSkill": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForDeleteSkill": ()=>{}
                        }["SkillEdit.useApiForDeleteSkill"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForDeleteSkill": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForDeleteSkill"], 1000);
                } else {
                    showAlert(`스킬 삭제 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForDeleteSkill"]
    });
    const { mutate: deleteAgentSkill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteAgentSkill"])({
        onSuccess: {
            "SkillEdit.useApiForDeleteAgentSkill": ()=>{
                // API 성공 알림만 표시
                showAlert('상담사 스킬이 성공적으로 해제되었습니다.');
            }
        }["SkillEdit.useApiForDeleteAgentSkill"],
        onError: {
            "SkillEdit.useApiForDeleteAgentSkill": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForDeleteAgentSkill": ()=>{}
                        }["SkillEdit.useApiForDeleteAgentSkill"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForDeleteAgentSkill": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForDeleteAgentSkill"], 1000);
                } else {
                    showAlert(`상담사 스킬 해제 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForDeleteAgentSkill"]
    });
    // 캠페인스킬 조회
    const { mutate: campaignSkillList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"])({
        onError: {
            "SkillEdit.useApiForCampaignSkill": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForCampaignSkill": ()=>{}
                        }["SkillEdit.useApiForCampaignSkill"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForCampaignSkill": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForCampaignSkill"], 1000);
                } else {
                    showAlert(`캠페인 스킬 조회 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForCampaignSkill"]
    });
    const { mutate: campaignSkillUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"])({
        onSuccess: {
            "SkillEdit.useApiForCampaignSkillUpdate": ()=>{
                showAlert('캠페인 스킬 할당이 성공적으로 완료되었습니다.');
            }
        }["SkillEdit.useApiForCampaignSkillUpdate"],
        onError: {
            "SkillEdit.useApiForCampaignSkillUpdate": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SkillEdit.useApiForCampaignSkillUpdate": ()=>{}
                        }["SkillEdit.useApiForCampaignSkillUpdate"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SkillEdit.useApiForCampaignSkillUpdate": ()=>{
                            router.push('/login');
                        }
                    }["SkillEdit.useApiForCampaignSkillUpdate"], 1000);
                } else {
                    showAlert(`캠페인 스킬 할당 실패: ${error.message}`);
                }
            }
        }["SkillEdit.useApiForCampaignSkillUpdate"]
    });
    // 테넌트 선택시 관련 센터 정보 가져오기
    const getSelectedTenantCenterName = ()=>{
        if (!counselorData?.organizationList || !selectedSkill) return '';
        // 선택된 테넌트 ID에 해당하는 센터 이름 찾기
        for (const org of counselorData.organizationList){
            const tenant = org.tenantInfo.find((t)=>t.tenantId === String(editableFields.tenantId));
            if (tenant) {
                return org.centerName;
            }
        }
        return '';
    };
    const isFieldDisabled = ()=>{
        // 선택된 스킬이 없고 신규 모드도 아니면 비활성화
        return !selectedSkill && !isNewMode;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillEdit.useEffect": ()=>{
            if (campaignData && selectedSkill) {
                // 캠페인 데이터 구조 탐색
                let campaignIds = [];
                if (campaignData.result_data && Array.isArray(campaignData.result_data)) {
                    const skillCampaignEntry = campaignData.result_data.find({
                        "SkillEdit.useEffect.skillCampaignEntry": (entry)=>String(entry.skill_id) === selectedSkill.skillId
                    }["SkillEdit.useEffect.skillCampaignEntry"]);
                    if (skillCampaignEntry && Array.isArray(skillCampaignEntry.campaign_id)) {
                        campaignIds = skillCampaignEntry.campaign_id;
                    }
                }
                // 문자열과 숫자 비교를 모두 허용하기 위한 필터링
                const relatedCampaigns = allCampaigns.filter({
                    "SkillEdit.useEffect.relatedCampaigns": (campaign)=>{
                        const campaignIdNum = Number(campaign.campaignId);
                        return campaignIds.some({
                            "SkillEdit.useEffect.relatedCampaigns": (id)=>id === campaign.campaignId || id === campaignIdNum
                        }["SkillEdit.useEffect.relatedCampaigns"]);
                    }
                }["SkillEdit.useEffect.relatedCampaigns"]);
                setFilteredCampaigns(relatedCampaigns);
            }
        }
    }["SkillEdit.useEffect"], [
        campaignData,
        selectedSkill,
        allCampaigns
    ]);
    // 스킬 목록이 업데이트 될 때마다 현재 선택된 스킬의 상세 정보도 갱신하는 useEffect 추가
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillEdit.useEffect": ()=>{
            if (selectedSkill && rows.length > 0) {
                const updatedSkill = rows.find({
                    "SkillEdit.useEffect.updatedSkill": (row)=>row.skillId === selectedSkill.skillId
                }["SkillEdit.useEffect.updatedSkill"]);
                if (updatedSkill) {
                    // 필요한 정보가 변경된 경우만 업데이트 (불필요한 리렌더링 방지)
                    if (updatedSkill.center !== selectedSkill.center || updatedSkill.tenant !== selectedSkill.tenant || updatedSkill.skillName !== selectedSkill.skillName || updatedSkill.description !== selectedSkill.description) {
                        setSelectedSkill(updatedSkill);
                        setEditableFields({
                            tenantId: updatedSkill.tenantId,
                            skillName: updatedSkill.skillName,
                            description: updatedSkill.description
                        });
                    }
                }
            }
        }
    }["SkillEdit.useEffect"], [
        rows,
        selectedSkill
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillEdit.useEffect": ()=>{
            fetchCounselorList({
                tenantId: tenant_id,
                roleId: role_id
            });
            fetchSkillList({
                tenant_id_array: tenants.map({
                    "SkillEdit.useEffect": (tenant)=>tenant.tenant_id
                }["SkillEdit.useEffect"])
            });
            fetchSkillCampaignList();
            fetchSkillAgentList();
            fetchCampaignList();
            campaignSkillList({
                session_key: '',
                tenant_id: tenant_id
            });
        }
    }["SkillEdit.useEffect"], [
        tenant_id,
        role_id,
        tenants,
        fetchCounselorList,
        fetchSkillList,
        fetchSkillCampaignList,
        fetchSkillAgentList,
        fetchCampaignList,
        campaignSkillList
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillEdit.useEffect": ()=>{
            if (counselorData?.organizationList && skillData?.result_data) {
                const tenantMap = {};
                counselorData.organizationList.forEach({
                    "SkillEdit.useEffect": (org)=>{
                        const centerName = org.centerName;
                        org.tenantInfo.forEach({
                            "SkillEdit.useEffect": (tenant)=>{
                                tenantMap[tenant.tenantId] = {
                                    centerName,
                                    tenantName: tenant.tenantName
                                };
                            }
                        }["SkillEdit.useEffect"]);
                    }
                }["SkillEdit.useEffect"]);
                const campaignResultData = campaignData?.result_data || [];
                const agentResultData = agentData?.result_data || [];
                const skillRows = skillData.result_data.map({
                    "SkillEdit.useEffect.skillRows": (skill)=>{
                        const tenantInfo = tenantMap[String(skill.tenant_id)] || {
                            centerName: '',
                            tenantName: ''
                        };
                        const campaignEntry = campaignResultData.find({
                            "SkillEdit.useEffect.skillRows.campaignEntry": (item)=>String(item.skill_id) === String(skill.skill_id)
                        }["SkillEdit.useEffect.skillRows.campaignEntry"]);
                        const agentEntry = agentResultData.find({
                            "SkillEdit.useEffect.skillRows.agentEntry": (item)=>String(item.skill_id) === String(skill.skill_id)
                        }["SkillEdit.useEffect.skillRows.agentEntry"]);
                        return {
                            center: tenantInfo.centerName,
                            tenant: tenantInfo.tenantName,
                            tenantId: skill.tenant_id,
                            skillId: String(skill.skill_id),
                            skillName: skill.skill_name,
                            description: skill.skill_description,
                            campaignCount: campaignEntry ? campaignEntry.campaign_id.length : 0,
                            agentCount: agentEntry ? agentEntry.agent_id.length : 0
                        };
                    }
                }["SkillEdit.useEffect.skillRows"]);
                setRows(skillRows);
            }
        }
    }["SkillEdit.useEffect"], [
        counselorData,
        skillData,
        campaignData,
        agentData
    ]);
    // 키보드 이벤트 핸들러 추가
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillEdit.useEffect": ()=>{
            const handleKeyDown = {
                "SkillEdit.useEffect.handleKeyDown": (event)=>{
                    if (alertState.isOpen) {
                        // Enter 키: 확인 버튼 클릭
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            alertState.onConfirm();
                            return;
                        }
                        // Esc 키: 취소 버튼 클릭 (type이 '1'인 경우에만)
                        if (event.key === 'Escape' && alertState.type === '1') {
                            event.preventDefault();
                            alertState.onCancel();
                            return;
                        }
                        // 경고창이 열려 있을 때는 다른 단축키를 처리하지 않음
                        return;
                    }
                    // Ctrl + S: 저장
                    if (event.ctrlKey && event.key === 's') {
                        event.preventDefault();
                        handleSave();
                    }
                    // Ctrl + D 또는 Delete: 삭제
                    if (event.ctrlKey && event.key === 'd' || event.key === 'Delete') {
                        event.preventDefault();
                        handleDelete();
                    }
                    // 아래 화살표: 신규
                    if (event.key === 'ArrowDown' && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                        // 입력 필드에서는 아래 화살표가 정상 작동하도록 예외 처리
                        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'SELECT' && document.activeElement?.tagName !== 'TEXTAREA') {
                            // 이벤트의 기본 동작과 전파를 모두 차단
                            event.preventDefault();
                            event.stopPropagation();
                            handleNew();
                        }
                    }
                }
            }["SkillEdit.useEffect.handleKeyDown"];
            // 캡처 단계에서 이벤트 리스너 등록 (이벤트 버블링보다 먼저 실행됨)
            window.addEventListener('keydown', handleKeyDown, true);
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            return ({
                "SkillEdit.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown, true);
                }
            })["SkillEdit.useEffect"];
        }
    }["SkillEdit.useEffect"], [
        alertState,
        handleDelete,
        handleNew,
        handleSave
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[800px] flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "스킬 목록",
                                        totalCount: rows.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid-custom-wrap h-[230px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            columns: skillColumns,
                                            rows: rows,
                                            className: "grid-custom",
                                            // onCellClick={handleSkillClick}
                                            onCellClick: (props)=>{
                                                // SelectColumn을 클릭한 경우는 제외하고 로우 선택 처리
                                                if (props.column.key !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectColumn"].key) {
                                                    handleSkillClick(props);
                                                }
                                            },
                                            rowKeyGetter: (row)=>row.skillId,
                                            // selectedRows={selectedSkill ? new Set<string>([selectedSkill.skillId]) : new Set<string>()}
                                            selectedRows: selectedSkillRows,
                                            onSelectedRowsChange: handleSkillSelectionChange,
                                            rowHeight: 30,
                                            headerRowHeight: 30,
                                            rowClass: getRowClass,
                                            enableVirtualization: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                lineNumber: 1148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "소속 캠페인 목록",
                                        totalCount: filteredCampaigns.length,
                                        buttons: [
                                            {
                                                label: "선택 캠페인 스킬할당 해제",
                                                onClick: handleSkillUnassign
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid-custom-wrap h-[200px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            columns: campaignColumns,
                                            rows: filteredCampaigns,
                                            className: "grid-custom",
                                            rowKeyGetter: (row)=>row.campaignId,
                                            selectedRows: selectedCampaignRows,
                                            onSelectedRowsChange: handleCampaignSelectionChange,
                                            rowHeight: 30,
                                            headerRowHeight: 30,
                                            enableVirtualization: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                            lineNumber: 1187,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                lineNumber: 1175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "소속 상담사 목록",
                                        totalCount: filteredAgents.length,
                                        buttons: [
                                            {
                                                label: "선택 상담사 스킬할당 해제",
                                                onClick: handleAgentSkillUnassign
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid-custom-wrap h-[200px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            columns: agentColumns,
                                            rows: filteredAgents,
                                            className: "grid-custom",
                                            rowKeyGetter: (row)=>row.agentId,
                                            selectedRows: selectedAgentRows,
                                            onSelectedRowsChange: handleAgentSelectionChange,
                                            rowHeight: 30,
                                            headerRowHeight: 30,
                                            enableVirtualization: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                lineNumber: 1202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                        lineNumber: 1146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[513px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[8rem] min-w-[8rem]",
                                                children: "상담센터"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                value: isNewMode ? getSelectedTenantCenterName() : selectedSkill?.center || '',
                                                className: "w-full",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[8rem] min-w-[8rem]",
                                                children: "테넌트"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1241,
                                                columnNumber: 15
                                            }, this),
                                            isNewMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: editableFields.tenantId ? String(editableFields.tenantId) : '',
                                                onValueChange: handleTenantChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                            lineNumber: 1248,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                        lineNumber: 1247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: tenants.map((tenant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: String(tenant.tenant_id),
                                                                children: tenant.tenant_name
                                                            }, tenant.tenant_id, false, {
                                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                                lineNumber: 1252,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                        lineNumber: 1250,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1243,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                value: selectedSkill?.tenant || '',
                                                className: "w-full",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[8rem] min-w-[8rem]",
                                                children: "스킬아이디"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                value: selectedSkill?.skillId || '',
                                                className: "w-full",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1268,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[8rem] min-w-[8rem]",
                                                children: "스킬이름"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1275,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                value: editableFields.skillName,
                                                onChange: (e)=>handleInputChange('skillName', e.target.value),
                                                className: "w-full",
                                                disabled: isFieldDisabled()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1276,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "w-[8rem] min-w-[8rem]",
                                                children: "설명"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                value: editableFields.description,
                                                onChange: (e)=>handleInputChange('description', e.target.value),
                                                className: "w-full",
                                                disabled: isFieldDisabled()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                lineNumber: 1231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                        onClick: handleDelete,
                                        children: "삭제"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                        onClick: handleNew,
                                        children: "신규"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                        onClick: handleSave,
                                        children: "저장"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                        lineNumber: 1296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                lineNumber: 1293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-[20px] text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1 notice-li",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• 스킬을 추가, 수정, 삭제할 수 있습니다."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• 사용 중인 스킬은 추가 및 삭제할 수 없습니다."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• 기능설명",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 23
                                                }, this),
                                                "스킬 추가 = 키보드 ↓",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                    lineNumber: 1304,
                                                    columnNumber: 30
                                                }, this),
                                                "스킬 삭제 = 키보드 Delete",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                    lineNumber: 1305,
                                                    columnNumber: 35
                                                }, this),
                                                "체크박스를 선택하여 다중 선택 가능(다중선택은 삭제만 가능)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                            lineNumber: 1302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• 단축키",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 24
                                                }, this),
                                                "저장하기(Ctrl+S)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 41
                                                }, this),
                                                "삭제하기(Ctrl+D or Del)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                            lineNumber: 1309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                    lineNumber: 1299,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                                lineNumber: 1298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                        lineNumber: 1230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                lineNumber: 1145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: alertState.isOpen,
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                onClose: alertState.onConfirm,
                onCancle: alertState.onCancel
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
                lineNumber: 1314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/SkillEdit/index.tsx",
        lineNumber: 1144,
        columnNumber: 5
    }, this);
};
_s(SkillEdit, "fUoiv5Ud8tw0n6EowAJhHDKiQ/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCounselorList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillCampaignList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillAgentList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForCounselorList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCounselorAssignList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCreateSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForUpdateSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteAgentSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForCampaignSkillUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCampaignSkillUpdate"]
    ];
});
_c = SkillEdit;
const __TURBOPACK__default__export__ = SkillEdit;
var _c;
__turbopack_refresh__.register(_c, "SkillEdit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/SuspendView/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForSuspendView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/preferences/hooks/useApiForSkill.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
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
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2'
};
const SuspendView = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { tenants, campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('campaign');
    const [suspendedCampaigns, setSuspendedCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [suspendedSkills, setSuspendedSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [skillMasterList, setSkillMasterList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSkillDataLoaded, setIsSkillDataLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: '',
        title: '알림',
        type: '1',
        onConfirm: {
            "SuspendView.useState": ()=>{}
        }["SuspendView.useState"],
        onCancel: {
            "SuspendView.useState": ()=>{}
        }["SuspendView.useState"]
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
    // 서스팬드 캠페인 조회
    const { mutate: fetchSuspendedCampaignList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSuspendedCampaignList"])({
        onSuccess: {
            "SuspendView.useApiForSuspendedCampaignList": (data)=>{
                setSuspendedCampaigns(data.result_data || []);
                setSelectedRows(new Set());
            }
        }["SuspendView.useApiForSuspendedCampaignList"],
        onError: {
            "SuspendView.useApiForSuspendedCampaignList": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SuspendView.useApiForSuspendedCampaignList": ()=>{}
                        }["SuspendView.useApiForSuspendedCampaignList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SuspendView.useApiForSuspendedCampaignList": ()=>{
                            router.push('/login');
                        }
                    }["SuspendView.useApiForSuspendedCampaignList"], 1000);
                } else {
                    showAlert(`캠페인 리스트 조회 실패: ${data.message}`);
                }
            }
        }["SuspendView.useApiForSuspendedCampaignList"]
    });
    // 서스팬드 캠페인 삭제
    const { mutate: deleteSuspendedCampaign } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteSuspendedCampaign"])({
        onSuccess: {
            "SuspendView.useApiForDeleteSuspendedCampaign": (data)=>{
                showAlert('삭제가 완료되었습니다.');
                fetchSuspendedCampaignList();
            }
        }["SuspendView.useApiForDeleteSuspendedCampaign"],
        onError: {
            "SuspendView.useApiForDeleteSuspendedCampaign": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SuspendView.useApiForDeleteSuspendedCampaign": ()=>{}
                        }["SuspendView.useApiForDeleteSuspendedCampaign"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SuspendView.useApiForDeleteSuspendedCampaign": ()=>{
                            router.push('/login');
                        }
                    }["SuspendView.useApiForDeleteSuspendedCampaign"], 1000);
                } else {
                    showAlert(`삭제 실패: ${data.message}`);
                }
            }
        }["SuspendView.useApiForDeleteSuspendedCampaign"]
    });
    // 서스팬드 스킬 조회
    const { mutate: fetchSuspendedSkillList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSuspendedSkillList"])({
        onSuccess: {
            "SuspendView.useApiForSuspendedSkillList": (data)=>{
                setSuspendedSkills(data.result_data || []);
                setSelectedRows(new Set());
            }
        }["SuspendView.useApiForSuspendedSkillList"],
        onError: {
            "SuspendView.useApiForSuspendedSkillList": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SuspendView.useApiForSuspendedSkillList": ()=>{}
                        }["SuspendView.useApiForSuspendedSkillList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SuspendView.useApiForSuspendedSkillList": ()=>{
                            router.push('/login');
                        }
                    }["SuspendView.useApiForSuspendedSkillList"], 1000);
                } else {
                    showAlert(`스킬 리스트 조회 실패: ${data.message}`);
                }
            }
        }["SuspendView.useApiForSuspendedSkillList"]
    });
    // 서스팬드 스킬 삭제
    const { mutate: deleteSuspendedSkill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteSuspendedSkill"])({
        onSuccess: {
            "SuspendView.useApiForDeleteSuspendedSkill": (data)=>{
                showAlert('삭제가 완료되었습니다.');
                fetchSuspendedSkillList();
            }
        }["SuspendView.useApiForDeleteSuspendedSkill"],
        onError: {
            "SuspendView.useApiForDeleteSuspendedSkill": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SuspendView.useApiForDeleteSuspendedSkill": ()=>{}
                        }["SuspendView.useApiForDeleteSuspendedSkill"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SuspendView.useApiForDeleteSuspendedSkill": ()=>{
                            router.push('/login');
                        }
                    }["SuspendView.useApiForDeleteSuspendedSkill"], 1000);
                } else {
                    showAlert(`삭제 실패: ${data.message}`);
                }
            }
        }["SuspendView.useApiForDeleteSuspendedSkill"]
    });
    // 스킬 마스터 리스트 조회
    const { mutate: fetchSkillList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillList"])({
        onSuccess: {
            "SuspendView.useApiForSkillList": (data)=>{
                setSkillMasterList(data.result_data || []);
                setIsSkillDataLoaded(true);
            }
        }["SuspendView.useApiForSkillList"],
        onError: {
            "SuspendView.useApiForSkillList": (error)=>{
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        onConfirm: closeAlert,
                        onCancel: {
                            "SuspendView.useApiForSkillList": ()=>{}
                        }["SuspendView.useApiForSkillList"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
                    setTimeout({
                        "SuspendView.useApiForSkillList": ()=>{
                            router.push('/login');
                        }
                    }["SuspendView.useApiForSkillList"], 1000);
                } else {
                    showAlert(`스킬 리스트 조회 실패: ${error.message}`);
                }
            }
        }["SuspendView.useApiForSkillList"]
    });
    // 초기 렌더링 시 캠페인 모드에 필요한 API만 호출
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuspendView.useEffect": ()=>{
            fetchSuspendedCampaignList();
        }
    }["SuspendView.useEffect"], []);
    // viewMode가 변경될 때 필요한 API 호출
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuspendView.useEffect": ()=>{
            if (viewMode === 'campaign') {
                fetchSuspendedCampaignList();
            } else if (viewMode === 'skill') {
                fetchSuspendedSkillList();
                if (!isSkillDataLoaded) {
                    fetchSkillList({
                        tenant_id_array: tenants.map({
                            "SuspendView.useEffect": (tenant)=>tenant.tenant_id
                        }["SuspendView.useEffect"]) ? [] : undefined
                    });
                }
            }
        }
    }["SuspendView.useEffect"], [
        viewMode
    ]);
    // DELETE 키 이벤트 핸들러
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SuspendView.useCallback[handleKeyDown]": (event)=>{
            if (event.key === 'Delete' && selectedRows.size > 0) {
                event.preventDefault();
                handleDeleteSelected();
            }
        }
    }["SuspendView.useCallback[handleKeyDown]"], [
        selectedRows,
        viewMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuspendView.useEffect": ()=>{
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "SuspendView.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["SuspendView.useEffect"];
        }
    }["SuspendView.useEffect"], [
        handleKeyDown
    ]);
    const handleViewModeChange = (value)=>{
        setViewMode(value);
        setSelectedRows(new Set());
    };
    const handleDeleteSelected = ()=>{
        if (selectedRows.size === 0) return;
        if (viewMode === 'campaign') {
            const selectedCampaignIds = Array.from(selectedRows).map((id)=>{
                // 캠페인 ID 추출
                const row = rows.find((r)=>r.id === id);
                return row?.type === 'campaign' ? parseInt(row.campaign_id) : null;
            }).filter((id)=>id !== null);
            if (selectedCampaignIds.length === 0) return;
            showConfirm(`선택한 ${selectedCampaignIds.length}개의 캠페인을 삭제하시겠습니까?`, ()=>{
                selectedCampaignIds.forEach((id)=>{
                    deleteSuspendedCampaign(id);
                });
            });
        } else if (viewMode === 'skill') {
            const selectedSkillIds = Array.from(selectedRows).map((id)=>{
                // 스킬 ID 추출
                const row = rows.find((r)=>r.id === id);
                return row?.type === 'skill' ? parseInt(row.skill_id) : null;
            }).filter((id)=>id !== null);
            if (selectedSkillIds.length === 0) return;
            showConfirm(`선택한 ${selectedSkillIds.length}개의 스킬을 삭제하시겠습니까?`, ()=>{
                selectedSkillIds.forEach((id)=>{
                    deleteSuspendedSkill(id);
                });
            });
        }
    };
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SuspendView.useMemo[columns]": ()=>{
            return viewMode === 'campaign' ? [
                {
                    key: 'campaign_id',
                    name: '캠페인 아이디'
                },
                {
                    key: 'campaign_name',
                    name: '캠페인 이름'
                },
                {
                    key: 'release_time',
                    name: '해제시간'
                }
            ] : [
                {
                    key: 'skill_id',
                    name: '스킬 아이디'
                },
                {
                    key: 'skill_name',
                    name: '스킬 이름'
                },
                {
                    key: 'release_time',
                    name: '해제시간'
                }
            ];
        }
    }["SuspendView.useMemo[columns]"], [
        viewMode
    ]);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SuspendView.useMemo[rows]": ()=>{
            if (viewMode === 'campaign') {
                return suspendedCampaigns.map({
                    "SuspendView.useMemo[rows]": (item)=>{
                        const campaignInfo = campaigns.find({
                            "SuspendView.useMemo[rows].campaignInfo": (campaign)=>campaign.campaign_id === Number(item.campaign_id)
                        }["SuspendView.useMemo[rows].campaignInfo"]);
                        return {
                            type: 'campaign',
                            id: `campaign-${item.campaign_id}`,
                            campaign_id: String(item.campaign_id),
                            campaign_name: campaignInfo ? campaignInfo.campaign_name : '',
                            release_time: item.suspend_time
                        };
                    }
                }["SuspendView.useMemo[rows]"]);
            } else {
                return suspendedSkills.map({
                    "SuspendView.useMemo[rows]": (item)=>{
                        const skillInfo = skillMasterList.find({
                            "SuspendView.useMemo[rows].skillInfo": (skill)=>skill.skill_id === Number(item.skill_id)
                        }["SuspendView.useMemo[rows].skillInfo"]);
                        return {
                            type: 'skill',
                            id: `skill-${item.skill_id}`,
                            skill_id: String(item.skill_id),
                            skill_name: skillInfo ? skillInfo.skill_name : '',
                            release_time: item.suspend_time
                        };
                    }
                }["SuspendView.useMemo[rows]"]);
            }
        }
    }["SuspendView.useMemo[rows]"], [
        viewMode,
        suspendedCampaigns,
        suspendedSkills,
        campaigns,
        skillMasterList
    ]);
    const rowKeyGetter = (row)=>row.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "w-[8.5rem] min-w-[8.5rem]",
                        children: "Suspend View Mode"
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: viewMode,
                        onValueChange: handleViewModeChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-32",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "View Mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "campaign",
                                        children: "캠페인"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "skill",
                                        children: "스킬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[580px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-custom-wrap h-[230px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            columns: columns,
                            rows: rows,
                            className: "grid-custom",
                            rowHeight: 30,
                            headerRowHeight: 30,
                            rowKeyGetter: rowKeyGetter,
                            selectedRows: selectedRows,
                            onSelectedRowsChange: setSelectedRows,
                            onRowsChange: ()=>{}
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    selectedRows.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm text-gray-600",
                        children: [
                            selectedRows.size,
                            "개의 ",
                            viewMode === 'campaign' ? '캠페인' : '스킬',
                            "이 선택됨. 삭제하려면 DELETE 키를 누르세요."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: alertState.isOpen,
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                onClose: alertState.onConfirm,
                onCancle: alertState.onCancel
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/operation/SuspendView/index.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
};
_s(SuspendView, "2jcKWP07hknPhhHfEKH81KBh8Og=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSuspendedCampaignList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteSuspendedCampaign"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSuspendedSkillList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSuspendView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForDeleteSuspendedSkill"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$preferences$2f$hooks$2f$useApiForSkill$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForSkillList"]
    ];
});
_c = SuspendView;
const __TURBOPACK__default__export__ = SuspendView;
var _c;
__turbopack_refresh__.register(_c, "SuspendView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/operation/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>OperationBoard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignNumberChange$2f$CampaignLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/CampaignNumberChange/CampaignLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$NumberEditDescription$2f$EditDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/NumberEditDescription/EditDescription.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CallLimitSetting$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/CallLimitSetting/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$DistributionLimit$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/DistributionLimit/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$SkillEdit$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/SkillEdit/index.tsx [app-client] (ecmascript)");
// import ConsultResultSetting from './ConsultResultSetting'
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$SuspendView$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/operation/SuspendView/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
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
function OperationBoard() {
    _s();
    const [openSectionId, setOpenSectionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('section1');
    const { activeTabId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OperationBoard.useEffect": ()=>{
            if (activeTabId === 8) {
                setOpenSectionId('section3');
            } else if (activeTabId === 9) {
                setOpenSectionId('section4');
            }
        }
    }["OperationBoard.useEffect"], [
        activeTabId
    ]);
    const toggleSection = (sectionId)=>{
        setOpenSectionId(openSectionId === sectionId ? '' : sectionId);
    };
    // 섹션 데이터를 배열로 정의
    const sections = [
        {
            id: 'section1',
            title: '캠페인별 발신번호 변경',
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CampaignNumberChange$2f$CampaignLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: 'section2',
            title: '전화번호별 설명 편집',
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$NumberEditDescription$2f$EditDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: 'section3',
            title: '예약콜 제한 설정',
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$CallLimitSetting$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: 'section4',
            title: '분배호수 제한 설정',
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$DistributionLimit$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: 'section5',
            title: '스킬편집',
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$SkillEdit$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        // { id: 'section6', title: '상담 결과코드 설정', component: ConsultResultSetting },
        {
            id: 'section7',
            title: '서스팬드',
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$operation$2f$SuspendView$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y accordion-wrap limit-width",
        children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accordion",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `accordion-btn
                ${openSectionId !== section.id ? 'border-b-0' : ''} 
                gap-[15px]`,
                            onClick: ()=>toggleSection(section.id),
                            "aria-expanded": openSectionId === section.id,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transform transition-transform duration-200 ${openSectionId === section.id ? 'rotate-180' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/chevron-down.svg",
                                        alt: "chevron",
                                        width: 10,
                                        height: 10
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/operation/index.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/index.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: section.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/operation/index.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/operation/index.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/index.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
              ${openSectionId === section.id ? 'opacity-100' : 'max-h-0 opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-[35px] px-[40px] border-t border-gray-200",
                            children: openSectionId === section.id && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(section.component)
                        }, void 0, false, {
                            fileName: "[project]/src/app/main/comp/operation/index.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/operation/index.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, section.id, true, {
                fileName: "[project]/src/app/main/comp/operation/index.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/operation/index.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(OperationBoard, "xviDgeADWKGpZkdW/ygrnOzoqgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"]
    ];
});
_c = OperationBoard;
var _c;
__turbopack_refresh__.register(_c, "OperationBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_main_comp_operation_7c79be._.js.map