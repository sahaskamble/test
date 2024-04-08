export default function Navbar() {

	const navitems = [
		{
			label: "Product",
			link: "/#product",
		},
		{
			label: "Admin",
			link: "/admin/admin_dashboard",
		},
	];

	return (
		<nav className="flex justify-between px-8">
			<div className="flex justify-between items-center gap-4">
				<a href="/" className="flex justify-center items-center gap-4">
					<img
						src="/binocular.svg"
						alt="This is title image"
						width={50}
						height={50}
					/>
					<div className="text-4xl font-bold text-[--fg-color]">PickWise</div>
				</a>

				<a
					role="button"
					className=""
					aria-label="menu"
					aria-expanded="false"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div className="py-6">
				<ul className="flex justify-evenly items-center gap-8">
					{
						navitems.map((items) => (
							<li>
								<a href={items.link} className="">
									{items.label}
								</a>
							</li>
						))
					}
					<a href="/login" className="py-2 px-6 bg-[--fg-color] rounded-lg text-white">Login</a>
				</ul>
			</div>
		</nav>
	);
}
