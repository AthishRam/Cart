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
public class UpiController {
	@Autowired
	UpiRepo repo;

	@PostMapping(path="/upi",consumes= {"application/json"})
	public Upi addupi(@RequestBody Upi upi)
	{
		repo.save(upi);
		return upi;
	}
	
	@GetMapping("/upi")
	public List<Upi> getupi(){
		return repo.findAll();
	}
	
	@PutMapping(path="/upi",consumes= {"application/json"})
	public Upi updateUpi(@RequestBody Upi upi) {
		repo.save(upi);
		return upi;
	}
}
