package com.example.ecommercesimplebackend.controller;

import com.example.ecommercesimplebackend.entity.Comment;
import com.example.ecommercesimplebackend.entity.Register;
import com.example.ecommercesimplebackend.service.IcommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/comment")
@CrossOrigin(value = "*")
public class CommentController {

   @Autowired
   private IcommentService icommentService;

   @PostMapping("/savecomments")
    public ResponseEntity<Comment> savecomment(@RequestBody Comment comment){
       return new ResponseEntity<Comment>(icommentService.savecomment(comment),HttpStatus.CREATED);
   }
   @GetMapping(value="/getcomments")
    public ResponseEntity<List<Comment>> showallcomments(){
      List<Comment> allcomments=icommentService.showallcomments();
      return new ResponseEntity<List<Comment>>(allcomments, HttpStatus.OK);
   }

}
