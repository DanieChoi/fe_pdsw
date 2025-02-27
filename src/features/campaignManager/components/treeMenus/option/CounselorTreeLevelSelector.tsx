"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Layers } from "lucide-react";

interface CounselorTreeLevelSelectorProps {
  onExpandToLevel: (level: number) => void;
  onToggleAllNodes: (isExpanded: boolean) => void;
  onApplyDefaultExpansion: () => void;
}

export function CounselorTreeLevelSelector({
  onExpandToLevel,
  onToggleAllNodes,
  onApplyDefaultExpansion
}: CounselorTreeLevelSelectorProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="text-xs py-1 h-8 ml-auto flex items-center gap-1"
        >
          <Layers size={14} />
          계층 설정
          <ChevronDown size={14} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2" align="end">
        <div className="flex flex-col gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(1)}
            className="text-xs py-1 h-8 justify-start"
          >
            1. 조직 레벨
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(2)}
            className="text-xs py-1 h-8 justify-start"
          >
            2. 테넌트 레벨
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(3)}
            className="text-xs py-1 h-8 justify-start"
          >
            3. 그룹 레벨
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(4)}
            className="text-xs py-1 h-8 justify-start"
          >
            4. 팀 레벨
          </Button>
          <hr className="my-1" />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onToggleAllNodes(true)}
            className="text-xs py-1 h-8 justify-start"
          >
            전체 열기
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onToggleAllNodes(false)}
            className="text-xs py-1 h-8 justify-start"
          >
            전체 닫기
          </Button>

        </div>
      </PopoverContent>
    </Popover>
  );
}