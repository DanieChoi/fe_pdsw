import React, { useState } from "react";
import { useTabStore } from '@/store/tabStore';
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { Label } from "@/components/ui/label";
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import { CommonButton } from "@/components/shared/CommonButton";


const AgentStatusMonitoring: React.FC = () => {


  return (
    <div className="w-full limit-width">
     상담원상태 모니터링1
    </div>
  );
};

export default AgentStatusMonitoring;