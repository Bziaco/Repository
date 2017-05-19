<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/WEB-INF/include/include-header.jspf" %>
</head>
<body>
	<table id="list4"></table>
	<div id="pager1"></div>
</body>

<script type="text/javascript">
        $(function(){
            // 변수 선언
            var i, max, myData, grid = $("#list4");
            // grid 설정
            grid.jqGrid({
            	/* data: '$(list)', */
                datatype: "local",
                height: '230',
                loadonce : false,
                colNames:['No','부모 컬럼','자식컬럼', '조회수', '날짜','작성자'],
                colModel:[
                    {name:'id',index:'id', width:30, sorttype:"int"},
                    {name:'col_parents',index:'col_parents', width:100},
                    {name:'col_child',index:'col_child', width:100},
                    {name:'count',index:'count', width:70, sorttype:"int"},
                    {name:'parents_dt',index:'parents_dt', width:60, align:"right",sorttype:"date"},
                    {name:'parents_wrt',index:'parents_wrt', width:90, align:"right"},
                ],
                rowNum:10,
                autowidth: false,
                rowList:[5,10,15],
                pager: "#pager1",
                multiselect: false,
                sortname: 'id',
                loadonce : false,
                viewrecords: true,
                sortorder: "asc",
                caption:"Board"
            }).navGrid('#pager1',{edit:false,add:false,del:false});
            // 데이터 추가
            var list = "$(list)";
            for( i=0, max = list.length ; i<=max ; i++ ){
                grid.jqGrid('addRowData', i+1, list[i]);
            }
            $("#list4").setGridParam({ rowNum: 10 }).trigger("reloadGrid");
        });
    </script>
</html>
