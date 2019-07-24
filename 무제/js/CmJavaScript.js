var ERROR_00010 = "";
var ERROR_00020 = "";
var ERROR_00030 = "";
var ERROR_00040 = "";
var ERROR_00050 = "";
var ERROR_00060 = "";
var YMDARR = new Array(0, 4, 6, 8, 4, 7, 6, 8);
var DMYARR = new Array(0, 2, 4, 8, 2, 5, 2, 6);
var MDYARR = new Array(0, 2, 4, 8, 2, 5, 2, 6);

var DATEFMTARR = "";
var CURRDATEFMT = "";
var dateformat ="";

if(dateformat == "MMDDYYYY") {
	DATEFMTARR = MDYARR;
    CURRDATEFMT = "mdy";
}
else if(dateformat == "YYYYMMDD") {
	DATEFMTARR = YMDARR;
	CURRDATEFMT = "ymd"
}
else if(dateformat == "DDMMYYYY") {
	DATEFMTARR = DMYARR;
	CURRDATEFMT = "dmy";
}

var SU_COMMA = ',';

function setErrorMsg(arrErrorMsg)
{
  ERROR_00010 = arrErrorMsg[0];
  ERROR_00020 = arrErrorMsg[1];
  ERROR_00030 = arrErrorMsg[2];
  ERROR_00040 = arrErrorMsg[3];
  ERROR_00050 = arrErrorMsg[4];
  ERROR_00060 = arrErrorMsg[5];
}

function setDefErrorMsg(strErrorMsg)
{
  ERROR_00010 = strErrorMsg;
  ERROR_00020 = strErrorMsg;
  ERROR_00030 = strErrorMsg;
  ERROR_00040 = strErrorMsg;
  ERROR_00050 = strErrorMsg;
  ERROR_00060 = strErrorMsg;
}

function MM_preloadImages()
{
  var d = document;
  if(d.images)
  {
    if(!d.MM_p)
      d.MM_p = new Array();
    var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
    for(i = 0; i < a.length; i++)
    {
      if(a[i].indexOf("#") != 0)
      {
        d.MM_p[j] = new Image;
        d.MM_p[j++].src = a[i];
      }
    }
  }
}

function MM_swapImgRestore()
{
  var i, x, a = document.MM_sr;
  for(i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++)
    x.src = x.oSrc;
}

