import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState('');
    const [Todos, setTodos] = useState([]);
	return (
		<div className=" container">
			<div className=" container">
				<div className=" container"> 
					<h1 className="text-center ">Todos</h1>
					<div className="container bg-light">
						<ul>
						<input  className="px-2 bg-light" type="text" 
						onChange={e => setInputValue(e.target.value)} 
						value={inputValue} placeholder="WHAT NEED TO BE DONE?"
						onKeyUp={e => {
							if (e.key === 'Enter' && inputValue != "") {
								setTodos(Todos.concat(inputValue))
							}
						}}
						/>
						{Todos.map( (todo, index) => 
							<li className="border-top border-bottom p-2 mx-2">
								{todo}<i className="fas fa-eraser float-right" 
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
			</div>
		</div>
	);
};

export default Home;
