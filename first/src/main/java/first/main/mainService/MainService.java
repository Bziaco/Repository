package first.main.mainService;

import java.util.List;
import java.util.Map;

public interface MainService {
    List<Map<String, Object>> selectBoardList(Map<String, Object> map) throws Exception;
    
    void insertBoard(Map<String, Object> map) throws Exception;
    
    Map<String, Object> selectBoardDetail(Map<String, Object> map) throws Exception;
    
    void updateBoard(Map<String, Object> map) throws Exception;
}
