package com.BackendResume.controller;


import com.BackendResume.service.ATSService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/ats")
@CrossOrigin(origins = "http://localhost:5173")
public class ATSController {

    private final ATSService atsService;

    public ATSController(ATSService atsService) {
        this.atsService = atsService;
    }

    @PostMapping("/score")
    public ResponseEntity<?> calculateATSScore(@RequestParam("resume") MultipartFile resume,
                                               @RequestParam("jobDescription") String jobDescription) {
        int score = atsService.getATSScore(resume, jobDescription);
        return ResponseEntity.ok().body("{\"score\": " + score + "}");
    }
}
