package com.springEx.spring;

import com.springEx.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resource")
public class UserController {

    @Autowired
    private UserService userService;



    @GetMapping("/users")
    public List<String> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public void createUser(@RequestBody String user) {
        userService.createUser(user);
    }

    @PutMapping("/users/{id}")
    public void updateUser(@PathVariable String id, @RequestBody String user) {
        int userId = Integer.parseInt(id);
        userService.updateUser(userId, user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable String id) {
        int userId = Integer.parseInt(id);
        userService.deleteUser(userId);
    }
}
