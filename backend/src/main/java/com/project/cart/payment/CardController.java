package com.project.cart.payment;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CardController {

	@Autowired
	 CardRepo repo;

		@PostMapping(path="/card",consumes= {"application/json"})
		public Card addCard(@RequestBody Card card)
		{
			repo.save(card);
			return card;
		}
		
		@GetMapping("/card")
		public List<Card> getCard(){
			return repo.findAll();
		}
		
		@PutMapping(path="/card",consumes= {"application/json"})
		public Card updateCard(@RequestBody Card updatedcard) {
			repo.save(updatedcard);
			return updatedcard;
		}
	}




