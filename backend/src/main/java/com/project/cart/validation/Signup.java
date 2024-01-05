package com.project.cart.validation;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.project.cart.OrderDetail.OrderDetail;
import com.project.cart.app.Cart;
import com.project.cart.delivery.Delivery;

@Entity
@Table(name="Signin")
public class Signup{
@Id
private String email;
private String fullname;
private String password;
private String dob;

@OneToOne
Delivery delivery;
@ManyToMany
public List<Cart>cart=new ArrayList<>();

@ManyToMany
public List<OrderDetail>order=new ArrayList<>();

public List<OrderDetail> getOrder() {
	return order;
}

public Delivery getDelivery() {
	return delivery;
}

public String getFullname() {
	return fullname;
}
public void setFullname(String fullname) {
	this.fullname = fullname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getDob() {
	return dob;
}
public void setDob(String dob) {
	this.dob = dob;
}
}
