

		 function getAesString(str,key,iv){//加密
	            var key  = CryptoJS.enc.Utf8.parse(key);
	            var iv   = CryptoJS.enc.Utf8.parse(iv);
	            var encrypted = CryptoJS.AES.encrypt(str,key,
	                    {
	                        iv:iv,
	                        mode:CryptoJS.mode.CBC,
	                        padding:CryptoJS.pad.Pkcs7
	                    });
	            return encrypted;
	        }


