//등록,수정,삭제 후 메시지
var insertCmpMsg ="등록완료.";
var deleteCmpMsg ="삭제완료.";
var updateCmpMsg ="수정완료.";


// 값 하나로 묶을때 사용 (상세페이지 갈때)
function checkKeepCondition(val) //input
{
	if(null!=val && ""!=val && val!='undefined')
		return val+"//";
	else
		return "-//";
}
//값 하나로 묶을때 사용 (상세페이지 갈때) : check box 
function checkboxCondition(valChek, val) //check box
{
	if(valChek)
		return val+"//";
	else
		return "-//";
}

/* ��Ű�߰� */
function setCookie(sName, vValue, expiredays) {
	var toDay = new Date();
	toDay.setDate(toDay.getDate()+expiredays);
	var argv = setCookie.arguments, argc = setCookie.arguments.length;
	var sExpDate = (expiredays!="")?"; expires=" + toDay.toGMTString() : "";
	//var sPath = (argc > 3) ? "; path=" + argv[3] : "";
	var sPath = ";path=/;";
	var sDomain = (argc > 4) ? "; domain=" + argv[4] : "";
	var sSecure = (argc > 5) && argv[5] ? "; secure" : "";
	document.cookie = sName + "=" + escape(vValue, 0) + sExpDate + sPath
			+ sDomain + sSecure + ";";
}

/* ��Ű���������� */
function getCookie(sCookieName) {
	var sName = sCookieName + "=", ichSt, ichEnd;
	var sCookie = document.cookie;
	if (sCookie.length && (-1 != (ichSt = sCookie.indexOf(sName)))) {
		if (-1 == (ichEnd = sCookie.indexOf(";", ichSt + sName.length)))
			ichEnd = sCookie.length;
		return unescape(sCookie.substring(ichSt + sName.length, ichEnd));
	}
	return null;
}

/* ��Ű���� */
function deleteCookie(sName) {
	document.cookie = sName + "=" + getCookie(sName) + "; expires="
			+ (new Date()).toGMTString() + ";";
}



/*���� url, �˾���, ��, ����, ��ũ�� 0 1 */
function popUp(url, n, w, h, s) {
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height=' + h + ',width=' + w + ',top=' + wint + ',left=' + winl
			+ ',scrollbars=' + s + ',resizable=yes';
	win = window.open(url, n, winprops);

	if (parseInt(navigator.appVersion) >= 4 && win != undefined) {
		win.window.focus();
	}
};



/* �˾���� �˾� */
function showPopup(title, url, target, file, width, height, content) {
	var pFile = "/inc/popup.jsp";
	var param = "?title=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url) + "&target=" + target
			+ "&file=" + file + "&width=" + width + "&height=" + height+"&content="+encodeURIComponent(content);
	var x = width;
	var y = Number(height) + 30;

	window.open(pFile + param, "PopUpManger", "toolbar=no,width=" + x
			+ ",height=" + y + ",top=" + (screen.availheight - y) / 2
			+ ",left=" + (screen.availwidth - x) / 2
			+ ",directories=no,status=no,scrollbars=no,resize=no,menubar=no");
}


/* ���ڸ� �Է� */

function OnlyisNum(obj) {

	var deny_pattern = /[^0-9]/;
	var paramValue = obj.value;

	if (paramValue.substr(0, 1) == "-") {
		paramValue = paramValue.substr(1, paramValue.length);
	}

	if (deny_pattern.test(paramValue)) {
		alert("숫자를 입력해 주세요!");
		obj.value = "";
		obj.select();
		obj.focus();
		return true;
	}

	return true;
}

// 숫자형식검사 :: 숫자, - 입력가능
function OnlyisNumDash(obj) {

	var deny_pattern = /[^0-9\-]/;
	var paramValue = obj.value;

	if (paramValue.substr(0, 1) == "-") {
		paramValue = paramValue.substr(1, paramValue.length);
	}

	if (deny_pattern.test(paramValue)) {
		alert("숫자 또는 '-'를 입력해 주세요!");
		obj.value = paramValue.replace( /[^0-9\-]/g,"");
//		obj.select();
		obj.focus();
		return false;
	}

	return true;
}

//숫자형식검사 :: 숫자, . 입력가능
function OnlyisNumDot(obj) {

	var deny_pattern = /[^0-9\.]/;
	var paramValue = obj.value;

	if (paramValue.substr(0, 1) == "-") {
		paramValue = paramValue.substr(1, paramValue.length);
	}

	if (deny_pattern.test(paramValue)) {
		alert("숫자 또는 '.'을 입력해 주세요!");
		obj.value = paramValue.replace( /[^0-9\.]/g,"");
		obj.select();
		obj.focus();
		return false;
	}

	return true;
}

// 숫자형식검사, 포커스이동
function OnlyisNumGoNext(obj,leng,nextId) {

	var deny_pattern = /[^0-9]/;
	var paramValue = obj.value;

	if (paramValue.substr(0, 1) == "-") {
		paramValue = paramValue.substr(1, paramValue.length);
	}

	if (deny_pattern.test(paramValue)) {
		alert("숫자를 입력해 주세요!");
		obj.value = "";
		obj.select();
		obj.focus();
		return false;
	}
	else if(paramValue.length==leng)
	{
		nextId.focus();
	}

	return true;
}



/* ����, �޸��� �Է°��� */
function OnlyisNumComma(obj) {

	var deny_pattern = /[^0-9]/;
	var paramValue = obj.value;

	if (paramValue.substr(0, 1) == "-") {
		paramValue = paramValue.substr(1, paramValue.length);
	}

	if (deny_pattern.test(paramValue)) {
		alert("숫자를 입력해 주세요!");
		obj.focus();
		obj.select();
		obj.value = "";
		return false;
	}

	return true;
}



//숫자에 컴마 추가
function addComma(str) {
	var number=str.value.replace(/,/g, "");
	number = '' + number;
	if (number.length > 3) {
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');
		for (i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0)){
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			}else{
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
		}
		str.value=output;
	}else{
		str.value=number;
	}
}

function addComma2() {
	var str = event.srcElement;
	var number=(str.value.replace(/,/g, "")).replace(/^\s+/, "");
	number = '' + number;
	if (number.length > 3) {
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');
		for (i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0)){
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			}else{
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
		}
		str.value=output;
	}else{
		str.value=number;
	}
}

