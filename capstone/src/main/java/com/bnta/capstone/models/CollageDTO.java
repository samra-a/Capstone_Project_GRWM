package com.bnta.capstone.models;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.enums.Style;
import com.bnta.capstone.enums.Weather;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class CollageDTO {

    private long collageId;
    private String name;
    private String description;
    @Enumerated(EnumType.ORDINAL)
    private Category category;
    @Enumerated(EnumType.ORDINAL)
    private Style style;
    @Enumerated(EnumType.ORDINAL)
    private Weather weather;


    public CollageDTO(long collageId, String name, String description, Category category, Style style, Weather weather) {
        this.collageId = collageId;
        this.name = name;
        this.description = description;
        this.category = category;
        this.style = style;
        this.weather = weather;
    }

    public long getCollageId() {
        return collageId;
    }

    public void setCollageId(long collageId) {
        this.collageId = collageId;
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
