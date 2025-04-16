(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_main_comp_ListManager_2097cf._.js", {

"[project]/src/app/main/comp/ListManager/SenderList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// 공통 컴포넌트
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
// 데이터그리드
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-data-grid/lib/bundle.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const HeaderColumn = [
    {
        key: 'CSKE',
        name: '고객키(1)'
    },
    {
        key: 'CSK2',
        name: '고객키(2)'
    },
    {
        key: 'CSK3',
        name: '고객키(3)'
    },
    {
        key: 'CSNA',
        name: '고객이름'
    },
    {
        key: 'TNO1',
        name: '고객 전화번호(1)'
    },
    {
        key: 'TNO2',
        name: '고객 전화번호(2)'
    },
    {
        key: 'TNO3',
        name: '고객 전화번호(3)'
    },
    {
        key: 'TNO4',
        name: '고객 전화번호(4)'
    },
    {
        key: 'TNO5',
        name: '고객 전화번호(5)'
    },
    {
        key: 'CSC1',
        name: '고객성향[1]'
    },
    {
        key: 'CSC2',
        name: '고객성향[2]'
    },
    {
        key: 'CSC3',
        name: '고객성향[3]'
    },
    {
        key: 'CSC4',
        name: '고객성향[4]'
    },
    {
        key: 'CSC5',
        name: '고객성향[5]'
    },
    {
        key: 'CSC6',
        name: '고객성향[6]'
    },
    {
        key: 'EMPLOYEEID',
        name: '상담사 아이디'
    },
    {
        key: 'TKDA',
        name: '토큰데이터'
    }
];
const SenderList = ({ headerData, _sendList })=>{
    _s();
    // 그리드 선택 상태
    const [selectedSendRow, setSelectedSendRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 목록 데이터 상태
    const [sendList, setSendList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sendColumns, setSendColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(HeaderColumn);
    // 행 클릭 핸들러
    const handleSendRowClick = ({ row })=>{
        setSelectedSendRow(row);
    };
    const getSendRowClass = (row)=>{
        return selectedSendRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SenderList.useEffect": ()=>{
            if (headerData.length > 0) {
            // setSendColumns(headerData);   
            }
            setSendList(_sendList);
        }
    }["SenderList.useEffect"], [
        headerData,
        _sendList
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-1/2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "발신 목록",
                totalCount: sendList.length
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/ListManager/SenderList.tsx",
                lineNumber: 90,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[300px] grid-custom-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    columns: sendColumns,
                    rows: sendList,
                    className: "grid-custom cursor-pointer",
                    rowHeight: 30,
                    headerRowHeight: 30,
                    rowKeyGetter: (row)=>row.id,
                    rowClass: getSendRowClass,
                    onCellClick: handleSendRowClick,
                    selectedRows: selectedSendRow ? new Set([
                        selectedSendRow.id
                    ]) : new Set()
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/ListManager/SenderList.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/ListManager/SenderList.tsx",
                lineNumber: 94,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/ListManager/SenderList.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
};
_s(SenderList, "7luuClYVo1gugvabC2g0s+jvAM0=");
_c = SenderList;
const __TURBOPACK__default__export__ = SenderList;
var _c;
__turbopack_refresh__.register(_c, "SenderList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/ListManager/FileFormat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const initData = [
    {
        id: '1',
        name: '고객키(1)',
        start: 1,
        length: 10,
        field: 'CSKE'
    }
];
const delimiterList = [
    {
        id: ',',
        name: ','
    },
    {
        id: ';',
        name: ';'
    },
    {
        id: '!',
        name: '!'
    },
    {
        id: '\\',
        name: '\\'
    },
    {
        id: '@',
        name: '@'
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
const FileFormat = ({ isOpen, onConfirm, onClose })=>{
    _s();
    const [delimiter, setDelimiter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(',');
    const [originaldataYn, setOriginaldataYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tabValue, setTabValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("format-field");
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    //필드항목
    const [formatRows, setFormatRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initData);
    // 선택된 행의 인덱스를 추적하는 상태 추가
    const [selectedRowIndex, setSelectedRowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //탭변경함수.
    const handleTabChange = (value)=>{
        setTabValue(value);
    };
    // 행 선택 핸들러
    const handleRowSelect = (index)=>{
        setSelectedRowIndex(index);
    };
    // 그리드 행 삭제 keyUp 이벤트.
    const handleKeyUp = (e, index)=>{
        if (e.key === 'Delete') {
            const newRows = [
                ...formatRows
            ];
            if (newRows[index].id === '1') {
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: "고객키[1]은 필수 항목입니다. 다시 확인하시고 설정해 주세요.",
                    type: '2',
                    onClose: ()=>setAlertState((prev)=>({
                                ...prev,
                                isOpen: false
                            }))
                });
            } else {
                newRows.splice(index, 1);
                const cnt = newRows.length;
                for(let i = 0; i < cnt; i++){
                    if (i === 0) {
                        newRows[i]['start'] = 1;
                    } else {
                        newRows[i]['start'] = newRows[i - 1]['start'] + newRows[i - 1]['length'];
                    }
                }
                setFormatRows(newRows);
            }
        }
    };
    // 그리드 길이 항목 수정 이벤트.
    const handleEditChange = (event, rowIndex, column)=>{
        const newRows = [
            ...formatRows
        ];
        let tempLength = Number(event.target.value);
        let _message = '';
        if (newRows[rowIndex].field === 'CSKE' && tempLength > 30) {
            _message = '고객키[1] 사이즈는 최대 30byte 입니다.';
            tempLength = 30;
        } else if (newRows[rowIndex].field === 'CSK2' && tempLength > 30) {
            _message = '고객키[2] 사이즈는 최대 30byte 입니다.';
            tempLength = 30;
        } else if (newRows[rowIndex].field === 'CSK3' && tempLength > 30) {
            _message = '고객키[3] 사이즈는 최대 30byte 입니다.';
            tempLength = 30;
        } else if (newRows[rowIndex].field === 'CSNA' && tempLength > 50) {
            _message = '고객이름 사이즈는 최대 50byte 입니다.';
            tempLength = 50;
        } else if (newRows[rowIndex].field === 'TNO1' && tempLength > 20) {
            _message = '고객 전화번호[1] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'TNO2' && tempLength > 20) {
            _message = '고객 전화번호[2] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'TNO3' && tempLength > 20) {
            _message = '고객 전화번호[3] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'TNO4' && tempLength > 20) {
            _message = '고객 전화번호[4] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'TNO5' && tempLength > 20) {
            _message = '고객 전화번호[5] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'CSC1' && tempLength > 20) {
            _message = '고객 성향[1] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'CSC2' && tempLength > 20) {
            _message = '고객 성향[2] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'CSC3' && tempLength > 20) {
            _message = '고객 성향[3] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'CSC4' && tempLength > 20) {
            _message = '고객 성향[4] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'CSC5' && tempLength > 20) {
            _message = '고객 성향[5] 사이즈는 최대 20byte 입니다.';
            tempLength = 20;
        } else if (newRows[rowIndex].field === 'EMPLOYEEID' && tempLength > 10) {
            _message = '상담사 ID 사이즈는 최대 20byte 입니다.';
            tempLength = 10;
        } else if (newRows[rowIndex].field === 'TKDA' && tempLength > 1024) {
            _message = '토큰데이터 사이즈는 최대 1024byte 입니다.';
            tempLength = 1024;
        }
        if (_message !== '') {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: _message,
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        }
        newRows[rowIndex][column] = tempLength;
        if (rowIndex < newRows.length - 1) {
            for(let i = rowIndex; i < newRows.length - 1; i++){
                newRows[i + 1]['start'] = newRows[i]['start'] + newRows[i]['length'];
            }
        }
        setFormatRows(newRows);
    };
    // 위로 이동 핸들러
    const handleMoveUp = ()=>{
        if (selectedRowIndex === null || selectedRowIndex <= 0) return;
        const newRows = [
            ...formatRows
        ];
        // 선택된 행과 그 위의 행을 교환
        [newRows[selectedRowIndex], newRows[selectedRowIndex - 1]] = [
            newRows[selectedRowIndex - 1],
            newRows[selectedRowIndex]
        ];
        newRows[selectedRowIndex - 1]['start'] = newRows[selectedRowIndex]['start'];
        newRows[selectedRowIndex]['start'] = newRows[selectedRowIndex - 1]['start'] + newRows[selectedRowIndex - 1]['length'];
        // 선택된 행 인덱스도 함께 이동
        setFormatRows(newRows);
        setSelectedRowIndex(selectedRowIndex - 1);
    };
    // 아래로 이동 핸들러
    const handleMoveDown = ()=>{
        if (selectedRowIndex === null || selectedRowIndex >= formatRows.length - 1) return;
        const newRows = [
            ...formatRows
        ];
        // 선택된 행과 그 아래 행을 교환
        [newRows[selectedRowIndex], newRows[selectedRowIndex + 1]] = [
            newRows[selectedRowIndex + 1],
            newRows[selectedRowIndex]
        ];
        newRows[selectedRowIndex]['start'] = newRows[selectedRowIndex + 1]['start'];
        newRows[selectedRowIndex + 1]['start'] = newRows[selectedRowIndex]['start'] + newRows[selectedRowIndex]['length'];
        // 선택된 행 인덱스도 함께 이동
        setFormatRows(newRows);
        setSelectedRowIndex(selectedRowIndex + 1);
    };
    const leftItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileFormat.useMemo[leftItems]": ()=>[
                {
                    id: '1',
                    name: '고객키(1)',
                    field: 'CSKE'
                },
                {
                    id: '2',
                    name: '고객키(2)',
                    field: 'CSK2'
                },
                {
                    id: '3',
                    name: '고객키(3)',
                    field: 'CSK3'
                },
                {
                    id: '4',
                    name: '고객이름',
                    field: 'CSNA'
                },
                {
                    id: '5',
                    name: '고객 전화번호(1)',
                    field: 'TNO1'
                },
                {
                    id: '6',
                    name: '고객 전화번호(2)',
                    field: 'TNO2'
                },
                {
                    id: '7',
                    name: '고객 전화번호(3)',
                    field: 'TNO3'
                },
                {
                    id: '8',
                    name: '고객 전화번호(4)',
                    field: 'TNO4'
                },
                {
                    id: '9',
                    name: '고객 전화번호(5)',
                    field: 'TNO5'
                }
            ]
    }["FileFormat.useMemo[leftItems]"], []);
    const rightItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileFormat.useMemo[rightItems]": ()=>[
                {
                    id: '10',
                    name: '고객성향[1]',
                    field: 'CSC1'
                },
                {
                    id: '11',
                    name: '고객성향[2]',
                    field: 'CSC2'
                },
                {
                    id: '12',
                    name: '고객성향[3]',
                    field: 'CSC3'
                },
                {
                    id: '13',
                    name: '고객성향[4]',
                    field: 'CSC4'
                },
                {
                    id: '14',
                    name: '고객성향[5]',
                    field: 'CSC5'
                },
                {
                    id: '15',
                    name: '고객성향[6]',
                    field: 'CSC6'
                },
                {
                    id: '16',
                    name: '상담사 아이디',
                    field: 'EMPLOYEEID'
                },
                {
                    id: '17',
                    name: '토큰데이터',
                    field: 'TKDA'
                }
            ]
    }["FileFormat.useMemo[rightItems]"], []);
    // 더블 클릭 핸들러 추가
    const handleItemDoubleClick = (item)=>{
        // 이미 추가된 항목인지 확인
        const isAlreadyAdded = formatRows.some((row)=>row.name === item.name);
        if (!isAlreadyAdded) {
            const newRow = {
                id: item.id,
                name: item.name,
                start: formatRows.length > 0 ? formatRows[formatRows.length - 1].start + formatRows[formatRows.length - 1].length : 1,
                length: 10,
                field: item.field
            };
            setFormatRows([
                ...formatRows,
                newRow
            ]);
        }
    };
    // 필드항목 구분자
    const [positionRows, setPositionRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initData);
    const [selectedPositionRowIndex, setSelectedPositionRowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const positionLeftItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileFormat.useMemo[positionLeftItems]": ()=>[
                {
                    id: '1',
                    name: '고객키(1)',
                    field: 'CSKE'
                },
                {
                    id: '2',
                    name: '고객키(2)',
                    field: 'CSK2'
                },
                {
                    id: '3',
                    name: '고객키(3)',
                    field: 'CSK3'
                },
                {
                    id: '4',
                    name: '고객이름',
                    field: 'CSNA'
                },
                {
                    id: '5',
                    name: '고객 전화번호(1)',
                    field: 'TNO1'
                },
                {
                    id: '6',
                    name: '고객 전화번호(2)',
                    field: 'TNO2'
                },
                {
                    id: '7',
                    name: '고객 전화번호(3)',
                    field: 'TNO3'
                },
                {
                    id: '8',
                    name: '고객 전화번호(4)',
                    field: 'TNO4'
                },
                {
                    id: '9',
                    name: '고객 전화번호(5)',
                    field: 'TNO5'
                }
            ]
    }["FileFormat.useMemo[positionLeftItems]"], []);
    const positionRightItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileFormat.useMemo[positionRightItems]": ()=>[
                {
                    id: '10',
                    name: '고객성향[1]',
                    field: 'CSC1'
                },
                {
                    id: '11',
                    name: '고객성향[2]',
                    field: 'CSC2'
                },
                {
                    id: '12',
                    name: '고객성향[3]',
                    field: 'CSC3'
                },
                {
                    id: '13',
                    name: '고객성향[4]',
                    field: 'CSC4'
                },
                {
                    id: '14',
                    name: '고객성향[5]',
                    field: 'CSC5'
                },
                {
                    id: '15',
                    name: '고객성향[6]',
                    field: 'CSC6'
                },
                {
                    id: '16',
                    name: '상담사 아이디',
                    field: 'EMPLOYEEID'
                },
                {
                    id: '17',
                    name: '토큰데이터',
                    field: 'TKDA'
                }
            ]
    }["FileFormat.useMemo[positionRightItems]"], []);
    const handlePositionItemDoubleClick = (item)=>{
        const isAlreadyAdded = positionRows.some((row)=>row.name === item.name);
        if (!isAlreadyAdded) {
            const newRow = {
                id: item.id,
                name: item.name,
                start: positionRows.length + 1,
                length: 1,
                field: item.field
            };
            setPositionRows([
                ...positionRows,
                newRow
            ]);
        }
    };
    const handlePositionRowSelect = (index)=>{
        setSelectedPositionRowIndex(index);
    };
    const handlePositionMoveUp = ()=>{
        if (selectedPositionRowIndex === null || selectedPositionRowIndex <= 0) return;
        const newRows = [
            ...positionRows
        ];
        [newRows[selectedPositionRowIndex], newRows[selectedPositionRowIndex - 1]] = [
            newRows[selectedPositionRowIndex - 1],
            newRows[selectedPositionRowIndex]
        ];
        setPositionRows(newRows);
        setSelectedPositionRowIndex(selectedPositionRowIndex - 1);
    };
    const handlePositionMoveDown = ()=>{
        if (selectedPositionRowIndex === null || selectedPositionRowIndex >= positionRows.length - 1) return;
        const newRows = [
            ...positionRows
        ];
        [newRows[selectedPositionRowIndex], newRows[selectedPositionRowIndex + 1]] = [
            newRows[selectedPositionRowIndex + 1],
            newRows[selectedPositionRowIndex]
        ];
        setPositionRows(newRows);
        setSelectedPositionRowIndex(selectedPositionRowIndex + 1);
    };
    // 그리드 행 삭제 keyUp 이벤트.
    const handlePositionKeyUp = (e, index)=>{
        if (e.key === 'Delete') {
            const newRows = [
                ...positionRows
            ];
            if (newRows[index].id === '1') {
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: "고객키[1]은 필수 항목입니다. 다시 확인하시고 설정해 주세요.",
                    type: '2',
                    onClose: ()=>setAlertState((prev)=>({
                                ...prev,
                                isOpen: false
                            }))
                });
            } else {
                newRows.splice(index, 1);
                const cnt = newRows.length;
                for(let i = 0; i < cnt; i++){
                    if (i === 0) {
                        newRows[i]['start'] = 1;
                    } else {
                        newRows[i]['start'] = newRows[i - 1]['start'] + newRows[i - 1]['length'];
                    }
                }
                setPositionRows(newRows);
            }
        }
    };
    const handleConfirm = ()=>{
        // 상태 초기화
        // setFormatRows([]);
        setSelectedRowIndex(null);
        setSelectedPositionRowIndex(null);
        const data = {
            delimiter: '',
            originDataSaveYn: originaldataYn,
            datalist: []
        };
        let check = true;
        if (tabValue === 'format-field') {
            if (formatRows.length > 0 && formatRows.filter((temp)=>temp.id === '1').length > 0) {
                data.datalist = formatRows;
            } else {
                check = false;
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: "고객키[1]은 필수 항목입니다. 다시 확인하시고 설정해 주세요.",
                    type: '2',
                    onClose: ()=>setAlertState((prev)=>({
                                ...prev,
                                isOpen: false
                            }))
                });
            }
        } else {
            if (positionRows.length > 0 && positionRows.filter((temp)=>temp.id === '1').length > 0) {
                data.datalist = positionRows;
            } else {
                check = false;
                setAlertState({
                    ...errorMessage,
                    isOpen: true,
                    message: "고객키[1]은 필수 항목입니다. 다시 확인하시고 설정해 주세요.",
                    type: '2',
                    onClose: ()=>setAlertState((prev)=>({
                                ...prev,
                                isOpen: false
                            }))
                });
            }
            data.delimiter = delimiter;
        }
        if (check) {
            onConfirm(data);
        }
    };
    const handleCancle = ()=>{
        // 상태 초기화
        // setFormatRows([]);
        setSelectedRowIndex(null);
        setSelectedPositionRowIndex(null);
        onClose();
    };
    const modalContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "* 블랙리스트의 경우 고객키[1], 고객이름 항목만 사용 합니다."
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "* 필드 항목은 키보드 Delete 키로 삭제가 가능합니다."
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                value: tabValue,
                onValueChange: handleTabChange,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tab-custom-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "format-field",
                                    children: "필드항목 길이로 구분"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "format-position",
                                    children: "필드항목 구분자로 구분"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                            lineNumber: 432,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "format-field",
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: "원하는 항목을 더블 클릭 하세요"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-2 rounded h-40 overflow-y-auto",
                                            children: leftItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `py-1 px-2 hover:bg-[#FFFAEE] cursor-pointer ${formatRows.some((row)=>row.name === item.name) ? 'text-gray-300 hover:bg-transparent cursor-not-allowed' : ''}`,
                                                    onDoubleClick: ()=>handleItemDoubleClick(item),
                                                    children: item.name
                                                }, item.id, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-2 rounded h-40 overflow-y-auto",
                                            children: rightItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `py-1 px-2 hover:bg-[#FFFAEE] cursor-pointer ${formatRows.some((row)=>row.name === item.name) ? 'text-gray-300 hover:bg-transparent cursor-not-allowed' : ''}`,
                                                    onDoubleClick: ()=>handleItemDoubleClick(item),
                                                    children: item.name
                                                }, item.id, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded h-[200px] overflow-y-auto w-full",
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
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border-r border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                children: "항목"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border-r border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                children: "시작"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border-r border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                children: "길이"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                children: "필드"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: formatRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            onClick: ()=>handleRowSelect(index),
                                                            className: `cursor-pointer ${selectedRowIndex === index ? 'bg-[#FFFAEE]' : ''}`,
                                                            onKeyUp: (e)=>handleKeyUp(e, index),
                                                            tabIndex: 0,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b border-r p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: index + 1,
                                                                        className: "w-full p-1 text-center",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b border-r p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: row.name,
                                                                        className: "w-full p-1 text-center",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b border-r p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: row.start,
                                                                        className: "w-full p-1 text-center",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 515,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b border-r p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: row.length,
                                                                        onChange: (e)=>handleEditChange(e, index, 'length'),
                                                                        className: "w-full p-1 text-center"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: row.field,
                                                                        className: "w-full p-1 text-center",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, row.id || index, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-2 min-w-[22px] justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                onClick: handleMoveUp,
                                                disabled: selectedRowIndex === null || selectedRowIndex <= 0,
                                                children: "↑"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                lineNumber: 544,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                onClick: handleMoveDown,
                                                disabled: selectedRowIndex === null || selectedRowIndex >= formatRows.length - 1,
                                                children: "↓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "format-position",
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: "원하는 구분자를 더블 클릭 하세요"
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-2 rounded h-40 overflow-y-auto",
                                            children: positionLeftItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `py-1 px-2 hover:bg-[#FFFAEE] cursor-pointer ${positionRows.some((row)=>row.name === item.name) ? 'text-gray-300 hover:bg-transparent cursor-not-allowed' : ''}`,
                                                    onDoubleClick: ()=>handlePositionItemDoubleClick(item),
                                                    children: item.name
                                                }, item.id, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-2 rounded h-40 overflow-y-auto",
                                            children: positionRightItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `py-1 px-2 hover:bg-[#FFFAEE] cursor-pointer ${positionRows.some((row)=>row.name === item.name) ? 'text-gray-300 hover:bg-transparent cursor-not-allowed' : ''}`,
                                                    onDoubleClick: ()=>handlePositionItemDoubleClick(item),
                                                    children: item.name
                                                }, item.id, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded h-[190px] overflow-y-auto w-full",
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
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border-r border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                children: "항목"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border-b p-1 font-normal text-sm bg-[#F8F8F8]",
                                                                children: "필드"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: positionRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            onClick: ()=>handlePositionRowSelect(index),
                                                            className: `cursor-pointer ${selectedPositionRowIndex === index ? 'bg-[#FFFAEE]' : ''}`,
                                                            onKeyUp: (e)=>handlePositionKeyUp(e, index),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b border-r p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: index + 1,
                                                                        className: "w-full p-1 text-center",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b border-r p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: row.name,
                                                                        className: "w-full p-1 text-center",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 630,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 629,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border-b p-1 text-center h-[26px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: row.field,
                                                                        className: "w-full p-1 text-center",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 637,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, row.id || index, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                            lineNumber: 602,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-2 min-w-[50px] justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                onClick: handlePositionMoveUp,
                                                disabled: selectedPositionRowIndex === null || selectedPositionRowIndex <= 0,
                                                children: "↑"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                lineNumber: 651,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full flex items-center justify-center disabled:opacity-50",
                                                onClick: handlePositionMoveDown,
                                                disabled: selectedPositionRowIndex === null || selectedPositionRowIndex >= positionRows.length - 1,
                                                children: "↓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                lineNumber: 658,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "구분자"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                lineNumber: 665,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: (value)=>setDelimiter(value),
                                                    value: delimiter,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "w-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: " "
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                            lineNumber: 673,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: delimiterList.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: option.id.toString(),
                                                                    children: option.name
                                                                }, option.id, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                                lineNumber: 668,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: alertState.message,
                title: alertState.title,
                type: alertState.type,
                isOpen: alertState.isOpen,
                onClose: ()=>{
                    alertState.onClose();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
                lineNumber: 689,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        title: "파일포맷설정",
        message: modalContent,
        type: "1",
        onClose: handleConfirm,
        onCancle: handleCancle,
        width: "max-w-modal"
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/ListManager/FileFormat.tsx",
        lineNumber: 701,
        columnNumber: 5
    }, this);
};
_s(FileFormat, "q+Nb4O+4rMtmQnmYo3FFmdv0w24=");
_c = FileFormat;
const __TURBOPACK__default__export__ = FileFormat;
var _c;
__turbopack_refresh__.register(_c, "FileFormat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/ListManager/LoadingModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
;
;
const LoadingModal = ({ isLoading, totalCount = 0, completedCount = 0, outboundProgress, onClose })=>{
    const totalProgress = totalCount > 0 ? completedCount / totalCount * 100 : 0;
    const outboundProgressValue = isFinite(outboundProgress) ? outboundProgress : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "데이터전송",
        isOpen: isLoading,
        message: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "고객 데이터 파일을 서버로 전송 중입니다. 잠시만 기다려 주세요."
                }, void 0, false, {
                    fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded w-full px-[40px] py-[20px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700",
                                    children: "발신비율(%)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 w-full h-[20px] bg-gray-200 rounded-full relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-primary-500 rounded-full transition-all bg-[#4EE781]",
                                            style: {
                                                width: `${outboundProgressValue}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[1px] left-[50%] transform -translate-x-1/2",
                                            children: [
                                                outboundProgressValue.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-gray-700",
                                    children: [
                                        "전체 전송현황 (",
                                        completedCount,
                                        "/",
                                        totalCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 w-full h-[20px] bg-gray-200 rounded-full relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-primary-500 rounded-full transition-all bg-[#4EE781]",
                                            style: {
                                                width: `${totalProgress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[1px] left-[50%] transform -translate-x-1/2",
                                            children: [
                                                totalProgress.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
            lineNumber: 20,
            columnNumber: 16
        }, void 0),
        width: "max-w-modal",
        onClose: onClose,
        showButtons: false,
        type: ''
    }, void 0, false, {
        fileName: "[project]/src/app/main/comp/ListManager/LoadingModal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_c = LoadingModal;
const __TURBOPACK__default__export__ = LoadingModal;
var _c;
__turbopack_refresh__.register(_c, "LoadingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/main/comp/ListManager/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// 공통 컴포넌트
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/TitleWrap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomInput/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomCheckbox/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2f$CustomAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/layout/CustomAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CustomSelect/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/shared/CommonRadio/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$SenderList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/ListManager/SenderList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/store/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForCallingListInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/listManager/hooks/useApiForCallingListInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForBlacklistInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/listManager/hooks/useApiForBlacklistInsert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForBlacklistDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/listManager/hooks/useApiForBlacklistDelete.ts [app-client] (ecmascript)");
// 모달
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$FileFormat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/ListManager/FileFormat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$LoadingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/main/comp/ListManager/LoadingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/mainStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/tabStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
// 데이터그리드
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
;
// 발신 리스트 추가 요청 데이터 타입
const callListInsertDataType = {
    customer_key: '',
    sequence_number: 0,
    customer_name: '',
    phone_number1: '',
    phone_number2: '',
    phone_number3: '',
    phone_number4: '',
    phone_number5: '',
    reserved_time: '',
    token_data: ''
};
// 발신 리스트 추가 요청 
const callListInsertData = {
    campaign_id: 0,
    list_flag: 'I',
    calling_list: []
};
const progressListData = {
    id: 1,
    datetime: "10:54:28",
    message: "현재 작업을 진행 하겠습니다. 진행하겠습니다. [ 1 ]"
};
const errorMessage = {
    isOpen: false,
    message: '',
    title: '캠페인',
    type: '1',
    onClose: ()=>{},
    onCancle: ()=>{}
};
const ListManager = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { campaigns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"])();
    const { activeTabId, openedTabs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"])();
    const [delimiter, setDelimiter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [_callListInsertData, setCallListInsertData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(callListInsertData);
    const [fileFormat, setFileFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('excel');
    const [deleteData, setDeleteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // 기존 캠페인 데이터 삭제.
    const [campaignIdDisabled, setCampaignIdDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [alertState, setAlertState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(errorMessage);
    const [headerColumnData, setHeaderColumnData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [originaldataYn, setOriginaldataYn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignId, setCampaignId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [listFlag, setListFlag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('I');
    const [workFileIndex, setWorkFileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [listTotalCount, setListTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [listSuccessCount, setListSuccessCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // 아이디 생성용 카운터
    const [nextId, setNextId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // 모달 상태
    const [isFileFormatOpen, setIsFileFormatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 파일 관련 상태
    const [targetType, setTargetType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("general");
    const [uploadedFiles, setUploadedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFileName, setSelectedFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // 그리드 선택 상태
    const [selectedSendRow, setSelectedSendRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedProgressRow, setSelectedProgressRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //캠페인 발신번호 추가 api 호출
    const { mutate: fetchCallingListInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForCallingListInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingListInsert"])({
        onSuccess: {
            "ListManager.useApiForCallingListInsert": (data)=>{
                if (workFileIndex < uploadedFiles.length - 1) {
                    setWorkFileIndex({
                        "ListManager.useApiForCallingListInsert": (prevIndex)=>prevIndex + 1
                    }["ListManager.useApiForCallingListInsert"]);
                    setListTotalCount(listTotalCount + data.request_count);
                    setListSuccessCount(listSuccessCount + data.result_count);
                } else {
                    const now = new Date();
                    const hours = now.getHours().toString().padStart(2, '0');
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const seconds = now.getSeconds().toString().padStart(2, '0');
                    if (data.result_code === 0) {
                        const newProgressListData = {
                            ...progressListData,
                            id: progressList.length + 1,
                            datetime: hours + ':' + minutes + ':' + seconds,
                            message: '서버에 리스트 파일 등록 완료 : 총 ' + (listTotalCount + data.request_count) + '건, 성공 ' + (listSuccessCount + data.result_count) + '건'
                        };
                        setProgressList({
                            "ListManager.useApiForCallingListInsert": (prev)=>[
                                    newProgressListData,
                                    ...prev
                                ]
                        }["ListManager.useApiForCallingListInsert"]);
                    } else {
                        const newProgressListData = {
                            ...progressListData,
                            id: progressList.length + 1,
                            datetime: hours + ':' + minutes + ':' + seconds,
                            message: '서버에 리스트 파일 등록 에러 : ' + data.result_msg
                        };
                        setProgressList({
                            "ListManager.useApiForCallingListInsert": (prev)=>[
                                    newProgressListData,
                                    ...prev
                                ]
                        }["ListManager.useApiForCallingListInsert"]);
                    }
                    setUploadedFiles([]);
                    setSendList([]);
                }
            }
        }["ListManager.useApiForCallingListInsert"],
        onError: {
            "ListManager.useApiForCallingListInsert": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "ListManager.useApiForCallingListInsert": ()=>goLogin()
                        }["ListManager.useApiForCallingListInsert"]
                    });
                } else {
                    const now = new Date();
                    const hours = now.getHours().toString().padStart(2, '0');
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const seconds = now.getSeconds().toString().padStart(2, '0');
                    const newProgressListData = {
                        ...progressListData,
                        id: progressList.length + 1,
                        datetime: hours + ':' + minutes + ':' + seconds,
                        message: '파일 전송 도중 에러 : ' + data.message
                    };
                    setProgressList({
                        "ListManager.useApiForCallingListInsert": (prev)=>[
                                newProgressListData,
                                ...prev
                            ]
                    }["ListManager.useApiForCallingListInsert"]);
                }
            }
        }["ListManager.useApiForCallingListInsert"]
    });
    const goLogin = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('session_key');
        router.push('/login');
    };
    // 블랙리스트 추가 api 호출
    const { mutate: fetchBlacklistInsert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForBlacklistInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForBlacklistInsert"])({
        onSuccess: {
            "ListManager.useApiForBlacklistInsert": (data)=>{
                if (workFileIndex < uploadedFiles.length - 1) {
                    setWorkFileIndex({
                        "ListManager.useApiForBlacklistInsert": (prevIndex)=>prevIndex + 1
                    }["ListManager.useApiForBlacklistInsert"]);
                    setListTotalCount(listTotalCount + data.request_count);
                    setListSuccessCount(listSuccessCount + data.result_count);
                } else {
                    const now = new Date();
                    const hours = now.getHours().toString().padStart(2, '0');
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const seconds = now.getSeconds().toString().padStart(2, '0');
                    if (data.result_code === 0) {
                        const newProgressListData = {
                            ...progressListData,
                            id: progressList.length + 1,
                            datetime: hours + ':' + minutes + ':' + seconds,
                            message: '서버에 리스트 파일 등록 완료 : 총 ' + (listTotalCount + data.request_count) + '건, 성공 ' + (listSuccessCount + data.result_count) + '건'
                        };
                        setProgressList({
                            "ListManager.useApiForBlacklistInsert": (prev)=>[
                                    newProgressListData,
                                    ...prev
                                ]
                        }["ListManager.useApiForBlacklistInsert"]);
                    } else {
                        const newProgressListData = {
                            ...progressListData,
                            id: progressList.length + 1,
                            datetime: hours + ':' + minutes + ':' + seconds,
                            message: '서버에 리스트 파일 등록 에러 : ' + data.result_msg
                        };
                        setProgressList({
                            "ListManager.useApiForBlacklistInsert": (prev)=>[
                                    newProgressListData,
                                    ...prev
                                ]
                        }["ListManager.useApiForBlacklistInsert"]);
                    }
                    setUploadedFiles([]);
                    setSendList([]);
                }
            }
        }["ListManager.useApiForBlacklistInsert"],
        onError: {
            "ListManager.useApiForBlacklistInsert": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "ListManager.useApiForBlacklistInsert": ()=>goLogin()
                        }["ListManager.useApiForBlacklistInsert"]
                    });
                } else {
                    const now = new Date();
                    const hours = now.getHours().toString().padStart(2, '0');
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const seconds = now.getSeconds().toString().padStart(2, '0');
                    const newProgressListData = {
                        ...progressListData,
                        id: progressList.length + 1,
                        datetime: hours + ':' + minutes + ':' + seconds,
                        message: '파일 전송 도중 에러 : ' + data.message
                    };
                    setProgressList({
                        "ListManager.useApiForBlacklistInsert": (prev)=>[
                                newProgressListData,
                                ...prev
                            ]
                    }["ListManager.useApiForBlacklistInsert"]);
                }
            }
        }["ListManager.useApiForBlacklistInsert"]
    });
    // 블랙리스트 업로드 취소 api 호출
    const { mutate: fetchBlacklistDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForBlacklistDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForBlacklistDelete"])({
        onSuccess: {
            "ListManager.useApiForBlacklistDelete": (data)=>{
                if (workFileIndex < uploadedFiles.length - 1) {
                    setWorkFileIndex({
                        "ListManager.useApiForBlacklistDelete": (prevIndex)=>prevIndex + 1
                    }["ListManager.useApiForBlacklistDelete"]);
                } else {
                    const now = new Date();
                    const hours = now.getHours().toString().padStart(2, '0');
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const seconds = now.getSeconds().toString().padStart(2, '0');
                    if (data.result_code === 0) {
                        const newProgressListData = {
                            ...progressListData,
                            id: progressList.length + 1,
                            datetime: hours + ':' + minutes + ':' + seconds,
                            message: '서버에 리스트 파일 등록 완료'
                        };
                        setProgressList({
                            "ListManager.useApiForBlacklistDelete": (prev)=>[
                                    newProgressListData,
                                    ...prev
                                ]
                        }["ListManager.useApiForBlacklistDelete"]);
                    } else {
                        const newProgressListData = {
                            ...progressListData,
                            id: progressList.length + 1,
                            datetime: hours + ':' + minutes + ':' + seconds,
                            message: '서버에 리스트 파일 등록 에러 : ' + data.result_msg
                        };
                        setProgressList({
                            "ListManager.useApiForBlacklistDelete": (prev)=>[
                                    newProgressListData,
                                    ...prev
                                ]
                        }["ListManager.useApiForBlacklistDelete"]);
                    }
                    setUploadedFiles([]);
                    setSendList([]);
                }
            }
        }["ListManager.useApiForBlacklistDelete"],
        onError: {
            "ListManager.useApiForBlacklistDelete": (data)=>{
                if (data.message.split('||')[0] === '5') {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                        type: '2',
                        onClose: {
                            "ListManager.useApiForBlacklistDelete": ()=>goLogin()
                        }["ListManager.useApiForBlacklistDelete"]
                    });
                } else {
                    const now = new Date();
                    const hours = now.getHours().toString().padStart(2, '0');
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const seconds = now.getSeconds().toString().padStart(2, '0');
                    const newProgressListData = {
                        ...progressListData,
                        id: progressList.length + 1,
                        datetime: hours + ':' + minutes + ':' + seconds,
                        message: '파일 전송 도중 에러 : ' + data.message
                    };
                    setProgressList({
                        "ListManager.useApiForBlacklistDelete": (prev)=>[
                                newProgressListData,
                                ...prev
                            ]
                    }["ListManager.useApiForBlacklistDelete"]);
                }
            }
        }["ListManager.useApiForBlacklistDelete"]
    });
    const [progressList, setProgressList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 모달 핸들러
    const handleFileFormatOpen = ()=>{
        // setUploadedFiles([]);
        // setSendList([]);
        setIsFileFormatOpen(true);
    };
    const handleFileFormatClose = ()=>setIsFileFormatOpen(false);
    const [sendColumns, setSendColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sendList, setSendList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    //파일포맷설정 확인 이벤트.
    const handleFileFormatConfirm = (data)=>{
        setIsFileFormatOpen(false);
        setDelimiter(data.delimiter);
        setOriginaldataYn(data.originDataSaveYn);
        setHeaderColumnData(data.datalist);
        const tempList = data.datalist.map((tempData)=>({
                key: tempData.field,
                name: tempData.name
            }));
        setSendColumns(tempList);
    };
    // 파일 관련 핸들러
    const handleTargetTypeChange = (value)=>{
        setTargetType(value);
        setListFlag('I');
        setCallListInsertData({
            ..._callListInsertData,
            list_flag: 'I'
        });
    };
    const handleFileUpload = (e)=>{
        setCampaignIdDisabled(true);
        const files = e.target.files;
        if (files && files.length > 0) {
            try {
                setIsLoading(true);
                const file = files[0];
                if (fileFormat === 'excel' && file.name.indexOf('.xls') === -1) {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: "파일 포맷 형식과 다른 형식의 파일입니다. 파일 또는 포맷 형식을 확인해 주세요.",
                        type: '2',
                        onClose: ()=>setAlertState((prev)=>({
                                    ...prev,
                                    isOpen: false
                                }))
                    });
                } else if (fileFormat === 'txt' && file.name.indexOf('.xls') > -1) {
                    setAlertState({
                        ...errorMessage,
                        isOpen: true,
                        message: "파일 포맷 형식과 다른 형식의 파일입니다. 파일 또는 포맷 형식을 확인해 주세요.",
                        type: '2',
                        onClose: ()=>setAlertState((prev)=>({
                                    ...prev,
                                    isOpen: false
                                }))
                    });
                } else {
                    const newFileData = {
                        id: nextId,
                        fileName: file.name,
                        campaignId: campaignId + '',
                        fileSize: (file.size / 1024).toFixed(2) + " KB",
                        deletable: false,
                        listFlag: listFlag
                    };
                    setUploadedFiles((prev)=>[
                            ...prev,
                            newFileData
                        ]);
                    setSelectedFileName(file.name);
                    const now = new Date();
                    const hours = now.getHours().toString().padStart(2, '0');
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const seconds = now.getSeconds().toString().padStart(2, '0');
                    const newProgressListData = {
                        ...progressListData,
                        id: progressList.length + 1,
                        datetime: hours + ':' + minutes + ':' + seconds,
                        message: '현재 로드된 파일 갯수 : ' + (uploadedFiles.length + 1)
                    };
                    setProgressList((prev)=>[
                            newProgressListData,
                            ...prev
                        ]);
                    const reader = new FileReader();
                    if (fileFormat === 'excel' && file.name.indexOf('.xls') > -1) {
                        reader.onload = (event)=>{
                            const fileContent = event.target?.result;
                            if (fileContent) {
                                const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.read(fileContent, {
                                    type: 'array'
                                });
                                const sheetName = workbook.SheetNames[0];
                                const worksheet = workbook.Sheets[sheetName];
                                const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.utils.sheet_to_json(worksheet, {
                                    header: 1
                                });
                                if (data.length > 0) {
                                    let index = 0;
                                    const tempSendList = [];
                                    for(let i = 0; i < data.length; i++){
                                        const row = data[i];
                                        index = index + 1;
                                        const tempData = {
                                            id: nextId + '::' + index,
                                            fileId: nextId,
                                            CSKE: '',
                                            CSK2: '',
                                            CSK3: '',
                                            CSNA: '',
                                            TNO1: '',
                                            TNO2: '',
                                            TNO3: '',
                                            TNO4: '',
                                            TNO5: '',
                                            CSC1: '',
                                            CSC2: '',
                                            CSC3: '',
                                            CSC4: '',
                                            CSC5: '',
                                            CSC6: '',
                                            EMPLOYEEID: '',
                                            TKDA: ''
                                        };
                                        if (row.length > 0) {
                                            let _length = row.length;
                                            if (_length > sendColumns.length) {
                                                _length = sendColumns.length;
                                            }
                                            for(let j = 0; j < _length; j++){
                                                const key = sendColumns[j].key;
                                                if (key in tempData) {
                                                    if (typeof key === 'string' && key in tempData) {
                                                        if (typeof key === 'string' && key in tempData) {
                                                            tempData[key] = row[j] || '';
                                                        }
                                                    }
                                                }
                                            }
                                            tempSendList.push(tempData);
                                        }
                                    }
                                    setSendList((prev)=>[
                                            ...prev,
                                            ...tempSendList
                                        ]);
                                }
                            }
                        };
                        reader.readAsArrayBuffer(file);
                    } else if (fileFormat === 'txt' && file.name.indexOf('.xls') == -1) {
                        reader.onload = (event)=>{
                            const fileContent = event.target?.result;
                            console.log("File content:", fileContent);
                            if (fileContent != null && fileContent !== '') {
                                let tempdata = [];
                                if ((fileContent + '').indexOf('\r\n') > -1) {
                                    tempdata = (fileContent + '').split('\r\n');
                                } else {
                                    tempdata = (fileContent + '').split('\n');
                                }
                                let index = 0;
                                const tempSendList = [];
                                for(let i = 0; i < tempdata.length; i++){
                                    // const row = tempdata[i].split(delimiter) as unknown[];
                                    index = index + 1;
                                    const tempData = {
                                        id: nextId + '::' + index,
                                        fileId: nextId,
                                        CSKE: '',
                                        CSK2: '',
                                        CSK3: '',
                                        CSNA: '',
                                        TNO1: '',
                                        TNO2: '',
                                        TNO3: '',
                                        TNO4: '',
                                        TNO5: '',
                                        CSC1: '',
                                        CSC2: '',
                                        CSC3: '',
                                        CSC4: '',
                                        CSC5: '',
                                        CSC6: '',
                                        EMPLOYEEID: '',
                                        TKDA: ''
                                    };
                                    //길이체크인 경우 
                                    if (delimiter === '') {
                                        for(let k = 0; k < headerColumnData.length; k++){
                                            const key = headerColumnData[k].field;
                                            // if (key in tempData) {
                                            //   if (typeof key === 'string' && key in tempData) {
                                            //     if (typeof key === 'string' && key in tempData) {
                                            //       (tempData as any)[key] = tempdata[i].substring(headerColumnData[k].start-1, headerColumnData[k].start + headerColumnData[k].length -1) as string || '';
                                            //     }
                                            //   }
                                            // }
                                            if (key in tempData) {
                                                // Calculate the byte length of the extracted substring
                                                const extractedSubstring = tempdata[i].substring(headerColumnData[k].start - 1, headerColumnData[k].start + headerColumnData[k].length - 1);
                                                if (typeof key === 'string' && key in tempData) {
                                                    const byteLength = getByteLength(extractedSubstring);
                                                    // Ensure that the extracted substring fits within the specified byte length
                                                    if (byteLength <= headerColumnData[k].length) {
                                                        tempData[key] = extractedSubstring || ''; // If it's within the byte size limit, assign it
                                                    } else {
                                                        // Handle case where the byte length exceeds the specified limit, truncating if necessary
                                                        tempData[key] = extractedSubstring.slice(0, headerColumnData[k].length);
                                                    }
                                                }
                                            }
                                        }
                                        tempSendList.push(tempData);
                                    //구분자인 경우
                                    } else {
                                        const row = tempdata[i].split(delimiter);
                                        if (row.length > 0) {
                                            let _length = row.length;
                                            if (_length > sendColumns.length) {
                                                _length = sendColumns.length;
                                            }
                                            for(let j = 0; j < _length; j++){
                                                const key = sendColumns[j].key;
                                                if (key in tempData) {
                                                    if (typeof key === 'string' && key in tempData) {
                                                        if (typeof key === 'string' && key in tempData) {
                                                            tempData[key] = row[j] || '';
                                                        }
                                                    }
                                                }
                                            }
                                            tempSendList.push(tempData);
                                        }
                                    }
                                }
                                setSendList((prev)=>[
                                        ...prev,
                                        ...tempSendList
                                    ]);
                            }
                        // Now, you can process fileContent here
                        };
                        reader.readAsText(file);
                    } else {
                        setAlertState({
                            ...errorMessage,
                            isOpen: true,
                            message: "파일 포맷 형식과 다른 형식의 파일입니다. 파일 또는 포맷 형식을 확인해 주세요.",
                            type: '2',
                            onClose: ()=>setAlertState((prev)=>({
                                        ...prev,
                                        isOpen: false
                                    }))
                        });
                    }
                    // Handle file reading errors
                    reader.onerror = (error)=>{
                        console.error("Error reading file:", error);
                    };
                }
            } catch (e) {
                console.error("Error processing file:", e);
            } finally{
                setNextId(nextId + 1);
                setIsLoading(false);
            }
        } // 파일 업로드 후 input 값 초기화
        e.target.value = '';
    };
    const getByteLength = (str)=>{
        const encoder = new TextEncoder();
        const encoded = encoder.encode(str);
        return encoded.length;
    };
    // 새 작업대상 핸들러
    const handleNewTarget = ()=>{
        setSelectedFileName("");
        setTargetType("general");
        setSelectedFile(null);
        // setUploadedFiles([]);
        // setSendList([]);
        setCampaignIdDisabled(false);
    };
    // 작업대상 올리기
    const triggerFileInput = ()=>{
        if (sendColumns.length === 0) {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "파일 포맷이 설정되어 있지 않습니다. 파일 포맷을 설정해 주세요.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        } else if (campaignId === 0) {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "캠페인을 선택해야 합니다.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        } else {
            const fileInput = document.getElementById("fileInput");
            if (fileInput) {
                if (fileFormat === 'excel') {
                    fileInput.accept = ".xlsx, .xls";
                } else {
                    fileInput.accept = ".txt";
                }
                fileInput.click();
            }
        }
    };
    // 삭제 핸들러
    const handleDeleteFile = ()=>{
        if (selectedFile) {
            setUploadedFiles((prev)=>prev.filter((file)=>file.id !== selectedFile.id));
            setSendList((prev)=>prev.filter((data)=>data.fileId !== selectedFile.id));
            setSelectedFile(null);
            setSelectedFileName("");
        }
    };
    // 행 클릭 핸들러
    const handleProgressRowClick = ({ row })=>{
        setSelectedProgressRow(row);
    };
    const handleFileRowClick = ({ row })=>{
        setSelectedFile(row);
        setSelectedFileName(row.fileName);
        setTargetType(row.campaignId.startsWith('G') ? 'general' : 'blacklist');
    };
    // rowClass 함수들
    const getFileRowClass = (row)=>{
        return selectedFile?.id === row.id ? 'bg-[#FFFAEE]' : '';
    };
    const getProgressRowClass = (row)=>{
        return selectedProgressRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
    };
    // 데이터그리드 컬럼 정의
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListManager.useMemo[columns]": ()=>[
                {
                    key: "fileName",
                    name: "파일 이름"
                },
                {
                    key: "campaignId",
                    name: "캠페인 ID"
                },
                {
                    key: "fileSize",
                    name: "파일 크기"
                },
                {
                    key: "deletable",
                    name: "삭제 여부",
                    formatter: {
                        "ListManager.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                checked: row.deletable,
                                onChange: {
                                    "ListManager.useMemo[columns]": ()=>setUploadedFiles({
                                            "ListManager.useMemo[columns]": (prev)=>prev.map({
                                                    "ListManager.useMemo[columns]": (file)=>file.id === row.id ? {
                                                            ...file,
                                                            deletable: !file.deletable
                                                        } : file
                                                }["ListManager.useMemo[columns]"])
                                        }["ListManager.useMemo[columns]"])
                                }["ListManager.useMemo[columns]"]
                            }, void 0, false, {
                                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                lineNumber: 672,
                                columnNumber: 9
                            }, this)
                    }["ListManager.useMemo[columns]"]
                }
            ]
    }["ListManager.useMemo[columns]"], []);
    const progressColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListManager.useMemo[progressColumns]": ()=>[
                {
                    key: "datetime",
                    name: "시간"
                },
                {
                    key: "message",
                    name: "처리내용"
                }
            ]
    }["ListManager.useMemo[progressColumns]"], []);
    // selectedRows 메모이제이션
    const selectedFileRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListManager.useMemo[selectedFileRows]": ()=>selectedFile ? new Set([
                selectedFile.id
            ]) : new Set()
    }["ListManager.useMemo[selectedFileRows]"], [
        selectedFile
    ]);
    const selectedSendRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListManager.useMemo[selectedSendRows]": ()=>selectedSendRow ? new Set([
                selectedSendRow.id
            ]) : new Set()
    }["ListManager.useMemo[selectedSendRows]"], [
        selectedSendRow
    ]);
    const selectedProgressRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListManager.useMemo[selectedProgressRows]": ()=>selectedProgressRow ? new Set([
                selectedProgressRow.id
            ]) : new Set()
    }["ListManager.useMemo[selectedProgressRows]"], [
        selectedProgressRow
    ]);
    // 작업시작 버튼 클릭 시
    const handleWorkStart = ()=>{
        if (uploadedFiles.length === 0) {
            // 작업대상이 선택되지 않은 경우 경고 알림창 표시
            // showAlert('작업 지정 대상을 선택해주세요.');
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "발신목록이 없습니다.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        } else if (_callListInsertData.campaign_id === 0) {
            setAlertState({
                ...errorMessage,
                isOpen: true,
                message: "대상 캠페인을 선택해 주세요.",
                type: '2',
                onClose: ()=>setAlertState((prev)=>({
                            ...prev,
                            isOpen: false
                        }))
            });
        } else {
            // 작업대상이 선택된 경우 로딩 창 표시
            //setIsLoading(true);
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const newProgressListData = {
                ...progressListData,
                id: progressList.length + 1,
                datetime: hours + ':' + minutes + ':' + seconds,
                message: '서버에 리스트 파일 등록 시작'
            };
            setProgressList((prev)=>[
                    newProgressListData,
                    ...prev
                ]);
            setWorkFileIndex(0);
        }
    };
    //select data change
    const handleSelectChange = (value, type)=>{
        if (type === 'campaignId') {
            setCampaignId(Number(value));
            setCallListInsertData({
                ..._callListInsertData,
                campaign_id: Number(value)
            });
        }
        if (type === 'listFlag') {
            setListFlag(value);
            setCallListInsertData({
                ..._callListInsertData,
                list_flag: value
            });
        }
    };
    //checkbox checked change
    const handleCheckbox = (checked, type)=>{
        if (type === 'deleteData') {
            setDeleteData(checked);
            if (checked) {
                setListFlag('I');
                setCallListInsertData({
                    ..._callListInsertData,
                    list_flag: 'I'
                });
            } else {
                setListFlag('A');
                setCallListInsertData({
                    ..._callListInsertData,
                    list_flag: 'A'
                });
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListManager.useEffect": ()=>{
            if (activeTabId === 7) {
                const tempData = openedTabs.filter({
                    "ListManager.useEffect.tempData": (tab)=>tab.id === 7
                }["ListManager.useEffect.tempData"]);
                if (tempData.length > 0 && tempData[0].campaignId && tempData[0].campaignName) {
                    const _campaignId = Number(tempData[0].campaignId);
                    setCampaignId(_campaignId);
                    setCallListInsertData({
                        ..._callListInsertData,
                        campaign_id: _campaignId
                    });
                    setCampaignIdDisabled(true);
                }
            }
        }
    }["ListManager.useEffect"], [
        activeTabId,
        openedTabs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListManager.useEffect": ()=>{
            if (workFileIndex > -1) {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                const seconds = now.getSeconds().toString().padStart(2, '0');
                const newProgressListData = {
                    ...progressListData,
                    id: progressList.length + 1,
                    datetime: hours + ':' + minutes + ':' + seconds,
                    message: workFileIndex + 1 + ' 번 파일 리스트 등록 시작'
                };
                setProgressList({
                    "ListManager.useEffect": (prev)=>[
                            newProgressListData,
                            ...prev
                        ]
                }["ListManager.useEffect"]);
                const dataList = [];
                let sequenceIndex = 1;
                for(let j = 0; j < sendList.length; j++){
                    if (uploadedFiles[workFileIndex].id === sendList[j].fileId) {
                        dataList.push({
                            customer_key: sendList[j].CSNA + '',
                            sequence_number: sequenceIndex++,
                            customer_name: sendList[j].CSNA + '',
                            phone_number1: sendList[j].TNO1 + '',
                            phone_number2: sendList[j].TNO2 + '',
                            phone_number3: sendList[j].TNO3 + '',
                            phone_number4: sendList[j].TNO4 + '',
                            phone_number5: sendList[j].TNO5 + '',
                            reserved_time: sendList[j].TKDA + '',
                            token_data: sendList[j].CSC1 + ''
                        });
                    }
                }
                const callingListInsertData = {
                    ..._callListInsertData,
                    campaign_id: Number(uploadedFiles[workFileIndex].campaignId),
                    list_flag: uploadedFiles[workFileIndex].listFlag + '',
                    calling_list: dataList
                };
                if (uploadedFiles[workFileIndex].listFlag === 'T') {
                    fetchBlacklistDelete(Number(uploadedFiles[workFileIndex].campaignId));
                } else if (targetType === 'general') {
                    fetchCallingListInsert(callingListInsertData);
                } else {
                    fetchBlacklistInsert(callingListInsertData);
                }
            }
        }
    }["ListManager.useEffect"], [
        workFileIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5 limit-width",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 flex-1 flex flex-col gap-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: "작업대상목록",
                                    className: "border-b border-gray-300 pb-1",
                                    buttons: [
                                        {
                                            label: "파일 포맷 설정",
                                            onClick: handleFileFormatOpen
                                        },
                                        {
                                            label: "작업시작",
                                            onClick: handleWorkStart
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                    lineNumber: 853,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[200px] grid-custom-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid-top-subject h-[26px]",
                                            children: "Loading File(s)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                            lineNumber: 862,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            columns: columns,
                                            rows: uploadedFiles,
                                            className: "grid-custom cursor-pointer h-custom-important",
                                            rowHeight: 30,
                                            headerRowHeight: 30,
                                            rowClass: getFileRowClass,
                                            rowKeyGetter: (row)=>row.id,
                                            onCellClick: handleFileRowClick,
                                            selectedRows: selectedFileRows
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                            lineNumber: 865,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                    lineNumber: 861,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                            lineNumber: 852,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                        lineNumber: 851,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 flex-1 flex flex-col gap-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TitleWrap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: "작업대상 내역",
                                    className: "border-b border-gray-300 pb-1",
                                    buttons: [
                                        {
                                            label: "새 작업대상",
                                            onClick: handleNewTarget
                                        },
                                        {
                                            label: "작업대상 올리기",
                                            onClick: triggerFileInput
                                        },
                                        {
                                            label: "작업대상 삭제",
                                            onClick: handleDeleteFile,
                                            disabled: !selectedFile
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                    lineNumber: 883,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "w-[100px] min-w-[100px]",
                                                    children: "대상캠페인"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: _callListInsertData.campaign_id + '',
                                                    onValueChange: (value)=>handleSelectChange(value, 'campaignId'),
                                                    defaultValue: "0",
                                                    disabled: campaignIdDisabled,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "w-[300px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "대상캠페인"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            style: {
                                                                maxHeight: '300px',
                                                                overflowY: 'auto'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "0",
                                                                    children: "-선택-"
                                                                }, "0", false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 903,
                                                                    columnNumber: 21
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
                                                                        fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                        lineNumber: 905,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 902,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomInput$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomInput"], {
                                                    className: "w-full",
                                                    value: selectedFileName,
                                                    disabled: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 911,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 h-[26px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "w-[100px] min-w-[100px]",
                                                    children: "파일형식"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadio"], {
                                                    defaultValue: "auto",
                                                    className: "flex gap-8",
                                                    value: fileFormat,
                                                    onValueChange: (value)=>setFileFormat(value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                    value: "excel",
                                                                    id: "excel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    htmlFor: "excel",
                                                                    children: "EXCEL"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 925,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                    value: "txt",
                                                                    id: "txt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 930,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    htmlFor: "txt",
                                                                    children: "TXT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 931,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 929,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                            lineNumber: 917,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 h-[26px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "w-[100px] min-w-[100px]",
                                                    children: "작업대상 구분"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadio"], {
                                                    defaultValue: "general",
                                                    className: "flex gap-8 w-[200px] min-w-[200px]",
                                                    onValueChange: handleTargetTypeChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                    value: "general",
                                                                    id: "general"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 943,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    htmlFor: "general",
                                                                    children: "일반"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 944,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CommonRadio$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonRadioItem"], {
                                                                    value: "blacklist",
                                                                    id: "blacklist"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 947,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    htmlFor: "blacklist",
                                                                    children: "블랙리스트"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 948,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 946,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 17
                                                }, this),
                                                targetType === "general" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomCheckbox$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCheckbox"], {
                                                            id: "deleteData",
                                                            checked: deleteData,
                                                            onCheckedChange: (checked)=>handleCheckbox(checked === true, 'deleteData')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 954,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "deleteData",
                                                            className: "text-sm",
                                                            children: "기존 캠페인 데이터 삭제"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 956,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: _callListInsertData.list_flag,
                                                    onValueChange: (value)=>handleSelectChange(value, 'listFlag'),
                                                    defaultValue: "I",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Insert: 기존리스트 삭제 후 등록"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                lineNumber: 966,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 965,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "I",
                                                                    children: "Insert : 기존리스트 삭제 후 등록"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "D",
                                                                    children: "Delete : 특정리스트 삭제"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "A",
                                                                    children: "Append : 발신리스트 추가"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 971,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CustomSelect$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "T",
                                                                    children: "블랙리스트 전체 삭제"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                            lineNumber: 935,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                    lineNumber: 892,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                            lineNumber: 882,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                        lineNumber: 881,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                lineNumber: 849,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$SenderList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        headerData: sendColumns,
                        _sendList: sendList
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                        lineNumber: 983,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[300px] grid-custom-wrap mt-[28px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid-top-subject h-[26px]",
                                    children: "Progress Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                    lineNumber: 986,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$data$2d$grid$2f$lib$2f$bundle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    columns: progressColumns,
                                    rows: progressList,
                                    className: "grid-custom cursor-pointer h-custom-important",
                                    rowHeight: 30,
                                    headerRowHeight: 30,
                                    rowKeyGetter: (row)=>row.id,
                                    rowClass: getProgressRowClass,
                                    onCellClick: handleProgressRowClick,
                                    selectedRows: selectedProgressRow ? new Set([
                                        selectedProgressRow.id
                                    ]) : new Set()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                                    lineNumber: 989,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                            lineNumber: 985,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                        lineNumber: 984,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                lineNumber: 982,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                id: "fileInput",
                className: "hidden",
                onChange: handleFileUpload
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$FileFormat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isFileFormatOpen,
                onConfirm: handleFileFormatConfirm,
                onClose: handleFileFormatClose
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                lineNumber: 1013,
                columnNumber: 8
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
                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                lineNumber: 1020,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$main$2f$comp$2f$ListManager$2f$LoadingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isLoading: isLoading,
                onClose: ()=>setIsLoading(false),
                totalCount: 100,
                completedCount: 50,
                outboundProgress: 75
            }, void 0, false, {
                fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
                lineNumber: 1031,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/main/comp/ListManager/index.tsx",
        lineNumber: 848,
        columnNumber: 5
    }, this);
};
_s(ListManager, "SPlha8jOlGh9KYek/43AX30YuLY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$mainStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$tabStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForCallingListInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForCallingListInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForBlacklistInsert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForBlacklistInsert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$listManager$2f$hooks$2f$useApiForBlacklistDelete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApiForBlacklistDelete"]
    ];
});
_c = ListManager;
const __TURBOPACK__default__export__ = ListManager;
var _c;
__turbopack_refresh__.register(_c, "ListManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_main_comp_ListManager_2097cf._.js.map