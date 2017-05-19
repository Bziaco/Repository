package first.main.mainService;

import java.util.List;
import java.util.Map;

public interface GridService {
    List<Map<String, Object>> selectGridList(Map<String, Object> map) throws Exception;
    
    /*void insertBoard(Map<String, Object> map) throws Exception;
    
    Map<String, Object> selectBoardDetail(Map<String, Object> map) throws Exception;
    
    void updateBoard(Map<String, Object> map) throws Exception;*/
}
