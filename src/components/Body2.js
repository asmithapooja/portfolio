import React from 'react';
import github from '../Picture.jpg';

const Body2 = () => {
    return (
        <div className="a" id = "aboutscroll">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={github}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Keep It Clean & Simple
                </p>
                <p className="a-desc">
                    I'm learning Web development. I build projects in my spare time for fun. I really enjoy learning new frameworks. I also enjoy UI/UX design in general
                    <p className="aboutPara">
                                Skills and Experience
                                <ul className='lists'>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li>ReactJs</li>
                                    <li>Java</li>
                                </ul>
                            </p>
                </p>
            </div>
        </div>

    )
};

                        export default Body2;
