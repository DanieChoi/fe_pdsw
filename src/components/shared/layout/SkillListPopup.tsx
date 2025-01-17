"use client";
// components/shared/layout/SkillListPopup.tsx
import React from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useMainStore } from '@/store';
import { useEffect, useState } from 'react';

export interface CustomAlertRequest {
    param: number[];
    tenantId: number;
    type: string;
    isOpen?: boolean;
    onConfirm: (param:string) => void;
    onCancle?: () => void;
}

const SkillListPopup = ({ 
    param, 
    tenantId,
    type,
    isOpen = true,
    onConfirm,
    onCancle
}: CustomAlertRequest) => {
    
    const { skills } = useMainStore();
    const [selectedSkills, setSelectedSkills] = useState<number[]>(param);
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, skillId: number) => {
        if(e.target.checked){
            let temp = [...selectedSkills, skillId].sort();
            setSelectedSkills(temp);
        }else{
            setSelectedSkills(selectedSkills.filter((data) => data !== skillId));
        }
    }
    
    useEffect(() => {
        if( param !== null ){
            setSelectedSkills(param);
        }
    }, [param]);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onConfirm(selectedSkills.join(','));
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={onCancle}>
            <AlertDialogContent className="p-0 max-w-sm rounded-none border shadow-sm">
                <AlertDialogHeader className="bg-gray-100 px-4 py-2 border-b">
                    <AlertDialogTitle className="text-sm text-gray-700 font-normal">
                        캠페인 스킬 선택
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <div className="p-4 bg-white">
                    <div className="text-sm text-gray-700 mb-4">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-gray-50">
                            <th className="border p-2 text-left">선택</th>
                            <th className="border p-2 text-left">아이디</th>
                            <th className="border p-2 text-left">이름</th>
                        </tr>
                        </thead>
                        <tbody>
                        {skills.filter((skill) => skill.tenant_id === tenantId)
                        .map((skill, index) => (
                            <tr 
                            key={skill.skill_id}
                            className="cursor-pointer hover:bg-gray-50"
                            >
                            <td className="border p-2" typeof='checkbox'><input
                                    type="checkbox"
                                    checked={selectedSkills.filter((data) => data === skill.skill_id).length > 0}
                                    onChange={(e) => handleCheckboxChange(e, skill.skill_id)}
                                    readOnly
                                />
                            </td>
                            <td className="border p-2">{skill.skill_id}</td>
                            <td className="border p-2">{skill.skill_name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                    <div className="flex justify-end gap-1.5">
                        <Button
                            onClick={handleClick}
                            className="h-7 px-3 py-0 text-xs bg-teal-400 hover:bg-teal-500 text-white rounded"
                        >
                            확인
                        </Button>
                        <Button
                            onClick={onCancle}
                            className="h-7 px-3 py-0 text-xs bg-teal-400 hover:bg-teal-500 text-white rounded"
                        >
                            취소
                        </Button>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default SkillListPopup;