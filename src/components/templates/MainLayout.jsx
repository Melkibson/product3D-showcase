import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <main className="app transition-all ease-in">
            {children}
        </main>
    );
}

export default MainLayout
