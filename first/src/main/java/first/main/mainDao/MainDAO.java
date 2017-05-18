package first.main.mainDao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import first.common.dao.AbstractDAO;
 
@Repository("mainDAO")
public class MainDAO extends AbstractDAO{

    @SuppressWarnings("unchecked")
    public List<Map<String, Object>> selectBoardList(Map<String, Object> map) throws Exception{
        return (List<Map<String, Object>>)selectList("selectBoardList", map);
    }
    
    
    public void insertBoard(Map<String, Object> map) throws Exception{
        insert("insertBoard", map);
    }
    
    
    public void updateHitCnt(Map<String, Object> map) throws Exception{
        update("updateHitCnt", map);
    }
     
    @SuppressWarnings("unchecked")
    public Map<String, Object> selectBoardDetail(Map<String, Object> map) throws Exception{
        return (Map<String, Object>) selectOne("selectBoardDetail", map);
    }
    
    public void updateBoard(Map<String, Object> map) throws Exception{
        update("updateBoard", map);
    }
}
