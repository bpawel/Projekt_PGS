package pl.com.projekt.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import pl.com.projekt.model.User;

public interface UserRep extends JpaRepository<User, Long> {
}
