/**
includePath:绑定前置路径
include:绑定js文件或css文件
Ajax:ajax方法
GetQueryString：获取Url参数
**/
var Util={
	Base:{
		includePath:"",
		include:function(file){
			var files = typeof file == "string"?[file]:file;
			for(var i=0;i<files.length;i++){
				var name=files[i].replace(/^\s|\s$/g,"");
				var att = name.split('.');
				var ext = att[att.length-1].toLowerCase();
				var isCss = ext = "css";
				var tag = isCss?"link":"script";
				var attr = isCss?" type='text/css' rel='stylesheet' ":" language='javascript' type='text/javascript' ";
				var link = (isCss?"href":"src")+"='"+this.includePath+name+"'";
				if($(tag+"["+link+"]").length == 0) document.write("<"+tag+attr+link+"></"+tag+">");
			}
		},
		Ajax:function(url,type,time,successfunc,errorfunc,returntype){
			var nowDT = new Date();
			var ndt = nowDT.toLocaleTimeString();
			//url += "&dt="+ndt;
			$.ajax({
	            url: url,
	            type: type,
	            timeout: time,
	            datatype: returntype,
	            error: errorfunc,
	            success: successfunc
	        })
		},
		GetQueryString:function(name){
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return unescape(r[2]); return null;
		}
	},
	control:{
		table:function(data,css,title,controlID){
			var div_one = document.createElement("div");
				div_one.className = css.bossClass;//"portlet box red";
			var div_title = document.createElement("div");
				div_title.className = css.titleClass;//"portlet-title";
			var div_caption = document.createElement("div");
				div_caption.className = css.captionClass;//"caption";
				div_caption.innerHTML = title;
			var div_two = document.createElement("div");
				div_two.className = css.bodyClass;//"portlet-body";

			
			var tab = document.createElement("table");
			tab.className= css.tableClass;//"table table-hover";
			var row = tab.insertRow();
			for(var key in data[0]){
				NewCell1 = row.insertCell();
				NewCell1.innerHTML = key;
			}
			for(var i=0;i<data.length;i++){
				row = tab.insertRow();
				for(var key in data[i]){
					NewCell1 = row.insertCell();
					NewCell1.innerHTML = data[i][key];
				}
			}
			div_title.appendChild(div_caption);
			div_one.appendChild(div_title);
			div_one.appendChild(div_two);
			div_two.appendChild(tab);
			var width = "10px";
			div_one.style.marginLeft=width;
			div_one.style.marginRight = width;
			div_one.style.marginTop = width;
			document.getElementById(controlID).appendChild(div_one);
		},
		tableToField:function(fields,data,css,title,controlID){
			var div_one = document.createElement("div");
				div_one.className = css.bossClass;//"portlet box red";
			var div_title = document.createElement("div");
				div_title.className = css.titleClass;//"portlet-title";
			var div_caption = document.createElement("div");
				div_caption.className = css.captionClass;//"caption";
				div_caption.innerHTML = title;
			var div_two = document.createElement("div");
				div_two.className = css.bodyClass;//"portlet-body";
			var tab = document.createElement("table");
			tab.className= css.tableClass;
			var row = tab.insertRow();
			for(var i=0;i<fields.length;i++){
				NewCell1 = row.insertCell();
				NewCell1.style.width = fields[i].width+"px";
				NewCell1.innerHTML = fields[i].Name;
			}
			for(var i=0;i<data.length;i++){
				row = tab.insertRow();
				for(var j=0;j<fields.length;j++){
					NewCell1 = row.insertCell();
					NewCell1.innerHTML = data[i][fields[j].field];
				}
			}
			div_title.appendChild(div_caption);
			div_one.appendChild(div_title);
			div_one.appendChild(div_two);
			div_two.appendChild(tab);
			var width = "10px";
			div_one.style.marginLeft=width;
			div_one.style.marginRight = width;
			div_one.style.marginTop = width;
			document.getElementById(controlID).appendChild(div_one);
		},
		validateText:function(){
			var text = document.createElement("input");
			text.type="text";
			text.onblur = function(t){
				var txt = this.value;
				this.innerHTML(txt);
			}
			return text;
		}
	},
	validate:{
		passport:function(p){
			var numAvg = 0;
			var numSum = 0;
			var isTure = false;
			if(p.length == 18){
				var numSum = parseInt(p[0])*7+
							 parseInt(p[1])*9+
							 parseInt(p[2])*10+
							 parseInt(p[3])*5+
							 parseInt(p[4])*8+
							 parseInt(p[5])*4+
							 parseInt(p[6])*2+
							 parseInt(p[7])*1+
							 parseInt(p[8])*6+
							 parseInt(p[9])*3+
							 parseInt(p[10])*7+
							 parseInt(p[11])*9+
							 parseInt(p[12])*10+
							 parseInt(p[13])*5+
							 parseInt(p[14])*8+
							 parseInt(p[15])*4+
							 parseInt(p[16])*2;
				numAvg = numSum%11;
			}
			var num="";
			switch(numAvg){
				case 0:num = "1";break;
				case 1:num = "0";break;
				case 2:num = "x";break;
				case 3:num = "9";break;
				case 4:num = "8";break;
				case 5:num = "7";break;
				case 6:num = "6";break;
				case 7:num = "5";break;
				case 8:num = "4";break;
				case 9:num = "3";break;
				case 10:num = "2";break;
			}
			var lastPassport = p.substr(17,1);
			if(lastPassport == num){
				isTure = true;
			}
			return isTure;
		}
	}
}

//Base.includePath="www.jb51.net/html/";
//Base.include(['dedeajax.js','android.css'])