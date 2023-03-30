package com.bnta.capstone.controllers;

import com.bnta.capstone.enums.Category;
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
    public ResponseEntity<List<Collage>> findCollages (){
        List<Collage> collages = collageService.findAllCollages();
        if (collages == null) {return new ResponseEntity<>( HttpStatus.NO_CONTENT);}
        return new ResponseEntity<>(collages, HttpStatus.OK);
    }

    // findCollageByCategory
    @GetMapping(value ="/category")
    public ResponseEntity <List<Collage>> findCollageCategory (@RequestParam(name="category", required = false) Category category){
        return new ResponseEntity<>(collageService.filterCollagesByCategory(category), HttpStatus.OK);
    }

    // get all users lists
    @GetMapping(value ="/users/{userId}")
    public ResponseEntity <List<Collage>> findUserList (@PathVariable Long userId){
        List<CollageDTO> userCollage = collageService.findListsByUserId(userId);
        if (userCollage != null) {return new ResponseEntity<>(collageService.findListsByUserId(userId), HttpStatus.OK);}
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