function MM_findObj(n, d)
{
  var p, i, x;
  if(!d)
    d = document;
  if((p=n.indexOf("?")) > 0 && parent.frames.length)
  {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if(!(x = d[n]) && d.all)
    x = d.all[n];
  for(i = 0; !x && i < d.forms.length; i++)
    x = d.forms[i][n];
  for(i = 0; !x && d.layers && i < d.layers.length; i++)
    x = MM_findObj(n, d.layers[i].document);
  if(!x && d.getElementById)
    x = d.getElementById(n);
  return x;
}

function MM_swapImage()
{
  var i, j = 0, x, a = MM_swapImage.arguments;
  document.MM_sr = new Array;
  for(i = 0; i < (a.length - 2); i+=3)
  if((x = MM_findObj(a[i])) != null)
  {
    document.MM_sr[j++] = x;
    if(!x.oSrc)
      x.oSrc = x.src;
    x.src = a[i+2];
  }
}

function addDelimiterDate(objDate, nLength)
{
  if(nLength == null) nLength = 8;
  var newVal  = "";
  if(objDate.value.length < 5 || objDate.value.length > 9)
    return;
  if(objDate.value.length == nLength)  //Date�� 8�ڸ� �ΰ��
  {
    newVal = objDate.value.substring(DATEFMTARR[0],DATEFMTARR[1]);
    newVal += DELIMITER;
    newVal += objDate.value.substring(DATEFMTARR[1],DATEFMTARR[2]);
    if(nLength == 8)
    {
      newVal += DELIMITER;
      newVal += objDate.value.substring(DATEFMTARR[2],DATEFMTARR[3]);
    }
  }
  //Date�� 6�ڸ� �ΰ��
  else if(objDate.value.length == 6)
  {
    newVal = objDate.value.substring(DATEFMTARR[0],DATEFMTARR[1]);
    newVal += DELIMITER;
    newVal += objDate.value.substring(DATEFMTARR[6],DATEFMTARR[7]);
  }
  else
  {
    for(var x = 0; x < objDate.value.length ; x++)
    {
      ch = objDate.value.substring(x, x + 1);
      if(ch == DELIMITER)
        return;
    }
    newVal += objDate.value.substring(DATEFMTARR[0], DATEFMTARR[1]);
    newVal += DELIMITER;
    newVal += objDate.value.substring(DATEFMTARR[1], DATEFMTARR[2]);
    if(nLength == 8)
    {
      newVal += DELIMITER;
      newVal += objDate.value.substring(DATEFMTARR[2], DATEFMTARR[3]);
    }
  }
  objDate.value = newVal;
  return;
}

function delDelimiterDate(objDate, nLength)
{
  if(nLength == null) nLength = 10;
  var x, ch;
  var i = 0;
  var newVal = "";
  if(objDate.value.length != nLength && objDate.value.length != 7)
    return;
  for(x = 0; x < objDate.value.length; x++)
  {
    ch = objDate.value.substring(x, x + 1);
    if(ch != DELIMITER)
      newVal += ch;
  }
  objDate.value = newVal;
  objDate.focus();
  objDate.select();
  return;
}

function calendarForPopup(txtDate, x, y)
{
	var passArgument = document.all(txtDate).value;
	if(DELIMITER == "/") {
	 if(passArgument == '9999/99/99' || passArgument == '99/99/9999')
			passArgument = '';
		if((screen.width - 245) < x)
			x = screen.width - 265;
			if((screen.height - 260) < y)
				y = screen.height - 270
	}
	else if(DELIMITER == "-") {
		if(passArgument == '9999-99-99' || passArgument == '99-99-9999')
			passArgument = '';
		if((screen.width - 245) < x)
			x = screen.width - 265
			if((screen.height - 260) < y)
				y = screen.height - 270
	}
	var value = window.showModalDialog('/common/Calendar.jsp', passArgument, 'dialogWidth:350px; dialogHeight:350px; dialogLeft:' + x + '; dialogTop:' + y + '; resizable:yes; status:no; scroll:no');
	if(value != null)
	{
		document.all(txtDate).value = value;
		if(document.all(txtDate).disabled == false)
			document.all(txtDate).focus();

		if(document.getElementById("appDiv"))
		{
			if(txtDate == "lelease_schd")
			{
				searchPromotion();
			}

		}
		else if(document.getElementById("dateFunction"))
		{
			if(txtDate == "startDate" || txtDate == "endDate")
			{
				actChkDate(txtDate);
			}
			if(txtDate == "reserveDate")
			{
				var date = new Date();
				var yy, mm, dd;
				yy = date.getFullYear();
				mm = date.getMonth() + 1;
				if (("" + mm).length == 1) { mm = "0" + mm; }
				dd = date.getDate();
				if (("" + dd).length == 1) { dd = "0" + dd; }
				reserve = ((document.getElementById(txtDate).value).replace("-", "")).replace("-", "");
				var nowDate = yy.toString() + mm.toString() + dd.toString();
				if(parseInt(reserve) < parseInt(nowDate))
				{
					alert(' 오늘 이전 날짜는 선택 할 수 없습니다 ');
					reserveChkDate(nowDate);
				}
			}
		}

	}
	
	var gur = document.getElementById("setGuarantee");
	// 보증기간 만료일 setting
	if(gur!=null)
	{
		if(gur.value)
		{
			setGuaranteeDt(txtDate);
		}
	}
	
	
	
}

function calendarForLetter(txtDate, x, y)
{
	var passArgument = document.all(txtDate).value;
	if(DELIMITER == "/") {
	 if(passArgument == '9999/99/99' || passArgument == '99/99/9999')
			passArgument = '';
		if((screen.width - 245) < x)
			x = screen.width - 265
			if((screen.height - 260) < y)
				y = screen.height - 270
	}
	else if(DELIMITER == "-") {
		if(passArgument == '9999-99-99' || passArgument == '99-99-9999')
			passArgument = '';
		if((screen.width - 245) < x)
			x = screen.width - 265
			if((screen.height - 260) < y)
				y = screen.height - 270
	}
	var value = window.showModalDialog('/common/Calendar.jsp', passArgument, 'dialogWidth:350px; dialogHeight:350px; dialogLeft:' + x + '; dialogTop:' + y + '; resizable:yes; status:no; scroll:no');
	if(value != null)
	{
		var dateArray = value.split("-");
		value = dateArray[0]+"년 "+dateArray[1]+"월 "+dateArray[2]+"일";
		document.all(txtDate).value = value;
	}
}


function calendarForPopup2(startDate,endDate, x, y, btn)
{ 
	var txtDate ="";
	var passArgument = "";

	if(btn == "start")
	{
		passArgument = document.all(startDate).value;
		txtDate = startDate;
	}
	else
	{
		passArgument = document.all(endDate).value;
		txtDate = endDate;
	}
		
 // var passArgument = document.all(txtDate).value;
  if(DELIMITER == "/") {
    if(passArgument == '9999/99/99' || passArgument == '99/99/9999')
      passArgument = '';
    if((screen.width - 245) < x)
      x = screen.width - 265;
    if((screen.height - 260) < y)
      y = screen.height - 270;
  }
  else if(DELIMITER == "-") {
    if(passArgument == '9999-99-99' || passArgument == '99-99-9999')
      passArgument = '';
    if((screen.width - 245) < x)
      x = screen.width - 265;
    if((screen.height - 260) < y)
      y = screen.height - 270;
  }
  var value = window.showModalDialog('/common/Calendar.jsp', passArgument, 'dialogWidth:350px; dialogHeight:350px; dialogLeft:' + x + '; dialogTop:' + y + '; resizable:yes; status:no; scroll:no');
  if(value != null)
  {
    document.all(txtDate).value = value;
    if(document.all(txtDate).disabled == false)
      document.all(txtDate).focus();
 
	if(document.getElementById("appDiv"))
	{
	  if(txtDate == "lelease_schd")
	  {
		  searchPromotion();
	  }
	  
	}
	
	var startDt = document.all(startDate).value;
	var endDt = document.all(endDate).value;

	if((null!=startDt || ""!=startDt) && (null!=endDt || ""!=endDt))
	{
		startDt = (startDt.replace("-", "")).replace("-","");
		endDt = (endDt.replace("-", "")).replace("-","");
		
		if(parseInt(endDt) < parseInt(startDt))
		{
			if(btn == "delivery"){
				alert(' 인도희망일은 예약일자보다 빠를 수 없습니다 ');
			}else{
				alert(' 종료일자는 시작일자보다 빠를 수 없습니다 ');
			}
			document.getElementById(txtDate).value = "";
		}
	}
	  
  }
}


/*
  DATE�� ��ȿ�� �˻� �κ�
*/
function chkValidObjDate(obj)
{
  ChkDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  var nMonth = 0, nYear = 0, nDay = 0;
  var strDate = obj.value;
  var strTemp = "";
  var strYear = "";
  var strMonth = "";
  var strDay = "";

  if(Trim(strDate.length) == 10)  //Date�� 8�ڸ� �ΰ��
  {

    if(strDate.charAt(DATEFMTARR[4]) == DELIMITER)
    {
      if(strDate.charAt(DATEFMTARR[5]) != DELIMITER)
      {
      alert(ERROR_00010);  //��ȿ�� ���ڰ� �ƴմϴ�.
      obj.focus();
      return true;
      }
    }
  }
  else if(Trim(strDate.length) == 7)  //date�� 6�ڸ� �ΰ��
  {
	if(strDate.charAt(DATEFMTARR[4]) != DELIMITER)
    {
      alert(ERROR_00010);  //��ȿ�� ���ڰ� �ƴմϴ�.
      obj.focus();
      return true;
    }
  }
  else
  {
    if(strDate.indexOf(DELIMITER) != -1)
    {
      alert(ERROR_00010);
      obj.focus();
      return true;
    }
  }

  strTemp = strDelimiterTrim(strDate);
  if(strTemp.length > 8 || strTemp.length < 6)
  {
    alert(ERROR_00010);
    obj.focus();
    return true;
  }
  if(CURRDATEFMT == "ymd")
  {
	if(strTemp.length == 8)
	{
      strYear = strTemp.substring(DATEFMTARR[0], DATEFMTARR[1]);
      strMonth = strTemp.substring(DATEFMTARR[1], DATEFMTARR[2]);
      strDay = strTemp.substring(DATEFMTARR[2], DATEFMTARR[3]);
	}
	else if(strTemp.length == 6)
	{
      strYear = strTemp.substring(DATEFMTARR[0], DATEFMTARR[1]);
      strMonth = strTemp.substring(DATEFMTARR[1], DATEFMTARR[2]);
	}
  }
  else if(CURRDATEFMT == "mdy")
  {
	if(strTemp.length == 8)
	{
      strYear = strTemp.substring(DATEFMTARR[2], DATEFMTARR[3]);
      strMonth = strTemp.substring(DATEFMTARR[0], DATEFMTARR[1]);
      strDay = strTemp.substring(DATEFMTARR[1], DATEFMTARR[2]);
	}
	else if(strTemp.length == 6)
	{
      strYear = strTemp.substring(DATEFMTARR[6], DATEFMTARR[7]);
      strMonth = strTemp.substring(DATEFMTARR[0], DATEFMTARR[1]);
	}
  }
  else if(CURRDATEFMT == "dmy")
  {
	if(strTemp.length == 8)
	{
      strYear = strTemp.substring(DATEFMTARR[2], DATEFMTARR[3]);
      strMonth = strTemp.substring(DATEFMTARR[1], DATEFMTARR[2]);
      strDay = strTemp.substring(DATEFMTARR[0], DATEFMTARR[1]);
	}
	else if(strTemp.length == 6)
	{
	  strMonth = strTemp.substring(DATEFMTARR[0], DATEFMTARR[1]);
      strYear = strTemp.substring(DATEFMTARR[6], DATEFMTARR[7]);
	}
  }
  if(strYear == "0000")
  {
    alert(ERROR_00030);
    obj.focus();
    return true;
  }
  if(!chkStrNumber(strYear, 'N'))
  {
    nYear = parseInt(strYear, 10);
	if(nYear <= 1900 || nYear >=2100) {  //1900�� ~ 2100�� ����
	  alert(ERROR_00030);
	  obj.focus();
	  obj.select();
	  return true;
	}
	else {
	  nYear = nYear;
	}

    if((nYear%4 == 0 && nYear%100 != 0)|| nYear%400 == 0)
    {
      ChkDay[1] = 29;
    }
    else
    {
      ChkDay[1] = 28;
    }
  }
  else
  {
    alert(ERROR_00030);
    obj.focus();
    return true;
  }
  if(!chkStrNumber(strMonth,'N'))
  {
    nMonth = parseInt(strMonth, 10);
    if(nMonth < 1 || nMonth > 12)
    {
      alert(ERROR_00040);
      obj.focus();
	  obj.select();
      return true;
    }
  }
  else
  {
    alert(ERROR_00040);
    obj.focus();
    return true;
  }

  if(strTemp.length == 8) {  //��¥ üũ
    if(!chkStrNumber(strDay, 'N'))
    {
      nDay = parseInt(strDay, 10);
      if(nDay < 1 || nDay > ChkDay[nMonth - 1] )
      {
        alert(ERROR_00050);
        obj.focus();
        return true;
      }
    }
    else
    {
      alert(ERROR_00050);
      obj.focus();
      return true;
    }
  }
  else if(strTemp.length == 6) {
	  return true;
  }
  return false;
}


function objDelimiterTrim(obj)
{
  var strValue = obj.value;
  var strTemp = "";
  for(var i = 0; i < strValue.length; i++)
  {
    if(strValue.charAt(i) == DELIMITER)
      continue;
    else
      strTemp += strValue.charAt(i);
  }
  return strTemp;
}

function objDelimTrim(obj, cDelimiter)
{
  var strValue = obj.value;
  var strTemp = "";
  for(var i = 0; i < strValue.length; i++)
  {
    if(strValue.charAt(i) == cDelimiter)
      continue;
    else
      strTemp += strValue.charAt(i);
  }
  return strTemp;
}

function objDelimiterDateTrim(obj)
{
  var strTemp = "";
  strTemp = objDelimTrim(obj, DELIMITER)
  obj.value = strTemp;
}

function objDelimiterCommaTrim(obj)
{
  var strTemp = "";
  strTemp = objDelimTrim(obj, ",")
  obj.value = strTemp;
}

function insertDelimiterObjDate(obj)
{
  var strValue = objDelimiterTrim(obj);
  var strTemp  = "";
  if(strValue.length == 8) {
    strTemp = strValue.substring(DATEFMTARR[0], DATEFMTARR[1])
            + DELIMITER
            + strValue.substring(DATEFMTARR[1], DATEFMTARR[2])
            + DELIMITER
            + strValue.substring(DATEFMTARR[2], DATEFMTARR[3]);
  }
  else if(strValue.length == 6) {  //�߰�
	  strTemp = strValue.substring(DATEFMTARR[0], DATEFMTARR[1])
            + DELIMITER
            + strValue.substring(DATEFMTARR[6], DATEFMTARR[7]);
  }

  return strTemp;
}

function chkObjDate(objDate, preconditionYn)
{
  if(preconditionYn == "N" || Trim(objDate.value) == "")
  {
    return false;
  }
  if(chkValidObjDate(objDate))
    return true;
  else
    objDate.value = insertDelimiterObjDate(objDate);
  return false;
}


//���� �Է��� �˻� �κ� 1
function chkObjDate(objDate)
{
  if(Trim(objDate.value) == "")
  {
    return false;
  }
  else if(Trim(objDate.value.length) == 8 || Trim(objDate.value.length) == 6)
  {
	  if(chkValidObjDate(objDate)) {
	    return true;
	  }
	  else {
        objDate.value = insertDelimiterObjDate(objDate);
        return false; }
  }
  else
  {
    alert(ERROR_00010);
	  objDate.focus();
	  objDate.select();
	  return false;
  }
}

function objTrim(obj)
{
  var strValue = obj.value;
  var strTemp  = "";
  for(var i = 0; i < strValue.length; i++)
  {
    if(strValue.charAt(i) == ' ')
      continue;
    else
      strTemp += strValue.charAt(i);
  }
  return strTemp;
}

function strTrim(values)
{
  var strTemp = "";
  for(var i = 0; i < values.length; i++)
  {
    if(values.charAt(i) == ' ')
      continue;
    else
      strTemp += values.charAt(i);
  }
  return strTemp;
}

function objRTrim(obj)
{
  var strValue = obj.value;
  while(strValue.charAt(strValue.length-1) == ' ')
  {
    strValue = strValue.substring(0, strValue.length - 1);
  }
  return strValue;
}

function strDelimiterTrim(strValue)
{
  var strTemp  = "";
  for(var i = 0; i < strValue.length; i++)
  {
    if(strValue.charAt(i) == DELIMITER)
      continue;
    else
      strTemp += strValue.charAt(i);
  }
  return strTemp;
}

function chkStrNumber(nValues, strYN)
{
  if(strTrim(nValues) == "")
    return true;
  for(var i = 0; i < nValues.length; i++)
  {
    if((nValues.charAt(i) < "0") || (nValues.charAt(i) > "9"))
    {
      if(strYN == "Y")
      {
        alert(ERROR_00020);
      }
      return true;
    }
  }
  return false;
}

function onlyPressNumWithoutPoint()
{
  if(event.keyCode == 13 || event.keyCode == 46)
    event.returnValue = true;
  if(((event.keyCode<48)) || (event.keyCode>57))
    event.returnValue = false;
}

function onlyPressNum()
{
  if(event.keyCode == 13 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9)
    event.returnValue = true;
  if(((event.keyCode != 46) && (event.keyCode != 8) && (event.keyCode != 9) && (event.keyCode<48)) || 
		  ((event.keyCode>57) && (event.keyCode<95)) || (event.keyCode>105))
    event.returnValue = false;
}

function onlyPressNumMinus()
{
  if(event.keyCode == 13 || event.keyCode == 46 || event.keyCode == 45)
    event.returnValue = true;
  else if((event.keyCode < 48) || (event.keyCode > 57))
    event.returnValue = false;
}

function onlyPressKeyCode()
{
  if(((event.keyCode>=48) && (event.keyCode<=57)) ||
     ((event.keyCode>=65) && (event.keyCode<=90)) ||
     ((event.keyCode>=97) && (event.keyCode<=122)))
    event.returnValue = true;
  else
    event.returnValue = false;
}

function onlyPressKeyCodeAster()
{
  if(((event.keyCode>=48) && (event.keyCode<=57))  ||
     ((event.keyCode>=65) && (event.keyCode<=90))  ||
     ((event.keyCode>=97) && (event.keyCode<=122)) || (event.keyCode == 42))
    event.returnValue = true;
  else
    event.returnValue = false;
}

function checkHan(obj)
{
  var newVal = obj.value;
  var alphaNumeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var flag = false;
  for(var i = 0; i<newVal.length; i++)
  {
    flag = false;
    for(var j = 0; j < alphaNumeric.length; j++)
    {
      if(newVal.charAt(i)==alphaNumeric.charAt(j))
        flag = true;
    }
    if(flag == false)
    {
      return false;
    }
  }
  return true;
}

function checkHanAster(obj)
{
  var newVal = obj.value;
  var alphaNumeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*";
  var flag = false;
  for(var i = 0; i<newVal.length; i++)
  {
    flag = false;
    for(var j = 0; j < alphaNumeric.length; j++)
    {
      if(newVal.charAt(i)==alphaNumeric.charAt(j))
        flag=true;
    }
    if(flag == false)
    {
      return false;
    }
  }
  return true;
}

function onlyPressNumH()
{
  if(event.keyCode == 13)
    event.returnValue = true;
  if(event.keyCode == 229)
    event.returnValue = false;
}

function onlyPressKeyCodeH()
{
  if(event.keyCode == 13)
    event.returnValue = true;
  if(event.keyCode == 229)
    event.returnValue = true;
}

function codeToUpperCase(obj)
{
  var newVal = obj.value;
  obj.value=newVal.toUpperCase();
}

function stringReplace(strBuffer, oldChar, newChar)
{
  var ep = 0;
  var len = strBuffer.length;
  while(ep <= len)
  {
    ep = strBuffer.indexOf(oldChar);
    if(ep == -1)
      break;
    strBuffer = strBuffer.substring(0, ep)
              + newChar
              + strBuffer.substring(ep+oldChar.length, len);
  }
  return strBuffer;
}

function objCommaTrim(obj)
{
  var strValue = obj.value;
  var retValue = "";
  for(var i = 0; i < strValue.length; i++)
  {
    if(strValue.charAt(i) == ',')
      continue;
    else
      retValue += strValue.charAt(i);
  }
  obj.value = retValue;
  obj.focus();
  obj.select();
  return;
}

function chkValidNumber(strNumber, strYN)
{
  var nCnt = 0;
  if(strTrim(strNumber) == "")  return true;
  for(var i = 0; i < strNumber.length; i++)
  {
    if((strNumber.charAt(i) < "0" || strNumber.charAt(i) > "9") && strNumber.charAt(i) != ".")
    {
      if(strYN == "Y") alert(ERROR_00020);
      return true;
    }
    if(strNumber.charAt(i) == ".") nCnt++;
    if(nCnt > 1)
    {
      if(strYN == "Y") alert(ERROR_00020);
      return true;
    }
  }
  if(strNumber.length == 1 && strNumber == ".")
  {
    alert(ERROR_00020);
    return true;
  }
  return false;
}

function round(number, X)
{
  X = ((X < 0)? 0 : X);
  return Math.round(number*Math.pow(10, X))/Math.pow(10, X);
}

function commaNumFormat(obj, nPoint)
{
  var numString = obj.value;
  var strTemp = "";
  var len = 0;
  var splitNum;
  var retNum = "";
  var decPoint = 0;
  var blen = 0;

  if(nPoint < 0)
    nPoint = 0;
  if(nPoint == 0 && numString.indexOf(".") != -1)
  {
    alert(ERROR_00020);
    obj.focus();
    obj.select();
    return;
  }
  if(strTrim(numString) == "")
  {
    obj.value = "";
    return;
  }
  if(chkValidNumber(numString, "Y"))
  {
    obj.focus();
    obj.select();
    return;
  }
  strTemp = String(round(Number(numString), nPoint));

  if(nPoint > 0 && strTemp.indexOf(".") == -1)
  {
    if(strTemp.indexOf(".") == -1) strTemp += ".";
    for(var i = 0; i < nPoint; i++)
      strTemp += "0";
  }

  decPoint = strTemp.indexOf(".");
  blen = strTemp.substring(decPoint+1, strTemp.length).length;
  if((decPoint == (strTemp.length - 1)) || blen < nPoint)
  {
    for(var i = 0; i < (nPoint - blen); i++)
      strTemp += "0";
  }

  if(strTemp.indexOf(".") != -1)
  {
    splitNum = strTemp.split(".");
    len = splitNum[0].length;

    if(len%3 == 0)
      retNum = addComma(String(splitNum[0])) + "." + splitNum[1];
    else if((len+1)%3 == 0)
      retNum = addComma(" " + String(splitNum[0])) + "." + splitNum[1];
    else if((len+2)%3 == 0)
      retNum = addComma("  " + String(splitNum[0])) + "." + splitNum[1];
  }
  else
  {
    len = numString.length;
    if(len%3 == 0)
      retNum = addComma(numString);
    else if((len+1)%3 == 0)
      retNum = addComma(" " + numString);
    else if((len+2)%3 == 0)
      retNum = addComma("  " + numString);
  }

  if(strTemp.indexOf(".") != -1 && nPoint == 0)
    retNum = retNum.substring(0,retNum.length-1);

  obj.value = retNum;
  return;
}

function addComma(strNum)
{
  var retVal = "";
  for(var i = 0; i < strNum.length; i++)
  {
    if((i+1) < strNum.length && (i+1)%3 == 0)
      retVal += (strNum.charAt(i) + ",");
    else if(strNum.charAt(i) == ' ')
      continue;
    else
      retVal += strNum.charAt(i);
  }
  return retVal;
}

function rateFormat(obj)
{
  commaNumFormat(obj, 8);
  return;
}

function MouseOn(id)
{
  document.all("tr"+id).className = "mouseon";
}

function MouseOut(id, odd)
{
  if(odd == 0)
   document.all("tr"+id).className = "mouseout2";
  else
   document.all("tr"+id).className = "mouseout1";
}

function chkStrPage()
{
  var jumpToPage = document.all.JumpToPage.value;
  if(strTrim(jumpToPage) == "")  return true;
  for(var i = 0;i < jumpToPage.length;i++)
  {
    if( (jumpToPage.charAt(i) < "0") || (jumpToPage.charAt(i) > "9") || jumpToPage == "0")
    {
      alert(ERROR_00060);
      return false;
    }
  }
  return false;
}

function NormSearch(frm)
{
	frm.pageNum.value = "1";
  frm.submit();
}

function search(frm)
{
  frm.CurrPage.value = "1";
  frm.PrePage.value = "1";
  frm.JumpToPage.value = "";
  frm.submit();
}

function SortTp(frm, Name)
{
  frm.SortField.value=Name;
  if(frm.SortTp.value == "DESC")
  {
    frm.SortTp.value = "ASC";
  }
  else if(frm.SortTp.value == "ASC")
  {
    frm.SortTp.value = "DESC";
  }
  frm.submit();
}

function prev(frm, currPage)
{
  frm.JumpToPage.value = "";
  frm.CurrPage.value= currPage - 1;
  frm.submit();
}

function next(frm, currPage)
{
  frm.JumpToPage.value = "";
  frm.CurrPage.value= currPage + 1;
  frm.submit();
}

function Jump(frm)
{
  if(Trim(frm.JumpToPage.value)!='' && Trim(frm.JumpToPage.value)!='0')
  {
    frm.CurrPage.value = frm.JumpToPage.value ;
    frm.submit();
  }
  else
  {
    frm.JumpToPage.value="";
    alert(ERROR_00060);
  }
}

function Trim(tmpStr)
{
  var sAtChar;
  if(tmpStr.length > 0)
    sAtChar = tmpStr.charAt(0);

  while (isSpace(sAtChar))
  {
    tmpStr = tmpStr.substring(1, tmpStr.length);
    sAtChar = tmpStr.charAt(0);
  }
  if(tmpStr.length > 0)
    sAtChar = tmpStr.charAt(tmpStr.length - 1);

  while(isSpace(sAtChar))
  {
    tmpStr = tmpStr.substring(0, (tmpStr.length - 1));
    sAtChar = tmpStr.charAt(tmpStr.length - 1);
  }
  return tmpStr;
}

function isSpace(inChar)
{
  return (inChar == ' ' || inChar == '\t' || inChar == '\n');
}

function setCookie(name, value, expire)
{
  document.cookie = name + "=" + escape(value) + ( (expire) ? "; expires=" + expire.toGMTString() : "")
}

function register(value1, value2)
{
  var today = new Date()
  var expire = new Date(today.getTime() + 60*60*24*7*1000)
  setCookie("help", value1, expire);
  setCookie("pgmNo", value2, expire);
}

function msgDp(msg)
{
  var status = 'width=400,height=225,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,left='+(screen.width/2-200)+',top='+(screen.height/2-110)+'';
  window.open("../SCMsg.jsp?msg="+msg, 'blank',status).focus();
}

function isPoint(src)
{
	if((p1 = src.value.indexOf('.')) != -1)
  {
		if((p2 = src.value.indexOf('.',p1+1)) != -1)
    {
			src.value = src.value.substring(0, p2);
			return true;
		}
	}
	return false;
}

function sukeyup(src)
{
	if(sukeyup_n(src))
  {
		src.value = suwithcomma(src.value);
		return true;
	}
	return false;
}

function suwithcomma(su)
{
   su = kreplace(su, ',', '');
   var rtn = '';
   var fd = false;
   if(isNaN(su))
   {
        return 0;
   }
   else
   {
        su = new String(su);
   }

   n = su.indexOf('.');
   if(n < 0)   //���Է����� ����� �Է¾ȵ�
   {
        n = parseInt(su.length);
   }
   else
   {
        fd = true;
   }

   while(su.indexOf('0') == 0 )
   {
        if(!fd)
       {
           su = su.substring(1,su.length);
       }
       else
       {
           if(n > 1)
          {
              su = su.substring(1, su.length);
              n --;
          }
          else
          {  return su;   }
       }
   }

   cnt = parseInt(n / 3);
   mod = parseInt(n % 3);
   if(mod > 0)
   {
        rtn = su.substring(0,mod);
        if(cnt > 0)
          rtn = rtn + SU_COMMA;
   }

   for(i = 0; i < cnt ; i++)
  {
       idx = i*3 + mod;
       if(idx == 0)
      {
          rtn = su.substring(idx, idx + 3);
          if(cnt > 1)
              rtn = rtn + SU_COMMA;
      }
      else
      {
         rtn = rtn + su.substring(idx, idx + 3);
         if(idx < n - 3)
             rtn = rtn + SU_COMMA;
      }
  }

  if(fd)
      rtn = rtn + su.substring(n, su.length);
      return rtn;
}

function sukeyup_n(src)
{
	keycode = window.event.keyCode;
	if(isArrowKey(keycode) || keycode == 13 || isPoint(src))
  {
		return false;
	}
	checkStringValid(src);

	if(src.value == '' || src.value == '0')
  {
		src.value = 0;
		return false;
	}

	if(src.value == '.' || src.value == '0.')
  {
		src.value = '0.';
		return false;
	}

	if(!isNaN(src.value))
  {
		if(src.value.indexOf('.') == 1)
      return false;
		if(src.value.length <= 3)
    {
			if(src.value.indexOf('0') == 0)
				src.value = src.value.substring(1, src.value.length);
			return false;
		}
	}
	return true;
}

function sukeyup1(src, nPoint)
{
  var numString = src.value;
  var strTemp = "";
  var len = 0;
  var splitNum;
  var retNum = "";
  var blen = 0;
  var p1;
  if(strTemp.indexOf(".") != -1)
    src.value = String(round(Number(src.value), nPoint));
  p1 = src.value.indexOf('.');

  if(p1 != -1)
  {
    splitNum = src.value.split(".");
    len = splitNum[1].length;
    if(nPoint == 0)
    {
      src.value = src.value.substring(0,parseInt(p1)+parseInt(nPoint));
	  }
    else
    {
      src.value = src.value.substring(0,parseInt(p1)+parseInt(nPoint)+parseInt(1));
    }
  }
  src.value = suwithcomma(src.value);

  return true;
}

function isMax(src, vmax)
{
	var sv = src.value;
	var smax = suwithcomma(new String(vmax));
	sv = parseFloat(kreplace(sv, ',', ''));
	if(sv > vmax)
  {
		alert('�ִ밪(' + smax + ')���� ū ���� �Է� �Ǿ���ϴ�.');
		src.value = smax;
		return false;
	}
	return true;
}

function wPoint(src, dec)
{
	if((p = src.value.indexOf('.')) != -1)
  {
		if(src.value.length > p + dec + 1)
    {
			src.value = src.value.substring(0,p+dec+1);
		}
	}
}

function isArrowKey(key)
{
	if(key >= 37 && key <= 40)
    return true;
	else
    return false;
}

function isPoint(src)
{
	if((p1 = src.value.indexOf('.')) != -1)
  {
		if((p2 = src.value.indexOf('.',p1+1)) != -1)
    {
			src.value = src.value.substring(0, p2);
			return true;
		}
	}
	return false;
}

function checkStringValid(src)
{
	var len = src.value.length;
	for(var i = 0; i < len; i++)
  {
		if((!isDecimal(src.value.charAt(i)) || src.value.charAt(i)==" ") && src.value.charAt(i)!="." )
    {
			assortString(src, i);
			i = 0;
		}
	}
}

function isDecimal(number)
{
	if (number >= 0 && number <= 9)
    return true;
	else
    return false;
}

function assortString(source, index)
{
	var len = source.value.length;
	var temp1 = source.value.substring(0, index);
	var temp2 = source.value.substring(index + 1, len);
	source.value = temp1 + temp2;
}

function kreplace(str, str1, str2)
{
	if(str == "" || str == null)
    return str;

	while(str.indexOf(str1) != -1)
  {
		str = str.replace(str1,str2);
	}
	return str;
}

function addZero(src, nPoint)
{
  var decPoint = 0;
  var blen = 0;

  decPoint = src.value.indexOf(".");
  blen = src.value.substring(parseInt(decPoint)+1, src.value.length).length;
  if((decPoint == (src.value.length - 1)) || blen < nPoint)
  {
    for(var i = 0; i < (nPoint-blen); i++)
      src.value += "0";
  }
  return true;
}

function upperCase(obj)
{
  var strValue = obj.value;
  obj.value = strValue.toUpperCase();
}

function onlyNumberInput()
{
  if(event.keyCode == 13)
    event.returnValue = true;
  if((event.keyCode < 48) || (event.keyCode > 57))
    event.returnValue = false;
}

function dateFormat(obj)
{
  var str = onlyNum(obj.value);
  var leng = str.length;

  switch(leng)
  {
    case 1 :
    case 2 :
    case 3 :
    case 4 : obj.value = str; break;
    case 5 :
    case 6 : obj.value = str.substring(0, 4) + "-" + str.substring(4); break;
    case 7 :
    case 8 : obj.value = str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6);
             chkDate(obj.value);
    break;
  }
}

