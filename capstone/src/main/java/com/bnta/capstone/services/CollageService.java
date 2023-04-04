package com.bnta.capstone.services;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.enums.Style;
import com.bnta.capstone.enums.Weather;
import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.CollageDTO;
import com.bnta.capstone.models.User;
import com.bnta.capstone.repositories.CollageRepository;
import com.bnta.capstone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public List<Collage> filterCollages(Category category, Style style, Weather weather){
        return collageRepository.findByCategoryAndStyleAndWeather(category, style, weather);
    }

    // get all users lists
    public List<CollageDTO> findListsByUserId(Long userId){
        User user = userRepository.findById(userId).get();
        List<Collage> collageUser = collageRepository.findByUsers(user);
        List<CollageDTO> collageDTOs = new ArrayList<>();
        for(Collage collage : collageUser){
            collageDTOs.add(collageDTOBuilder(collage));
        }
        return collageDTOs;
    }

    // DTO method
    public CollageDTO collageDTOBuilder(Collage collage){
        return new CollageDTO(collage.getId(), collage.getName(), collage.getDescription(), collage.getCategory(), collage.getStyle(), collage.getWeather());
    }




}
