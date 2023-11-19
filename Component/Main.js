import React from 'react'
import back1 from '../img/back_img/back_img(1).png'
import back2 from '../img/back_img/back_img(2).png'
import back3 from '../img/back_img/back_img(3).png'
import back4 from '../img/back_img/back_img(4).png'


const Select = [
    {
        image: `${back1}`,
        title: 'TRAVLE WITH OLD FRIEND, SUNGWHA',
        sub: '오랜 친구같은 여행사 성화투어',
        desc: '오래 알고 지내는 친구처럼 언제나 편안히 찾을 수 있는 여행사, 성화투어 입니다.',
        select : {
            menu1 : 'BUSINESS',
            menu2 : 'PEOPLE',
            menu3 : 'ABOUT'
        }
    },
    {
        image: `${back2}`,
        title: 'TRAVLE WITH OLD FRIEND, SUNGWHA',
        sub: 'BUSINESS',
        desc: '고객들의 편의를 최우선으로 생각하며 자체 정비소를 바탕으로 안전한 운행을 위해 노력하는 성화투어입니다',
        select : {
            menu1 : '전세버스 렌탈',
            menu2 : '국내/국외 테마여행',
            menu3 : '출/퇴근 운행',
            menu4 : '차량정비',
            menu5 : '차량용품 판매'
        }
    },
    {
        image: `${back3}`,
        title: 'TRAVLE WITH OLD FRIEND, SUNGWHA',
        sub: 'PEOPLE',
        desc: '안전운행과 친절운행을 통해 고객들의 편의를 최우선으로 밤낮없이 노력하는 성화투어의 사람들입니다',
        select : {
            menu1 : '인재상',
            menu2 : '채용안내',
            menu3 : '채용공고'
        }
    },
    {
        image: `${back4}`,
        title: 'TRAVLE WITH OLD FRIEND, SUNGWHA',
        sub: 'ABOUT',
        desc: '체계적이고 전문적인 관리 시스템을 도입하여 기업체, 학교 통근부터 국내여행과 해외여행까지, 오랜 친구같은 여행사, 성화투어입니다',
        select : {
            menu1 : '그룹소개',
            menu2 : 'CEO 인사말',
            menu3 : '그룹이념',
            menu4 : '그룹연혁',
            menu5 : '그룹 CI 및 상징물',
            menu6 : '계열사'
        }
    },
]


function Main() {
    const containerStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
  return (
    <div>
        {Select.map((item, index) => (
            <div key={index} style={{backgroundImage:item.image}}>
                {/* {{ ...containerStyle, backgroundImage: `url(${item.image})` }} 이렇게 하라고 하는데 안되는데???? */}
                {/* <img src={item.image}/> <br/> 이렇게하면 이미지느ㅜㄴ 나오는데 백으로 안들어가 */} 
                {item.title} <br />
                {item.sub} <br />
                {item.desc} <br />
                <div className='select'>
                    {Object.values(item.select).join(' ')}
                </div>
                <br />
            </div>
        ))}
    </div>
  )
}

export default Main