function onlyNum(val)
{
  var num = val;
  var tmp = "";

  for(var i = 0; i < num.length; i ++)
  {
    if(num.charAt(i) >= 0 && num.charAt(i) <= 9)
      tmp = tmp + num.charAt(i);
    else
      continue;
  }
  return tmp;
}

function chkDate(str)
{
  if(str.length == 8)
  {
    vDate = new Date();
    vDate.setFullYear(str.substring(0, 4));
    vDate.setMonth(str.substring(4, 6)-1);
    vDate.setDate(str.substring(6));
    if(vDate.getFullYear() != str.substring(0, 4) || vDate.getMonth()
       != (str.substring(4, 6)-1) || vDate.getDate() != str.substring(6))
    {
      alert(ERROR_00010);
      obj.value = "";
      obj.focus();
      return;
    }
  }
}

function showTip(current, e, text)
{
  if(document.all&&document.readyState == "complete")
  {
    document.all.toolTip.innerHTML='<table width="425"  border="0" cellpadding="0" cellspacing="0"><tr><td width="426" class="warning_1">&nbsp;</td></tr><tr><td class="warning_2"><table border="0" align="center" cellpadding="0" cellspacing="0"><tr><td class="warning_in">'+text+'</td></tr></table></td></tr><tr><td class="warning_3">&nbsp;</td></tr></table>';
    document.all.toolTip.style.pixelLeft=event.clientX+document.body.scrollLeft-450
    document.all.toolTip.style.pixelTop=event.clientY+document.body.scrollTop-40
    document.all.toolTip.style.visibility="visible"
  }
  else if(document.layers)
  {
    document.toolTip.document.nstip.document.write('<b>'+text+'</b>')
    document.toolTip.document.nstip.document.close()
    document.toolTip.document.nstip.left=0
    currentscroll=setInterval("scrolltip()",100)
    document.toolTip.left=e.pageX+10
    document.toolTip.top=e.pageY+10
    document.toolTip.visibility="show"
  }
}

