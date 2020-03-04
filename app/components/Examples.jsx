const React=require('react');
const {Link} = require('react-router');


const Examples = (props)=>{
    return(<div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are few example location to try out:</p>
        <ul>
            <li>
                <Link to='/?location=Barcelona'>Barcelona, Spain</Link>
            </li>
            <li>
            <Link to='/?location=Caracas'>Caracas, Venezuela</Link>
            </li>
        </ul>
    </div>)
};

module.exports=Examples;