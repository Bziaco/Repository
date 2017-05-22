<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
</head>
<body>
	<table id="list"></table>
	<div id="pager"></div>
</body>

<script type="text/javascript">
        $(function(){
            var grid = $("#list");
            grid.jqGrid({
            	url: CONTEXT_ROOT + '/jqGridBoard/selectJqList.do',
            	
                datatype: 'json',
                mtype: 'POST',
                height: '230',
				jsonReader : { 
			    	repeatitems : false,
			    	root:"list"
			    },
                colNames:['no','col_parent','col_child', 'count', 'parents_dt','parents_wrt'],
                colModel:[
                    {name:'no',              index:'no',          width:30, sorttype:"int"},
                    {name:'col_parent',      index:'col_parent',  width:100},
                    {name:'col_child',       index:'col_child',   width:100},
                    {name:'count',           index:'count',       width:70, sorttype:"int"},
                    {name:'parents_dt',      index:'parents_dt',  width:60, align:"right"},
                    {name:'parents_wrt',     index:'parents_wrt', width:90, align:"right"}
                ],
                rowNum:10,
                autowidth: false,
                rowList:[5,10,15],
                pager: "#pager",
                multiselect: false,
                sortname: 'no',
                loadonce : true,
                viewrecords: false,
                sortorder: "asc",
                caption:"Board"
            }).navGrid('#pager',{edit:false,add:false,del:false});
        });
    </script>
</html>