function hideTip()
{
  if(document.all)
    document.all.toolTip.style.visibility="hidden"
  else if(document.layers)
  {
    clearInterval(currentscroll)
    document.toolTip.visibility="hidden"
  }
}

function scrolltip()
{
  if(document.toolTip.document.nstip.left>=-document.toolTip.document.nstip.document.width)
    document.toolTip.document.nstip.left-=5
  else
    document.toolTip.document.nstip.left=150
}


/*
 * �������� input, textarea, select Ÿ�� ��Ʈ�ѵ��� ��� disable ��Ű�� ��ũ��Ʈ
 * param - ��Ʈ�ѵ��� �����ϴ� ��(form) ��ü
 */
function controlDisable(formObj)
{
  var forms = formObj;
  var count = forms.elements.length;

  for(i=0; i<count; i++)
  {
    forms.elements[i].disabled = true;
  }

  if(document.all["cursor"] != null)
    document.all["cursor"].style.cursor = "wait";
}


/*
 * �������� radio �� enable ��Ű�� ��ũ��Ʈ
 * param - ��Ʈ�ѵ��� �����ϴ� ��(form) ��ü
 */
function radioEnable(formObj)
{
  var forms = formObj;
  var count = forms.elements.length;
  var type = null;

  for(i=0; i<count; i++)
  {
    type = forms.elements[i].type;
    if(type=="radio")
    {
      forms.elements[i].disabled = false;
    }
  }
}

