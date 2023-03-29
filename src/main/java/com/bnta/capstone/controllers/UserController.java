package com.bnta.capstone.controllers;

import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import com.bnta.capstone.services.CollageService;
import com.bnta.capstone.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    CollageService collageService;

    // Find User by Id
    @GetMapping (value ="/{userId}")

    public ResponseEntity <User>getUserById(@PathVariable Long userId){
        User user = userService.findUserById(userId);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // add collage to user list
    @PostMapping

    public ResponseEntity <Collage>addCollageToUserList(@RequestParam Long userId, @RequestBody Collage collage) {
        if (userService.findUserById(userId) == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
        userService.addCollageToUserList(userId, collage);
        return new ResponseEntity<>(collage, HttpStatus.CREATED);
    }

// findCollageByCategory





}
