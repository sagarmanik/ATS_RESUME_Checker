package com.BackendResume.service;


import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class ResumeParser {

    // Extract text from the PDF file
    public static String extractText(MultipartFile resume) {
        try {
            // Load the document using InputStream
            PDDocument document = PDDocument.load(resume.getInputStream());

            // Create a PDFTextStripper object to extract text from the PDF
            PDFTextStripper pdfStripper = new PDFTextStripper();
            
            // Extract text from the PDF document
            String text = pdfStripper.getText(document);
            
            // Close the document to free resources
            document.close();
            
            // Return the extracted text in lowercase for easier comparison
            return text.toLowerCase();
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }
}