/*
 * �������� input, textarea, select Ÿ�� ��Ʈ�ѵ��� ��� enable ��Ű�� ��ũ��Ʈ
 * param - ��Ʈ�ѵ��� �����ϴ� ��(form) ��ü
 */
function controlEnable(formObj)
{
  var forms = formObj;
  var count = forms.elements.length;

  for(i=0; i<count; i++)
  {
    forms.elements[i].disabled = false;
  }

  if(document.all["cursor"] != null)
    document.all["cursor"].style.cursor = "default";
}

/*
 * ����Ű�� ġ�� input, textarea, select Ÿ�� ��Ʈ�� ���̿� ��Ŀ�� �̵��� �ϰ��ϴ� ��ũ��Ʈ(readonly, disabled �� ��Ʈ���� �ǳʶڴ�)
 * param - ��Ʈ�ѵ��� �����ϴ� ��(form) ��ü
 */
function focusNextItem(name)
{
  var forms = document.forms[0];
  var count = forms.elements.length;

  for(i=0; i<count; i++)
  {
    if(forms.elements[i].name == name)
	  {
      for(j=i+1; j<count; j++)
      {
        if(forms.elements[j].type == "text" || forms.elements[j].type == "select" ||
        forms.elements[j].type == "select-one" || forms.elements[j].type == "textarea" ||
        forms.elements[j].type == "checkbox")
        {
          if(forms.elements[j].readOnly != true && forms.elements[j].disabled != true)
          {
              forms.elements[j].focus();
            break;
          }
        }
      }
	  }
  }
}


