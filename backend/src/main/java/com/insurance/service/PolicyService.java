package com.insurance.service;

import com.insurance.entity.Policy;
import com.insurance.repository.PolicyRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolicyService {

 private final PolicyRepository repository;

 public PolicyService(
      PolicyRepository repository){

      this.repository=repository;
 }

 public List<Policy> getPolicies(){

    return repository.findAll();
 }

 public Policy savePolicy(
      Policy policy){

      return repository.save(policy);
 }

}
