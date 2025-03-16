// src/store/storeForSideMenuCampaignGroupTab.ts
import { create } from 'zustand';
import { TreeNode } from '@/features/campaignManager/types/typeForCampaignGroupForSideBar';
import { apiForCombinedTenantAndCampaignGroup, transformToTreeData } from '@/features/preferences/api/apiForCampaignGroup';
import { scrollToNode } from '@/components/shared/layout/utils/scrollUtils';

// Define sort types
export type SortField = "name" | "id";
export type SortDirection = "asc" | "desc";
export type NodeType = "all" | "tenant" | "group" | "campaign";

interface SideMenuCampaignGroupTabState {
  // Tree data
  treeData: TreeNode[];
  originalTreeData: TreeNode[]; // Store original data for sorting
  isLoading: boolean;
  error: Error | null;
  
  // UI state
  expandedNodes: Set<string>;
  selectedNodeId: string | undefined;
  
  // Sort state
  sortField: SortField;
  sortDirection: SortDirection;
  selectedNodeType: NodeType; // Track which node type is being sorted
  
  // Actions
  fetchTreeData: (tenant_id: number) => Promise<void>;
  toggleNode: (nodeId: string) => void;
  selectNode: (nodeId: string) => void;
  expandAllNodes: () => void;
  collapseAllNodes: () => void;
  resetSelection: () => void;
  
  // Sort actions
  applySort: (field: SortField, direction: SortDirection) => void;
  sortByNodeType: (nodeType: NodeType, field: SortField, direction: SortDirection) => void;
  
  // Helper functions
  expandNodePath: (nodeId: string) => void;
  
  // Search functionality
  searchNode: (searchTerm: string) => string | undefined;
  
  // Helper actions for node manipulation
  addCampaignToGroup: (groupId: string, campaign: TreeNode) => void;
  removeCampaignFromGroup: (campaignId: string) => void;
  updateNodeName: (nodeId: string, newName: string) => void;
}

