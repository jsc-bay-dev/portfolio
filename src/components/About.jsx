import React from 'react'

const About = () => {
    return (
        <div>
            <div className="name">Justin Choi</div>
            <div className="title">Software Engineer</div>
            <div className="pfp">
                <div className="pfp" style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    border: '3px solid #ddd',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    color: '#999'
                }}>
                    👤
                </div>
            </div>
            <div className="blurb">
                <p>
                    Software engineering... it's honest, hard work that plays to my strengths, and it's something I strive to master. I enjoy solving complex problems, collaborating with others, and take pride in contributing to products and services that make a positive impact. I also derive a tremendous amount of comfort and joy in the fact that humanity's relationship with technology has had an incredibly stabilizing effect on economies all around the world, and it's a movement that I am thrilled to be a part of!
                </p>
            </div>
        </div>
    )
}

export default About