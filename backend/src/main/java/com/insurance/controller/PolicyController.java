package com.insurance.controller;

import com.insurance.entity.Policy;
import com.insurance.service.PolicyService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policies")
@CrossOrigin("*")
public class PolicyController {

 private final PolicyService service;

 public PolicyController(
      PolicyService service){

      this.service=service;
 }

 @GetMapping
 public List<Policy> getPolicies(){

    return service.getPolicies();
 }

 @PostMapping
 public Policy savePolicy(
      @RequestBody Policy policy){

    return service.savePolicy(policy);
 }

}