export const useSideMenuCampaignGroupTabStore = create<SideMenuCampaignGroupTabState>((set, get) => ({
  // Initial state
  treeData: [],
  originalTreeData: [],
  isLoading: false,
  error: null,
  expandedNodes: new Set(),
  selectedNodeId: undefined,
  sortField: "name",
  sortDirection: "asc",
  selectedNodeType: "all",
  
  // Actions
  fetchTreeData: async (tenant_id: number) => {
    set({ isLoading: true, error: null });
    
    try {
      const combinedData = await apiForCombinedTenantAndCampaignGroup(tenant_id);
      const transformedData = transformToTreeData(combinedData);
      
      console.log("transformedData : ", transformedData);

      set({ 
        treeData: transformedData,
        originalTreeData: JSON.parse(JSON.stringify(transformedData)), // Deep copy
        isLoading: false 
      });
      
      // Automatically expand top-level nodes for better UX
      const expandedNodes = new Set<string>();
      if (transformedData.length > 0) {
        transformedData.forEach(node => {
          expandedNodes.add(node.id);
        });
      }
      set({ expandedNodes });
      
    } catch (error) {
      console.error("Error fetching tree data:", error);
      set({ 
        error: error instanceof Error ? error : new Error('Unknown error occurred'),
        isLoading: false 
      });
    }
  },
  
  toggleNode: (nodeId: string) => {
    set(state => {
      const newExpandedNodes = new Set(state.expandedNodes);
      if (newExpandedNodes.has(nodeId)) {
        newExpandedNodes.delete(nodeId);
      } else {
        newExpandedNodes.add(nodeId);
      }
      return { expandedNodes: newExpandedNodes };
    });
  },
  
  selectNode: (nodeId: string) => {
    set({ selectedNodeId: nodeId });
  },
  
  expandAllNodes: () => {
    set(state => {
      const allNodeIds = new Set<string>();
      
      // Helper function to collect all node IDs recursively
      const collectNodeIds = (nodes: TreeNode[]) => {
        nodes.forEach(node => {
          allNodeIds.add(node.id);
          if (node.children && node.children.length > 0) {
            collectNodeIds(node.children);
          }
        });
      };
      
      collectNodeIds(state.treeData);
      return { expandedNodes: allNodeIds };
    });
  },
  
  collapseAllNodes: () => {
    // Only keep top-level nodes expanded
    set(state => {
      const topLevelNodes = new Set<string>();
      state.treeData.forEach(node => {
        topLevelNodes.add(node.id);
      });
      return { expandedNodes: topLevelNodes };
    });
  },
  
  resetSelection: () => {
    set({ selectedNodeId: undefined });
  },
  
  // Helper function to expand all nodes in the path to a given node
  expandNodePath: (nodeId: string) => {
    const { treeData } = get();
    const newExpandedNodes = new Set(get().expandedNodes);
    
    // Helper function to find node path and expand
    const findAndExpandPath = (nodes: TreeNode[], targetId: string, path: TreeNode[] = []): boolean => {
      for (const node of nodes) {
        const currentPath = [...path, node];
        
        if (node.id === targetId) {
          // Found the node, expand all nodes in the path
          currentPath.forEach(pathNode => {
            newExpandedNodes.add(pathNode.id);
          });
          return true;
        }
        
        if (node.children && node.children.length > 0) {
          if (findAndExpandPath(node.children, targetId, currentPath)) {
            return true;
          }
        }
      }
      return false;
    };
    
    findAndExpandPath(treeData, nodeId);
    set({ expandedNodes: newExpandedNodes });
  },
  
  // Sort functionality
  applySort: (field, direction) => {
    set(state => {
      const { originalTreeData } = state;
      
      // Create a deep copy of the original data
      const clonedData = JSON.parse(JSON.stringify(originalTreeData));
      
      // Apply sorting with new parameters
      const sortedData = sortTreeData(clonedData, field, direction);
      
      return { 
        sortField: field,
        sortDirection: direction,
        treeData: sortedData
      };
    });
  },
  
  // New method to sort by node type
  sortByNodeType: (nodeType, field, direction) => {
    set(state => {
      const { originalTreeData } = state;
      
      // Create a deep copy of the original data
      const clonedData = JSON.parse(JSON.stringify(originalTreeData));
      
      // Apply sorting with specified node type
      const sortedData = sortTreeDataByNodeType(clonedData, nodeType, field, direction);
      
      // Expand nodes for better UX based on the type being sorted
      let newExpandedNodes = new Set(state.expandedNodes);
      
      // If sorting by group or campaign, ensure we expand nodes appropriately
      if (nodeType === 'group' || nodeType === 'campaign' || nodeType === 'all') {
        newExpandedNodes = expandNodesForType(sortedData, nodeType, new Set(state.expandedNodes));
      }
      
      return { 
        sortField: field,
        sortDirection: direction,
        selectedNodeType: nodeType,
        expandedNodes: newExpandedNodes,
        treeData: sortedData
      };
    });
  },
  
  // Helper function to find a node by ID recursively
  addCampaignToGroup: (groupId: string, campaign: TreeNode) => {
    set(state => {
      const newTreeData = [...state.treeData];
      const newOriginalData = [...state.originalTreeData];
      
      // Helper function to find and update the group
      const addToGroup = (nodes: TreeNode[]): boolean => {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          
          if (node.id === groupId) {
            // Found the group, add the campaign
            if (!node.children) {
              node.children = [];
            }
            node.children.push(campaign);
            return true;
          }
          
          // Recursively search in children
          if (node.children && node.children.length > 0) {
            if (addToGroup(node.children)) {
              return true;
            }
          }
        }
        return false;
      };
      
      // Add to both tree data and original data
      addToGroup(newTreeData);
      // Create a deep copy of the campaign for original data
      addToGroup(newOriginalData);
      
      return { 
        treeData: newTreeData,
        originalTreeData: newOriginalData
      };
    });
  },
  
  removeCampaignFromGroup: (campaignId: string) => {
    set(state => {
      const newTreeData = [...state.treeData];
      const newOriginalData = [...state.originalTreeData];
      
      // Helper function to find and remove the campaign
      const removeFromTree = (nodes: TreeNode[]): boolean => {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          
          // Check if any children match the campaign ID
          if (node.children) {
            const index = node.children.findIndex(child => child.id === campaignId);
            if (index !== -1) {
              // Remove the campaign
              node.children.splice(index, 1);
              return true;
            }
            
            // Recursively search in children
            if (removeFromTree(node.children)) {
              return true;
            }
          }
        }
        return false;
      };
      
      // Remove from both tree data and original data
      removeFromTree(newTreeData);
      removeFromTree(newOriginalData);
      
      return { 
        treeData: newTreeData,
        originalTreeData: newOriginalData
      };
    });
  },
  
  updateNodeName: (nodeId: string, newName: string) => {
    set(state => {
      const newTreeData = [...state.treeData];
      const newOriginalData = [...state.originalTreeData];
      
      // Helper function to find and update node name
      const updateName = (nodes: TreeNode[]): boolean => {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          
          if (node.id === nodeId) {
            node.name = newName;
            return true;
          }
          
          // Recursively search in children
          if (node.children && node.children.length > 0) {
            if (updateName(node.children)) {
              return true;
            }
          }
        }
        return false;
      };
      
      // Update name in both tree data and original data
      updateName(newTreeData);
      updateName(newOriginalData);
      
      return { 
        treeData: newTreeData,
        originalTreeData: newOriginalData
      };
    });
  },
  
  // Search for a node by name and return its ID if found
  searchNode: (searchTerm: string) => {
    const state = get();
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) return undefined;
    
    // Helper function to search nodes recursively
    const findNode = (nodes: TreeNode[]): string | undefined => {
      for (const node of nodes) {
        // Check if node name contains search term
        if (node.name.toLowerCase().includes(term)) {
          return node.id;
        }
        
        // Recursively search children
        if (node.children && node.children.length > 0) {
          const found = findNode(node.children);
          if (found) return found;
        }
      }
      return undefined;
    };
    
    // Find matching node
    const foundNodeId = findNode(state.treeData);
    
    if (foundNodeId) {
      // Ensure all parent nodes are expanded
      const expandParents = (nodes: TreeNode[], targetId: string, path: TreeNode[] = []): boolean => {
        for (const node of nodes) {
          const currentPath = [...path, node];
          
          if (node.id === targetId) {
            // Found the node, expand all nodes in the path
            currentPath.forEach(pathNode => {
              state.expandedNodes.add(pathNode.id);
            });
            return true;
          }
          
          if (node.children && node.children.length > 0) {
            if (expandParents(node.children, targetId, currentPath)) {
              return true;
            }
          }
        }
        return false;
      };
      
      // Set expanded nodes to include all parents of the found node
      expandParents(state.treeData, foundNodeId);
      
      // Update the state with the new expanded nodes and selected node
      set({
        expandedNodes: new Set(state.expandedNodes),
        selectedNodeId: foundNodeId
      });
      
      // Scroll to the node
      scrollToNode(foundNodeId);
    }
    
    return foundNodeId;
  }
}));

