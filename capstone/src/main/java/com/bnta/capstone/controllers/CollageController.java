package com.bnta.capstone.controllers;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.enums.Colour;
import com.bnta.capstone.enums.Style;
import com.bnta.capstone.enums.Weather;
import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.CollageDTO;
import com.bnta.capstone.services.CollageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/collages")
public class CollageController {

    @Autowired
    CollageService collageService;

    //findAllCollages
    @GetMapping
    public ResponseEntity<List<Collage>> findCollages
    (@RequestParam(name="category", required = false) Category category,
     @RequestParam(name="style", required = false) Style style,
     @RequestParam(name="weather", required = false) Weather weather,
     @RequestParam(name="colour", required = false) Colour colour){
        if (category != null && style != null && weather !=null && colour !=null) {
            return new ResponseEntity<>(collageService.filterCollages(category, style, weather, colour), HttpStatus.OK);
        }
        List<Collage> collages = collageService.findAllCollages();
        if (collages == null) {return new ResponseEntity<>( HttpStatus.NO_CONTENT);}
        return new ResponseEntity<>(collages, HttpStatus.OK);
    }

    // get all users lists
    @GetMapping(value ="/users/{userId}")
    public ResponseEntity <List<CollageDTO>> findUserList (@PathVariable Long userId){
        List<CollageDTO> userCollage = collageService.findListsByUserId(userId);
        if (userCollage != null) {return new ResponseEntity<>(userCollage, HttpStatus.OK);}
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
