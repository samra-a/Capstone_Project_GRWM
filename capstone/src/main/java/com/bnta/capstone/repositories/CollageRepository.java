package com.bnta.capstone.repositories;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.enums.Style;
import com.bnta.capstone.enums.Weather;
import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollageRepository extends JpaRepository<Collage, Long> {

    // filter collage by category
     List<Collage> findByCategory(Category category);
     List<Collage> findByCategoryAndStyleAndWeather(Category category, Style style, Weather weather);

     List<Collage> findByUsers(User user);

    }
