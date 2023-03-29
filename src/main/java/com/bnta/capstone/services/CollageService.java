package com.bnta.capstone.services;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import com.bnta.capstone.repositories.CollageRepository;
import com.bnta.capstone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CollageService {

    @Autowired
    CollageRepository collageRepository;

    // findAllCollages
    public List<Collage> findAllCollages(){
        return collageRepository.findAll();
    }

    // findCollageByCategory
    public List<Collage> filterCollagesByCategory(Category category){
        return collageRepository.findByCategory(category);
    }

    // get all users lists
    public List<Collage> findListsByUserId(Long userId){
        return collageRepository.findByUserId(userId);
    }




}
