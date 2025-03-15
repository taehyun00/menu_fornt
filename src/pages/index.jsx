
import '../pagescss/index.css'
import emoji from '../images/emojis.svg'
import logo from '../images/logo.svg'
import Des from '../component/des'

import sad from '../images/sad.svg'
import happy from '../images/happy.svg'
import angry from '../images/angry.svg'

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
            <div className='index_ex'>
            <Des
            name = "초밥"
            des = "밥에 초를 섞어 만든 스메시에 해산물, 달걀, 채소 등의 재료를 얹어 먹는 음식이다.입 안에서 나는 맛들을 즐기면 슬픔은 어느새 사라진다."
            when = "슬플때"
            imgs = {sad}
            />

            <Des
            name = "삼겹살"
            des = "돼지의 갈비에 붙어 있는 살코기와 지방이 삼겹을 형성하고 있는 부위를 말한다.구워먹으면 기쁨이 두배"
            when = "기쁠때"
            imgs = {happy}
            />

            <Des 
            name = "엽기떡볶이"
            des = "매운맛이 트레이드마크인 떡볶이많은 인기를 기반으로 흔히들 스트레스를 받을때 주로 먹는다.스트레스가 확 사라진다."
            when = "화날 떄"
            imgs = {angry}
            />
            </div>
        </div>
    )

}

export default Index;