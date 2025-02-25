// "use client";

// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

// export type BlendKind = 1 | 2 | 3 | null; // 1: inbound, 2: outbound, 3: blend

// interface CounselorFilterState {
//   selectedBlendKind: BlendKind;
//   selectedCounselor: {
//     counselorId: string | null;
//     counselorName: string | null;
//     tenantId: string | null;
//   };
//   candidateMembersForSkilAssign: any[];
//   setSelectedBlendKind: (blendKind: BlendKind) => void;
//   setSelectedCounselor: (counselorId: string, counselorName: string, tenantId: string) => void;
//   setCandidateMembersForSkilAssign: (members: any[]) => void;
//   resetFilter: () => void;
//   getState: () => void;
// }

// export const useCounselorFilterStore = create<CounselorFilterState>()(
//   devtools(
//     (set, get) => ({
//       selectedBlendKind: null,
//       selectedCounselor: {
//         counselorId: null,
//         counselorName: null,
//         tenantId: null,
//       },
//       candidateMembersForSkilAssign: [],

//       setSelectedBlendKind: (blendKind) => {
//         set(
//           { selectedBlendKind: blendKind },
//           false,
//           'counselorFilter/setSelectedBlendKind'
//         );
//         console.log('Blend Kind updated:', get().selectedBlendKind);
//       },

//       setSelectedCounselor: (counselorId, counselorName, tenantId) => {
//         set(
//           { 
//             selectedCounselor: { 
//               counselorId, 
//               counselorName, 
//               tenantId 
//             } 
//           },
//           false,
//           'counselorFilter/setSelectedCounselor'
//         );
//         console.log('Counselor updated:', get().selectedCounselor);
//       },

//       setCandidateMembersForSkilAssign: (members) => {
//         set(
//           { candidateMembersForSkilAssign: members },
//           false,
//           'counselorFilter/setCandidateMembersForSkilAssign'
//         );
//         console.log('Candidate members updated:', members);
//       },

//       resetFilter: () => {
//         set(
//           {
//             selectedBlendKind: null,
//             selectedCounselor: { 
//               counselorId: null, 
//               counselorName: null, 
//               tenantId: null 
//             },
//             candidateMembersForSkilAssign: [],
//           },
//           false,
//           'counselorFilter/resetFilter'
//         );
//         console.log('Store reset');
//       },

//       getState: () => {
//         console.log('Current state:', {
//           selectedBlendKind: get().selectedBlendKind,
//           selectedCounselor: get().selectedCounselor,
//           candidateMembersForSkilAssign: get().candidateMembersForSkilAssign
//         });
//       }
//     }),
//     {
//       name: 'Counselor Filter Store',
//       enabled: process.env.NODE_ENV === 'development'
//     }
//   )
// );

"use client";

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type BlendKind = 1 | 2 | 3 | null; // 1: inbound, 2: outbound, 3: blend

interface CounselorFilterState {
  selectedBlendKind: BlendKind;
  selectedCounselor: {
    counselorId: string | null;
    counselorName: string | null;
    tenantId: string | null;
  };
  candidateMembersForSkilAssign: any[];
  setSelectedBlendKind: (blendKind: BlendKind) => void;
  setSelectedCounselor: (counselorId: string, counselorName: string, tenantId: string) => void;
  setCandidateMembersForSkilAssign: (members: any[]) => void;
  resetFilter: () => void;
  getState: () => void;
}

export const useCounselorFilterStore = create<CounselorFilterState>()(
  devtools(
    (set, get) => ({
      selectedBlendKind: null,
      selectedCounselor: {
        counselorId: null,
        counselorName: null,
        tenantId: null,
      },
      candidateMembersForSkilAssign: [],

      setSelectedBlendKind: (blendKind) => {
        set(
          { selectedBlendKind: blendKind },
          false,
          'counselorFilter/setSelectedBlendKind'
        );
        console.log('Blend Kind updated:', get().selectedBlendKind);
      },

      setSelectedCounselor: (counselorId, counselorName, tenantId) => {
        set(
          { 
            selectedCounselor: { 
              counselorId, 
              counselorName, 
              tenantId 
            } 
          },
          false,
          'counselorFilter/setSelectedCounselor'
        );
        console.log('Counselor updated:', get().selectedCounselor);
      },

      setCandidateMembersForSkilAssign: (members) => {
        set(
          { candidateMembersForSkilAssign: members },
          false,
          'counselorFilter/setCandidateMembersForSkilAssign'
        );
        console.log('Candidate members updated:', members);
      },

      resetFilter: () => {
        set(
          {
            selectedBlendKind: null,
            selectedCounselor: { 
              counselorId: null, 
              counselorName: null, 
              tenantId: null 
            },
            candidateMembersForSkilAssign: [],
          },
          false,
          'counselorFilter/resetFilter'
        );
        console.log('Store reset');
      },

      getState: () => {
        console.log('Current state:', {
          selectedBlendKind: get().selectedBlendKind,
          selectedCounselor: get().selectedCounselor,
          candidateMembersForSkilAssign: get().candidateMembersForSkilAssign
        });
      }
    }),
    {
      name: 'Counselor Filter Store',
      enabled: process.env.NODE_ENV === 'development'
    }
  )
);