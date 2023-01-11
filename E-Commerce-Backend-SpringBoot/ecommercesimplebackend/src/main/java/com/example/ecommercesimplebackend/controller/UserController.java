package com.example.ecommercesimplebackend.controller;




import com.example.ecommercesimplebackend.entity.Login;
import com.example.ecommercesimplebackend.entity.Register;
import com.example.ecommercesimplebackend.repository.UserRepository;
import com.example.ecommercesimplebackend.service.IuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(value = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private IuserService userService;

    @PostMapping(value="/register")
    public ResponseEntity<Register> saveUser(@RequestBody Register register){
        return new ResponseEntity<Register>(userService.saveUser(register), HttpStatus.CREATED);
    }

    @PostMapping(value="/login")
    public ResponseEntity<Register> login(@RequestBody Login login) {
        Boolean isloginsuccess = userService.login(login.getEmail(), login.getPassword());
        String msg = "";
        Register rr = null;
        if (isloginsuccess)
        {
            rr = userRepository.findByemail(login.getEmail());
            msg = "welcome" + login.getEmail();
            return new ResponseEntity<Register>(rr, HttpStatus.OK);
        }
        else
        {
            msg = "Invalid Credential,Try Again";
            return new ResponseEntity<Register>(rr,HttpStatus.NOT_FOUND);
        }
    }



  @GetMapping(value="/showallusers")
    public ResponseEntity<List<Register>> showallregistration(){
        List<Register> allregister=userService.showallregistration();
        return  new ResponseEntity<List<Register>>(allregister,HttpStatus.OK);
  }
    @PutMapping(value="/updatebyid/{reg_id}")
    public ResponseEntity<Register> updateRegister(@PathVariable Integer reg_id,@RequestBody Register register){
        Register updateRegister=userService.updateRegister(reg_id,register);
        return  new ResponseEntity<Register>(updateRegister,HttpStatus.CREATED);
    }


    @GetMapping(value="/getbyid/{reg_id}")
    public Optional<Register> getregisterbyid(@PathVariable Integer reg_id){
       return userService.getregisterbyid(reg_id);



    }
//    @PutMapping(value ="/updatebyid/{reg_id}")
//    public ResponseEntity<Register> updatebyregid(@PathVariable Integer reg_id, @RequestBody Register register){
//       Register updatebyregid= userService.updatebyregid(reg_id,register);
//        return new ResponseEntity<Register>(updatebyregid,HttpStatus.CREATED);
//
//    }


}