/*
 * �������� input, textarea, select Ÿ�� ��Ʈ�ѵ��� ���� �ʱ�ȭ (�� ó��) ��Ű�� ��ũ��Ʈ
 * param - ��Ʈ�ѵ��� �����ϴ� ��(form) ��ü
 */
function controlClear(formObj)
{
  var forms = formObj;
  var count = forms.elements.length;

  for(j=0; j<count; j++)
  {
    if(forms.elements[j].type == "text" || forms.elements[j].type == "select" ||
			forms.elements[j].type == "select-one" || forms.elements[j].type == "textarea" ||
			forms.elements[j].type == "checkbox")
	{
	  if(forms.elements[j].readOnly != true && forms.elements[j].disabled != true)
	  {
		forms.elements[j].value = "";
	  }
	}
  }
}


//////////////////////////////////////////////////////////////////////////////
/*
 * ��ȭ�ڵ� �Ҽ��� ���� �Է� ���� (2005.01.19)
 * param : selectedIndex,   currency fieldName, intunit fieldName
 */

var objCur = new Array();

//��ȭ�ڵ�����1 : Currency, unit�� �迭�� �����ϰ� ����
function MakeArray(p1, p2)
{
   this.currency = p1;
   this.unit = p2;
   return this;
}

//��ȭ�ڵ�����2 : Currency, unit, RTU�� �迭�� �����ϰ� ����
function CurrencyArray(p1, p2, p3)
{
   this.currency = p1;
   this.unit = p2;
   this.rtu = p3;
   return this;
}

//��ȭ�ڵ�����2 : ������ Currency�� �Ҽ������� �ڸ����� ������
function selectCurrency(idx, ccyName, intUnit, controlField )
{
   //alert("----ccyName : " + ccyName);
   var reqForm = document.forms[0];
   var val = reqForm(ccyName).options[idx].value;

   if(controlField != "" || reqForm.controlField != null)
   {
     reqForm(controlField).value = 0;
   }

   if(intUnit != "")
   {
     for (var i = 0; i < objCur.length; i++)
     {
       if (val == objCur[i].currency)
       {
         var selecteUnit = objCur[i].unit;
         reqForm(intUnit).value = selecteUnit;
         break;
       }
     }
   }
}

//��ȭ�ڵ�����3 :
//���� 0�϶� onblur �߻�� �Ҽ������� �ڸ�����ŭ 0���� ä���ִ°���
//0�϶��� 0���� setting �ϴ°ɷ� ������
function notAddZero(src, nPoint)
{
  var decPoint = 0;
  var blen = 0;

  //alert("src.value : " + src.value );

  if (src.value == 0)
     src.value = "0";
  else
  {
     decPoint = src.value.indexOf(".");
     blen = src.value.substring(parseInt(decPoint)+1, src.value.length).length;
    //if((decPoint == (src.value.length - 1)) || blen < nPoint)
    //{
       //for(var i = 0; i < (nPoint-blen); i++)
       //src.value += "0";
    //}
  }
  return true;
}

// ��ȭ�� ���� uint ���� [�Ķ���ͷ� ���� ��Ʈ�ѿ� ����]
function returnCurrencyUnit(currencyValue, controlField )
{
   for (var i = 0; i < objCur.length; i++)
   {
      if (currencyValue == objCur[i].currency)
      {
         var rtnUnit = objCur[i].unit;
         reqForm(controlField).value = rtnUnit;
         break;
    }
  }
  return true;
}


// ��ȭ�� ���� unit ���� [���ϰ����� unit �� ������]
function getCurrencyUnit(currency)
{
  var rtnUnit = "";
  for (var i = 0; i < objCur.length; i++)
  {
    if (currency == objCur[i].currency)
    {
      rtnUnit = objCur[i].unit;
      break;
    }
  }
  return rtnUnit;
}


function applyAmountFormat(amount, nPoint)
{
  var numString = amount;
  var strTemp = "";
  var len = 0;
  var splitNum;
  var retNum = "";
  var blen = 0;
  var p1;

  if(amount != "" && amount != "0" && amount != 0)
  {
    if(strTemp.indexOf(".") != -1)
    {
      amount = String(round(Number(amount), nPoint));
    }
    p1 = amount.indexOf('.');

    if(p1 != -1)
    {
      splitNum = amount.split(".");
      len = splitNum[1].length;
      if(nPoint == 0)
      {
        amount = amount.substring(0,parseInt(p1)+parseInt(nPoint));
      }
      else
      {
        amount = amount.substring(0,parseInt(p1)+parseInt(nPoint)+parseInt(1));
      }
    }
    amount = suwithcomma(amount);
  }
  else
  {
    amount = 0;
  }

  return amount;
}



///////////////////////////////////////////////////////////////////////////////

/** �ĸ��� ��ּ� �������ִ� �޼��� **/
function removeComma(str)
{
  var strValue = str;
  var strTemp = "";
  for(var i = 0; i < strValue.length; i++)
  {
    if(strValue.charAt(i) == ",")
      continue;
    else
      strTemp += strValue.charAt(i);
  }
  return strTemp;
}

/* ��¥ �������� ��¥���� 8����Ʈ ĳ���� ����(YYYYMMDD)�� �����ؼ� �������ش�. */
function removeSeparator(dateString)
{

  var returnDate = "";

  if(dateString != "" && dateString != null)
  {

    if(dateString.length == 10)
    {
      dateString = stringReplace(dateString, DELIMITER, "");

      if(dateformat == "YYYYMMDD")
      {
        returnDate += dateString;
      }
      else if(dateformat == "MMDDYYYY")
      {
        returnDate += dateString.substring(4, 8);
        returnDate += dateString.substring(0, 2);
        returnDate += dateString.substring(2, 4);
      }
      else if(dateformat == "DDMMYYYY")
      {
        returnDate += dateString.substring(4, 8);
        returnDate += dateString.substring(2, 4);
        returnDate += dateString.substring(0, 2);
      }

      return returnDate;
    }
    else if(dateString.length == 8)
    {

      dateString = stringReplace(dateString, DELIMITER, "");

      if(dateformat == "YYYYMMDD")
      {
        returnDate += dateString;
      }
      else if(dateformat == "MMDDYYYY")
      {
        returnDate += dateString.substring(2, 6);
        returnDate += dateString.substring(0, 2);
      }
      else if(dateformat == "DDMMYYYY")
      {
        returnDate += dateString.substring(2, 6);
        returnDate += dateString.substring(0, 2);
      }

      return returnDate;
    }
  }
  else
  {
    returnDate = "";
    return returnDate;
  }
}

/*******************************************************************************
 * title   : compareDate
 * purpose : ��¥�� �Լ�
 *           NeoBIS �ý����� ��¥��Ŀ� �����ؼ� �ΰ��� ��¥ Ÿ��(DD/MM/yyyy)�� �Է¹޾�
 *           ��¥�� ���Ѵ�.
 *           DateOne �� ���ų� �����̸� true, �׷��� ������ false�� ��ȯ�Ѵ�.
 * author  : Tristan Song
 * version : 2005-01-29
 *******************************************************************************/
