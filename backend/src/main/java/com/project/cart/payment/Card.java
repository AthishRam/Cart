package com.project.cart.payment;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Card {

@Id
private int card_number;
private int cvv;
private String cardholder_name;
private String expiration;



public int getCard_number() {
	return card_number;
}
public void setCard_number(int card_number) {
	this.card_number = card_number;
}
public int getCvv() {
	return cvv;
}
public void setCvv(int cvv) {
	this.cvv = cvv;
}
public String getCardholder_name() {
	return cardholder_name;
}
public void setCardholder_name(String cardholder_name) {
	this.cardholder_name = cardholder_name;
}
public String getExpiration() {
	return expiration;
}
public void setExpiration(String expiration) {
	this.expiration = expiration;
}
}
