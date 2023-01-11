package com.example.ecommercesimplebackend.exception;

public class CommentNotFoundException extends RuntimeException{

    private static final long serialVersionUID = 1L;
    public  CommentNotFoundException() {

    }

    public  CommentNotFoundException(String s)
    {
        super(s);
    }

}

