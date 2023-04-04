package com.bnta.capstone.models;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.enums.Style;
import com.bnta.capstone.enums.Weather;
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
    @ManyToMany(mappedBy = "collages")
    private List<User> users;

    @Enumerated(EnumType.ORDINAL)
    private Category category;
    @Enumerated(EnumType.ORDINAL)
    private Style style;
    @Enumerated(EnumType.ORDINAL)
    private Weather weather;

    public Collage(String name, String description, Category category, Style style, Weather weather){
        this.name = name;
        this.description = description;
        this.category = category;
        this.style = style;
        this.weather = weather;
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

    public Style getStyle() {
        return style;
    }

    public void setStyle(Style style) {
        this.style = style;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }
}
