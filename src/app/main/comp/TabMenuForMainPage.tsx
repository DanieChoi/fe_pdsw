// src/app/main/comp/TabMenuForMainPage.tsx
"use client";

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useTabStore } from '@/store/tabStore';

const TabMenuForMainPage = () => {
  const { openedTabs, activeTabId, removeTab, setActiveTab } = useTabStore();

  if (openedTabs.length === 0) return null;

  return (
    <div className="bg-white border-b">
      <div className="container px-4">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {openedTabs.map((tab) => (
            <div 
              key={tab.id} 
              className="relative flex items-center"
            >
              <Button
                variant={activeTabId === tab.id ? "default" : "ghost"}
                className={`
                  group flex items-center space-x-2 rounded-md pr-8 pl-3 py-2 
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
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(tab.id);
                }}
                className={`
                  absolute right-1 p-1 rounded-full hover:bg-gray-200
                  ${activeTabId === tab.id 
                    ? 'text-white hover:bg-green-600' 
                    : 'text-gray-500'}
                `}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenuForMainPage;