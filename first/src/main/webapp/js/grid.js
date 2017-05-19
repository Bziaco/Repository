/**
 *  �������� �ʿ��� �̺�Ʈ
 * @constructor
 * @namespace {Object} KMTC.GRID
 */
KMTC.GRID = function (_mod_grid, $, undefined) {

    /** @constructor */

    var _vConsole;
    if (typeof console == "undefined") {
        //window.console = {log: function() {}};
        _vConsole = window.console || {
                log: function () {
                }
            };
    } else {
        _vConsole = window.console;
    }
    // /**
    //  * �� ýũ
    //  * com.isBlank(" ") //true
    //  * com.isBlank("") //true
    //  * com.isBlank("\n") //true
    //  * com.isBlank("a") //false
    //  * com.isBlank(null) //true
    //  * com.isBlank(undefined) //true
    //  * com.isBlank(false) //true
    //  * com.isBlank([]) //true
    //  */
    // fn_isBlank = function(obj){
    // 	return(!obj || $.trim(obj) === "" || 'null' == obj );
    // }
    //
    //
    // fn_defaultIfBlank = function(str, defaultStr){
    // 	if( this.isBlank(str) ){
    // 		return defaultStr;
    // 	}else{
    // 		return str;
    // 	}
    // }
    //
    // fn_log = function(obj){
    // if(!isLiveMode){
    // 	_vConsole.log("[LOG][console]", obj);
    // }
    // }
    //
    // /**
    //  * Ȯ��â(confirm) ���.
    //  * @param {string} msg - �޽���
    //  * @param {function} callback - �ݹ��Լ� (������ ��쿡�� ȣ���)
    //  * @param {object} options - �߰��ɼ� (���� Ȯ���)
    //  * 	<ul>
    //  *      <li>cancelCalllback : �ݹ��Լ� - null(default)</li>
    //  * 	</ul>
    //  */
    // fn_confirm = function(msg, callback, options) {
    //
    // 	var okCallback = callback;
    //
    // 	if (confirm( msg ) ){
    // 		okCallback();
    // 	}
    // }
    //
    // /**
    //  * ���â(alert) ���.
    //  * @param {string|array} msg - �޽���
    //  * @param {string} type - ���� (default - warning)
    //  * @param {object} options - �߰��ɼ� (���� Ȯ���)
    //  */
    // fn_alert = function(msg, type, options) {
    //
    // 	alert( msg );
    //
    // }

    // fn_objToStringLog = function(obj){
    // 	if( UTILE.fn_isBlank(obj) ){
    // 		fn_log2("[GRID] obj=", obj );
    //
    // 	}else{
    // 		if ( obj.constructor == Array ){
    // 			var array = $.map( obj , function(value, index) {
    // 				fn_log2("[GRID] obj.value=", value );
    // 				return [value];
    // 			});
    // 		}else{
    // 			;
    // 			fn_log2("[GRID] obj.toString()=", obj.toString() );
    // 		}
    // 	}
    // }


//     /**
//      * @method
//      * @description �ش� ��� �Ķ���� ���� �迭�� ����
//      * @author ȫ�浿(2016.10.04)
//      * @param {string} _sFormId : ���õ� form ID
//      */
//     fn_get_serialize = function(_sFormId) {
//
//         var o   = {};
//         var nm  = "";
//         var val = "";
//
//         $("#"+_sFormId).find("input[type='hidden'], input[type='text'], input[type='password'], input[type='checkbox']:checked, input[type='radio']:checked, select,textarea").each( function(){
//             nm = $('#'+_sFormId).find($(this)).attr('id');
//             // mask ó�� �� ���, cleanVal �Լ��� ���� ����ũ ���ŵ� ���� �������� ó��
//             try {
//                 val = $('#'+_sFormId).find($(this)).cleanVal();
//             }catch(E){
//                 val = $('#'+_sFormId).find($(this)).val();
//             }
//
// //			alert(_sFormId + "\n" + nm + " : " + val);
//             // class ������ int, float, doublt �� ���, �޸� ����
//             /*var cs = $('#'+_sFormId).find($(this)).getClasses();
//
//              if( cs.indexOf("DT_INT")!=-1 || cs.indexOf("DT_DOUBLE")!=-1 || cs.indexOf("DT_FLOAT")!=-1 ) {
//              val = val.replace(/[^0-9\.\-]/g,'');
//              }*/
//
//             /*
//              alert("nm ====> " + nm);
//              if (nm.indexOf("mult_check_") > -1) {
//
//              var cnt = $("#"+_sFormId).find("#"+nm).val();
//              alert(nm + " : "  + cnt);
//              if (cnt == "") {
//              var nm2 = nm.replace("mult_check_", "");
//              alert("nm2 : " + nm2);
//              o[nm].push(val || '');
//              }
//              }
//              */
//
//             if (o[nm] !== undefined) {
//                 if (!o[nm].push) {
//                     o[nm] = [o[nm]];
//                 }
//                 o[nm].push(val || '');
//             } else {
//                 o[nm] =val || '';
//             }
//
//         });
//
//         var chkNm = "";
//         $("#"+_sFormId).find("input[type='hidden']").each( function(){
//
//             chkNm = $('#'+_sFormId).find($(this)).attr('id');
//
//             //alert("["+chkNm+"]üũ ���� : " +  cnt);
//
//             //alert(chkNm + " : " + chkNm.indexOf("mult_check_"));
//             if (chkNm.indexOf("mult_check_") > -1) {
//
//                 var cnt = $("#"+_sFormId).find("#"+chkNm).val();
//
//                 //alert("["+chkNm+"]üũ ���� : " +  cnt);
//
//                 if (cnt == "") {
//                     var nm2 = chkNm.replace("mult_check_", "");
//                     o[nm2] = '' || '';
//                 }
//             }
//         });
//
//         return o;
//     }

    var _defaultAJAXMethodType = "POST";
    var _defaultGridMethodType = "post"; // ���� ȣ�� ��� : post , get
    var _defaultGridDataType = "json"; // jqgrid �⺻���� xml �̴�.
    var _defaultGridTreeDataType = "jsonstring";
    
    
    
    
    /**
     * @description jQuery�� serializeArray()�� �� �����͸�   {name:"name", value:"value" } ������ Array�� �����Ѵ�. �� Array�� ���� ���鼭, name,value����  javascript object {} �� ��Ƽ� jqGrid �� appendPostData �޼���� �Ķ���͸� �߰��Ѵ�.
     * @method
     * @returns {boolean}
     */
    function fn_addFormData( gridId , formId ) {
        var arr = $('#' + formId).serializeArray();

        var params = {};
        $.each(arr, function(){
            var jname;
            jQuery.each(this, function(i, val){
                if (i=="name") {
                    jname = val;
                } else if (i=="value") {
                    params[jname] = val;
                }
            });
        });
        $("#" + gridId).appendPostData(params);

        return true;
    }

    
    fn_test = function() {
    	debugger;
    };
    

    /**
     * @description �⺻ �׸��� ��
     * @method fn_createGrid
     * @param gridId {String} �׸��尡 ��� html ID ��
     * @param gridInitOption {Object} �׸��� ���� �ɼ�
     * @param gridCol {Object} �׸��� �÷� ��� ��ü
     * @example GRID.fn_createGrid( "myGrid01", _gridOption , _colModel);
     * @example $("#" + _grid01_id).jqGrid("filterToolbar"); // ���� ���.
     */
    fn_createGrid = function (gridId, gridInitOption, gridCol) {

        UTILE.fn_log("[GRID.fn_createGrid] [" + gridId + "]================ Call =============");

        var gridObj = $("#" + gridId);

        gridInitOption = $.extend({}, {
			  caption: gridId+"�׸����Դϴ�." /* �����ټ��� ���� TABLE CAPTION �߰� */
            , mtype: _defaultGridMethodType
            , datatype: _defaultGridDataType
            , colModel: gridCol
            , gridview: true
            // , height: '10px'
            // , width: '10px'
            , autoWidth: true
            , height: "auto"
            , cmTemplate: { width: 10,autoResizable: true, autoresizeOnLoad: true }
            , shrinkToFit: true

            // ,searching: {
            //     defaultSearch: "cn"
            // }
            // , searchoptions: { sopt: ["eq"] }
            // , stype: "select"
            // , searchoptions: { value: ":Any;FE:FedEx;TN:TNT;DH:DHL" }

            , loadError: function (jqXHR, textStatus, errorThrown) {
                // UTILE.fn_alert('HTTP status code: ' + jqXHR.status + '\n' + 'textStatus: ' + textStatus + '\n' + 'errorThrown: ' + errorThrown);
                // alert('HTTP message body (jqXHR.responseText): ' + '\n' + jqXHR.responseText);
                $("#" + gridId).html(jqXHR.responseText);
            }
        }, gridInitOption);

        if('local' != gridInitOption.datatype && UTILE.fn_isBlank( gridInitOption.url ) ){
            UTILE.fn_log("[GRID.fn_createGrid] [" + gridId + "] �׸��忡�� ȣ���� URL �Է����ּ���.");
            gridInitOption.datatype = 'local'; // url ���� datatype�� 'json' �� ���� �Ȱ�� �ڱ� �ڽ� jsp ������ ȣ���ϴ� �׼��� �ݺ������� ȣ�� �ϴ� ������ �־���.
        }

        gridObj.jqGrid(gridInitOption);
        // gridObj.jqGrid(gridInitOption).jqGrid("filterToolbar"); // ���� ��� ������ �÷� id �� �Է°��� �Ѿ��.
    }

    /**
     * @method fn_createGridPageNav
     * @param gridId {String} �׸��尡 ��� html ID ��
     * @param gridInitOption {Object} �׸��� ���� �ɼ�
     * @param gridCol {Object} �׸��� �÷� ��� ��ü
     * @param gridPagerId {String} ����¡�� ��� html ID ��
     * @param reqUrl {String} �׸��� ��� ��ȸ�� ���Ǵ� �⺻ URL ( parameter ���� gridInitOption�� postData�� ����ؾ���. )
     * @description ����¡ ó���� �Ǵ� Grid ��
     * searchGrpType�� ó�� �׸��忡 ���� �Ķ���� ������ �׸��忡�� ����Ǵ� ����¡�̳� �ѹ� �� row ���� ����Ǵ°�쿡�� ���ٸ� ������ ������ searchGrpType ���� �����̴�.
     * @example
     GRID.fn_createGridPageNav( "myGrid0A", {height: '340px'}, _colModel,"myGrid0B","/cmCfggrpid/listCmCfggrpidJson.do?searchGrpType="+$("#searchGrpType").val());
     * @example
     * GRID.fn_createGridPageNav( "myGrid0A", {
                height: '340px'
                , postData: {
                    searchGrpType: function() { return $("#searchGrpType").val(); }
                }
            }, _colModel,"myGrid0B","/cmCfggrpid/listCmCfggrpidJson.do"); // searchGrpType ���� �������� �ٲ�°Ϳ� ������ �� �ִ�.
     * @example
     * GRID.fn_createGridPageNav( "myGrid0A", {
                height: '340px'
                , url: "/cmCfggrpid/listCmCfggrpidJson.do"
                , postData: {
                    searchGrpType: function() { return $("#searchGrpType").val(); }
                }
            }, _colModel,"myGrid0B",null); // searchGrpType ���� �������� �ٲ�°Ϳ� ������ �� �ִ�.
     * @example
     * GRID.fn_createGridPageNav( "myGrid0A", {
                height: '340px'
                , url: "/cmCfggrpid/listCmCfggrpidJson.do"
                , postData: {
                    searchGrpType: function() { return $("#searchGrpType").val(); }
                }
            }, _colModel,"myGrid0B",{}); // searchGrpType ���� �������� �ٲ�°Ϳ� ������ �� �ִ�.
     * @author �̼���
     */
    fn_createGridPageNav = function (gridId, gridInitOption, gridCol, gridPagerId, reqUrl) {

        UTILE.fn_log("[GRID.fn_createGridPageNav] [" + gridId + "]================ Call =============");

        var gridObj = $("#" + gridId);

        // ��Ƽüũ ����
        var sMultChk = false;
        if( !UTILE.fn_isBlank( gridInitOption.isCheckboxAble ) ){
            UTILE.fn_log( "[GRID.fn_createGridPageNav] [" + gridId + "] gridInitOption.isCheckboxAble = " + gridInitOption.isCheckboxAble );
            sMultChk = gridInitOption.isCheckboxAble;
        }

        gridInitOption = $.extend({}, {
            mtype : _defaultGridMethodType
            // datatype: "local"
            , datatype: _defaultGridDataType
            , url: reqUrl
            // , sortname  : 'ubseq'
            , sortorder: "DESC"
            , colModel: gridCol
            // , height: '100px'
            // , width: '100px'
            , autoWidth: true
            , height: "auto"
            , rowNum: 10
            , rowList: [7, 10, 15, 25, 50, 100, 500, 1000 ]
            , viewrecords: true
            , jsonReader: {
                repeatitems: false
                , root: function(obj) {
                    // UTILE.fn_log( "[GRID.fn_createGridPageNav] [" + gridId + "]jsonReader.root = " + obj.rows );
                    return obj.rows;
                }
                , page: function(obj) {
                    UTILE.fn_log( "[GRID.fn_createGridPageNav] [" + gridId + "]jsonReader.page = " + obj.page );
                    return obj.page;
                }
                , total: function(obj) {
                    UTILE.fn_log( "[GRID.fn_createGridPageNav] [" + gridId + "]jsonReader.total = " + obj.total );
                    return obj.total;
                }
                , records: function(obj) {
                    UTILE.fn_log( "[GRID.fn_createGridPageNav] [" + gridId + "]jsonReader.records = " + obj.totalRecords );
                    return obj.totalRecords;
                }
            }
            , pager: "#" + gridPagerId
            , gridview: true
            , rownumbers: true
            , loadtext: "�˻� ���Դϴ�."
            , emptyrecords: "�˻��� �����Ͱ� ����ϴ�."
            , recordtext: "�� {2} �� ({0}-{1})"
            , shrinkToFit: true        // true �ΰ�� �׸��� width�� ���� �ڵ����� ������
            , multiselect: sMultChk
            , multiboxonly: sMultChk
            // , ondblClickRow: function (rowId) { /* ���⿡ �����ϸ� ����ϴ� jsp������ ���( $("#" + _grid01_id).jqGrid('setGridParam', { ondblClickRow: function (rowId) {...} ......}); )�� �ȵǴ� ������. �� ����ϴ� jsp ���� gridInitOption �� ondblClickRow�� ����ϸ� ��밡����!  */
            //     var sRowData = $("#" + gridId).getRowData(rowId);
            //     var sUbseq = sRowData["ubseq"];
            //
            //     // COMMON.fn_view_content(_sFormId, _sDetailFormId, sUbseq);
            // }
            , loadComplete: function (data) {
                // �׸��� ������ �� ����
                var sTotalRecords = $("#" + gridId).jqGrid("getGridParam", "records");
                $("#id_totalRecords").text(sTotalRecords);
                // ��ư disabled ó��
                // COMMON.fn_button_disabled(sBtnId, false, sBtnType);
            }
            , loadError: function (jqXHR, textStatus, errorThrown) {
                // UTILE.fn_alert('HTTP status code: ' + jqXHR.status + '\n' + 'textStatus: ' + textStatus + '\n' + 'errorThrown: ' + errorThrown);
                // alert('HTTP message body (jqXHR.responseText): ' + '\n' + jqXHR.responseText);
                $("#" + gridId).html(jqXHR.responseText);
            }
        }, gridInitOption);


        if('local' != gridInitOption.datatype && UTILE.fn_isBlank( gridInitOption.url ) ){
            UTILE.fn_log("[GRID.fn_createGridPageNav] [" + gridId + "] �׸��忡�� ȣ���� URL �Է����ּ���.");
            gridInitOption.datatype = 'local'; // url ���� datatype�� 'json' �� ���� �Ȱ�� �ڱ� �ڽ� jsp ������ ȣ���ϴ� �׼��� �ݺ������� ȣ�� �ϴ� ������ �־���.
        }

        gridObj.jqGrid(gridInitOption).navGrid("#" + gridPagerId, {
            edit: false,
            add: false,
            del: false,
            search: false,
            refresh: false
        })
        ;
               // .jqGrid("gridResize")
               // .jqGrid("filterToolbar", {
               //      beforeSearch: function () {
               //          // startTime = new Date();
               //          // measureTime = true;
               //          return false; // allow filtering
               //      }
               //  });

    }

    /**
     * @description Ʈ�� ������ �׸��� ��.
     * - ���������� �巡�� & ��� ���ǹǷ� ������ ��ܿ� <script type="text/javascript" src="<c:url value='/extLib/jquery.tablednd.js'/>"></script> ������ �ʿ���.
     *     - $("#" + _grid01_id).tableDnD({
     *          scrollAmount: 0
     *          , onDrop: function(table, row) {
     *              UTILE.fn_log("���2!!");
     *              UTILE.fn_log(jQuery("#" + _grid01_id).tableDnDSerialize() );
     *          }
     *          , onDragStart: function(table, row) {
     *              UTILE.fn_log("�巡�� ����2!");
     *          }
     *      });
     * - "key:true" ������ �Ǿ��־����.
     *     var _grid01_colModel = [{ label : '�޴�ID',     	name : 'menuId',         		index : 'menuId',         		width : 100  , hidden: false , key:true} ... ];
     * @method fn_createTreeGrid
     * @param gridId {String} �׸��尡 ��� html ID ��
     * @param gridInitOption {Object} �׸��� ���� �ɼ�
     * @param gridCol {Object} �׸��� �÷� ��� ��ü
     * @param gridTreeOption {Object} tree ���·� ������ ����ϴ� �ɼǸ� ������ ��.
     * @param reqUrl {String} �׸��� ��� ��ȸ�� ���Ǵ� �⺻ URL ( parameter ���� gridInitOption�� postData�� ����ؾ���. )
     * @example GRID.fn_createGrid( "myGrid01", _gridOption , _colModel);
     */
    fn_createTreeGrid = function (gridId, gridInitOption, gridCol, gridTreeOption, reqUrl) {

        UTILE.fn_log("[GRID.fn_createTreeGrid] [" + gridId + "]================ Call =============");

        var gridObj = $("#" + gridId);

        gridTreeOption = $.extend({}, {
              treeGrid: true
            , gridview: true
            , treeGridModel: 'adjacency'
            // , treedatatype: _defaultGridMethodType
            , treedatatype: _defaultGridTreeDataType
            , loadonce:false /* tree �� �������� �ε� �ϱ����ؼ��� false �� �����ؾ���. */
            , ExpandColumn: 'name'
            , ExpandColClick: true
            // , localReader:{
            // 	id: "grpId"
            // }
            // , treeReader:{
            // 	level_field: "menuDepth"
            // 	, parent_id_field: "upGrpId"
            // }
        }, gridTreeOption);

        // gridObj.tableDnD({
        //     scrollAmount: 0 /* Auto-scoll has some problems with IE7  (it scrolls even when it shouldn't), work-around: set scrollAmount to 0 */
        //     , onDrop: function(table, row) {
        //         UTILE.fn_log("���!!");
        //         UTILE.fn_log(jQuery("#" + gridId).tableDnDSerialize() );
        //     }
        //     , onDragStart: function(table, row) {
        //         UTILE.fn_log("�巡�� ����!");
        //     }
        // });

        gridInitOption = $.extend({}, {
            mtype : _defaultGridMethodType
            // datatype: "local"
            , datatype: _defaultGridDataType
            , url: reqUrl
            , colModel: gridCol
            , gridview: true
            , height: '100px'
            , width: '100px'
            , shrinkToFit: true
            , sortorder: "ASC"
            , loadonce : gridTreeOption.loadonce
            , sortname: gridTreeOption.sortname
            , treeGrid: gridTreeOption.treeGrid
            , treeGridModel: gridTreeOption.treeGridModel
            , treedatatype: gridTreeOption.treedatatype
            , ExpandColumn: gridTreeOption.ExpandColumn
            , ExpandColClick: gridTreeOption.ExpandColClick
            , treeReader: gridTreeOption.treeReader /* treeReader ���� ���� ������ TREE ��ħ �� ���Ⱑ �ȵ�!!( expanded_field ���� �����ϸ� �̸��� ������ �ʰ� isleaf ���� Ʈ�������� ����.) */
            // , localReader: gridTreeOption.localReader
            , gridComplete: function () {
                $("#_empty", "#" + gridId).addClass("nodrag nodrop");
                jQuery("#" + gridId).tableDnDUpdate();

                UTILE.fn_log("[GRID.fn_createTreeGrid] [" + gridId + "] gridComplete!!");
                UTILE.fn_log2("[GRID.fn_createTreeGrid] [" + gridId + "] tableDnDSerialize() ==>> " , jQuery("#" + gridId).tableDnDSerialize() );
            }
            , loadError: function (jqXHR, textStatus, errorThrown) {
                // UTILE.fn_alert('HTTP status code: ' + jqXHR.status + '\n' + 'textStatus: ' + textStatus + '\n' + 'errorThrown: ' + errorThrown);
                // alert('HTTP message body (jqXHR.responseText): ' + '\n' + jqXHR.responseText);
                $("#" + gridId).html(jqXHR.responseText);
            }
        }, gridInitOption);

        if('local' != gridInitOption.datatype && UTILE.fn_isBlank( gridInitOption.url ) ){
            UTILE.fn_log("[GRID.fn_createTreeGrid] [" + gridId + "] �׸��忡�� ȣ���� URL �Է����ּ���.");
            gridInitOption.datatype = 'local'; // url ���� datatype�� 'json' �� ���� �Ȱ�� �ڱ� �ڽ� jsp ������ ȣ���ϴ� �׼��� �ݺ������� ȣ�� �ϴ� ������ �־���.
        }

        gridObj.jqGrid(gridInitOption);
    }

    /**
     * @description Function for resize the grid according to the width of the resized window
     * @method resizeJqGridWidth
     * @param string grid_id - jqGrid id used in current page
     * @param string div_id - parent div_id according to whom it will need to resize
     * @param string width - width of the grid that has been set during initialize the grid setup
     * @returns void
     */
    fn_resizeJqGridWidth = function (grid_id, div_id, width) {

        UTILE.fn_log("[GRID.fn_resizeJqGridWidth] [" + grid_id + "]================ Call =============");

        $(window).bind('resize', function() {
            $('#' + grid_id).setGridWidth(width, true); //Back to original width
            $('#' + grid_id).setGridWidth($('#' + div_id).width(), true); //Resized to new width as per window
        }).trigger('resize');
    }

    fn_resizeJqGridColumnWidths = function (gridName) {

        UTILE.fn_log("[GRID.fn_resizeJqGridColumnWidths] [" + gridName + "]================ Call =============");

        if ($('#' + gridName).attr('columnsSet')=='true') return;

        $('body').append('<span id="widthTest">WIDTHTEST</span>');
        $('#gbox_' + gridName + ' .ui-jqgrid-htable,#' + gridName).css('width', 'inherit');
        $('#' + gridName).parent().css('width', 'inherit');

        var containerWidth=$('#' + gridName).width() - 20;
        var columnNames = $("#" + gridName).jqGrid('getGridParam', 'colModel');
        var thisWidth;

        // Loop through Cols
        for (var itm = 0, itmCount = columnNames.length; itm < itmCount; itm++) {

            var curObj = $('[aria-describedby=' + gridName + '_' + columnNames[itm].name + ']');

            var thisCell = $('#' + gridName + '_' + columnNames[itm].name + ' div');
            $('#widthTest').html(thisCell.text()).css({
                'font-family': thisCell.css('font-family'),
                'font-size': thisCell.css('font-size'),
                'font-weight': thisCell.css('font-weight')
            });
            var maxWidth = $('#widthTest').width() + 40;
            //var maxWidth = 0;

            // Loop through Rows
            for (var itm2 = 0, itm2Count = curObj.length; itm2 < itm2Count; itm2++) {
                var thisCell = $(curObj[itm2]);

                $('#widthTest').html(thisCell.html()).css({
                    'font-family': thisCell.css('font-family'),
                    'font-size': thisCell.css('font-size'),
                    'font-weight': thisCell.css('font-weight')
                });

                thisWidth = $('#widthTest').width();
                if (thisWidth > maxWidth) maxWidth = thisWidth;
            }
            if (maxWidth > containerWidth) maxWidth=containerWidth;
            $("#" + gridName).jqGrid('setColProp','amount',{width: maxWidth});
            var gw = $("#" + gridName).jqGrid('getGridParam','width');
            $("#" + gridName).jqGrid('setGridWidth',gw,true);
            $('#' + gridName + ' .jqgfirstrow td:eq(' + itm + '), #' + gridName + '_' + columnNames[itm].name).width(maxWidth).css('min-width', maxWidth);

        }
        $('#widthTest').remove();
        $('#' + gridName).attr('columnsSet','true');
    }

    /**
     * @description ýũ�� row data ��ü�� �迭 ���·� ��ȯ�Ѵ�.
     * @param grid_id
     * @returns {Array}
     */
    fn_getCheckedArray = function (grid_id) {

        UTILE.fn_log("[GRID.fn_getCheckedArray] [" + grid_id + "]================ Call =============");

        var i, selRowIds = $("#" + grid_id).jqGrid("getGridParam", "selarrrow"), n, rowData;
        var cm = $("#" + grid_id).jqGrid('getGridParam', 'colModel');

        UTILE.fn_log("[GRID.fn_getCheckedArray] [" + grid_id + "] selRowIds :" + selRowIds );

        var returnArrayObj = [];

        for (i = 0, n = selRowIds.length; i < n; i++) {
            rowData = $("#" + grid_id).getRowData(selRowIds[i]);
            returnArrayObj.push(rowData);

            UTILE.fn_objToStringLog2("[GRID.fn_getCheckedArray] [" + grid_id + "] " , rowData);
        }


        return returnArrayObj;
    }

    /**
     * @description ýũ�� row data ���� ������ �÷��� ���� ',' �� ���е� ���ڿ��� ��ȯ�Ѵ�.
     * @param grid_id
     * @param targetColName
     * @returns {*} ',' �� ���е� ���ڿ��� ��ȯ�Ѵ�.
     */
    fn_getCheckedStr = function (grid_id,targetColName) {

        UTILE.fn_log("[GRID.fn_getCheckedStr] [" + grid_id + "]================ Call =============");

        var i, selRowIds = $("#" + grid_id).jqGrid("getGridParam", "selarrrow"), n, rowData, returnStr;
        var cm = $("#" + grid_id).jqGrid('getGridParam', 'colModel');

        UTILE.fn_log("[GRID.fn_getCheckedStr] [" + grid_id + "] selRowIds : " + selRowIds );

        for (i = 0, n = selRowIds.length; i < n; i++) {
            rowData = $("#" + grid_id).getRowData(selRowIds[i]);
            for( var iCol=0; iCol < cm.length; iCol++ ){
                var colNm = cm[iCol].name;
                if( colNm == targetColName ){
                    // UTILE.fn_log("colNm:" + colNm + "=" + rowData[colNm] );
                    if( UTILE.fn_isBlank( returnStr ) ){
                        returnStr = rowData[colNm];
                    }else{
                        returnStr = returnStr + "," + rowData[colNm];
                    }
                }
            }
        }

        UTILE.fn_log("[GRID.fn_getCheckedStr] [" + grid_id + "] returnStr : " + returnStr );

        return returnStr;
    }

    /**
     * @description �׸��� �ܺ��� form���� ���� �Է¹��� parameter ������ �׸��� �˻��� ��� form �� parameter ���� Grid�� ������־� �˻��ϴ� �뵵.
     * @param gridId search �� grid ID
     * @param searchFormId form ���� Grid ��ȸ�� ��� ����ϴ� �˻� form id
     * @param pageNo grid ���� ������ ��ȣ
     */
    fn_searchGridBasic = function(gridId , searchFormId , pageNo){

        UTILE.fn_log("[GRID.fn_searchGridBasic] [" + gridId + "] gridId ==>> " + gridId + " ================Start=============");
        UTILE.fn_log2("[GRID.fn_searchGridBasic] [" + gridId + "] searchFormId ==>> ", searchFormId);
        UTILE.fn_log2("[GRID.fn_searchGridBasic] [" + gridId + "] pageNo ==>> ", pageNo);
        UTILE.fn_objToStringLog2("[GRID.fn_searchGridBasic] [" + gridId + "] COMMON.fn_get_serialize( searchFormId ) ==>> ", COMMON.fn_get_serialize( searchFormId ));

        if( UTILE.fn_isBlank( pageNo )) {
            pageNo = 1;
        }

        $("#"+gridId).jqGrid("setGridParam", {
            datatype: _defaultGridDataType
            , page: pageNo
            , postData: COMMON.fn_get_serialize( searchFormId )
            , mtype: _defaultGridMethodType
        }).trigger("reloadGrid");

        var _thisGridOptions = $("#"+gridId).jqGrid('getGridParam');
        UTILE.fn_log2("[GRID.fn_searchGridBasic] _thisGridOptions_id ==>> " , _thisGridOptions.id );
        UTILE.fn_log2("[GRID.fn_searchGridBasic] _thisGridOptions_datatype ==>> " , _thisGridOptions.datatype );
        UTILE.fn_log2("[GRID.fn_searchGridBasic] _thisGridOptions_url ==>> " , _thisGridOptions.url );

    }

    /**
     * @description �׸��� ��ȸ( ���������� Ajax �� ȣ���ϴ� ��� ).
     * @method fn_searchGrid
     * @param {string} gridId - ��� Grid ID
     * @param {string} reqUrl - ȣ�� ���� URL
     * @param {object} param - ����� ������
     * @param {function} callback - ���� ó���� ������ ��� ȣ���� �ݹ��Լ�
     * @param {object} ajaxOptions - �߰� �ɼ�
     * @example GRID.fn_searchGrid("myGrid01","/cmCfggrpid/listCmCfggrpidJson.do", $("#searchFrm").serializeArray() , null, null);
     * @example GRID.fn_searchGrid("myGrid01","/cmCfggrpid/listCmCfggrpidJson.do", $("#searchFrm").serializeArray() , function(obj, resultData, textStatus, jqXHR){alert(textStatus);}, { async : true, type  : "POST"} );
     */
    fn_searchGrid = function (gridId, reqUrl, param, callback, ajaxOptions) {

        UTILE.fn_log("[GRID.fn_searchGrid] [" + gridId + "] reqUrl=" + reqUrl + " ================Start=============");
        UTILE.fn_log2("[GRID.fn_searchGrid] [" + gridId + "] reqUrl=", reqUrl);
        _vConsole.log("[GRID.fn_searchGrid] [" + gridId + "] param=", UTILE.fn_objToStringLog(param));
        UTILE.fn_log2("[GRID.fn_searchGrid] [" + gridId + "] callback=", callback);
        UTILE.fn_log2("[GRID.fn_searchGrid] [" + gridId + "] ajaxOptions=", ajaxOptions);

        if (UTILE.fn_isBlank(gridId)) {
            UTILE.fn_alert("�׸��� ID�� �������ּ���.");
        } else {


            // var _vGridId = "#" + gridId;
            var $_vGridId = $("#" + gridId);

            /* ��ȸ */
            // var reqUrl = "/cmCfggrpid/listCmCfggrpidJson.do";
            // var param = $("#searchFrm").serializeArray();

            var _thisGridOptions = $("#"+gridId).jqGrid('getGridParam');
            // UTILE.fn_objToStringLog2("[GRID.fn_searchGrid]" , _thisGridOptions );
            UTILE.fn_log2("[GRID.fn_searchGrid] _thisGridOptions_id ==>> " , _thisGridOptions.id );
            UTILE.fn_log2("[GRID.fn_searchGrid] _thisGridOptions_datatype ==>> " , _thisGridOptions.datatype );
            UTILE.fn_log2("[GRID.fn_searchGrid] _thisGridOptions_url ==>> " , _thisGridOptions.url );



            ajaxOptions = $.extend({}, {
                async: true,
                type: _defaultAJAXMethodType,
                traditional: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                resultTypeCheck: true,
                spinner: true,
                dimmed: false,
                errorCallback: null,
                timeout: 30000			// �⺻ 30��
            }, ajaxOptions);

            UTILE.fn_ajax(reqUrl, param, function (obj, resultData, textStatus, jqXHR) {

                UTILE.fn_log2("[GRID.fn_searchGrid] [" + gridId + "] jqXHR.status = " , jqXHR.status );

                if (200 == jqXHR.status) {
                    var gridArrayData = [];
                    var itemList = resultData.rows;

                    // data ���� ��� 1( ������ ajax ��ȣ���Ŀ��� datatype�� local�� �ٲ�Ƿ� ���� ���2�� ���� datatype : 'json'�� ���־�� ajax�� ������ ���� ���� ���� ǥ���� �� �ִ�. )
                    // $_vGridId[0].addJSONData({rows: {}});
                    // $_vGridId[0].addJSONData({rows: itemList});

                    // data ���� ��� 2
                    $_vGridId.jqGrid('clearGridData');
                    // $("#grid").jqGrid("setGridParam",{postData:{}});     // http://www.trirand.com/blog/?page_id=393/bugs/jqgrid-4-0-replacement-for-setpostdata-incorrect
                    // $("#grid").jqGrid("setGridParam",{postData: null }); // http://www.trirand.com/blog/?page_id=393/bugs/jqgrid-4-0-replacement-for-setpostdata-incorrect
                    $_vGridId.jqGrid('setGridParam', {datatype:_defaultGridDataType});
                    $_vGridId[0].addJSONData({
                        rows: itemList
                        , page: resultData.page
                        , total: resultData.total
                        , records: resultData.records
                    });

                    // data ���� ��� 3(��ũ��Ʈ ����� ������ grid�� data�� ���� ����!! )
                    // $_vGridId.jqGrid('setGridParam', {
                    //     datatype: 'local',
                    //     rows:itemList
                    // }).trigger("reloadGrid");


                    // �׸��� ������ �� ����
                    var sTotalRecords = $_vGridId.jqGrid("getGridParam", "records");
                    $("#id_totalRecords").text(sTotalRecords);

                    // UTILE.fn_log2("[GRID.fn_searchGrid] [" + gridId + "]", "getDataIDs : " + $_vGridId.jqGrid('getDataIDs')); //return Ids

                    if (!UTILE.fn_isBlank(callback)) {
                        if (typeof callback == 'function') {
                            UTILE.fn_log("[GRID.fn_searchGrid] [" + gridId + "][Data Callback]");
                            // callback.call(this, data, jqXHR, textStatus);
                            // callback.call(this, data, textStatus, jqXHR);
                            eval(callback(obj, resultData, textStatus, jqXHR));
                        }

                    }

                    UTILE.fn_log("[GRID.fn_searchGrid] [" + gridId + "] ================End=============");
                }else{

                    UTILE.fn_log("[GRID.fn_searchGrid] [" + gridId + "] ================End=============");
                }
            }, ajaxOptions);
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    //## public �޼ҵ�
    //------------------------------------------------------------------------------------------------------------------
    _mod_grid.fn_test = fn_test;



    return _mod_grid;

}(KMTC.GRID || {}, jQuery);