<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>  
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">  
<html>    
<head>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %> 
	<% String contextRoot = request.getContextPath(); %>
	<script>
        var CONTEXT_ROOT = '<%=contextRoot%>';
        var isLiveMode = false;
        var topMenuCloseYn = "N";
	</script>
	
	<!-- CSS --> 
	<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.servletContext.contextPath}/jqGrid/css/jquery-ui.min.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.servletContext.contextPath}/jqGrid/css/ui.jqgrid.css" />
	<link rel="stylesheet" type="text/css" href="<c:url value='/css/common.css'/>" />
	<!-- jQuery -->
	<script src="${pageContext.servletContext.contextPath}/jqGrid/js/jquery-2.2.4.min.js" type="text/javascript"></script>
	<script src="${pageContext.servletContext.contextPath}/jqGrid/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
	<script src="${pageContext.servletContext.contextPath}/jqGrid/js/jquery.jqGrid.min.js" type="text/javascript"></script>
	<script src="${pageContext.servletContext.contextPath}/jqGrid/js/jquery-ui.min.js" type="text/javascript"></script>
	<script src="<c:url value='/js/namespace.js'/>" charset="utf-8"></script>
</head>
<body>
    <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
        <tr>          
            <td height="30" colspan="2">
            	<tiles:insertAttribute name="header" />
            </td>
        </tr>
        <tr>
            <td height="300" style="width:10%;">
            	<tiles:insertAttribute name="menu" />
            </td>
            <td width="300" height="800">
            	<tiles:insertAttribute name="content" />
            </td>
        </tr>
    <tr>
        <td height="30" colspan="2">
        	<tiles:insertAttribute name="footer" />
        </td>
    </tr>
    </table>
</body>
</html>