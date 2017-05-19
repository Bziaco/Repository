/**
 *  공통에 필요한 이벤트
 * @namespace {Object} KMTC.COMMON
 */
KMTC.COMMON = function(_mod_common, $, undefined){
	
	fn_test2 = function() {
		debugger;
		gfn_isNull("44");
	};
	
	function gfn_isNull(str) {
		debugger;
	    if (str == null) return true;
	    if (str == "NaN") return true;
	    if (new String(str).valueOf() == "undefined") return true;   
	    var chkStr = new String(str);
	    if( chkStr.valueOf() == "undefined" ) return true;
	    if (chkStr == null) return true;   
	    if (chkStr.toString().length == 0 ) return true;  
	    return false;
	}
	 
	function ComSubmit(opt_formId) {
		debugger;
	    this.formId = gfn_isNull(opt_formId) == true ? "commonForm" : opt_formId;
	    this.url = "";
	     
	    if(this.formId == "commonForm"){
	        $("#commonForm")[0].reset();
	    }
	     
	    this.setUrl = function setUrl(url){
	        this.url = url;
	    };
	     
	    this.addParam = function addParam(key, value){
	        $("#"+this.formId).append($("<input type='hidden' name='"+key+"' id='"+key+"' value='"+value+"' >"));
	    };
	     
	    this.submit = function submit(){
	        var frm = $("#"+this.formId)[0];
	        frm.action = this.url;
	        frm.method = "post";
	        frm.submit();  
	    };
	}
	
	//------------------------------------------------------------------------------------------------------------------
	//## public 메소드
	//------------------------------------------------------------------------------------------------------------------
	_mod_common.fn_test2 = fn_test2;
	
	
	return _mod_common;
}(KMTC.COMMON || {}, jQuery);
