
import React, {Component} from 'react'
import Title from '../component/Title.js'
import {FaCocktail,FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends
Component {
    state={
        service:[
            {
                icons:<FaCocktail/>,
                title:"free cocktails",
                info:"free freee freeee freeee"
            },
            {
                icons:<FaHiking/>,
                title:"free cocktails",
                info:"free freee freeee freeee"
            },
            {
                icons:<FaShuttleVan/>,
                title:"free cocktails",
                info:"free freee freeee freeee"
            },
            {
                icons:<FaBeer/>,
                title:"free cocktails",
                info:"free freee freeee freeee"
            }
        ]
    }
    render(){
        return (
            <section className = "services"> 
                <Title title ="services" />
                <div className = "services-center">
                    {this.state.service.map((item,index) => {
                        return ( 
                        <article key={index} className = "services">
                            <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    }
                    )}
                </div>
                
            </section>
        );
    
    }

}
    


