package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n");
      out.write("<html>  \r\n");
      out.write("<head>  \r\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">  \r\n");
      out.write("<title>欢迎</title> \r\n");
      out.write("<script type=\"text/javascript\" src=\"static/js/jquery-1.10.1.min.js\"></script> \r\n");
      out.write("</head>  \r\n");
      out.write("<body>  \r\n");
      out.write("<h2>Hello World!</h2>  \r\n");
      out.write("  \r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("function selectDep(){\r\n");
      out.write("\t$.ajax({\r\n");
      out.write("\t\turl : \"/maven-spring/1/login\",\r\n");
      out.write("\t\tdatatype : \"json\",\r\n");
      out.write("\t\ttype : \"get\",\r\n");
      out.write("\t\tsuccess : function(data) {\r\n");
      out.write("\t\t\talert(data);\r\n");
      out.write("\t\t\teval(data);\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t$(\"#table\").append(\"<tr><td>姓名</td><td>部门</td><td>职位</td><tr>\");\r\n");
      out.write("\t\t\tvar text;\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t\ttext += \"<td>\"+ data.name + \"</td><td>\" + data.department + \"</td><td>\" + data.position + \"</td>\";\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t \r\n");
      out.write("\t\t\t $(\"#table\").html(\"\");\r\n");
      out.write("\t\t\t $(\"#table\").append(str);\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t},\r\n");
      out.write("\t\terror : function() {\r\n");
      out.write("\t\t}\r\n");
      out.write("\t});\r\n");
      out.write("\t  \r\n");
      out.write("  }\r\n");
      out.write(" \r\n");
      out.write("</script> \r\n");
      out.write("<input type=\"button\" onclick=\"selectDep();\" value=\"hello\"/>\r\n");
      out.write("<table id=\"table\" border=\"1px\"></table>  \r\n");
      out.write("</body>  \r\n");
      out.write("</html>  ");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
