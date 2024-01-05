package com.project.cart.payment;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Upi {
	@Id
private String upi_id;
private String password;
public String getUpi_id() {
	return upi_id;
}
public void setUpi_id(String upi_id) {
	this.upi_id = upi_id;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
}
