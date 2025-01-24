import React, { useState, useMemo } from 'react';
import DataGrid, { Column } from "react-data-grid";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Label } from "@/components/ui/label";

type ViewMode = 'campaign' | 'skill';

interface BaseRow {
  release_time: string;
}

interface CampaignRow extends BaseRow {
  type: 'campaign';
  campaign_id: string;
  campaign_name: string;
}

interface SkillRow extends BaseRow {
  type: 'skill';
  skill_id: string;
  skill_name: string;
}

type GridRow = CampaignRow | SkillRow;

const SuspendView = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('campaign');

  const handleViewModeChange = (value: string) => {
    setViewMode(value as ViewMode);
  };

  const columns = useMemo<readonly Column<GridRow>[]>(() => {
    if (viewMode === 'campaign') {
      return [
        { key: 'campaign_id', name: '캠페인 아이디' },
        { key: 'campaign_name', name: '캠페인 이름' },
        { key: 'release_time', name: '해제시간' }
      ];
    }
    return [
      { key: 'skill_id', name: '스킬 아이디' },
      { key: 'skill_name', name: '스킬 이름' },
      { key: 'release_time', name: '해제시간' }
    ];
  }, [viewMode]);

  const rows = useMemo<readonly GridRow[]>(() => {
    if (viewMode === 'campaign') {
      return [
        { type: 'campaign', campaign_id: '1214', campaign_name: 'web_only', release_time: '2024-01-24 15:00' },
        { type: 'campaign', campaign_id: '1215', campaign_name: 'mobile_only', release_time: '2024-01-24 16:00' }
      ];
    }
    return [
      { type: 'skill', skill_id: 'SK001', skill_name: 'Customer Service', release_time: '2024-01-24 15:00' },
      { type: 'skill', skill_id: 'SK002', skill_name: 'Technical Support', release_time: '2024-01-24 16:00' }
    ];
  }, [viewMode]);

  const rowKeyGetter = (row: GridRow) => {
    return row.type === 'campaign'
      ? `${row.campaign_id}-${row.release_time}`
      : `${row.skill_id}-${row.release_time}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Label className="w-[8.5rem] min-w-[8.5rem]">Suspend View Mode</Label>
        <Select 
          value={viewMode} 
          onValueChange={handleViewModeChange}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="View Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="campaign">캠페인</SelectItem>
            <SelectItem value="skill">스킬</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-[580px]">
        <div className="grid-custom-wrap h-[230px]">
          <DataGrid<GridRow>
            columns={columns}
            rows={rows}
            className="grid-custom"
            rowHeight={26}
            headerRowHeight={26}
            rowKeyGetter={rowKeyGetter}
          />
        </div>
      </div>
    </div>
  );
};

export default SuspendView;