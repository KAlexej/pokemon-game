import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import LayoutBG from './assets/bg1.jpg';

function App() {
    const Title = 'This is title';
    const Desc = 'This is Description!';
    const colorBg = 'red';
    return (
        <>
            <Header title={Title} desc={Desc} />
            <Layout title={Title} desc={Desc} urlBg={LayoutBG}/>
            <Layout title={Title} desc={Desc} colorBg={colorBg}/>
            <Layout title={Title} desc={Desc} urlBg={LayoutBG}/>
            <Footer/>
        </>
    );
}

export default App;
