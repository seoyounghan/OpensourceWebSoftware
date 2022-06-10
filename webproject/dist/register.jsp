<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="user.UserDAO" %> <!-- userdao의 클래스 가져옴 -->
<%@ page import="java.io.PrintWriter" %> <!-- 자바 클래스 사용 -->
<% request.setCharacterEncoding("UTF-8"); %>

<!-- 한명의 회원정보를 담는 user클래스를 자바 빈즈로 사용 / scope:페이지 현재의 페이지에서만 사용-->
<jsp:useBean id="user" class="user.User" scope="page" />
<jsp:setProperty name="user" property="userName" />
<jsp:setProperty name="user" property="userEmail" />
<jsp:setProperty name="user" property="userPassword" /> 
<jsp:setProperty name="user" property="userDateofBirth" /> 
<jsp:setProperty name="user" property="userGender" /> 
<jsp:setProperty name="user" property="userCompany" /> 
<jsp:setProperty name="user" property="userNumber" /> 
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>회원가입</title>
</head>
<body>
	<%
	UserDAO userDAO = new UserDAO(); //인스턴스생성
	int result = userDAO.join(user);				
	if(result == -1){ // 아이디가 기본키기. 중복되면 오류.
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('실패했습니다.')");
		script.println("history.back()");
		script.println("</script>");
	}
		//가입성공
	else {
		PrintWriter script = response.getWriter();			
		script.println("<script>");
		script.println("alert('회원가입 성공! 해당 아이디로 로그인해주세요.')");
		script.println("location.href = 'login.html'");
		script.println("</script>");
	}
	%>
</body>
</html>