//숫자에 컴마를 추가하여 그 값을 반환한다. (value dataType:String)
function addComma3(value) {
	var number=value.replace(/,/g, "");
	number = '' + number;
	if (number.length > 3) {
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');
		for (i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0)){
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			}else{
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
		}
		value=output;
	}else{
		value=number;
	}
	
	return value;
}

//����Ʈ�� ���ڼ� ����

function ChkByte(objName, maxLength) {
	 var objstr = objName.value;
	 var objstrlen = objstr.length;

	 var maxlen = maxLength;
	 var i = 0;
	 var bytesize = 0; // ����Ʈũ��
	 var strlen = 0; // �Էµ� ���ڿ��� ũ��
	 var onechar = ""; // char������ ����� �ʿ��� ����
	 var objstr2 = ""; // ���� ���ڼ������� ������ �������ڿ�

	 // �Էµ� ���ڿ��� �ѹ���Ʈ�� ���ϱ�
	 for(i=0; i< objstrlen; i++) {
	  // �ѱ�������
	  onechar = objstr.charAt(i);

	  if (escape(onechar).length > 4) {
	   bytesize += 2;     // �ѱ��̸� 2�� ���Ѵ�.
	  } else {
	   bytesize++;      // �׹��� ���� 1�� ���Ѵ�.
	  }

	  if(bytesize <= maxlen)  {   // ��ü ũ�Ⱑ maxlen�� ����������
	   strlen = i + 1;     // 1�� ����
	  }
	 }

	 // �ѹ���Ʈ���� ���� ���ڿ��� �ִ밪�� �ʰ��ϸ�
	 if(bytesize > maxlen) {
	  alert( "�ѱ�  "+(maxlen/2)+"��  ����" +maxlen+"��  ���� " +maxlen+"�� �̳��� �Է����ּ���");
	  objstr2 = objstr.substr(0, strlen);
	  objName.value = objstr2;
	 }
	 objName.focus();
}





/*Ư�� ���� �Է� ����*/
function isNotAlphaNumericChar(field,error_msg) {
	var count=0;
	for (i=0;i < field.value.length;i++) {
		if (field.value.charAt(i).search(/[0-9]/) == -1) {
			count++;
		}
	}

	if (count != 0) {
		alert(error_msg);
		field.focus();
		field.select();
		return true;
	}

	return false;
}

	/*Ư������ ġȯ*/
	function cleanQueryTerm(obj) {
		var specialChars='~`!@#$%%^&*-=+\|[{]};:\',<.>/?"';
		var i, j;
		var str=obj.value;

		for (i = 0; i < str.length; i++) {
			for (j = 0; j < specialChars.length; j++) {
				if (str.charAt(i) == specialChars.charAt(j)){
					str = str.replace(str.charAt(i), "");
				}
			}
		}

		obj.value=str;

	}
	// 따옴표, 쌍따옴표 삭제
	function cleanStriptTerm(obj){
		var specialChars='`\'"';
		var i, j;
		var str=obj.value;

		for (i = 0; i < str.length; i++) {
			for (j = 0; j < specialChars.length; j++) {
				if (str.charAt(i) == specialChars.charAt(j)){
					str = str.replace(str.charAt(i), "");
				}
			}
		}

		obj.value=str;
	}


/*���콺 �̺�Ʈ*/

function mouseOverEvent(obj){
	if(obj != "" && obj != null ){
		obj.style.backgroundColor = "#f1f2f3";
	}
}

function mouseOutEvent(obj){
	if(obj != "" && obj != null ){
		obj.style.backgroundColor = "#ffffff";
	}
}



function Displaytab(index) {
	for (var i=1; i<=3; i++){
		if (index == i) {
			thisMenu = eval("atab" + index + ".style");
			thisMenu.display = "";
		}else {
			otherMenu = eval("atab" + i + ".style");
			otherMenu.display = "none";
		}
	}
}



/*
*	체크박스의 값을 Y,N으로 설정
*	2011.05.31 박종우 추가
*/
function onClickCheckbox(obj){
	var objChk = document.getElementById(obj.name);
	if(obj.checked == true){
		objChk.value = "Y";
	} else{
		objChk.value = "N";
	}
}

/*  Lepas  */
//마우스우측버튼,F3,F5,F11,F6,마우스키,쉬프트+링크클릭(새창방지),컨트롤 조합키, 백스페이스,드래그 방지//
// 다음과 같이 body 부분을 수적
// <body background="/images/bg_home.jpg" onselectstart="return false" ondragstart="return false" oncontextmenu="return false;">
var keydownCtrl = 0;
var keydownShift = 0;

document.onkeydown=keycheck;
document.onclick=clickcheck;
document.onkeyup=uncheckCtrlShift;

if(document.captureEvents){
	document.captureEvents(Event.KEYDOWN);
}

function keycheck()
{
	var t= document.activeElement;
	
	
	if(event.srcElement.type == "text" || event.srcElement.type == "textarea" || event.srcElement.type == "password" )
	{
		  switch(event.keyCode)
		  { //키값에 따라         		  	
          	case 116:event.keyCode='';return false; break; //F5         
          	case 93:event.keyCode='';return false; break;//메뉴키
          
		  }
		if(t.getAttribute("readonly") ==true)
		{
			return false;
		}	
		
		return true;		
	}
	
	else{
		//alert(event.srcElement);
	      switch(event.keyCode){ //키값에 따라
	              case 114:event.keyCode='';return false; break; //F3
	              case 116:event.keyCode='';return false; break; //F5
	              case 122:event.keyCode='';return false; break;//F11
	              case 117:event.keyCode='';return false; break;//F6
	              case 93:event.keyCode='';return false; break;//메뉴키
	              //case 16:event.keyCode='';keydownShift=1;return false; break;//쉬프트키
	              //case 17:event.keyCode='';keydownCtrl=1;return false; break;//컨트롤키
	              case 8:event.keyCode='';return false; break;//백스페이스
	      }
	}
    if(keydownCtrl) return false;
}

function clickcheck()
{
      if(keydownShift) return false;
}

