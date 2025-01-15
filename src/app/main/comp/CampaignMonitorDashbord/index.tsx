import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  ExpandedState,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight, ChevronDown } from 'lucide-react'

interface CampaignData {
  id: string
  name: string
  requestStatus: string
  executeStatus: string
  processStatus: string
  errorRate: number
  riskTestRate: number
  timeTestRate: number
  riskTestCount: number
  processCount: number
  completeCount: number
  subRows?: CampaignData[]
}

const defaultData: CampaignData[] = [
  {
    id: '1',
    name: 'NEXUS(1번대)',
    requestStatus: '',
    executeStatus: '',
    processStatus: '',
    errorRate: 0,
    riskTestRate: 0,
    timeTestRate: 0,
    riskTestCount: 0,
    processCount: 0,
    completeCount: 0,
    subRows: [
      {
        id: '1-1',
        name: '124752',
        requestStatus: '',
        executeStatus: '',
        processStatus: '',
        errorRate: 0,
        riskTestRate: 0,
        timeTestRate: 0,
        riskTestCount: 0,
        processCount: 0,
        completeCount: 0,
        subRows: [
          {
            id: '1-1-1',
            name: '캠페인 아이디: 7',
            requestStatus: '',
            executeStatus: '',
            processStatus: '',
            errorRate: 0,
            riskTestRate: 0,
            timeTestRate: 0,
            riskTestCount: 0,
            processCount: 0,
            completeCount: 0,
            subRows: [
              {
                id: 'O00147-00234',
                name: 'O00147-00234',
                requestStatus: '처리완료',
                executeStatus: '입중',
                processStatus: '진행중',
                errorRate: 25,
                riskTestRate: 0,
                timeTestRate: 0,
                riskTestCount: 4,
                processCount: 1,
                completeCount: 3,
              }
            ]
          }
        ]
      }
    ]
  }
]

const CampaignMonitorDashbord = () => {
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

  // 초기에 모든 행을 펼친 상태로 설정
  React.useEffect(() => {
    const allExpanded: ExpandedState = {}
    const expandRows = (rows: CampaignData[]) => {
      rows.forEach(row => {
        allExpanded[row.id] = true
        if (row.subRows) {
          expandRows(row.subRows)
        }
      })
    }
    expandRows(defaultData)
    setExpanded(allExpanded)
  }, [])

  const columns: ColumnDef<CampaignData>[] = [
    {
      accessorKey: 'name',
      header: '캠페인 이름',
      cell: ({ row }) => {
        return (
          <div className="flex items-center" style={{ paddingLeft: `${row.depth * 2}rem` }}>
            {row.getCanExpand() ? (
              <button
                className="mr-2 hover:bg-gray-100 rounded"
                onClick={row.getToggleExpandedHandler()}
              >
                {row.getIsExpanded() ? (
                  <div className="w-4 h-4 flex items-center justify-center text-gray-500">
                    ∨
                  </div>
                ) : (
                  <div className="w-4 h-4 flex items-center justify-center text-gray-500">
                    ＞
                  </div>
                )}
              </button>
            ) : (
              <span className="w-6"></span>
            )}
            <span className="text-[13px] text-gray-700">{row.getValue('name')}</span>
          </div>
        )
      },
    },
    {
      accessorKey: 'requestStatus',
      header: '발신구분',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as string}</div>
      )
    },
    {
      accessorKey: 'executeStatus',
      header: '시작구분',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as string}</div>
      )
    },
    {
      accessorKey: 'processStatus',
      header: '완료구분',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as string}</div>
      )
    },
    {
      accessorKey: 'errorRate',
      header: '진행률(%)',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as number}</div>
      )
    },
    {
      accessorKey: 'riskTestRate',
      header: '리스크 대비 성공률(%)',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as number}</div>
      )
    },
    {
      accessorKey: 'timeTestRate',
      header: '발신 대비 성공률(%)',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as number}</div>
      )
    },
    {
      accessorKey: 'riskTestCount',
      header: '총 리스크 건수',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as number}</div>
      )
    },
    {
      accessorKey: 'processCount',
      header: '순수발신 건수',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as number}</div>
      )
    },
    {
      accessorKey: 'completeCount',
      header: '총발신 건수',
      cell: ({ getValue }) => (
        <div className="text-[13px] text-gray-700">{getValue() as number}</div>
      )
    },
  ]

  const table = useReactTable({
    data: defaultData,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: row => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  })

  return (
    <div className="p-4 bg-white">
      <div className="border border-gray-200">
        <Table>
          <TableHeader className="bg-[#FBFBFB]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-[13px] font-medium text-gray-700 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-1.5">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default CampaignMonitorDashbord