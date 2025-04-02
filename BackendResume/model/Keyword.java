package com.BackendResume.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ats_keywords")
public class Keyword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String keyword;

    // Constructor
    public Keyword() {}

    public Keyword(String keyword) {
        this.keyword = keyword;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
