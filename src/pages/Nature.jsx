import React from "react";
import NatureCard from "../componets/Nature/NatureCard";

const Nature = () => {
	const nature = [
		{
			image1: "../images/nature1.jpg",
			image2: "../images/nature2.jpg",
		},
		{
			image1: "../images/nature3.jpg",
			image2: "../images/nature4.jpg",
		},
		{
			image1: "../images/nature5.jpg",
			image2: "../images/nature6.jpg",
		}
	];


	return (
		<div className="p-4">
			<div className=" pt-[45vh]">
				<h2 className="font-[font1] text-[9.5vw] uppercase text-white">Nature</h2>
			</div>
			<div className="-mt-15">
				{nature.map(function (elem) {
					return <NatureCard image1={elem.image1} image2={elem.image2} />; x
				})}
			</div>

		</div>
	);
};

export default Nature;
