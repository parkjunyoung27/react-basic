const Card = ({title}) => {
    // props 안넣고 바로 넣고싶으면 키값을 넣어주면 된다.
    // props 들어오는 형태 {title:'title'}
    // console.log(props)
    return (
        <div className='card mb-3' >
            <div className='card-body'>
                {title}
            </div>
        </div>
    );
};

export default Card;