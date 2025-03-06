'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const PdfFilesPage: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/knowledge/pdf`);
        setPdfFiles(response.data);
      } catch (error) {
        console.error('Error fetching PDF files:', error);
      }
    };

    fetchPdfFiles();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        PDF Files
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <List>
        {pdfFiles.map((file, index) => (
          <ListItem key={index}>
            <ListItemText primary={file} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PdfFilesPage;
