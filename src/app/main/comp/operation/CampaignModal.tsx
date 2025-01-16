import React from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from 'lucide-react';

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (campaign: string) => void;
}

export default function CampaignModal({ isOpen, onClose, onSelect }: CampaignModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[480px] bg-white p-0 rounded-none">
        {/* Header */}
        <div className="px-4 py-3 flex justify-between items-center border-b">
          <h2 className="text-base">캠페인 조회</h2>
          <button onClick={onClose} className="hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Section */}
        <div className="p-4">
          {/* Search Label & Button */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm">조회조건</span>
            <Button 
              className="bg-[#00c2b3] hover:bg-[#00c2b3]/90 text-white h-8 px-4 rounded"
            >
              조회
            </Button>
          </div>

          {/* Search Fields */}
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm block mb-1">테넌트</label>
                <Select>
                  <SelectTrigger className="h-9 border-gray-200">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tenant1">테넌트1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm block mb-1">캠페인이름</label>
                <Select>
                  <SelectTrigger className="h-9 border-gray-200">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="campaign1">캠페인1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm block mb-1">다이얼모드</label>
                <Select>
                  <SelectTrigger className="h-9 border-gray-200">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mode1">모드1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm block mb-1">스킬</label>
                <Select>
                  <SelectTrigger className="h-9 border-gray-200">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="skill1">스킬1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm block mb-1">발신번호</label>
                <Input 
                  type="text" 
                  className="h-9 border-gray-200"
                  placeholder="발신번호 입력"
                />
              </div>
            </div>
          </div>
        </div>

        {/* List Header */}
        <div className="px-4 py-2 bg-gray-50 border-t border-b">
          <div className="flex items-center gap-1">
            <span className="text-sm">캠페인 검색목록</span>
            <span className="text-sm text-[#00c2b3]">(총 3 건)</span>
          </div>
        </div>

        {/* Grid */}
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-sm font-normal">캠페인 아이디</TableHead>
                <TableHead className="text-sm font-normal">캠페인 이름</TableHead>
                <TableHead className="text-sm font-normal">대상군</TableHead>
                <TableHead className="text-sm font-normal">수신</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3].map((index) => (
                <TableRow 
                  key={index} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => onSelect(`campaign_${index}`)}
                >
                  <TableCell className="text-sm">1</TableCell>
                  <TableCell className="text-sm">web_only</TableCell>
                  <TableCell className="text-sm">web_only</TableCell>
                  <TableCell className="text-sm">asdf</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Buttons */}
          <div className="flex justify-end gap-1 mt-4">
            <Button 
              className="bg-[#00c2b3] hover:bg-[#00c2b3]/90 text-white h-8 px-4 rounded"
            >
              확인
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="h-8 px-4 rounded"
            >
              닫기
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}