function uncheckCtrlShift()
{
   //   if(event.keyCode==17)      keydownCtrl=0;
  //    if(event.keyCode==16)      keydownShift=0;
}

//값이 null일때 빈칸을 리턴한다
function returnNotNull(input) {
    if (input == null || input == "") {
        return "";
    }
    return input;
} 

//null이면true, null이 아니면 false
function isNull(input) {
    if (input == null || input == "") {
        return true;
    }
    return false;
} 



//셀렉트 박스 선택시
function showSelect(selName, selOrder, totalDepth, customYn)
{
  //선택된 값 저장하기
  var valNm = selName + selOrder + selOrder;					// ex. sc + 1 + 1
  //선택 된 값 불러오기
  var selValue = document.getElementById(selName + selOrder).value;		// jsp 상 hidden으로 변수 필요
  document.getElementById(valNm).value = selValue;
  //선택 된 값 ID(실제 Target)
  var selOptions = document.getElementById(selName + selOrder).options;
  var selId = "";
  for(var i=0; i < selOptions.length; i++)
  {
    if(selOptions[i].value == selValue)
    {
      selId = selOptions[i].id;
    }
  }
//  var valTagetNm = selName + selOrder + selOrder + selOrder;
//  document.getElementById(valTagetNm).value = selId;

  //alert("start2");
  var IsCustomSelcet = false;
  if(selOrder < totalDepth)
  {
    //선택 된 Select Tag 다음 Select Tag 값 없애기
	for(var k=selOrder; k < totalDepth; k++)
	{
	  var nexSel = document.getElementById(selName + (parseInt(k) + 1));
	  document.getElementById(selName + (parseInt(k) + 1) + (parseInt(k) + 1)).value = "";
	  var indexVal = 1;
	  while(nexSel.length > 1) 
	  {
        nexSel.remove((nexSel.length - 1));  
	  }
	  
	  // 모바일 버전에서 다음 설렉트 박스 필수값 체크
	  if( document.getElementById("mobile_yn") != undefined && document.getElementById("mobile_yn").value=='Y' ){
		  if($(nexSel).hasClass("essential")){
			  commonUtil.checkEssential(nexSel);
		  }
	  }
    }

    //선택 된 셀렉트 박스 다음 셀렉트 박스 세팅하기
    var hiddenSelOption = document.getElementById((parseInt(selOrder) + 1) + selName + (parseInt(selOrder) + 1)).options;
    var nextSeletTag = document.getElementById(selName + (parseInt(selOrder) + 1));
    //alert("start3");
    for(var j=0; j < hiddenSelOption.length;j++)
    {
      //alert("start4");
      if(selId != "null")
      {
        //alert("start4-1 : " + selId);	
        //alert("start4-2 : " + hiddenSelOption[j].id + "|" + hiddenSelOption[j].value);	
        if((selId + "|" + selValue) == hiddenSelOption[j].id)
        {
          //alert("start4-3");  
          var objOption = document.createElement("option");
          objOption.text  = hiddenSelOption[j].text;
          objOption.value = hiddenSelOption[j].value;
          objOption.id    = hiddenSelOption[j].id;
          nextSeletTag.options.add(objOption);
        }
	  }
	  else
	  {
	    //alert("start5");
	    if(selValue == (hiddenSelOption[j].id))
	    {
		  var objOption = document.createElement("option");
		  objOption.text  = hiddenSelOption[j].text;
		  objOption.value = hiddenSelOption[j].value;
		  objOption.id    = hiddenSelOption[j].id;
		  nextSeletTag.options.add(objOption);
	    }
	  }
    }
    if(selOrder == "1" && customYn == "Y")
    	IsCustomSelcet = true;
  }
  else
	  IsCustomSelcet = true;
 
  // ES ADD(2011.10.26) 
  if(IsCustomSelcet && window.customSelcet)
	  customSelcet();
  
  
  if(customYn=="P")
  {
	  document.getElementById("cha1").value = selValue;
	  showSelect('cha','1','2','Y');
	  
   }
  
}
/**
 * <p>title  : 필수값 체크</p>
 * @author   : 장총명
 * @version  : 2018-11-07
 */
function essentialValChk() {
    var arr = $('[class~=essentialVal]');
    var chkFlag = true;

    $(arr).each(function () {
        var type = $(this).attr("type");

        if ($(this).attr("disabled") != "disabled" && $(this).css('display') != "none") {
            if ($(this).val() == "") {
                alert("필수값은 모두 입력하셔야합니다.");
                $(this).focus();
                chkFlag = false;
                return false;
            }
        }
    });

    if(chkFlag == false)
    {
        return false;
    }
    else
	{
		return true;
	}
}
//Select Tag Init
function settingSelectTag(selName, selOrder, totalDepth)
{
  //alert("start1");

  //선택 된 값 불러오기
  var selValue = document.getElementById(selName + selOrder + selOrder).value;
  //선택 된 값 ID(실제 Target)
  var valTagetNm = "";
  for(var r=1; r <= selOrder; r++)
  {
	if(r == selOrder)
    {
      valTagetNm = valTagetNm + document.getElementById(selName + r + r).value;
    }
	else
    {
      valTagetNm = valTagetNm + document.getElementById(selName + r + r).value + "|";
    }
	
  }
  //alert(valTagetNm);
  var selId = valTagetNm;
  
  var curSelObj = document.getElementById(selName + selOrder);
  
  for(var s = 0; s < curSelObj.options.length; s++)
  {
    if(selValue == curSelObj.options[s].value)
    {
      curSelObj.selectedIndex = s;
    }
  }
	
  //alert("start2");
  if(selOrder < totalDepth)
  {
    //선택 된 Select Tag 다음 Select Tag 값 없애기
	for(var k=selOrder; k < totalDepth; k++)
	{
	  var nexSel = document.getElementById(selName + (parseInt(k) + 1));
	  var indexVal = 1;
	  while(nexSel.length > 1) 
	  {
        nexSel.remove((nexSel.length - 1));  
	  }
    }

    //선택 된 셀렉트 박스 다음 셀렉트 박스 세팅하기
    var hiddenSelOption = document.getElementById((parseInt(selOrder) + 1) + selName + (parseInt(selOrder) + 1)).options;
    var nextSeletTag = document.getElementById(selName + (parseInt(selOrder) + 1));
    //alert("start3");
    for(var j=0; j < hiddenSelOption.length;j++)
    {
      //alert("start4");
      if(selOrder != "1")
      {
        //alert("start4-1 : " + selId + "|" + selValue);	
        //alert("start4-2 : " + hiddenSelOption[j].id);	
        if(selId == hiddenSelOption[j].id)
        {
          //alert("start4-3");  
          var objOption = document.createElement("option");
          objOption.text  = hiddenSelOption[j].text;
          objOption.value = hiddenSelOption[j].value;
          objOption.id    = hiddenSelOption[j].id;
          nextSeletTag.options.add(objOption);
        }
	  }
	  else
	  {
	    //alert("start5");
	    if(selValue == (hiddenSelOption[j].id))
	    {
		  var objOption = document.createElement("option");
		  objOption.text  = hiddenSelOption[j].text;
		  objOption.value = hiddenSelOption[j].value;
		  objOption.id    = hiddenSelOption[j].id;
		  nextSeletTag.options.add(objOption);
	    }
	  }
    }
  }
}


