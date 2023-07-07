package com.springEx.spring.service;

import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Data
@Service
public class UserService {
    private List<String> users = new ArrayList<>();
    public List<String> getAllUsers() {
        return users;
    }

    public void createUser(String user) {
        users.add(user);
    }

    public void updateUser(int id, String user) {
        users.set(id, user);
    }

    public void deleteUser(int id) {
        users.remove(id);
    }
}
