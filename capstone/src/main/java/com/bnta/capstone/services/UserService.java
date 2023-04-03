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
    public User addCollageToUserList (Long userId, Long collageId){
        User userListToUpdate = userRepository.findById(userId).get();
        Collage collage = collageRepository.findById(collageId).get();
        userListToUpdate.addCollageToUser(collage);
        return userRepository.save(userListToUpdate);
    }

    // find all users
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }


    // find user by id
    public User findUserById (Long id) {
        return userRepository.findById(id).get();
    }

    // delete collage in user list
    public void deleteCollageFromUserList (Long userId, Long collageId) {
        User userCollageToDelete = userRepository.findById(userId).get();
        Collage collageToDelete = collageRepository.findById(collageId).get();
        userCollageToDelete.removeCollageFromUserList(collageToDelete);

        if (userCollageToDelete.getCollages().isEmpty()) {
            deleteUsersCollageList(userId);
        }
        userRepository.save(userCollageToDelete);
    }

    // delete user list
    public void deleteUsersCollageList(Long userId) {
        User user = userRepository.findById(userId).get();

        for (int i = user.getCollages().size() -1; i >= 0; i--) {
            user.getCollages().remove(i);
        }
        userRepository.save(user);
    }


}
