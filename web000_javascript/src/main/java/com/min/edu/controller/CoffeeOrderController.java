package com.min.edu.controller;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//화면의(HTML)의 요청을 받을 수 있는 클래스(extends HttpServlet)
public class CoffeeOrderController extends HttpServlet {

	private static final long serialVersionUID = 4668169325178489028L;

	// 클라이언트로부터 GET 요청을 받았을 때 호출
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// System.out.println("CoffeeOrderController : GET 요청처리");

		/*
		 * 1) 화면에서 요청된 객체는 HttpServletRequest에 담겨 있다. 2) 요청되는 QueryString은 key와 value를
		 * 가지고 있다. 3) key는 화면에서 input의 name 속성의 값! 4) key가 없다면 값은 null이 됨 5) key만 있다면 값은
		 * ""이 됨
		 */

		String beans = req.getParameter("beans");
		/* html에서 <select name="beans"> => 요청받은 name이 doGet의 req 파라미터에 저장되어 그걸 불러옴 */
		System.out.println("커피 종류: " + beans);

		String beanType = req.getParameter("beanType");
		System.out.println("커피 타입: "+beanType);
		
		//넘어오는 건 다 string
		String bags = req.getParameter("bags");
		System.out.println(Integer.parseInt(bags)+"개");
		
		String date = req.getParameter("date");
		System.out.println("요청 날짜: "+date);
		
		String[] extras=req.getParameterValues("extra");
		System.out.println(Arrays.toString(extras));
		
		String color=req.getParameter("color");
		System.out.println("색상 선택: "+color);
		
		resp.sendRedirect("./016_form.html"); // 화면 이동
	}

}