import { Routes, Route } from 'react-router-dom'

import BodyNews from './Components/BodyNews/BodyNews';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import SinglePageNews from './Components/SinglePageNews/SinglePageNews';



const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<BodyNews />} />
					<Route path=":id" element={<BodyNews />} />
					<Route path="news/:id" element={<SinglePageNews />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div >
	);
}

export default App;
