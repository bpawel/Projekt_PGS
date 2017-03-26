package pl.com.projekt.controller;


import org.springframework.stereotype.Service;
import pl.com.projekt.model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
        private static Map<Long, User> users = new HashMap<Long, User>();
        private static Long idIndex = 3L;

        static {
            User user1 = new User(1L, "Marcin", "Kowalski", 20);
            users.put(1L, user1);
            User user2 = new User(2L, "Paweł", "Baluk", 22);
            users.put(2L, user2);
            User user3 = new User(3L, "Michał", "Sokołowski", 21);
            users.put(3L, user3);
        }

        public static List<User> list() {
            return new ArrayList<User>(users.values());
        }

        public static User create(User user) {
            idIndex = 1 + idIndex;
            user.setId(idIndex);
            users.put(idIndex, user);
            return user;
        }

        public static User get(Long id) {
            return users.get(id);
        }

        public static User update(Long id, User user) {
            return user;
        }

        public static User remove(Long id) {
            return users.remove(id);
        }
}

