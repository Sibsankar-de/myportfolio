import React from 'react'

export const Skills = () => {
    return (
        <>
            <section id='skills' className="m-container container container-fluid d-flex flex-column align-items-center">
                <div className="about-heading mb-5">
                    <h1 className='text-center'>My Skills</h1>
                </div>
                <div className="row progress-circle mb-5 mt-3">
                    <div className="col-lg-4 mb-4">
                        <div className="bg-white rounded shadow p-4">
                            <h2 className="h5 font-weight-bold text-center mb-4">HTML</h2>

                            <div className="progress mx-auto" data-value="94">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary" style={{ transform: 'rotate(150deg)' }}></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={{ transform: 'rotate(180deg)' }}></span>
                                </span>
                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold">94<sup className="small">%</sup></div>
                                </div>
                            </div>


                            <div className="row text-center mt-4">
                                <div className="col-6 border-right">
                                    <div className="h4 font-weight-bold mb-0">58%</div><span className="small text-gray">Last week</span>
                                </div>
                                <div className="col-6">
                                    <div className="h4 font-weight-bold mb-0">67%</div><span className="small text-gray">Last month</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="bg-white rounded shadow p-4">
                            <h2 className="h5 font-weight-bold text-center mb-4">React</h2>

                            <div className="progress mx-auto" data-value="80">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary" style={{ transform: 'rotate(170deg)' }}></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={{ transform: 'rotate(180deg)' }}></span>
                                </span>
                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold">97<sup className="small">%</sup></div>
                                </div>
                            </div>


                            <div className="row text-center mt-4">
                                <div className="col-6 border-right">
                                    <div className="h4 font-weight-bold mb-0">58%</div><span className="small text-gray">Last week</span>
                                </div>
                                <div className="col-6">
                                    <div className="h4 font-weight-bold mb-0">88%</div><span className="small text-gray">Last month</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="bg-white rounded shadow p-4">
                            <h2 className="h5 font-weight-bold text-center mb-4">jQuery</h2>

                            <div className="progress mx-auto" data-value="75">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary" style={{ transform: 'rotate(90deg)' }}></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={{ transform: 'rotate(180deg)' }}></span>
                                </span>
                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold">75<sup className="small">%</sup></div>
                                </div>
                            </div>


                            <div className="row text-center mt-4">
                                <div className="col-6 border-right">
                                    <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                </div>
                                <div className="col-6">
                                    <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 animate-box">
                        <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                            <h5>CSS</h5>
                            <div className="progress">
                                <div className="progress-bar color-1" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}>
                                    <span>95%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box">
                        <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                            <h5>Java Script</h5>
                            <div className="progress">
                                <div className="progress-bar color-2" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{ width: '92%' }}>
                                    <span>92%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box">
                        <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                            <h5>HTML5</h5>
                            <div className="progress">
                                <div className="progress-bar color-3" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}>
                                    <span>95%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-preferance my-4">
                    <div className="hire-box rounded-4 p-4">
                        <div className="col-md-7 text-center ">
                            <h2 className='text-light'>I'm <span className='text-warning'>Available</span> for freelancing</h2>
                            <p className='text-light'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <a href="https://www.upwork.com/freelancers/~01dadb3ad61f410a9d" className="btn btn-info py-2 px-5 text-light">Hire me</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
