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
    public User findUserById (Long id) {
        return userRepository.findById(id).get();
    }

    // delete collage in user list
    public void deleteCollageFromUserList (Long userId, Collage collage) {
        User userCollageToDelete = userRepository.findById(userId).get();
        userCollageToDelete.removeCollageFromUserList(collage);

        if (userCollageToDelete.getCollages().isEmpty()) {
            deleteUsersCollageList(userId);
        }
        userRepository.save(userCollageToDelete);
    }

    // delete user list
    public void deleteUsersCollageList(Long userId) {
        User user = userRepository.findById(userId).get();

        for (int i = user.getCollages().size(); i >= 0; i--) {
            user.getCollages().remove(i);
        }
        userRepository.save(user);
    }


}
