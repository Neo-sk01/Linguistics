import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the content types we want to search through
type ContentType = 'page' | 'faq' | 'service';

// Our search index structure
type SearchItem = {
  id: string;
  title: string;
  content: string;
  url: string;
  type: ContentType;
  excerpt?: string;
};

// Mock data for demonstration - in a real implementation, this would be generated
// from actual page content or stored in a database
const searchIndex: SearchItem[] = [
  {
    id: '1',
    title: 'Interpreting Services',
    content: 'Professional interpreting services for conferences, meetings, and events. We offer simultaneous, consecutive, and whispered interpreting.',
    url: '/interpreting',
    type: 'page',
  },
  {
    id: '2',
    title: 'Transcription Services',
    content: 'Accurate transcription services for audio and video content. We offer verbatim and non-verbatim transcription options.',
    url: '/transcription',
    type: 'page',
  },
  {
    id: '3',
    title: 'Conference Equipment',
    content: 'Professional conference equipment rental for events. We offer microphones, headsets, booths, and more.',
    url: '/conference-equipment',
    type: 'page',
  },
  {
    id: '4',
    title: 'What languages do you support?',
    content: 'We support a wide range of languages including but not limited to English, Spanish, French, German, Chinese, Japanese, Arabic, and Russian.',
    url: '/faq#languages',
    type: 'faq',
  },
  {
    id: '5',
    title: 'How much does interpreting cost?',
    content: 'The cost of interpreting services depends on several factors including language pair, duration, specialization, and equipment needs.',
    url: '/pricing#interpreting',
    type: 'faq',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const type = searchParams.get('type') as ContentType | null;

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // Filter the search index based on the query and optional type
  let results = searchIndex.filter((item) => {
    const matchesQuery = 
      item.title.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query);
    
    const matchesType = type ? item.type === type : true;
    
    return matchesQuery && matchesType;
  });

  // Add excerpt with highlighted search term
  results = results.map(item => {
    const content = item.content;
    const queryIndex = content.toLowerCase().indexOf(query);
    
    if (queryIndex !== -1) {
      const start = Math.max(0, queryIndex - 50);
      const end = Math.min(content.length, queryIndex + query.length + 50);
      const excerpt = (start > 0 ? '...' : '') + 
                     content.slice(start, end) + 
                     (end < content.length ? '...' : '');
      
      return {
        ...item,
        excerpt
      };
    }
    
    return {
      ...item,
      excerpt: content.slice(0, 100) + (content.length > 100 ? '...' : '')
    };
  });

  return NextResponse.json({ results });
}
