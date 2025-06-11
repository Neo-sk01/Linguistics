"use client";

import { useEffect, useState } from "react";

export default function EnvTestPage() {
  const [envStatus, setEnvStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkEnv() {
      try {
        const res = await fetch("/api/test-env");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setEnvStatus(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    checkEnv();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variable Test</h1>
      
      {loading && <p>Loading environment status...</p>}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}
      
      {envStatus && (
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Cloudinary Configuration</h2>
            <ul className="list-disc pl-5">
              <li>Cloud Name: <span className={envStatus.cloudinaryConfigured.cloudName === 'Set' ? 'text-green-600' : 'text-red-600 font-bold'}>
                {envStatus.cloudinaryConfigured.cloudName}
              </span></li>
              <li>API Key: <span className={envStatus.cloudinaryConfigured.apiKey === 'Set' ? 'text-green-600' : 'text-red-600 font-bold'}>
                {envStatus.cloudinaryConfigured.apiKey}
              </span></li>
              <li>API Secret: <span className={envStatus.cloudinaryConfigured.apiSecret === 'Set' ? 'text-green-600' : 'text-red-600 font-bold'}>
                {envStatus.cloudinaryConfigured.apiSecret}
              </span></li>
            </ul>
          </div>
          
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Database Configuration</h2>
            <ul className="list-disc pl-5">
              <li>Database URL: <span className={envStatus.databaseConfigured.databaseUrl === 'Set' ? 'text-green-600' : 'text-red-600 font-bold'}>
                {envStatus.databaseConfigured.databaseUrl}
              </span></li>
            </ul>
          </div>
          
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Node Environment</h2>
            <p>Current environment: <strong>{envStatus.nodeEnv}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
} 