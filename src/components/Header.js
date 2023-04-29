import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg ${scrollPosition>=333.3333435058594?'navbar-bottom-view':'bg-body-transparent'}`}>
                    <div className="container-fluid">
                        <HashLink className="navbar-brand mx-3" to="/#"><span >S</span>ibsankar</HashLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <HashLink smooth className="nav-link" aria-current="page" to="/#">Home</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="/#about">About me</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="/#skills">Skills</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="/#contact">Contact</HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
