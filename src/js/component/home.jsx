import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component setTodos(Todos.concat(inputValue))
const Home = () => {
	const [ inputValue, setInputValue ] = useState('');
    const [Todos, setTodos] = useState([]);
	return (
<>
				<div className=" container Father " > 
					<div className="container bg-light rounded px-0 mt-4">
					<h1 className="text-center TODOS rounded-top  mb-0 ">Todos</h1>
						<ul>
						<input  className="px-2  " type="text" 
						minLength={3} 
						required={true}
						onChange={e => setInputValue(e.target.value)} 
						value={inputValue} placeholder="WHAT NEEDS TO BE DONE?"
						onKeyUp={e => {
							if (e.key === 'Enter' && inputValue.length >= 3) {
								setTodos([...Todos , inputValue]);
								setInputValue("")
							}
						}}
						/>
						{Todos.map( (todo, index) => 
							<li className="border-top border-bottom p-2 mx-2 ">
								{todo}<i className="fas fa-eraser Icono " 
								onClick={()=> 
									{
										setTodos(Todos.filter((item, currentIndex) => index !=currentIndex))
									}}>

									</i>
							</li>)}
						</ul>
						<div className="p-0 text">{Todos.length} task</div>
					</div>
				</div>
				<div className="SonOne container  rounded-bottom">   </div>
				<div className="SonTwo container  rounded-bottom">   </div>
</>				
	);
};

export default Home;
