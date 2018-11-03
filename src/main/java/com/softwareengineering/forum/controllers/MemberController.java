package com.softwareengineering.forum.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ResponseBody;

import com.softwareengineering.forum.models.*;
import com.softwareengineering.forum.services.*;

@Controller
@RequestMapping("/member/")
class MemberController {
	@Autowired
	MemberService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Member getMemberById(@PathVariable("id") int id) {
		return service.getMemberById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public int createMember(@RequestBody Member member) {
		return service.createMember(member);
	}
}