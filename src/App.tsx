import React from 'react';
import Header from "./components/features/Header/Header";
import Footer from "./components/features/Footer/Footer";
import FirstScreen from "./components/features/FirstScreen/FirstScreen";
import LastArticles from "./components/features/LastArticles/LastArticles";

function App() {
    return (
        <>
            <Header/>
            <main>
                <FirstScreen/>
                <LastArticles/>
            </main>
            <Footer/>
        </>
    );
}

export default App;