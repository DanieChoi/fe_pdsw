// src/app/main/comp/TabMenuForMainPage.tsx
"use client";

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useTabStore } from '@/features/store';

const TabMenuForMainPage = () => {
  const { openedTabs, activeTabId, removeTab, setActiveTab } = useTabStore();

  if (openedTabs.length === 0) return null;

  return (
    <div className="bg-white border-b">
      <div className="container px-4">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {openedTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTabId === tab.id ? "default" : "ghost"}
              className={`
                group relative flex items-center space-x-2 rounded-md px-3 py-2 
                ${activeTabId === tab.id 
                  ? 'bg-green-500 text-white' 
                  : 'hover:bg-gray-100'}
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="w-4 h-4 relative">
                <Image
                  src={tab.icon}
                  alt={tab.title}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm">{tab.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(tab.id);
                }}
                className={`
                  ml-2 rounded-full p-1 hover:bg-gray-200 
                  ${activeTabId === tab.id 
                    ? 'text-white hover:bg-blue-600' 
                    : 'text-gray-500'}
                `}
              >
                <X className="h-3 w-3" />
              </button>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenuForMainPage;