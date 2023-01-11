package com.example.ecommercesimplebackend.service;

import com.example.ecommercesimplebackend.entity.Comment;
import com.example.ecommercesimplebackend.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl  implements IcommentService{

@Autowired
private CommentRepository commentRepository;


    @Override
    public Comment savecomment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> showallcomments() {
        return commentRepository.findAll();
    }
}
