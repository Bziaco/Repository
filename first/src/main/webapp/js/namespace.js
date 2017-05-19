/**
 * 시스템 기본 네임스페이스
 * @namespace {Object} KMTC
 */
var KMTC = KMTC || {};

/**
* @method
* @description 네임스페이스 축약사용 지원을 위한 함수
* @author 홍길동(2015.11.13)
* @param {String} ns_string - 줄여서 사용하고 싶은 FULL 네임스페이스
* @returns {Obecjt} 줄여서 사용가능한 네임스페이스
*/
KMTC.ns = function(ns_string) {
	var parts = ns_string.split('.'),
    	parent = KMTC,
    	i;

    if(parts[0] === 'KMTC'){
    	parts = parts.slice(1);
    }

    for(i=0; i < parts.length ; i +=1){
    	if ( typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }
    return parent;
};

var COMMON	= KMTC.ns("KMTC.COMMON");
var CONTENT	= KMTC.ns("KMTC.CONTENT");
var MAIN	= KMTC.ns("KMTC.MAIN");
var UTILE	= KMTC.ns("KMTC.UTILE");
var GRID	= KMTC.ns("KMTC.GRID");
var CUSTOM	= KMTC.ns("KMTC.CUSTOM");
var SVCMGR	= KMTC.ns("KMTC.SVCMGR");
var STATS	= KMTC.ns("KMTC.STATS");
var MAIL	= KMTC.ns("KMTC.MAIL");
var HISWEBREQ	= KMTC.ns("KMTC.HISWEBREQ");
var USESTOP	= KMTC.ns("KMTC.USESTOP");
var MBTCTONG	= KMTC.ns("KMTC.MBTCTONG");
var PHONEBOOK	= KMTC.ns("KMTC.PHONEBOOK");
var JUMPO		= KMTC.ns("KMTC.JUMPO");
var JOBAPPROVE	     = KMTC.ns("KMTC.JOBAPPROVE"); 
//작업조회
var JOBMASTER	     = KMTC.ns("KMTC.JOBMASTER");          
var JOBCOMMON	     = KMTC.ns("KMTC.JOBCOMMON");
var JOBTYPEWLAN	     = KMTC.ns("KMTC.JOBTYPEWLAN");
var JOBTYPEINNETWORK = KMTC.ns("KMTC.JOBTYPEINNETWORK");
var JOBCATVCHG	     = KMTC.ns("KMTC.JOBCATVCHG");
var JOBPHONECHG	     = KMTC.ns("KMTC.JOBPHONECHG");
var JOBPHONENEW	     = KMTC.ns("KMTC.JOBPHONENEW");
var JOBETC	         = KMTC.ns("KMTC.JOBETC");
var JOBTYPEOPTICAL   = KMTC.ns("KMTC.JOBTYPEOPTICAL");
var JOBPRIVATELINE   = KMTC.ns("KMTC.JOBPRIVATELINE");
var JOBTYPEEXLINE    = KMTC.ns("KMTC.JOBTYPEEXLINE");
var JOBIPPHONESVC    = KMTC.ns("KMTC.JOBIPPHONESVC");
var JOBLANSVC		 = KMTC.ns("KMTC.JOBLANSVC");
var JOBCATV	         = KMTC.ns("KMTC.JOBCATV");
//주소
var ZIP		 		 = KMTC.ns("KMTC.ZIP");
var EAI		 		 = KMTC.ns("KMTC.EAI");