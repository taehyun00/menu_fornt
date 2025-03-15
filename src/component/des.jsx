import '../pagescss/des.css'
function Des(props){

    return(
        <div className='des_back'>
            <p>{props.when}</p>
            <img src={props.imgs}></img>


            <div className='des_back_des'>
            <p>{props.name}</p>
            <p>{props.des}</p>
            </div>
        </div>
    )

}

export default Des;