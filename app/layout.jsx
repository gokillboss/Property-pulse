import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Property Pulse | Find The Perfect Rental ',
    description : 'Find the perfect rental property in your area. Property Pulse is the best place to find your next rental property. Search for apartments, houses, condos, and more.',
    keywords: 'rental property, apartments, houses, condos, duplexes, lofts, studios',

}



const MainLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}

export default MainLayout
