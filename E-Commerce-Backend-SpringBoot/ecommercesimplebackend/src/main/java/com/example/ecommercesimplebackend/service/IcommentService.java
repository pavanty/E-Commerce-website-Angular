package com.example.ecommercesimplebackend.service;

import com.example.ecommercesimplebackend.entity.Comment;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface IcommentService {


    Comment savecomment(Comment comment);

    List<Comment> showallcomments();
}