//Select Tag 초기화
function resetSelect(selName, totalDepth)
{
  var oriSel = document.getElementById(selName + "1");
  oriSel.selectedIndex = 0;
  
  document.getElementById(selName + "11").value            = "";
  
  for(var k=1; k < totalDepth; k++)
  {
    var nexSel = document.getElementById(selName + (parseInt(k) + 1));
    document.getElementById(selName + (parseInt(k) + 1) + (parseInt(k) + 1)).value = "";

    var indexVal = 1;
    while(nexSel.length > 1) 
    {
      nexSel.remove((nexSel.length - 1));  
    }
  }
  
}


//Date StringFormat
function makeDateFormat(pdate) 
{ 
  var yy, mm, dd, yymmdd; 
 
  if (pdate.length == 8 ) 
  { 
    yy = pdate.substr(0,4); 
    mm = pdate.substr(4,2); 
    dd = pdate.substr(6,2); 
	
    yymmdd = yy+"-"+mm+"-"+dd; 
  }
  else if(pdate.length == 21)
  {
	  yy = pdate.substr(0,4); 
	  mm = pdate.substr(5,2); 
	  dd = pdate.substr(8,2);
	  
	  yymmdd = yy+"-"+mm+"-"+dd;
  }
  else
  {
	 
    yymmdd = "";
  }
 
  return yymmdd; 
}

function selectAutoOption(commonSelName, sommonSelValue)
{
	var objSelect = document.getElementById(commonSelName);
	var objOptions = objSelect.options;
	for(var s = 0; s < objOptions.length; s++)
	{
		if(objOptions[s].value == sommonSelValue)
		{
			objSelect.selectedIndex = s;
		}
	}
}

//콤마찍기
function setComma(obj) 
{
  if(obj == "null" || obj == "" || obj == "undefined")
  {
	obj = "0";
  }
  var n = obj;
  var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
  n += '';                          // 숫자를 문자열로 변환
  while (reg.test(n))
  n = n.replace(reg, '$1' + ',' + '$2');  
  return n;   
}

//콤마찍기 and 숫자체크
function commanAndNum(obj) 
{
  var n = obj.value;
  n = onlyNumber(n);
  if(n != "")
  {
	if(n.length > 1)
	{
	  var firstNum = n.charAt(0);
	  var secondNum = n.charAt(1);
	  if(firstNum == "0" && secondNum != ".")
	  {
		alert("숫자 형식이 아닙니다.");
		n = "";
	  }
	  else
	  {
		var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
		n += '';                          // 숫자를 문자열로 변환
		while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');    
	  }
	}
	else
    {
      if(!(parseFloat(n) || parseFloat(n) == 0))
	  {
		alert("숫자 형식이 아닙니다.");
		n = "";
	  }
	  else
	  {
	    var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
	    n += '';                          // 숫자를 문자열로 변환
	    while (reg.test(n))
	    n = n.replace(reg, '$1' + ',' + '$2');    
	  }
    }
	
  }
  obj.value = n;    
}


//콤마찍기 and 숫자체크
function commanAndNumAllowMinus(obj) 
{
  var n = obj.value;
  n = onlyNumber(n);
  if(n != "")
  {
	if(n.length > 1)
	{
	  var firstNum = n.charAt(0);
	  var secondNum = n.charAt(1);
	  if(firstNum == "0" && secondNum != ".")
	  {
		alert("숫자 형식이 아닙니다.");
		n = "";
	  }
	  else
	  {
		var reg = /^([-]?[0-9]{1})([0-9])*$/;   // 정규식
		n += '';                          // 숫자를 문자열로 변환
		while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');    
	  }
	}
	else
    {
      if(!(parseFloat(n) || parseFloat(n) == 0))
	  {
		alert("숫자 형식이 아닙니다.");
		n = "";
	  }
	  else
	  {
	    var reg = /^([-]?[0-9]{1})([0-9])*$/;   // 정규식
	    n += '';                          // 숫자를 문자열로 변환
	    while (reg.test(n))
	    n = n.replace(reg, '$1' + ',' + '$2');    
	  }
    }
	
  }
  obj.value = n;    
}


//숫자체크
function onlyNumber(objVal) 
{
	var replaceNum = unNumberFormat(objVal);
	var preNum = replaceNum;
	if(/[^0123456789.]/g.test(replaceNum)) 
	{
	  preNum = preNum.replace(/[^0-9]/g, '');
	  //for (i = 0; i < (replaceNum.length - 1); i++)
	  //{
	  //	  preNum = preNum + replaceNum.charAt(i);
	  //}
	  alert("숫자가 아닙니다.\n\n0-9의 정수만 허용합니다.");
	}

	//if(replaceNum.length > 1)
	//{
    //
	//  if(replaceNum.charAt(0) == 0)
	//  {
	//	if(preNum != "")
	//	{
	//		alert("첫자리 0은 허용하지 않습니다.");
	//	}
	//	preNum = "";
	//  }
	//}	
	
  return preNum;
}


