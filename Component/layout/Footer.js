import React from 'react';
import Logo from '../../img/logo.png';
import blog from '../../img/sns/blog.png';
import company from '../../img/sns/company.png';
import facebook from '../../img/sns/facebook.png';
import instar from'../../img/sns/instar.png';
import twitter from'../../img/sns/twitter.png';
import youtube from '../../img/sns/youtube.png';

const CompanyInfo = [{
    name: '(주)성화투어',
    people: ' 김성태',
    address: '수원시 권선구 배송고객로 804번길 224-46',
    fax: '031-295-7151',
    tel: '301-293-7111',
    mail: 'wunghwatour@daum.net',
    desc: 'COPYRIGHT 2020.(주)성화투어. All rights reserved.'
}]


const Sns = [
    {image: company},
    {image: youtube},
    {image: facebook},
    {image: twitter},
    {image: instar},
    {image: blog},
  ];
  
  const Footer = () => {
    return (
      <div className='footer'>
        <table>
          <tbody>
            <tr>
              <td>{CompanyInfo[0].name} | CEO: {CompanyInfo[0].people} | {CompanyInfo[0].address}</td>
            </tr>
            <tr>Fax: {CompanyInfo[0].fax} | TEL: {CompanyInfo[0].tel} | e-mail: {CompanyInfo[0].mail}</tr>
            <tr>
              <td colSpan="3">
                <a href='./'><img src={Logo} alt='Company Logo' /></a>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
            <tr>
            <div className='footer_item'>
            <hr />
                {Sns.map((item, index) => (
                    <div key={index}>
                    <img className='sns_logo' src={item.image} alt={`${item.name} Logo`} />
                    <br />
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    <br />
                    </div>
                ))}
                </div>
            </tr>
            <tr>
                {CompanyInfo[0].desc}
            </tr>
        </table>
        
        
      </div>
    );
  };
  
  export default Footer;