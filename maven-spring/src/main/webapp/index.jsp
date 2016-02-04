<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
<title>欢迎</title> 
<script type="text/javascript" src="static/js/jquery-1.10.1.min.js"></script> 
</head>  
<body>  
<h2>Hello World!</h2>  
  
<script type="text/javascript">
function selectDep(){
	$.ajax({
		url : "/maven-spring/1/login",
		datatype : "json",
		type : "get",
		success : function(data) {
			alert(data);
			
			$("#table").append("<tr><td>姓名</td><td>部门</td><td>职位</td><tr>");
			var text;
			   for(var i=0;i<data.length;i++){
				text += "<tr><td>"+ data[i].name + "</td><td>" + data[i].department + "</td><td>" + data[i].position + "</td></tr>";
			   }
			 
			 //$("#table").html("");
			 $("#table").append(text);
			
		},
		error : function() {
		}
	});
	  
  }
 
</script> 
<input type="button" onclick="selectDep();" value="hello"/>
<table id="table" border="1px"></table>  
</body>  
</html>  