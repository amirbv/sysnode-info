import React, { Component } from 'react';
import InnerBanner from '../parts/InnerBanner';
import MetaTags from 'react-meta-tags';
var publicurl=process.env.PUBLIC_URL;
export class About extends Component {
    render() {
        return(
            <main className="aboutpage">
                <MetaTags>
                        <title>Syscoin Masternodes - About Syscoin Masternodes</title>
                        <meta name="keywords" content="Syscoin, Masternodes, Blockchain, Crypto, Blockmarket, Coins, Bitcoin, Cryptocurrency, Rewards" />
                        <meta name="description" content="Sysnode.info provides Syscoin Masternode Operators the tools to maximise the most from their Masternodes!" />
                </MetaTags>
                <InnerBanner heading="Learn About Syscoin Masternodes "/>
                <section className="section_About bg-light"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 order-2 order-lg-1">
                        <div className="custom__about__left">
                            <h3>What sets <span className="text-primary">Syscoin Masternodes apart?</span></h3>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right pr-1"></i> Z-DAG Protocol’s instant Asset transfer</li>
                                <li><i className="fa fa-angle-right pr-1"></i> Scalability</li>
                                <li><i className="fa fa-angle-right pr-1"></i> Facilitation of future Syscoin features and services</li>
                                <li><i className="fa fa-angle-right pr-1"></i> Seniority benefits to masternode operators</li>
                            </ul>
                            <p>Syscoin Masternodes protect the blockchain from network attacks, in the same vein as traditional proof of stake algorithms. It’s often expensive to accumulate enough of a currency to create a masternode. This expense helps keep the network decentralised, as it would take an ungodly amount of money to purchase enough currency to have a monopoly on its nodes.</p>
                            <p>The cost of operating a Masternode also keeps operators honest. Unlike Bitcoin miners, who may switch from one coin on its blockchain to the next based on profitability, operators are incentivised to properly maintain and upkeep their Syscoin Masternodes. The exorbitant initial investment serves as collateral, whereby if operators want their investment to pay off, they have to play by the blockchain’s rules. Between the high operation costs and promising return on investment, it’s in an operator’s best interest to operate his/her node properly and without any malicious intent.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mb-5 mb-lg-0 order-1 order-lg-2">
                        <div className="about-img text-center text-lg-right">
                            <img src={publicurl+'/assets/images/header-img1.png'} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section_governance">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-0">
                        <div className="about-img text-center text-lg-right">
                            <img src={publicurl+'/assets/images/governance.png'} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom__about__left text-white text-center text-lg-left">
                            <h3 className="text-white">Decentralized Governance</h3>
                            <p className="lead font-italic">How does Decentralized Governance work?</p>
                            <p>Each month a pot of governance funding is generated by the Syscoin blockchain ‘superblock’. 
                                Any individual or group can submit a proposal to receive some of these funds. 
                                Masternode owners vote on the proposals using voting technology embedded in the Syscoin blockchain (accessible via the Qt wallet or syshub.org).
                                At the end of the monthly voting period funds are distributed to the proposals with the greatest number of positive votes. 
                                Successful projects tend to be those that support and advance Syscoin Platform, such as marketing initiatives and application development.
                            </p>
                            <p>Syscoin have implemented a % decline schedule — starting the first month with 1,500,000 SYS and ending on the 24th month with 196,708 SYS. 
                                After that period, the superblock starts with 151,767 SYS a month and will decline 5% every year.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
        <section className="section_About bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                        <div className="custom__about__left text-center text-lg-left">
                            <h3>Rewards</h3>
                            <p>75% of each regular block reward is distributed to Masternode operators as an incentive to continue running the node. 
                                Each payout amounts to roughly 25 SYS, though this will increase over time due to the Seniority Benefits mechanism. 
                                The likelihood of a Masternode receiving a payout is inversely proportional to the total number of Masternodes on the network. 
                                At the time of writing, a Masternode is likely to receive a 25 SYS reward roughly once every 24 hours. </p>
                            <p>As a seniority benefit, Masternode operators receive a 35% bonus to their base reward after one year, and a 100% bonus after 2.5 years. 
                                This benefit is paid only if the collateral for an active Masternode is kept locked at the same address for the entire qualification period.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-0 order-1 order-lg-2">
                        <div className="about-img text-center text-lg-right">
                            <img src={publicurl+'/assets/images/reward.png'} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section_seniority pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="heading___bar text-center text-white mb-5">
                            <h3 className="text-white">Masternode Seniority Explained</h3>
                            <p>It’s been noted that Syscoin price fluctuations may in turn cause fluctuations in the number of masternodes running on the network. To mitigate this and incentivise nodes to provide services consistently for long periods of time, we have introduced a seniority mechanism that increases ROI for long-term nodes.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="timeline section-box-margin">
                            <div className="block block-left">
                               <h3>There are two levels of Seniority</h3>
                               <p>1 year – 35% increase of base rate</p>
                               <p>2.5 years - 100% increase of base rate</p>
                            </div>
    
                            <div className="block block-right mt-30">
                               <h3>Syscoin Average Block is 60 Seconds</h3>
                               <p>Therefore;</p>
                               <p>1 Month = 43,800 Blocks</p>
                               <p>1 Year Seniority = 526,600 Blocks</p>
                               <p>2.5 Year Seniority = 1,314,000 Blocks</p>
                            </div>
    
                            <div className="block block-left mt-30">
                               <h3>Calculating 1 Year Seniority</h3>
                               <p>You sent your 100,000 Syscoin at Block Height 1000.</p>
                               <p>525,600 + 1,000 = 526,600.</p>
                               <p>526,600 Block Height = Your first increase in Seniority.</p>
                            </div>
    
                            <div className="block block-right mt-30">
                               <h3>Calculating 2 Year Seniority</h3>
                               <p>You sent your 100,000 Syscoin at Block Height 1000.</p>
                               <p>1,314,000 + 1000 = 1,315,000</p>
                               <p>1,314,000 Block Height = Your second increase in Seniority.</p>
                            </div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                    <div className="col-lg-10 col-md-12 col-sm-12 text-center text-white">
                        <p>Please note that Seniority is based purely on the <b>Transaction Block Height</b>. The <b>ONLY</b> thing that will affect your Seniority is if you MOVE YOUR 100,000 Syscoin, which creates a new transaction, giving you a new Block Height.</p>
                        <p>Stopping your Syscoin Masternode, restarting your server, closing QT, upgrading Masternodes, Initialising your Masternode, changing your IP address, and anything you can possibly think of does not effect your Seniority.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center text-white">
                        <h4 className="text-white">Requirements to Setup a Syscoin Masternode</h4>
                        <ul className="list-unstyled Requirements__list mb-0">
                            <li><i className="fa fa-angle-right"></i> 100,000 Syscoin</li>
                            <li><i className="fa fa-angle-right"></i> Ubuntu 18.04.1 LTS with C++17 Compiler</li>
                            <li><i className="fa fa-angle-right"></i> + KVM or OpenVZ (KVM preferred)</li>
                            <li><i className="fa fa-angle-right"></i> 2 Core x64 CPU w/SSE (4 Core Recommended)</li>
                            <li><i className="fa fa-angle-right"></i> 4GB+ Ram (8GB+ Recommended) 4GB Swap File if under 8GB</li>
                            <li><i className="fa fa-angle-right"></i> 80GB+ SSD Hard Disk (100GB+ Recommended)</li>
                            <li><i className="fa fa-angle-right"></i> Static IP Address</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            </main>
            
        )
    }
}

export default About;