function compareDate(DateOne, DateTwo)
{
  var OneYear = DateOne.substring(DateOne.length,DateOne.lastIndexOf ("/")+1);
  var OneMonth = DateOne.substring(3,DateOne.lastIndexOf ("/"));
  var OneDay = DateOne.substring(0,DateOne.indexOf ("/"));

  var TwoYear = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ("/")+1);
  var TwoMonth = DateTwo.substring(3,DateTwo.lastIndexOf ("/"));
  var TwoDay = DateTwo.substring(0,DateTwo.indexOf ("/"));

  if(Date.parse(OneMonth+"/"+OneDay+"/"+OneYear) >= Date.parse(TwoMonth+"/"+TwoDay+"/"+TwoYear))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function applyDateFormat(dateString)
{
  var returnDate = "";

  if(dateString != "" && dateString != null)
  {
    //���� ����� ��¥�� 8����Ʈ ���ڿ��� �ƴ϶�� ���� �����ϵ��� �Ѵ�.
    if(dateString.length == 8)
    {
      if(dateformat == "YYYYMMDD")
      {
        returnDate += dateString.substring(0, 4);
        returnDate += DELIMITER;
        returnDate += dateString.substring(4, 6);
        returnDate += DELIMITER;
        returnDate += dateString.substring(6, 8);
      }
      else if(dateformat == "MMDDYYYY")
      {
        returnDate += dateString.substring(4, 6);
        returnDate += DELIMITER;
        returnDate += dateString.substring(6, 8);
        returnDate += DELIMITER;
        returnDate += dateString.substring(0, 4);
      }
      else if(dateformat == "DDMMYYYY")
      {
        returnDate += dateString.substring(6, 8);
        returnDate += DELIMITER;
        returnDate += dateString.substring(4, 6);
        returnDate += DELIMITER;
        returnDate += dateString.substring(0, 4);
      }

      return returnDate;
    }
    //YYYYMM/MMYYYY ���� �䱸���� �߰�
    else if(dateString.length == 6)
    {
      if(dateformat == "YYYYMMDD")
      {
        returnDate += dateString.substring(0, 4);
        returnDate += DELIMITER;
        returnDate += dateString.substring(4, 6);
      }
      else if(dateformat == "MMDDYYYY")
      {
        returnDate += dateString.substring(4, 6);
        returnDate += DELIMITER;
        returnDate += dateString.substring(0, 4);
      }
      else if(dateformat == "DDMMYYYY")
      {
        returnDate += dateString.substring(4, 6);
        returnDate += DELIMITER;
        returnDate += dateString.substring(0, 4);
      }

      return returnDate;
    }
    else
    {
      return dateString;
    }
  }
  else
  {
    return returnDate;
  }
}

/*******************************************************************************
 * title   : accountFormat
 * purpose : �����¹�ȣ Formatting �Լ�
 *           ���¹�ȣ�� �Է¹޾� �����¹�ȣ�ΰ�� Formtted�ؼ� �����Ѵ�.
 *           ���¹�ȣ�� null�̸� null�� �����Ѵ�.
 * author  : eunju
 * version : 2005-03-03
 *******************************************************************************/
function accountFormat(accountNo) {
  var returnAccount = "";

  if(accountNo != "null") {
    if(accountNo != ""){
	    var keyValue;
	    keyValue = accountNo.charCodeAt(2);

	    if( 64 < keyValue && keyValue < 91)  return accountNo;
	    else {
	      returnAccount = accountNo.substring(0,2)
	              + '-' + accountNo.substring(2,4)
	              + '-' + accountNo.substring(4,8)
	              + '-' + accountNo.substring(8,13)
	              + '-' + accountNo.substring(13);
	      return returnAccount;
	    }
    }
    else {
      returnAccount = "";
      return returnAccount;
    }
  }
  else {
    returnAccount = "";
    return returnAccount;
  }
}

function replaceToSpecialLetter(text)
{
  var strBuffer = "";
  strBuffer = stringReplace(stringReplace(stringReplace(text,"|", "\n"),"nbsp;","'"),"@^@","+");
  return strBuffer;
}


/*******************************************************************************
 * title   : getFloatSum
 * purpose : jspȭ�鿡�� �ΰ��� amount �Ǵ� rate�� ���� bigdecimal���� ���ؼ� ��������� ���
 *           �Ʒ� �żҵ带 ȣ���ϸ� ReturnFieldName�� ���� �����Ѵ�.
 *           AmountŸ���̸� ,�� �־��ش�.
 * author  : jnchoi, yhkim
 * version : 2005-05-11
 * getFloatSum(firstValue, secondValue, "totalAmountClaimed", "ttDd", "YES", "2")
 * getFloatSum(firstValue, secondValue, "calculateRate", "intAdvArr", "NON", "")
 * getFloatMinus�� Sum�� ����� ���� firstValue - secondValue ����
 *******************************************************************************/
function getFloatSum(firstValue, secondValue, returnFieldName, nextControlName, isAmount, intUnit){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = firstValue;
    tempForm.tempValue2.value = secondValue;
    tempForm.tempValue3.value = returnFieldName;
    tempForm.tempValue4.value = nextControlName;
    tempForm.tempValue5.value = isAmount;
    tempForm.tempValue6.value = intUnit;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMCalcurateFloatAction.jsp";
    tempForm.submit();
}

function getFloatSumNextService(firstValue, secondValue, returnFieldName, nextControlName, isAmount, intUnit){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = firstValue;
    tempForm.tempValue2.value = secondValue;
    tempForm.tempValue3.value = returnFieldName;
    tempForm.tempValue4.value = nextControlName;
    tempForm.tempValue5.value = isAmount;
    tempForm.tempValue6.value = intUnit;
    tempForm.tempValue7.value = "NEXT";

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMCalcurateFloatAction.jsp";
    tempForm.submit();
}

function getFloatMinus(firstValue, secondValue, returnFieldName, nextControlName, isAmount, intUnit){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = firstValue;
    tempForm.tempValue2.value = secondValue;
    tempForm.tempValue3.value = returnFieldName;
    tempForm.tempValue4.value = nextControlName;
    tempForm.tempValue5.value = isAmount;
    tempForm.tempValue6.value = intUnit;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMCalcurateMinus.jsp";
    tempForm.submit();
}

function getFloatMinusNextService(firstValue, secondValue, returnFieldName, nextControlName, isAmount, intUnit){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = firstValue;
    tempForm.tempValue2.value = secondValue;
    tempForm.tempValue3.value = returnFieldName;
    tempForm.tempValue4.value = nextControlName;
    tempForm.tempValue5.value = isAmount;
    tempForm.tempValue6.value = intUnit;
    tempForm.tempValue7.value = "NEXT";

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMCalcurateMinus.jsp";
    tempForm.submit();
}


/*******************************************************************************
 * title   : calculateExchangeRate
 * purpose : jspȭ�鿡�� exchangeRate�� ���ؾ��� ��� ����Ѵ�.
 * author  : jnchoi
 * version : 2005-04-28
 * calculateExchangeRate(fromCurrency, fromAmount, toCurrency, toExrateFieldName, toAmountFieldName, "BO",  nextControlName)
 *******************************************************************************/
function calculateExchangeRate(fromCurrency, fromAmount, toCurrency, toExrateFieldName,
                               toAmountFieldName, exchangeRateType,  nextControlName){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = fromCurrency;
    tempForm.tempValue2.value = fromAmount;
    tempForm.tempValue3.value = toCurrency;
    tempForm.tempValue4.value = toExrateFieldName;
    tempForm.tempValue5.value = toAmountFieldName;
    tempForm.tempValue6.value = exchangeRateType;
    tempForm.tempValue7.value = nextControlName;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMCalculateExrate.jsp";
    tempForm.submit();
}

/*******************************************************************************
 * title   : getFloatMultiply
 * purpose : jspȭ�鿡�� �ΰ��� amount �Ǵ� rate�� ���� bigdecimal���� ���ؼ� ��������� ���
 *           �Ʒ� �żҵ带 ȣ���ϸ� ReturnFieldName�� ���� �����Ѵ�.
 *           AmountŸ���̸� ,�� �־��ش�.
 *           whitchValueIsRate �� YES�� ������ �� ���� �ϳ��� ������� ���� �Ͽ� 100���� ������
 *           ccyRTU�� ��ȭ�� Round�Ӽ�
 * author  : yhkim
 * version : 2005-05-02
 * getFloatMultiply(firstValue, secondValue, "totalAmountClaimed", "ttDd", "YES", "2","BigDecimal")
 * getFloatMultiply(firstValue, secondValue, "calculateRate", "intAdvArr", "NON", "", "int")
 *******************************************************************************/
