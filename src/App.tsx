import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./route/route";
import { paths } from "./route/path";

function App() {
	return (
		<div className="font-dmSans">
			<Routes>
				<Route path="/" element={<Navigate to={paths.login} />} />
				{routes.map(({ title, path, layout: Layout, component: Component }) => (
					<Route
						key={title}
						path={path}
						element={
							<Layout>
								<Component />
							</Layout>
						}
					/>
				))}
			</Routes>
		</div>
	);
}

export default App;
