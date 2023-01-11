package com.example.ecommercesimplebackend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;


@Entity
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reg_id;
    private String file;
    private String gender;
    private String date;
    private String description;
    private String occupation;
    private String areaofinterest;
    private String name;
    private String email;
    private String phonenumber;

    private String password;
    @OneToMany(targetEntity = Cart.class,cascade = CascadeType.ALL,fetch= FetchType.LAZY)
    @JoinColumn(name ="cp_fk",referencedColumnName = "reg_id")

    private List<Cart> cartitems;


    public void setReg_id(Integer reg_id) {
        this.reg_id = reg_id;
    }

    public void setFile(String file) {
        this.file = file;
    }
    public Register() {
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public void setAreaofinterest(String areaofinterest) {
        this.areaofinterest = areaofinterest;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setSkills(String[] skills) {
        this.skills = skills;
    }

    public void setCartitems(List<Cart> cartitems) {
        this.cartitems = cartitems;
    }

    public Integer getReg_id() {
        return reg_id;
    }

    public String getFile() {
        return file;
    }

    public String getGender() {
        return gender;
    }

    public String getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }

    public String getOccupation() {
        return occupation;
    }

    public String getAreaofinterest() {
        return areaofinterest;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String[] getSkills() {
        return skills;
    }

    public List<Cart> getCartitems() {
        return cartitems;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    private String[] skills;

    public Register(Integer reg_id, String file, String gender, String date, String description, String occupation, String areaofinterest, String name, String email, String password, String[] skills, List<Cart> cartitems,String phonenumber) {
        this.reg_id = reg_id;
        this.file = file;
        this.gender = gender;
        this.date = date;
        this.description = description;
        this.occupation = occupation;
        this.areaofinterest = areaofinterest;
        this.name = name;
        this.email = email;
        this.password = password;
        this.skills = skills;
        this.cartitems = cartitems;
        this.phonenumber=phonenumber;
    }









}
