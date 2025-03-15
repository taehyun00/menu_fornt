import '../pagescss/des.css'
function Des(props){

    return(
        <div className='des_back'>
            <p className='des_back_when'>{props.when}</p>

            <div className='des_back_ele'>
            <img src={props.imgs} className='des_back_img'></img>


            <div className='des_back_des'>
            <p className='des_back_name'>{props.name}</p>
            <p className='des_back_desc'>{props.des}</p>
            </div>
            </div>

        </div>
    )

}

export default Des;