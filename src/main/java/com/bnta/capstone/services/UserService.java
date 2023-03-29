package com.bnta.capstone.services;

import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import com.bnta.capstone.repositories.CollageRepository;
import com.bnta.capstone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CollageRepository collageRepository;

    // add collage to user list
    public void addCollageToUserList (Long userId, Collage collage){
        User userListToUpdate = userRepository.findById(userId).get();
        userListToUpdate.addCollageToUser(collage);
        userRepository.save(userListToUpdate);
    }


    // find user by id

    // delete collage in user list

    // delete user list


}
