import React, {Children, useEffect, useRef, useState} from 'react';
import '../../Sidebar.css';

const Sidebar = ({ width=300, children}) => {
    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState(width);
    const side = useRef();
}

const toggleMenu = () => {
    if (xPosition > 0){
        setX(0);
        setOpen(true);
    } else {
        setX(width);
        setOpen(false);
    }
};

const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)){
        await setX(width);
        await setOpen(false); // await, async 비동기작업
    }
}

function Sidebar () {


useEffect (() => {
    window.addEventListener('click', handleClose);
    return () => {
        window.removeEventListener('click', handleClose);
    };
})

return (
    <div className='container'>
        <div ref={side} className='sidebar' style={{width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}>
            <button onClick={() => toggleMenu()} className='button'>
                {isOpen ? <span>X</span> : '이미지'    }
            </button>

            <div className='content'>{Children}</div>
        </div>
    </div>
)
}

export default Sidebar;


// const Select = [
//     {
//         sub: 'BUSINESS',
//         select : {
//             menu1 : '전세버스 렌탈',
//             menu2 : '국내/국외 테마여행',
//             menu3 : '출/퇴근 운행',
//             menu4 : '차량정비',
//             menu5 : '차량용품 판매'
//         }
//     },
//     {
//         sub: 'PEOPLE',
//         select : {
//             menu1 : '인재상',
//             menu2 : '채용안내',
//             menu3 : '채용공고'
//         }
//     },
//     {
//         sub: 'ABOUT',
//         select : {
//             menu1 : '그룹소개',
//             menu2 : 'CEO 인사말',
//             menu3 : '그룹이념',
//             menu4 : '그룹연혁',
//             menu5 : '그룹 CI 및 상징물',
//             menu6 : '계열사'
//         }
//     },
// ]

// function Navi() {
//   return (
//     <div>
//         {Select.map((item, index) => (
//             <div key={index}>
//                 <table>
//                     <tr>
//                         <td className='nav_left'>
//                             {item.sub}
//                         </td>
//                         <td className='nav_right'>
//                             <div className='nav_select'>
//                                 {Object.values(item.select).join('')}
//                             </div>
//                         </td>
//                     </tr>
//                 </table>
//                 <br/>
//             </div>   
//         ))}
//     </div>
//   )
// }

// export default Sidebar
