package com.bnta.capstone.repositories;

import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> deleteByCollages (User collages);

}
