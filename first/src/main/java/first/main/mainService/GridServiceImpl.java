package first.main.mainService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import first.main.mainDao.GridDao;

@Service("gridService")
public class GridServiceImpl implements GridService{
    Logger log = Logger.getLogger(this.getClass());
     
    @Resource(name="GridDao")
    private GridDao gridDao;
     
    @Override
    public List<Map<String, Object>> selectGridList(Map<String, Object> map) throws Exception {
        return gridDao.selectGridList(map);
    }
    
/*    @Override
    public void insertBoard(Map<String, Object> map) throws Exception {
        mainDAO.insertBoard(map);
    }
    
    @Override
    public Map<String, Object> selectBoardDetail(Map<String, Object> map) throws Exception {
        mainDAO.updateHitCnt(map);
        Map<String, Object> resultMap = mainDAO.selectBoardDetail(map);
        return resultMap;
    }
    
    @Override
    public void updateBoard(Map<String, Object> map) throws Exception{
        mainDAO.updateBoard(map);
    }*/
}
