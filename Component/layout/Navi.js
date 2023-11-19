import React from 'react'

const Select = [
    {
        sub: 'BUSINESS',
        select : {
            menu1 : '전세버스 렌탈',
            menu2 : '국내/국외 테마여행',
            menu3 : '출/퇴근 운행',
            menu4 : '차량정비',
            menu5 : '차량용품 판매'
        }
    },
    {
        sub: 'PEOPLE',
        select : {
            menu1 : '인재상',
            menu2 : '채용안내',
            menu3 : '채용공고'
        }
    },
    {
        sub: 'ABOUT',
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

function Navi() {
  return (
    <div>
        {Select.map((item, index) => (
            <div key={index}>
                <table>
                    <tr>
                        <td className='nav_left'>
                            {item.sub}
                        </td>
                        <td className='nav_right'>
                            <div className='nav_select'>
                                {Object.values(item.select).join('')}
                            </div>
                        </td>
                    </tr>
                </table>
                <br/>
            </div>   
        ))}
    </div>
  )
}

export default Navi
