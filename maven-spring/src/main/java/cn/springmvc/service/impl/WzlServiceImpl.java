package cn.springmvc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.springmvc.dao.WzlDAO;
import cn.springmvc.entity.Wzl;
import cn.springmvc.service.WzlService;

@Service("userService")
public class WzlServiceImpl implements WzlService{
	 @Autowired
	 private WzlDAO wdao;

	public List<Wzl> selectUser() {
		return wdao.selectUser();
	}

	

}
