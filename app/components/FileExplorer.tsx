'use client'

import { useState, useEffect } from 'react'
import { 
  FolderIcon, 
  DocumentIcon, 
  ChevronRightIcon, 
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

interface FileItem {
  id: string
  name: string
  type: 'file' | 'folder'
  path: string
  children?: FileItem[]
  size?: string
  modified?: string
}

interface FileExplorerProps {
  isOpen: boolean
  onClose: () => void
}

const FileExplorer: React.FC<FileExplorerProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [currentPath, setCurrentPath] = useState('/')

  // Sample file structure - you can replace this with your actual file structure
  const fileStructure: FileItem[] = [
    {
      id: '1',
      name: 'app',
      type: 'folder',
      path: '/app',
      children: [
        {
          id: '2',
          name: 'components',
          type: 'folder',
          path: '/app/components',
          children: [
            {
              id: '3',
              name: 'SmoothScroll.tsx',
              type: 'file',
              path: '/app/components/SmoothScroll.tsx',
              size: '1.4KB',
              modified: '2024-01-15'
            },
            {
              id: '4',
              name: 'FileExplorer.tsx',
              type: 'file',
              path: '/app/components/FileExplorer.tsx',
              size: '2.1KB',
              modified: '2024-01-15'
            }
          ]
        },
        {
          id: '5',
          name: 'page.tsx',
          type: 'file',
          path: '/app/page.tsx',
          size: '8.2KB',
          modified: '2024-01-15'
        },
        {
          id: '6',
          name: 'layout.tsx',
          type: 'file',
          path: '/app/layout.tsx',
          size: '1.8KB',
          modified: '2024-01-15'
        }
      ]
    },
    {
      id: '7',
      name: 'public',
      type: 'folder',
      path: '/public',
      children: [
        {
          id: '8',
          name: 'images',
          type: 'folder',
          path: '/public/images',
          children: [
            {
              id: '9',
              name: 'home_bg.jpg',
              type: 'file',
              path: '/public/images/home_bg.jpg',
              size: '2.4MB',
              modified: '2024-01-15'
            }
          ]
        }
      ]
    },
    {
      id: '10',
      name: 'package.json',
      type: 'file',
      path: '/package.json',
      size: '583B',
      modified: '2024-01-15'
    },
    {
      id: '11',
      name: 'tsconfig.json',
      type: 'file',
      path: '/tsconfig.json',
      size: '598B',
      modified: '2024-01-15'
    }
  ]

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const handleFileSelect = (file: FileItem) => {
    if (file.type === 'file') {
      setSelectedFile(file.path)
      setCurrentPath(file.path)
    }
  }

  const filteredFiles = searchQuery
    ? fileStructure.flatMap(item => 
        item.type === 'folder' && item.children
          ? [item, ...item.children]
          : [item]
      ).filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : fileStructure

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* File Explorer Panel */}
      <div className="relative w-80 h-full bg-white shadow-2xl border-r border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800">File Explorer</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Current Path */}
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
          <p className="text-sm text-gray-600 font-mono truncate">
            {currentPath}
          </p>
        </div>

        {/* File Tree */}
        <div className="flex-1 overflow-y-auto p-2">
          <FileTree
            items={filteredFiles}
            expandedFolders={expandedFolders}
            onToggleFolder={toggleFolder}
            onFileSelect={handleFileSelect}
            searchQuery={searchQuery}
          />
        </div>

        {/* File Info Panel */}
        {selectedFile && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-800 mb-2">File Info</h3>
            <p className="text-xs text-gray-600 font-mono">{selectedFile}</p>
          </div>
        )}
      </div>
    </div>
  )
}

interface FileTreeProps {
  items: FileItem[]
  expandedFolders: Set<string>
  onToggleFolder: (folderId: string) => void
  onFileSelect: (file: FileItem) => void
  searchQuery: string
  level?: number
}

const FileTree: React.FC<FileTreeProps> = ({ 
  items, 
  expandedFolders, 
  onToggleFolder, 
  onFileSelect, 
  searchQuery,
  level = 0 
}) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <div key={item.id}>
          <div
            className={`
              flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors
              ${item.type === 'file' ? 'hover:bg-blue-50' : 'hover:bg-gray-50'}
              ${searchQuery && item.name.toLowerCase().includes(searchQuery.toLowerCase()) ? 'bg-yellow-50' : ''}
            `}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => item.type === 'folder' ? onToggleFolder(item.id) : onFileSelect(item)}
          >
            {item.type === 'folder' ? (
              <>
                {expandedFolders.has(item.id) ? (
                  <ChevronDownIcon className="w-4 h-4 text-gray-500 mr-2" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4 text-gray-500 mr-2" />
                )}
                <FolderIcon className="w-4 h-4 text-amber-500 mr-2" />
              </>
            ) : (
              <DocumentIcon className="w-4 h-4 text-blue-500 mr-2" />
            )}
            
            <span className="text-sm text-gray-700 truncate flex-1">
              {item.name}
            </span>
            
            {item.type === 'file' && item.size && (
              <span className="text-xs text-gray-500 ml-2">
                {item.size}
              </span>
            )}
          </div>
          
          {item.type === 'folder' && 
           item.children && 
           expandedFolders.has(item.id) && (
            <FileTree
              items={item.children}
              expandedFolders={expandedFolders}
              onToggleFolder={onToggleFolder}
              onFileSelect={onFileSelect}
              searchQuery={searchQuery}
              level={level + 1}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default FileExplorer
