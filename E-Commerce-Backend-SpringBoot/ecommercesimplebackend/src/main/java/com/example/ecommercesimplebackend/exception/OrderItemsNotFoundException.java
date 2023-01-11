package com.example.ecommercesimplebackend.exception;

public class OrderItemsNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    public OrderItemsNotFoundException() {

    }

    public OrderItemsNotFoundException(String s)
    {
        super(s);
    }
}




