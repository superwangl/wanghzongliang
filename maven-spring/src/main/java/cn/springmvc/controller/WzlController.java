package cn.springmvc.controller;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import cn.springmvc.entity.Wzl;
import cn.springmvc.service.WzlService;

@Controller
public class WzlController {
	@Resource
	private WzlService service;
	
	@RequestMapping(value ="/{id}/login",method=RequestMethod.GET) //用来处理前台的login请求  
	@ResponseBody
    private  List<Wzl> hello(){
		List<Wzl> list = service.selectUser();
        for(int i=0;i<list.size();i++){
        	System.out.println(list.get(i));
        }
	
        return list;  
        
          
    }  
}
