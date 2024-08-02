const UserData = [
    {
        name:"James",
        city: "New York",
        designation:"Front-end Developer",
        profile:"images/img 1.jpg",
        online:true,
        skills:["UI/Ux",".Net","Go","Python","MangoDB","SQL"]
    },
    {
        name:"Laura",
        city: "London",
        designation:"Front-end Developer",
        profile:"images/img 2.jpg",
        online:false,
        skills:["UI/Ux",".Net","Python","MangoDB","SQL"]
    },
    {
        name:"John",
        city: "India",
        designation:"Front-end Developer",
        profile:"images/img 3.jpg",
        online:true,
        skills:["UI/Ux",".Net","Go","Python","MangoDB","SQL"]
    },
    
    {
        name:"Marry",
        city: "New York",
        designation:"Front-end Developer",
        profile:"images/img 4.jpg",
        online:false,
        skills:["UI/Ux",".Net","Go","Python","MangoDB","SQL","HTML","CSS","Javascript","ReactJS"]
    }
];
function User(props){
    return (
        <div className="MainContainer">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
            <img className="img" src={props.profile}></img>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.designation}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary inline">Following</button>
            </div>
            <div className="skills">
                <h4>Skills</h4>
                <ul>
                   {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                   ))}
                </ul>
            </div>
        </div>
    ); 
}

export const Usercard = () => {
    return <>
    {
        UserData.map((user,index)=>(
            <User key={index} name={user.name} 
            city={user.city} designation={user.designation}
            profile={user.profile}
            online={user.online}
            skills={user.skills}
            />
        ))
    }
    </>;
};