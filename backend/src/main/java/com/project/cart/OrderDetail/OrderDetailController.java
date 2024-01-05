package com.project.cart.OrderDetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrderDetailController {
	
	@Autowired
	OrderDetailRepo repo;
	
	@GetMapping(path="/order")
	public List <OrderDetail> getCart(){
		return repo.findAll();
   }
	
	@PostMapping(path="order", consumes= {"application/json"})
	public OrderDetail addSignup(@RequestBody OrderDetail order){
		repo.save(order);
		return order;
	}
	@DeleteMapping(path="/order/{id}")
	public void deleteOrder(@PathVariable OrderDetail id) {
		repo.delete(id);
	}
}
