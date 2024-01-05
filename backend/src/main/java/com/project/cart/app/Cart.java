package com.project.cart.app;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.cart.validation.Signup;

@Entity
@Table(name="Product")
public class Cart{
@Id
private String id;
private String title;
private int price;
private String description;
private String category;
private String image;
private int stock;

@JsonIgnore
@ManyToMany(mappedBy="cart")
private List<Signup>signup = new ArrayList<>(); 

public List<Signup> getSignup() {
	return signup;
}
public int getStock() {
	return stock;
}
public void setStock(int stock) {
	this.stock = stock;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getCategory() {
	return category;
}
public void setCategory(String category) {
	this.category = category;
}
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
}

