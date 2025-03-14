
import '../pagescss/index.css'
import emoji from '../images/emojis.svg'
import logo from '../images/logo.svg'


function Index(){

    return(
        <div className='index_back'>
            <p className='index_back_title'>오늘 뭐먹지?</p>
            <div className='index_back_spans_div'>
            <span>슬픈날에도 기쁜날에도 화나는 날에도</span>
            <br></br>
            <span className='index_back_span'>밥은 먹어야하니까</span>
            </div>


            <div className='index_img_p'>
                <img src={emoji}></img>
                <p className='index_dse_p'>감정상태에 따른 맞춤 음식 추천 서비스</p>
                <img src={logo} className='index_logo'></img>
            </div>
        </div>
    )

}

export default Index;