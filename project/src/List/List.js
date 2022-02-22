import './List.css';
const List = (props) => {
    const list = props.list;
    return (
        <div>
            {list.map((item, index)=> {
                return <li className="list-item" key={index}>{item}
                    <button className='delete-button' onClick={() => props.onDelete(index)}> Delete </button>
                </li>
            })}
        </div>
    );
}   
 
export default List;

