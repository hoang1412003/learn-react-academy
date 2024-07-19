import "./footer.css"
function Footer(props){
    const x = 5
    const {name, age} = props;
    const arr = [{name: "văn thỏ", age: 12}, {name: "văn mèo", age: 12}, {name: "văn chó", age: 12}]
    return(
        <div className="footer" id="footer1">
            hello footer
            <h1>x = {x}</h1>
            <h1>tên: {name}</h1>
            <h1>age: {age}</h1>
            {
                arr&&arr.map((item, index) => (<p key={index}>{item.name}</p>))
            }
        </div>
    )
}
export default Footer;