function getFloatMultiply(firstValue, secondValue, returnFieldName, nextControlName, isAmount, intUnit, whitchValueIsRate, ccyRTU){
  var tempForm = document.tempForm;
    tempForm.tempValue1.value = firstValue;
    tempForm.tempValue2.value = secondValue;
    tempForm.tempValue3.value = returnFieldName;
    tempForm.tempValue4.value = nextControlName;
    tempForm.tempValue5.value = isAmount;
    tempForm.tempValue6.value = intUnit;
    tempForm.tempValue7.value = whitchValueIsRate;
    tempForm.tempValue8.value = ccyRTU;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMCalcurateMultiply.jsp";
    tempForm.submit();
}

/*******************************************************************************
 * title   : checkBusinessDate
 * purpose : jspȭ�鿡�� �ش� ��¥�� BusinessDate���� �ƴ��� Ȯ���ؾ��Ҷ� ����Ѵ�.
 *           �ش� ��¥�� BusinessDate�̸� ���� �ʵ�� ���� �ƴϸ� �� ��Ʈ�ѷ� ����.
 * author  : jnchoi
 * version : 2005-05-02
 *
 *******************************************************************************/
function checkBusinessDate(targetDate, targetDateFieldName, nextFieldName){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = targetDate;
    tempForm.tempValue2.value = targetDateFieldName;
    tempForm.tempValue3.value = nextFieldName;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMCheckBusinessDate.jsp";
    tempForm.submit();
}

/*******************************************************************************
 * title   : getTermsBetweenDate
 * purpose : jspȭ�鿡�� �� ��¥�� ���̰� ��ĥ���� �˾ƾ� �Ҷ� ����Ѵ�..
 * author  : jnchoi
 * version : 2005-05-02
 *
 *******************************************************************************/
function getTermsBetweenDate(fromDate, toDate, termFieldName, nextFieldName){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = fromDate;
    tempForm.tempValue2.value = toDate;
    tempForm.tempValue3.value = termFieldName;
    tempForm.tempValue4.value = nextFieldName;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMGetTermsBetweenDate.jsp";
    tempForm.submit();
}


/*******************************************************************************
 * title   : inquiryCalcInterest
 * purpose : jspȭ�鿡�� ���ڸ� ���ؾ��� �Ͽ� ����Ѵ�.
 * author  : JNCHOI
 * version : 2005-05-03
 *   objInteDTO.setInCcy("USD");       //��ȭ
     objInteDTO.setInBasis("Act/360"); //basis
     objInteDTO.setInRtu("T");         //T:���,R:�ݿø�,U:���
     objInteDTO.setInFlag("INCL");       //INCL:����, EXCL:����
     objInteDTO.setInFrdate("20041001"); //������
     objInteDTO.setInTodate("20041030"); //������
     objInteDTO.setInPrincipal(new BigDecimal(10000));  //���
     objInteDTO.setInIntrate(new BigDecimal(0.01));      //������
     objInteDTO.setInAdditionalIntDays("0")       // ���� �����ϰ� �����Ϸκ��� ���� ���� �ϼ����߰��� ���� �ϼ�. �߰� �ϼ��� ��ٸ� �ƹ��� ���� ���� �ʾƵ� �ȴ�.
 inFomulaFieldName ��.. ���� ����� �ʿ��� ��� ���ڰ�� �ʵ���� �־��ְ� �ʿ������ ""�� �־��ָ� �ȴ�.
*******************************************************************************/
function inquiryCalcInterest(inCcy, inBasis, inRtu, inFlag, inFrDate, inTodate, inPrincipal,
                              inIntRate, inAdditionalIntDays, inFieldName, inFomulaFieldName,  nextFieldName){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = inCcy;
    tempForm.tempValue2.value = inBasis;
    tempForm.tempValue3.value = inRtu;
    tempForm.tempValue4.value = inFlag;
    tempForm.tempValue5.value = inFrDate;
    tempForm.tempValue6.value = inTodate;
    tempForm.tempValue7.value = inPrincipal;
    tempForm.tempValue8.value = inIntRate;
    tempForm.tempValue9.value = inAdditionalIntDays;
    tempForm.tempValue10.value = inFieldName;
    tempForm.tempValue11.value = inFomulaFieldName;
    tempForm.tempValue12.value = nextFieldName;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMInquiryCalcInterest.jsp";
    tempForm.submit();
}

/*******************************************************************************
 * title   : inquiryCalcInterestWithMin
 * purpose : jspȭ�鿡�� ���ڸ� ���ؾ��� �Ͽ� ����Ѵ�.(Minimum Insterest�� ���Ȱ�� ���)
 * author  : JNCHOI
 * version : 2005-05-03
 *   objInteDTO.setInCcy("USD");       //��ȭ
     objInteDTO.setInBasis("Act/360"); //basis
     objInteDTO.setInRtu("T");         //T:���,R:�ݿø�,U:���
     objInteDTO.setInFlag("INCL");       //INCL:����, EXCL:����
     objInteDTO.setInFrdate("20041001"); //������
     objInteDTO.setInTodate("20041030"); //������
     objInteDTO.setInPrincipal(new BigDecimal(10000));  //���
     objInteDTO.setInIntrate(new BigDecimal(0.01));      //������
     objInteDTO.setInAdditionalIntDays("0")       // ���� �����ϰ� �����Ϸκ��� ���� ���� �ϼ����߰��� ���� �ϼ�. �߰� �ϼ��� ��ٸ� �ƹ��� ���� ���� �ʾƵ� �ȴ�.
 inFomulaFieldName ��.. ���� ����� �ʿ��� ��� ���ڰ�� �ʵ���� �־��ְ� �ʿ������ ""�� �־��ָ� �ȴ�.
*******************************************************************************/
function inquiryCalcInterestWithMin(inCcy, inBasis, inRtu, inFlag, inFrDate, inTodate, inPrincipal,
                              inIntRate, inAdditionalIntDays, inFieldName, inFomulaFieldName,  nextFieldName,
							  minimumInterestAmt, actualIntFieldName){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = inCcy;
    tempForm.tempValue2.value = inBasis;
    tempForm.tempValue3.value = inRtu;
    tempForm.tempValue4.value = inFlag;
    tempForm.tempValue5.value = inFrDate;
    tempForm.tempValue6.value = inTodate;
    tempForm.tempValue7.value = inPrincipal;
    tempForm.tempValue8.value = inIntRate;
    tempForm.tempValue9.value = inAdditionalIntDays;
    tempForm.tempValue10.value = inFieldName;
    tempForm.tempValue11.value = inFomulaFieldName;
    tempForm.tempValue12.value = nextFieldName;
	tempForm.tempValue13.value = minimumInterestAmt;
	tempForm.tempValue14.value = actualIntFieldName; //���� ���ڸ� �ӽ÷� �������� ��� ���


    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMInquiryCalcInterest.jsp";
    tempForm.submit();
}

/*******************************************************************************
 * title   : getBICCode
 * purpose : BIFCIF�� BID �ڵ带 �����´�.
 * author  : jnchoi
 * version : 2005-06-18
 *
 *******************************************************************************/
function getBICCode(bifCif, bicCodeFieldName, nextFieldName){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = bifCif;
    tempForm.tempValue2.value = bicCodeFieldName;
    tempForm.tempValue3.value = nextFieldName;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMGetBICCode.jsp";
    tempForm.submit();
}

/*******************************************************************************
 * title   : getNextBusinessDate
 * purpose : �ش����� + Ư�� ���� business date�� ���ؿ´�.
 * author  : jnchoi
 * version : 2005-07-18
 *
 *******************************************************************************/
function getNextBusinessDate(fromDate, toDays, targetFieldName, nextFieldName){
  var tempForm = document.tempForm;

    tempForm.tempValue1.value = fromDate;
    tempForm.tempValue2.value = toDays;
    tempForm.tempValue3.value = targetFieldName;
	tempForm.tempValue4.value = nextFieldName;

    tempForm.target = "getName";
    tempForm.action = "/commoncode/CMGetNextBusinessDate.jsp";
    tempForm.submit();
}
