package com.project.cart.app;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

	@Autowired
	CartRepo repo;

	@GetMapping(path="/cart")
	public List <Cart> getCart(){
		return repo.findAll();
   }
  }
