package com.insurance.entity;

import jakarta.persistence.*;

@Entity
@Table(name="policies")
public class Policy {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String customerName;
 private String policyType;
 private Double premium;

 public Long getId() {
   return id;
 }

 public void setId(Long id) {
   this.id=id;
 }

 public String getCustomerName() {
   return customerName;
 }

 public void setCustomerName(String customerName) {
   this.customerName=customerName;
 }

 public String getPolicyType() {
   return policyType;
 }

 public void setPolicyType(String policyType) {
   this.policyType=policyType;
 }

 public Double getPremium() {
   return premium;
 }

 public void setPremium(Double premium) {
   this.premium=premium;
 }

}
