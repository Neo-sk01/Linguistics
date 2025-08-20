"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FileIcon, Download, Loader2, Music, Filter, Search, RefreshCw, Trash2, AlertCircle } from "lucide-react";
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

type FileType = {
  id: string;
  filename: string;
  originalName: string;
  fileType: 'audio' | 'document';
  fileSize: number;
  cloudinaryUrl: string;
  uploadedAt: string;
  duration?: number;
  status: string;
};

export default function AdminPage() {
  const { user } = useUser();
  const [files, setFiles] = useState<FileType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<boolean>(false);

  // Check if user has admin privileges - only mpho66@icloud.com
  const isAdmin = user?.emailAddresses[0]?.emailAddress === 'mpho66@icloud.com';

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/upload');
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      const data = await response.json();
      setFiles(data.files || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching files');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return 'N/A';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const filteredFiles = files.filter((file) => {
    if (filterType !== 'all' && file.fileType !== filterType) {
      return false;
    }
    if (searchTerm && !file.originalName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const updateStatus = async (fileId: string, newStatus: string) => {
    try {
      const response = await fetch('/api/upload/status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: fileId, status: newStatus }),
      });
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      const updatedFiles = files.map(file => {
        if (file.id === fileId) {
          return { ...file, status: newStatus };
        }
        return file;
      });
      setFiles(updatedFiles);
    } catch (err) {
      console.error('Failed to update status:', err);
      setError('Failed to update file status. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  const confirmDelete = (fileId: string) => {
    setDeleteConfirm(fileId);
  };

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  const deleteFile = async (fileId: string) => {
    if (!fileId) return;
    setDeleting(true);
    try {
      const response = await fetch(`/api/upload/delete?id=${fileId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete file');
      }
      setFiles(files.filter(file => file.id !== fileId));
      setDeleteConfirm(null);
    } catch (err) {
      console.error('Failed to delete file:', err);
      setError('Failed to delete file. Please try again.');
      setTimeout(() => setError(null), 3000);
    } finally {
      setDeleting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-blue-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'completed': return 'bg-green-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <React.Fragment>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        {!isAdmin ? (
          <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Access Denied</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You don't have permission to access the admin dashboard. Please contact an administrator if you believe this is an error.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                User: {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                  </span>
                  <button 
                    onClick={fetchFiles}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </button>
                </div>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-fit">
                  <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Filters & Stats</h2>
                  
                  {/* Search */}
                  <div className="relative mb-6">
                    <Search className="h-5 w-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search files..."
                      className="pl-10 pr-4 py-2 w-full border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  {/* Filter */}
                  <div className="relative mb-6">
                    <Filter className="h-5 w-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
                    <select
                      className="pl-10 pr-4 py-2 w-full border rounded-md appearance-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                    >
                      <option value="all">All Files</option>
                      <option value="audio">Audio Only</option>
                      <option value="document">Documents Only</option>
                    </select>
                  </div>

                  {/* Stats */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Statistics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Total Files:</span>
                        <span className="font-bold text-gray-800 dark:text-white">{files.length}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Audio Files:</span>
                        <span className="font-bold text-gray-800 dark:text-white">{files.filter(f => f.fileType === 'audio').length}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Documents:</span>
                        <span className="font-bold text-gray-800 dark:text-white">{files.filter(f => f.fileType === 'document').length}</span>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-3">
                  {loading && (
                    <div className="flex justify-center items-center h-64">
                      <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
                      <p>{error}</p>
                    </div>
                  )}

                  {!loading && !error && filteredFiles.length === 0 && (
                    <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                      <p className="text-xl text-gray-500 dark:text-gray-400">
                        {files.length === 0 ? "No files uploaded yet." : "No files match your filters."}
                      </p>
                      {files.length === 0 && (
                        <Link href="/upload-test" className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                          Upload a File
                        </Link>
                      )}
                    </div>
                  )}

                  {!loading && !error && filteredFiles.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredFiles.map((file) => (
                        <div key={file.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                          <div className="p-5">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center mb-4">
                                {file.fileType === 'audio' ? (
                                  <Music className="h-8 w-8 text-blue-500 mr-3" />
                                ) : (
                                  <FileIcon className="h-8 w-8 text-orange-500 mr-3" />
                                )}
                                <div>
                                  <p className="font-bold text-lg text-gray-800 dark:text-white truncate" title={file.originalName}>{file.originalName}</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{file.fileType}</p>
                                </div>
                              </div>
                              <div className={`w-3 h-3 rounded-full ${getStatusColor(file.status)}`} title={`Status: ${file.status}`}></div>
                            </div>

                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex justify-between">
                                <span>Size:</span>
                                <span className="font-medium text-gray-800 dark:text-white">{formatFileSize(file.fileSize)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Uploaded:</span>
                                <span className="font-medium text-gray-800 dark:text-white">{new Date(file.uploadedAt).toLocaleDateString()}</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <select
                                className={`w-full px-3 py-2 text-sm rounded-md border appearance-none focus:outline-none focus:ring-2 focus:ring-primary ${ 
                                  file.status === 'pending' ? 'bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-700' :
                                  file.status === 'in-progress' ? 'bg-yellow-50 dark:bg-yellow-900/50 border-yellow-200 dark:border-yellow-700' :
                                  file.status === 'completed' ? 'bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700' :
                                  'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600'
                                }`}
                                value={file.status}
                                onChange={(e) => updateStatus(file.id, e.target.value)}
                              >
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="failed">Failed</option>
                              </select>
                            </div>

                            <div className="flex items-center justify-end gap-2">
                              {deleteConfirm === file.id ? (
                                <div className="flex items-center gap-2">
                                   <button
                                    onClick={() => deleteFile(file.id)}
                                    className="px-3 py-1 bg-red-600 text-white rounded-md text-xs font-semibold hover:bg-red-700 disabled:opacity-50"
                                    disabled={deleting}
                                  >
                                    {deleting ? <Loader2 className="h-4 w-4 animate-spin"/> : 'Confirm'}
                                  </button>
                                  <button
                                    onClick={cancelDelete}
                                    className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-md text-xs font-semibold hover:bg-gray-400 disabled:opacity-50"
                                    disabled={deleting}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <>
                                  <a
                                    href={file.cloudinaryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                    title="Download"
                                  >
                                    <Download className="h-5 w-5" />
                                  </a>
                                  <button
                                    onClick={() => confirmDelete(file.id)}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                    title="Delete"
                                  >
                                    <Trash2 className="h-5 w-5" />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </main>
              </div>
            </div>
          </div>
        )}
      </SignedIn>
    </React.Fragment>
  );
}
