package com.bnta.capstone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String email;
    @JsonIgnoreProperties({"users"})
    @ManyToMany(mappedBy = "users")
    private List<Collage> collages;

    public User(String name, String email){
        this.name = name;
        this.email = email;
        this.collages = new ArrayList<Collage>();
    }
    public User(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Collage> getCollages() {
        return collages;
    }

    public void setCollages(List<Collage> collages) {
        this.collages = collages;
    }
}


