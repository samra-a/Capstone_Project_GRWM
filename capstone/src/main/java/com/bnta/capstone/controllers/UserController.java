package com.bnta.capstone.controllers;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import com.bnta.capstone.services.CollageService;
import com.bnta.capstone.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    CollageService collageService;

    // Find User by Id
    @GetMapping(value ="/{userId}")
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
    @PostMapping(value = "/{userId}/collages/{collageId}")
    public ResponseEntity <User>addCollageToUser(@PathVariable Long userId, @PathVariable Long collageId) {
        if (userService.findUserById(userId) == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
        User updatedUser = userService.addCollageToUserList(userId, collageId);
        return new ResponseEntity<>(updatedUser, HttpStatus.CREATED);
    }

    // delete collage in user list
    @DeleteMapping(value = "/{userId}/collage/{collageId}")
    public ResponseEntity deleteCollage(@PathVariable Long userId, @PathVariable Long collageId){
        userService.deleteCollageFromUserList(userId, collageId);
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }

    // delete user list
    @DeleteMapping(value ="/{userId}")
    public ResponseEntity deleteUserList(@PathVariable Long userId){
        userService.deleteUsersCollageList(userId);
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }


}
