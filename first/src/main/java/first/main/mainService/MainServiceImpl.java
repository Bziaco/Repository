package first.main.mainService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import first.main.mainDao.MainDAO;

@Service("mainService")
public class MainServiceImpl implements MainService{
    Logger log = Logger.getLogger(this.getClass());
     
    @Resource(name="mainDAO")
    private MainDAO mainDAO;
     
    @Override
    public List<Map<String, Object>> selectBoardList(Map<String, Object> map) throws Exception {
        return mainDAO.selectBoardList(map);
    }
    
    @Override
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
    }
}
