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
    @PostMapping(value = "/{userId}/collage/{collageId}")

    public ResponseEntity <Collage>addCollageToUserList(@RequestParam Long userId, @RequestBody Collage collage) {
        if (userService.findUserById(userId) == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
        userService.addCollageToUserList(userId, collage);
        return new ResponseEntity<>(collage, HttpStatus.CREATED);
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

//-------------------------------------------------------------------------collageController---------------------------------------------------------------------------
// findAllCollages
    @GetMapping(value ="/{collages}")
    public ResponseEntity <List<Collage>>findAllCollages (){
        List<Collage> collages = collageService.findAllCollages();
        if (collages == null) {return new ResponseEntity<>( HttpStatus.NO_CONTENT);}
        return new ResponseEntity<>(collages, HttpStatus.OK);
    }

    // findCollageByCategory
    @GetMapping(value ="/{collages}")
    public ResponseEntity <List<Collage>> findCollageCategory (@RequestParam(name="category") Category category){
        return new ResponseEntity<>(collageService.filterCollagesByCategory(category), HttpStatus.OK);
    }

    // get all users lists
    @GetMapping(value ="/{usersId}/{collages}")
    public ResponseEntity <List<Collage>> findUserList (@PathVariable Long userId){
        return new ResponseEntity<>(collageService.findListsByUserId(userId), HttpStatus.OK);
    }




}
