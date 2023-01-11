package com.example.ecommercesimplebackend.entity;

import javax.persistence.*;


@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private String price;
    private String category;
    private String description;
    private String image;
    private Integer quantity;
    private Integer count;
    private Float rate;
    @ManyToOne
    private Register register;

    public Cart() {
    }

    public Integer getId() {
        return id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public String getTitle() {
        return title;
    }

    public Integer getCount() {
        return count;
    }

    public Float getRate() {
        return rate;
    }

    public String getPrice() {
        return price;
    }



    public String getCategory() {
        return category;
    }


    public String getDescription() {
        return description;
    }



    public String getImage() {
        return image;
    }



//    public Register getRegister() {
//        return register;
//    }


    public Cart(Integer id, String title, String price, String category, String description, String image,Integer quantity,Integer count,Float rate) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
        this.image = image;
        this.quantity=quantity;
        this.count=count;
        this.rate=rate;
//        this.register = register;
    }




//    public void setRegister(Register register) {
//        this.register = register;
//    }


    public Cart(Register register) {
        this.register = register;
    }

    public Register getRegister() {
        return register;
    }

    public void setRegister(Register register) {
        this.register = register;
    }



}
