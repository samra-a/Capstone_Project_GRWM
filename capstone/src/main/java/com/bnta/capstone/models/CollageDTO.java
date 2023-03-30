package com.bnta.capstone.models;

import com.bnta.capstone.enums.Category;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class CollageDTO {

    private long collageId;
    private String name;
    private String description;
    @Enumerated(EnumType.ORDINAL)
    private Category category;

    public CollageDTO(long collageId, String name, String description, Category category) {
        this.collageId = collageId;
        this.name = name;
        this.description = description;
        this.category = category;
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
}
