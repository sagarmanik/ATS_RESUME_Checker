package com.BackendResume.service;


import com.BackendResume.repository.KeywordRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ATSService {

    private final KeywordRepository keywordRepository;

    public ATSService(KeywordRepository keywordRepository) {
        this.keywordRepository = keywordRepository;
    }

    public int getATSScore(MultipartFile resume, String jobDescription) {
        String resumeText = ResumeParser.extractText(resume);

        // Fetch ATS keywords from MySQL
        List<String> atsKeywords = keywordRepository.findAll().stream()
                .map(k -> k.getKeyword().toLowerCase())
                .collect(Collectors.toList());

        // Calculate ATS Score
        long matchCount = atsKeywords.stream().filter(resumeText::contains).count();
        return atsKeywords.isEmpty() ? 0 : (int) ((matchCount * 100) / atsKeywords.size());
    }
}
