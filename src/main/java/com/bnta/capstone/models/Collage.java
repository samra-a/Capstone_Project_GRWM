package com.bnta.capstone.models;

import com.bnta.capstone.enums.Category;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "collages")
public class Collage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @JsonIgnoreProperties({"collage"})
    @ManyToMany
    @JoinTable(
            name = "users_collages",
            joinColumns = @JoinColumn(name = "collage_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;

    @Enumerated(EnumType.ORDINAL)
    private Category category;

    public Collage(String name, String description, Category category){
        this.name = name;
        this.description = description;
        this.category = category;
        this.users = new ArrayList<>();
    }

    public Collage (){}

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