//숫자체크
function onlyNumberAllowMinus(objVal) 
{
	var replaceNum = unNumberFormat(objVal);
	var preNum = replaceNum;
	if(/^([-]?[0-9]{1})([0-9])*$/.test(replaceNum)) 
	{
	  preNum = preNum.replace(/[^0-9]/g, '');
	  //for (i = 0; i < (replaceNum.length - 1); i++)
	  //{
	  //	  preNum = preNum + replaceNum.charAt(i);
	  //}
	  alert("숫자가 아닙니다.\n\n0-9의 정수만 허용합니다.");
	}

	//	}
	//	preNum = "";
	//  }
	//}	
	
  return preNum;
}


// 정수(양수,음수)와 콤마 셋팅
function isNumMinus(obj)
{
	var preNum = obj.value;
	
	//var regex = /^[+-]?\d*(\.?\d*)$/; // original
	var regex = /^[+-]?\d*$/;
	if(regex.test(removeComma(obj.value)))
	{
		n = obj.value;
	}
	else
	{
		alert("숫자가 아닙니다.\n\n0-9의 정수만 허용합니다.");
		n = "";	
	}
	obj.value = setComma(n);
}

//콤마제거
function unNumberFormat(num) 
{
	return (num.replace(/\,/g,""));
}  

