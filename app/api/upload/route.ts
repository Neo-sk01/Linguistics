import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Stream } from 'stream';

// Create a service account credentials object
const credentials = {
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

// Create a buffer to stream converter
function bufferToStream(buffer: Buffer) {
  const stream = new Stream.Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export async function POST(request: NextRequest) {
  try {
    // Authorize with Google
    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });
    
    // Get form data from the request
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const notes = formData.get('notes') as string | null;
    
    // Make sure we have a file
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Define file metadata
    const fileMetadata = {
      name: file.name,
      // Optional: specify a folder ID to upload to a specific folder
      // parents: ['FOLDER_ID_HERE']
    };
    
    // Upload file to Drive
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: {
        mimeType: file.type,
        body: bufferToStream(buffer),
      },
    });
    
    // If notes were provided, create a text file with the notes
    if (notes && notes.trim() !== '') {
      const notesFileName = `${file.name.split('.')[0]}_notes.txt`;
      
      await drive.files.create({
        requestBody: {
          name: notesFileName,
          // Optional: specify the same folder as the file
          // parents: ['FOLDER_ID_HERE']
        },
        media: {
          mimeType: 'text/plain',
          body: notes,
        },
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'File uploaded successfully',
      fileId: response.data.id 
    });
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    return NextResponse.json(
      { error: 'Failed to upload file to Google Drive' },
      { status: 500 }
    );
  }
} 