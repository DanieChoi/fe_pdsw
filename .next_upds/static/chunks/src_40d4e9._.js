(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_40d4e9._.js", {

"[project]/src/widgets/header/model/menuItems.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/widgets/header/model/menuItems.ts
__turbopack_esm__({
    "menuItems": (()=>menuItems)
});
const menuItems = [
    {
        id: 1,
        menuId: 1,
        title: '캠페인 그룹관리',
        icon: '/header-menu/캠페인그룹관리.svg',
        href: '/main',
        content: null
    },
    {
        id: 2,
        menuId: 2,
        title: '캠페인 관리',
        icon: '/header-menu/캠페인관리.svg',
        href: '/campaign',
        content: null
    },
    {
        id: 3,
        menuId: 3,
        title: '통합모니터',
        icon: '/header-menu/통합모니터.svg',
        href: '/monitor',
        content: null
    },
    {
        id: 4,
        menuId: 4,
        title: '총진행상황',
        icon: '/header-menu/총진행상황.svg',
        href: '/status',
        content: null
    },
    {
        id: 5,
        menuId: 5,
        title: '발신진행상태',
        icon: '/header-menu/발신진행상태.svg',
        href: '/call',
        content: null
    },
    {
        id: 14,
        menuId: 6,
        title: '캠페인별상태',
        icon: '/header-menu/캠페인별상태.svg',
        href: '/chartCampaign',
        content: null
    },
    {
        id: 6,
        menuId: 7,
        title: '채널 모니터',
        icon: '/header-menu/채널모니터.svg',
        href: '/channel',
        content: null
    },
    {
        id: 23,
        menuId: 8,
        title: '시스템모니터링',
        icon: '/header-menu/시스템모니터링.svg',
        href: '/settings',
        content: null
    },
    {
        id: 7,
        menuId: 9,
        title: '리스트 매니저',
        icon: '/header-menu/리스트매니저.svg',
        href: '/list',
        content: null
    },
    {
        id: 8,
        menuId: 10,
        title: '예약콜 제한 설정',
        icon: '/header-menu/예약콜제한설정.svg',
        href: '/reserve',
        content: null
    },
    {
        id: 9,
        menuId: 11,
        title: '분배호수 제한 설정',
        icon: '/header-menu/분배호수제한설정.svg',
        href: '/distribute',
        content: null
    },
    {
        id: 10,
        menuId: 12,
        title: '시스템 설정',
        icon: '/header-menu/시스템설정.svg',
        href: '/system',
        content: null
    },
    {
        id: 11,
        menuId: 13,
        title: '운영 설정',
        icon: '/header-menu/운영설정.svg',
        href: '/operation',
        content: null
    },
    {
        id: 12,
        menuId: 14,
        title: '환경 설정',
        icon: '/header-menu/환경설정.svg',
        href: '/settings',
        content: null
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/header/model/contextMenuItems.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "contextMenuItems": (()=>contextMenuItems)
});
const contextMenuItems = [
    {
        id: 20,
        title: "재발신 설정",
        icon: "/header-menu/발신진행상태.svg",
        href: "/rebroadcast",
        showInHeader: false
    },
    {
        id: 21,
        title: "총진행상황",
        icon: "/header-menu/총진행상황.svg",
        href: "/status",
        showInHeader: false
    },
    {
        id: 22,
        title: "상담사상태모니터링",
        icon: "/header-menu/총진행상황.svg",
        href: "/status",
        showInHeader: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/api/apiForAddCampaginForCampaignGroup.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiForFetchSkilsWithCampaigns": (()=>apiForFetchSkilsWithCampaigns),
    "apiForGetCampaignListForCampaignGroup": (()=>apiForGetCampaignListForCampaignGroup),
    "apiForTotalCampaignList": (()=>apiForTotalCampaignList),
    "apiForTotalSkillList": (()=>apiForTotalSkillList),
    "getCampaignListForCampaignGroup": (()=>getCampaignListForCampaignGroup),
    "getSkilsWithCampaigns": (()=>getSkilsWithCampaigns),
    "getTotalCampaignList": (()=>getTotalCampaignList),
    "getTotalSkillList": (()=>getTotalSkillList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/axios.ts [app-client] (ecmascript)");
;
const apiForTotalSkillList = async (request)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("collections/skill", request);
        return response.data;
    } catch (error) {
        console.error("Skill list API call failed:", error);
        // 에러 객체에 custom 속성 추가
        const enhancedError = new Error(error.message || "스킬 정보를 가져오는데 실패했습니다.");
        // 원본 에러 정보 유지
        enhancedError.originalError = error;
        throw enhancedError;
    }
};
const getTotalSkillList = async (tenantId)=>{
    const defaultRequest = {
        filter: {
            skill_id: {
                start: 1,
                end: 9999
            },
            tenant_id: tenantId ? [
                tenantId
            ] : [
                1
            ] // 테넌트 ID가 제공되지 않으면 기본값 1 사용
        },
        sort: {
            skill_id: 0,
            tenant_id: 0
        },
        page: {
            index: 0,
            items: 100 // 더 많은 스킬 항목을 가져오기 위해 기본값보다 크게 설정
        }
    };
    return apiForTotalSkillList(defaultRequest);
};
const apiForTotalCampaignList = async (request)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("collections/campaign-list", request);
        return response.data;
    } catch (error) {
        console.error("Campaign list API call failed:", error);
        // 에러 객체에 custom 속성 추가
        const enhancedError = new Error(error.message || "캠페인 정보를 가져오는데 실패했습니다.");
        // 원본 에러 정보 유지
        enhancedError.originalError = error;
        throw enhancedError;
    }
};
const getTotalCampaignList = async (tenantId)=>{
    const defaultRequest = {
        filter: {
            tenant_id: {
                start: tenantId || 0,
                end: tenantId || 99
            }
        },
        sort: {
            tenant_id: 0
        },
        page: {
            index: 0,
            items: 9999 // 모든 캠페인 가져오기
        }
    };
    return apiForTotalCampaignList(defaultRequest);
};
const apiForFetchSkilsWithCampaigns = async (request)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("collections/campaign-skill", request);
        return response.data;
    } catch (error) {
        console.error("Campaign skills API call failed:", error);
        // 에러 객체에 custom 속성 추가
        const enhancedError = new Error(error.message || "캠페인 스킬 정보를 가져오는데 실패했습니다.");
        // 원본 에러 정보 유지
        enhancedError.originalError = error;
        throw enhancedError;
    }
};
const getSkilsWithCampaigns = async (campaignId)=>{
    const defaultRequest = {
        filter: {
            skill_id: {
                start: 1,
                end: 99
            }
        },
        sort: {},
        page: {
            index: 1,
            items: 9999
        }
    };
    // campaignId를 URL 파라미터나 요청 본문에 추가해야 할 수도 있습니다.
    // API 명세에 따라 이 부분을 수정해야 할 수 있습니다.
    return apiForFetchSkilsWithCampaigns(defaultRequest);
};
const apiForGetCampaignListForCampaignGroup = async (request)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post("collections/campaign-group-list", request);
        return response.data;
    } catch (error) {
        console.error("Campaign Group skills API call failed:", error);
        // 에러 객체에 custom 속성 추가
        const enhancedError = new Error(error.message || "캠페인 그룹 스킬 정보를 가져오는데 실패했습니다.");
        // 원본 에러 정보 유지
        enhancedError.originalError = error;
        throw enhancedError;
    }
};
const getCampaignListForCampaignGroup = async (groupId, campaignId, tenantId)=>{
    const defaultRequest = {
        filter: {
            group_id: [
                groupId
            ],
            campaign_id: campaignId ? {
                start: campaignId,
                end: campaignId
            } : {
                start: 1,
                end: 99
            }
        },
        sort: {
        },
        page: {
            index: 0,
            items: 9999
        }
    };
    return apiForGetCampaignListForCampaignGroup(defaultRequest);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// C:\nproject\fe_pdsw\src\widgets\sidebar\hooks\useApiForGetSkillsWithCampaigns.ts
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "useApiForGetSkillsWithCampaigns": (()=>useApiForGetSkillsWithCampaigns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/sidebar/api/apiForAddCampaginForCampaignGroup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useApiForGetSkillsWithCampaigns = (campaignId, isEnabled = false, options)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'skillsWithCampaigns',
            campaignId
        ],
        queryFn: {
            "useApiForGetSkillsWithCampaigns.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSkilsWithCampaigns"])(campaignId)
        }["useApiForGetSkillsWithCampaigns.useQuery"],
        enabled: isEnabled,
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000,
        ...options
    });
};
_s(useApiForGetSkillsWithCampaigns, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const __TURBOPACK__default__export__ = useApiForGetSkillsWithCampaigns;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/hooks/useTotalCampaignListForAddCampaignToCampaignGroup.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTotalCampaignListForAddCampaignToCampaignGroup": (()=>useTotalCampaignListForAddCampaignToCampaignGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/sidebar/api/apiForAddCampaginForCampaignGroup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useTotalCampaignListForAddCampaignToCampaignGroup = (tenantId, isOpen = false, options)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'campaigns',
            tenantId
        ],
        queryFn: {
            "useTotalCampaignListForAddCampaignToCampaignGroup.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalCampaignList"])(tenantId)
        }["useTotalCampaignListForAddCampaignToCampaignGroup.useQuery"],
        staleTime: 5 * 60 * 1000,
        enabled: isOpen,
        refetchOnWindowFocus: false,
        retry: 1,
        ...options
    });
};
_s(useTotalCampaignListForAddCampaignToCampaignGroup, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/hooks/useTotalSkillListForAddCampaignToCampaignGroup.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTotalSkillListForAddCampaignToCampaignGroup": (()=>useTotalSkillListForAddCampaignToCampaignGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/sidebar/api/apiForAddCampaginForCampaignGroup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useTotalSkillListForAddCampaignToCampaignGroup = (tenantId, isOpen = false, options)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'skills',
            tenantId
        ],
        queryFn: {
            "useTotalSkillListForAddCampaignToCampaignGroup.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalSkillList"])(tenantId)
        }["useTotalSkillListForAddCampaignToCampaignGroup.useQuery"],
        staleTime: 5 * 60 * 1000,
        enabled: isOpen,
        refetchOnWindowFocus: false,
        retry: 1,
        ...options
    });
};
_s(useTotalSkillListForAddCampaignToCampaignGroup, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/hooks/useApiForGetCampaignListForCampaignGroup.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "useApiForGetCampaignListForCampaignGroup": (()=>useApiForGetCampaignListForCampaignGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/sidebar/api/apiForAddCampaginForCampaignGroup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useApiForGetCampaignListForCampaignGroup = (groupId, campaignId, tenantId, isOpen = false, options)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'campaignGroupSkills',
            groupId,
            campaignId,
            tenantId
        ],
        queryFn: {
            "useApiForGetCampaignListForCampaignGroup.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$sidebar$2f$api$2f$apiForAddCampaginForCampaignGroup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCampaignListForCampaignGroup"])(groupId, campaignId, tenantId)
        }["useApiForGetCampaignListForCampaignGroup.useQuery"],
        staleTime: 5 * 60 * 1000,
        enabled: isOpen,
        refetchOnWindowFocus: false,
        retry: 1,
        ...options
    });
};
_s(useApiForGetCampaignListForCampaignGroup, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const __TURBOPACK__default__export__ = useApiForGetCampaignListForCampaignGroup;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/sidebar/dialogs/IDialogButtonForDeleteCampaignGroup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
"use client";
;
;
const IDialogButtonForDeleteCampaignGroup = ({ isOpen, groupName, onCancel, onDelete, isDeleting = false })=>{
    const message = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: [
                    "정말로 캠페인 그룹 '",
                    groupName,
                    "'을(를) 삭제하시겠습니까?"
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/sidebar/dialogs/IDialogButtonForDeleteCampaignGroup.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-destructive font-medium",
                children: "이 작업은 되돌릴 수 없습니다."
            }, void 0, false, {
                fileName: "[project]/src/widgets/sidebar/dialogs/IDialogButtonForDeleteCampaignGroup.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/sidebar/dialogs/IDialogButtonForDeleteCampaignGroup.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        title: "캠페인 그룹 삭제",
        message: message,
        type: "1",
        onClose: onDelete,
        onCancle: onCancel,
        width: "max-w-md",
        confirmDisabled: isDeleting
    }, void 0, false, {
        fileName: "[project]/src/widgets/sidebar/dialogs/IDialogButtonForDeleteCampaignGroup.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_c = IDialogButtonForDeleteCampaignGroup;
const __TURBOPACK__default__export__ = IDialogButtonForDeleteCampaignGroup;
var _c;
__turbopack_refresh__.register(_c, "IDialogButtonForDeleteCampaignGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/header/api/apiForHeader.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src\widgets\header\api\apiForHeader.ts
__turbopack_esm__({
    "apiForGetAuthorizedMenusInfoForMenuRoleId": (()=>apiForGetAuthorizedMenusInfoForMenuRoleId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/axios.ts [app-client] (ecmascript)");
;
async function apiForGetAuthorizedMenusInfoForMenuRoleId({ roleId }) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosRedisInstance"].get(`/auth/availableMenuList?roleId=${roleId}`);
    // console.log("Available menu list response:", response.data);
    return response.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/header/hooks/useApiForGetAuthorizedMenusInfoForMenuRoleId.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useApiForGetAuthorizedMenusInfoForMenuRoleId": (()=>useApiForGetAuthorizedMenusInfoForMenuRoleId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$api$2f$apiForHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/header/api/apiForHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAvailableMenuStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/useAvailableMenuStore.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
;
const useApiForGetAuthorizedMenusInfoForMenuRoleId = ({ roleId, enabled = true })=>{
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuList, setMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [headerMenuList, setHeaderMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [headerMenuIds, setHeaderMenuIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignTenantContextMenuList, setCampaignTenantContextMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignTenantContextMenuIds, setCampaignTenantContextMenuIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignTabCampaignContextMenuList, setCampaignTabCampaignContextMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignTabCampaignContextMenuIds, setCampaignTabCampaignContextMenuIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [skillAssignmentMenuList, setSkillAssignmentMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [skillAssignmentMenuIds, setSkillAssignmentMenuIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 추가된 상태 변수들
    const [campaignGroupTabTenantMenuList, setCampaignGroupTabTenantMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignGroupTabTenantMenuIds, setCampaignGroupTabTenantMenuIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignGroupTabCampaignGroupMenuList, setCampaignGroupTabCampaignGroupMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignGroupTabCampaignGroupMenuIds, setCampaignGroupTabCampaignGroupMenuIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignGroupTabCampaignMenuList, setCampaignGroupTabCampaignMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [campaignGroupTabCampaignMenuIds, setCampaignGroupTabCampaignMenuIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isError, setIsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Zustand 스토어에서 필요한 함수들 가져오기
    const { setAvailableMenus, setAvailableHeaderMenus, setAvailableHeaderMenuIds, setAvailableCampaignTenantContextMenus, setAvailableCampaignTenantContextMenuIds, setAvailableCampaignTabCampaignContextMenus, setAvailableCampaignTabCampaignContextMenuIds, setAvailableMenuIdsForSkilAssignment, // 추가된 setter 함수들
    setAvailableMenuIdsForCampaignGroupTabTenant, setAvailableMenuIdsForCampaignGroupTabCampaignGroup, setAvailableMenuIdsForCampaignGroupTabCampaign, setLoading: setStoreLoading, setError: setStoreError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAvailableMenuStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvailableMenuStore"])();
    const fetchData = async ()=>{
        setIsLoading(true);
        setStoreLoading(true);
        setIsError(false);
        setStoreError(false);
        setError(null);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$api$2f$apiForHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiForGetAuthorizedMenusInfoForMenuRoleId"])({
                roleId
            });
            // 전체 메뉴 리스트
            const allMenus = response.availableMenuList || [];
            // TOP 코드를 가진 헤더용 메뉴 필터링
            const headerMenus = allMenus.filter((menu)=>menu.locationDistinctionCode === 'TOP');
            // 헤더 메뉴 ID 배열 생성
            const headerIds = headerMenus.map((menu)=>menu.menuId);
            // CTC 코드를 가진 캠페인 테넌트 컨텍스트 메뉴 필터링
            const campaignTenantContextMenus = allMenus.filter((menu)=>menu.locationDistinctionCode === 'SCC');
            // 캠페인 테넌트 컨텍스트 메뉴 ID 배열 생성
            const campaignTenantContextIds = campaignTenantContextMenus.map((menu)=>menu.menuId);
            // CCC 코드를 가진 캠페인 탭 캠페인 컨텍스트 메뉴 필터링
            const campaignTabCampaignContextMenus = allMenus.filter((menu)=>menu.locationDistinctionCode === 'SCM');
            // 캠페인 탭 캠페인 컨텍스트 메뉴 ID 배열 생성
            const campaignTabCampaignContextIds = campaignTabCampaignContextMenus.map((menu)=>menu.menuId);
            // SSG, SST, SSS 코드를 가진 스킬 할당 메뉴 필터링
            const skillAssignmentMenus = allMenus.filter((menu)=>menu.locationDistinctionCode === 'SSG' || menu.locationDistinctionCode === 'SST' || menu.locationDistinctionCode === 'SSS');
            // 스킬 할당 메뉴 ID 배열 생성
            const skillAssignmentIds = skillAssignmentMenus.map((menu)=>menu.menuId);
            // SGT 코드를 가진 캠페인 그룹 탭 테넌트 메뉴 필터링
            const campaignGroupTabTenantMenus = allMenus.filter((menu)=>menu.locationDistinctionCode === 'SGT');
            // 캠페인 그룹 탭 테넌트 메뉴 ID 배열 생성
            const campaignGroupTabTenantIds = campaignGroupTabTenantMenus.map((menu)=>menu.menuId);
            // SGG 코드를 가진 캠페인 그룹 탭 캠페인 그룹 메뉴 필터링
            const campaignGroupTabCampaignGroupMenus = allMenus.filter((menu)=>menu.locationDistinctionCode === 'SGG');
            // 캠페인 그룹 탭 캠페인 그룹 메뉴 ID 배열 생성
            const campaignGroupTabCampaignGroupIds = campaignGroupTabCampaignGroupMenus.map((menu)=>menu.menuId);
            // SSS 코드를 가진 캠페인 그룹 탭 캠페인 메뉴 필터링
            const campaignGroupTabCampaignMenus = allMenus.filter((menu)=>menu.locationDistinctionCode === 'SGC');
            // 캠페인 그룹 탭 캠페인 메뉴 ID 배열 생성
            const campaignGroupTabCampaignIds = campaignGroupTabCampaignMenus.map((menu)=>menu.menuId);
            // 로컬 상태 업데이트
            setData(response);
            setMenuList(allMenus);
            setHeaderMenuList(headerMenus);
            setHeaderMenuIds(headerIds);
            setCampaignTenantContextMenuList(campaignTenantContextMenus);
            setCampaignTenantContextMenuIds(campaignTenantContextIds);
            setCampaignTabCampaignContextMenuList(campaignTabCampaignContextMenus);
            setCampaignTabCampaignContextMenuIds(campaignTabCampaignContextIds);
            setSkillAssignmentMenuList(skillAssignmentMenus);
            setSkillAssignmentMenuIds(skillAssignmentIds);
            setCampaignGroupTabTenantMenuList(campaignGroupTabTenantMenus);
            setCampaignGroupTabTenantMenuIds(campaignGroupTabTenantIds);
            setCampaignGroupTabCampaignGroupMenuList(campaignGroupTabCampaignGroupMenus);
            setCampaignGroupTabCampaignGroupMenuIds(campaignGroupTabCampaignGroupIds);
            setCampaignGroupTabCampaignMenuList(campaignGroupTabCampaignMenus);
            setCampaignGroupTabCampaignMenuIds(campaignGroupTabCampaignIds);
            // console.log("메뉴 권한 정보가 로컬 상태에 저장되었습니다:", allMenus);
            // console.log("헤더 메뉴 정보가 로컬 상태에 저장되었습니다:", headerMenus);
            // console.log("헤더 메뉴 ID가 로컬 상태에 저장되었습니다:", headerIds);
            // console.log("캠페인 테넌트 컨텍스트 메뉴가 로컬 상태에 저장되었습니다:", campaignTenantContextMenus);
            // console.log("캠페인 테넌트 컨텍스트 메뉴 ID가 로컬 상태에 저장되었습니다:", campaignTenantContextIds);
            // console.log("캠페인 탭 캠페인 컨텍스트 메뉴가 로컬 상태에 저장되었습니다:", campaignTabCampaignContextMenus);
            // console.log("캠페인 탭 캠페인 컨텍스트 메뉴 ID가 로컬 상태에 저장되었습니다:", campaignTabCampaignContextIds);
            // console.log("스킬 할당 메뉴가 로컬 상태에 저장되었습니다:", skillAssignmentMenus);
            // console.log("스킬 할당 메뉴 ID가 로컬 상태에 저장되었습니다:", skillAssignmentIds);
            // console.log("캠페인 그룹 탭 테넌트 메뉴가 로컬 상태에 저장되었습니다:", campaignGroupTabTenantMenus);
            // console.log("캠페인 그룹 탭 테넌트 메뉴 ID가 로컬 상태에 저장되었습니다:", campaignGroupTabTenantIds);
            // console.log("캠페인 그룹 탭 캠페인 그룹 메뉴가 로컬 상태에 저장되었습니다:", campaignGroupTabCampaignGroupMenus);
            // console.log("캠페인 그룹 탭 캠페인 그룹 메뉴 ID가 로컬 상태에 저장되었습니다:", campaignGroupTabCampaignGroupIds);
            // console.log("캠페인 그룹 탭 캠페인 메뉴가 로컬 상태에 저장되었습니다:", campaignGroupTabCampaignMenus);
            // console.log("캠페인 그룹 탭 캠페인 메뉴 ID가 로컬 상태에 저장되었습니다:", campaignGroupTabCampaignIds);
            // Zustand 스토어 업데이트
            setAvailableMenus(allMenus);
            setAvailableHeaderMenus(headerMenus);
            setAvailableHeaderMenuIds(headerIds);
            setAvailableCampaignTenantContextMenus(campaignTenantContextMenus);
            setAvailableCampaignTenantContextMenuIds(campaignTenantContextIds);
            setAvailableCampaignTabCampaignContextMenus(campaignTabCampaignContextMenus);
            setAvailableCampaignTabCampaignContextMenuIds(campaignTabCampaignContextIds);
            setAvailableMenuIdsForSkilAssignment(skillAssignmentIds);
            setAvailableMenuIdsForCampaignGroupTabTenant(campaignGroupTabTenantIds);
            setAvailableMenuIdsForCampaignGroupTabCampaignGroup(campaignGroupTabCampaignGroupIds);
            setAvailableMenuIdsForCampaignGroupTabCampaign(campaignGroupTabCampaignIds);
        } catch (err) {
            console.error('Error fetching authorized menus:', err);
            // 로컬 상태 업데이트
            setIsError(true);
            setError(err);
            // Zustand 스토어 업데이트
            setStoreError(true);
        } finally{
            // 로컬 상태 업데이트
            setIsLoading(false);
            // Zustand 스토어 업데이트
            setStoreLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApiForGetAuthorizedMenusInfoForMenuRoleId.useEffect": ()=>{
            if (enabled) {
                fetchData();
            }
        }
    }["useApiForGetAuthorizedMenusInfoForMenuRoleId.useEffect"], [
        roleId,
        enabled
    ]);
    return {
        data,
        menuList,
        headerMenuList,
        headerMenuIds,
        campaignTenantContextMenuList,
        campaignTenantContextMenuIds,
        campaignTabCampaignContextMenuList,
        campaignTabCampaignContextMenuIds,
        skillAssignmentMenuList,
        skillAssignmentMenuIds,
        // 추가된 반환값
        campaignGroupTabTenantMenuList,
        campaignGroupTabTenantMenuIds,
        campaignGroupTabCampaignGroupMenuList,
        campaignGroupTabCampaignGroupMenuIds,
        campaignGroupTabCampaignMenuList,
        campaignGroupTabCampaignMenuIds,
        isLoading,
        isError,
        error,
        refetch: fetchData
    };
};
_s(useApiForGetAuthorizedMenusInfoForMenuRoleId, "NulJ/Ikx4Eyt8JAfsnZSVr6hSbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAvailableMenuStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvailableMenuStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/header/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonButton/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$model$2f$menuItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/header/model/menuItems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/hooks/useApiForMain.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForTenants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/hooks/useApiForTenants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForFetchCounselorList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/campaignManager/hooks/useApiForFetchCounselorList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$hooks$2f$useApiForGetAuthorizedMenusInfoForMenuRoleId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/header/hooks/useApiForGetAuthorizedMenusInfoForMenuRoleId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAvailableMenuStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/useAvailableMenuStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/environmentStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/authStore.ts [app-client] (ecmascript)");
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
;
;
;
;
;
const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '1',
    onClose: ()=>{},
    onCancle: ()=>{}
};
function Header() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const _tenantId = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('tenant_id'));
    const { id, tenant_id, session_key: _sessionKey, role_id, menu_role_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    const [shouldFetchCounselors, setShouldFetchCounselors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSplitDialogOpen, setIsSplitDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { availableMenus, availableHeaderMenus, availableHeaderMenuIds, setAvailableMenus, setLoading, setError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAvailableMenuStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvailableMenuStore"])();
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openInNewWindow = ()=>{
        // 현재 화면의 크기를 가져옵니다
        const width = window.screen.width;
        const height = window.screen.height;
        // 창을 화면 중앙에 위치시킵니다
        const left = 0; // 전체 화면이므로 0으로 설정
        const top = 0; // 전체 화면이므로 0으로 설정
        const newWindow = window.open('/monitor', 'monitor-window', `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`);
        if (newWindow) {
            newWindow.focus();
            // popup 창이 열려있다면 useRef에 연결 (로그아웃시 팝업창 닫히게 하기 위함)
            popupRef.current = newWindow;
        }
    };
    const { tenants, setCampaigns, setTenants, setCounselers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { addTab, removeTab, openedTabs, duplicateTab, activeTabId, activeTabKey, getTabCountById, rows, tabGroups, setActiveTab, openCampaignManagerForUpdate, setCampaignIdForUpdateFromSideMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const { campaignListAlram, useAlramPopup, personalCampaignAlertOnly, environmentData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"])();
    const handleMenuClick = (item, event)=>{
        if (item.id === 3) {
            openInNewWindow();
            return;
        }
        if (event.ctrlKey) {
            duplicateTab(item.id);
        } else {
            // 해당 아이템의 이전 탭들을 모두 찾아서 제거
            const existingTabs = openedTabs.filter((tab)=>tab.id === item.id);
            existingTabs.forEach((tab)=>{
                removeTab(tab.id, tab.uniqueKey);
            });
            // 새로운 탭 추가
            const newTabKey = `${item.id}-${Date.now()}`;
            const newTab = {
                ...item,
                uniqueKey: newTabKey,
                content: item.content || null
            };
            addTab(newTab);
            // 탭을 추가한 후 활성 탭 설정
            setActiveTab(item.id, newTabKey);
        }
        setCampaignIdForUpdateFromSideMenu(null);
    };
    const isTabOpened = (itemId)=>{
        const existingTabs = openedTabs.filter((tab)=>tab.id === itemId);
        return existingTabs.length > 0;
    };
    const isActiveTab = (itemId)=>{
        return openedTabs.some((tab)=>tab.id === itemId && tab.id === activeTabId && tab.uniqueKey === activeTabKey);
    };
    const handleLoginOut = ()=>{
        // 쿠키 제거
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
        // AuthStore의 상태를 초기화
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().clearAuth();
        // 통합모니터창이 열려있다면 popup close
        if (popupRef.current && !popupRef.current.closed) {
            popupRef.current.close();
        }
        // 홈 또는 로그인 페이지로 리다이렉트
        router.push('/login');
    };
    // tofix  로그인 안했을때 미리 실행되서 에러 발생
    const { mutate: fetchTenants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForTenants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForTenants"])({
        onSuccess: {
            "Header.useApiForTenants": (data)=>{
                if (data.result_code === 5) {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: '로그인 정보가 없습니다.',
                        type: '2',
                        onClose: {
                            "Header.useApiForTenants": ()=>goLogin()
                        }["Header.useApiForTenants"]
                    });
                } else {
                    if (tenant_id === 0) {
                        setTenants(data.result_data);
                    } else {
                        setTenants(data.result_data.filter({
                            "Header.useApiForTenants": (data)=>data.tenant_id === tenant_id
                        }["Header.useApiForTenants"]));
                    }
                }
            }
        }["Header.useApiForTenants"],
        onError: {
            "Header.useApiForTenants": (error)=>{
                // tofix 로그인 에러 발생
                // console.error('Tenants API error:', error);
                // alert("에러 발생 여기!")
                console.log("error 에러 발생 여기 !!!!!! : ", error);
                if (error.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: '로그인 정보가 없습니다.',
                        type: '2',
                        onClose: {
                            "Header.useApiForTenants": ()=>goLogin()
                        }["Header.useApiForTenants"]
                    });
                }
            }
        }["Header.useApiForTenants"]
    });
    const goLogin = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
        router.push('/login');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (tenants.length > 0) {
                fetchMain({
                    session_key: _sessionKey,
                    tenant_id: _tenantId
                });
            }
        }
    }["Header.useEffect"], [
        tenants
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            fetchTenants({
                session_key: _sessionKey,
                tenant_id: _tenantId
            });
        }
    }["Header.useEffect"], [
        fetchTenants,
        _sessionKey,
        _tenantId
    ]);
    const { mutate: fetchMain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"])({
        onSuccess: {
            "Header.useApiForMain": (data)=>{
                if (tenant_id === 0) {
                    setCampaigns(data.result_data);
                } else {
                    setCampaigns(data.result_data.filter({
                        "Header.useApiForMain": (data)=>data.tenant_id === tenant_id
                    }["Header.useApiForMain"]));
                }
                setShouldFetchCounselors(true); // 이 시점에 상담사 목록 조회 활성화
            }
        }["Header.useApiForMain"]
    });
    // 훅 관리
    const { data: dataForMenusInfoForRoleId, menuList, headerMenuIds, isLoading: isLoadingMenuInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$hooks$2f$useApiForGetAuthorizedMenusInfoForMenuRoleId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForGetAuthorizedMenusInfoForMenuRoleId"])({
        roleId: menu_role_id || 1,
        enabled: !!menu_role_id // menu_role_id가 있을 때만 활성화
    });
    // console.log("dataForMenusInfoForRoleId : ", dataForMenusInfoForRoleId);
    const { data: counselorListData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForFetchCounselorList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        credentials: {
            // 필요한 credentials 정보
            session_key: _sessionKey,
            tenant_id: tenant_id,
            roleId: menu_role_id
        }
    });
    // console.log('counselorListData at header :', counselorListData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (counselorListData) {
                setCounselers(counselorListData.result_data);
            }
        }
    }["Header.useEffect"], [
        counselorListData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-top h-[28px] flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/header-menu/header-logo.svg",
                                alt: "UPDS",
                                width: 54,
                                height: 18,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/header/index.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/header/index.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4 text-white text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-1",
                                            children: tenant_id === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "text-xs px-1 py-0 mr-1 bg-[#56CAD6]/20 text-[#56CAD6] rounded-full",
                                                    children: "S"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/widgets/header/index.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/widgets/header/index.tsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/widgets/header/index.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/header-menu/top_pic.svg",
                                            alt: "사용자",
                                            width: 14,
                                            height: 14,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/widgets/header/index.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: id
                                        }, void 0, false, {
                                            fileName: "[project]/src/widgets/header/index.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/widgets/header/index.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                    variant: "ghost",
                                    className: "flex items-center space-x-1 text-sm text-white hover:bg-[#56CAD6]/20",
                                    onClick: handleLoginOut,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/header-menu/log-out.svg",
                                        alt: "로그아웃",
                                        width: 11,
                                        height: 12,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/widgets/header/index.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/widgets/header/index.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/widgets/header/index.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/widgets/header/index.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/widgets/header/index.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between header-padding",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex overflow-x-auto gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$model$2f$menuItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"]// availableHeaderMenuIds에 있는 메뉴만 필터링
                                .filter((item)=>availableHeaderMenuIds?.includes(item.menuId)).map((item)=>{
                                    const count = getTabCountById(item.id);
                                    const isActive = isActiveTab(item.id);
                                    const isOpened = isTabOpened(item.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonButton"], {
                                            variant: isActive ? 'menuActive' : isOpened ? 'menuOpened' : 'menu',
                                            size: "default",
                                            onClick: (e)=>handleMenuClick(item, e),
                                            className: "relative py-1.5 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: item.icon,
                                                        alt: item.title,
                                                        width: 32,
                                                        height: 32,
                                                        className: "object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/widgets/header/index.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/widgets/header/index.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs whitespace-nowrap ${isActive ? 'text-white' : 'text-[#333]'}`,
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/widgets/header/index.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 27
                                                        }, this),
                                                        count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 px-1.5 py-0.5 text-[10px] leading-none bg-[#E5F3F3] text-[#5BC2C1] rounded-full min-w-[16px] text-center",
                                                            children: count
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/widgets/header/index.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/widgets/header/index.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/widgets/header/index.tsx",
                                            lineNumber: 324,
                                            columnNumber: 23
                                        }, this)
                                    }, `menu-${item.id}`, false, {
                                        fileName: "[project]/src/widgets/header/index.tsx",
                                        lineNumber: 323,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/header/index.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/widgets/header/index.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/widgets/header/index.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/widgets/header/index.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/widgets/header/index.tsx",
                lineNumber: 307,
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
                fileName: "[project]/src/widgets/header/index.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/header/index.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(Header, "yPyaqGs3OO52d/wZ+BhoyqAARU8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAvailableMenuStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvailableMenuStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$environmentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForTenants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForTenants"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$hooks$2f$useApiForMain$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForMain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$hooks$2f$useApiForGetAuthorizedMenusInfoForMenuRoleId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForGetAuthorizedMenusInfoForMenuRoleId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$campaignManager$2f$hooks$2f$useApiForFetchCounselorList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/cookies.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/lib/cookies.ts
__turbopack_esm__({
    "getCookie": (()=>getCookie),
    "removeCookie": (()=>removeCookie),
    "setCookie": (()=>setCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
const getCookie = (name)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(name);
};
const setCookie = (name, value, options)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set(name, value, options);
};
const removeCookie = (name)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove(name);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/axios.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/lib/axios.ts
__turbopack_esm__({
    "axiosInstance": (()=>axiosInstance),
    "axiosRedisInstance": (()=>axiosRedisInstance),
    "externalAxiosInstance": (()=>externalAxiosInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cookies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$utils$2f$CustomAlertService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/utils/CustomAlertService.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: '/pds',
    withCredentials: true
});
const axiosRedisInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: '/api_upds/v1',
    withCredentials: true
});
const externalAxiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
// 요청 인터셉터 추가
axiosInstance.interceptors.request.use((config)=>{
    const sessionKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('session_key');
    if (sessionKey && config.headers) {
        // Session-Cookie가 아닌 Session-Key로 변경
        config.headers['Session-Key'] = sessionKey;
    }
    return config;
}, (error)=>{
    // console.log("error ???????????????", error);
    if (error.response.data.result_code === 5) {
        // 세션 만료 시 알럿 표시 후 로그인 페이지로 리다이렉트
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$utils$2f$CustomAlertService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAlertService"].error('로그인 세션이 만료되었습니다. 다시 로그인 해주세요.', '세션 만료', ()=>{
            window.location.href = '/login';
        });
    }
    return Promise.reject(error);
});
// 응답 인터셉터
axiosInstance.interceptors.response.use(async (response)=>{
    // console.log("here 8888888888888 response", response);
    const url = response.config.url || '';
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('id');
    if (url !== '/login' && userId != null && userId != '') {
        let activation = '';
        let eventName = '';
        let queryType = 'R';
        let description = '';
        if (url === '/login') {
            activation = '로그인';
            eventName = 'login';
        } else if (url === '/collections/tenant') {
            activation = '테넌트정보조회';
            eventName = 'tenants';
        } else if (url === '/collections/phone-description') {
            activation = '전화번호설명템플릿조회';
            eventName = 'phone-description';
        } else if (url === '/phone-description') {
            if (response.config.method === 'post') {
                activation = '전화번호설명템플릿생성';
                eventName = 'description';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '전화번호설명템플릿수정';
                eventName = 'description';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '전화번호설명템플릿삭제';
                eventName = 'description';
                queryType = 'D';
            }
        } else if (url === '/collections/dialing-device') {
            activation = '다이얼링장비조회';
            eventName = 'dialing-device';
        } else if (url === '/dialing-device') {
            if (response.config.method === 'post') {
                activation = '다이얼링장비생성';
                eventName = 'dialing-device';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '다이얼링장비수정';
                eventName = 'dialing-device';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '다이얼링장비삭제';
                eventName = 'dialing-device';
                queryType = 'D';
            }
        } else if (url === '/collections/channel-group') {
            activation = '채널그룹조회';
            eventName = 'channel-group';
        } else if (url === '/channel-group') {
            if (response.config.method === 'post') {
                activation = '채널그룹생성';
                eventName = 'channel-group';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '채널그룹수정';
                eventName = 'channel-group';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '채널그룹삭제';
                eventName = 'channel-group';
                queryType = 'D';
            }
        } else if (url === '/collections/channel-assign') {
            activation = '채널할당조회';
            eventName = 'channel-assign';
        } else if (url === '/channel-assign') {
            if (response.config.method === 'put') {
                activation = '채널할당수정';
                eventName = 'channel-assign';
                queryType = 'U';
            }
        } else if (url === '/collections/skill' || url === 'collections/skill') {
            activation = '스킬마스터목록조회';
            eventName = 'skills';
        } else if (url.indexOf('skills') > -1 && url.indexOf('/agent-list') == -1) {
            if (response.config.method === 'post') {
                activation = '스킬마스터생성';
                eventName = 'skills';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '스킬마스터수정';
                eventName = 'skills';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '스킬마스터삭제';
                eventName = 'skills';
                queryType = 'D';
            }
        } else if (url === '/collections/skill-agent') {
            activation = '스킬할당상담사';
            eventName = 'skill-agent';
        } else if (url.indexOf('skills') > -1 && url.indexOf('/agent-list') > -1) {
            if (response.config.method === 'post') {
                activation = '스킬할당상담사생성';
                eventName = 'skill-agent';
                queryType = 'C';
            } else if (response.config.method === 'delete') {
                activation = '스킬할당상담사삭제';
                eventName = 'skill-agent';
                queryType = 'D';
            }
        } else if (url === '/collections/skill-campaign') {
            activation = '스킬할당캠페인';
            eventName = 'skill-campaign';
        } else if (url === '/collections/agent-skill') {
            activation = '상담사보유스킬';
            eventName = 'agent-skill';
        } else if (url === '/collections/campaign-skill' || url === 'collections/campaign-skill') {
            activation = '캠페인요구스킬조회';
            eventName = 'skill';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/skill') > -1) {
            if (response.config.method === 'put') {
                activation = '캠페인요구스킬수정';
                eventName = 'campaign-skill';
                queryType = 'U';
            }
        } else if (url === '/collections/maxcall-init-time') {
            activation = '분배제한초기화시각조회';
            eventName = 'maxcall-init-time';
        } else if (url === '/maxcall-init-time') {
            activation = '분배제한초기화시각수정';
            eventName = 'maxcall-init-time';
            queryType = 'U';
        } else if (url === '/collections/suspended-skill') {
            activation = '일지중지캠페인조회';
            eventName = 'suspended-skill';
        } else if (url === '/suspended-skill') {
            activation = '일지중지캠페인삭제';
            eventName = 'suspended-skill';
            queryType = 'D';
        } else if (url === 'collections/campaign-list') {
            activation = '캠페인리스트조회';
            eventName = 'campaign-list';
        } else if (url === '/collections/campaign') {
            activation = '캠페인마스터목록조회';
            eventName = 'campaigns';
        } else if (url.indexOf('/collections') > -1 && url.split('/').length === 2) {
            if (response.config.method === 'post') {
                activation = '캠페인마스터생성';
                eventName = 'campaigns';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '캠페인마스터수정';
                eventName = 'campaigns';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '캠페인마스터삭제';
                eventName = 'campaigns';
                queryType = 'D';
            }
        } else if (url.indexOf('/status') > -1) {
            const status = JSON.parse(response.config.data).request_data.campaign_status === 1 ? '시작' : JSON.parse(response.config.data).request_data.campaign_status === 2 ? '멈춤' : '중지';
            activation = '캠페인상태변경';
            eventName = 'updateStatus';
            queryType = 'U';
            description = '캠페인 상태를 "' + status + '"으로 변경';
        } else if (url === '/collections/campaign-reserved-call') {
            activation = '예약호마스터조회';
            eventName = 'campaign-reserved-call';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/reserved-call') > -1) {
            if (response.config.method === 'post') {
                activation = '예약호마스터생성';
                eventName = 'campaign-reserved-call';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '예약호마스터수정';
                eventName = 'campaign-reserved-call';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '예약호마스터삭제';
                eventName = 'campaign-reserved-call';
                queryType = 'D';
            }
        } else if (url === '/collections/campaign-scheduled-redial') {
            activation = '캠페인예약재발신정보조회';
            eventName = 'campaign-scheduled-redial';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/scheduled-redial') > -1) {
            if (response.config.method === 'post') {
                activation = '캠페인예약재발신정보생성';
                eventName = 'campaign-scheduled-redial';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '캠페인예약재발신정보수정';
                eventName = 'campaign-scheduled-redial';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '캠페인예약재발신정보삭제';
                eventName = 'campaign-scheduled-redial';
                queryType = 'D';
            }
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/current-redial') > -1) {
            activation = '캠페인재발신추출수정';
            eventName = 'campaign-current-redial';
            queryType = 'U';
        } else if (url === '/collections/campaign-redial-preview') {
            activation = '캠페인재발신미리보기';
            eventName = 'campaign-redial-preview';
        } else if (url === '/collections/campaign-schedule') {
            activation = '캠페인스케줄정보조회';
            eventName = 'campaign-schedule';
        } else if (url.indexOf('/schedule') > -1) {
            if (response.config.method === 'post') {
                activation = '캠페인스케줄정보생성';
                eventName = 'campaign-schedule';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '캠페인스케줄정보수정';
                eventName = 'campaign-schedule';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '캠페인스케줄정보삭제';
                eventName = 'campaign-schedule';
                queryType = 'D';
            }
        } else if (url === '/collections/campaign-calling-number') {
            activation = '캠페인발신번호조회';
            eventName = 'campaign-calling-number';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/calling-number') > -1) {
            if (response.config.method === 'post') {
                activation = '캠페인발신번호생성';
                eventName = 'campaign-calling-number';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '캠페인발신번호수정';
                eventName = 'campaign-calling-number';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '캠페인발신번호삭제';
                eventName = 'campaign-calling-number';
                queryType = 'D';
            }
        } else if (url === '/collections/maxcall-ext') {
            activation = '캠페인분배제한조회';
            eventName = 'maxcall-ext';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/maxcall-ext') > -1) {
            if (response.config.method === 'post') {
                activation = '캠페인분배제한생성';
                eventName = 'maxcall-ext';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '캠페인분배제한수정';
                eventName = 'maxcall-ext';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '캠페인분배제한삭제';
                eventName = 'maxcall-ext';
                queryType = 'D';
            }
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/calling-list') > -1) {
            if (response.config.method === 'post') {
                activation = '발신리스트업로드추가';
                eventName = 'campaign-calling-list';
                queryType = 'C';
            } else if (response.config.method === 'delete') {
                activation = '발신리스트업로드삭제';
                eventName = 'campaign-calling-list';
                queryType = 'D';
            }
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/black-list') > -1) {
            if (response.config.method === 'post') {
                activation = '블랙리스트업로드추가';
                eventName = 'campaign-black-list';
                queryType = 'C';
            } else if (response.config.method === 'delete') {
                activation = '블랙리스트업로드삭제';
                eventName = 'campaign-black-list';
                queryType = 'D';
            }
        } else if (url === '/collections/campaign-blacklist-max') {
            activation = '블랙리스트최대수량조회';
            eventName = 'campaign-blacklist-max';
        } else if (url === '/collections/campaign-blacklist-count') {
            activation = '블랙리스트수량조회';
            eventName = 'campaign-blacklist-count';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/dial-speed') > -1) {
            activation = '캠페인발신속도수정';
            eventName = 'campaign-black-list';
            queryType = 'U';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/callback-list') > -1) {
            activation = '캠페인콜백리스트추가';
            eventName = 'campaign-callback-list';
            queryType = 'C';
        } else if (url === '/collections/campaign-agent') {
            activation = '캠페인소속상담사조회';
            eventName = 'campaignAgents';
        } else if (url === '/collections/agent-campaign') {
            activation = '상담사소속캠페인조회';
            eventName = 'agentCampaigns';
        } else if (url === '/collections/callback-campaign') {
            activation = '콜백캠페인조회';
            eventName = 'callback-campaign';
        } else if (url === '/collections/campaign-history') {
            activation = '캠페인운영이력조회';
            eventName = 'campaign-history';
        } else if (url === '/collections/dial-result') {
            activation = '캠페인발신결과조회';
            eventName = 'dial-result';
        } else if (url === '/collections/agent-ready-count') {
            activation = '캠페인대기상담사수조회';
            eventName = 'agent-ready-count';
        } else if (url === '/collections/suspended-campaign') {
            activation = '일지중지캠페인조회';
            eventName = 'suspended-campaign';
        } else if (url === '/suspended-campaign') {
            activation = '일지중지캠페인삭제';
            eventName = 'suspended-campaign';
            queryType = 'D';
        } else if (url === '/collections/campaign-group' || url === 'collections/campaign-group') {
            activation = '캠페인그룹정보조회';
            eventName = 'campaignGroups';
        } else if (url.split('/')[0] === 'campaign-groups') {
            if (response.config.method === 'post') {
                activation = '캠페인그룹정보생성';
                eventName = 'campaignGroup';
                queryType = 'C';
            } else if (response.config.method === 'put') {
                activation = '캠페인그룹정보수정';
                eventName = 'campaignGroup';
                queryType = 'U';
            } else if (response.config.method === 'delete') {
                activation = '캠페인그룹정보삭제';
                eventName = 'campaignGroup';
                queryType = 'D';
                description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 삭제';
            }
        } else if (url === '/collections/campaign-group-list' || url === 'collections/campaign-group-list') {
            activation = '캠페인그룹소속캠페인조회';
            eventName = 'campaignGroupCampaigns';
        } else if (url.split('/')[0] === 'campaign-group' && url.indexOf('/list') > -1) {
            if (response.config.method === 'post') {
                activation = '캠페인그룹소속캠페인생성';
                eventName = 'campaignGroupCampaign';
                queryType = 'C';
            } else if (response.config.method === 'delete') {
                activation = '캠페인그룹소속캠페인삭제';
                eventName = 'campaignGroupCampaign';
                queryType = 'D';
                description = '캠페인 그룹 아이디 : "' + url.split('/')[1] + '"번 소속캠페인 삭제';
            }
        }
        const logData = {
            "tenantId": Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('tenant_id')),
            "employeeId": userId,
            "userHost": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('userHost'),
            "queryId": response.config.url,
            "queryType": queryType,
            "activation": activation,
            "description": description,
            "successFlag": 1,
            "eventName": eventName,
            "queryRows": typeof response.data.result_data === 'undefined' ? 1 : response.data.result_data.length,
            "targetId": response.config.url,
            "userSessionType": 0,
            "exportFlag": 1,
            "memo": "",
            "updateEmployeeId": userId
        };
        const { data } = await axiosRedisInstance.post(`/log/save`, logData);
    }
    return response;
}, async (error)=>{
    if (error.response.data.result_code === 5) {
        // 세션 만료 시 알럿 표시 후 로그인 페이지로 리다이렉트
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$utils$2f$CustomAlertService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAlertService"].error('로그인 세션이 만료되었습니다. 다시 로그인 해주세요.', '세션 만료', ()=>{
            window.location.href = '/login';
        });
    }
    const url = error.config.url || '';
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('id');
    if (url !== '/login' && userId != null && userId != '') {
        let activation = '';
        let eventName = '';
        let queryType = 'R';
        // let description = '';
        if (url === '/login') {
            activation = '로그인';
            eventName = 'login';
        } else if (url === '/collections/tenant') {
            activation = '테넌트정보조회';
            eventName = 'tenants';
        } else if (url === '/collections/phone-description') {
            activation = '전화번호설명템플릿조회';
            eventName = 'phone-description';
        } else if (url === '/phone-description') {
            if (error.config.method === 'post') {
                activation = '전화번호설명템플릿생성';
                eventName = 'description';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '전화번호설명템플릿수정';
                eventName = 'description';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '전화번호설명템플릿삭제';
                eventName = 'description';
                queryType = 'D';
            }
        } else if (url === '/collections/dialing-device') {
            activation = '다이얼링장비조회';
            eventName = 'dialing-device';
        } else if (url === '/dialing-device') {
            if (error.config.method === 'post') {
                activation = '다이얼링장비생성';
                eventName = 'dialing-device';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '다이얼링장비수정';
                eventName = 'dialing-device';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '다이얼링장비삭제';
                eventName = 'dialing-device';
                queryType = 'D';
            }
        } else if (url === '/collections/channel-group') {
            activation = '채널그룹조회';
            eventName = 'channel-group';
        } else if (url === '/channel-group') {
            if (error.config.method === 'post') {
                activation = '채널그룹생성';
                eventName = 'channel-group';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '채널그룹수정';
                eventName = 'channel-group';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '채널그룹삭제';
                eventName = 'channel-group';
                queryType = 'D';
            }
        } else if (url === '/collections/channel-assign') {
            activation = '채널할당조회';
            eventName = 'channel-assign';
        } else if (url === '/channel-assign') {
            if (error.config.method === 'put') {
                activation = '채널할당수정';
                eventName = 'channel-assign';
                queryType = 'U';
            }
        } else if (url === '/collections/skill' || url === 'collections/skill') {
            activation = '스킬마스터목록조회';
            eventName = 'skills';
        } else if (url.indexOf('skills') > -1 && url.indexOf('/agent-list') == -1) {
            if (error.config.method === 'post') {
                activation = '스킬마스터생성';
                eventName = 'skills';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '스킬마스터수정';
                eventName = 'skills';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '스킬마스터삭제';
                eventName = 'skills';
                queryType = 'D';
            }
        } else if (url === '/collections/skill-agent') {
            activation = '스킬할당상담사';
            eventName = 'skill-agent';
        } else if (url.indexOf('skills') > -1 && url.indexOf('/agent-list') > -1) {
            if (error.config.method === 'post') {
                activation = '스킬할당상담사생성';
                eventName = 'skill-agent';
                queryType = 'C';
            } else if (error.config.method === 'delete') {
                activation = '스킬할당상담사삭제';
                eventName = 'skill-agent';
                queryType = 'D';
            }
        } else if (url === '/collections/skill-campaign') {
            activation = '스킬할당캠페인';
            eventName = 'skill-campaign';
        } else if (url === '/collections/agent-skill') {
            activation = '상담사보유스킬';
            eventName = 'agent-skill';
        } else if (url === '/collections/campaign-skill' || url === 'collections/campaign-skill') {
            activation = '캠페인요구스킬조회';
            eventName = 'skill';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/skill') > -1) {
            if (error.config.method === 'put') {
                activation = '캠페인요구스킬수정';
                eventName = 'campaign-skill';
                queryType = 'U';
            }
        } else if (url === '/collections/maxcall-init-time') {
            activation = '분배제한초기화시각조회';
            eventName = 'maxcall-init-time';
        } else if (url === '/maxcall-init-time') {
            activation = '분배제한초기화시각수정';
            eventName = 'maxcall-init-time';
            queryType = 'U';
        } else if (url === '/collections/suspended-skill') {
            activation = '일지중지스킬조회';
            eventName = 'suspended-skill';
        } else if (url === '/suspended-skill') {
            activation = '일지중지스킬삭제';
            eventName = 'suspended-skill';
            queryType = 'D';
        } else if (url === 'collections/campaign-list') {
            activation = '캠페인리스트조회';
            eventName = 'campaign-list';
        } else if (url === '/collections/campaign') {
            activation = '캠페인마스터목록조회';
            eventName = 'campaigns';
        } else if (url.indexOf('/collections') > -1 && url.split('/').length === 2) {
            if (error.config.method === 'post') {
                activation = '캠페인마스터생성';
                eventName = 'campaigns';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '캠페인마스터수정';
                eventName = 'campaigns';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '캠페인마스터삭제';
                eventName = 'campaigns';
                queryType = 'D';
            }
        } else if (url.indexOf('/status') > -1) {
            const status = JSON.parse(error.config.data).request_data.campaign_status === 1 ? '시작' : JSON.parse(error.config.data).request_data.campaign_status === 2 ? '멈춤' : '중지';
            activation = '캠페인상태변경';
            eventName = 'updateStatus';
            queryType = 'U';
        // description = '캠페인 상태를 "' + status + '"으로 변경';
        } else if (url === '/collections/campaign-reserved-call') {
            activation = '예약호마스터조회';
            eventName = 'campaign-reserved-call';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/reserved-call') > -1) {
            if (error.config.method === 'post') {
                activation = '예약호마스터생성';
                eventName = 'campaign-reserved-call';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '예약호마스터수정';
                eventName = 'campaign-reserved-call';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '예약호마스터삭제';
                eventName = 'campaign-reserved-call';
                queryType = 'D';
            }
        } else if (url === '/collections/campaign-scheduled-redial') {
            activation = '캠페인예약재발신정보조회';
            eventName = 'campaign-scheduled-redial';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/scheduled-redial') > -1) {
            if (error.config.method === 'post') {
                activation = '캠페인예약재발신정보생성';
                eventName = 'campaign-scheduled-redial';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '캠페인예약재발신정보수정';
                eventName = 'campaign-scheduled-redial';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '캠페인예약재발신정보삭제';
                eventName = 'campaign-scheduled-redial';
                queryType = 'D';
            }
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/current-redial') > -1) {
            activation = '캠페인재발신추출수정';
            eventName = 'campaign-current-redial';
            queryType = 'U';
        } else if (url === '/collections/campaign-redial-preview') {
            activation = '캠페인재발신미리보기';
            eventName = 'campaign-redial-preview';
        } else if (url === '/collections/campaign-schedule') {
            activation = '캠페인스케줄정보조회';
            eventName = 'campaign-schedule';
        } else if (url.indexOf('/schedule') > -1) {
            if (error.config.method === 'post') {
                activation = '캠페인스케줄정보생성';
                eventName = 'campaign-schedule';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '캠페인스케줄정보수정';
                eventName = 'campaign-schedule';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '캠페인스케줄정보삭제';
                eventName = 'campaign-schedule';
                queryType = 'D';
            }
        } else if (url === '/collections/campaign-calling-number') {
            activation = '캠페인발신번호조회';
            eventName = 'campaign-calling-number';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/calling-number') > -1) {
            if (error.config.method === 'post') {
                activation = '캠페인발신번호생성';
                eventName = 'campaign-calling-number';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '캠페인발신번호수정';
                eventName = 'campaign-calling-number';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '캠페인발신번호삭제';
                eventName = 'campaign-calling-number';
                queryType = 'D';
            }
        } else if (url === '/collections/maxcall-ext') {
            activation = '캠페인분배제한조회';
            eventName = 'maxcall-ext';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/maxcall-ext') > -1) {
            if (error.config.method === 'post') {
                activation = '캠페인분배제한생성';
                eventName = 'maxcall-ext';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '캠페인분배제한수정';
                eventName = 'maxcall-ext';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '캠페인분배제한삭제';
                eventName = 'maxcall-ext';
                queryType = 'D';
            }
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/calling-list') > -1) {
            if (error.config.method === 'post') {
                activation = '발신리스트업로드추가';
                eventName = 'campaign-calling-list';
                queryType = 'C';
            } else if (error.config.method === 'delete') {
                activation = '발신리스트업로드삭제';
                eventName = 'campaign-calling-list';
                queryType = 'D';
            }
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/black-list') > -1) {
            if (error.config.method === 'post') {
                activation = '블랙리스트업로드추가';
                eventName = 'campaign-black-list';
                queryType = 'C';
            } else if (error.config.method === 'delete') {
                activation = '블랙리스트업로드삭제';
                eventName = 'campaign-black-list';
                queryType = 'D';
            }
        } else if (url === '/collections/campaign-blacklist-max') {
            activation = '블랙리스트최대수량조회';
            eventName = 'campaign-blacklist-max';
        } else if (url === '/collections/campaign-blacklist-count') {
            activation = '블랙리스트수량조회';
            eventName = 'campaign-blacklist-count';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/dial-speed') > -1) {
            activation = '캠페인발신속도수정';
            eventName = 'campaign-black-list';
            queryType = 'U';
        } else if (url.indexOf('/campaigns') > -1 && url.indexOf('/callback-list') > -1) {
            activation = '캠페인콜백리스트추가';
            eventName = 'campaign-callback-list';
            queryType = 'C';
        } else if (url === '/collections/campaign-agent') {
            activation = '캠페인소속상담사조회';
            eventName = 'campaignAgents';
        } else if (url === '/collections/agent-campaign') {
            activation = '상담사소속캠페인조회';
            eventName = 'agentCampaigns';
        } else if (url === '/collections/callback-campaign') {
            activation = '콜백캠페인조회';
            eventName = 'callback-campaign';
        } else if (url === '/collections/campaign-history') {
            activation = '캠페인운영이력조회';
            eventName = 'campaign-history';
        } else if (url === '/collections/dial-result') {
            activation = '캠페인발신결과조회';
            eventName = 'dial-result';
        } else if (url === '/collections/agent-ready-count') {
            activation = '캠페인대기상담사수조회';
            eventName = 'agent-ready-count';
        } else if (url === '/collections/suspended-campaign') {
            activation = '일지중지캠페인조회';
            eventName = 'suspended-campaign';
        } else if (url === '/suspended-campaign') {
            activation = '일지중지캠페인삭제';
            eventName = 'suspended-campaign';
            queryType = 'D';
        } else if (url === '/collections/campaign-group' || url === 'collections/campaign-group') {
            activation = '캠페인그룹정보조회';
            eventName = 'campaignGroups';
        } else if (url.split('/')[0] === 'campaign-groups') {
            if (error.config.method === 'post') {
                activation = '캠페인그룹정보생성';
                eventName = 'campaignGroup';
                queryType = 'C';
            } else if (error.config.method === 'put') {
                activation = '캠페인그룹정보수정';
                eventName = 'campaignGroup';
                queryType = 'U';
            } else if (error.config.method === 'delete') {
                activation = '캠페인그룹정보삭제';
                eventName = 'campaignGroup';
                queryType = 'D';
            }
        } else if (url === '/collections/campaign-group-list' || url === 'collections/campaign-group-list') {
            activation = '캠페인그룹소속캠페인조회';
            eventName = 'campaignGroupCampaigns';
        } else if (url.split('/')[0] === 'campaign-group' && url.indexOf('/list') > -1) {
            if (error.config.method === 'post') {
                activation = '캠페인그룹소속캠페인생성';
                eventName = 'campaignGroupCampaign';
                queryType = 'C';
            } else if (error.config.method === 'delete') {
                activation = '캠페인그룹소속캠페인삭제';
                eventName = 'campaignGroupCampaign';
                queryType = 'D';
            }
        }
        const logData = {
            "tenantId": Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('tenant_id')),
            "employeeId": userId,
            "userHost": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('userHost'),
            "queryId": error.config.url,
            "queryType": queryType,
            "activation": activation,
            "description": error.message,
            "successFlag": 0,
            "eventName": eventName,
            "queryRows": 0,
            "targetId": error.config.url || 0,
            "userSessionType": 0,
            "exportFlag": 1,
            "memo": "",
            "updateEmployeeId": userId
        };
        const { data } = await axiosRedisInstance.post(`/log/save`, logData);
    }
    if (error.response?.status === 401) {
        window.location.href = '/login';
        return Promise.reject(new Error('세션이 만료되었습니다. 다시 로그인해주세요.'));
    }
    return Promise.reject(error);
});
// 응답 인터셉터
axiosRedisInstance.interceptors.response.use(async (response)=>{
    // console.log("here 9999999999999999999999999999999999", response);
    const url = response.config.url || '';
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('id');
    if (url !== '/log/save' && userId != null && userId != '') {
        let activation = '';
        let eventName = '';
        let queryType = 'R';
        let description = '';
        if (url === '/auth/environment') {
            activation = '사용자별 환경설정 가져오기';
            eventName = 'environment';
        } else if (url.indexOf('/auth/availableMenuList') > -1) {
            activation = '사용가능한 메뉴 리스트 가져오기';
            eventName = 'availableMenuList';
        } else if (url.indexOf('/auth/environment') > -1) {
            activation = '사용자별 환경설정 가져오기';
            eventName = 'environment';
        } else if (url.indexOf('/auth/environment/save') > -1) {
            activation = '사용자별 환경설정 저장하기';
            eventName = 'environment-save';
            queryType = 'C';
        } else if (url.indexOf('/counselor/list') > -1) {
            activation = '상담사 리스트 가져오기';
            eventName = 'counselor-list';
        } else if (url.indexOf('/counselor/state') > -1) {
            activation = '상담사 상태정보 가져오기';
            eventName = 'counselor-state';
        } else if (url.indexOf('/counselor/counselorInfo') > -1) {
            activation = '캠페인 할당 상담사정보 가져오기';
            eventName = 'counselor-state';
        } else if (url.indexOf('/counselor/sillAssigned/list') > -1) {
            activation = '스킬 할당 상담사 목록 가져오기';
            eventName = 'counselor-sillAssigned-list';
        } else if (url.indexOf('/notification') > -1 && url.indexOf('/subscribe') > -1) {
            activation = '실시간 이벤트 구독';
            eventName = 'notification-subscribe';
        } else if (url.indexOf('/notification/publish') > -1) {
            activation = '실시간 이벤트 발행';
            eventName = 'notification-publish';
        } else if (url === '/monitor/process') {
            activation = '타 시스템 프로세스 상태정보 가져오기';
            eventName = 'process';
        } else if (url === '/monitor/dialer/channel') {
            activation = '채널 상태 정보 가져오기';
            eventName = 'channel';
        } else if (url.indexOf('/statistics') > -1) {
            activation = '캠페인별 진행정보 가져오기';
            eventName = 'statistics';
            description = '캠페인 아이디 : ' + url.split('/')[5] + '번 진행정보 가져오기';
        } else if (url === '/monitor/tenant/campaign/dial') {
            activation = '발신진행상태조회';
            eventName = 'dial';
        }
        const logData = {
            "tenantId": Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('tenant_id')),
            "employeeId": userId,
            "userHost": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('userHost'),
            "queryId": response.config.url,
            "queryType": queryType,
            "activation": activation,
            "description": description,
            "successFlag": 1,
            "eventName": eventName,
            "queryRows": typeof response.data.result_data === 'undefined' ? 1 : response.data.result_data.length,
            "targetId": response.config.url,
            "userSessionType": 0,
            "exportFlag": 1,
            "memo": "",
            "updateEmployeeId": userId
        };
        const { data } = await axiosRedisInstance.post(`/log/save`, logData);
    }
    return response;
}, async (error)=>{
    console.log("axios에서 result code 확인 1111111 : ", error.response.data.result_code);
    // result_code 5 일 경우 axiosInstance 와 동일하게 로그인 페이지로 이동
    if (error.response.data.result_code === 5) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$utils$2f$CustomAlertService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAlertService"].error('로그인 세션이 만료되었습니다. 다시 로그인 해주세요.', '세션 만료', ()=>{
            window.location.href = '/login';
        });
    }
    if (error.response?.status === 401) {
        window.location.href = '/login';
        return Promise.reject(new Error('세션이 만료되었습니다. 다시 로그인해주세요.'));
    }
    const url = error.config.url || '';
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('id');
    if (url !== '/log/save' && userId != null && userId != '') {
        let activation = '';
        let eventName = '';
        let queryType = 'R';
        let description = '';
        if (url === '/auth/environment') {
            activation = '사용자별 환경설정 가져오기';
            eventName = 'environment';
        } else if (url.indexOf('/auth/availableMenuList') > -1) {
            activation = '사용가능한 메뉴 리스트 가져오기';
            eventName = 'availableMenuList';
        } else if (url.indexOf('/auth/environment') > -1) {
            activation = '사용자별 환경설정 가져오기';
            eventName = 'environment';
        } else if (url.indexOf('/auth/environment/save') > -1) {
            activation = '사용자별 환경설정 저장하기';
            eventName = 'environment-save';
            queryType = 'C';
        } else if (url.indexOf('/counselor/list') > -1) {
            activation = '상담사 리스트 가져오기';
            eventName = 'counselor-list';
        } else if (url.indexOf('/counselor/state') > -1) {
            activation = '상담사 상태정보 가져오기';
            eventName = 'counselor-state';
        } else if (url.indexOf('/counselor/counselorInfo') > -1) {
            activation = '캠페인 할당 상담사정보 가져오기';
            eventName = 'counselor-state';
        } else if (url.indexOf('/counselor/sillAssigned/list') > -1) {
            activation = '스킬 할당 상담사 목록 가져오기';
            eventName = 'counselor-sillAssigned-list';
        } else if (url.indexOf('/notification') > -1 && url.indexOf('/subscribe') > -1) {
            activation = '실시간 이벤트 구독';
            eventName = 'notification-subscribe';
        } else if (url.indexOf('/notification/publish') > -1) {
            activation = '실시간 이벤트 발행';
            eventName = 'notification-publish';
        } else if (url === '/monitor/process') {
            activation = '타 시스템 프로세스 상태정보 가져오기';
            eventName = 'process';
        } else if (url === '/monitor/dialer/channel') {
            activation = '채널 상태 정보 가져오기';
            eventName = 'channel';
        } else if (url.indexOf('/statistics') > -1) {
            activation = '캠페인별 진행정보 가져오기';
            eventName = 'statistics';
            description = '캠페인 아이디 : ' + url.split('/')[5] + '번 진행정보 가져오기';
        } else if (url === '/monitor/tenant/campaign/dial') {
            activation = '발신진행상태조회';
            eventName = 'dial';
        }
        const logData = {
            "tenantId": Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('tenant_id')),
            "employeeId": userId,
            "userHost": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('userHost'),
            "queryId": error.config.url,
            "queryType": queryType,
            "activation": activation,
            "description": description,
            "successFlag": 0,
            "eventName": eventName,
            "queryRows": 0,
            "targetId": error.config.url || 0,
            "userSessionType": 0,
            "exportFlag": 1,
            "memo": "",
            "updateEmployeeId": userId
        };
        const { data } = await axiosRedisInstance.post(`/log/save`, logData);
    }
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/error_message.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// C:\nproject\fe_pdsw\src\lib\error_message.ts
__turbopack_esm__({
    "getCampaignErrorMessage": (()=>getCampaignErrorMessage),
    "getCampaignErrorMessage2": (()=>getCampaignErrorMessage2)
});
const getCampaignErrorMessage = (returnCode)=>{
    if (returnCode === -1) {
        return 'DataBase 데이터 처리 중 문제가 발생 하였습니다.';
    } else if (returnCode === -3) {
        return '상담사과 고객이 통화 중이라 캠페인 통계가 완료되지 않았습니다. \n잠시만 기다려주세요.';
    } else if (returnCode === -10) {
        return '에러사항에 대해서 관리자에게 문의 하세요.';
    } else if (returnCode === -15) {
        return '업무 외 시간으로 캠페인을 시작 할 수 없습니다. 캠페인 시작을 원하시면 발신 업무 시간을 변경 하십시오.';
    } else if (returnCode === -16) {
        return '상담사과 고객이 통화 중이라 캠페인 통계가 완료되지 않았습니다. \n잠시만 기다려주세요.';
    } else if (returnCode === -7770) {
        return '리스트 파일이 존재 하지 않습니다.';
    } else if (returnCode === -7771) {
        return '발신 할 레코드가 존재 하지 않습니다.';
    } else if (returnCode === -7772) {
        return '발신 순서가 없습니다.';
    } else if (returnCode === -7773) {
        return '캠페인 시작/종료 날짜를 확인해 주시기 바랍니다.';
    } else if (returnCode === -7774) {
        return '응대할 상담사가 없으므로 시작이 취소되었습니다.';
    } else if (returnCode === -7775) {
        return '발신 할 트렁크가 없습니다.';
    } else if (returnCode === -7776) {
        return '캠페인에 할당된 상담사가 없습니다.';
    } else if (returnCode === -7777) {
        return 'CIDS가 작동중 인지 확인 하세요.에러사항에 대해서 관리자에게 문의 하세요.';
    } else if (returnCode === -7778) {
        return '발신할 채널이 할당이 되어 있지 않습니다.';
    } else if (returnCode === -8000) {
        return '캠페인이 상태 변경 중이므로, 캠페인을 시작할 수 없습니다.';
    } else if (returnCode === -8001) {
        return '무한콜백 캠페인에서만 발생. UserOption Data(limit)가 있다.';
    } else if (returnCode === -10001) {
        return '캠페인 데이터 저장 공간이 남아 있지 않습니다. 관리자에게 문의 하세요.';
    }
};
const getCampaignErrorMessage2 = (returnCode)=>{
    if (returnCode === -1) {
        return 'DataBase 데이터 처리 중 문제가 발생 하였습니다.';
    } else if (returnCode === -3) {
        return '상담사와 고객이 통화 중이라 캠페인 통계가 완료되지 않았습니다. \n잠시만 기다려주세요.';
    } else if (returnCode === -10) {
        return '에러 사항에 대해서 관리자에게 문의 하세요.';
    } else if (returnCode === -15) {
        return '업무 외 시간으로 캠페인을 시작 할 수 없습니다. 캠페인 시작을 원하시면 발신 업무 시간을 변경 하십시오.';
    } else if (returnCode === -16) {
        return '상담사과 고객이 통화 중이라 캠페인 통계가 완료되지 않았습니다. \n잠시만 기다려주세요.';
    } else if (returnCode === -7770) {
        return '리스트 파일이 존재 하지 않습니다.';
    } else if (returnCode === -7771) {
        return '발신 할 레코드가 존재 하지 않습니다.';
    } else if (returnCode === -7772) {
        return '발신 순서가 없습니다.';
    } else if (returnCode === -7773) {
        return '캠페인 시작/종료 날짜를 확인해 주시기 바랍니다.';
    } else if (returnCode === -7774) {
        return '응대할 상담사가 없으므로 시작이 취소되었습니다.';
    } else if (returnCode === -7775) {
        return '발신 할 트렁크가 없습니다.';
    } else if (returnCode === -7776) {
        return '캠페인에 할당된 상담사가 없습니다.';
    } else if (returnCode === -7777) {
        return 'CIDS가 작동중 인지 확인 하세요.에러사항에 대해서 관리자에게 문의 하세요.';
    } else if (returnCode === -7778) {
        return '발신할 채널이 할당이 되어 있지 않습니다.';
    } else if (returnCode === -8000) {
        return '캠페인이 상태 변경 중이므로, 캠페인을 시작할 수 없습니다.';
    } else if (returnCode === -8001) {
        return '무한콜백 캠페인에서만 발생. UserOption Data(limit)가 있다.';
    } else if (returnCode === -10001) {
        return '캠페인 데이터 저장공간이 남아 있지 않습니다. 관리자에게 문의 하세요.';
    }
    // 기본 에러 메시지 추가
    return `알 수 없는 오류가 발생했습니다. (코드: ${returnCode})`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MainLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_59dee874.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$Sidebar2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/Sidebar2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/widgets/header/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSidebarWidthStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/useSidebarWidthStore.tsx [app-client] (ecmascript)");
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
function MainLayout({ children }) {
    _s();
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSidebarWidthStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarWidthStore"])({
        "MainLayout.useSidebarWidthStore[width]": (state)=>state.width
    }["MainLayout.useSidebarWidthStore[width]"]);
    const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSidebarWidthStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarWidthStore"])({
        "MainLayout.useSidebarWidthStore[isOpen]": (state)=>state.isOpen
    }["MainLayout.useSidebarWidthStore[isOpen]"]);
    // 푸터 관련 상태
    const [footerHeight, setFooterHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(111);
    const [isFooterOpen, setIsFooterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFooterResizing, setIsFooterResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 컨텐츠 영역 참조
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 푸터 토글 함수
    const toggleFooter = (isOpen)=>{
        setIsFooterOpen(isOpen);
    };
    // 푸터 리사이징 관련 함수들
    const handleResizeStart = ()=>{
        setIsFooterResizing(true);
    };
    const handleResize = (height)=>{
        if (contentRef.current) {
            contentRef.current.style.height = `calc(100% - ${height}px)`;
        }
    };
    // 수정: height 매개변수를 받도록 변경
    const handleResizeEnd = (height)=>{
        setFooterHeight(height);
        setIsFooterResizing(false);
    };
    // 사이드바 상태에 따른 메인 영역 너비 계산
    const getMainWidth = ()=>{
        return isOpen ? `calc(100% - ${width}px)` : '100%';
    };
    // 실제 푸터 높이 (닫힌 경우 32px)
    const actualFooterHeight = isFooterOpen ? footerHeight : 32;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} h-screen`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/main/layout.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 min-h-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$Sidebar2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/main/layout.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex flex-col h-full transition-all duration-300 overflow-x-auto",
                            style: {
                                width: getMainWidth()
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: contentRef,
                                    className: "refined-scrollbar overflow-auto flex-shrink-0 min-w-[800px]",
                                    style: {
                                        height: `calc(100% - ${actualFooterHeight}px)`,
                                        transition: isFooterResizing ? 'none' : 'height 0.3s ease-in-out',
                                        paddingTop: '0',
                                        boxSizing: 'border-box'
                                    },
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/layout.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 'auto',
                                        maxHeight: `${actualFooterHeight}px`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        footerHeight: footerHeight,
                                        onToggleDrawer: toggleFooter,
                                        onResizeHeight: handleResize,
                                        onResizeStart: handleResizeStart,
                                        onResizeEnd: handleResizeEnd
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/layout.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/layout.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/layout.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/layout.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/layout.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/main/layout.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(MainLayout, "y/yj+0Ed6SPxBa7Mj4CekFy5sNM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSidebarWidthStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarWidthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSidebarWidthStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarWidthStore"]
    ];
});
_c = MainLayout;
var _c;
__turbopack_refresh__.register(_c, "MainLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_40d4e9._.js.map