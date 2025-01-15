import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CommonButton from "@/components/shared/CommonButton";


const SystemPreferences = (props: Props) => {

    return (
        <div>
            <div className="flex gap-5">
                <div className="w-1/2 flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <h2 className="text-sm">장비목록</h2>
                                <span className="text-sm text-[#777] pl-2">(총 <span className="text-[#F01E29]">2</span> 건)</span>
                            </div>
                        </div>
                        <div className="min-h-[400px] bg-[#777]">테이블</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <h2 className="text-sm">장비 상세내역</h2>
                            </div>
                            <ul className="flex gap-1">
                                <li>
                                        <CommonButton 
                                        variant="default"
                                        type="submit" 
                                        >
                                        신규
                                        </CommonButton>          
                                </li>
                                <li>
                                        <CommonButton 
                                        variant="default"
                                        type="submit" 
                                        >
                                        저장
                                        </CommonButton>          
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="w-1/2 flex-1">
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <h2 className="text-sm">장비목록</h2>
                                <span className="text-sm text-[#777] pl-2">(총 <span className="text-[#F01E29]">2</span> 건)</span>
                            </div>
                        </div>
                        <div className="min-h-[400px] bg-[#777]">그리드 영역</div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <h2 className="text-sm">장비목록</h2>
                                <span className="text-sm text-[#777] pl-2">(총 <span className="text-[#F01E29]">2</span> 건)</span>
                            </div>
                            <ul className="flex gap-1">
                                <li>
                                        <CommonButton 
                                        variant="default"
                                        type="submit" 
                                        >
                                        신규
                                        </CommonButton>          
                                </li>
                                <li>
                                        <CommonButton 
                                        variant="default"
                                        type="submit" 
                                        >
                                        저장
                                        </CommonButton>          
                                </li>
                            </ul>
                        </div>
                        <div className="min-h-[400px]">채널 목록 테이블</div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default SystemPreferences
