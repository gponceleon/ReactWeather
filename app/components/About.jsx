const React=require('react');

const About = (props)=>{
    return(
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application build in React</p>
        <p>
            Here are some of the tools I used:
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> This was the JS framework used.
            </li>
            <li>
                <a href="https://openweathermap.org">Open Weather Map</a> Website to search weather. 
            </li>
        </ul>
    </div>
    )
};

module.exports=About;