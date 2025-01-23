import React, { useEffect, useState} from 'react';
import { useCampainManagerStore } from '@/store';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import DataGrid, { SelectColumn } from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

interface Skill {
    skill_id: number;
    skill_name: string;
    tenant_id: number;
}

export interface CallingNumberPopupProps {
    param: number[];
    tenantId: number;
    isOpen?: boolean;
    type: string; 
    onConfirm: (param: string) => void;
    onCancle?: () => void;
}

const CallingNumberPopup = ({ 
    param, 
    tenantId,
    type, 
    isOpen = true,
    onConfirm,
    onCancle
}: CallingNumberPopupProps) => {
    const { skills } = useCampainManagerStore();
    const [selectedSkills, setSelectedSkills] = useState<Set<number>>(new Set(param));
    
    useEffect(() => {
        if(param !== null){
            setSelectedSkills(new Set(param));
        }
    }, [param]);

    const handleConfirm = () => {
        onConfirm(Array.from(selectedSkills).sort().join(','));
    };

    // skill_id가 0인 항목 제외
    const rows = skills.filter((skill) => 
        skill.tenant_id === tenantId && skill.skill_id !== 0
    );

    const handleSelectedRowsChange = (newSelection: Set<number>) => {
        // 혹시 모를 0값이 포함되는 것을 방지
        const filteredSelection = new Set(
            Array.from(newSelection).filter(id => id !== 0)
        );
        setSelectedSkills(filteredSelection);
    };

    const columns = [
        SelectColumn,
        {
            key: 'skill_id',
            name: '아이디',
            frozen: true,
            width: 157,
            minWidth: 100
        },
        {
            key: 'skill_name',
            name: '이름',
            frozen: true,
            width: 157,
            minWidth: 100
        }
    ];

    const rowClass = (row: Skill) => {
        return selectedSkills.has(row.skill_id) ? 'selected-row' : '';
    };

    const gridContent = (
        <div className="grid-custom-wrap w-full">
            <DataGrid
                columns={columns}
                rows={rows}
                className="grid-custom w-full"
                rowKeyGetter={(row) => row.skill_id}
                selectedRows={selectedSkills}
                onSelectedRowsChange={handleSelectedRowsChange}
                rowClass={rowClass}
                rowHeight={26}
            />
        </div>
    );

    return (
        <CustomAlert
            isOpen={isOpen}
            title="캠페인 스킬 선택"
            message={gridContent}
            onClose={handleConfirm}
            onCancle={onCancle}
            type={type}
        />
    );
};

export default CallingNumberPopup;