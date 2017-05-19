package first;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
 
@Controller
public class SampleController {
    Logger log = Logger.getLogger(this.getClass());
     
    @RequestMapping(value="/jqGridBoard/jqBoardList.do")
    public ModelAndView board(){
        ModelAndView mv = new ModelAndView("jqGridBoard/jqBoardList");
        
         
        return mv;
    }

}
