"use client";

import React from "react";
import Image from "next/image";
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
          className="text-xs py-1 h-7 flex items-center gap-1"
        >
          {/* <Layers size={14} /> */}
          lev 
          <ChevronDown size={14} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1" align="end">
        <div className="flex flex-col gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(1)}
            className="text-xs py-0.5 h-7 justify-start"
          >
            <Image src="/tree-menu/organization.png" alt="조직" width={14} height={12} className="mr-1" />
            1. 조직직
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(2)}
            className="text-xs py-0.5 h-7 justify-start"
          >
            <Image src="/tree-menu/tennant_office.png" alt="테넌트" width={14} height={12} className="mr-1" />
            2. 테넌트
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(3)}
            className="text-xs py-0.5 h-7 justify-start"
          >
            <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} className="mr-1" />
            3. 그룹
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onExpandToLevel(4)}
            className="text-xs py-0.5 h-7 justify-start"
          >
            <Image src="/tree-menu/team_icon_for_tree.png" alt="팀" width={14} height={12} className="mr-1" />
            4. 팀
          </Button>
          <hr className="my-1" />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onToggleAllNodes(true)}
            className="text-xs py-0.5 h-7 justify-start"
          >
            <Layers size={14} className="mr-1" />
            전체
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onToggleAllNodes(false)}
            className="text-xs py-0.5 h-7 justify-start"
          >
            <Layers size={14} className="mr-1" />
            닫기
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}