package first.main.mainController;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import first.common.common.CommandMap;
import first.main.mainService.MainService;
 
@Controller
public class MainController {
    Logger log = Logger.getLogger(this.getClass());
     
    @Resource(name="mainService")
    private MainService mainService;
     
    @RequestMapping(value="/main/openBoardList.do")
    public String openmainBoardList(Map<String,Object> commandMap, Model model) throws Exception{
         
        List<Map<String,Object>> list = mainService.selectBoardList(commandMap);
        model.addAttribute("list",list);
         
        return "main/boardList";
    }
    
    @RequestMapping(value="/main/testMapArgumentResolver.do")
    public ModelAndView testMapArgumentResolver(CommandMap commandMap) throws Exception{
        ModelAndView mv = new ModelAndView("");
         
        if(commandMap.isEmpty() == false){
            Iterator<Entry<String,Object>> iterator = commandMap.getMap().entrySet().iterator();
            Entry<String,Object> entry = null;
            while(iterator.hasNext()){
                entry = iterator.next();
                log.debug("key : "+entry.getKey()+", value : "+entry.getValue());
            }
        }
        return mv;
    }
    @RequestMapping(value="/main/openBoardWrite.do")
    public ModelAndView openBoardWrite(CommandMap commandMap) throws Exception{
        ModelAndView mv = new ModelAndView("main/boardWrite");
         
        return mv;
    }
    @RequestMapping(value="/main/insertBoard.do")
    public ModelAndView insertBoard(CommandMap commandMap) throws Exception{
        ModelAndView mv = new ModelAndView("redirect:/main/openBoardList.do");
         
        mainService.insertBoard(commandMap.getMap());
         
        return mv;
    }
    @RequestMapping(value="/main/openBoardDetail.do")
    public ModelAndView openBoardDetail(CommandMap commandMap) throws Exception{
        ModelAndView mv = new ModelAndView("main/boardDetail");
         
        Map<String,Object> map = mainService.selectBoardDetail(commandMap.getMap());
        mv.addObject("map", map);
         
        return mv;
    }
    @RequestMapping(value="/main/openBoardUpdate.do")
    public ModelAndView openBoardUpdate(CommandMap commandMap) throws Exception{
        ModelAndView mv = new ModelAndView("main/boardUpdate");
         
        Map<String,Object> map = mainService.selectBoardDetail(commandMap.getMap());
        mv.addObject("map", map);
         
        return mv;
    }
     
    @RequestMapping(value="/main/updateBoard.do")
    public ModelAndView updateBoard(CommandMap commandMap) throws Exception{
        ModelAndView mv = new ModelAndView("redirect:/main/openBoardDetail.do");
         
        mainService.updateBoard(commandMap.getMap());
         
        mv.addObject("IDX", commandMap.get("IDX"));
        return mv;
    }
}
