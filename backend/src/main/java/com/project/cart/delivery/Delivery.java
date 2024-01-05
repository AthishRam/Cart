package com.project.cart.delivery;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.project.cart.validation.Signup;

@Entity
public class Delivery {
@Id
private long phone;
private int pincode;
private String state;
private String city;
private String area;
private String addressType;
@OneToOne(mappedBy="delivery")
private Signup signup;
public long getPhone() {
	return phone;
}
public void setPhone(long phone) {
	this.phone = phone;
}
public int getPincode() {
	return pincode;
}
public void setPincode(int pincode) {
	this.pincode = pincode;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getArea() {
	return area;
}
public void setArea(String area) {
	this.area = area;
}

public String getAddressType() {
	return addressType;
}
public void setAddressType(String addressType) {
	this.addressType = addressType;
}
}
