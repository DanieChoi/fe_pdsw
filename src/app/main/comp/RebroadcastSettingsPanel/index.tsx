"use client";

import React, { useState } from "react";

const RebroadcastSettingsPanel = () => {
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold">재발신 설정</h2>
            <div>
                재발신 설정 구현
            </div>
        </div>
    );
};

export default RebroadcastSettingsPanel;
