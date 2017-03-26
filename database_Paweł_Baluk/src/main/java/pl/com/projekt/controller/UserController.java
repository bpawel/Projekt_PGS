package pl.com.projekt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.com.projekt.model.User;

import java.util.List;

@RestController
@RequestMapping("app/part1")
public class UserController {

    @Autowired
    private UserService userServ;

    @RequestMapping(value = "users", method = RequestMethod.GET)
    public List<User> list() {

        return userServ.list();
    }

    @RequestMapping(value = "users", method = RequestMethod.POST)
    public  User create(@RequestBody User user) {
        return userServ.create(user);
    }

    @RequestMapping(value = "users/{id}", method = RequestMethod.GET)
    public User get(@PathVariable Long id) {
        return userServ.get(id);
    }

    @RequestMapping(value = "users/{id}", method = RequestMethod.PUT)
    public User update(@PathVariable Long id, @RequestBody User user) {
        return userServ.update(id, user);
    }

    @RequestMapping(value = "users/{id}", method = RequestMethod.DELETE)
    public User delete(@PathVariable Long id){
        return userServ.remove(id);
    }


}