// Helper function to automatically expand nodes based on type
function expandNodesForType(
  treeData: TreeNode[],
  nodeType: NodeType,
  currentExpandedNodes: Set<string>
): Set<string> {
  const expandedNodes = new Set(currentExpandedNodes);
  
  // Helper function to recursively expand nodes of the specified type
  const expandNodesByType = (nodes: TreeNode[], parentPath: string[] = []): void => {
    // Always expand the current level
    nodes.forEach(node => {
      // Always expand the current node
      expandedNodes.add(node.id);
      
      // For the specific node type, expand all matching nodes and their parents
      if (nodeType === 'all' || node.type === nodeType) {
        // Expand all parent paths
        parentPath.forEach(id => expandedNodes.add(id));
      }
      
      // Continue recursively for children
      if (node.children && node.children.length > 0) {
        expandNodesByType(node.children, [...parentPath, node.id]);
      }
    });
  };
  
  // Start the expansion process
  expandNodesByType(treeData);
  
  return expandedNodes;
}

// Helper function for sorting tree data
function sortTreeData(
  treeData: TreeNode[], 
  field: SortField, 
  direction: SortDirection
): TreeNode[] {
  // Create a deep copy to avoid modifying the original
  const sortedData = JSON.parse(JSON.stringify(treeData));
  
  // Helper function to sort nodes recursively
  const sortNodes = (nodes: TreeNode[]): TreeNode[] => {
    // Sort current level
    nodes.sort((a, b) => {
      let comparison = 0;
      
      if (field === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (field === "id") {
        // Use appropriate ID field based on node type
        const aId = a.type === "campaign" ? a.campaign_id : 
                   a.type === "group" ? a.group_id : 
                   a.type === "tenant" ? a.tenant_id : 0;
                   
        const bId = b.type === "campaign" ? b.campaign_id : 
                   b.type === "group" ? b.group_id : 
                   b.type === "tenant" ? b.tenant_id : 0;
        
        comparison = (aId || 0) - (bId || 0);
      }
      
      // Apply direction
      return direction === "asc" ? comparison : -comparison;
    });
    
    // Sort children recursively
    nodes.forEach(node => {
      if (node.children && node.children.length > 0) {
        node.children = sortNodes(node.children);
      }
    });
    
    return nodes;
  };
  
  return sortNodes(sortedData);
}

// Helper function for sorting tree data by node type
function sortTreeDataByNodeType(
  treeData: TreeNode[], 
  nodeType: NodeType,
  field: SortField, 
  direction: SortDirection
): TreeNode[] {
  // Create a deep copy to avoid modifying the original
  const sortedData = JSON.parse(JSON.stringify(treeData));
  
  // If sorting all nodes, just use the regular sortTreeData function
  if (nodeType === 'all') {
    return sortTreeData(sortedData, field, direction);
  }
  
  // Helper function to sort nodes recursively based on node type
  const sortNodes = (nodes: TreeNode[]): TreeNode[] => {
    // First, filter nodes by the specified type at the current level
    const nodesOfType = nodes.filter(node => node.type === nodeType);
    
    // If there are nodes of the specified type at this level, sort them
    if (nodesOfType.length > 0) {
      nodes.sort((a, b) => {
        // Only apply sorting logic if both nodes are of the specified type
        if (a.type === nodeType && b.type === nodeType) {
          let comparison = 0;
          
          if (field === "name") {
            comparison = a.name.localeCompare(b.name);
          } else if (field === "id") {
            // Use appropriate ID field based on node type
            const aId = nodeType === "campaign" ? a.campaign_id : 
                      nodeType === "group" ? a.group_id : 
                      nodeType === "tenant" ? a.tenant_id : 0;
                      
            const bId = nodeType === "campaign" ? b.campaign_id : 
                      nodeType === "group" ? b.group_id : 
                      nodeType === "tenant" ? b.tenant_id : 0;
            
            comparison = (aId || 0) - (bId || 0);
          }
          
          // Apply direction
          return direction === "asc" ? comparison : -comparison;
        }
        
        // Keep original order for non-matching nodes
        return 0;
      });
    }
    
    // Recursively sort children
    nodes.forEach(node => {
      if (node.children && node.children.length > 0) {
        node.children = sortNodes(node.children);
      }
    });
    
    return nodes;
  };
  
  return sortNodes(sortedData);
}