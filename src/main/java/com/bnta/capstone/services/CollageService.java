package com.bnta.capstone.services;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import com.bnta.capstone.repositories.CollageRepository;
import com.bnta.capstone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollageService {

    @Autowired
    CollageRepository collageRepository;

    @Autowired
    UserRepository userRepository;

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
        User user = userRepository.findById(userId).get();
        return collageRepository.findByUsers(user);
    }




}
