package first.main.mainController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import first.main.mainService.GridService;
 
@Controller
public class GridController {
    Logger log = Logger.getLogger(this.getClass());
    
    @Resource(name="gridService")
    private GridService gridService;
    
    @RequestMapping(value="/jqGridBoard/jqBoardList.do")
    public String jqBoardList(Map<String,Object> commandMap, Model model) throws Exception{
       
       return "jqGridBoard/jqBoardList";
    }
    
    
    @RequestMapping(value="/jqGridBoard/selectJqList.do",  produces = "application/json;charset=UTF-8")
    public @ResponseBody Map<String, Object> selectJqList(Map<String,Object> commandMap, Model model) throws Exception{
       List<Map<String,Object>> list = gridService.selectGridList(commandMap);
       
       Map<String , Object> returnMap = new HashMap<String , Object>();
       returnMap.put("list", list);
        
       return returnMap;
    }

}
