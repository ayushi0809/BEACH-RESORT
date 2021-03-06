import React from 'react'
import {useContext} from "react"
import {RoomContext} from '../context.js'
import Title from '../component/Title.js'
//get all unique values
const getUnique = (item,value) =>{
    return [...new Set(item.map(item=>(item[value])))]

}
export default function RoomsList({rooms}){
    const context = useContext(RoomContext);
    const{
        handleChange,
        type,
        capacity,
        price,
        minprice,
        maxprice,
        minsize,
        maxsize,
        breakfast,
        pets

    } = context
    //getUnique
    let types = getUnique(rooms,'type')
    //add all
    types = ['all',...types];
    //map to jsx
    types = types.map((item,index) =>{
        return <option value = {item} key = {index}>{item}</option>
    })
    let people = getUnique(rooms,'capacity')
    people =people.map((item,index)=>{
        return <option key = {index} value = {item}>{item}</option>
    })

    return(
        <section className = "filter-container">
            <Title title = "search Rooms"></Title>            
            <form className = "filter-form">
                {/*select type */}
                <div className = "form-group">
                    <label htmlFor = "type"> room type</label>
                    <select name = "type" 
                    id= "type" 
                    value={type} 
                    className = "form-control"
                    onChange = {handleChange} > 
                    {types}
                    </select>
                </div>
                {/*end of select type */}
                {/*no. of guests  */}
                <div className = "form-group">
                    <label htmlFor = "capacity"> Guests </label>
                    <select name = "capacity" 
                    id= "capacity" 
                    value={capacity} 
                    className = "form-control"
                    onChange = {handleChange} > 
                    {people}
                    </select>
                </div>
                {/*end of guests */}
                {/*room price */}
                <div className = "form-group">
                <label htmlFor = "price"> Rooms price ${price} </label>
                <input type = "range"
                 name = "price" 
                 min = {minprice}
                 max = {maxprice}
                 id= "price" 
                 value={price} 
                 className = "form-control"
                 onChange = {handleChange} ></input>
                </div>

                {/*end of room price */}
                {/*size*/}
                <div className = "form-group">
                <label htmlFor = "size"> room size </label>
                <div className = "size-inputs"> 
                <input name = "number" name="minsize" id = "size" value = {minsize} onChange = {handleChange} className = "size-input"></input>
                <input name = "number" name="maxsize" id = "size" value = {maxsize} onChange = {handleChange} className = "size-input"></input>
                </div>
                </div>
                {/* end of size*/}
                {/**extras */}
                <div className = "form-group">
                    <div className = "single-extra">
                        <input type = "checkbox" name = "breakfast" id = "breakfast" checked = {breakfast} onChange = {handleChange}></input>
                        <label htmlFor = "breakfast"> breakfast </label>
                    </div>
                    <div className = "single-extra">
                        <input type = "checkbox" name = "pets" id = "pets" checked = {pets} onChange = {handleChange}></input>
                        <label htmlFor = "pets"> pets </label>
                    </div>
                </div>
                {/** end of extras */}
            </form>

        </section>
    )
}