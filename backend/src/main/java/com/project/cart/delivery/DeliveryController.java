package com.project.cart.delivery;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


    @RestController
	@CrossOrigin(origins="http://localhost:4200")
	public class DeliveryController {
	@Autowired
	DeliveryRepo repo;

		@PostMapping(path="/delivery",consumes= {"application/json"})
		public Delivery addAddress(@RequestBody Delivery delivery)
		{
			repo.save(delivery);
			return delivery;
		}
		
		@GetMapping("/delivery")
		public List<Delivery> getAddress(){
			return repo.findAll();
		}
		
		@GetMapping("/delivery/{phone}") 
		public Optional<Delivery> getPhone(@PathVariable long phone)
		{
		  return repo.findById(phone);	
		}
		
		@PutMapping(path="/delivery",consumes= {"application/json"})
		public Delivery updateAddress(@RequestBody Delivery updatedaddress) {
			repo.save(updatedaddress);
			return updatedaddress;
		}
		@DeleteMapping(path="/delivery/{phone}")
		public void deleteOrder(@PathVariable Delivery phone) {
			repo.delete(phone);
		}
		}

	


