package com.project.cart.validation;

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

import com.project.cart.OrderDetail.OrderDetail;
import com.project.cart.OrderDetail.OrderDetailRepo;
import com.project.cart.app.Cart;
import com.project.cart.app.CartRepo;
import com.project.cart.delivery.Delivery;
import com.project.cart.delivery.DeliveryRepo;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SignupController {
	@Autowired
	SignupRepo repo;
	@Autowired 
	CartRepo repo1;
	@Autowired
	DeliveryRepo repo2;
    @Autowired
    OrderDetailRepo repo3;
	
	@PostMapping(path="/signup", consumes= {"application/json"})
	public Signup addSignup(@RequestBody Signup signup){
		repo.save(signup);
		return signup;
	}
	
	  @GetMapping(path="/signup")
		public List <Signup> getSignup(){
			return repo.findAll();
	   }
	     
	     @GetMapping(path="/signup/{id}")
			public Optional<Signup> getSignupemail(@PathVariable String id){
				return repo.findById(id);
		}
	 	
	     @PutMapping(path="/signup/{email}/delivery/{phone}")
	     public Signup updateDelivery(@PathVariable String email, @PathVariable long phone) {
	    	 Signup signup = repo.findById(email).get();
	    	 Delivery delivery = repo2.findById(phone).get();
	    	 signup.delivery = delivery;
	    	 repo.save(signup);
	    	 return signup;
	     }

	     
	  @PutMapping(path="/signup/{email}/cart/{id}/orderid/{orderId}")
      public Signup updateSignup(@PathVariable String email, @PathVariable String id, @PathVariable String orderId){
		Signup signup = repo.findById(email).get();
		Cart cart = repo1.findById(id).get();
		OrderDetail orderdetail = repo3.findById(orderId).get();
		    signup.cart.add(cart);
		    signup.order.add(orderdetail);
	 		repo.save(signup);
			return signup;
		}

	 	@DeleteMapping(path="/signup/{email}/cart/{id}/orderid/{orderId}")
		public Signup deleteOrder(@PathVariable String email, @PathVariable String id, @PathVariable String orderId) {
	       Signup signup = repo.findById(email).get();
		   Cart cart= repo1.findById(id).get();
		   OrderDetail orderdetail = repo3.findById(orderId).get();
			signup.cart.remove(cart);
			signup.order.remove(orderdetail);
			repo3.delete(orderdetail);
			repo.save(signup);
	 		return signup;
		}
}

