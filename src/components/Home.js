import React, { useState } from 'react'

export const Home = () => {
    // const skillList = ['Web Designer', 'Frontend Developer', 'Web Builder'];
    // const [skilView, setSkillView] = useState('');
    // skillList.map(skill=>{
    //     // skill = skill.spli
    //     setInterval(()=>setSkillView(skill))
    // })
    return (
        <>
            <div className="home-content">
                <div className="container">
                    <div className="profile-information">
                        <img src={require("./img/myImg.jpg")} alt="" className='home-profile-img border-5 '/>
                        <div className="profile-information-texts">
                            <p className="propf-info-line-1">HEY! I AM</p>
                            <h1 className="propf-info-line-2">Sibsankar De</h1>
                            <h2 className="propf-info-line-3">I'm a <span className="txt-rotate px-2 border-right-0" data-period="2000" data-rotate="[ &quot;Web Designer.&quot;, &quot;Developer.&quot;, &quot;Photographer.&quot;, &quot;Marketer.&quot;, &quot;Blogger&quot; ]"><span className="wrap">Freelancer.</span></span></h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
