package com.example.mavenreactjsspringboot.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mavenreactjsspringboot.services.UserInfo;

@RestController
public class Controllers {
	
	
	@GetMapping(value = "/get")
	public String getIndex() {
		
		return "index.html";
		
	}
	
	@PostMapping(value = "/registerUser")
	public String getUserInfo(@ModelAttribute("model") UserInfo info){
		
		System.out.println("name: " + info.getEmail());
		
		return "hello";
		
	}
}
