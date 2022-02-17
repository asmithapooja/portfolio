import React from 'react';
import github from '../Github.jpeg';

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
                    Keep It Clean & Simple - Development
                </p>
                <p className="a-desc">
                    I'm learning Web,Mobile Development and DSA. I build projects in my spare time for fun. I really enjoy learning frameworks like React, React-Native. I also enjoy UI/UX design in general
                    
                </p>
            </div>
        </div>

    )
};

                        export default Body2;