//따옴표 및 공백제거
function replaceAllSpace(num) 
{
	return ((num.replace(/\s/g,"")).replace(/\'/g, ""));
}  

//따옴표 및 공백제거
function replaceAllSpetiolType(str) 
{
	return (str.replace(/\|/g,"     "));
}  

//iframe resize
function selfResize()
{
	var iframeObj = parent.document.getElementById("mainIframe");
	$(iframeObj).css("height", parseInt($("#contents").css("height").replace("px", "")) + 40);
	//parent.document.getElementById("mainIframe").style.height = document.body.scrollHeight + 30;
	//$("#contents").css("maxWidth", "950");
	//var iframeObj = parent.document.getElementById("mainIframe");
	//$(iframeObj).css("height", document.body.scrollHeight + 30);
	//self.resizeTo(document.documentElement.scrollWidth, (document.documentElement.scrollHeight + 30));
	//self.resizeTo(document.body.scrollWidth , (document.body.scrollHeight + 30));
}

function emailResize()
{
	self.resizeTo(document.body.scrollWidth , (document.body.scrollHeight + 430));
}

//iframe resize2
function autoResize()
{
	self.resizeTo((document.body.scrollWidth)+20, (document.body.scrollHeight)+60);
}

//공지사항 팝업용 resize
function popupResize()
{
	self.resizeTo(document.body.scrollWidth , (document.body.scrollHeight + 80));
}

//textarea maxlength
function limit(obj)
{
	var maxLength = parseInt(obj.getAttribute("maxlength"));
	if(obj.value.length > maxLength)
	{
		alert("글자수를 초과하였습니다.");
		
		obj.value = obj.value.substring(0, maxLength);
	}
}

function goNextInput(event,nextId)
{
	var next = document.getElementById(nextId);
	if(event.keyCode == 13)
	{		
		next.focus();
	}		 
	return true; 
}

function makeAndValiDate(objDate)
{
  var objDt = objDate.value;
  
  var strDt = objDt.split("-").join("");
  
  if(/[^0123456789]/g.test(strDt)) 
  {
	objDate.value = "";
	alert("잘못된 형식입니다.");
  }
  else
  {
    if(strDt.length == 4)
    {
	  var yearStr = strDt.substring(0, 4);
	  yearStr = onlyNumber(yearStr);
	  if(yearStr == "")
	  {
	    objDate.value = "";
	    alert("잘못된 형식입니다.");
	  }
	  else
      {
	    var yearNum = parseInt(yearStr);
	    if(yearNum < 1900 || yearNum > 2100)
	    {
		  objDate.value = "";
		  alert("잘못된 형식입니다.");
	    }
	    else
        {
		  objDate.value = strDt;
        }
      }
    }
    else if(strDt.length == 5)
    {
	  var mon1Str = strDt.substring(4, 5);
	  if(mon1Str == "0" || mon1Str == "1")
	  {
	    objDate.value = strDt.substring(0, 4) + "-" + strDt.substring(4, 5);
	  }
	  else
	  {
	    objDate.value = "";
	    alert("잘못 된 형식입니다.");
	  }
    }
    else if(strDt.length == 6)
    {
	  var mon2Str = strDt.substring(5, 6);
	  if(/[^0123456789]/g.test(mon2Str)) 
	  {
	    mon2Str = "";
	    alert("숫자가 아닙니다.\n\n0-9의 정수만 허용합니다.");
	  }
	
	  if(!mon2Str == "")
	  {
	    if(strDt.substring(4, 5) == "1")
	    {
		  if(mon2Str == "0" || mon2Str == "1" || mon2Str == "2")
		  {
		    objDate.value = strDt.substring(0, 4) + "-" + strDt.substring(4, 6);
		  }
		  else
		  {
		    objDate.value = "";
		    alert("잘못 된 형식입니다.");
		  }
	    }
	  }
	  else
	  {
	    objDate.value = "";
	    alert("잘못 된 형식입니다.");
	  }
    }
    else if(strDt.length == 7)
    {
	  if(strDt.substring(6, 7) == "0" || strDt.substring(6, 7) == "1" || strDt.substring(6, 7) == "2" || strDt.substring(6, 7) == "3")
	  {
	    if(strDt.substring(4, 5) == "0" && strDt.substring(5, 6) == "2" && strDt.substring(6, 7) == "3")
	    {
		  objDate.value = "";
		  alert("잘못 된 형식입니다.");
	    }
	    else
	    {
		  objDate.value = strDt.substring(0, 4) + "-" + strDt.substring(4, 6) + "-" + strDt.substring(6, 7);
	    }
	  }
	  else
	  {
	    objDate.value = "";
	    alert("잘못 된 형식입니다.");
	  }
    }
    else if(strDt.length == 8)
    {
	  CheckDate(objDate);
    }
  }
  
  
}

//날짜유효성체크하기
function CheckDate(objDt) 
{
  var strDt = objDt.value.split("-").join("");
	
  if(strDt.length == 8)
  {
	var dateYear  = strDt.substring(0, 4);
	var dateMonth = strDt.substring(4, 6);
	var dateDay   = strDt.substring(6, 8);
		
	var err = 0;
	if(dateYear.length != 4) err = 1;
	if(dateMonth.length != 1 && dateMonth.length !=2) err = 1;
	if(dateDay.length != 1 && dateDay.length != 2) err = 1;

	var intdateYear = eval(dateYear);
	var intdateMonth = eval(dateMonth);
	var intdateDay = eval(dateDay);

	if( intdateMonth < 1 || intdateMonth > 12 ) err = 1;
	if( intdateDay < 1 || intdateDay > 31 ) err = 1;
	if( intdateYear < 0 ) err = 1;
	      
	if( intdateMonth == 4 || intdateMonth == 6 || intdateMonth == 9 || intdateMonth == 11) 
	{
	  if( intdateDay == 31 ) err = 1;
	}

	// 윤년체크
	if ( intdateMonth == 2 ) 
	{
	  var intTemp = parseInt(intdateYear/4);
	    
	  if(isNaN(intTemp)) 
	  {
	    err = 1;
	  }
      if(intdateDay > 29) err = 1;
	    if(intdateDay == 29 && ((intdateYear/4) != parseInt(intdateYear/4))) err = 1;
	}

	if(err == 1)
    {
	  objDt.value = "";
	  alert("잘못 된 형식입니다.");
    }
	else
	{
	  if(document.getElementById("appDiv"))
	  {
		if(document.getElementById("appDiv").value == "appDiv")
	    {
		  if(objDt.id == "lelease_schd")
		  {
			getPromotion();  
		  }
		  
	    }
		  
	  }
	  objDt.value = strDt.substring(0, 4) + "-" + strDt.substring(4, 6) + "-" + strDt.substring(6, 8);
	}
  }
  else
  {
	objDt.value = "";
	alert("잘못 된 형식입니다.");
  }

  
}

//날짜유효성체크하기
function CheckDate2(objDt) 
{
  var strDt = objDt.value.split("-").join("");
	
  if(strDt.length == 8)
  {
	var dateYear  = strDt.substring(0, 4);
	var dateMonth = strDt.substring(4, 6);
	var dateDay   = strDt.substring(6, 8);
		
	var err = 0;
	if(dateYear.length != 4) err = 1;
	if(dateMonth.length != 1 && dateMonth.length !=2) err = 1;
	if(dateDay.length != 1 && dateDay.length != 2) err = 1;

	var intdateYear = eval(dateYear);
	var intdateMonth = eval(dateMonth);
	var intdateDay = eval(dateDay);

	if( intdateMonth < 1 || intdateMonth > 12 ) err = 1;
	if( intdateDay < 1 || intdateDay > 31 ) err = 1;
	if( intdateYear < 0 ) err = 1;
	      
	if( intdateMonth == 4 || intdateMonth == 6 || intdateMonth == 9 || intdateMonth == 11) 
	{
	  if( intdateDay == 31 ) err = 1;
	}

	// 윤년체크
	if ( intdateMonth == 2 ) 
	{
	  var intTemp = parseInt(intdateYear/4);
	    
	  if(isNaN(intTemp)) 
	  {
	    err = 1;
	  }
      if(intdateDay > 29) err = 1;
	    if(intdateDay == 29 && ((intdateYear/4) != parseInt(intdateYear/4))) err = 1;
	}

	if(err == 1)
    {
	  objDt.value = "";
	  alert("잘못 된 형식입니다.");
	  objDt.focus();
	  //if(objDt.id == "lelease_schd")
	  //{
	  //  valiFailInfo();
	  //}
    }
  }
  else
  {
	if(objDt.value != "")
	{
	  objDt.value = "";
	  alert("잘못 된 형식입니다.");
	  //if(objDt.id == "lelease_schd")
	  //{
	  //  valiFailInfo();
	  //}
	  objDt.focus();
	}
	
  }

}

//날짜유효성체크하기
function CheckDate3(dateString) 
{
  var strDt = dateString.split("-").join("");
	
  if(strDt.length == 8)
  {
	var dateYear  = strDt.substring(0, 4);
	var dateMonth = strDt.substring(4, 6);
	var dateDay   = strDt.substring(6, 8);
		
	var err = 0;
	if(dateYear.length != 4) err = 1;
	if(dateMonth.length != 1 && dateMonth.length !=2) err = 1;
	if(dateDay.length != 1 && dateDay.length != 2) err = 1;

	var intdateYear = eval(dateYear);
	var intdateMonth = eval(dateMonth);
	var intdateDay = eval(dateDay);

	if( intdateMonth < 1 || intdateMonth > 12 ) err = 1;
	if( intdateDay < 1 || intdateDay > 31 ) err = 1;
	if( intdateYear < 0 ) err = 1;
	      
	if( intdateMonth == 4 || intdateMonth == 6 || intdateMonth == 9 || intdateMonth == 11) 
	{
	  if( intdateDay == 31 ) err = 1;
	}

	// 윤년체크
	if ( intdateMonth == 2 ) 
	{
	  var intTemp = parseInt(intdateYear/4);
	    
	  if(isNaN(intTemp)) 
	  {
	    err = 1;
	  }
      if(intdateDay > 29) err = 1;
	    if(intdateDay == 29 && ((intdateYear/4) != parseInt(intdateYear/4))) err = 1;
	}

	if(err == 1)
    {
	  dateString = "";
	  //if(objDt.id == "lelease_schd")
	  //{
	  //  valiFailInfo();
	  //}
    }
	else
	{
		dateString = dateString.substring(0,4)+ "-" +dateString.substring(4,6)+"-"+dateString.substring(6,8);
	}
  }
  else
  {
	if(dateString != "")
	{
		dateString = "";
	  //if(objDt.id == "lelease_schd")
	  //{
	  //  valiFailInfo();
	  //}
	}
	
  }
  return dateString;
}

function chkSpecialStr(chkStr)
{
	var objChk = chkStr.replace(/-/g, "");
	
	if(objChk == "")
	{
		return "";
	}
	else
	{
		return chkStr;
	}
	
}



function trim(txt)
{
 return txt.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 오늘 날짜 반환
 * ex)dateSeperater = "-", timeSeperater = ":" --> YYYY-MM-DD HH:MM\n</p>
 * 기본 YYYYMMDD HHMM
 * @author  : 복영훈 </p>
 * @version : 2012-02-07</p>
 * @param dateSeperater 날짜를 나눌 문자열
 * @param timeSeperater 시간을 나눌 문자열
 * @returns YYYY+dateSeparater+MM+dateSeparater+DD HH+timeSeperater+MM
 * */
function today(dateSeparater, timeSeparater){
	var date = new Date();
	var today;
	var year= date.getFullYear();
    var mon = (date.getMonth()+1)>9 ? ''+(date.getMonth()+1) : '0'+(date.getMonth()+1);
    var day = date.getDate()>9 ? ''+date.getDate() : '0'+date.getDate();
    
	today = year+dateSeparater+mon+dateSeparater+day+" "+date.getHours()+timeSeparater+date.getMinutes();
	return today;
}


function setSpin()
{

	//Cancel the link behavior
	//e.preventDefault();
	//Get the A tag
	var id = "#dialogPar";
	
	//Get the screen height and width
	var maskHeight = $(document).height();

	var maskWidth = 1500;
	
	//Set heigth and width to mask to fill up the whole screen
	$('#mask').css({'width':maskWidth,'height':maskHeight});
	
	//transition effect		
	$('#mask').fadeIn(0);	
	$('#mask').fadeTo("fast",0.8);	

	//Get the window height and width
	var winH = screen.height - 500;
	var winW = 1280;
	
	//Set the popup window to center
	$('#dialogPar').css('top', winH/2-$(id).height()/2);
	$('#dialogPar').css('left', winW/2-$(id).width()/2);

	//transition effect
	$('#dialogPar').fadeIn(300); 

}

function closeSpin()
{	
	$('#mask').hide();
	$('.window').hide();
}

/**
 * 숫자를 콤마가 들어간 금액형식으로 반환
 * @author  : 복영훈 </p>
 * @version : 2012-03-16</p>
 * @param strValue String타입의 숫자
 * @returns XX,XXX,XXX
 * */
function addComma3(strValue){
	var objRegExp = new RegExp('(-?[0-9]+)([0-9]{3})'); 
	while(objRegExp.test(strValue)) { 
		strValue = strValue.replace(objRegExp, '$1,$2'); 
	} 
	return strValue; 
}

/**
 * 콤마가 들어간 금액형식의 String에서 콤마 제거한 숫자만 반환
 * @author  : 복영훈 </p>
 * @version : 2012-03-16</p>
 * */
function removeComma(str){
	return str.replace(/,/gi,"");
}

/**
 * 엘리먼트의 value값을 반환
 * @author  : 복영훈 </p>
 * @param id 값을 가져올 Element의 id
 * @version : 2012-03-16</p>
 * */
function getElementValue(id){
	return document.getElementById(id).value;
}

/**
 * 엘리먼트를 비워주는 함수
 * @author  : 복영훈 </p>
 * @param id 비워줄 Element의 id
 * @version : 2012-03-16</p>
 * */              
function resetElementValue(id){
	document.getElementById(id).value = "";
}


/**
 * 엘리먼트에 값을 넣어주는 함수
 * @author  : 복영훈 </p>
 * @param id 값을 넣어줄 Element의 id
 * @param value 넣어줄 값
 * @version : 2012-03-16</p>
 * */
function setElementValue(id,value){
	document.getElementById(id).value = value;
}

/**
 * 특정 Element의 value가 비어있는지 확인하는 함수
 * @author  : 복영훈 </p>
 * @param id 확인할 Element의 id
 * @version : 2012-03-16</p>
 * @return 비어있을 경우 "empty", 비어있지 않을 경우 "true"
 * */
function isEmpty(id){
	if(document.getElementById(id).value == ""){
		return "empty";
	}
	return "true";
}

/**
 * 특정 Element object반환
 * @author  : 복영훈 </p>
 * @param id 원하는 Element의 id값
 * @version : 2012-03-16</p>
 * */
function getElement(id){
	return document.getElementById(id);
}

function popSetSpin(ment)
{
	
	var loadingMent = ment;
	
	if(loadingMent == "")
	{
	  loadingMent = '로딩중입니다..';
	}
	
	var strHide = "<div id='popMask'></div>";
	var dialog = "<div id='popDialogPar' class='popWindow'><img src='/images/layout/ajax-loader.gif'/><span id='dialog'>" + loadingMent + "</span></div>";

	//$("#bbbbody").append(strAllDiv);
	$("body").append(strHide);
	$("body").append(dialog);
	
	var id = "#popDialogPar";
	
	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(document).width();
	
	//Set heigth and width to mask to fill up the whole screen
	$('#popMask').css({'width':maskWidth,'height':maskHeight});
	
	//transition effect		
	$('#popMask').fadeIn(0);	
	$('#popMask').fadeTo("fast",0.8);	

	//Get the window height and width
	var winH = maskHeight - 150;
	var winW = maskWidth;
	
	//Set the popup window to center
	$('#popDialogPar').css('top', winH/2-$(id).height()/2);
	$('#popDialogPar').css('left', winW/2-$(id).width()/2);

	//transition effect
	$('#popDialogPar').fadeIn(300); 
}

/**
 * 기준일로 부터 이전날짜
 * @author  : 한민경 </p>
 * @param d 기준일
 * @param period 기간
 * @version : 2013-11-27</p>
 * */
function getFBaseBeforeDate(d, period) {
	return BaseFormatDate("-", d, period);
}

/**
 * 기준일로 부터 이후날짜
 * @author  : 한민경 </p>
 * @param d 기준일
 * @param period 기간
 * @version : 2013-11-27</p>
 * */
function getFBaseAfterDate(d, period) {
	 return BaseFormatDate("+", d, period);
}

/**
 * 기준일로 날짜 계산
 * @author  : 한민경 </p>
 * @param sign 이전/이후 구분자
 * @param d 기준일
 * @param period 기간
 * @version : 2013-11-27</p>
 * */
function BaseFormatDate(sign, d, period) {
  var sign = (sign == "+" || sign === NaN || sign === undefined || sign == null ||sign == "") ? 1 : -1;
  
  var val = period.substring(0, period.length - 1);
  var val = val * sign;
  var datePattern = period.substring(period.length - 1);
  var ret = NaN;
  switch(datePattern) {
    case "D" :
      ret = StringDateAddDay(d, val);
      break;
    case "W" :
      ret = StringDateAddWeek(d, val);
      break;
    case "M" :
      ret = StringDateAddMonth(d, val);
      break;
  }
  
  return ret;
}

/**
 * 기준일로 날짜 계산 - day
 * @author  : 한민경 </p>
 * @param d 기준일
 * @param addDay 기간
 * @version : 2013-11-27</p>
 * */
function StringDateAddDay(d, addDay){
  if(d === NaN || d === undefined || d == null ||d == "")
    return ;
  
  var strParam = d.replace(/-/gi, "");
  var tDate = d.length == 0 ? new Date() : new Date(strParam.substring(0,4), strParam.substring(4,6) - 1, strParam.substring(6,8), 0, 0, 0, 0);
  tDate.setDate(tDate.getDate() + addDay);
  
  return [tDate.getFullYear(), leftPad((tDate.getMonth() + 1).toString(), '0', 2), leftPad((tDate.getDate()).toString(), '0', 2)].join('-');
}

/**
 * 기준일로 날짜 계산 - week
 * @author  : 한민경 </p>
 * @param d 기준일
 * @param addWeek 기간
 * @version : 2013-11-27</p>
 * */
function StringDateAddWeek(d, addWeek){
  return StringDateAddDay(d, addWeek*7);
}

/**
 * 기준일로 날짜 계산 - month
 * @author  : 한민경 </p>
 * @param d 기준일
 * @param addMonth 기간
 * @version : 2013-11-27</p>
 * */	
function StringDateAddMonth(d, addMonth){
  if(d === NaN || d === undefined || d == null ||d == "")
    return ;
  
  var strParam = d.replace(/-/gi, "");
  
  var tDate = d.length == 0 ? new Date() : new Date(strParam.substring(0,4), strParam.substring(4,6), strParam.substring(6,8), 0, 0, 0, 0);
  addMonth = Number(addMonth);
  tDate.setMonth(tDate.getMonth() + addMonth -1 );
  return [tDate.getFullYear(), leftPad((tDate.getMonth() + 1).toString(), '0', 2), leftPad((tDate.getDate()).toString(), '0', 2)].join('-');
}

//문자열 처리 : 자리수 채우기 함수
function leftPad(str, fillChar, length) {
	if(fillChar.length !== 1)
	{
		alert('fillChar must be a single character');
		return "";
	}
	
	if(str.length > length)
		return str;
 
	var returnStr = "";
	var i;
	for(i=str.length; i < length; i++)
		returnStr += fillChar;
	
	returnStr += str;
	return returnStr;
};	

//현재 시간 구하는 함수
function getCurrentTime() {
	var date = new Date();
	var year = leftPad(date.getFullYear(), '0', 4);
	var month = leftPad((date.getMonth() + 1).toString(), '0', 2);
	var day = leftPad((date.getDate()).toString(), '0', 2);
	var hour = leftPad(date.getHours().toString(), '0', 2);
	var minute = leftPad(date.getMinutes().toString(), '0', 2);
	var second = leftPad(date.getSeconds().toString(), '0', 2);
	
	return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}


	
//셀렉트 박스 초기화 하기
function initSelectBox(id, value){
	var selectArr = getElement(id);
	
	for(var i=0; i<selectArr.length; i++){
		if(selectArr[i].value == value)
			selectArr[i].selected = true;
	}
}


function setPopupSpin()
{
  //Cancel the link behavior
  //e.preventDefault();
  //Get the A tag
  var id = "#dialogParPopup";
  
  //Get the screen height and width
  var maskHeight = $(document).height();

  var maskWidth = $(document).width();
  
  //Set heigth and width to mask to fill up the whole screen
  $('#maskPopup').css({'width':maskWidth,'height':maskHeight});
  $('#maskPopup').css('top', 0);
  
  $('#maskPopup').css('left', 0);
  
  //transition effect   
  $('#maskPopup').fadeIn(0); 
  $('#maskPopup').fadeTo("fast",0.8);  

  //Get the window height and width
  var winH = document.documentElement.clientHeight;//maskHeight;
  var winW = maskWidth;

  //Set the popup window to center
  $('#dialogParPopup').css('top',  winH/2-$(id).height()/2);
  $('#dialogParPopup').css('left', (parseInt(winW)/2)-(parseInt($(id).width())/2));

  //transition effect
  $('#dialogParPopup').fadeIn(300); 
}

function closePopupSpin()
{ 
  $('#maskPopup').hide();
  $('.windowPopup').hide();
}


//object to string
function ObjectToString(obj)
{
	obj.toString = function() 
	{ 
		var output='';  
		for(var key in obj)
		{       
			if(key != 'toString')          
			output += key + ': ' + obj[key] + ', ';   
		}   
		 return output;
	};
	return obj.toString();
}

// 팝업 POST, f : 넘길 form id
function popUpPost(url, n, w, h, f) 
{
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	var	winprops = 'height=' + h + ',width=' + w +',top=' + wint + ',left=' + winl + ',scrollbars=no,resizable=yes,location=no';	 
	win = window.open('', n, winprops);
	
	$('#'+f).prop("action", url).prop('method', 'post').prop('target', n).submit().prop('target', '_self');
}

//전체 체크/체크해제
function checkedAll(allChkNm, eachChkNm){
	$("#" + allChkNm).on('click',function(event){
		if($("#" + allChkNm).is(":checked"))
		{
			$(":checkbox[name='" + eachChkNm + "']").each(function()
			{
				if(!$(this).attr("disabled"))
				{
					$(this).prop("checked", true);
				}
			});
		}
		else
		{
			$("input:checkbox[name='" + eachChkNm + "']").prop("checked", false);
		}
	});
}

//체크박스 체크한 value string으로 받아오기
function checkedValue(eachChkNm){
	var valueString = "";
	
	$(":checkbox[name='" + eachChkNm + "']:checked").each(function(){
		if(valueString == "")
		{
			valueString = "'" + $(this).val() + "'";
		}
		else
		{
			valueString += ",'" + $(this).val() + "'";
		}
	});
	
	return valueString;
}