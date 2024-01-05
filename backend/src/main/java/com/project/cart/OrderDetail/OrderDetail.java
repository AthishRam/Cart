package com.project.cart.OrderDetail;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.cart.validation.Signup;

@Entity
public class OrderDetail {

@JsonIgnore
@ManyToMany(mappedBy="order")
private List<Signup>signup = new ArrayList<>();
@Id
private String orderId;
private	int quantity;

public String getOrderId() {
	return orderId;
}
public void setOrderId(String orderId) {
	this.orderId = orderId;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
}
